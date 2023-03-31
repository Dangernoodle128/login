import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  show=true;

toggle(e:any){
  console.log(e)
  if(e.target.checked){
    this.show=false
  }else{
    this.show=true
  }
}
}
