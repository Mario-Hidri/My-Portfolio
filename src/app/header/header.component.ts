import { Component } from "@angular/core";
import { LanguageService } from "../services/language.services";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
  isMenuOpen = false;
  currentLang: string = 'de'; // default language

  constructor(private languageService: LanguageService) {
    // Load saved language from localStorage on init
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      this.currentLang = savedLang;
      this.languageService.changeLanguage(savedLang);
    } else {
      this.languageService.changeLanguage(this.currentLang);
    }
  }

  changeLanguage(lang: string): void {
    this.languageService.changeLanguage(lang);
    this.currentLang = lang; 
  }

  isActive(lang: string): boolean {
    return this.currentLang === lang;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
