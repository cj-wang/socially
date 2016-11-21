import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Meteor } from 'meteor/meteor';

import { Parties } from '../../../../both/collections/parties.collection';
import { Party } from '../../../../both/models/party.model';

import template from './parties-list.component.html';

@Component({
  selector: 'parties-list',
  template
})
export class PartiesListComponent {
  parties: Observable<Party[]>;

  constructor() {
    this.parties = Parties.find({}).zone();
  }

  removeParty(party: Party): void {
    if (!Meteor.userId()) {
      alert('Please log in to remove this party');
      return;
    }
    Parties.remove(party._id);
  }
}
