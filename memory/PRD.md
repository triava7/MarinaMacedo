# PRD - Clínica Dentária Marina Macedo

## Original Problem Statement
Modificações específicas no site da clínica dentária:
- **Cirurgia Oral**: Criar secção de 1 caso de estudo com imagens clínicas
- **Ortodontia**: Criar galeria de vários casos clínicos com destaque visual superior
- **Próteses**: Separar em Prótese Fixa e Removível, 1 caso clínico para cada
- **Implantologia**: Adicionar imagens de implantes e secção de casos clínicos
- **Oclusão (DTM)**: Inserir imagem ilustrativa de dor facial/maxilar com foco clínico

## Architecture
- **Frontend**: React 19 com HashRouter, i18next (PT/EN/FR), Framer Motion, TailwindCSS
- **Routing**: Hash-based routing (#/)
- **Translations**: JSON files em /src/i18n/locales/

## What's Been Implemented (Jan 2026)

### ✅ Completed Features
1. **Próteses Separadas**
   - Criado `prosthetics-fixed` (Prótese Fixa)
   - Criado `prosthetics-removable` (Prótese Removível)
   - Cada uma com caso clínico próprio

2. **Ortodontia - Destaque Visual**
   - Badge "Destaque" na lista de serviços
   - Galeria de 6 casos clínicos com antes/depois
   - Design diferenciado com gradient e bordas destacadas

3. **Cirurgia Oral - Caso de Estudo**
   - Secção "Caso Clínico" com correção de retração gengival
   - 3 imagens clínicas (antes, durante, depois)

4. **Implantologia - Imagens e Casos**
   - Secção "Sistemas de Implantes" com 3 imagens
   - Secção de casos clínicos (placeholders para imagens futuras)

5. **Oclusão (TMJ) - Ilustração Clínica**
   - Secção "Compreender a DTM" com imagem ilustrativa
   - Lista de sintomas e foco clínico

### Files Modified
- `/app/src/pages/ServiceDetailPage.jsx` - Estrutura completa para casos clínicos
- `/app/src/pages/ServicesPage.jsx` - Separação de próteses + destaque ortodontia
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
- [x] Separar Prótese Fixa e Removível
- [x] Galeria de casos ortodônticos
- [x] Casos clínicos para cada serviço especificado
- [x] Ilustração DTM

### P1 - Important (Pending)
- [ ] Substituir imagens placeholder por imagens reais da clínica
- [ ] Adicionar mais casos clínicos quando disponíveis

### P2 - Nice to Have
- [ ] Modal de galeria com zoom nas imagens
- [ ] Animações de transição entre imagens antes/depois
- [ ] Formulário de agendamento integrado

## Next Tasks
1. Aguardar imagens reais da clínica para substituir placeholders
2. Configurar casos clínicos de Implantologia quando imagens disponíveis
3. Possível adição de mais casos à galeria de Ortodontia
