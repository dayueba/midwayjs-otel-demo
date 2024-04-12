import { Body, Controller, Inject, Post } from '@midwayjs/core';
import { HttpService } from '@midwayjs/axios';
import { Context } from '@midwayjs/koa';

@Controller('/orders')
export class OrderController {
  @Inject()
  httpService: HttpService;

  @Inject()
  ctx: Context;

  @Post('/')
  async createOrder(
    @Body() body: { uid: string; productId: string; count: number }
  ): Promise<any> {
    const { data: user } = await this.httpService.get(
      `http://user-service:7072/users/${body.uid}`
    );
    const { data: product } = await this.httpService.get(
      `http://product-service:7073/products/${body.productId}`
    );

    return {
      uid: body.uid,
      username: user.name,
      productId: body.productId,
      productName: product.name,
      count: body.count,
      traceId: this.ctx.traceId,
    };
  }
}
