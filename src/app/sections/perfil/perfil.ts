import { Component } from '@angular/core';
import { FadeUp } from '../../fade-up';

@Component({
  selector: 'app-perfil',
  imports: [FadeUp],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  descargarCV() {
      window.open('recursos/CVMihaiSilePavelAsiminei2026.pdf', '_blank');
    }

    irAContacto() {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }

    linkedin() {
      window.open('https://linkedin.com/in/https://www.linkedin.com/in/mihai-sile-pavel-asiminei-ba2423398/?skipRedirect=true', '_blank');
    }

    github() {
      window.open('https://github.com/https://github.com/jorgems-dev', '_blank');
    }
}
