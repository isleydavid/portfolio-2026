# Análise Técnica: Animações Lusion.co

**Data:** 2026-10-08  
**Site:** https://lusion.co/  
**Objetivo:** Mapear padrões de animação para implementação no portfólio

---

## 1. BIBLIOTECAS IDENTIFICADAS

### Three.js v158
- **Uso:** Renderização WebGL/3D
- **Implementação:** Canvas `#canvas` como layer de fundo
- **Componentes detectados:**
  - Sistema de câmera (ROTATE, DOLLY, PAN, TOUCH)
  - Shadow mapping (PCF, VSM)
  - Tone mapping (ACESFilmic, Cineon, Reinhard)
  - Material blending (Normal, Additive, Multiply)
  - Texture mapping (UV, Cube, Equirectangular)

### Astro Build
- **Framework:** Astro (static site generation)
- **Bundle:** `/_astro/hoisted.CUO_IjfL.js` (142KB minificado)
- **CSS:** `/_astro/about.CNa9RfUh.css` (88KB)

### Animações Nativas
- **Não usa:** GSAP, Framer Motion, Locomotive Scroll, Lottie
- **Abordagem:** JavaScript vanilla + Three.js + CSS transitions
- **Performance:** Usa `requestAnimationFrame` para animações síncronas

---

## 2. PADRÕES DE ANIMAÇÃO DETECTADOS

### Frequência de Uso (no bundle JavaScript):
```
transform:  231 ocorrências
translate:  177 ocorrências
scale:      177 ocorrências  
opacity:    141 ocorrências
rotate:     110 ocorrências
animation:   51 ocorrências
transition:  27 ocorrências
requestAnimationFrame: 3 ocorrências
```

### Estrutura HTML:
- Canvas WebGL fixo: `<canvas id="canvas"></canvas>`
- Container UI sobreposto: `<div id="ui">`
- Header com background blur: `<div id="header-background"></div>`
- SVG logo com `mix-blend-mode: exclusion`

---

## 3. TÉCNICAS DE ANIMAÇÃO

### A) Scroll-Based Animations
**Evidências:**
- "scroll to explore" messaging
- Canvas WebGL sincronizado com scroll
- Parallax entre camadas (UI + 3D background)

**Implementação Provável:**
```javascript
// Scroll listener nativo
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const progress = scrollY / document.body.scrollHeight;
  
  // Atualiza cena Three.js
  camera.position.z = 5 + (progress * 10);
  camera.rotation.x = progress * 0.5;
  
  // Transforma elementos UI
  elements.forEach(el => {
    el.style.transform = `translateY(${scrollY * 0.3}px)`;
  });
});
```

### B) WebGL/3D Effects
**Características:**
- Three.js para renderização 3D contínua
- Geometrias customizadas (provavelmente shaders GLSL)
- Lighting system (shadow maps)
- Post-processing effects (tone mapping)

**Performance:**
- Render loop otimizado com `requestAnimationFrame`
- Shadow maps PCF (Percentage-Closer Filtering)
- Texture compression

### C) Hover Interactions
**Elementos Interativos:**
- Project cards (metadata tags)
- Navigation menu toggle
- "Play Reel" button
- Links com underline animation

**CSS Transitions:**
```css
/* Padrão inferido */
.card {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s ease,
              box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}
```

### D) Blend Modes
**Logo Header:**
```css
svg {
  fill: currentColor;
  mix-blend-mode: exclusion; /* Inverte cor sobre backgrounds */
}
```

### E) Blur Effects
**Header Background:**
- `backdrop-filter: blur()` para glassmorphism
- Background translúcido durante scroll

---

## 4. SISTEMA DE CORES E TEMAS

**CSS Variables Detectadas:**
```css
:root {
  --color-error: #e90000;
  --color-off-white: #f0f1fa;
  --color-white: #fff;
  --color-dark-white: #e4e6ef;
  --color-black: #000000;
  --color-green: #c1ff00;
  --color-blue: #1a2ffb;
  --color-red: #ff4c41;
  --color-grey-blue: #2b2e3a;
  --color-dark-blue: #071bdf;
  --color-purple: #8832f7;
  
  --grid-space: calc((100% - 11 * var(--grid-gap)) / 12);
  --grid-gap: 2vw;
  --global-border-radius: 20px;
}
```

