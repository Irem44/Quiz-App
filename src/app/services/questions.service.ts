import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  get questionsAllGet() {
    return this.questions;
  }

  questions: {
    id: number;
    imgUrl: string;
    options: {};
    trueOptions: string;
  }[] = [
    {
      id: 1,
      imgUrl:
        'https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg',
      options: { a: 'apple', b: 'cherry', c: 'grape' },
      trueOptions: 'apple',
    },
    {
      id: 2,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYO3Iq4Z00nr9SjO6FaHoE9p_abtcBYLQnQ&s',
      options: { a: 'apple', b: 'cherry', c: 'plum' },
      trueOptions: 'plum',
    },
  ];
}
