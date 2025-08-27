import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core'; 
import { RouterLink } from '@angular/router';  

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],  
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
  privacyPolicyUrl = '/privacy-policy';
  legalNotice = '/legal-notice';
}
