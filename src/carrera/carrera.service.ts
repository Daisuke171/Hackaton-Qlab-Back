import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Carrera } from './entity/carrera.entity';
import { Prisma } from 'src/generated/prisma/client';

@Injectable()
export class CarreraService {
  constructor(private readonly prismaService: PrismaService) {}

  // Obtener todas las carreras
  getCarreras() {
    return this.prismaService.carrera.findMany({
      include: {
        facultad: true,
      },
    });
  }

  // Crear carrera
  createCarrera(dto: Carrera) {
    const data: Prisma.CarreraCreateInput = {
      nombreCarrera: dto.nombreCarrera,
      estadoCarrera: dto.estadoCarrera,
      facultad: {
        connect: { id: dto.facultadId },
      },
    };

    return this.prismaService.carrera.create({ data });
  }

  // Actualizar carrera
  updateCarrera(id: number, dto: Carrera) {
    const data: Prisma.CarreraUpdateInput = {
      nombreCarrera: dto.nombreCarrera,
      estadoCarrera: dto.estadoCarrera,
      facultad: {
        connect: { id: dto.facultadId },
      },
    };

    return this.prismaService.carrera.update({
      where: { id },
      data,
    });
  }

  // Eliminar carrera
  deleteCarrera(id: number) {
    return this.prismaService.carrera.delete({
      where: { id },
    });
  }
}
