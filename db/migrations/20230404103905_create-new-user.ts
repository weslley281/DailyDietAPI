import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id_user').primary();
    table.text('nome').notNullable();
    table.text('email').notNullable();
    table.text('telefone').notNullable();
    table.decimal('peso', 10, 2).notNullable();
    table.decimal('altura', 10, 2).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
