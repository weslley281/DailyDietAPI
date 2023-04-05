import { FastifyInstance } from 'fastify';
import { knex } from '../database';
import { z } from 'zod';

export async function UsersRoutes(app: FastifyInstance) {
  app.post('/', async (request, response) => {
    const createUserBodySchema = z.object({
      id_user: z.string(),
      name: z.string(),
      email: z.string(),
      phone: z.string(),
      weight: z.number(),
      hight: z.number(),
    });

    const { id_user, name, email, phone, weight, hight } =
      createUserBodySchema.parse(request.body);

    await knex('users').insert({
      id_user,
      name,
      email,
      phone,
      weight,
      hight,
    });

    return response.status(201).send({ resposta: 'Usuário Criado' });
  });
}
