/*import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card'; // Ajuste o caminho para onde está a pasta do card

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    CardComponent // <-- Adicione aqui para o Angular reconhecer a tag <app-card>
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { }
