# PRD - Clínica Dentária Marina Macedo

## Original Problem Statement
Modificações específicas no site da clínica dentária.

## Architecture
- **Frontend**: React 19 com HashRouter, i18next (PT/EN/FR), Framer Motion, TailwindCSS
- **Routing**: Hash-based routing (#/)
- **Translations**: JSON files em /src/i18n/locales/

## What's Been Implemented (Feb 2026)

### Iteração 1-2 ✅
- Ortodontia com alinhadores invisíveis
- Cirurgia Oral com indicações expandidas
- Próteses (Fixa + Removível) na mesma página
- Implantologia com estrutura Primadent
- Oclusão (TMJ) expandida

### Iteração 3 ✅ (Atual)

#### Casos Clínicos Reais - Implantologia
- **Implante Unitário Anterior**: Substituição de incisivo central
- **Ponte sobre Implantes**: Reabilitação de 3 dentes posteriores
- **Reabilitação Total**: Protocolo All-on-4 com carga imediata
- Todos os casos com imagens antes/depois

#### Destaque Removido
- Ortodontia já não tem badge "Destaque" na lista de serviços
- Todos os serviços têm agora o mesmo estilo visual

#### Traduções Completas (PT/EN/FR)
Todas as secções específicas dos serviços traduzidas:
- **Ortodontia**: Alinhadores invisíveis, benefícios, como funcionam
- **Cirurgia Oral**: Indicações clínicas
- **Próteses**: Fixa e Removível com vantagens
- **Implantologia**: O que são implantes, biocompatibilidade, indicações, vantagens, casos clínicos
- **Oclusão (TMJ)**: DTM, sintomas, opções de tratamento

### Files Modified
- `/app/src/pages/ServiceDetailPage.jsx` - Casos clínicos + traduções
- `/app/src/pages/ServicesPage.jsx` - Destaque removido
- `/app/src/i18n/locales/pt.json` - Traduções PT completas
- `/app/src/i18n/locales/en.json` - Traduções EN completas
- `/app/src/i18n/locales/fr.json` - Traduções FR completas
- `/app/src/components/layout/LanguageSwitch.jsx` - z-index corrigido

## User Personas
- Pacientes da clínica à procura de informação sobre serviços
- Novos pacientes a pesquisar tratamentos dentários
- Profissionais de saúde parceiros
- Pacientes internacionais (EN/FR)

## Core Requirements (Static)
- Website informativo para clínica dentária
- Multi-idioma (PT, EN, FR)
- Design responsivo e elegante
- Secções de casos clínicos para demonstrar resultados

## Backlog (P0/P1/P2)

### P0 - Critical (Done ✅)
- [x] Casos clínicos reais para Implantologia
- [x] Destaque removido da Ortodontia
- [x] Traduções PT/EN/FR completas

### P1 - Important (Pending)
- [ ] Substituir imagens placeholder por imagens reais da clínica
- [ ] Adicionar mais casos clínicos quando disponíveis

### P2 - Nice to Have
- [ ] Formulário de diagnóstico online
- [ ] Chat WhatsApp integrado
- [ ] FAQ expandido para cada serviço

## Next Tasks
1. Aguardar imagens reais da clínica para substituir placeholders
2. Adicionar mais casos clínicos quando disponíveis
3. Possível integração de WhatsApp Business
