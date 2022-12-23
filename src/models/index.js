// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Notification, Noticia, CuotaComercial, Modo, Certificate, User, pinpointResult } = initSchema(schema);

export {
  Notification,
  Noticia,
  CuotaComercial,
  Modo,
  Certificate,
  User,
  pinpointResult
};