import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { Recipe } from './models/recipe.model';
import { RecipesArgs } from './dto/recipes.args';

@Injectable()
export class RecipesService {
  async create(data: NewRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findByOne(id: string): Promise<Recipe> {
    return {} as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return [] as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
