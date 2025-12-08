# Integração Frontend-Backend: Criar Aulas

## 📋 Visão Geral

A funcionalidade de criar aulas foi integrada entre o frontend (React) e o backend (Spring Boot), seguindo a arquitetura em camadas do projeto ForgeFit.

## 🏗️ Arquitetura

### Fluxo de Requisição

```
Frontend (React)
    ↓
CriarAula Component
    ↓
aulaService (Serviço)
    ↓
API Client (Axios)
    ↓
Backend (Spring Boot)
    ↓
AulaControlador (Presentation Layer)
    ↓
AulaServicoAplicacao (Application Layer)
    ↓
AulaRepositorio (Domain Layer)
    ↓
Banco de Dados
```

## 📁 Estrutura de Arquivos

### Frontend

- **`src/services/aulaService.ts`** - Serviço para comunicação com a API
  - `criarAula()` - Cria uma aula nova (única ou recorrente)
  - `atualizarAula()` - Atualiza uma aula existente
  - `deletarAula()` - Deleta uma aula
  - `listarAulasDoProfessor()` - Lista aulas do professor autenticado
  - `obterAula()` - Obtém detalhes de uma aula

- **`src/pages/CriarAula/index.tsx`** - Componente da página
  - Integrado com `aulaService` para requisições

- **`src/components/common/CreateClassModal/index.tsx`** - Modal de criação

### Backend

- **`AulaControlador.java`** - Controller REST (Presentation Layer)
  - `POST /api/aulas` - Criar aula
  - `PUT /api/aulas/{aulaId}` - Atualizar aula
  - `DELETE /api/aulas/{aulaId}` - Deletar aula
  - `GET /api/aulas/professor` - Listar aulas do professor

- **`CriarAulaRequest.java`** - DTO de entrada
  - Contém dados da aula enviados pelo frontend

- **`MensagemResponse.java`** - DTO de resposta
  - Retorna mensagens de sucesso/erro

- **`AulaServicoAplicacao.java`** - Serviço de Aplicação
  - Orquestra operações de aula

## 🔄 Fluxo de Criação de Aula

### 1. Frontend - Submissão do Formulário

```typescript
const handleCreateClass = async (classData: ClassFormData) => {
    // classData contém:
    // - modalidade (ex: "YOGA")
    // - espaco (ex: "SALA01_MULTIUSO")
    // - tipoAula (ex: "UNICA")
    // - capacity (ex: 20)
    // - time (ex: "19:00")
    // - classDate (para aula única) ou selectedDays + endDate (para recorrente)
    
    const aulaResponse = await aulaService.criarAula(classData, user?.id);
};
```

### 2. Service Layer (aulaService.ts)

```typescript
async criarAula(classData: any, professorId: number): Promise<AulaResponse> {
    // Converte dados do formulário para ISO 8601
    const horarioInicio = this.construirDataHora(classData, "inicio");
    const horarioFim = this.construirDataHora(classData, "fim");
    
    // Cria payload
    const payload = {
        modalidade: classData.modalidade,
        espaco: classData.espaco,
        tipoAula: classData.tipoAula,
        capacidade: classData.capacity,
        horarioInicio,
        horarioFim,
        diasDaSemana: classData.selectedDays,
        dataFim: classData.endDate
    };
    
    // Envia para o backend
    return api.post('/aulas', payload);
}
```

### 3. Backend - Controller

```java
@RequestMapping(method = POST)
ResponseEntity<?> criarAula(
    @RequestBody CriarAulaRequest requestDto,
    Authentication authentication
) {
    // Extrai ID do professor
    ProfessorId professorId = extrairProfessorId(authentication);
    
    // Converte dados
    LocalDateTime inicio = LocalDateTime.parse(requestDto.getHorarioInicio());
    LocalDateTime fim = LocalDateTime.parse(requestDto.getHorarioFim());
    
    // Chama serviço de aplicação
    String mensagem = aulaServicoAplicacao.criarAulaUnicaComMensagem(
        professorId,
        Modalidade.valueOf(requestDto.getModalidade()),
        Espaco.valueOf(requestDto.getEspaco()),
        requestDto.getCapacidade(),
        inicio,
        fim
    );
    
    return ResponseEntity.ok(new MensagemResponse(mensagem));
}
```

### 4. Application Layer

O `AulaServicoAplicacao` delega para a camada de domínio, que valida regras de negócio:
- Verifica conflitos de horário
- Valida capacidade
- Cria recorrências

## 📊 Modelos de Dados

### ClassFormData (Frontend)
```typescript
interface ClassFormData {
    modalidade: string;           // YOGA, PILATES, etc.
    tipoAula: TipoAula;           // UNICA, SEMANAL, MENSAL, etc.
    time: string;                 // HH:mm
    capacity: number;             // ex: 20
    espaco: string;               // SALA01_MULTIUSO, etc.
    classDate?: string;           // Para aula única
    startDate?: string;           // Para recorrente
    endDate?: string;             // Para recorrente
    selectedDays?: number[];      // 0-6 (Dom-Sab)
}
```

