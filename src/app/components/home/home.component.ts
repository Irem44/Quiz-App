import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  constructor(private router: Router) {}

  onCategoryChange(event: any) {
    const selectedValue = event.target.value;

    switch (selectedValue) {
      case 'Fruits':
        this.router.navigate(['questions']);
        break;
      case 'Vegatables':
        this.router.navigate(['vegatables']);
        break;
      case 'Room':
        this.router.navigate(['room']);
        break;
      case 'Kitchen':
        this.router.navigate(['kitchen']);
        break;
      default:
        this.router.navigate(['home']);
        break;
    }
  }
}
