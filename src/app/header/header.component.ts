import { Component } from '@angular/core';
import { LanguageService } from '../services/language.services';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private languageService: LanguageService) {}

  isMenuOpen = false;

  changeLanguage(lang: string): void {
    this.languageService.changeLanguage(lang);
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
}
