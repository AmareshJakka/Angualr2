import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { from } from 'rxjs';
@Component({
    selector: 'new-form',
    templateUrl: './form.component.html'

})
export class NewFormComponent {
    loginForm  =new FormGroup({
        firstName : new FormControl(''),
        lastName  : new FormControl(''),
        address : new FormGroup({
          line1: new FormControl(''),
          city : new FormControl(''),
          state : new FormControl(''),


        })

    });
    onSubmit(){
      console.log(this.loginForm.value);        
    }
}