import { PlatformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';
import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[immediateClick]'
})
export class immediateClickDirective implements OnInit {

  constructor(
    private element: ElementRef<any>,
    private platformDetectorService: PlatformDetectorService
  ) { }

  ngOnInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
      this.element.nativeElement.click()
  }
}
