import { Knex } from 'knex';

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id_user: string;
      nome: string;
      email: string;
      telefone: string;
      peso: number;
      altura: number;
    };
  }
}
