import { Component,   EventEmitter,   OnInit, Output } from '@angular/core';
import {Contact} from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit{
  contacts: Contact[] = [
    new Contact(
      '1', 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', '../../assets/images/jacksonk.jpg', undefined
    ),
    new Contact(
      '2', 'R. Rex Barzee Jackson', 'barzeer@byui.edu@byui.edu', '208-496-3768', '../../assets/images/barzeer.jpg', undefined
    )
  ];

  @Output() selectedContactEvent = new EventEmitter<Contact>();

  onSelected(contact: Contact){
    this.selectedContactEvent.emit(contact);
  }

  constructor(){}

  ngOnInit(){}

}
