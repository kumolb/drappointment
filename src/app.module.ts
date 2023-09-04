import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './app/db/database/database.module';
import { DoctorModule } from './app/user/doctor/doctor.module';
import { CityModule } from './app/global/city/city.module';
import { DegreeModule } from './app/global/degree/degree.module';
@Module({
  imports: [DatabaseModule, CityModule, DegreeModule, DoctorModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [DatabaseModule]
})
export class AppModule { }
