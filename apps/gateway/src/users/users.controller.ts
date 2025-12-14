import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { firstValueFrom } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  async getUsers() {
    const result = await firstValueFrom(this.service.findAll());
    return result;
  }
}
