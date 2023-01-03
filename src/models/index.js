// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Notification, NoticiaPrincipal, Noticia, CuotaComercial, Modo, Certificate, User, pinpointResult } = initSchema(schema);

export {
  Notification,
  NoticiaPrincipal,
  Noticia,
  CuotaComercial,
  Modo,
  Certificate,
  User,
  pinpointResult
};