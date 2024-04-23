import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknowncompoentComponent } from './unknowncompoent.component';

describe('UnknowncompoentComponent', () => {
  let component: UnknowncompoentComponent;
  let fixture: ComponentFixture<UnknowncompoentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknowncompoentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnknowncompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
