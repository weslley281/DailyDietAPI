import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id_user').primary();
    table.text('name').notNullable();
    table.text('email').notNullable();
    table.text('phone').notNullable();
    table.decimal('weight', 10, 2).notNullable();
    table.decimal('hight', 10, 2).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}
