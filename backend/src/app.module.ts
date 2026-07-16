import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ActivityModule } from './activity/activity.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MilestonesModule } from './milestones/milestones.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { TicketsModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',

        host: configService.get<string>('DB_HOST'),

        port: configService.get<number>('DB_PORT'),

        username: configService.get<string>('DB_USERNAME'),

        password: configService.get<string>('DB_PASSWORD'),

        database: configService.get<string>('DB_NAME'),

        autoLoadEntities: true,

        synchronize: true,

        logging: true,
      }),
    }),

    AuthModule,
    UsersModule,
    ProjectsModule,
    TasksModule,
    TicketsModule,
    MilestonesModule,
    CommentsModule,
    NotificationsModule,
    ActivityModule,
    DashboardModule,
  ],
})
export class AppModule {}
