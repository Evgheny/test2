import { Injectable } from '@nestjs/common';
import Tarantool from 'tarantool-driver';


@Injectable()
export class TestService{
  private client;

  constructor() {
    console.log(Tarantool)
    this.client = new Tarantool({
      host: '127.0.0.1',
      port: 3301,
      username: 'admin',
      password: '',
    });
  }

  async getCustomers() {
    await this.client.connect();
    // const data = await this.client.select('customers', [], {limit: 20});
    // return data;
  }

  async getData() {
    return 'success';
  }
}
