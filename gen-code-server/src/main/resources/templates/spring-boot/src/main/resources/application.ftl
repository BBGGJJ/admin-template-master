!#parse
!#name /src/main/resources/application.properties

spring.datasource.url=${jdbcUrl}
spring.datasource.username=${jdbcUsername}
spring.datasource.password=${jdbcPassword}
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.max-idle=10
spring.datasource.max-wait=10000
spring.datasource.min-idle=5
spring.datasource.initial-size=5
spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
spring.datasource.validationQuery=select 'x'
mybatis.mapper-locations=classpath:mapper/*/*.xml,classpath:mapper/*.xml
mybatis.type-aliases-package=${packagePath}.entity.*.*,${packagePath}.entity.*
server.port=8088
server.tomcat.uri-encoding=UTF-8

spring.mvc.static-path-pattern=/statics/**
spring.resources.static-locations=classpath:/statics/
spring.freemarker.template-loader-path=classpath:/templates
spring.freemarker.cache=false
spring.freemarker.charset=UTF-8
spring.freemarker.check-template-location=true
spring.freemarker.content-type=text/html
spring.freemarker.expose-request-attributes=false
spring.freemarker.expose-session-attributes=false
spring.freemarker.request-context-attribute=request
spring.freemarker.suffix=.ftl