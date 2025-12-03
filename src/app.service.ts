import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  getHello() {
    return this.prismaService.user.findMany();
  }

  createHello(data: { name: string; email: string; password: string }) {
    return this.prismaService.user.create({
      data,
    });
  }
}
