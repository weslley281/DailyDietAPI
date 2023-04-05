import { FastifyInstance } from 'fastify';
import { knex } from '../database';
import { z } from 'zod';

export async function MealsRoutes(app: FastifyInstance) {
  app.post('/', async (request, response) => {
    const createMealBodySchema = z.object({
      id_meal: z.string(),
      id_user: z.string(),
      name: z.string(),
      description: z.string(),
      date: z.date(),
      inDiet: z.boolean(),
    });

    const { id_meal, name, description, date, inDiet, id_user } =
      createMealBodySchema.parse(request.body);

    await knex('meals').insert({
      id_meal,
      id_user,
      name,
      description,
      date,
      inDiet,
    });

    return response.status(201).send({ resposta: 'User Created' });
  });

  app.put('/:id_meal', async (request, response) => {
    const mealParamSchema = z.object({
      id_meal: z.string(),
    });

    const updateMealBodySchema = z.object({
      name: z.string().optional(),
      description: z.string().optional(),
      date: z.date().optional(),
      inDiet: z.boolean().optional(),
    });

    const { name, description, date, inDiet } = updateMealBodySchema.parse(
      request.body
    );

    const { id_meal } = mealParamSchema.parse(request.params);

    const updatedRows = await knex('meals')
      .where({ id_meal })
      .update({ name, description, date, inDiet });

    if (updatedRows === 0) {
      return response.status(404).send({ resposta: 'Meal not found' });
    }

    return response.status(200).send({ resposta: 'Meal updated' });
  });

  app.delete('/:id_meal', async (request, response) => {
    const mealParamSchema = z.object({
      id_meal: z.string(),
    });

    const { id_meal } = mealParamSchema.parse(request.params);

    const deletedRows = await knex('meals').where({ id_meal }).delete();

    if (deletedRows === 0) {
      return response.status(404).send({ resposta: 'Meal not found' });
    }

    return response.status(200).send({ resposta: 'Meal deleted' });
  });
}
