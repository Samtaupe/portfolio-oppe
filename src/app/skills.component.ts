import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  level: 'maîtrisé' | 'bases';
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="skills" class="py-24 bg-bg-main">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <p class="section-subtitle">Ce que je maîtrise</p>
          <h2 class="section-title">Mes <span class="text-primary">compétences</span></h2>
          <div class="section-divider mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (category of categories; track category.title) {
            <div class="card hover:shadow-[0_0_30px_rgba(251,230,119,0.08)]">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-xl">
                  {{ category.icon }}
                </div>
                <h3 class="text-white font-semibold text-lg">{{ category.title }}</h3>
              </div>

              <div class="flex flex-wrap gap-2">
                @for (skill of category.skills; track skill.name) {
                  @if (skill.level === 'maîtrisé') {
                    <span class="flex items-center gap-1.5 bg-primary/10 border border-primary/40 text-primary text-sm px-3 py-1.5 rounded-full">
                      <span class="text-base leading-none">{{ skill.icon }}</span>
                      {{ skill.name }}
                    </span>
                  } @else {
                    <span class="flex items-center gap-1.5 bg-bg-main border border-gray-700 text-gray-400 text-sm px-3 py-1.5 rounded-full">
                      <span class="text-base leading-none">{{ skill.icon }}</span>
                      {{ skill.name }}
                    </span>
                  }
                }
              </div>

            </div>
          }
        </div>

        <div class="flex justify-center items-center gap-6 mt-10">
          <span class="flex items-center gap-2 text-sm text-gray-400">
            <span class="w-3 h-3 rounded-full bg-primary/60 inline-block"></span> Maîtrisé
          </span>
          <span class="flex items-center gap-2 text-sm text-gray-400">
            <span class="w-3 h-3 rounded-full bg-gray-700 inline-block"></span> Bases
          </span>
        </div>

        <div class="mt-10 text-center">
          <p class="text-gray-500 text-sm mb-4 uppercase tracking-widest">Autres technologies</p>
          <div class="flex flex-wrap justify-center gap-2">
            @for (tag of otherTags; track tag) {
              <span class="bg-bg-card border border-gray-700 text-gray-400 text-xs px-3 py-1.5 rounded-full hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                {{ tag }}
              </span>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: '🖥️',
      skills: [
        { name: 'Angular', icon: '🅰️', level: 'maîtrisé' },
        { name: 'TypeScript', icon: '📘', level: 'maîtrisé' },
        { name: 'HTML / CSS / SCSS', icon: '🎨', level: 'maîtrisé' },
        { name: 'Flutter', icon: '🪽', level: 'bases' },
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: '.NET', icon: '🔷', level: 'maîtrisé' },
        { name: 'Spring Boot', icon: '🍃', level: 'maîtrisé' },
        { name: 'API REST', icon: '🔗', level: 'maîtrisé' },
        { name: 'Python', icon: '🐍', level: 'bases' },
      ]
    },
    {
      title: 'Outils, DevOps & Gestion',
      icon: '🛠️',
      skills: [
        { name: 'Git / GitHub', icon: '🐙', level: 'maîtrisé' },
        { name: 'Gestion de projet', icon: '📋', level: 'maîtrisé' },
        { name: 'Recueil du besoin & CDC', icon: '📝', level: 'maîtrisé' },
        { name: 'Présentation & livraison', icon: '🤝', level: 'maîtrisé' },
        { name: 'Docker', icon: '🐳', level: 'bases' },
        { name: 'CI/CD', icon: '🚀', level: 'bases' },
      ]
    },
  ];

  otherTags = ['Tailwind CSS', 'Postman', 'Figma', 'Méthodes agiles'];
}
