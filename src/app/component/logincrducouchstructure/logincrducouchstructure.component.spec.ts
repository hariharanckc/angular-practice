import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincrducouchstructureComponent } from './logincrducouchstructure.component';

describe('LogincrducouchstructureComponent', () => {
  let component: LogincrducouchstructureComponent;
  let fixture: ComponentFixture<LogincrducouchstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincrducouchstructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogincrducouchstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