**Sistema de Grid:**
- Grid 12 colunas com gaps fluidos (2vw)
- Border radius global (20px - consistente com nosso portfólio)

---

## 5. PERFORMANCE OPTIMIZATIONS

### A) Font Rendering
```css
html {
  -webkit-font-smoothing: antialiased;
  -moz-tab-size: 4;
  tab-size: 4;
}
```

### B) CSS Resets
- Modern-normalize v2.0.0
- Box-sizing universal
- Font system stack (sem web fonts pesadas)

### C) WebGL Performance
- Viewport culling (CullFaceBack, CullFaceFront)
- Texture filtering otimizado (Linear, Nearest mipmap)
- Float precision controlada (HalfFloatType vs FloatType)

### D) Resource Loading
- Type="module" para JavaScript (tree-shaking)
- CSS crítico inline (não detectado, mas provável)
- Lazy loading de assets 3D (assumido)

---

## 6. MICRO-INTERAÇÕES ESPECÍFICAS

### Menu Toggle Animation
```html
<!-- Estado inferido -->
<button id="menu-toggle">
  <span>Menu</span> <!-- default -->
  <span>Close</span> <!-- ativo -->
</button>
```

**Animação:**
- Cross-fade entre estados (opacity)
- Rotation no ícone hamburger → X
- Background overlay fade in/out

### Play Reel Button
- Pulse animation sutil
- Scale on hover
- Loading state durante buffering

### Project Cards
**Comportamento:**
- Hover: scale + translateY + shadow
- Stagger animation na entrada (viewport intersection)
- Metadata tags com transition delays escalonados

---

## 7. ARQUITETURA DE CÓDIGO

### Estrutura de Pastas (inferida):
```
/_astro/
  ├── hoisted.CUO_IjfL.js    # Bundle principal (Three.js + lógica)
  └── about.CNa9RfUh.css     # Estilos globais

/assets/
  ├── meta/                  # Favicons, manifests
  └── (3D models, textures)  # Não confirmados
```

### Padrão de Inicialização:
```javascript
// Sequência de boot (reconstruída)
1. Canvas setup → Three.js scene
2. Event listeners (scroll, resize, mouse)
3. Asset loading (geometries, textures)
4. Render loop start
5. UI hydration (Astro islands?)
```

---

## 8. IMPLEMENTAÇÃO NO SEU PORTFÓLIO

### O Que Você JÁ TEM (similar):
✅ Border radius consistente (rounded-xl = 12px, deles 20px)  
✅ Hover scale + shadow (cards de projeto)  
✅ CSS variables para temas  
✅ Performance: lazy loading, prefetch  
✅ Grid system responsivo  
✅ Micro-interações em buttons  

### O Que FALTA (Lusion tem):
❌ **WebGL/Three.js background** (scene 3D interativa)  
❌ **Scroll-synced animations** (parallax avançado)  
❌ **Backdrop blur** no header  
❌ **Mix-blend-mode** effects  
❌ **Stagger animations** em listas  
❌ **Page transitions** entre rotas  

---

## 9. RECOMENDAÇÕES DE IMPLEMENTAÇÃO

### Prioridade ALTA (Baixo Custo, Alto Impacto):

#### A) Backdrop Blur no Header
```tsx
// components/Header.tsx
<header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
```

