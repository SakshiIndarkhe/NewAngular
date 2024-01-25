import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent {

  name=''
  email=''
  submit=false
  Submit(){
    Swal.fire({
      title:"Data Recived",
      text:`The user name ${this.name}is added`,
      icon:'success'
    })
    console.log(`The user name is ${this,name}`);
    this.submit=true
  }

}
