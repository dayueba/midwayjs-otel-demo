import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1712887369593_5417',
  koa: {
    port: 7072,
  },
  prometheus: {
    labels: {
      APP_NAME: 'user-service',
    },
  },
} as MidwayConfig;
