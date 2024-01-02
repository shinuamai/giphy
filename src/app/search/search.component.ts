import { Component, OnChanges } from '@angular/core';
import { Giphy } from '../interfaces/giphy';
import { GiphyService } from '../services/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnChanges{
  isInputFocused = false;
  giphySearch: Giphy[] = []
  valueSearch: string =''
  currentPage = 0;
  pageSize = 10;
  
  constructor(private giphyService: GiphyService) { }
  
  onFocus() {
  this.isInputFocused = true;
  }

  onBlur() {
    this.isInputFocused = false;
  }

  ngOnChanges() {
    if (this.isInputFocused) {
      this.currentPage = 0;
      this.SearchGiphies(this.valueSearch);
    }
  }
  SearchGiphies(value:any) {
    console.log(value)
    const offset = this.currentPage * this.pageSize;
    this.giphyService.search(value, offset).subscribe(giphies => {
      this.giphySearch = giphies.data;
    });
  }

  nextPage() {
    this.currentPage++;
    this.SearchGiphies(this.valueSearch);
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.SearchGiphies(this.valueSearch);
    }
  }

  performSearch() {
    this.currentPage = 0;
    this.SearchGiphies(this.valueSearch);
  }
}
