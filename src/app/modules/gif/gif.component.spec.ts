import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifComponent } from './gif.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GifComponent', () => {
  let component: GifComponent;
  let fixture: ComponentFixture<GifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
