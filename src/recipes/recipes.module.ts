import { Module } from '@nestjs/common';
import { DataScalar } from '../common/scalars/data.scalar';
import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';

@Module({
  providers: [RecipesResolver, RecipesService, DataScalar],
})
export class RecipesModule {}
