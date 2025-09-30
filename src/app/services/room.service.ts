import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  get RoomAllGet() {
    return this.room;
  }

  room: {
    id: number;
    imgUrl: string;
    options: {};
    trueOptions: string;
  }[] = [
    {
      id: 1,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDwae8FNPIGYo1FYlapKyn0apFctwvSJuJw&s',
      options: { a: 'bed', b: 'sofa', c: 'table' },
      trueOptions: 'bed',
    },
    {
      id: 2,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRsKSvQ289uG7VarBkT9ThzXa2og01GpwTbQ&s',
      options: { a: 'chair', b: 'wardrobe', c: 'lamp' },
      trueOptions: 'wardrobe',
    },
    {
      id: 3,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefF3A2MFeim_tKLRCbygTlvsknlVKKszhFQ&s',
      options: { a: 'desk', b: 'lamp', c: 'mirror' },
      trueOptions: 'lamp',
    },
  ];
}
