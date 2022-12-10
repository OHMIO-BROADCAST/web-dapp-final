// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Notification, Modo, User, pinpointResult } = initSchema(schema);

export {
  Notification,
  Modo,
  User,
  pinpointResult
};