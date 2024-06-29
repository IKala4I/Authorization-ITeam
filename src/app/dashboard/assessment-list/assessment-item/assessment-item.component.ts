import { Component, Input } from '@angular/core';
import {Assessment} from 'src/app/interfaces/assessment';

@Component({
  selector: 'auth-assessment-item',
  standalone: true,
  imports: [],
  templateUrl: './assessment-item.component.html',
  styleUrl: './assessment-item.component.scss'
})
export class AssessmentItemComponent {

  @Input() assessment: Assessment;
}
