import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2colsComponent } from './section2cols.component';

describe('Section2colsComponent', () => {
  let component: Section2colsComponent;
  let fixture: ComponentFixture<Section2colsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section2colsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section2colsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
