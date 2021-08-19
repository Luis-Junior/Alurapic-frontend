import { PlatformDetectorService } from './../../core/plataform-detector/plataform-detector.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  fromUrl:string = ''
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private platformDetectorService: PlatformDetectorService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params =>this.fromUrl = params['fromUrl'])
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.platformDetectorService.isPlatformBrowser() &&
    this.userNameInput.nativeElement.focus()
  }

  login(){
    const userName = this.loginForm.get('userName').value
    const password = this.loginForm.get('password').value
    this.authService.authenticate(userName,password).subscribe(
      ()=> {
        if(this.fromUrl){
          this.router.navigateByUrl(this.fromUrl)
        }else{
          this.router.navigate(['user',userName,])
        }
      },
      erro => {
        console.log(erro)
        this.loginForm.reset()
        this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus()
      }
    )

  }

}
