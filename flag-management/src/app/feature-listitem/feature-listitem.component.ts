import { Component, Input } from '@angular/core';
import { FeatureListItem } from '../models/feature.model';

@Component({
  selector: 'app-feature-listitem',
  templateUrl: './feature-listitem.component.html',
  styleUrls: ['./feature-listitem.component.scss']
})
export class FeatureListitemComponent {
  @Input() feature: FeatureListItem | undefined = undefined;
}
