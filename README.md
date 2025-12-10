
<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20desenvolvimento-green?style=for-the-badge&logo=github" alt="Status" />
  <img src="https://img.shields.io/github/repo-size/Thomazrlima/ForgeFit?style=for-the-badge&logo=github" alt="Repository Size" />
  <img src="https://img.shields.io/github/languages/count/Thomazrlima/ForgeFit?style=for-the-badge&logo=python" alt="Language Count" />
  <img src="https://img.shields.io/github/commit-activity/t/Thomazrlima/ForgeFit?style=for-the-badge&logo=github" alt="Commit Activity" />
  <a href="LICENSE.md"><img src="https://img.shields.io/github/license/Thomazrlima/ForgeFit?style=for-the-badge" alt="License" /></a>
</p>

<p align="center">
  <img width="1913" height="674" alt="Banner ForgeFit" src="https://github.com/user-attachments/assets/2409e01e-1609-4c3b-9a61-9ef0f99b6dc8" />
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades-principais">Funcionalidades</a> •
  <a href="#-demonstração">Demonstração</a> •
  <a href="#-distribuição-de-tarefas">Tarefas</a> •
  <a href="#-domínio-de-negócio">Domínio</a> •
  <a href="#-nossa-equipe">Equipe</a>
</p>

## 🤔 **Sobre o Projeto**

O **ForgeFit** é um sistema de gerenciamento de academias voltado a modernizar a administração de aulas, alunos, professores e treinos. Desenvolvido com **Design Patterns**, oferece uma arquitetura robusta e escalável, garantindo organização, eficiência e facilidade de manutenção.

