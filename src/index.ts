import fastify from 'fastify';
import cookie from '@fastify/cookie';
import { UsersRoutes } from './routes/users.routes';
import { MealsRoutes } from './routes/meals.routes';

export const app = fastify();

app.register(cookie);
app.register(UsersRoutes, { prefix: 'users' });
app.register(MealsRoutes, { prefix: 'meals' });
