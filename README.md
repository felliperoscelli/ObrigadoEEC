# Página de Agradecimento - Palestra

## 📋 Descrição

Página de agradecimento responsiva para participantes de palestras, com espaço para vídeo do YouTube e opções de contribuição. Desenvolvida em HTML, CSS e JavaScript puro para funcionar perfeitamente no GitHub Pages.

## 📁 Arquivos Incluídos

- `index.html` - Estrutura principal da página
- `styles.css` - Estilos responsivos com gradientes e animações
- `script.js` - Funcionalidades interativas e integração com YouTube

## ✨ Funcionalidades

### 🎥 Vídeo do YouTube
- Placeholder interativo para adicionar vídeo posteriormente
- Integração automática com YouTube
- Responsivo para diferentes tamanhos de tela

### 🙏 Três Formas de Contribuição

1. **Oração** - Modal com pedidos específicos de oração
2. **Workshop** - Botão direto para WhatsApp para agendamento
3. **PIX** - Cópia automática da chave PIX com notificação

### 📱 Design Responsivo
- Adaptação automática para orientação vertical/horizontal
- Layout otimizado para dispositivos móveis
- Gradientes e animações suaves

## 🚀 Como Usar no GitHub Pages

### Método 1: Upload Direto (Recomendado)

1. **Criar repositório no GitHub**
   - Acesse [github.com](https://github.com) e faça login
   - Clique em "New repository"
   - Nome: `pagina-agradecimento` (ou qualquer nome)
   - Marque como "Public"
   - Clique em "Create repository"

2. **Fazer upload dos arquivos**
   - Na página do repositório, clique em "uploading an existing file"
   - Arraste e solte os 3 arquivos: `index.html`, `styles.css` e `script.js`
   - Escreva uma mensagem de commit: "Adicionar página de agradecimento"
   - Clique em "Commit changes"

3. **Ativar GitHub Pages**
   - Vá para "Settings" do repositório
   - Role até "Pages" no menu lateral
   - Em "Source", selecione "Deploy from a branch"
   - Escolha "main" como branch
   - Clique em "Save"

4. **Acessar o site**
   - Aguarde alguns minutos
   - Seu site estará em: `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO`

### Método 2: Git (Linha de Comando)

```bash
# Clone seu repositório
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
cd NOME-DO-REPOSITORIO

# Copie os arquivos
cp /caminho/para/os/arquivos/* .

# Commit e push
git add .
git commit -m "Adicionar página de agradecimento"
git push origin main
```

## 🎬 Como Adicionar o Vídeo do YouTube

### Opção 1: Via Interface (Clique no Placeholder)
1. Clique no placeholder do vídeo na página
2. Cole o link completo do YouTube quando solicitado
3. O vídeo será incorporado automaticamente

### Opção 2: Via Console do Navegador
1. Abra o console do navegador (F12)
2. Digite: `addVideo('https://www.youtube.com/watch?v=SEU_VIDEO_ID')`
3. Pressione Enter

### Opção 3: Editar Diretamente o Código
1. Abra o arquivo `script.js`
2. Encontre a linha `// Adicione aqui o ID do seu vídeo`
3. Substitua por: `addYouTubeVideo('SEU_VIDEO_ID');`

## ⚙️ Configurações

### Contatos (arquivo `script.js`)
```javascript
const WHATSAPP_NUMBER = '64984547250';  // Seu número do WhatsApp
const PIX_KEY = 'fellipe.roscelli@gmail.com';  // Sua chave PIX
```

### Personalização de Cores (arquivo `styles.css`)
```css
/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cores dos cards */
.prayer-card { /* Oração */ }
.workshop-card { /* Workshop */ }
.donation-card { /* Doação */ }
```

## 🎨 Características do Design

- **Tema**: Gradientes roxos e azuis
- **Tipografia**: Segoe UI (sistema)
- **Ícones**: Font Awesome 6.0
- **Animações**: Transições suaves e efeitos hover
- **Layout**: Grid responsivo com cards

## 📱 Responsividade

### Desktop (> 768px)
- Layout em 3 colunas para os cards
- Vídeo em proporção 16:9
- Espaçamentos amplos

### Tablet (768px - 480px)
- Layout em 1 coluna
- Cards com padding reduzido
- Botões adaptados

### Mobile (< 480px)
- Layout otimizado para toque
- Textos redimensionados
- Chave PIX em layout vertical

### Orientação
- **Portrait**: Layout vertical otimizado
- **Landscape**: Layout horizontal compacto

## 🔧 Funcionalidades JavaScript

### Modal de Oração
- Abertura suave com animação
- Fechamento com ESC ou clique fora
- Lista de pedidos específicos

### Cópia de PIX
- API moderna de clipboard
- Fallback para navegadores antigos
- Notificação visual de sucesso

### WhatsApp
- Mensagem pré-formatada
- Abertura em nova aba
- Número configurável

### YouTube
- Incorporação automática
- Parâmetros otimizados
- Persistência no localStorage

## 🌐 Compatibilidade

- ✅ Todos os navegadores modernos
- ✅ Dispositivos móveis (iOS/Android)
- ✅ GitHub Pages
- ✅ Netlify, Vercel, etc.
- ✅ Funciona offline (exceto vídeo)

## 📞 Suporte

Para dúvidas ou personalizações:
- WhatsApp: (64) 98454-7250
- Email: fellipe.roscelli@gmail.com

---

**Desenvolvido com ❤️ para impactar vidas através da tecnologia**

