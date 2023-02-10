import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TypeinfoComponent } from './typeinfo.component';

describe('TypeinfoComponent', () => {
  let component: TypeinfoComponent;
  let fixture: ComponentFixture<TypeinfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
