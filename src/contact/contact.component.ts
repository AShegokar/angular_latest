import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public loggedInUser: string = 'Ajinkya';

  public loggedInUser1: string = 'ajinkya rahane';

  public date = new Date();

  // public loggedInUser: string = 'PK';

  public data: any = [
    {id: 1, name: 'Ajinkya', isAdmin: true},
    {id: 2, name: 'kohli', isAdmin: false},
    {id: 3, name: 'Dhoni', isAdmin: false}
  ]

}
