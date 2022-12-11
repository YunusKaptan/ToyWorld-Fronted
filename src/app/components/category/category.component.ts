import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  categories:Category[]=[];
  currentCategory?:Category;

  constructor(
    private categoryService : CategoryService

  ){}

  ngOnInit(): void {
      this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(repsonse=>{
      this.categories=repsonse.data
     });
  }
  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }
  clearCurrentCategory(){
    this.currentCategory=undefined;
  }

  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllCategoryClass(){
       if(!this.currentCategory){
        return "list-group-item active"
       }
       else{
        return "list-group-item"
       }
  }
}
