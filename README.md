<p align="center">
  <img
    src="https://img.shields.io/badge/Status-Em%20desenvolvimento-green?style=flat-square"
    alt="Status"
  />
</p>

<p align="center">
  <img
    src="https://img.shields.io/github/repo-size/Thomazrlima/ForgeFit?style=flat"
    alt="Repository Size"
  />
  <img
    src="https://img.shields.io/github/languages/count/Thomazrlima/ForgeFit?style=flat&logo=python"
    alt="Language Count"
  />
  <img
    src="https://img.shields.io/github/commit-activity/t/Thomazrlima/ForgeFit?style=flat&logo=github"
    alt="Commit Activity"
  />
  <a href="LICENSE.md"
    ><img
      src="https://img.shields.io/github/license/Thomazrlima/ForgeFit"
      alt="License"
  /></a>
</p>

<img width="1913" height="674" alt="Banner" src="https://github.com/user-attachments/assets/2409e01e-1609-4c3b-9a61-9ef0f99b6dc8" />

O **ForgeFit** é um sistema de gerenciamento de academia, projetado para otimizar a administração de alunos, professores, treinos e modalidades. Desenvolvido com **Design Patterns**, o sistema oferece uma arquitetura robusta e flexível, garantindo escalabilidade e manutenibilidade.

https://github.com/user-attachments/assets/db85e843-5f2e-4016-97b2-3882f07513c1

## **Funcionalidades Principais**  

### **📅 Gestão de Aulas Inteligente**  
- Agenda automatizada com **detecção de conflitos**  
- Sistema de reservas com **lista de espera dinâmica**  
- Criação de **aulas recorrentes em lote**  

### **💰 Sistema de Benefícios Flexível**  
- Combinação de **cupons e promoções empilháveis**  

### **🔄 Políticas Personalizáveis**  
- Múltiplas estratégias para **cancelamentos e reembolsos**  

### **📊 Avaliação e Performance**  
- Mecanismos avançados para **avaliação de instrutores**  
- Controle de frequência com **consequências automáticas**

> [!WARNING]
> As demais funcionalidades serão detalhadas com o decorrer do período

## 📋 Histórias de Usuário (User Stories)

<details>

<summary>Histórias</summary>

**Como coordenador quero cadastrar/editar aulas de modalidade vinculadas a professores**
para manter a grade atualizada sem choques de agenda.
**Regra de negócio:** Não pode haver duas aulas no mesmo horário com o mesmo professor ou na mesma sala.
**Responsável:** Leonardo Matos

---

**Como aluno quero reservar uma aula**
para garantir minha participação sem risco de lotação.
**Regra de negócio:** Caso a turma esteja cheia, entrar em lista de espera e ser promovido automaticamente em caso de desistência.
**Responsável:** Vinícius de Andrade

---

**Como administrador quero oferecer cupons ou benefícios empilháveis**
para estimular a adesão a modalidades.
**Regra de negócio:** Um aluno pode aplicar múltiplos cupons, e o cálculo deve ser feito por ordem de aplicação (Decorator).
**Responsável:** Vinícius de Andrade

---

**Como aluno quero cancelar uma reserva**
para liberar vaga e seguir regras de reembolso definidas pela política.
**Regra de negócio:** O valor ou crédito devolvido depende do tempo de antecedência em relação ao início da aula (Template Method).
**Responsável:** Thomaz Lima

---

**Como aluno quero avaliar professores ao final da aula**
**Regra de negócio:** Avaliação só pode ser registrada por quem participou da aula, e cada aluno pode avaliar apenas uma vez por aula.
**Responsável:** Gustavo Mourato

---

**Como coordenador quero criar aulas recorrentes em lote**
para agilizar a programação semanal/mensal.
**Regra de negócio:** A criação em lote deve percorrer um intervalo de dias e horários aplicando as mesmas regras de conflito de agenda.
**Responsável:** Leonardo Matos

---

**Como administrador quero controlar a frequência dos alunos**
para aplicar política de bloqueio em caso de faltas recorrentes.
**Regra de negócio:** Se o aluno acumular 3 faltas consecutivas sem cancelamento prévio, seu acesso às reservas fica bloqueado por 7 dias.
**Responsável:** Thomaz Lima

---

**Como professor quero criar plano de treino individual para alunos**
com etapas liberadas conforme nível e avaliações.
**Regra de negócio:** O aluno só pode avançar de fase se cumprir requisitos de exercícios e avaliação mínima do professor.
**Responsável:** Gustavo Mourato

---

**Como aluno quero participar de uma Liga de Amigos**
**Regra de negócio:** Cada presença/treino concluído gera pontos; ranking é zerado a cada rodada semanal.
**Responsável:** Paulo Rosado

---

**Como administrador da liga quero configurar estratégias de pontuação e conceder conquistas**
**Regra de negócio:** Estratégia define como pontos são calculados (Strategy), e conquistas são concedidas no fechamento da rodada conforme desempenho.
**Responsável:** Paulo Rosado

</details>

## 👥 Contribuintes 

<ul>
  <li>
    <a href="https://github.com/Thomazrlima">Thomaz Lima</a> -
    trl@cesar.school 📩
  </li>
  <li>
    <a href="https://github.com/paulorosadodev">Paulo Rosado</a> -
    phrf@cesar.school 📩
  </li>
  <li>
    <a href="https://github.com/LeoGutzeitt">Leonardo Matos</a> -
    lgbm@cesar.school 📩
  </li>
  <li>
    <a href="https://github.com/gustavoyoq">Gustavo Mourato</a> -
    gmam@cesar.school 📩
  </li>
  <li>
    <a href="https://github.com/viniciusdandrade">Vinícius de Andrade</a> - vaj@cesar.school 📩
  </li>
</ul>

<br>

<a href="https://github.com/Thomazrlima/ForgeFit/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Thomazrlima/ForgeFit" />
</a>

<br>
<br>

<div align="center">
  💪 <strong>Na ForgeFit nós não apenas levantamos Ferro, NÓS FORJAMOS FORÇA!</strong> 💪
</div>
