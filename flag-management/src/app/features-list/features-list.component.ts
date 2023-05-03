import { Component } from '@angular/core';
import { FeatureListItem, IFeature } from '../models/feature.model';

@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.scss']
})
export class FeaturesListComponent {
  isAllChecked: boolean = false;

  features: FeatureListItem[] = [
    new FeatureListItem({
      key: 'auto-switcher',
      name: 'Auto switcher',
      isEnabled: true,
      description: '',
      tags: []
    } as IFeature),
    new FeatureListItem({
      key: 'manual-switcher',
      name: 'Manual switcher',
      isEnabled: false,
      description: '',
      tags: []
    } as IFeature),
  ];

  
}
