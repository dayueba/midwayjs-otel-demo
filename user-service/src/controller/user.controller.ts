import {Controller, Get, Inject, Param} from '@midwayjs/core';
import {Context} from "@midwayjs/koa";

@Controller('/users')
export class UserController {
  @Inject()
  ctx: Context;

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<{
    id: string;
    name: string;
  }> {
    console.log(this.ctx.traceId);
    return {
        id,
        name: 'test-user'
    };
  }
}
