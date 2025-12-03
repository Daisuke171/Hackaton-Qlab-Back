import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { Carrera } from './entity/carrera.entity';

@Controller('carrera')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Get()
  getCarreras() {
    return this.carreraService.getCarreras();
  }

  @Post()
  createUser(@Body() dto: Carrera) {
    return this.carreraService.createCarrera(dto);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() dto: Carrera) {
    return this.carreraService.updateCarrera(Number(id), dto);
  }
}
