import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildContainerComponent } from './child-container.component';

describe('ChildContainerComponent', () => {
  let component: ChildContainerComponent;
  let fixture: ComponentFixture<ChildContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
