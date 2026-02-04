# PRD - Clínica Dentária Marina Macedo

## Original Problem Statement
Modificações específicas no site da clínica dentária:

### Iteração 1:
- Separar Prótese Fixa e Removível
- Galeria de casos ortodônticos
- Casos clínicos para cada serviço

### Iteração 2 (Atual):
- **Ortodontia**: Alinhadores invisíveis com texto sobre material termoplástico biocompatível, benefícios, modelos de gesso
- **Cirurgia Oral**: Ampliar fotos com texto específico sobre indicações
- **Próteses**: Juntar Fixa e Removível numa única página com texto e imagens
- **Implantologia**: Estrutura Primadent com texto sobre implantes, biocompatibilidade, osseointegração
- **Oclusão (TMJ)**: Expandir texto e imagem sobre DTM

## Architecture
- **Frontend**: React 19 com HashRouter, i18next (PT/EN/FR), Framer Motion, TailwindCSS
- **Routing**: Hash-based routing (#/)
- **Translations**: JSON files em /src/i18n/locales/

## What's Been Implemented (Feb 2026)

### ✅ Ortodontia
- Secção "Alinhadores Invisíveis" com texto sobre material termoplástico biocompatível
- Benefícios: Estética, Imperceptíveis, Conforto, Eficiência
- Secção "Modelos de Gesso - Planeamento" com imagens
- Galeria de 7 casos clínicos (antes/depois)
- Badge "Destaque" na lista de serviços

### ✅ Cirurgia Oral
- Texto ampliado com indicações: Quistos, Lesões mucosa/língua, Dentes para extrair, Fibromas, Cirurgia preparação protética, Gengivoplastias, Correção retrações gengivais
- Imagens ampliadas de casos clínicos

### ✅ Próteses
- Página única com Prótese Fixa e Removível
- Secções separadas com texto e imagens de exemplos
- Vantagens listadas para cada tipo

### ✅ Implantologia
- Estrutura inspirada no Primadent
- Texto sobre implantes de titânio, biocompatibilidade, osseointegração
- Secções de indicações: 1 dente em falta, Vários dentes em falta, Todos os dentes
- Lista de 5 vantagens dos implantes
- Placeholder para casos clínicos futuros

### ✅ Oclusão (TMJ)
- Texto expandido sobre DTM e dor orofacial
- Imagem ilustrativa grande
- Secção "Sintomas Comuns" com 8 sintomas
- Secção "Opções de Tratamento" com 4 tratamentos

### Files Modified
- `/app/src/pages/ServiceDetailPage.jsx` - Estrutura completa para cada serviço
- `/app/src/pages/ServicesPage.jsx` - Destaque ortodontia
- `/app/src/i18n/locales/pt.json` - Traduções PT
- `/app/src/i18n/locales/en.json` - Traduções EN
- `/app/src/i18n/locales/fr.json` - Traduções FR

## User Personas
- Pacientes da clínica à procura de informação sobre serviços
- Novos pacientes a pesquisar tratamentos dentários
- Profissionais de saúde parceiros

## Core Requirements (Static)
- Website informativo para clínica dentária
- Multi-idioma (PT, EN, FR)
- Design responsivo e elegante
- Secções de casos clínicos para demonstrar resultados

## Backlog (P0/P1/P2)

### P0 - Critical (Done ✅)
- [x] Ortodontia: Alinhadores invisíveis + modelos gesso + casos clínicos
- [x] Cirurgia Oral: Indicações + imagens ampliadas
- [x] Próteses: Página única com Fixa e Removível
- [x] Implantologia: Estrutura Primadent
- [x] Oclusão: Texto expandido + sintomas + tratamentos

### P1 - Important (Pending)
- [ ] Substituir imagens placeholder por imagens reais da clínica
- [ ] Adicionar casos clínicos reais quando disponíveis
- [ ] Adicionar vídeos testemunhos (como no Primadent)

### P2 - Nice to Have
- [ ] Formulário de diagnóstico online (como Primadent)
- [ ] Chat WhatsApp integrado
- [ ] FAQ expandido para cada serviço

## Next Tasks
1. Aguardar imagens reais da clínica para substituir placeholders
2. Adicionar casos clínicos de Implantologia quando disponíveis
3. Possível adição de mais casos à galeria de Ortodontia
