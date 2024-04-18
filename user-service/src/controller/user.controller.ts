import {Controller, Get, ILogger, Inject, Param} from '@midwayjs/core';
import {Context} from "@midwayjs/koa";

@Controller('/users')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  logger: ILogger;

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<{
    id: string;
    name: string;
  }> {
    console.log(this.ctx.traceId);
    this.logger.info(`receive req: id = ${id}`)
    return {
        id,
        name: 'test-user'
    };
  }
}
