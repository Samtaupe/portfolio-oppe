import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-24 bg-bg-section">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <!-- Left: Photo placeholder -->
          <div class="flex justify-center lg:justify-start">
            <div class="relative">
              <!-- Photo container -->
              <div class="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-bg-card border-2 border-primary/30 overflow-hidden flex items-center justify-center">
                <div class="text-center">
                  <div class="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-3">
                    <svg class="w-12 h-12 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                  <p class="text-gray-600 text-sm">Photo à venir</p>
                </div>
              </div>
              <div class="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary/20 -z-10"></div>
            </div>
          </div>

          <div>
            <p class="section-subtitle">À propos de moi</p>
            <h2 class="section-title">Développeur passionné par les<br><span class="text-primary">solutions innovantes</span></h2>
            <div class="section-divider"></div>

            <p class="text-gray-400 leading-relaxed mb-4">
              Développeur Full Stack avec une forte appétence pour les technologies modernes du web.
              Je conçois des applications robustes, scalables et performantes en mettant l'accent sur
              la qualité du code et l'expérience utilisateur.
            </p>
            <p class="text-gray-400 leading-relaxed mb-8">
              Curieux et autonome, j'aime relever de nouveaux défis techniques et m'investir dans des
              projets qui ont du sens. Toujours à la recherche de nouvelles pratiques et de nouvelles technologies.
            </p>

            <!-- Info grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              @for (info of infos; track info.label) {
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <span class="text-gray-500 text-xs uppercase tracking-wide">{{ info.label }}</span>
                    <p class="text-white text-sm font-medium">{{ info.value }}</p>
                  </div>
                </div>
              }
            </div>

            <div class="flex gap-3">
              <a href="#contact" class="btn-primary">Me contacter</a>
              <a href="https://github.com/Samtaupe" target="_blank" rel="noopener" class="btn-outline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  infos = [
    { label: 'Localisation', value: 'France' },
    { label: 'Email', value: 'thomas.oppe@icloud.com' },
    { label: 'GitHub', value: 'github.com/Samtaupe' },
    { label: 'Statut', value: 'Disponible' },
  ];
}
