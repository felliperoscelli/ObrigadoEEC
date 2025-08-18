// Configurações
const WHATSAPP_NUMBER = '64984547250';
const PIX_KEY = 'fellipe.roscelli@gmail.com';

// Função para adicionar vídeo do YouTube
function addYouTubeVideo(videoId) {
    const placeholder = document.getElementById('video-placeholder');
    const iframe = document.getElementById('video-iframe');
    
    if (videoId) {
        // Criar iframe do YouTube
        iframe.innerHTML = `
            <iframe 
                src="https://youtu.be/TdcYfR7NLS0?si=F3vZh9sxSh-yj_Lc" 
                title="Vídeo de Agradecimento"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
        
        // Esconder placeholder e mostrar vídeo
        placeholder.style.display = 'none';
        iframe.style.display = 'block';
    }
}

// Função para extrair ID do vídeo do YouTube de uma URL
function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Função para mostrar mensagem de oração
function showPrayerMessage() {
    const modal = document.getElementById('prayer-modal');
    modal.style.display = 'block';
    
    // Fechar modal clicando fora dele
    modal.onclick = function(event) {
        if (event.target === modal) {
            closePrayerModal();
        }
    }
}

// Função para fechar modal de oração
function closePrayerModal() {
    const modal = document.getElementById('prayer-modal');
    modal.style.display = 'none';
}

// Função para abrir WhatsApp
function openWhatsApp() {
    const message = encodeURIComponent(
        'Olá! Gostaria de saber mais sobre como agendar um workshop ou esclarecer algumas dúvidas sobre a palestra. Obrigado!'
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Função para copiar chave PIX
function copyPixKey() {
    // Tentar usar a API moderna de clipboard
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(PIX_KEY).then(() => {
            showNotification();
        }).catch(() => {
            // Fallback para método antigo
            fallbackCopyTextToClipboard(PIX_KEY);
        });
    } else {
        // Fallback para navegadores mais antigos
        fallbackCopyTextToClipboard(PIX_KEY);
    }
}

// Método fallback para copiar texto
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Evitar scroll para o textarea
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showNotification();
        } else {
            alert('Não foi possível copiar automaticamente. Chave PIX: ' + PIX_KEY);
        }
    } catch (err) {
        alert('Não foi possível copiar automaticamente. Chave PIX: ' + PIX_KEY);
    }
    
    document.body.removeChild(textArea);
}

// Função para mostrar notificação de cópia
function showNotification() {
    const notification = document.getElementById('copy-notification');
    notification.style.display = 'flex';
    
    // Esconder após 3 segundos
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Função para adicionar vídeo via prompt (para teste)
function promptForVideo() {
    const videoUrl = prompt(https://youtu.be/TdcYfR7NLS0?si=F3vZh9sxSh-yj_Lc);
    if (videoUrl) {
        const videoId = extractYouTubeId(videoUrl);
        if (videoId) {
            addYouTubeVideo(videoId);
            // Salvar no localStorage para persistir
            localStorage.setItem('youtubeVideoId', videoId);
        } else {
            alert('URL do YouTube inválida. Tente novamente.');
        }
    }
}

// Função para carregar vídeo salvo
function loadSavedVideo() {
    const savedVideoId = localStorage.getItem('youtubeVideoId');
    if (savedVideoId) {
        addYouTubeVideo(savedVideoId);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Carregar vídeo salvo se existir
    loadSavedVideo();
    
    // Adicionar evento de clique no placeholder do vídeo
    const videoPlaceholder = document.getElementById('video-placeholder');
    videoPlaceholder.addEventListener('click', promptForVideo);
    
    // Fechar modal com ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePrayerModal();
        }
    });
    
    // Animação suave ao carregar
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Função global para adicionar vídeo (pode ser chamada do console)
window.addVideo = function(videoUrl) {
    const videoId = extractYouTubeId(videoUrl);
    if (videoId) {
        addYouTubeVideo(videoId);
        localStorage.setItem('youtubeVideoId', videoId);
        console.log('Vídeo adicionado com sucesso!');
    } else {
        console.log('URL inválida. Use uma URL do YouTube válida.');
    }
};

// Função global para remover vídeo
window.removeVideo = function() {
    const placeholder = document.getElementById('video-placeholder');
    const iframe = document.getElementById('video-iframe');
    
    placeholder.style.display = 'flex';
    iframe.style.display = 'none';
    iframe.innerHTML = '';
    
    localStorage.removeItem('youtubeVideoId');
    console.log('Vídeo removido com sucesso!');
};

// Instruções no console
console.log(`
🎥 INSTRUÇÕES PARA ADICIONAR VÍDEO:

1. Para adicionar um vídeo do YouTube:
   addVideo('https://www.youtube.com/watch?v=SEU_VIDEO_ID')

2. Para remover o vídeo:
   removeVideo()

3. Ou clique no placeholder do vídeo na página

📱 CONTATOS:
- WhatsApp: ${WHATSAPP_NUMBER}
- PIX: ${PIX_KEY}
`);

// Detectar orientação e ajustar layout se necessário
function handleOrientationChange() {
    // Pequeno delay para aguardar a mudança de orientação
    setTimeout(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            // Forçar recálculo do layout
            card.style.transform = 'translateZ(0)';
        });
    }, 100);
}

// Listener para mudança de orientação
window.addEventListener('orientationchange', handleOrientationChange);
window.addEventListener('resize', handleOrientationChange);

