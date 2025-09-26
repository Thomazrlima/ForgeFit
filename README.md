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

- **Reserva de Aula com Lista de Espera e Promoção Automática**  
  **Responsável:** Vinícius de Andrade  

- **Cupom/Benefícios Empilháveis**  
  **Responsável:** Vinícius de Andrade  

- **Cancelamento de Reserva com Política de Reembolso**  
  **Responsável:** Thomaz Lima  

- **Avaliação de Professores**  
  **Responsável:** Gustavo Mourato  

- **Criação em Lote de Aulas Recorrentes por Modalidade**  
  **Responsável:** Leonardo Matos  

- **Controle de Frequência e Política de Bloqueio por Faltas**  
  **Responsável:** Thomaz Lima  

- **Criação e Gerenciamento de Treinos**  
  **Responsável:** Gustavo Mourato  

- **Gestão e Participação em Guildas**  
  **Responsável:** Paulo Rosado  

- **Pontuação e Torneios de Guilda**  
  **Responsável:** Paulo Rosado  

- **Acompanhamento de Bioimpedância**  
  **Responsável:** Gustavo Mourato  

- **Sistema de Ranking de Alunos**  
  **Responsável:** Vinícius de Andrade  

- **Criação de Aulas**  
  **Responsável:** Leonardo Matos  

</details>

<details> 
  
<summary>Domínio de Negócio da Academia</summary>

A rotina da academia organiza-se em torno de aulas, treinos e da interação entre seus membros, com regras claras para garantir a previsibilidade e a evolução de cada aluno.

---

## 📚 Criação de Aulas
A aula é uma sessão agendada de uma modalidade, conduzida por um professor em um espaço com capacidade definida.  
A criação de aulas respeita o conflito de agenda, onde um professor ou espaço não pode ser alocado em horários sobrepostos.  
O professor pode oferecer aulas recorrentes, podendo cancelar uma recorrência ou todas.

---

## 📝 Reserva de Aula, Lista de Espera e Promoção
A reserva garante a vaga do aluno em uma aula.  
Quando a capacidade máxima de uma aula é atingida, os próximos alunos interessados integram uma **lista de espera ordenada**.  
Sempre que uma vaga é liberada, a promoção ocorre de forma automática:  
- O primeiro aluno da fila é convidado a ocupar a vaga dentro de uma janela de tempo para aceite.  
- Se o prazo expirar, o convite é estendido ao próximo da lista.  

---

## ❌ Cancelamento de Reserva e Política de Reembolso
Caso um aluno cancele sua reserva, a **política de reembolso** define o percentual de crédito a ser devolvido, com base na antecedência.  
Uma vaga liberada por cancelamento reativa o processo de **promoção na lista de espera**, visando manter a ocupação da aula.

---

## 📊 Frequência e Política de Bloqueio por Faltas
A frequência de cada aluno em uma aula é registrada como **presença** ou **falta**.  
Um padrão de ausências recorrentes dentro de uma janela móvel aciona a **política de bloqueio por faltas**, que restringe temporariamente a possibilidade de novas reservas para aquele aluno.

---

## 🏋️ Criação e Gerenciamento de Treinos
O **plano de treino** é elaborado por um professor para um aluno específico.  
Ele detalha a rotina a ser seguida, organizada por dia, especificando quais exercícios devem ser realizados e em quantas repetições.  

O professor pode associar ao plano uma sugestão de validade, indicando o período em que aquela rotina de treinos é recomendada.  
A atualização do treino ocorre quando o professor cria um novo plano para o aluno; neste momento, o novo plano substitui o anterior, que é mantido no histórico de evolução do aluno.

---

## ⚖️ Acompanhamento de Bioimpedância
O acompanhamento físico consiste no registro periódico das avaliações dos alunos.  
São registrados tanto os dados da **bioimpedância** (como percentual de gordura e massa muscular) quanto medidas corporais, como a circunferência de braços, cintura e outras.  

O conjunto desses dados compõe um **histórico completo**, permitindo que o próprio aluno acompanhe sua evolução física ao longo do tempo. 

---

## ⭐ Avaliação de Professores
Após cada aula, os alunos podem avaliar os professores com base em métricas de **didática**, **atenção** e **pontualidade**, além de poderem deixar comentários.  
Esse retorno é um insumo para a **gestão de qualidade da academia**.

---

## 🛡️ Formação e Participação em Guildas
As **guildas** são grupos formados por alunos, que funcionam como um mecanismo de **check-in social** para treinos e aulas.  
Os alunos podem criar suas próprias guildas ou entrar em grupos existentes.

---

## 🏆 Pontuação e Torneios de Guilda
Cada **presença confirmada (check-in)** gera uma pontuação fixa para o aluno e, consequentemente, para sua guilda.  
Essa pontuação alimenta um histórico que define quem mais acumulou pontos na semana e no mês.  

A academia pode lançar **torneios entre as guildas**, com ranking e premiações para os grupos de maior destaque.

---

## 📈 Ranking de Alunos
O **ranking de alunos** é uma classificação geral baseada no engajamento e na performance.  
A pontuação, acumulada através da frequência nas aulas, da participação nas guildas e da avaliação de performance concedida pelos professores, posiciona os alunos em **classificações semanais e mensais**, incentivando a consistência e a participação ativa.

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
