import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { PhotoComment } from './../photo/photo-comment';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  photo$: Observable<Photo>
  photoId: number;
  constructor(
    private route:ActivatedRoute,
    private photoService:PhotoService,
    private router:Router,
    private alertService:AlertService,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.photoId
    this.photo$ = this.photoService.findById(this.photoId)
    this.photo$.subscribe(()=>{}, erro=>{
      console.log(erro)
      this.router.navigate(['not-found'])
    })
  }

  remove(){
    this.photoService.removePhoto(this.photoId).subscribe(
      ()=>{
        this.alertService.success("Photo removed",true)
        this.router.navigate(['/user', this.userService.getUserName()], {replaceUrl:true})
      },
      erro=> {
        this.alertService.warning("Could not delete the photo",true)
        console.log(erro)
      }
    )
  }

  like(photo:Photo){
    this.photoService.like(photo.id)
    .subscribe(liked => {
      if(liked){
        this.photo$ = this.photoService.findById(photo.id)
      }
    })
  }

}
