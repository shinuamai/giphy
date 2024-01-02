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
  currentPage = 0;
  pageSize = 10;

  constructor(private giphyService: GiphyService) { }

  ngOnInit() {
    this.getGiphies()
  }

  getGiphies() {
    const offset = this.currentPage * this.pageSize;
    this.giphyService.getData(offset).subscribe(giphies => {
      this.giphyAll = giphies.data;

    });
  }

  nextPage() {
    this.currentPage++;
    this.getGiphies();
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getGiphies();
    }
  }
}
