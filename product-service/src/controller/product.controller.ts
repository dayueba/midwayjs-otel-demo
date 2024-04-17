import {Controller, Get, Inject, Param} from '@midwayjs/core';
import {Context} from "@midwayjs/koa";

@Controller('/products')
export class ProductController {
    @Inject()
    ctx: Context;

    @Get('/:id')
    async getProductById(@Param('id') id: string): Promise<{
      id: string;
      name: string;
    }> {
      console.log(this.ctx.traceId)
      return {
          id,
          name: 'test-product',
      };
    }
}
