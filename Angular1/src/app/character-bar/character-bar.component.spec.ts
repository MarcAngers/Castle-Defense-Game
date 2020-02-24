import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBarComponent } from './character-bar.component';

describe('CharacterBarComponent', () => {
  let component: CharacterBarComponent;
  let fixture: ComponentFixture<CharacterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
