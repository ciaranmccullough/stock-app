import { app } from './app';

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Listening on port: ${PORT}`);
});
