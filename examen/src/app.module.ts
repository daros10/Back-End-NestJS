import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SistemOperativoController} from "./SistemaOperativo/sistemOperativo.controller";
import {AplicacionController} from "./Aplicacion/aplicacion.controller";
import {SistemOperativoService} from "./SistemaOperativo/sistemOperativo.service";
import {AplicacionService} from "./Aplicacion/aplicacion.service";
import {AutorizacionController} from "./autorizacion.controller";

@Module({
  imports: [],
  controllers: [AppController, SistemOperativoController, AplicacionController, AutorizacionController],
  providers: [AppService, SistemOperativoService, AplicacionService],
})
export class AppModule {}
