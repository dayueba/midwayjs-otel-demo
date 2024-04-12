import { Controller, Get, Param } from '@midwayjs/core';

@Controller('/products')
export class ProductController {

    @Get('/:id')
    async getProductById(@Param('id') id: string): Promise<{
      id: string;
      name: string;
    }> {
      return {
          id,
          name: 'test-product'
      };
    }
}
