import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CarreraController } from './carrera/carrera.controller';
import { CarreraService } from './carrera/carrera.service';

@Module({
  imports: [],
  controllers: [AppController, CarreraController],
  providers: [AppService, PrismaService, CarreraService],
})
export class AppModule {}
