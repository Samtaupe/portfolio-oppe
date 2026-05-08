import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
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

              <div class="flex flex-col gap-4">
                @for (skill of category.skills; track skill.name) {
                  <div>
                    <div class="flex justify-between items-center mb-1.5">
                      <div class="flex items-center gap-2">
                        <span class="text-base">{{ skill.icon }}</span>
                        <span class="text-gray-300 text-sm font-medium">{{ skill.name }}</span>
                      </div>
                      <span class="text-primary text-xs font-medium">{{ skill.level }}%</span>
                    </div>
                    <div class="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        class="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full transition-all duration-700"
                        [style.width.%]="skill.level">
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>

        <div class="mt-12 text-center">
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
        { name: 'Angular', icon: '🅰️', level: 90 },
        { name: 'TypeScript', icon: '📘', level: 85 },
        { name: 'React', icon: '⚛️', level: 70 },
        { name: 'HTML / CSS / SCSS', icon: '🎨', level: 90 },
        { name: 'RxJS', icon: '🔄', level: 75 },
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: '🟢', level: 80 },
        { name: 'Spring Boot', icon: '🍃', level: 70 },
        { name: 'Python', icon: '🐍', level: 65 },
        { name: 'REST API', icon: '🔗', level: 85 },
        { name: 'SQL / PostgreSQL', icon: '🗄️', level: 75 },
      ]
    },
    {
      title: 'Outils & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git / GitHub', icon: '🐙', level: 90 },
        { name: 'Docker', icon: '🐳', level: 70 },
        { name: 'Linux', icon: '🐧', level: 75 },
        { name: 'CI/CD', icon: '🚀', level: 65 },
        { name: 'Agile / Scrum', icon: '📋', level: 80 },
      ]
    },
  ];

  otherTags = ['MongoDB', 'Figma', 'Tailwind CSS', 'Bootstrap'];
}
