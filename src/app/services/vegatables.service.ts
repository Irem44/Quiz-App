import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VegatablesService {
  get VegatablesAllGet() {
    return this.vegatables;
  }

  vegatables: {
    id: number;
    imgUrl: string;
    options: {};
    trueOptions: string;
  }[] = [
    {
      id: 1,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7tfF09jDHCQ0bQ9AibqO1fcPQQOh7Z-cAg&s',
      options: { a: 'broccoli', b: 'carrot', c: 'onion' },
      trueOptions: 'broccoli',
    },
    {
      id: 2,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCWi4UYfyEYAIuJG0hRO8MJwz6HHBlYswVzw&s',
      options: { a: 'potato', b: 'carrot', c: 'tomato' },
      trueOptions: 'carrot',
    },
    {
      id: 3,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtCmap9XAVUgmM1q-2ylHjJtoR4rFb_bX2w&sg',
      options: { a: 'cucumber', b: 'tomato', c: 'pepper' },
      trueOptions: 'tomato',
    },
  ];
}
