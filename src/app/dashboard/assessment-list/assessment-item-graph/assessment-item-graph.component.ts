import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {UserService} from 'src/app/services/user.service';
import {Subject, takeUntil} from 'rxjs';
import {Graph} from 'src/app/interfaces/graph';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'auth-assessment-item-graph',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatProgressSpinner
  ],
  templateUrl: './assessment-item-graph.component.html',
  styleUrl: './assessment-item-graph.component.scss'
})
export class AssessmentItemGraphComponent implements OnInit, OnDestroy {

  graph: Graph;
  isGraphUndefined = false;
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
        if (graphData)
          this.graph = graphData;
        else
          this.isGraphUndefined = true;
      });
  }

  ngOnDestroy() {
    this.untilSubject$.next();
    this.untilSubject$.complete();
  }
}
