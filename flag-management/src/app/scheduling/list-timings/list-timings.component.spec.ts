import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTimingsComponent } from './list-timings.component';

describe('ListTimingsComponent', () => {
  let component: ListTimingsComponent;
  let fixture: ComponentFixture<ListTimingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTimingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
