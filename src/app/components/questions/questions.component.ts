import { Component } from '@angular/core';
import { QuestionsService } from '../../services/questions.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions',
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss',
  standalone: true,
})
export class QuestionsComponent {
  constructor(public questions: QuestionsService) {}
  selectedKey: string;
  isCorrect: boolean;
  counter: number = 1;
  objectKeys = Object.keys;

  increase() {
    if (this.questions.questionsAllGet.length - 1 < this.counter) {
      alert('sorular bitti');
      this.counter = 1;
      this.selectedKey = '';
      this.isCorrect = null;
    } else {
      this.counter++;
      this.selectedKey = '';
      this.isCorrect = null;
    }
  }

  checkAnswer(selectedValue: string, trueOption: string, key: string) {
    this.selectedKey = key;
    this.isCorrect = selectedValue === trueOption;
  }
}
