import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeserviceService } from '../services/recipeservice.service';
import { Recip } from '../models/recip';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes:Recip[]=[];
  categories = ['plat', 'dessert','entree'];
  constructor(private route:Router,
              private servicereceip:RecipeserviceService){}
  ngOnInit(): void {
    this.getRecip();
  }
  getRecip() {
    this.servicereceip.getRecipes().subscribe(data => {
      console.log("API response:", data);
      this.recipes = data;
    });
  }
  
  getRecipesByCategory(category: string): Recip[] {
    return this.recipes.filter((recipe) => recipe.category === category);
  }

}
