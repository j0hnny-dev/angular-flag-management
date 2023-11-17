import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemTimingComponent } from './list-item-timing.component';

describe('ListItemTimingComponent', () => {
  let component: ListItemTimingComponent;
  let fixture: ComponentFixture<ListItemTimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemTimingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
