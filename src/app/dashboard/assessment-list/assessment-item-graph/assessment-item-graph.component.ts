import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserService} from 'src/app/services/user.service';
import {Subject, takeUntil} from 'rxjs';
import {Graph} from 'src/app/interfaces/graph';

@Component({
  selector: 'auth-assessment-item-graph',
  standalone: true,
  imports: [],
  templateUrl: './assessment-item-graph.component.html',
  styleUrl: './assessment-item-graph.component.scss'
})
export class AssessmentItemGraphComponent implements OnInit, OnDestroy {

  graph: Graph;
  untilSubject$ = new Subject<void>();

  constructor(@Inject(MAT_DIALOG_DATA) private id: number, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUserAssessmentsGraph(this.id)
      .pipe(
        takeUntil(this.untilSubject$)
      )
      .subscribe(graphData => this.graph = graphData);
  }

  ngOnDestroy() {
    this.untilSubject$.next();
    this.untilSubject$.complete();
  }
}
