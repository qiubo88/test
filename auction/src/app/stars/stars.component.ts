import {Component, Input, OnInit, SimpleChanges, OnChanges,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()//被这个装饰器装饰的变量由父组件传入<app-stars [rating]="product.rating"></app-stars>
  private rating:number = 0;
  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();
  private stars:boolean[];
  @Input()
  private readonly: boolean = true;

  constructor() { }

  ngOnInit() {
   
  }

  clickStar(index:number){
    if(! this.readonly){
      this.rating =index + 1;
      // this.ngOnInit();
      this.ratingChange.emit(this.rating)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.stars=[];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating);
    }
    
  }
}
