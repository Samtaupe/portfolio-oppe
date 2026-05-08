import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  emoji: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="py-24 bg-bg-section">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <p class="section-subtitle">Réalisations</p>
          <h2 class="section-title">Mes <span class="text-primary">projets</span></h2>
          <div class="section-divider mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (project of projects; track project.title) {
            <div class="card group flex flex-col hover:shadow-[0_0_40px_rgba(251,230,119,0.08)] hover:-translate-y-1 transition-all duration-300"
              [class.lg:col-span-2]="project.featured">
              <div class="flex items-start justify-between mb-4">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl border border-primary/20">
                  {{ project.emoji }}
                </div>
                <div class="flex gap-2">
                  @if (project.githubUrl) {
                    <a [href]="project.githubUrl" target="_blank" rel="noopener"
                      class="text-gray-500 hover:text-primary transition-colors p-1.5 hover:bg-primary/10 rounded-lg"
                      title="Voir sur GitHub">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  }
                  @if (project.demoUrl) {
                    <a [href]="project.demoUrl" target="_blank" rel="noopener"
                      class="text-gray-500 hover:text-primary transition-colors p-1.5 hover:bg-primary/10 rounded-lg"
                      title="Voir la démo">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  }
                </div>
              </div>

              <h3 class="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed flex-grow mb-4">{{ project.description }}</p>

              <div class="flex flex-wrap gap-2 mt-auto">
                @for (tag of project.tags; track tag) {
                  <span class="text-xs bg-bg-main text-gray-400 border border-gray-700/50 px-2.5 py-1 rounded-md">
                    {{ tag }}
                  </span>
                }
              </div>
            </div>
          }
        </div>

        <div class="text-center mt-12">
          <a href="https://github.com/Samtaupe" target="_blank" rel="noopener"
            class="btn-outline inline-flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Portfolio Personnel',
      description: 'Ce portfolio — conçu avec Angular 21 et Tailwind CSS. Architecture standalone, design responsive dark theme avec accent jaune.',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Samtaupe',
      emoji: '🌐',
      featured: true,
    },
    {
      title: 'Projet 2 (à renseigner)',
      description: 'Description du projet — remplacez ce texte par la vraie description de votre projet.',
      tags: ['À renseigner'],
      githubUrl: 'https://github.com/Samtaupe',
      emoji: '🚀',
    },
    {
      title: 'Projet 3 (à renseigner)',
      description: 'Description du projet — remplacez ce texte par la vraie description de votre projet.',
      tags: ['À renseigner'],
      githubUrl: 'https://github.com/Samtaupe',
      emoji: '⚡',
    },
    {
      title: 'Projet 4 (à renseigner)',
      description: 'Description du projet — remplacez ce texte par la vraie description de votre projet.',
      tags: ['À renseigner'],
      githubUrl: 'https://github.com/Samtaupe',
      emoji: '🔧',
    },
  ];
}
