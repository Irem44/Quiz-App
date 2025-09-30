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
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DCrRwRXJpBuTzK97HC-6sWJrSmNtg6OZng&s',
      options: { a: 'apple', b: 'cherry', c: 'plum' },
      trueOptions: 'plum',
    },
    {
      id: 3,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCj_wqKZGoCHHbqYcG8PGB3vo3ffWCFcqWg&s',
      options: { a: 'pear', b: 'melon', c: 'banana' },
      trueOptions: 'banana',
    },
    {
      id: 4,
      imgUrl:
        'https://png.pngtree.com/png-clipart/20220620/original/pngtree-hand-drawn-delicious-orange-fruit-clipart-in-psd-and-png-png-image_8137237.png',
      options: { a: 'orange', b: 'peach', c: 'plum' },
      trueOptions: 'orange',
    },
    {
      id: 5,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgDusEPWK6rQ9tz0LYbA0D9wckymLZpM_qGA&s',
      options: { a: 'peach', b: 'cherry', c: 'lemon' },
      trueOptions: 'peach',
    },
    {
      id: 6,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRs9G0vARHikSeyyVvbY0QQlKBvXgee8AJA&s',
      options: { a: 'pear', b: 'lemon', c: 'kiwi' },
      trueOptions: 'lemon',
    },
    {
      id: 7,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_qhZLrsEeJKeZ3Hhpw8Zr5a1tzyRs2gVdA&s',
      options: { a: 'pear', b: 'apple', c: 'cherry' },
      trueOptions: 'pear',
    },
    {
      id: 8,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9-DlIzY90zKxS5bamFowzhKh5XzfGPlZFA&s',
      options: { a: 'kiwi', b: 'banana', c: 'grape' },
      trueOptions: 'kiwi',
    },
    {
      id: 9,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHyS00aidgKALIRRu4wpowCiRN1E3yfna0Q&s',
      options: { a: 'grapefruit', b: 'plum', c: 'peach' },
      trueOptions: 'grapefruit',
    },
    {
      id: 10,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFT-bteAg0wbO0yBMfyM8fLq0vG5At3wwLtQ&s',
      options: { a: 'mango', b: 'orange', c: 'pear' },
      trueOptions: 'mango',
    },
    {
      id: 11,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcKoVoWcruOsX27CaAn-RK3H_MLTmVgFiqg&s',
      options: { a: 'melon', b: 'watermelon', c: 'pear' },
      trueOptions: 'watermelon',
    },
    {
      id: 12,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvh5CSLuVGY7U8vpjOFg1PEYpbxeCdjzIrxw&s',
      options: { a: 'strawberry', b: 'cherry', c: 'apple' },
      trueOptions: 'strawberry',
    },
  ];
}
