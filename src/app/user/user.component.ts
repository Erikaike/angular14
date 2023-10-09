import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { User } from './userModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private fb: FormBuilder) {};

  submitted: boolean = false;
  user = new User('','','',{street:'',postCode:'',city:''});
  newUser!: User[];

  newUserForm = this.fb.group({
    username: new FormControl(''),
    email:new FormControl(''),
    password: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      postCode: new FormControl(''),
      city: new FormControl(''),
    })
  })

  ngOnInit(): void {
  
  }
  
  
  onSubmit() {
    this.submitted = true;
    const newUser = this.newUserForm.value;
    console.log(newUser);
  }
}
