import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { UserRefralBalanceSchema } from './entities/user.refral.balance.entity';
import { UserRefralLinksSchema } from './entities/user.refrals_links.entity';
import { AuthMiddleWare } from 'src/task/auth.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'UserRefralBalance', schema: UserRefralBalanceSchema },
      { name: 'UserRefralLinks', schema: UserRefralLinksSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleWare).forRoutes('auth/refral_balabce');
  }
}
