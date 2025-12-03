import { Module } from '@nestjs/common';
import { CarreraController } from './carrera.controller';
import { CarreraService } from './carrera.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CarreraController],
  providers: [CarreraService, PrismaService],
})
export class CarreraModule {}
