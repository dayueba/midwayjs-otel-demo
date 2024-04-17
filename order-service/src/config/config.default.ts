import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1712887379660_9146',
  koa: {
    port: 7071,
  },
  prometheus: {
    labels: {
      APP_NAME: 'order-service',
    },
  },
} as MidwayConfig;
