import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { FirstMiddleware } from './middlewares/first.middleware';
import { loggerMiddleware } from './middlewares/logger.middleware';


@Module({
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule implements NestModule {

  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(FirstMiddleware)
    // j’accepte toutes les routes commençant par todo
    .forRoutes('todo');
    consumer.apply(loggerMiddleware)
    // j’accepte toutes les routes commençant par todo
    .forRoutes('todo');
    }
}
