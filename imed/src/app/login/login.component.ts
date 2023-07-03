import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from 'src/services/AuthService';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  msg: string|undefined;
  page = true
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    login: '',
    pass: ''
  });

  newUserForm = this.formBuilder.group({
    login: '',
    pass: '',
    passConfirm:'',
    name:'',
    crm:'',
  });

  onSubmit(): void {
    this.authService.login(this.loginForm.value.login!, this.loginForm.value.pass!).subscribe((response: any)=>{
      this.router.navigate(['/admin/schedule'])
    },err => {
      this.msg = "Login ou senha invalidos, por favor tente novamente!"
    });
  }

  newUser(){
    if((this.newUserForm.value.pass == this.newUserForm.value.passConfirm)){
      this.authService.newUser(this.newUserForm.value.login!, this.newUserForm.value.pass!, this.newUserForm.value.name!, this.newUserForm.value.crm!).subscribe((response: any)=>{
        this.page=true;
      });
    }
  }

}
