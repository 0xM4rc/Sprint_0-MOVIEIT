import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetphotosComponent } from './getphotos.component';

describe('GetphotosComponent', () => {
  let component: GetphotosComponent;
  let fixture: ComponentFixture<GetphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetphotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
