import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemIdentityComponent } from './list-item.component';

describe('ListItemIdentityComponent', () => {
  let component: ListItemIdentityComponent;
  let fixture: ComponentFixture<ListItemIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemIdentityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
