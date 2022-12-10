// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Notification, User, pinpointResult } = initSchema(schema);

export {
  Notification,
  User,
  pinpointResult
};