import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="py-24 bg-bg-main">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <p class="section-subtitle">Prenons contact</p>
          <h2 class="section-title">Me <span class="text-primary">contacter</span></h2>
          <div class="section-divider mx-auto"></div>
          <p class="text-gray-400 max-w-xl mx-auto">
            Vous avez un projet, une opportunité, ou simplement envie d'échanger ?
            N'hésitez pas à me contacter.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          @for (contact of contacts; track contact.label) {
            <a [href]="contact.href" target="_blank" rel="noopener"
              class="card flex items-center gap-4 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(251,230,119,0.08)] hover:-translate-y-0.5 transition-all duration-300 group">
              <div class="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <img [src]="contact.icon" alt="{{ contact.label }}" class="w-8 h-8">
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wide mb-0.5">{{ contact.label }}</p>
                <p class="text-white font-medium group-hover:text-primary transition-colors">{{ contact.value }}</p>
              </div>
              <div class="ml-auto">
                <svg class="w-4 h-4 text-gray-600 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          }
        </div>

        <div class="text-center">
          <div class="relative inline-block">
            <div class="absolute inset-0 bg-primary/20 rounded-2xl blur-xl"></div>
            <a href="mailto:thomas.oppe@icloud.com"
              class="relative btn-primary text-lg px-10 py-4 inline-flex items-center gap-3">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Envoyer un email
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  contacts = [
    {
      label: 'Email',
      value: 'thomas.oppe@icloud.com',
      href: 'mailto:thomas.oppe@icloud.com',
      icon: `email.png`,
    }, 
    {
      label: 'GitHub',
      value: 'github.com/Samtaupe',
      href: 'https://github.com/Samtaupe',
      icon: `github.png`,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/thomas-oppe',
      href: 'https://www.linkedin.com/in/thomas-oppe-54a77334b/',
      icon: `linkedin.png`,
    },
    {
      label: 'Localisation',
      value: 'France',
      href: '#',
      icon: `location.png`,
    },
  ];
}
