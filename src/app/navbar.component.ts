import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800/50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#hero" class="text-primary font-bold text-xl tracking-tight hover:text-primary-dark transition-colors">
          Thomas<span class="text-white">.</span>
        </a>

        <ul class="hidden md:flex items-center gap-8">
          @for (item of navItems; track item.href) {
            <li>
              <a [href]="item.href"
                class="text-gray-400 hover:text-primary transition-colors duration-200 text-sm font-medium">
                {{ item.label }}
              </a>
            </li>
          }
        </ul>

        <a href="#contact" class="hidden md:inline-flex btn-primary text-sm py-2 px-4">
          Me contacter
        </a>

        <button
          class="md:hidden text-gray-400 hover:text-primary transition-colors p-1"
          (click)="menuOpen.set(!menuOpen())">
          @if (menuOpen()) {
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          } @else {
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          }
        </button>
      </div>

      @if (menuOpen()) {
        <div class="md:hidden border-t border-gray-800 px-4 py-4 bg-[#0a0a0a]">
          <ul class="flex flex-col gap-4">
            @for (item of navItems; track item.href) {
              <li>
                <a [href]="item.href"
                  class="text-gray-400 hover:text-primary transition-colors duration-200 text-sm font-medium block"
                  (click)="menuOpen.set(false)">
                  {{ item.label }}
                </a>
              </li>
            }
            <li class="pt-2">
              <a href="#contact" class="btn-primary text-sm py-2 px-4 inline-block" (click)="menuOpen.set(false)">
                Me contacter
              </a>
            </li>
          </ul>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  menuOpen = signal(false);

  navItems = [
    { label: 'À propos', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Expériences', href: '#experience' },
    { label: 'Formation', href: '#education' },
    { label: 'Projets', href: '#projects' },
  ];
}
