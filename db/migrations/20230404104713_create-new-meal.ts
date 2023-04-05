import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('meals', (table) => {
    table.uuid('id_meal').primary();
    table.uuid('id_user').notNullable();
    table.text('name').notNullable();
    table.text('description').notNullable();
    table.dateTime('date').notNullable();
    table.boolean('inDiet').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('meals');
}
