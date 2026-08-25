// =============================================
// CONFIGURACIÓN DE IMÁGENES
// =============================================
// 
// Este archivo contiene todas las URLs de imágenes utilizadas en la invitación.
// Actualiza estas URLs cuando tengas las imágenes alojadas en un servidor.
//
// =============================================

const IMAGES = {
    // Portada - Foto principal de la pareja
    hero: {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop',
        alt: 'Byron y Sandra',
        description: 'Portada principal - Pareja completa'
    },
    
    // Galería de fotos
    gallery: {
        // Foto 1: Fundamento (Mateo 7:24-25)
        fundamento: {
            url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop',
            alt: 'Nuestro amor tiene fundamento',
            description: 'DSC09570 - Anillos y Biblia'
        },
        
        // Foto 2: Hogar (Espíritu Santo)
        hogar: {
            url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop',
            alt: 'Un hogar cálido',
            description: 'DSC09382 - Pareja en la iglesia'
        },
        
        // Foto 3: Caminar Juntos (Ministerio)
        caminarJuntos: {
            url: 'https://images.unsplash.com/photo-1606216174052-a76f5fbb60a9?w=800&h=1000&fit=crop',
            alt: 'Caminar Juntos en el ministerio',
            description: 'DSC09669 - Pareja caminando'
        },
        
        // Foto 4: Cordón de 3 dobleces (Eclesiastés 4:9-12)
        cordon: {
            url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop',
            alt: 'Cordón de 3 dobleces',
            description: 'DSC09571 - Pareja frente a puerta de madera'
        }
    }
};

// =============================================
// INSTRUCCIONES DE ACTUALIZACIÓN
// =============================================
//
// PASO 1: Cargar imágenes en un servidor
// ============================================
// 
// Opciones recomendadas:
// - Cloudinary (https://cloudinary.com) - Servicio gratuito de hosting de imágenes
// - Imgur (https://imgur.com) - Simple y directo
// - AWS S3 o Google Cloud Storage - Para proyectos profesionales
// - Tu propio servidor - Si tienes uno disponible
//
// PASO 2: Obtener URLs de las imágenes
// ============================================
// 
// Después de subir las imágenes, obtendrás URLs como:
// https://res.cloudinary.com/tu-usuario/image/upload/v1234567890/nombre-imagen.jpg
// https://i.imgur.com/XXXXXX.jpg
// 
// PASO 3: Actualizar este archivo
// ============================================
// 
// Reemplaza las URLs en el objeto IMAGES arriba con tus URLs reales.
// 
// Ejemplo:
// IMAGES.gallery.fundamento.url = 'https://tu-url-real-aqui.jpg'
//
// PASO 4: Guardar cambios
// ============================================
// 
// Las imágenes se actualizarán automáticamente en la invitación.

// =============================================
// FUNCIÓN DE ACTUALIZACIÓN GLOBAL
// =============================================

/**
 * Actualiza todas las imágenes de la invitación
 * @param {Object} newImages - Objeto con las nuevas URLs
 */
function updateAllImages(newImages) {
    // Actualizar imagen hero
    if (newImages.hero) {
        IMAGES.hero.url = newImages.hero;
        const heroImg = document.querySelector('.hero__image');
        if (heroImg) heroImg.src = newImages.hero;
    }
    
    // Actualizar galería
    if (newImages.gallery) {
        const galleryImages = document.querySelectorAll('.gallery__image');
        
        if (newImages.gallery.fundamento) {
            IMAGES.gallery.fundamento.url = newImages.gallery.fundamento;
            if (galleryImages[0]) galleryImages[0].src = newImages.gallery.fundamento;
        }
        
        if (newImages.gallery.hogar) {
            IMAGES.gallery.hogar.url = newImages.gallery.hogar;
            if (galleryImages[1]) galleryImages[1].src = newImages.gallery.hogar;
        }
        
        if (newImages.gallery.caminarJuntos) {
            IMAGES.gallery.caminarJuntos.url = newImages.gallery.caminarJuntos;
            if (galleryImages[2]) galleryImages[2].src = newImages.gallery.caminarJuntos;
        }
        
        if (newImages.gallery.cordon) {
            IMAGES.gallery.cordon.url = newImages.gallery.cordon;
            if (galleryImages[3]) galleryImages[3].src = newImages.gallery.cordon;
        }
    }
    
    console.log('✅ Imágenes actualizadas correctamente');
}

// =============================================
// EJEMPLOS DE USO
// =============================================

// Opción 1: Actualizar una sola imagen
// updateGalleryImage(0, 'https://tu-url-imagen-fundamento.jpg')

// Opción 2: Actualizar todas las imágenes
/*
updateAllImages({
    hero: 'https://tu-url-hero.jpg',
    gallery: {
        fundamento: 'https://tu-url-fundamento.jpg',
        hogar: 'https://tu-url-hogar.jpg',
        caminarJuntos: 'https://tu-url-caminar-juntos.jpg',
        cordon: 'https://tu-url-cordon.jpg'
    }
});
*/

// =============================================
// EXPORTAR OBJETO DE CONFIGURACIÓN
// =============================================

window.IMAGES = IMAGES;
window.updateAllImages = updateAllImages;

console.log('📸 Configuración de imágenes cargada');
console.log('Imágenes actuales:', IMAGES);
