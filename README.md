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

## 📋 **Distribuição das Funcionalidades**


<details> 
  
<summary>Lista das Funcionalidades</summary>

**Cadastrar/Editar Aula da Modalidade com conflito de agenda**
**Regra de negócio:** Não pode haver duas aulas no mesmo horário com o mesmo professor ou na mesma sala.
**Responsável:** Leonardo Matos

---

**Reserva de Aula com Lista de Espera e promoção automática**
**Regra de negócio:** Caso a turma esteja cheia, entrar em lista de espera e ser promovido automaticamente em caso de desistência.
**Responsável:** Vinícius de Andrade

---

**Cupom/Benefícios empilháveis**
**Regra de negócio:** Um aluno pode aplicar múltiplos cupons, e o cálculo deve ser feito por ordem de aplicação (Decorator).
**Responsável:** Vinícius de Andrade

---

**Cancelamento de Reserva com política de reembolso**
**Regra de negócio:** O valor ou crédito devolvido depende do tempo de antecedência em relação ao início da aula (Template Method).
**Responsável:** Thomaz Lima

---

**Avaliação de Professores**
**Regra de negócio:** Avaliação só pode ser registrada por quem participou da aula, e cada aluno pode avaliar apenas uma vez por aula.
**Responsável:** Gustavo Mourato

---

**Criação em Lote de Aulas Recorrentes por Modalidade**
**Regra de negócio:** A criação em lote deve percorrer um intervalo de dias e horários aplicando as mesmas regras de conflito de agenda.
**Responsável:** Leonardo Matos

---

**Controle de frequência e política de bloqueio por faltas**
**Regra de negócio:** Se o aluno acumular 3 faltas consecutivas sem cancelamento prévio, seu acesso às reservas fica bloqueado por 7 dias.
**Responsável:** Thomaz Lima

---

**Criação e Gerenciamento de Treinos**
**Regra de negócio:** O aluno só pode avançar de fase se cumprir requisitos de exercícios e avaliação mínima do professor.
**Responsável:** Gustavo Mourato

---

**Gestão e Participação em Guildas**
**Regra de negócio:** Cada presença/treino concluído gera pontos; ranking é zerado a cada rodada semanal.
**Responsável:** Paulo Rosado

---

**Pontuação e Torneios de Guilda**
**Regra de negócio:** Estratégia define como pontos são calculados (Strategy), e conquistas são concedidas no fechamento da rodada conforme desempenho.
**Responsável:** Paulo Rosado

---

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
