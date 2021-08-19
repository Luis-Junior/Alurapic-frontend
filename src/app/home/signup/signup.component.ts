import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';
import { userNamePassword } from './username-password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit {

  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>

  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignupService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        email: ['',
          [
            Validators.required,
            Validators.email
          ]
        ],
        fullName: ['',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(40)
          ]
        ],
        userName: ['',
          [
            Validators.required,
            lowerCaseValidator,
            Validators.minLength(2),
            Validators.maxLength(30),
          ],
          [
            this.userNotTakenValidatorService.checkUserNameTaken()
          ]
        ],
        password: ['',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(14)
          ]
        ],
      },
      {
        validator: userNamePassword
      }
    )
    this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus()
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService.signup(newUser).subscribe(
      () => {
        this.router.navigate([''])
      },
      erro => {
        console.log(erro)
      }
    )
  }

}
