// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Notification, NoticiaPrincipal, Noticia, CuotaComercial, Modo, Certificate, Purchase, pinpointResult } = initSchema(schema);

export {
  User,
  Notification,
  NoticiaPrincipal,
  Noticia,
  CuotaComercial,
  Modo,
  Certificate,
  Purchase,
  pinpointResult
};