import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
image :string;
constructor(){
  this.image ='./src/assets/groups.png';
}
  

}
