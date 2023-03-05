import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  isSubmitted: boolean = false;
  validUser: boolean = true;
  constructor(private service: ServService, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.controls.email.value && this.loginForm.controls.password.value) {
      this.validateUser();
    }
  }

  async validateUser() {
    const user = await this.service.getUserData(this.loginForm.controls.email.value);
    if (user.length > 0 && user[0]['email'] == this.loginForm.controls.email.value && this.loginForm.controls.password.value == user[0]['password']) {
      this.service.isUserLogged = true;
      this.validUser = true;
      this.service.userName = user[0]['name'];
      this.router.navigate(['/dashboard']);
    } else {
      this.service.isUserLogged = false;
      this.validUser = false;
    }
  }
}