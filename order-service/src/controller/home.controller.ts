import { Controller, Get, Inject } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/')
  async home(): Promise<string> {
    console.log(this.ctx);
    return 'order service home traceId: ' + this.ctx.traceId;
  }
}
