import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparelsComponent } from './apparels.component';

describe('ApparelsComponent', () => {
  let component: ApparelsComponent;
  let fixture: ComponentFixture<ApparelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
