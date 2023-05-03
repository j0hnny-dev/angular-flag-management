import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureListitemComponent } from './feature-listitem.component';

describe('FeatureListitemComponent', () => {
  let component: FeatureListitemComponent;
  let fixture: ComponentFixture<FeatureListitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureListitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureListitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
