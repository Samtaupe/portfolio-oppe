import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  tags: string[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="py-24 bg-bg-section">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <p class="section-subtitle">Parcours professionnel</p>
          <h2 class="section-title">Mes <span class="text-primary">expériences</span></h2>
          <div class="section-divider mx-auto"></div>
        </div>

        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gray-700 to-transparent hidden sm:block"></div>

          <div class="flex flex-col gap-8">
            @for (exp of experiences; track exp.company + exp.period) {
              <div class="relative sm:pl-16">
                <!-- Timeline dot -->
                <div class="absolute left-0 top-6 hidden sm:flex items-center justify-center">
                  <div class="w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 bg-bg-section"
                    [class]="exp.current ? 'border-primary bg-primary/10' : 'border-gray-700'">
                    <div class="w-3 h-3 rounded-full" [class]="exp.current ? 'bg-primary' : 'bg-gray-600'"></div>
                  </div>
                </div>

                <div class="card hover:shadow-[0_0_30px_rgba(251,230,119,0.05)]">
                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <h3 class="text-white font-bold text-lg">{{ exp.role }}</h3>
                        @if (exp.current) {
                          <span class="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full border border-primary/30 font-medium">
                            Actuel
                          </span>
                        }
                      </div>
                      <p class="text-primary font-medium">{{ exp.company }}</p>
                      <p class="text-gray-500 text-sm">{{ exp.location }}</p>
                    </div>
                    <div class="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <span class="text-gray-400 text-sm font-medium">{{ exp.period }}</span>
                      <span class="text-xs bg-bg-main border border-gray-700 text-gray-500 px-2.5 py-0.5 rounded-full">
                        {{ exp.type }}
                      </span>
                    </div>
                  </div>

                  <p class="text-gray-400 text-sm leading-relaxed mb-4">{{ exp.description }}</p>

                  <div class="flex flex-wrap gap-2">
                    @for (tag of exp.tags; track tag) {
                      <span class="text-xs bg-bg-main text-gray-400 border border-gray-700/50 px-2.5 py-1 rounded-md">
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
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Chef de projet informatique',
      company: 'Ratier Figeac',
      location: 'France',
      period: '2025 — Présent',
      type: 'Alternance',
      description: 'Développement d\'applications a destination des utilisateurs internes de l\'entreprise, gestion de projet et coordination avec les équipes techniques.',
      tags: ['Angular', 'SCSS', 'TypeScript', 'C#', '.NET', 'Oracle', 'SAP'],
      current: true,
    },
    {
      role: 'Analyste développeur',
      company: 'Alfa Laval',
      location: 'France',
      period: '2023-2025',
      type: 'Alternance',
      description: 'Développement de modules sur l\'ERP de l\'entreprise',
      tags: ['Java', 'IC2', 'SQL', 'Gestion de projet'],
    },
  ];
}
