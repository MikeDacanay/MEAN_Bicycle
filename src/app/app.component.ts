import { Component } from '@angular/core';
import { User } from './user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Array<User> = [
  	new User('Mike','Dacanay','aaa@aaa.com','password123'),
  	new User('Joao','Dacanay','aaa@aaa.com','password123'),
  	new User('Miguel','Dacanay','aaa@aaa.com','password123')
  ]

  user = new User();

  onSubmit(){
  	console.log('valid');
  }
}
