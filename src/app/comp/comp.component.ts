import { Component } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {

  
  name:string =''
  email:string=''
  branch:string =''
  password:string =''
  submit=false
  dataArray: any[]=[];
  Submit(){
    Swal.fire({
      title:"Data Recived",
      text:`The user name ${this.name}is added`,
      icon:'success'
    })
    const newUser ={username:this.name, useremail:this.email,userbranch:this.branch,userpassword:this.password};
    this.dataArray.push(newUser);
    console.log(`The user name is ${this.name}`);
    this.submit=true
  }

}
