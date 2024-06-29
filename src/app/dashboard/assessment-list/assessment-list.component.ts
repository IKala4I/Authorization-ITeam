import {Component, Input} from '@angular/core';
import {Assessment} from 'src/app/interfaces/assessment';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'auth-assessment-list',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './assessment-list.component.html',
  styleUrl: './assessment-list.component.scss'
})
export class AssessmentListComponent {

  @Input() assessments: Assessment[];
  displayedColumns = ['image', 'name', 'usersResolved', 'active'];

  showGraph(event: Assessment) {
    console.log(event);
  }
}
