import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KitchenService {
  get KitchenAllGet() {
    return this.kitchen;
  }

  kitchen: {
    id: number;
    imgUrl: string;
    options: {};
    trueOptions: string;
  }[] = [
    {
      id: 1,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75itfckLSX6FKMd17xNknN1txMYaXpUwKpg&s',
      options: { a: 'oven', b: 'fridge', c: 'sink' },
      trueOptions: 'fridge',
    },
    {
      id: 2,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUhz0Usm1fM2Ar7bT6qK-9Ptq-Wv4i2HQcA&s',
      options: { a: 'microwave', b: 'toaster', c: 'pan' },
      trueOptions: 'microwave',
    },
    {
      id: 3,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMPIFPbhgKtsEIxQSt2UZe6LqKf33g272LQ&s',
      options: { a: 'pan', b: 'plate', c: 'cup' },
      trueOptions: 'pan',
    },
  ];
}
