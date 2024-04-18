import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1712887369593_5417',
  koa: {
    port: 7072,
    contextLoggerFormat: info => {
      const ctx = info.ctx;
      return JSON.stringify({
        traceId: ctx.traceId,
        LEVEL: info.LEVEL.toLowerCase(),
        message: 'traceId=' + ctx.traceId + ' ' + info.message,
        project: 'user-service'
      })
    }
  },
  prometheus: {
    labels: {
      APP_NAME: 'user-service',
    },
  },
} as MidwayConfig;
