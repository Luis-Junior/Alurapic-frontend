import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

const cloud = environment.apiUrl +'/imgs/';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {

    @Input() description='';
    private _url = '';
    @Input() set url(url: string){
      if(!url.startsWith('data')){
        this._url = cloud+url
      }else{
        this._url = url
      }
    }
    get url(){
      return this._url
    }
}
