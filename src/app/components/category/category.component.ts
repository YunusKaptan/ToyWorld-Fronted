import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  categories:Category[]=[];

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
}
