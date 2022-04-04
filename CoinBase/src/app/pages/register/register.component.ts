import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm') form!: NgForm

  errors: string = ''

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    const data = {
      'username': this.form.value.username,
      'email': this.form.value.email,
      'password': this.form.value.password,
    }
    this.authService.register(data).subscribe(response => {
      localStorage.setItem('accessToken', response.sessionToken);
      localStorage.setItem('userId', response.objectId);
      this.router.navigate(['/home'])
    })
  }
}
