import { Component } from '@angular/core';
import { IntroductionComponent } from "./introduction/introduction.component";
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from "./my-skills/my-skills.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [IntroductionComponent, WhyMeComponent, MySkillsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
