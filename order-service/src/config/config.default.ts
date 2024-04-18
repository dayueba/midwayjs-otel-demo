import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1712887379660_9146',
  koa: {
    port: 7071,
    contextLoggerFormat: info => {
      const ctx = info.ctx;
      // return `${info.timestamp} ${info.LEVEL} ${info.pid} [${ctx.userId} - ${Date.now() - ctx.startTime}ms ${ctx.method}] ${info.message}`;
      return JSON.stringify({
        traceId: ctx.traceId,
        LEVEL: info.LEVEL.toLowerCase(),
        message: 'traceId=' + ctx.traceId + ' ' + info.message,
        project: 'order-service'
      })
    }
  },
  prometheus: {
    labels: {
      APP_NAME: 'order-service',
    },
  },
} as MidwayConfig;
