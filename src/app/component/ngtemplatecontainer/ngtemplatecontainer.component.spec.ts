import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplatecontainerComponent } from './ngtemplatecontainer.component';

describe('NgtemplatecontainerComponent', () => {
  let component: NgtemplatecontainerComponent;
  let fixture: ComponentFixture<NgtemplatecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtemplatecontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtemplatecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
