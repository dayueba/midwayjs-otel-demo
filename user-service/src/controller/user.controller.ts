import { Controller, Get, Param } from '@midwayjs/core';

@Controller('/users')
export class UserController {
  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<{
    id: string;
    name: string;
  }> {
    return {
        id,
        name: 'test-user'
    };
  }
}
