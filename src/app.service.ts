import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(headers: {'user-agent': string}): string {
    const userAgent = headers['user-agent']
    return userAgent
  }
}
