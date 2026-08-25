# 💕 Invitación Digital de Boda - Byron & Sandra

Invitación digital elegante, responsiva y totalmente interactiva para la boda de Byron Enrique Galdámez Cárcamo y Sandra Eunice Gaitán Chacón.

**Fecha:** 19 de diciembre de 2026  
**Ubicación:** Chalet 10, Km 26.5 circunvalación carretera Antigua hacia Amatitlán

---

## 🌟 Características

✅ **Diseño Elegante y Responsivo**
- Optimizado para dispositivos móviles
- Interfaz editorial/fotográfica
- Paleta de colores: crema, marfil, blanco y tonos verdes

✅ **Funcionalidades Interactivas**
- 🎵 Botón de reproducción de música
- ⏱️ Cuenta regresiva en tiempo real
- 📍 Enlace a Google Maps
- ✅ Botón de confirmación de asistencia

✅ **Animaciones Sutiles**
- Fade-in al cargar secciones
- Zoom suave en imágenes
- Transiciones fluidas al hacer scroll

---

## 📱 Secciones

1. **Portada** - Foto de pareja + nombres + fecha + botón de música
2. **Introducción** - Dedicatoria a los padres
3. **Invitación** - Texto principal + detalles de la ceremonia
4. **Cuenta Regresiva** - Días, horas, minutos, segundos hasta la boda
5. **Ubicación** - Nombre del lugar + dirección + botón de Google Maps
6. **Regalos** - Información sobre mesa de regalos
7. **Confirmación** - Botón para confirmar asistencia
8. **Galería Fotográfica** - 4 fotos con textos inspiradores
9. **Cierre** - Despedida personalizada

---

## 🔧 Configuración

### Actualizar Enlace de Confirmación

Una vez recibas el formulario Google Forms o tu propio enlace, actualízalo así:

```javascript
// En la consola del navegador o en script.js:
setConfirmationLink('https://forms.google.com/...tu-enlace-aqui...')
```

### Actualizar Imágenes de la Galería

Para cambiar cualquiera de las fotos:

```javascript
// Índice 0 = Fundamento, 1 = Hogar, 2 = Caminar Juntos, 3 = Cordón 3 dobleces
updateGalleryImage(0, 'https://nueva-url-imagen.jpg')
```

### Reproducir Música Manualmente

```javascript
toggleMusic()
```

---

## 📋 Estructura de Archivos

```
byron-sandra-wedding/
├── index.html       # Estructura HTML
├── styles.css       # Estilos y diseño
├── script.js        # Funcionalidades JavaScript
└── README.md        # Este archivo
```

---

## 🎨 Paleta de Colores

- **Crema Principal:** `#f5f1ed`
- **Marfil Claro:** `#faf8f5`
- **Verde Oliva/Salvia:** `#8b9d6f`
- **Beige Neutro:** `#d4c4b0`
- **Texto Principal:** `#3d3d3d`

---

## 🔊 Música

La invitación está configurada para reproducir "La Bondad de Dios — Instrumental" desde:
- **Enlace:** https://www.youtube.com/watch?v=JiSIJ2amnQc&t=4s

**Nota:** El audio se reproduce únicamente cuando el usuario hace clic en el botón. No hay reproducción automática.

---

## ⏰ Cuenta Regresiva

La cuenta regresiva está configurada para:
- **Fecha objetivo:** 19 de diciembre de 2026
- **Hora:** 00:00:00 (inicio del día)
- **Formato:** DD:HH:MM:SS
- **Actualización:** Cada segundo automáticamente

Cuando llegue la fecha, mostrará el mensaje: *"¡Hoy celebramos nuestro sí!"*

---

## 📍 Enlaces Importantes

- **Google Maps:** https://maps.app.goo.gl/vjiD88y53dpqrQWGA?g_st=awb
- **Formulario de Confirmación:** [Pendiente de agregar]

---

## 🚀 Cómo Desplegar

### Opción 1: GitHub Pages

1. Ve a **Settings** → **Pages**
2. Selecciona **Branch: main**
3. Tu invitación estará en: `https://Luciarawr.github.io/byron-sandra-wedding/`

### Opción 2: Otros Servidores

Sube los 3 archivos (index.html, styles.css, script.js) a cualquier servidor web.

---

## 📱 Responsividad

La invitación está optimizada para:
- ✅ Smartphones (320px - 480px)
- ✅ Tablets (481px - 768px)
- ✅ Pantallas medianas (769px - 1024px)
- ✅ Escritorio (1025px+)

---

## 🎯 Próximos Pasos

- [ ] Agregar enlace del formulario de confirmación
- [ ] Subir las imágenes reales a un servidor de hosting
- [ ] Reemplazar enlaces de imagen placeholder con URLs reales
- [ ] Probar en diferentes dispositivos móviles
- [ ] Compartir enlace con invitados

---

## 💡 Notas Técnicas

- **HTML5** semántico y accesible
- **CSS3** con animaciones y transiciones
- **JavaScript Vanilla** (sin dependencias externas)
- **Google Fonts** para tipografías elegantes
- **Fully Responsive** sin frameworks CSS

---

## 📝 Tipografía

- **Títulos y Decoración:** Cormorant Garamond (serif clásica)
- **Nombres y Detalles:** Great Vibes (manuscrita elegante)
- **Cuerpo de Texto:** Lora (serif legible)

---

## 🤝 Soporte

Para cualquier cambio o personalización, contacta al desarrollador.

---

**Hecho con ❤️ para Byron & Sandra**

*"Cordón de 3 dobleces" — Eclesiastés 4:9-12*