import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categories } from '../models/categories.const';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
@Output() selectedCategory = new EventEmitter<string>();
categoriesButton: string[]= []

ngOnInit(){
  this.categoriesButton = Object.keys(Categories);
}

filterCategory(event:string){
  this.selectedCategory.emit(event);
}
}
