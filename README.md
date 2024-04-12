# midwayjs-otel-demo

`doocker-compose up`

- order service port: 7071
- user service port: 7072
- product service port: 7073

中间件
- otel/opentelemetry-collector-contrib
- tempo
  - 支持本地存储，在只有一个节点的情况下，可以不需要对象存储
- grafana


![](./images/img.png)

资料
- https://opentelemetry.io/docs/languages/js/
- https://github.com/grafana/intro-to-mltp
- https://grafana.com/docs/tempo/latest/getting-started/

todo
- [ ] trace 和 metric 关联
- [ ] trace 和 日志 关联