### CriarAulaRequest (Backend DTO)
```java
public class CriarAulaRequest {
    private String modalidade;        // YOGA, PILATES, etc.
    private String espaco;            // SALA01_MULTIUSO, etc.
    private String tipoAula;          // UNICA, SEMANAL, etc.
    private Integer capacidade;       // ex: 20
    private String horarioInicio;     // ISO 8601
    private String horarioFim;        // ISO 8601
    private int[] diasDaSemana;       // Para recorrentes
    private String dataFim;           // Para recorrentes (ISO 8601)
}
```

### AulaResponse
```typescript
interface AulaResponse {
    id: number;
    modalidade: Modalidade;
    espaco: Espaco;
    capacidade: number;
    horarioInicio: string;
    horarioFim: string;
    professorId: number;
    status: string;
}
```

## 🔐 Autenticação

A requisição é enviada com um token Bearer no header:
```
Authorization: Bearer {token}
```

O token é gerenciado pelo `authService` e armazenado em `localStorage`.

## ✅ Validações

### Frontend
- Validação de campos obrigatórios no formulário
- Validação de formato de data/hora
- Validação de capacidade (positivo)

### Backend
- Validação de dados da DTO
- Verificação de conflitos de horário
- Validação de permissões (professor proprietário)
- Validação de regras de negócio (dias válidos, datas válidas)

## 🚀 Endpoints da API

### Criar Aula
```
POST /api/aulas
Content-Type: application/json
Authorization: Bearer {token}

{
    "modalidade": "YOGA",
    "espaco": "SALA01_MULTIUSO",
    "tipoAula": "UNICA",
    "capacidade": 20,
    "horarioInicio": "2024-01-15T19:00:00",
    "horarioFim": "2024-01-15T20:00:00"
}
```

### Atualizar Aula
```
PUT /api/aulas/{aulaId}
Content-Type: application/json
Authorization: Bearer {token}

{
    "modalidade": "YOGA",
    "espaco": "SALA01_MULTIUSO",
    "tipoAula": "UNICA",
    "capacidade": 20,
    "horarioInicio": "2024-01-15T20:00:00",
    "horarioFim": "2024-01-15T21:00:00"
}
```

### Deletar Aula
```
DELETE /api/aulas/{aulaId}
Authorization: Bearer {token}
```

### Listar Aulas do Professor
```
GET /api/aulas/professor
Authorization: Bearer {token}
```

## ⚙️ Configuração

### URL Base da API
A URL base é configurada em `src/services/api.ts`:
```typescript
const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
```

Ajuste conforme necessário para seu ambiente.

## 🛠️ Como Usar

### 1. Instalar Dependências (se necessário)
```bash
npm install axios framer-motion lucide-react
```

### 2. Configurar Autenticação
Certifique-se de que o token está sendo salvo corretamente:
```typescript
// Após login bem-sucedido
localStorage.setItem("@forgefit:token", tokenDoServidor);
```

### 3. Usar no Componente
```typescript
import aulaService from "../../services/aulaService";

// Criar aula
const aula = await aulaService.criarAula(formData, professorId);

// Atualizar aula
await aulaService.atualizarAula(aulaId, novosDados);

// Deletar aula
await aulaService.deletarAula(aulaId);

// Listar aulas
const aulas = await aulaService.listarAulasDoProfessor();
```

## 🐛 Tratamento de Erros

### Frontend
```typescript
try {
    await aulaService.criarAula(data, professorId);
    toast.success("Aula criada com sucesso!");
} catch (error) {
    if (error.response?.status === 401) {
        // Redirecionar para login
    } else if (error.response?.status === 409) {
        // Conflito de horário
    } else {
        toast.error(error.message);
    }
}
```

### Backend
Os controllers retornam:
- `200 OK` - Operação bem-sucedida
- `400 Bad Request` - Dados inválidos ou conflito
- `401 Unauthorized` - Usuário não autenticado
- `500 Internal Server Error` - Erro do servidor

## 📝 Próximos Passos

1. **Teste de Integração**: Executar testes end-to-end
2. **Melhorias de UX**: Adicionar feedback de carregamento mais detalhado
3. **Validações Adicionais**: Implementar validações de conflito em tempo real
4. **Cache**: Implementar cache local de aulas
5. **Offline Support**: Adicionar suporte a operações offline com sincronização posterior

## 📞 Suporte

Para dúvidas sobre a integração, consulte:
- Documentação de Testes: `dominio/src/test/java/br/com/forgefit/dominio/aula/CriarAulasFuncionalidade.java`
- Especificações de Aula: `dominio/src/main/java/br/com/forgefit/dominio/aula/`
