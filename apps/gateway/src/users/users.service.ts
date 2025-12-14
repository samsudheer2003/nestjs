import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_SERVICE') private readonly client: ClientProxy,
  ) {}

  findAll(): Observable<any> {
    return this.client.send('users.find-all', {}); // message pattern + payload
  }
}
