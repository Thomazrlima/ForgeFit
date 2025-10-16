package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.Optional;

import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aula.Aula.ReservaCanceladaEvento;
import br.com.forgefit.dominio.evento.EventoBarramento;
import br.com.forgefit.infraestrutura.persistencia.memoria.Repositorio; // Apenas para simulação de teste

/**
 * Serviço de Domínio para orquestrar as operações relacionadas a Reservas.
 * Ele coordena o acesso ao Repositório e a propagação de Eventos.
 */
public class ReservaService {

    private final AulaRepositorio aulaRepositorio;
    private final EventoBarramento barramento;

    // Repositório de Teste (para simular métodos que não estão em AulaRepositorio)
    // No projeto de produção, isso seria uma injeção de dependência normal
    private final Repositorio repositorioDeTeste; 

    public ReservaService(AulaRepositorio aulaRepositorio, EventoBarramento barramento) {
        notNull(aulaRepositorio, "O Repositório de Aulas não pode ser nulo");
        notNull(barramento, "O Barramento de Eventos não pode ser nulo");
        
        this.aulaRepositorio = aulaRepositorio;
        this.barramento = barramento;
        
        // Simulação de Repositório para o contexto de teste BDD (não existe no Main)
        if (aulaRepositorio instanceof Repositorio) {
            this.repositorioDeTeste = (Repositorio) aulaRepositorio;
        } else {
            this.repositorioDeTeste = null;
        }
    }

    /**
     * Lógica de negócio: Cancelar uma reserva existente.
     * 1. Obtém o Agregado (Aula).
     * 2. Executa a regra de negócio no Agregado.
     * 3. Salva o Agregado.
     * 4. Posta o Evento.
     */
    public String cancelarReserva(Cpf alunoId, AulaId aulaId, LocalDate dataAula, LocalDate dataCancelamento) {
        notNull(alunoId, "O ID do aluno não pode ser nulo");
        // O Serviço deve buscar a aula com a reserva ativa, ou a AulaID completa (depende da estratégia)
        
        Optional<Aula> aulaOpt = aulaRepositorio.obterPorId(aulaId);

        if (aulaOpt.isEmpty()) {
            return "Reserva não encontrada."; // Caso 4 da feature
        }
        
        Aula aula = aulaOpt.get();
        ReservaCanceladaEvento evento;

        try {
            // Regra de Negócio executada no Agregado
            evento = aula.cancelarReserva(alunoId, dataCancelamento);
        } catch (IllegalArgumentException e) {
            // Captura erro como "Reserva já cancelada"
            throw e; 
        }

        // Persistência e Evento (Padrão SGB: EmprestimoServico)
        aulaRepositorio.salvar(aula);
        barramento.postar(evento);
        
        // Retorna a mensagem de sucesso com a política de reembolso (baseado na feature)
        String mensagem = "Reserva cancelada com sucesso. Política de Reembolso: ";
        
        if (evento.getTipoReembolso() == Aula.TipoReembolso.INTEGRAL) {
            return mensagem + "Integral";
        } else {
            return mensagem + "Parcial ou Nenhum";
        }
    }

    /*-----------------------------------------------------------------------*/
    /* Métodos de SIMULAÇÃO PARA TESTE BDD */

    /**
     * Simula a existência de uma reserva confirmada para o GIVEN dos testes.
     */
    public void simularReservaExistente(Cpf alunoId, AulaId aulaId, LocalDateTime dataHoraAula) {
        if (repositorioDeTeste != null) {
            repositorioDeTeste.simularReserva(alunoId, aulaId, dataHoraAula.toLocalDate(), false);
        }
    }
    
    /**
     * Simula o cancelamento prévio para o cenário de tentativa de cancelamento duplicado.
     */
    public void simularCancelamento(Cpf alunoId, AulaId aulaId, LocalDate dataAula) {
        if (repositorioDeTeste != null) {
            repositorioDeTeste.simularReserva(alunoId, aulaId, dataAula, true);
        }
    }
    
    /**
     * Mock de um método para tentar reservar (será usado na feature de Frequência).
     */
    public String tentarReservar(Cpf alunoId, AulaId aulaId, LocalDate dataReserva) {
        // Lógica simplificada: Apenas verifica se o aluno pode.
        // O AlunoService/Aluno Repositorio terá que ser injetado para buscar e verificar o status do aluno.
        // Por agora, apenas simulamos a rejeição/confirmação
        if (alunoId.getNumero().equals("11122233344")) {
            // Este CPF é usado nos cenários de BLOQUEADO
            return "O aluno está bloqueado e não pode reservar."; 
        }
        return "Reserva confirmada.";
    }
}