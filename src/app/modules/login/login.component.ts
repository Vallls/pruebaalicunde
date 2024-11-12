import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup
  private readonly authService = inject(AuthService)
  constructor(private fb: FormBuilder,private router: Router){

  }
  ngOnInit(): void {    
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  goToGif(){
      this.authService.setUser(this.loginForm.value);
      this.router.navigate(['/gif']);
  }
}
