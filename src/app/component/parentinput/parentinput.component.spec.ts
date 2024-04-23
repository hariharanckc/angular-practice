import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentinputComponent } from './parentinput.component';

describe('ParentinputComponent', () => {
  let component: ParentinputComponent;
  let fixture: ComponentFixture<ParentinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
