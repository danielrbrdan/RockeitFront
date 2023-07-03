import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  itens= [
    { name: 'Minha agenda', route: 'admin/schedule'},
    { name: 'Meus pacientes', route: 'admin/patients' },
    { name: 'Meus profissionais', route: 'admin/professionals' },
    { name: 'Configurações', route: 'config' },
  ]
  
  title = 'Rockeit';
  constructor(
    private router: Router,
    public authService: AuthService
    ) { }
    
  ngOnInit(): void {
  }
}
