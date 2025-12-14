import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Ram' },
    { id: 2, name: 'Kumar' },
  ];

  findAll() {
    return this.users;
  }
}
