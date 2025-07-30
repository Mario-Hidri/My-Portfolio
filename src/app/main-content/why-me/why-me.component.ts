import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrls: ['./why-me.component.scss']
})
export class WhyMeComponent {
  scrollToContact(event: Event) {
    event.preventDefault();
    document.querySelector('#contactMe')?.scrollIntoView({ behavior: 'smooth' });
  }
}