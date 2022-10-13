import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeromsgComponent } from './heromsg.component';

describe('HeromsgComponent', () => {
  let component: HeromsgComponent;
  let fixture: ComponentFixture<HeromsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeromsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeromsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
