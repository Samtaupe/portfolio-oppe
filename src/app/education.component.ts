import { Component } from '@angular/core';

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section id="education" class="py-24 bg-bg-main">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <p class="section-subtitle">Formation académique</p>
          <h2 class="section-title">Ma <span class="text-primary">formation</span></h2>
          <div class="section-divider mx-auto"></div>
        </div>

        <div class="relative">
          <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gray-700 to-transparent hidden sm:block"></div>

          <div class="flex flex-col gap-8">
            @for (edu of educations; track edu.school + edu.period) {
              <div class="relative sm:pl-16">
                <div class="absolute left-0 top-6 hidden sm:flex items-center justify-center">
                  <div class="w-12 h-12 rounded-full border-2 border-primary/50 bg-primary/10 flex items-center justify-center z-10 bg-bg-main">
                    <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                </div>

                <div class="card hover:shadow-[0_0_30px_rgba(251,230,119,0.05)]">
                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 class="text-white font-bold text-lg mb-1">{{ edu.degree }}</h3>
                      <p class="text-primary font-medium">{{ edu.school }}</p>
                      <p class="text-gray-500 text-sm">{{ edu.location }}</p>
                    </div>
                    <span class="text-gray-400 text-sm font-medium flex-shrink-0">{{ edu.period }}</span>
                  </div>

                  <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ edu.description }}</p>

                  <div class="flex flex-wrap gap-2">
                    @for (tag of edu.tags; track tag) {
                      <span class="text-xs bg-bg-section text-gray-400 border border-gray-700/50 px-2.5 py-1 rounded-md">
                        {{ tag }}
                      </span>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class EducationComponent {
  educations: Education[] = [
    {
      degree: 'Master MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprises)',
      school: 'Université Toulouse Capitole',
      location: 'France',
      period: '2025 — Présent',
      description: 'Spécialisation en développement logiciel, gestion de projet et architecture d\'applications. Cours avancés en algorithmique, architecture logicielle, développement web et méthodologies agiles.',
      tags: ['Java', 'Spring Boot', 'Agile', 'Architecture logicielle', 'Gestion de projet', 'Machine Learning'],
    },
    {
      degree: 'BUT Informatique',
      school: 'IUT de Saint-Dié-des-Vosges',
      location: 'France',
      period: '2022 - 2025',
      description: 'Fondamentaux de l\'informatique : algorithmique, structures de données, programmation orientée objet, bases de données, réseaux.',
      tags: ['Java', 'SQL', 'Réseaux', 'Linux', 'Angular', 'Machine Learning', 'Traitement d\'images'],
    },
  ];
}
