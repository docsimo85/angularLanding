import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3blockComponent } from './section3block.component';

describe('Section3blockComponent', () => {
  let component: Section3blockComponent;
  let fixture: ComponentFixture<Section3blockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section3blockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section3blockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
