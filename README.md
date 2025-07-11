# 💈 FSW Barber

Sistema de agendamentos para barbearias, desenvolvido com **Next.js**, **Prisma** e **TailwindCSS**, com foco em boas práticas, autenticação segura e design moderno.

[🔗 Acesse a versão online aqui](https://fsw-barber-six-phi.vercel.app/)

## 🚀 Tecnologias Utilizadas

- **Next.js 14**  
- **React 18**  
- **TypeScript**  
- **TailwindCSS** + **shadcn/ui**  
- **NextAuth** (autenticação com JWT + Prisma Adapter)  
- **Prisma ORM** + SQLite/PostgreSQL  
- **React Hook Form** + **Zod**  
- **Radix UI**  
- **Lucide React** (ícones)  
- **Sonner** (notificações)  
- **Husky**, **ESLint**, **Conventional Commits**

---

## 📦 Instalação Local

### 1. Clone o repositório

```bash
git clone https://github.com/ValfranJr/FSW-BARBER.git
cd fsw-barber
````
### 2. Instale as dependências

npm install

### 3. Configure o ambiente

DATABASE_URL="file:./dev.db"
GOOGLE_CLIENT_ID=" SUA GOOGLE CLIENT ID"
GOOGLE_CLIENT_SECRET=" SUA GOOGLE CLIENT SECRET"
NEXTAUTH_SECRET="sua_chave_secreta"
NEXTAUTH_URL="http://localhost:3000"

###4. Configure o Banco de dados

npx prisma migrate dev --name init
npx prisma db seed

### 5. Rode o projeto

npm run dev

🔒 Funcionalidades

Cadastro e login com autenticação via NextAuth

Painel para agendamento de serviços

Gerenciamento de horários disponíveis

Layout moderno com dark mode

Formulários com validação robusta

Deploy contínuo via Vercel

✅ Padrões e Boas Práticas

Commits seguindo Conventional Commits

Versionamento com Husky + Git Hooks

Código limpo, tipado e validado com Zod

Componentes desacoplados e reutilizáveis com shadcn/ui


