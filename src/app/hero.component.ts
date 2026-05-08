import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-main">
      <div class="absolute inset-0 opacity-5"
        style="background-image: linear-gradient(#fbe677 1px, transparent 1px), linear-gradient(90deg, #fbe677 1px, transparent 1px); background-size: 60px 60px;">
      </div>

      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>

      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div class="inline-flex items-center gap-2 bg-bg-card border border-primary/30 rounded-full px-4 py-1.5 mb-8">
          <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span> 
          <span class="text-primary text-sm font-medium">Disponible pour de nouvelles opportunités</span>
        </div>

        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
          <span class="text-white">Thomas</span>
          <span class="text-primary"> OPPE</span>
        </h1>

        <p class="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light mb-6 tracking-wide">
          Développeur <span class="text-white font-semibold">Full Stack</span> 
        </p>

        <p class="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Je conçois et développe des applications web modernes, performantes et accessibles — du backend à l'interface.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" class="btn-primary text-base w-full sm:w-auto text-center">
            Voir mes projets
          </a>
          <a href="#contact" class="btn-outline text-base w-full sm:w-auto text-center">
            Me contacter
          </a>
        </div>

        <div class="flex items-center justify-center gap-6 mt-12">
          <a href="https://github.com/Samtaupe" target="_blank" rel="noopener"
            class="text-gray-500 hover:text-primary transition-colors duration-200 flex items-center gap-2 text-sm">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="mailto:thomas.oppe@icloud.com"
            class="text-gray-500 hover:text-primary transition-colors duration-200 flex items-center gap-2 text-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Email
          </a>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span class="text-xs tracking-widest uppercase">Scroll</span>
        <div class="w-0.5 h-8 bg-gradient-to-b from-gray-600 to-transparent"></div>
      </div>
    </section>
  `
})
export class HeroComponent {}
