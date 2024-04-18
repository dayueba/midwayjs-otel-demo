import {Controller, Get, ILogger, Inject, Param} from '@midwayjs/core';
import {Context} from "@midwayjs/koa";

@Controller('/products')
export class ProductController {
    @Inject()
    ctx: Context;

    @Inject()
    logger: ILogger;

    @Get('/:id')
    async getProductById(@Param('id') id: string): Promise<{
      id: string;
      name: string;
    }> {
      console.log(this.ctx.traceId)
      this.logger.info(`receive req: id = ${id}`)
      return {
          id,
          name: 'test-product',
      };
    }
}