#### B) Stagger Animations nos Cards
```tsx
// Sem biblioteca, só CSS
.project-card {
  animation: slideUp 0.6s ease backwards;
}
.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### C) Scroll Progress Indicator
```tsx
// components/ScrollProgress.tsx
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all"
         style={{ width: `${progress}%` }} />
  );
}
```

#### D) Mix-Blend-Mode no Logo
```css
/* globals.css */
.logo-icon {
  mix-blend-mode: difference; /* ou exclusion */
  color: white; /* inverte sobre backgrounds escuros */
}
```

### Prioridade MÉDIA (Investimento Maior):

#### E) Parallax Scroll Suave
```tsx
// hooks/useParallax.ts
export function useParallax(speed = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollY = window.scrollY;
      const offset = scrollY * speed;
      ref.current.style.transform = `translateY(${offset}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return ref;
}

// Uso:
const parallaxRef = useParallax(0.3);
<div ref={parallaxRef} className="hero-background" />
```

#### F) Page Transitions (Next.js 16 suporta?)
```tsx
// app/layout.tsx
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

### Prioridade BAIXA (Complexo, Opcional):

#### G) Three.js Background
- Requer expertise em WebGL/shaders
- Performance crítica em mobile
- Aumenta bundle size significativamente
- **Recomendação:** Implementar APENAS se houver necessidade real de storytelling 3D

---

## 10. CHECKLIST DE AÇÃO

### Fase 1: Quick Wins (1-2 horas)
- [ ] Adicionar `backdrop-blur-md` no Header
- [ ] Implementar stagger animations nos project cards (CSS puro)
- [ ] Adicionar scroll progress bar
- [ ] Testar `mix-blend-mode` no logo (verificar contraste/acessibilidade)

### Fase 2: Enhancements (3-4 horas)
- [ ] Criar hook `useParallax` para hero section
- [ ] Adicionar viewport intersection observer para trigger animations
- [ ] Implementar loading states com skeleton loaders (já tem?)
- [ ] Otimizar CSS variables para dark mode (prep futuro)

### Fase 3: Advanced (opcional, 8+ horas)
- [ ] Framer Motion para page transitions
- [ ] Estudar viabilidade de Three.js background simples
- [ ] Cursor customizado seguindo mouse (Lusion tem?)
- [ ] Magnetic buttons (hover puxa cursor)

---

## 11. CÓDIGO DE EXEMPLO: COMBO COMPLETO

```tsx
// components/AnimatedSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  parallaxSpeed?: number;
  stagger?: boolean;
}

export default function AnimatedSection({
  children,
  className = '',
  parallaxSpeed = 0,
  stagger = false
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Intersection Observer para trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  // Parallax scroll
  useEffect(() => {
    if (parallaxSpeed === 0) return;
    
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const offset = (window.innerHeight - rect.top) * parallaxSpeed;
      ref.current.style.transform = `translateY(${offset}px)`;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallaxSpeed]);
  
  return (
    <section
      ref={ref}
      className={`
        ${className}
        ${isVisible ? 'animate-fade-in' : 'opacity-0'}
        ${stagger ? 'stagger-children' : ''}
      `}
    >
      {children}
    </section>
  );
}
```

```css
/* globals.css - Animações Lusion-inspired */

/* Fade in básico */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

/* Stagger para children */
.stagger-children > * {
  opacity: 0;
  animation: fade-in 0.6s ease-out forwards;
}

.stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
.stagger-children > *:nth-child(4) { animation-delay: 0.4s; }
.stagger-children > *:nth-child(5) { animation-delay: 0.5s; }
.stagger-children > *:nth-child(n+6) { animation-delay: 0.6s; }

/* Header blur (Lusion style) */
.header-blur {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

@media (prefers-color-scheme: dark) {
  .header-blur {
    background: rgba(0, 0, 0, 0.8);
  }
}

/* Scroll progress */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #1a2ffb, #8832f7);
  z-index: 9999;
  transition: width 0.1s ease-out;
}

/* Magnetic button effect (avançado) */
.magnetic-button {
  position: relative;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.magnetic-button:hover {
  transform: scale(1.05);
}

/* Blend modes */
.blend-exclusion {
  mix-blend-mode: exclusion;
}

.blend-difference {
  mix-blend-mode: difference;
}
```

---

## 12. RECURSOS E REFERÊNCIAS

### Documentação:
- **Three.js:** https://threejs.org/docs/
- **Backdrop Filter:** https://caniuse.com/css-backdrop-filter
- **Intersection Observer:** https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

### Inspiração Similar:
- Awwwards: https://www.awwwards.com/websites/animation/
- Codrops: https://tympanus.net/codrops/
- WebGL Fundamentals: https://webglfundamentals.org/

### Performance:
- **Render Budget:** 16ms/frame (60fps) ou 6ms/frame (90fps mobile)
- **Three.js Optimization:** Instanced meshes, LOD, frustum culling
- **CSS Animations:** Preferir `transform` e `opacity` (GPU-accelerated)

---

**Conclusão:**
Lusion.co usa abordagem híbrida: **Three.js para 3D + animações CSS nativas para UI**, sem dependências pesadas como GSAP. Foco em performance e experiência fluida. Você pode replicar 80% do "feel" deles com:
1. Backdrop blur
2. Stagger animations
3. Scroll progress
4. Parallax sutil
5. Blend modes

**Não precisa de WebGL** para ter um portfólio profissional ao nível Lusion.
