import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerpageComponent } from './scannerpage.component';

describe('ScannerpageComponent', () => {
  let component: ScannerpageComponent;
  let fixture: ComponentFixture<ScannerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannerpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScannerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
