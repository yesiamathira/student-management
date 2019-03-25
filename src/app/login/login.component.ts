import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  data = {username:"",password:""};
  
  constructor(
    private router: Router) {
  }
  
  
  onLogin(){
    if(this.data.username == this.data.password) {
      // alert('username / password is correct.');
      this.router.navigate(['/dashboard']);
    }else{
      alert(' login does not work');
    }
  }




  
  ngOnInit() {
  }

}
