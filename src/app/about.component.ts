import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-24 bg-bg-section">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div class="flex justify-center lg:justify-start">
            <div class="relative">
              <div class="w-72 sm:w-80 rounded-2xl bg-bg-card border-2 border-primary/30 overflow-hidden">
                <img src="profil.png" alt="Photo de profil" class="w-full h-full object-contain">
              </div>
              <div class="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-primary/20 -z-10"></div>
            </div>
          </div>

          <div>
            <p class="section-subtitle">À propos de moi</p>
            <h2 class="section-title">Développeur <span class="text-primary">Full Stack</span><br>&amp; Chef de projet</h2>
            <div class="section-divider"></div>

            <p class="text-gray-400 leading-relaxed mb-4">
              Développeur Full Stack et chef de projet, je couvre l'intégralité du cycle d'un projet informatique :
              recueil du besoin, rédaction du cahier des charges, conception, développement, présentation et livraison.
            </p>
            <p class="text-gray-400 leading-relaxed mb-8">
              Curieux et autonome, j'aime autant écrire du code propre et performant que piloter un projet avec méthode.
              Je m'investis dans des solutions qui ont du sens, en gardant toujours l'utilisateur final au centre.
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
