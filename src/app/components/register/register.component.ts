import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  isSubmitted: boolean = false;
  userAdded: boolean = false;
  constructor(private service: ServService) { }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.registerForm.controls.email.value && this.registerForm.controls.password.value && this.registerForm.controls.name.value) {
      this.addUser();
    }
  }

  async addUser() {
    const addedUser = await this.service.addUserData(this.registerForm.controls.name.value, this.registerForm.controls.email.value, this.registerForm.controls.password.value);
    if (addedUser?.length > 0) {
      this.userAdded = true;
    } else {
      this.userAdded = false;
    }
  }
}
