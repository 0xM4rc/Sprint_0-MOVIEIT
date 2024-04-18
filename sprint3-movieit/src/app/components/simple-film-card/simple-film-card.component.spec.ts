import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFilmCardComponent } from './simple-film-card.component';

describe('SimpleFilmCardComponent', () => {
  let component: SimpleFilmCardComponent;
  let fixture: ComponentFixture<SimpleFilmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleFilmCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleFilmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
