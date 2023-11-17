import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'list-item-identity',
  templateUrl: './list-item-identity.component.html',
  styleUrls: ['./list-item-identity.component.scss']
})
export class ListItemIdentityComponent {

  @Input() email: string = '';
  @Output('delete') emitDeleteEmail: EventEmitter<string> = new EventEmitter();

  deleteEmail(email: string) {
    if (email) {
      this.emitDeleteEmail.emit(email);
    }    
  }
}
