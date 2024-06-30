import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {UserService} from 'src/app/services/user.service';
import {Subject, takeUntil} from 'rxjs';
import {Graph} from 'src/app/interfaces/graph';

@Component({
  selector: 'auth-assessment-item-graph',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent
  ],
  templateUrl: './assessment-item-graph.component.html',
  styleUrl: './assessment-item-graph.component.scss'
})
export class AssessmentItemGraphComponent implements OnInit, OnDestroy {

  graph: Graph;
  untilSubject$ = new Subject<void>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    id: number,
    assessmentName: string
  }, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserAssessmentsGraph(this.data.id)
      .pipe(
        takeUntil(this.untilSubject$)
      )
      .subscribe(graphData => {
        this.graph = graphData;
      });
  }

  ngOnDestroy() {
    this.untilSubject$.next();
    this.untilSubject$.complete();
  }
}
