import { Component } from '@angular/core';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  giphyWelcome = ''
  secondGiphy = ''
  constructor(private giphyService: GiphyService) { }
  ngOnInit() {
    this.getGiphies()
  }

  getGiphies(){
    this.giphyService.getById('l4JyOCNEfXvVYEqB2').subscribe(giphies => {
      this.giphyWelcome = giphies.data.images.original.url;
    });
    this.giphyService.getById('eXTue7sCt6ZvG').subscribe(giphies => {
      this.secondGiphy = giphies.data.images.original.url;
    });
    
  }
}
