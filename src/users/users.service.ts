import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  //Mock database
  private readonly users = [
    { id: 1, username: 'helen', password: 'test1234' },
    { id: 2, username: 'ha', password: 'test1234' },
    { id: 3, username: 'bao', password: 'test1234' },
    { id: 4, username: 'cam', password: 'test1234' },
  ];

  create(createUserInput: CreateUserInput) {
    const user = { ...createUserInput, id: this.users.length + 1 };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
