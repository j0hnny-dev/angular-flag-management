import { Component } from '@angular/core';

@Component({
  selector: 'list-identities',
  templateUrl: './list-identities.component.html',
  styleUrls: ['./list-identities.component.scss']
})
export class ListIdentitiesComponent {
  emails: string[] = [
    'j.nagy@hvg.hu'
  ];

  onDeleteEmail(email: string) {
    alert('PNA');
  }
}
