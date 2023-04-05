import { Knex } from 'knex';

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id_user: string;
      name: string;
      email: string;
      phone: string;
      weight: number;
      hight: number;
    };
    meals: {
      id_meal: string;
      id_user: string;
      name: string;
      description: string;
      date: Date;
      inDiet: boolean;
    };
  }
}
