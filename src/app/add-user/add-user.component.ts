import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ConfirmPasswordValidator } from "../must-match/validate-password";
import { TableService } from "../table/table.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
})
export class AddUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  othersList: any = ["Height", "Weight", "Disease"];
  usersList: Array<any> = [];
  genders = ['male', 'female'];
  // restrictedNames = ['Leela'];
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tableService: TableService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      dob: new FormControl("", [
        Validators.required,
        Validators.pattern(
          /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
        ),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
      ]),
      gender: new FormControl("true", [Validators.required]),
      others: new FormControl("", Validators.required),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl("", Validators.required),
      acceptTerms: new FormControl(false, [Validators.requiredTrue]),
      phoneNumber: new FormControl("", [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
      ]),
    });
  }

  get hobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email], ),
      }),

      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });

    // this.signUpForm.statusChanges.subscribe(value => {
    //   console.log(value);
    // });

    // this.signUpForm.patchValue({
    //   userData: {
    //     username: 'Hai Leela',
    //   },
    //   gender: 'male',
    //   hobbies: []
    // })
  }
  onSubmitted() {
    console.log(this.signUpForm);
    // this.signUpForm.reset();
  }

  // isRestrictedNames(control: FormControl): { [s: string]: boolean } {
  //   if (this.restrictedNames.includes(control.value)) {
  //     return { nameIsRestricted: true };
  //   }
  //   return null;
  // }

  // isRestrictedEmails(control: FormControl): Promise<any> | Observable<any> {
  //   let promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'test@test.com') {
  //         resolve({ emailIsRestricted: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 2000)
  //   });
  //   return promise;
  // }

  onAddHobby() {
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }


  get f() {
    return this.registerForm.controls;
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.valid) {
      this.tableService.array.push({id:Math.floor(Math.random() * 101),...this.registerForm.value});

      this.router.navigate(["/table"]);
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
