import { app } from '.';
import { env } from './env';

app.listen({ port: env.PORT }).then(() => {
  console.log(`O servidor está rodando na porta http://localhost:${env.PORT}`);
});
