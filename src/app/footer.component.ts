import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-bg-section border-t border-gray-800 py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-gray-600 text-sm">
          © {{ currentYear }} <span class="text-primary font-medium">Thomas OPPE</span>. Tous droits réservés.
        </p>
        <div class="flex items-center gap-6">
          <a href="https://github.com/Samtaupe" target="_blank" rel="noopener"
            class="text-gray-600 hover:text-primary transition-colors text-sm">GitHub</a>
          <a href="mailto:thomas.oppe@icloud.com"
            class="text-gray-600 hover:text-primary transition-colors text-sm">Email</a>
        </div>
        <p class="text-gray-700 text-xs">
          Fait avec <span class="text-primary">♥</span> en Angular
        </p>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
