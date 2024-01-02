import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-giphy-card',
  templateUrl: './giphy-card.component.html',
  styleUrls: ['./giphy-card.component.css']
})
export class GiphyCardComponent {
  @Input() title: string = '';
  @Input() id: string = '';
  @Input() imageUrl: string = '';
}
