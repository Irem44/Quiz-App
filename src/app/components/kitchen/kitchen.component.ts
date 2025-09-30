import { Component } from '@angular/core';
import { KitchenService } from '../../services/kitchen.service';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  imports: [RouterLink, NgClass, NgFor, NgIf],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.scss',
})
export class KitchenComponent {
  constructor(public kitchen: KitchenService, private router: Router) {}
  selectedKey: string;
  isCorrect: boolean;
  counter: number = 1;
  isCorrectTrueCounter: boolean[] = [];
  isCorrectFalseCounter: boolean[] = [];
  isCorrectBlankCounter: boolean[] = [];
  objectKeys = Object.keys;

  increase() {
    if (!this.selectedKey) {
      this.isCorrectBlankCounter.push(true);
    }

    if (this.kitchen.KitchenAllGet.length - 1 < this.counter) {
      this.router.navigate(['/kitchenResult'], {
        queryParams: {
          trueCounter: this.isCorrectTrueCounter.length,
          falseCounter: this.isCorrectFalseCounter.length,
          blankCounter: this.isCorrectBlankCounter.length,
        },
      });
      this.counter = 1;
      this.selectedKey = '';
      this.isCorrect = null;
      this.isCorrectFalseCounter = [];
      this.isCorrectTrueCounter = [];
      this.isCorrectBlankCounter = [];
    } else {
      this.counter++;
      this.selectedKey = '';
      this.isCorrect = null;
    }
  }

  checkAnswer(selectedValue: string, trueOption: string, key: string) {
    this.selectedKey = key;
    this.isCorrect = selectedValue === trueOption;
    if (this.isCorrect === true) {
      this.isCorrectTrueCounter.push(this.isCorrect);
    } else if (this.isCorrect === false) {
      this.isCorrectFalseCounter.push(this.isCorrect);
    } else if (this.isCorrect === null) {
      this.isCorrectBlankCounter.push(this.isCorrect);
    }
  }
}
