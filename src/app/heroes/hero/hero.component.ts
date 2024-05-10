import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

public name: string  = 'ironman';

public age: number = 45;

get capitalizedName():string{

return this.name.toUpperCase();

}


getheroDescripcion():string{

  return  `${this.name}  - ${this.age}`;
}

changehero():void{

    this.name = "Spiderman";
  
}

changeAge():void{
  this.age = 25;

}

resetForm():void{
  this.name = 'Ironman';
  this.age =  45 ;
}

}
