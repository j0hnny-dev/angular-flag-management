import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemFeatureComponent } from './list-item-feature.component';

describe('ListItemFeatureComponent', () => {
  let component: ListItemFeatureComponent;
  let fixture: ComponentFixture<ListItemFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
