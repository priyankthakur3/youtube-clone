import express from 'express';
import constructorMethod from './routes';
const app = express();
const port = 3000;

constructorMethod(app);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
