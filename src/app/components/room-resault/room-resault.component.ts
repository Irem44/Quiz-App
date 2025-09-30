import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-room-resault',
  imports: [RouterLink],
  templateUrl: './room-resault.component.html',
  styleUrl: './room-resault.component.scss',
})
export class RoomResaultComponent {
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
