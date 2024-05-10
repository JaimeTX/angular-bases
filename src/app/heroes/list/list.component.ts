import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string  []  = ['Spiderman',  'hulk'];
  public deletedhero?:  string = '';

  removelasthero():void{
  this.deletedhero= this.heroNames.pop();
 
  }

}
