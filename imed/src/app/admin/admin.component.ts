import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
