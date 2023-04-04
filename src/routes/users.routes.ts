import { FastifyInstance } from 'fastify';
import { knex } from '../database';
import { z } from 'zod';

export async function UsersRoutes(app: FastifyInstance) {
  app.post('/', async (request, response) => {
    const createUserBodySchema = z.object({
      id_user: z.string(),
      nome: z.string(),
      email: z.string(),
      telefone: z.string(),
      peso: z.number(),
      altura: z.number(),
    });

    const { id_user, nome, email, telefone, peso, altura } =
      createUserBodySchema.parse(request.body);

    await knex('users').insert({
      id_user,
      nome,
      email,
      telefone,
      peso,
      altura,
    });

    return response.status(201).send({ resposta: 'Usuário Criado' });
  });
}
