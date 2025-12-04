import { Facultad } from 'src/generated/prisma/client';

export class Carrera {
  nombreCarrera: string;
  facultadId: number;
  estadoCarrera: boolean;
}
