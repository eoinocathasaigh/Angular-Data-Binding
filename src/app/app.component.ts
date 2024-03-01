import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-app';
  hidden:boolean = true;

  clicks:number = 0;

  //Whenever the button is pressed the clicks variable increments and thats reflected on the screen
  btnClicked(){
    this.clicks++;
  }

  //Method handeling the double click of the star - it sets the value of the hidden text to false revealing it
  onDoubleClick(){
    //If the star is hidden then it will be revealed
    //However if it isnt hidden then it will disappear
    /*
    if(this.hidden === true)
    {
      this.hidden = false;
    }
    else
    {
      this.hidden = true;
    }
    */

    //Could also do it like this
    this.hidden = !this.hidden;
  }
}
