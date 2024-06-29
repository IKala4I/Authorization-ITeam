import {Component, Input} from '@angular/core';
import {Assessment} from 'src/app/interfaces/assessment';
import {AssessmentItemComponent} from 'src/app/dashboard/assessment-list/assessment-item/assessment-item.component';

@Component({
  selector: 'auth-assessment-list',
  standalone: true,
  imports: [
    AssessmentItemComponent
  ],
  templateUrl: './assessment-list.component.html',
  styleUrl: './assessment-list.component.scss'
})
export class AssessmentListComponent {

  @Input() assessments: Assessment[];
}
