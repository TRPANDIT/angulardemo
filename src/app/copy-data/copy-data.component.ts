import { Component } from '@angular/core';

@Component({
  selector: 'app-copy-data',
  templateUrl: './copy-data.component.html',
  styleUrl: './copy-data.component.css'
})
export class CopyDataComponent {

  val:string = "";
  data:string ="";


  copyData(){
if( this.val == ""){
  this.val = this.data;
}
if( this.data == ""){
  this.data = this.val;
}
    //  this.val = this.data;
    // if(this.data!=this.val){
    //   this.data= this.val;
    // }
  }

  clearData(){
    this.val = "";
    this.data = "";
  }
}
