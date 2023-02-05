import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
//To validate if the user login is in database
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user && user.password === password) {
      //TODO: make this more sucure
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(loginUserInput: LoginUserInput) {
    const user = await this.usersService.findOne(loginUserInput.username);
    const { password, ...result } = user;

    return {
      access_token: 'jwt', //TODO: change to jwt token
      result,
    };
  }
}
