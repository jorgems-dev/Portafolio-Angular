import { Component, signal } from '@angular/core';
import { Nav } from './layout/nav/nav';
import { Footer } from './layout/footer/footer';
import { Perfil } from './sections/perfil/perfil';
import { SobreMi } from './sections/sobre-mi/sobre-mi';
import { Experiencia } from './sections/experiencia/experiencia';
import { Proyectos } from './sections/proyectos/proyectos';
import { Contacto } from './sections/contacto/contacto';
import { FadeUp } from './fade-up';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Nav, Footer, Perfil, SobreMi, Experiencia, Proyectos, Contacto, FadeUp],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portafolio');
}