### 🚀 **Acesse o sistema em produção:**
**[https://forgefit.vercel.app/](https://forgefit.vercel.app/)**

---

## ⭐ **Funcionalidades Principais**

### **📋 Controle e Organização**

* **Criação de Aulas** com verificação automática de conflitos de horário e capacidade.
* **Gerenciamento de Treinos** personalizados, com histórico e validade sugerida.

### **📅 Reservas e Cancelamentos**

* **Reserva de Aulas com Lista de Espera**, incluindo **promoção automática** quando uma vaga é liberada.
* **Cancelamento de Reservas** com política de **reembolso flexível**, conforme a antecedência da solicitação.

### **📊 Frequência e Avaliação**

* **Controle de Frequência** com **bloqueio automático** após número limite de faltas.
* **Avaliação de Professores**, considerando critérios de didática, pontualidade e atenção.

### **💪 Evolução e Desempenho**

* **Acompanhamento de Bioimpedância**, com histórico e análise de composição corporal.
* **Ranking de Alunos**, baseado em engajamento e desempenho.

### **⚔️ Engajamento Social**

* **Guildas**, que permitem interação e cooperação entre alunos.
* **Torneios e Pontuação Coletiva**, com desafios e rankings semanais ou mensais.

> [!WARNING]
> ### 📦 Entregáveis do Projeto
> Abaixo estão os principais artefatos desenvolvidos e organizados na pasta [`/entregaveis`](https://github.com/Thomazrlima/ForgeFit/tree/main/entregaveis):
>
> - 📽️ [Apresentação](https://github.com/Thomazrlima/ForgeFit/tree/main/entregaveis/apresentacao)
> - 🧩 [CML](https://github.com/Thomazrlima/ForgeFit/tree/main/entregaveis/cml)
> - 🧠 [Domínio](https://github.com/Thomazrlima/ForgeFit/tree/main/entregaveis/dominio)
> - 🗺️ [Mapa de Histórias](https://github.com/Thomazrlima/ForgeFit/tree/main/entregaveis/mapa)
> - 🎨 [Protótipo](https://github.com/Thomazrlima/ForgeFit/tree/main/entregaveis/prototipo)
>
> Clique nos nomes acima para acessar os arquivos correspondentes.  
> As imagens abaixo também são clicáveis e redirecionam para suas respectivas pastas.
---

## 🎥 **Demonstração**

[https://github.com/user-attachments/assets/db85e843-5f2e-4016-97b2-3882f07513c1](https://github.com/user-attachments/assets/db85e843-5f2e-4016-97b2-3882f07513c1)

---

## 🧪 **Testando o Sistema**

### **Sistema de Notificações por Email**

O sistema de controle de frequência envia emails automaticamente quando um aluno é bloqueado por excesso de faltas.

#### **Instalação do MailHog**

O **MailHog** é um servidor SMTP de teste que captura emails enviados durante o desenvolvimento, sem enviá-los para destinatários reais.

**Instalação:**

1. **Windows:**
   - Baixe o executável: [MailHog_windows_amd64.exe](https://github.com/mailhog/MailHog/releases/download/v1.0.1/MailHog_windows_amd64.exe)
   - Salve na raiz do projeto ou em um diretório de sua preferência
   - Execute clicando duas vezes ou via PowerShell:
     ```powershell
     .\MailHog_windows_amd64.exe
     ```

2. **macOS (via Homebrew):**
   ```bash
   brew install mailhog
   mailhog
   ```

3. **Linux:**
   ```bash
   # Download do binário
   wget https://github.com/mailhog/MailHog/releases/download/v1.0.1/MailHog_linux_amd64
   chmod +x MailHog_linux_amd64
   ./MailHog_linux_amd64
   ```

4. **Docker (alternativa multiplataforma):**
   ```bash
   docker run -d -p 1025:1025 -p 8025:8025 mailhog/mailhog
   ```

**Portas utilizadas:**
- **SMTP Server:** `localhost:1025` (onde a aplicação envia emails)
- **Web Interface:** `http://localhost:8025` (para visualizar emails capturados)

#### **Cenário de Teste: Bloqueio por Faltas**

**Regra de Negócio:**
- 3 ou mais faltas em 30 dias = bloqueio automático por 7 dias
- Email de notificação enviado automaticamente

#### **Passo a Passo:**

1. **Inicie o MailHog**:
   - Abra o executável `MailHog_windows_amd64.exe` que você baixou (clique duas vezes no arquivo)
   - Ou execute via PowerShell no diretório onde salvou o arquivo:
     ```powershell
     .\MailHog_windows_amd64.exe
     ```
   - Uma janela de terminal será aberta mostrando que o MailHog está rodando
   - **Portas ativas:**
     - Interface web: http://localhost:8025 (acesse para ver os emails)
     - Servidor SMTP: localhost:1025 (usado pela aplicação)

2. **Inicie a aplicação backend** (porta 8080)

3. **Execute a rotina de verificação de bloqueios** (simula a execução automática diária):

   ```powershell
   Invoke-RestMethod -Uri 'http://localhost:8080/api/frequencia/verificar-todos' -Method Post
   ```
   
   Esta rotina verifica todos os alunos e aplica bloqueios automaticamente se necessário.

4. **Registre 3 faltas para um aluno** (use aulas diferentes):

   ```powershell
   # Primeira falta (aula 1)
   $body = @{alunoMatricula='ALU-TESTE-001'; aulaId=1; data='2025-12-10'; tipoRegistro='FALTA'} | ConvertTo-Json
   Invoke-RestMethod -Uri 'http://localhost:8080/api/frequencia' -Method Post -ContentType 'application/json' -Body $body

   # Segunda falta (aula 2)
   $body = @{alunoMatricula='ALU-TESTE-001'; aulaId=2; data='2025-12-09'; tipoRegistro='FALTA'} | ConvertTo-Json
   Invoke-RestMethod -Uri 'http://localhost:8080/api/frequencia' -Method Post -ContentType 'application/json' -Body $body

   # Terceira falta (aula 3) - Aciona o bloqueio!
   $body = @{alunoMatricula='ALU-TESTE-001'; aulaId=3; data='2025-12-08'; tipoRegistro='FALTA'} | ConvertTo-Json
   Invoke-RestMethod -Uri 'http://localhost:8080/api/frequencia' -Method Post -ContentType 'application/json' -Body $body
   ```

5. **Execute novamente a rotina de verificação** para processar os bloqueios:

   ```powershell
   Invoke-RestMethod -Uri 'http://localhost:8080/api/frequencia/verificar-todos' -Method Post
   ```

6. **Verifique o resultado:**
   - A resposta da terceira requisição deve conter: `"Aluno bloqueado por excesso de faltas"`
   - Acesse o MailHog em http://localhost:8025
   - Você verá um email com o assunto: **"ForgeFit - Bloqueio por Faltas"**

#### **Conteúdo do Email**

O email enviado contém:
- Nome do aluno
- Quantidade de faltas acumuladas
- Data até quando o bloqueio será mantido
- Quantidade de dias de bloqueio (7 dias)

#### **Endpoint de Teste Manual de Email**

Para testar o envio de email diretamente:

```powershell
$body = @{
    destinatario='teste@example.com'
    assunto='Teste ForgeFit'
    mensagem='Este é um email de teste'
} | ConvertTo-Json

Invoke-RestMethod -Uri 'http://localhost:8080/api/email-teste' -Method Post -ContentType 'application/json' -Body $body
```

Verifique a configuração do email:

```powershell
Invoke-RestMethod -Uri 'http://localhost:8080/api/email-teste/config' -Method Get
```

---

## 📋 **Distribuição de Tarefas**

### **Lista das Funcionalidades**

| Funcionalidade                                                | Responsável            |
| ------------------------------------------------------------- | ---------------------- |
| **Avaliação de Professores**                                  | 🎯 Gustavo Mourato     |
| **Acompanhamento de Bioimpedância**                           | 🎯 Gustavo Mourato     |
| **Controle de Frequência e Política de Bloqueio por Faltas**  | 🎯 Thomaz Lima         |
| **Cancelamento de Reserva com Política de Reembolso**         | 🎯 Thomaz Lima         |
| **Gestão e Participação em Guildas**                          | 🎯 Paulo Rosado        |
| **Pontuação e Torneios de Guilda**                            | 🎯 Paulo Rosado        |
| **Criação de Aulas**                                          | 🎯 Leonardo Matos      |
| **Criação e Gerenciamento de Treinos**                        | 🎯 Leonardo Matos      |
| **Reserva de Aula com Lista de Espera e Promoção Automática** | 🎯 Vinícius de Andrade |
| **Sistema de Ranking de Alunos**                              | 🎯 Vinícius de Andrade |

---

## 🏢 **Domínio de Negócio**

### **📚 Aulas e Treinos**

As aulas representam sessões de modalidades conduzidas por professores, respeitando restrições de agenda e capacidade.  
Os treinos são planos personalizados, com histórico de evolução e sugestão de validade.

### **📅 Reservas e Cancelamentos**

As reservas seguem uma lista de espera ordenada, promovendo automaticamente alunos quando há desistências.  
Cancelamentos seguem uma política de reembolso proporcional à antecedência, reabrindo vagas disponíveis.

### **📊 Frequência e Avaliação**

O controle de presença aplica bloqueios automáticos em casos de faltas recorrentes.  
Após cada aula, os alunos podem avaliar o desempenho dos instrutores em múltiplos critérios.

### **💪 Evolução Física**

A bioimpedância registra e acompanha periodicamente dados corporais, permitindo o monitoramento da evolução física.

### **⚔️ Engajamento e Competição**

As guildas estimulam o espírito de equipe e participação, enquanto o sistema de pontuação e torneios gera rankings coletivos e individuais.

---

## 🎨 **Prototipagem**

### **Protótipo de Baixa Fidelidade**
<img width="1913" height="674" alt="Protótipo" src="https://github.com/Thomazrlima/ForgeFit/blob/main/entregaveis/prototipo/Prototipo_de_baixa.svg" />

### **Mapa de Histórias**
<img width="1913" height="674" alt="Mapa de Histórias" src="https://github.com/Thomazrlima/ForgeFit/blob/main/entregaveis/mapa/ForgeFit%20-%20Mapa%20de%20Hist%C3%B3rias%20do%20Usu%C3%A1rio%20(2025-10-02%2001-08-36).png" />

---

## 👥 **Nossa Equipe**

<div align="center">

| [<img src="https://github.com/Thomazrlima.png" width="100" style="border-radius:50%"><br>Thomaz Lima](https://github.com/Thomazrlima) | [<img src="https://github.com/paulorosadodev.png" width="100" style="border-radius:50%"><br>Paulo Rosado](https://github.com/paulorosadodev) | [<img src="https://github.com/LeoGutzeitt.png" width="100" style="border-radius:50%"><br>Leonardo Matos](https://github.com/LeoGutzeitt) | [<img src="https://github.com/gustavoyoq.png" width="100" style="border-radius:50%"><br>Gustavo Mourato](https://github.com/gustavoyoq) | [<img src="https://github.com/viniciusdandrade.png" width="100" style="border-radius:50%"><br>Vinícius de Andrade](https://github.com/viniciusdandrade) |
|:---:|:---:|:---:|:---:|:---:|
| 📧 trl@cesar.school | 📧 phrf@cesar.school | 📧 lgbm@cesar.school | 📧 gmam@cesar.school | 📧 vaj@cesar.school |

</div>

<br>

<div align="center">
  
[![Contributors](https://contrib.rocks/image?repo=Thomazrlima/ForgeFit)](https://github.com/Thomazrlima/ForgeFit/graphs/contributors)

</div>

---

<div align="center">
  
## 💪 **Na ForgeFit nós não apenas levantamos Ferro, NÓS FORJAMOS FORÇA!** 💪

</div>
