import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TodoList';
  inputBox:any;
  listContainer:any;
  constructor(private renderer: Renderer2){}

  ngOnInit():void{
  
  }
  addTask() {
    this.inputBox = document.getElementById("input-box");
    this.listContainer = document.getElementById("list-container");
  
    if (this.inputBox.value === '') {
      alert("You must enter something!");
    } else {
      var li = document.createElement('li');
      li.innerHTML = this.inputBox.value;
      
      // Apply CSS properties to the li element
      this.renderer.setStyle(li, 'list-style', 'none');
      this.renderer.setStyle(li, 'fontSize', '17px');
      this.renderer.setStyle(li, 'padding', '12px 8px 12px 50px');
      this.renderer.setStyle(li, 'user-select', 'none');
      this.renderer.setStyle(li, 'cursor', 'pointer');
      
      // Create the span element
      var span = document.createElement("span");
      span.innerHTML = "\u00d7";
  
      // Apply CSS properties to the span element
      this.renderer.setStyle(span, 'position', 'absolute');
      this.renderer.setStyle(span, 'right', '0');
      this.renderer.setStyle(span, 'top', '5px');
      this.renderer.setStyle(span, 'width', '40px');
      this.renderer.setStyle(span, 'height', '40px');
      this.renderer.setStyle(span, 'fontSize', '22px');
      this.renderer.setStyle(span, 'color', '#555');
      this.renderer.setStyle(span, 'line-height', '40px');
      this.renderer.setStyle(span, 'textAlign', 'center');
      this.renderer.setStyle(span, 'border-radius', '50%');
  
      // Append the span to the li element
      li.appendChild(span);
  
      // Append the li to the list container
      this.renderer.appendChild(this.listContainer, li);
  
      this.inputBox.value = ''; // Clear the input box after adding a task
    }
  }
  
}
 