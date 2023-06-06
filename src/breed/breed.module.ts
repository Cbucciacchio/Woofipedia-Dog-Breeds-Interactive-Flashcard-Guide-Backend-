import { Module } from '@nestjs/common';
import { BreedController } from './breed.controller';

@Module({
  controllers: [BreedController]
})
export class BreedModule {}
