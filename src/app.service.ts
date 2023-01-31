import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! I am Helen. Nice to see you here! Have a nice day!';
  }
}
