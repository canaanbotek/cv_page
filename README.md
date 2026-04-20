# cv_page — Christian Castro Botek

Sitio web personal de curriculum y portfolio profesional. / Personal CV and professional portfolio website.

---

## Español

Sitio web estático de curriculum vitae y portfolio profesional desarrollado con Astro y Tailwind CSS. El diseño sigue los principios del sistema visual de xAI: fondo oscuro, tipografia monoespaciada, paleta monocromatica y sin sombras decorativas. El sitio se despliega automaticamente en GitHub Pages mediante GitHub Actions cada vez que se realiza un push a la rama principal.

### Tecnologias utilizadas

| Tecnologia | Version | Rol |
| :--- | :--- | :--- |
| [Astro](https://astro.build) | 6.x | Framework de sitios estaticos |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Estilos utilitarios (via plugin Vite) |
| TypeScript | Strict | Tipado estatico |
| [Geist Mono](https://fonts.google.com/specimen/Geist+Mono) | — | Tipografia display y botones |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Tipografia de cuerpo y lectura |
| GitHub Actions | — | Pipeline de CI/CD |
| GitHub Pages | — | Hosting estatico |
| Node.js | >= 22.12 | Entorno de ejecucion |

### Estructura del proyecto

```
src/
  components/
    Navbar.astro
    Hero.astro
    Experience.astro
    Education.astro
    Blog.astro          # Seccion de emprendimiento 3D
    Skills.astro
    Contact.astro
  layouts/
    Layout.astro
  pages/
    index.astro
  styles/
    global.css
public/
  profile.jpeg
  cv_1.pdf
.github/
  workflows/
    deploy.yml
```

### Comandos

Todos los comandos se ejecutan desde la raiz del proyecto.

| Comando | Accion |
| :--- | :--- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Genera el sitio de produccion en `./dist/` |
| `npm run preview` | Previsualiza el build antes del despliegue |
| `npm run astro check` | Verifica tipos en archivos `.astro` |

### Despliegue

El despliegue es automatico. Cada push a la rama `main` dispara el workflow de GitHub Actions que ejecuta `npm ci`, `npm run build` y publica el contenido de `./dist/` en GitHub Pages.

URL de produccion: `https://canaanbotek.github.io/cv_page`

Para habilitar el despliegue por primera vez, configurar en el repositorio:
**Settings → Pages → Source → GitHub Actions**

---

## English

Static personal CV and professional portfolio website built with Astro and Tailwind CSS. The design follows xAI's visual system principles: dark background, monospaced typography, monochromatic palette, and no decorative shadows. The site is automatically deployed to GitHub Pages via GitHub Actions on every push to the main branch.

### Technologies used

| Technology | Version | Role |
| :--- | :--- | :--- |
| [Astro](https://astro.build) | 6.x | Static site framework |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first styles (via Vite plugin) |
| TypeScript | Strict | Static typing |
| [Geist Mono](https://fonts.google.com/specimen/Geist+Mono) | — | Display and button typography |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Body and reading typography |
| GitHub Actions | — | CI/CD pipeline |
| GitHub Pages | — | Static hosting |
| Node.js | >= 22.12 | Runtime environment |

### Project structure

```
src/
  components/
    Navbar.astro
    Hero.astro
    Experience.astro
    Education.astro
    Blog.astro          # 3D venture section
    Skills.astro
    Contact.astro
  layouts/
    Layout.astro
  pages/
    index.astro
  styles/
    global.css
public/
  profile.jpeg
  cv_1.pdf
.github/
  workflows/
    deploy.yml
```

### Commands

All commands are run from the root of the project.

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Type-check `.astro` files |

### Deployment

Deployment is automatic. Every push to the `main` branch triggers the GitHub Actions workflow, which runs `npm ci`, `npm run build`, and publishes the contents of `./dist/` to GitHub Pages.

Production URL: `https://canaanbotek.github.io/cv_page`

To enable deployment for the first time, configure the repository:
**Settings → Pages → Source → GitHub Actions**
