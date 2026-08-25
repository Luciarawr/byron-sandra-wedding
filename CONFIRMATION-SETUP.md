# ✅ GUÍA: AGREGAR FORMULARIO DE CONFIRMACIÓN

## Resumen Rápido

El botón "Confirmar Asistencia" necesita un enlace a un formulario donde los invitados confirmen su asistencia. Te mostraré cómo hacerlo.

---

## 🎯 Opciones Disponibles

### Opción 1: Google Forms (Recomendado - Fácil y Gratuito)

**Ventajas:**
- ✅ Completamente gratuito
- ✅ Muy fácil de crear
- ✅ Las respuestas se guardan automáticamente
- ✅ Puedes ver estadísticas en tiempo real
- ✅ Funciona en todos los dispositivos

**Pasos:**

1. Abre: https://forms.google.com/
2. Haz clic en "Crear" (signo +)
3. Elige "Formulario en blanco"
4. Título: "Confirmación de Asistencia - Byron & Sandra"
5. Agrega las preguntas necesarias (ver plantilla abajo)
6. Haz clic en "Enviar" (esquina superior derecha)
7. Selecciona el icono de link
8. Copia el enlace completo

---

## 📋 Plantilla de Preguntas para Google Forms

### Pregunta 1: Nombre Completo
- **Tipo:** Respuesta corta
- **Requerida:** Sí
- **Pregunta:** ¿Cuál es tu nombre completo?

### Pregunta 2: Correo Electrónico
- **Tipo:** Respuesta corta
- **Requerida:** Sí
- **Pregunta:** ¿Cuál es tu correo electrónico?
- **Validación:** Formato de correo

### Pregunta 3: Número de Teléfono
- **Tipo:** Respuesta corta
- **Requerida:** No
- **Pregunta:** ¿Cuál es tu número de teléfono?

### Pregunta 4: ¿Asistirás?
- **Tipo:** Opción múltiple
- **Requerida:** Sí
- **Pregunta:** ¿Confirmas tu asistencia?
- **Opciones:**
  - Sí, asistiré con gusto
  - No podré asistir
  - Aún no lo sé

### Pregunta 5: Número de Acompañantes
- **Tipo:** Opción múltiple
- **Requerida:** Sí (si respondió que sí)
- **Pregunta:** ¿Cuántas personas asistirán en total? (incluida tú)
- **Opciones:**
  - 1 persona
  - 2 personas
  - 3 personas
  - 4 personas
  - Más de 4 personas

### Pregunta 6: Restricciones Dietéticas
- **Tipo:** Respuesta corta
- **Requerida:** No
- **Pregunta:** ¿Tienes alguna restricción dietética o alergia que debamos conocer?

### Pregunta 7: Mensaje
- **Tipo:** Párrafo
- **Requerida:** No
- **Pregunta:** ¿Deseas enviar algún mensaje especial a los novios?

---

## 🔗 PASO 1: Obtener el Enlace

Una vez creado el formulario en Google Forms:

1. Haz clic en el botón "Enviar" (esquina superior derecha)
2. Selecciona el icono de enlace (el que parece una cadena)
3. Copia el enlace completo
4. Debería ser algo como: `https://forms.google.com/forms/d/e/1FAIpQLSd...`

---

## ⚙️ PASO 2: Agregar el Enlace a la Invitación

### Método 1: Editar el Archivo HTML Directamente

1. Abre `index.html` en GitHub
2. Busca esta línea:
   ```html
   <button class="confirmation__btn" id="confirmationBtn" data-confirmation-link="">
   ```

3. Reemplaza `data-confirmation-link=""` con:
   ```html
   data-confirmation-link="https://forms.google.com/forms/d/e/TU_ENLACE_AQUI"
   ```

4. Haz commit de los cambios

**Ejemplo completo:**
```html
<button class="confirmation__btn" id="confirmationBtn" data-confirmation-link="https://forms.google.com/forms/d/e/1FAIpQLSd123abc456xyz/viewform?usp=sf_link">
```

### Método 2: Usar la Consola del Navegador (Prueba Rápida)

1. Abre la invitación en tu navegador
2. Presiona `F12` para abrir Developer Tools
3. Ve a la pestaña "Console"
4. Pega este código:

```javascript
setConfirmationLink('https://forms.google.com/forms/d/e/TU_ENLACE_AQUI/viewform?usp=sf_link')
```

