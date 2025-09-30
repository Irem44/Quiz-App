import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vegatables-resault',
  imports: [RouterLink],
  templateUrl: './vegatables-resault.component.html',
  styleUrl: './vegatables-resault.component.scss',
})
export class VegatablesResaultComponent {
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
