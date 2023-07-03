import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';
import { PasswordDTO } from '../models/dto/password';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  changePasswordResponse: boolean | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  changePassForm = this.formBuilder.group({
    currentPassword: '',
    newPassword: ''
  });

  onSubmit(): void {
    let passwordDTO: PasswordDTO = {
      ...this.changePassForm.value as unknown as PasswordDTO,
    };

    this.authService.changePassword(passwordDTO).subscribe(respose => {
      this.changePasswordResponse = respose;
    });
  }

}
