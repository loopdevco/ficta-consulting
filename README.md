# Landing Page Profesional - Proyecto React

![Logo Placeholder](./public/assets/logo.png)

---

## Descripción del Proyecto

Esta es una **landing page profesional** desarrollada en **React**, diseñada especialmente para empresas de la industria, prestación de servicios profesionales, jurídicos, financieros, contables y tributarios. El proyecto está pensado como una plantilla base para múltiples desarrollos, ya que las empresas originales no permitieron usar sus nombres en el portafolio.

**Incluye:**
- **Header funcional** con formulario de contacto que envía correos directamente mediante **EmailJS**.
- **Secciones scrollables** tipo landing: Hero, Servicios, Contacto y Footer.
- **Footer profesional** con información de contacto y espacio para redes sociales.
- **Espacios para imágenes y screenshots** de la landing y sub-secciones destacadas.
- **Estilo modular** usando CSS modular para mantener la escalabilidad y facilidad de mantenimiento.

> Hecho por **LoopDev - Jose Fermin Espinosa**. Plantilla base para varios proyectos cuyo nombre de empresa no se pudo usar para portafolio.

---

## Características Principales

- **Formulario de contacto funcional:** los usuarios pueden enviar mensajes que llegarán directamente a un correo electrónico configurado con EmailJS.
- **Diseño adaptable y profesional:** pensado para empresas de servicios y consultoría.
- **Modularidad:** el proyecto está organizado en componentes React para facilitar la extensión o creación de sub-páginas.
- **Placeholder de imágenes y logotipo:** permite insertar fácilmente el logotipo de la empresa y screenshots de la landing.

---

## Tecnologías Utilizadas

- **Frontend:** React
- **Estilos:** CSS modular
- **Envío de correos:** EmailJS
- **Organización de proyecto:** Componentes React modulares, scroll de secciones y posibilidad de sub-páginas.

---

## Estructura del Proyecto

```plaintext
landing-page/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Services.jsx
│  │  ├─ ContactForm.jsx
│  │  └─ Footer.jsx
│  ├─ assets/
│  │  ├─ logo.png
│  │  └─ screenshots/
│  └─ App.jsx
├─ package.json
└─ README.md
````

---

## Uso

1. Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/landing-page.git
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar el proyecto en modo desarrollo:

```bash
npm start
```

4. El formulario de contacto ya viene configurado con **EmailJS**, solo necesitas reemplazar tu `serviceID`, `templateID` y `userID` en el componente `ContactForm.jsx`.

---

## Capturas y Ejemplos

**Screenshot de la página principal:**
![Screenshot Placeholder](ruta/a/screenshot.png)

**Logo de la empresa:**
![Logo Placeholder](ruta/a/logo.png)

---

## Autor

**LoopDev - Jose Fermin Espinosa**
Plantilla base para múltiples proyectos de landing page profesionales.

---

## Licencia

Este proyecto es de uso propio y puede ser adaptado para fines educativos o portafolio.

```
```
