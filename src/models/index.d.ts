import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerpinpointResult = {
  readonly statusCode?: number | null;
  readonly body?: string | null;
}

type LazypinpointResult = {
  readonly statusCode?: number | null;
  readonly body?: string | null;
}

export declare type pinpointResult = LazyLoading extends LazyLoadingDisabled ? EagerpinpointResult : LazypinpointResult

export declare const pinpointResult: (new (init: ModelInit<pinpointResult>) => pinpointResult)

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly timestamp: string;
  readonly type: string;
  readonly price: number;
  readonly time12h: string;
  readonly date: string;
  readonly position: string;
  readonly isManual: boolean;
  readonly pair: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly timestamp: string;
  readonly type: string;
  readonly price: number;
  readonly time12h: string;
  readonly date: string;
  readonly position: string;
  readonly isManual: boolean;
  readonly pair: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly username: string;
  readonly phone: string;
  readonly email: string;
  readonly expoToken?: string | null;
  readonly forexSubscription?: boolean | null;
  readonly hasPurchasedSomething?: boolean | null;
  readonly totalReward?: number | null;
  readonly totalReferred?: number | null;
  readonly isReferred?: boolean | null;
  readonly hasReferred?: boolean | null;
  readonly referredBy?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly username: string;
  readonly phone: string;
  readonly email: string;
  readonly expoToken?: string | null;
  readonly forexSubscription?: boolean | null;
  readonly hasPurchasedSomething?: boolean | null;
  readonly totalReward?: number | null;
  readonly totalReferred?: number | null;
  readonly isReferred?: boolean | null;
  readonly hasReferred?: boolean | null;
  readonly referredBy?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}