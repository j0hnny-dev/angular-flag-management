import { Component } from '@angular/core';
import { Feature, IFeature, ITag } from '../models/feature.model';

@Component({
  selector: 'app-new-feature',
  templateUrl: './new-feature.component.html',
  styleUrls: ['./new-feature.component.scss']
})
export class NewFeatureComponent {
  feature: Feature = {
      key: '',
      name: '',
      isEnabled: true,
      description: 'Description',
      tags: [
        {
          name: 'Red',
          color: 'FF0000'
        } as ITag,
        {
          name: 'Green',
          color: '00FF00'
        } as ITag,
        {
          name: 'Blue',
          color: '0000FF'
        } as ITag
      ]
    } as IFeature;
}
