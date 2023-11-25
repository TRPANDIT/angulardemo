import { Component } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent {

  fName:string = "";
  lName:string = "";
  email:string = "";

  fNamePrint:string = "";
  lNamePrint:string = "";
  emailPrint:string = "";
  submitData(){
      this.fNamePrint = this.fName;
      this.lNamePrint = this.lName;
      this.emailPrint = this.email;
  }
}
