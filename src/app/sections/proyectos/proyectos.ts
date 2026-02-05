import { Component } from '@angular/core';
import { FadeUp } from '../../fade-up';

@Component({
  selector: 'app-proyectos',
  imports: [FadeUp],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {
  restapi() {
    window.open('https://github.com/jorgems-dev/StreetFit', '_blank');
  }
  cliente() {
    window.open('https://github.com/jorgems-dev/Cliente-StreetFit', '_blank');
  }
}
