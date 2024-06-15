import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			expandVariables: true,
		}),
		// MONGO_LOGIN=admin
		// MONGO_PASSWORD=admin
		// MONGO_HOST=127.0.0.1
		// MONGO_PORT=27017
		// MONGO_AUTH_DATABASE=admin

		MongooseModule.forRoot('mongodb://localhost:27017/top-api'),
		// Подключение typegoose - устарело
		// TypegooseModule.forRootAsync({
		//   imports: [ConfigModule],
		//   inject: [ConfigService],
		//   useFactory: getMongoConfig
		// }),
		AuthModule,
		TopPageModule,
		ProductModule,
		ReviewModule,
		UsersModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
