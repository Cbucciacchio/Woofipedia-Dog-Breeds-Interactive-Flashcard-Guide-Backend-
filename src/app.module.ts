import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreedModule } from './breed/breed.module';


@Module({
  imports: [BreedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
