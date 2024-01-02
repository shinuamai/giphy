import { Component } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
import { Giphy } from '../interfaces/giphy';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent {
  giphyAll: Giphy[] = []
  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    this.getPosts()
  }
  getPosts() {
    this.giphyService.getData().subscribe(giphy => {
      this.giphyAll = giphy
      console.log(this.giphyAll)
    })
  }

}
