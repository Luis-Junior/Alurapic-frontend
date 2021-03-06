import { debounceTime } from 'rxjs/operators';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy{

  @Output() onTyping = new EventEmitter<string>();
  @Input() value: string = '';

  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce.pipe(
      debounceTime(300))
      .subscribe(filter => this.onTyping.emit(filter))
    }

    ngOnDestroy(): void {
      this.debounce.unsubscribe()
    }

  }
