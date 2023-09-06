import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent {
  animais: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 7 },
    { name: 'Frida', type: 'Dog', age: 24 },
    { name: 'Bob', type: 'Horse', age: 2 },
  ];

  animalDetails: string = '';

  showAge(animal: Animal): void {
    this.animalDetails = `Idade: ${animal.age}`;
  }
}
