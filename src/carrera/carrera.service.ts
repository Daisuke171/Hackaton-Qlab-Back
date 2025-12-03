import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Carrera } from './entity/carrera.entity';
import { Prisma } from 'src/generated/prisma/client';

@Injectable()
export class CarreraService {
  constructor(private readonly prismaService: PrismaService) {}

  getCarreras() {
    return this.prismaService.carrera.findMany();
  }

  createCarrera(dto: Carrera) {
    const data: Prisma.CarreraCreateInput = {
      title: dto.title,
      course: dto.course,
    };

    return this.prismaService.carrera.create({ data });
  }

  updateCarrera(id: number, dto: Carrera) {
    const data: Prisma.CarreraUpdateInput = {
      title: dto.title,
      course: dto.course, // string[]
    };

    return this.prismaService.carrera.update({
      where: { id },
      data,
    });
  }

  deleteCarrera(id: number) {
    return this.prismaService.carrera.delete({
      where: { id },
    });
  }
}
