import { Component } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent {
    email=''
    password=''
    Submit()
    {
      console.log(`The user email is ${this.email}`);
      console.log(`The user password is ${this.password}`);

    }
}
