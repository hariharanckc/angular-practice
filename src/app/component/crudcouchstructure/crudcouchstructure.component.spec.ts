import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcouchstructureComponent } from './crudcouchstructure.component';

describe('CrudcouchstructureComponent', () => {
  let component: CrudcouchstructureComponent;
  let fixture: ComponentFixture<CrudcouchstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudcouchstructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudcouchstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
