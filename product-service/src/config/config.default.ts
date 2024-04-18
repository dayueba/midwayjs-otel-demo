import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1712887392743_431',
  koa: {
    port: 7073,
    contextLoggerFormat: info => {
      const ctx = info.ctx;
      return JSON.stringify({
        traceId: ctx.traceId,
        LEVEL: info.LEVEL.toLowerCase(),
        message: 'traceId=' + ctx.traceId + ' ' + info.message,
        project: 'product-service'
      })
    }
  },
  prometheus: {
    labels: {
      APP_NAME: 'product-service',
    },
  },
} as MidwayConfig;
