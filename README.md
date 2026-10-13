# VOID AI

This repository contains the scaffold for VOID AI — a premium AI platform UI and application.

Goals:
- Vite + React + TypeScript frontend with Tailwind CSS styled to VOID AI brand
- Supabase integration for authentication and database
- Small server to proxy AI provider requests and generate exports
- Database migrations for projects, conversations, agents, automations

Local development

1. Install dependencies

   npm install

2. Copy .env.example to .env and fill values

3. Start the frontend dev server

   npm run dev

4. Start the backend server (in a separate terminal)

   npm run server:start

Environment variables

See .env.example

Next steps
- Implement provider integration in server/index.ts (OpenAI, Anthropic...)
- Wire Supabase auth and database
- Implement website builder preview and export

