import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LevelSelectComponent } from './level-select.component';

describe('LevelSelectComponent', () => {
  let component: LevelSelectComponent;
  let fixture: ComponentFixture<LevelSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
