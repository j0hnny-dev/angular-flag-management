import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeatureListItem, IFeature } from '../models/feature.model';

@Component({
  selector: 'list-item-feature',
  templateUrl: './list-item-feature.component.html',
  styleUrls: ['./list-item-feature.component.scss']
})
export class ListItemFeatureComponent {
  @Input() feature: FeatureListItem | undefined = undefined;
  @Output() emitDelete: EventEmitter<IFeature> = new EventEmitter();

  onRemove(feautre: IFeature) {
    feautre.isRemove = true;
    this.emitDelete.emit(feautre);    
  }
}
