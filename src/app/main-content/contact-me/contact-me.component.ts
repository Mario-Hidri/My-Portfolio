import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    CommonModule,      
    FormsModule,
    TranslateModule,
    RouterModule
  ],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactFormComponent {
  privacyPolicyUrl = '/privacy-policy';
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  mailTest = false;

  // 👉 neue States für Meldungen
  successMessage = '';
  errorMessage = '';

  post = {
    endPoint: 'https://mario-hidri.de/sendMail.php',
    body: (payload: any) => payload,
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'text' as 'text',
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options
        )
        .subscribe({
          next: () => {
            this.successMessage = '✅ Thank you! Your email was sent successfully.';
            this.errorMessage = '';
            ngForm.resetForm();

            // Meldung nach 5 Sekunden wieder ausblenden
            setTimeout(() => (this.successMessage = ''), 5000);
          },
          error: (err) => {
            console.error(err);
            this.errorMessage = '❌ Oops! Something went wrong. Please try again.';
            this.successMessage = '';

            // Error nach 5 Sekunden ausblenden
            setTimeout(() => (this.errorMessage = ''), 5000);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.successMessage = '✅ (Test Mode) Form submitted successfully.';
      this.errorMessage = '';
      ngForm.resetForm();

      setTimeout(() => (this.successMessage = ''), 5000);
    }
  }
}
