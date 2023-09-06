import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  cor = '#ccc';
  background = '#000';
  classes = ['text-green', 'bg-blue'];
}
