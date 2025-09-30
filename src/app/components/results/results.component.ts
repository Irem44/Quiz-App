import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  trueCounter: any;
  falseCounter: any;
  blankCounter: any;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParamMap.subscribe({
      next: (params) => {
        this.trueCounter = params.get('trueCounter');
        this.falseCounter = params.get('falseCounter');
        this.blankCounter = params.get('blankCounter');
      },
    });
  }
}
