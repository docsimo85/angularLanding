import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3colsComponent } from './section3cols.component';

describe('Section3colsComponent', () => {
  let component: Section3colsComponent;
  let fixture: ComponentFixture<Section3colsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section3colsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section3colsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
