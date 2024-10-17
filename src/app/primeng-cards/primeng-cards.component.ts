import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-primeng-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './primeng-cards.component.html',
  styleUrls: ['./primeng-cards.component.css'],
})
export class PrimeNgCardComponent {}
