import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { FooterComponent } from "./footer/footer.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private languageService: LanguageService, private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'en';
    this.languageService.changeLanguage(savedLang);
  }

  changeLanguage(lang: string): void {
    this.languageService.changeLanguage(lang);
  }
}