import { Component,VERSION } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(public appService: AppserviceService) { }

  
}
