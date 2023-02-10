import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeamInfoComponent } from './team-info.component';

describe('TeamInfoComponent', () => {
  let component: TeamInfoComponent;
  let fixture: ComponentFixture<TeamInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
