import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
    selector: 'form-test',
    template: `
        <div style="text-align: center;">
            <h4>Form unit Testing</h4>
            <div>
                <form [formGroup]="loginForm" (submit)="loginFormSubmit()" novalidate>
                    <input type="text" name="loginEmail" placeholder="Enter Email" formControlName="loginEmail"><br>
                    <input type="password" name="loginPass" placeholder="Enter password" formControlName="loginPass"><br>
                    <button type="submit" [disabled]="!loginForm.valid">Login</button>
                </form>
            </div>
            <br><br>
            <p>
                Form Status(Valid) ? <code [style.color]=" loginForm.valid ? 'green' : 'red' "> {{ !loginForm.valid }} </code>
            </p>
        </div>
    `
})

export class FormTesting implements OnInit {

    loginForm: FormGroup;
    test: string = "Testing Props";
    
    constructor() {}
    
    ngOnInit() {
        this.createForm();
    }

    loginFormSubmit() {
        if( this.loginForm.valid ) {
            console.log('Form Validated and ready to submit!!');
        } else {
            console.log('Form yet to validate..');
        }
    }

    createForm() {
        this.loginForm = new FormGroup({
            loginEmail: new FormControl('', [
                Validators.required,
                Validators.email
            ]),
            loginPass: new FormControl('', [
                Validators.required
            ])
        })
    }
}