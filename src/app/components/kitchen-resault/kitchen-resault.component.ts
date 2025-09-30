import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-kitchen-resault',
  imports: [RouterLink],
  templateUrl: './kitchen-resault.component.html',
  styleUrl: './kitchen-resault.component.scss',
})
export class KitchenResaultComponent {
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
