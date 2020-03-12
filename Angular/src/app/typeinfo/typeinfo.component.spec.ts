import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeinfoComponent } from './typeinfo.component';

describe('TypeinfoComponent', () => {
  let component: TypeinfoComponent;
  let fixture: ComponentFixture<TypeinfoComponent>;

  beforeEach(async(() => {
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