5. Presiona Enter
6. ¡Ahora el botón abrirá tu formulario!

---

## 🧪 PASO 3: Probar el Formulario

1. Actualiza la página (`F5`)
2. Desplázate hasta la sección "Confirma tu asistencia"
3. Haz clic en el botón
4. Debería abrirse tu Google Form en una nueva pestaña
5. Prueba completando el formulario
6. Verifica que aparezca en las respuestas de tu formulario

---

## 📊 PASO 4: Ver las Respuestas

En Google Forms:

1. Ve a la pestaña "Respuestas"
2. Verás todas las confirmaciones en tiempo real
3. Haz clic en el icono de gráfico para ver estadísticas
4. Puedes descargar las respuestas en Excel si necesitas

---

## 🔄 Alternativas a Google Forms

### Opción 2: Typeform

**Ventajas:** Diseño más moderno, sin requiere código
**Desventajas:** Plan gratuito limitado

1. Ve a: https://www.typeform.com/
2. Crea un formulario
3. Copia el enlace
4. Agrega a la invitación igual que con Google Forms

### Opción 3: JotForm

**Ventajas:** Más plantillas disponibles
**Desventajas:** Interfaz más compleja

1. Ve a: https://www.jotform.com/
2. Crea un formulario
3. Copia el enlace
4. Agrega a la invitación

---

## 💡 Consejos Profesionales

✅ **Habilita notificaciones por correo:**
- En Google Forms, ve a "Preferencias"
- Habilita "Recibir un correo de notificación por cada respuesta"
- Así sabrás al instante cuando alguien confirme

✅ **Personaliza el formulario:**
- Sube un logo o imagen de header
- Cambia los colores a los de la invitación (#8b9d6f verde salvia)
- Agrega un mensaje de bienvenida

✅ **Tiempo límite:**
- Establece una fecha de cierre (ej: 30 días antes de la boda)
- Puedes cerrar el formulario desde Google Forms

✅ **Confirmación automática:**
- Agrega un mensaje de agradecimiento al final
- Los invitados verán: "¡Gracias por confirmar tu asistencia!"

---

## 📝 Plantilla de Enlace Para Copiar/Pegar

Después de crear tu formulario, reemplaza esto:

```javascript
// ANTES (sin enlace):
data-confirmation-link=""

// DESPUÉS (con tu enlace):
data-confirmation-link="https://forms.google.com/forms/d/e/PEGA_TU_ENLACE_AQUI/viewform?usp=sf_link"
```

---

## ✅ Checklist Final

- [ ] Creé un Google Form
- [ ] Agregué todas las preguntas necesarias
- [ ] Copié el enlace del formulario
- [ ] Actualicé la invitación con el enlace
- [ ] Probé el botón "Confirmar Asistencia"
- [ ] El formulario se abre correctamente
- [ ] Verifiqué que funciona en móvil
- [ ] Habité notificaciones por correo
- [ ] Compartí la invitación con los invitados

---

## 🆘 Problemas Comunes

### El botón no abre el formulario
- ✅ Verifica que el enlace sea correcto
- ✅ Asegúrate de incluir "https://"
- ✅ No hay espacios extras en el enlace
- ✅ Abre la consola (F12) y busca errores

### Las respuestas no aparecen
- ✅ Verifica que el Google Form esté público
- ✅ Intenta desde navegador en incógnito
- ✅ Actualiza la página de respuestas

### Quiero cambiar el formulario
- ✅ Puedes editarlo en cualquier momento
- ✅ Los cambios se reflejan en la invitación
- ✅ No necesitas actualizar el enlace (es el mismo)

---

## 📱 Prueba en Móvil

1. Abre la invitación en tu teléfono
2. Desplázate a "Confirma tu asistencia"
3. Toca el botón
4. El formulario debe abrirse correctamente
5. Complétalo como lo haría un invitado

---

## 🎉 ¡Listo!

Tu invitación digital está completamente funcional:

✅ Portada elegante  
✅ Cuenta regresiva  
✅ Ubicación con Google Maps  
✅ Galería de fotos  
✅ **Botón de confirmación conectado**  

Ahora solo falta compartir el enlace con los invitados.

---

**Enlace para compartir con invitados:**

```
https://Luciarawr.github.io/byron-sandra-wedding/
```

*¡Que disfruten confirmando su asistencia! 💕*