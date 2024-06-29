import {Component, Input} from '@angular/core';
import {Assessment} from 'src/app/interfaces/assessment';
import {MatTableModule} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {
  AssessmentItemGraphComponent
} from 'src/app/dashboard/assessment-list/assessment-item-graph/assessment-item-graph.component';

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

  constructor(private dialog: MatDialog) {
  }

  showGraph(id: number) {
    this.dialog.open(AssessmentItemGraphComponent, {
      data: id
    });
  }
}
