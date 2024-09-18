import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import Tarantool from 'tarantool-driver';

@Module({
  imports: [],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {
  // private client;
  //
  // constructor() {
  //   this.client = new Tarantool({
  //     host: '127.0.0.1',
  //     port: 3301,
  //     username: 'admin',
  //     password: '',
  //   });
  // }
  //
  // getClient() {
  //   return this.client;
  // }
}
