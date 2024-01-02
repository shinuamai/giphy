import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyCardComponent } from './giphy-card.component';

describe('GiphyCardComponent', () => {
  let component: GiphyCardComponent;
  let fixture: ComponentFixture<GiphyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiphyCardComponent]
    });
    fixture = TestBed.createComponent(GiphyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
