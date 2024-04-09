import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedFilmCardComponent } from './highlighted-film-card.component';

describe('HighlightedFilmCardComponent', () => {
  let component: HighlightedFilmCardComponent;
  let fixture: ComponentFixture<HighlightedFilmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightedFilmCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightedFilmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
