import { Component } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { CommonModule } from '@angular/common';

import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-questions',
  imports: [CommonModule, RouterLink],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
  standalone: true,
})
export class QuestionsComponent {
  constructor(public questions: QuestionsService, private router: Router) {}
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

    if (this.questions.questionsAllGet.length - 1 < this.counter) {
      this.router.navigate(['/result'], {
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
