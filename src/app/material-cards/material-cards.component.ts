import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-material-cards',
  standalone: true,
  imports: [MatCardModule],  // Importa MatCardModule aquí
  templateUrl: './material-cards.component.html',
  styleUrls: ['./material-cards.component.css']
})
export class MaterialCardsComponent {}
