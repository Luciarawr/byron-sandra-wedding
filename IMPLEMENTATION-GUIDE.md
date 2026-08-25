# 📸 GUÍA DE IMPLEMENTACIÓN DE IMÁGENES REALES

## Resumen Rápido

Tu invitación digital está lista, pero necesita las **imágenes reales** de Byron y Sandra para funcionar correctamente. Esta guía te ayudará a subir las fotos y conectarlas.

---

## 📷 Fotos Necesarias

| Número | Descripción | Archivo Original | Uso |
|--------|-------------|------------------|-----|
| **1** | Portada - Pareja en calle blanca | DSC09562 | Fondo principal de la invitación |
| **2** | Anillos y Biblia | DSC09570 | Sección "Nuestro amor tiene fundamento" |
| **3** | Pareja en iglesia | DSC09382 | Sección "Un hogar cálido" |
| **4** | Pareja caminando calle colonial | DSC09669 | Sección "Caminar Juntos" |
| **5** | Pareja frente puerta madera (roja) | DSC09571 | Sección "Cordón de 3 dobleces" |

---

## 🚀 PASO 1: Elegir Dónde Alojar las Imágenes

### Opción A: Cloudinary (Recomendado - Gratuito)

1. Ve a: https://cloudinary.com/users/register/free
2. Crea una cuenta gratuita
3. En el dashboard, busca "Upload"
4. Sube tus 5 imágenes
5. Haz clic en cada imagen y copia la URL en la sección "Delivery"

**Ventaja:** Genera URLs optimizadas automáticamente  
**Desventaja:** Requiere registro

### Opción B: Imgur (Muy Fácil)

1. Ve a: https://imgur.com/upload
2. Sube tus imágenes (no requiere cuenta)
3. Haz clic derecho en cada imagen > "Copiar enlace de imagen"
4. Obtén URLs como: `https://i.imgur.com/XXXXXX.jpg`

**Ventaja:** Súper simple, sin registro  
**Desventaja:** Menos control sobre calidad

### Opción C: Google Drive

1. Sube imágenes a Google Drive
2. Haz clic derecho > "Obtener enlace"
3. Cambia permisos a "Acceso público"
4. Copia el ID del archivo y usa: `https://drive.google.com/uc?export=view&id=FILE_ID`

**Ventaja:** Integración con Google  
**Desventaja:** URLs largas y complicadas

---

## 🔗 PASO 2: Obtener las URLs

Después de subir, tendrás URLs como estas:

```
Portada: https://res.cloudinary.com/tu-usuario/image/upload/v1234567/DSC09562.jpg
Fundamento: https://res.cloudinary.com/tu-usuario/image/upload/v1234567/DSC09570.jpg
Hogar: https://res.cloudinary.com/tu-usuario/image/upload/v1234567/DSC09382.jpg
Caminar Juntos: https://res.cloudinary.com/tu-usuario/image/upload/v1234567/DSC09669.jpg
Cordón: https://res.cloudinary.com/tu-usuario/image/upload/v1234567/DSC09571.jpg
```

---

## ⚙️ PASO 3: Actualizar la Invitación

### Método 1: Editar Archivo Directamente

1. Abre `images-config.js` en GitHub
2. Edita las URLs en el objeto `IMAGES`:

```javascript
const IMAGES = {
    hero: {
        url: 'TU_URL_PORTADA_AQUI',
        // ...
    },
    gallery: {
        fundamento: {
            url: 'TU_URL_FUNDAMENTO_AQUI',
            // ...
        },
        hogar: {
            url: 'TU_URL_HOGAR_AQUI',
            // ...
        },
        caminarJuntos: {
            url: 'TU_URL_CAMINAR_JUNTOS_AQUI',
            // ...
        },
        cordon: {
            url: 'TU_URL_CORDON_AQUI',
            // ...
        }
    }
};
```

3. Haz commit de los cambios
4. Las imágenes se actualizarán automáticamente

### Método 2: Usar Consola del Navegador (Prueba Rápida)

1. Abre la invitación en tu navegador
2. Presiona `F12` para abrir Developer Tools
3. Ve a la pestaña "Console"
4. Pega este código (reemplazando URLs):

```javascript
updateAllImages({
    hero: 'https://tu-url-portada.jpg',
    gallery: {
        fundamento: 'https://tu-url-fundamento.jpg',
        hogar: 'https://tu-url-hogar.jpg',
        caminarJuntos: 'https://tu-url-caminar-juntos.jpg',
        cordon: 'https://tu-url-cordon.jpg'
    }
});
```

5. Presiona Enter
6. ¡Las imágenes se actualizarán al instante!

### Método 3: Actualizar Solo Una Imagen

```javascript
updateGalleryImage(0, 'https://nueva-url-fundamento.jpg');
updateGalleryImage(1, 'https://nueva-url-hogar.jpg');
updateGalleryImage(2, 'https://nueva-url-caminar-juntos.jpg');
updateGalleryImage(3, 'https://nueva-url-cordon.jpg');
```

---

## 🎯 PASO 4: Verificar Cambios

1. Actualiza la página (`F5` o `Ctrl+R`)
2. Verifica que todas las imágenes se carguen correctamente
3. Prueba en móvil abriendo el enlace en tu teléfono
4. Verifica que las fotos aparezcan en todas las secciones

---

## 📱 PASO 5: Compartir Invitación

Una vez tengas las imágenes actualizadas:

### Si usas GitHub Pages:

Tu invitación estará en: `https://Luciarawr.github.io/byron-sandra-wedding/`

Comparte este enlace con los invitados.

### Para Desplegar en Vivo:

1. Ve a tu repositorio
2. Settings → Pages
3. Selecciona "main branch"
4. GitHub Pages habilitará automáticamente tu invitación
5. Obtén la URL pública

---

## 🔧 Resolución de Problemas

### Las imágenes no cargan

- ✅ Verifica que la URL sea correcta (no espacios extras)
- ✅ Asegúrate de que el servidor permita acceso público
- ✅ Prueba la URL directamente en el navegador
- ✅ Comprueba la consola de errores (F12)

### Las imágenes se cargan lentamente

- ✅ Comprime las imágenes antes de subir (máx 2MB)
- ✅ Usa Cloudinary (optimiza automáticamente)
- ✅ Considera cambiar el tamaño a 800x1000px

### Las imágenes se ven cortadas

- ✅ Verifica que sea proporción vertical (alto > ancho)
- ✅ Recomendado: 800x1000px o 600x800px

---

## 💡 Consejos Profesionales

✅ **Optimizar imágenes antes de subir:**
- Usa: https://compressor.io/
- Reduce peso sin perder calidad
- Recomendado: 1-2MB máximo

✅ **Tamaño ideal:**
- Ancho: 800-1200px
- Alto: 1000-1500px
- Proporción: 9:12 (vertical)

✅ **Formato:**
- JPG para fotos (mejor compresión)
- PNG si necesitas transparencia
- WebP si tu servidor lo soporta

✅ **Backup de URLs:**
- Guarda todas las URLs en un documento
- En caso de emergencia, tendrás copias
- Facilita cambios futuros

---

## 📝 Plantilla de URLs para Copiar/Pegar

Copia esta plantilla y completa con tus URLs:

```javascript
// REEMPLAZA ESTAS URLs CON LAS TUYAS
updateAllImages({
    hero: 'PEGA_URL_PORTADA_AQUI',
    gallery: {
        fundamento: 'PEGA_URL_FUNDAMENTO_AQUI',
        hogar: 'PEGA_URL_HOGAR_AQUI',
        caminarJuntos: 'PEGA_URL_CAMINAR_JUNTOS_AQUI',
        cordon: 'PEGA_URL_CORDON_AQUI'
    }
});
```

---

## ✅ Checklist Final

- [ ] Subí 5 imágenes a servidor (Cloudinary/Imgur/Drive)
- [ ] Obtuve 5 URLs públicas
- [ ] Actualicé `images-config.js` o usé la consola
- [ ] Verifiqué que todas las imágenes cargan
- [ ] Probé en móvil
- [ ] Compartí enlace de GitHub Pages con invitados
- [ ] Agregué enlace del formulario de confirmación (cuando esté listo)

---

## 🆘 ¿Necesitas Ayuda?

Si algo no funciona:

1. **Verifica la URL:** Pégala en el navegador directamente
2. **Abre la consola:** F12 → Console → busca errores rojos
3. **Prueba en incógnito:** A veces el caché causa problemas
4. **Revisa permisos:** La imagen debe ser de acceso público

---

**¡La invitación está lista para brillar! 💕**

*Recuerda: Las imágenes hacen que sea una invitación verdaderamente personal y especial.*