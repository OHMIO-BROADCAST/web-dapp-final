import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";



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

type EagerNoticiaPrincipal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NoticiaPrincipal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly publishedDate: string;
  readonly source: string;
  readonly timestamp: string;
  readonly externalUrl: string;
  readonly portada: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNoticiaPrincipal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NoticiaPrincipal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly publishedDate: string;
  readonly source: string;
  readonly timestamp: string;
  readonly externalUrl: string;
  readonly portada: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NoticiaPrincipal = LazyLoading extends LazyLoadingDisabled ? EagerNoticiaPrincipal : LazyNoticiaPrincipal

export declare const NoticiaPrincipal: (new (init: ModelInit<NoticiaPrincipal>) => NoticiaPrincipal) & {
  copyOf(source: NoticiaPrincipal, mutator: (draft: MutableModel<NoticiaPrincipal>) => MutableModel<NoticiaPrincipal> | void): NoticiaPrincipal;
}

type EagerNoticia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Noticia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly publishedDate: string;
  readonly timestamp: string;
  readonly time12h: string;
  readonly type: string;
  readonly externalUrl?: string | null;
  readonly optionalImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNoticia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Noticia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly publishedDate: string;
  readonly timestamp: string;
  readonly time12h: string;
  readonly type: string;
  readonly externalUrl?: string | null;
  readonly optionalImage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Noticia = LazyLoading extends LazyLoadingDisabled ? EagerNoticia : LazyNoticia

export declare const Noticia: (new (init: ModelInit<Noticia>) => Noticia) & {
  copyOf(source: Noticia, mutator: (draft: MutableModel<Noticia>) => MutableModel<Noticia> | void): Noticia;
}

type EagerCuotaComercial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CuotaComercial, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cantidadReferidos: number;
  readonly lastUpdate: string;
  readonly fechaCierre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCuotaComercial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CuotaComercial, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cantidadReferidos: number;
  readonly lastUpdate: string;
  readonly fechaCierre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CuotaComercial = LazyLoading extends LazyLoadingDisabled ? EagerCuotaComercial : LazyCuotaComercial

export declare const CuotaComercial: (new (init: ModelInit<CuotaComercial>) => CuotaComercial) & {
  copyOf(source: CuotaComercial, mutator: (draft: MutableModel<CuotaComercial>) => MutableModel<CuotaComercial> | void): CuotaComercial;
}

type EagerModo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Modo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly automatic: boolean;
  readonly lastUpdate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyModo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Modo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly automatic: boolean;
  readonly lastUpdate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Modo = LazyLoading extends LazyLoadingDisabled ? EagerModo : LazyModo

export declare const Modo: (new (init: ModelInit<Modo>) => Modo) & {
  copyOf(source: Modo, mutator: (draft: MutableModel<Modo>) => MutableModel<Modo> | void): Modo;
}

type EagerCertificate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certificate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly documentUnsigned: string;
  readonly documentSigned?: string | null;
  readonly isSigned: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCertificate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certificate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly documentUnsigned: string;
  readonly documentSigned?: string | null;
  readonly isSigned: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Certificate = LazyLoading extends LazyLoadingDisabled ? EagerCertificate : LazyCertificate

export declare const Certificate: (new (init: ModelInit<Certificate>) => Certificate) & {
  copyOf(source: Certificate, mutator: (draft: MutableModel<Certificate>) => MutableModel<Certificate> | void): Certificate;
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
  readonly currentlyPlan?: string | null;
  readonly hasPurchasedSomething?: boolean | null;
  readonly expirationDate?: string | null;
  readonly isPaymentProcessing?: boolean | null;
  readonly payWithApplePay?: boolean | null;
  readonly totalReward?: number | null;
  readonly totalReferred?: number | null;
  readonly isReferred?: boolean | null;
  readonly hasReferred?: boolean | null;
  readonly referredBy?: User | null;
  readonly listUserReferred?: (User | null)[] | null;
  readonly isCommercial?: boolean | null;
  readonly cumplidoCuota?: boolean | null;
  readonly totalEarnCommercial?: number | null;
  readonly totalReferredCommercial?: number | null;
  readonly dateStartCommercial?: string | null;
  readonly isCompletedKYC?: boolean | null;
  readonly currentStateKYC?: string | null;
  readonly externalURLKYC?: string | null;
  readonly hasSigned?: boolean | null;
  readonly registerDate?: string | null;
  readonly solicitoEliminarCuenta?: boolean | null;
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
  readonly currentlyPlan?: string | null;
  readonly hasPurchasedSomething?: boolean | null;
  readonly expirationDate?: string | null;
  readonly isPaymentProcessing?: boolean | null;
  readonly payWithApplePay?: boolean | null;
  readonly totalReward?: number | null;
  readonly totalReferred?: number | null;
  readonly isReferred?: boolean | null;
  readonly hasReferred?: boolean | null;
  readonly referredBy: AsyncItem<User | undefined>;
  readonly listUserReferred: AsyncCollection<User>;
  readonly isCommercial?: boolean | null;
  readonly cumplidoCuota?: boolean | null;
  readonly totalEarnCommercial?: number | null;
  readonly totalReferredCommercial?: number | null;
  readonly dateStartCommercial?: string | null;
  readonly isCompletedKYC?: boolean | null;
  readonly currentStateKYC?: string | null;
  readonly externalURLKYC?: string | null;
  readonly hasSigned?: boolean | null;
  readonly registerDate?: string | null;
  readonly solicitoEliminarCuenta?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}