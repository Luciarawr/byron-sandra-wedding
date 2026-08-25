// =============================================
// MÚSICA
// =============================================

const musicBtn = document.getElementById('musicBtn');
const audioPlayer = document.getElementById('audioPlayer');
let isPlaying = false;

// Crear fuente de audio desde YouTube (usando proxy de cors)
const audioSource = audioPlayer.querySelector('source');
audioSource.src = 'https://www.youtube.com/watch?v=JiSIJ2amnQc&t=4s';

musicBtn.addEventListener('click', function() {
    if (!isPlaying) {
        // Intentar reproducir - usar solución alternativa si es necesario
        const playPromise = audioPlayer.play();
        
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    isPlaying = true;
                    updateMusicButton();
                })
                .catch(error => {
                    console.log('Error al reproducir:', error);
                    // Fallback: cargar desde fuente alternativa o mostrar mensaje
                    alert('Por favor, abre el enlace de música directamente: https://www.youtube.com/watch?v=JiSIJ2amnQc&t=4s');
                });
        }
    } else {
        audioPlayer.pause();
        isPlaying = false;
        updateMusicButton();
    }
});

// Actualizar apariencia del botón según estado
function updateMusicButton() {
    if (isPlaying) {
        musicBtn.innerHTML = `
            <svg class="music-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
        `;
    } else {
        musicBtn.innerHTML = `
            <svg class="music-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
        `;
    }
}

// Pausar música cuando se pausa externamente
audioPlayer.addEventListener('pause', function() {
    isPlaying = false;
    updateMusicButton();
});

audioPlayer.addEventListener('play', function() {
    isPlaying = true;
    updateMusicButton();
});

// =============================================
// CUENTA REGRESIVA
// =============================================

function startCountdown() {
    const targetDate = new Date('2026-12-19T00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // Elementos del countdown
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        const secondsElement = document.getElementById('seconds');
        const countdownTimer = document.querySelector('.countdown__timer');
        const countdownMessage = document.getElementById('countdownMessage');
        
        if (distance < 0) {
            // La fecha ha llegado
            countdownTimer.style.display = 'none';
            countdownMessage.style.display = 'block';
        } else {
            // Calcular valores
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Actualizar DOM
            daysElement.textContent = String(days).padStart(2, '0');
            hoursElement.textContent = String(hours).padStart(2, '0');
            minutesElement.textContent = String(minutes).padStart(2, '0');
            secondsElement.textContent = String(seconds).padStart(2, '0');
        }
    }
    
    // Actualizar inmediatamente
    updateCountdown();
    
    // Actualizar cada segundo
    setInterval(updateCountdown, 1000);
}

// Iniciar countdown cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
});

// =============================================
// UBICACIÓN - MAPS
// =============================================

const locationBtn = document.querySelector('.location__btn');
locationBtn.addEventListener('click', function(e) {
    // El enlace ya está en href, así que funcionará automáticamente
    e.preventDefault();
    window.open('https://maps.app.goo.gl/vjiD88y53dpqrQWGA?g_st=awb', '_blank');
});

// =============================================
// CONFIRMACIÓN
// =============================================

const confirmationBtn = document.getElementById('confirmationBtn');

// Evento del botón de confirmación
confirmationBtn.addEventListener('click', function() {
    const confirmationLink = this.getAttribute('data-confirmation-link');
    
    if (confirmationLink && confirmationLink.trim() !== '') {
        window.open(confirmationLink, '_blank');
    } else {
        alert('El enlace de confirmación será actualizado próximamente. Por favor, intenta más tarde.');
    }
});

// Función para actualizar el enlace de confirmación (puedes usar esto más tarde)
function setConfirmationLink(link) {
    confirmationBtn.setAttribute('data-confirmation-link', link);
}

// =============================================
// ANIMACIONES DE SCROLL
// =============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = getAnimationForElement(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

function getAnimationForElement(element) {
    if (element.classList.contains('countdown__box')) {
        return 'slideUp 0.6s ease-out forwards';
    }
    if (element.classList.contains('gallery__item')) {
        return 'fadeIn 0.8s ease-out forwards';
    }
    return 'fadeInUp 0.8s ease-out forwards';
}

// Observar elementos al cargar
document.addEventListener('DOMContentLoaded', function() {
    const observeElements = document.querySelectorAll(
        '.introduction, .invitation, .countdown, .location, .gifts, .confirmation, .gallery__item'
    );
    
    observeElements.forEach(element => {
        observer.observe(element);
    });
});

// =============================================
// SCROLL SUAVE
// =============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =============================================
// DETECCIÓN DE DISPOSITIVO MÓVIL
// =============================================

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Optimizar experiencia móvil
if (isMobileDevice()) {
    document.body.classList.add('is-mobile');
}

// =============================================
// PRELOAD DE IMÁGENES
// =============================================

function preloadImages(imageUrls) {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Precargar imágenes de la galería
const galleryImages = document.querySelectorAll('.gallery__image');
const imageSources = Array.from(galleryImages).map(img => img.src);
preloadImages(imageSources);

// =============================================
// FUNCIONES PÚBLICAS PARA ACTUALIZAR DATOS
// =============================================

/**
 * Actualiza el enlace del formulario de confirmación
 * Uso: setConfirmationLink('https://forms.google.com/...')
 */
window.setConfirmationLink = setConfirmationLink;

/**
 * Actualiza las imágenes de la galería
 * Uso: updateGalleryImage(0, 'nueva-url.jpg')
 */
window.updateGalleryImage = function(index, newUrl) {
    const images = document.querySelectorAll('.gallery__image');
    if (images[index]) {
        images[index].src = newUrl;
    }
};

/**
 * Reproduce/pausa la música
 * Uso: toggleMusic()
 */
window.toggleMusic = function() {
    musicBtn.click();
};

// =============================================
// MANEJO DE ERRORES Y LOGS
// =============================================

console.log('🎉 Invitación de boda cargada correctamente');
console.log('Byron & Sandra - 19 de diciembre de 2026');
