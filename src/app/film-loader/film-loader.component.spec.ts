import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmLoaderComponent } from './film-loader.component';

describe('FilmLoaderComponent', () => {
  let component: FilmLoaderComponent;
  let fixture: ComponentFixture<FilmLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
