import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName: string = 'Joaquim';
  userData = {
    idade: 12,
    telefone: '38 99999-9999',
  };

  title = 'my-app';
}
