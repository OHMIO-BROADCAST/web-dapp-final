// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Notification, NoticiaPrincipal, Noticia, CuotaComercial, Modo, Certificate, User, Purchase } = initSchema(schema);

export {
  Notification,
  NoticiaPrincipal,
  Noticia,
  CuotaComercial,
  Modo,
  Certificate,
  User,
  Purchase
};