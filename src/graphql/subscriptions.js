/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
      id
      title
      description
      timestamp
      type
      price
      time12h
      date
      position
      isManual
      pair
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
      id
      title
      description
      timestamp
      type
      price
      time12h
      date
      position
      isManual
      pair
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
      id
      title
      description
      timestamp
      type
      price
      time12h
      date
      position
      isManual
      pair
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateNoticiaPrincipal = /* GraphQL */ `
  subscription OnCreateNoticiaPrincipal(
    $filter: ModelSubscriptionNoticiaPrincipalFilterInput
  ) {
    onCreateNoticiaPrincipal(filter: $filter) {
      id
      title
      subtitle
      publishedDate
      source
      timestamp
      externalUrl
      portada
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateNoticiaPrincipal = /* GraphQL */ `
  subscription OnUpdateNoticiaPrincipal(
    $filter: ModelSubscriptionNoticiaPrincipalFilterInput
  ) {
    onUpdateNoticiaPrincipal(filter: $filter) {
      id
      title
      subtitle
      publishedDate
      source
      timestamp
      externalUrl
      portada
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteNoticiaPrincipal = /* GraphQL */ `
  subscription OnDeleteNoticiaPrincipal(
    $filter: ModelSubscriptionNoticiaPrincipalFilterInput
  ) {
    onDeleteNoticiaPrincipal(filter: $filter) {
      id
      title
      subtitle
      publishedDate
      source
      timestamp
      externalUrl
      portada
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateNoticia = /* GraphQL */ `
  subscription OnCreateNoticia($filter: ModelSubscriptionNoticiaFilterInput) {
    onCreateNoticia(filter: $filter) {
      id
      title
      subtitle
      publishedDate
      timestamp
      time12h
      type
      externalUrl
      optionalImage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateNoticia = /* GraphQL */ `
  subscription OnUpdateNoticia($filter: ModelSubscriptionNoticiaFilterInput) {
    onUpdateNoticia(filter: $filter) {
      id
      title
      subtitle
      publishedDate
      timestamp
      time12h
      type
      externalUrl
      optionalImage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteNoticia = /* GraphQL */ `
  subscription OnDeleteNoticia($filter: ModelSubscriptionNoticiaFilterInput) {
    onDeleteNoticia(filter: $filter) {
      id
      title
      subtitle
      publishedDate
      timestamp
      time12h
      type
      externalUrl
      optionalImage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCuotaComercial = /* GraphQL */ `
  subscription OnCreateCuotaComercial(
    $filter: ModelSubscriptionCuotaComercialFilterInput
  ) {
    onCreateCuotaComercial(filter: $filter) {
      cantidadReferidos
      lastUpdate
      fechaCierre
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCuotaComercial = /* GraphQL */ `
  subscription OnUpdateCuotaComercial(
    $filter: ModelSubscriptionCuotaComercialFilterInput
  ) {
    onUpdateCuotaComercial(filter: $filter) {
      cantidadReferidos
      lastUpdate
      fechaCierre
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCuotaComercial = /* GraphQL */ `
  subscription OnDeleteCuotaComercial(
    $filter: ModelSubscriptionCuotaComercialFilterInput
  ) {
    onDeleteCuotaComercial(filter: $filter) {
      cantidadReferidos
      lastUpdate
      fechaCierre
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateModo = /* GraphQL */ `
  subscription OnCreateModo($filter: ModelSubscriptionModoFilterInput) {
    onCreateModo(filter: $filter) {
      automatic
      lastUpdate
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateModo = /* GraphQL */ `
  subscription OnUpdateModo($filter: ModelSubscriptionModoFilterInput) {
    onUpdateModo(filter: $filter) {
      automatic
      lastUpdate
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteModo = /* GraphQL */ `
  subscription OnDeleteModo($filter: ModelSubscriptionModoFilterInput) {
    onDeleteModo(filter: $filter) {
      automatic
      lastUpdate
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCertificate = /* GraphQL */ `
  subscription OnCreateCertificate(
    $filter: ModelSubscriptionCertificateFilterInput
  ) {
    onCreateCertificate(filter: $filter) {
      id
      name
      documentUnsigned
      documentSigned
      isSigned
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCertificate = /* GraphQL */ `
  subscription OnUpdateCertificate(
    $filter: ModelSubscriptionCertificateFilterInput
  ) {
    onUpdateCertificate(filter: $filter) {
      id
      name
      documentUnsigned
      documentSigned
      isSigned
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCertificate = /* GraphQL */ `
  subscription OnDeleteCertificate(
    $filter: ModelSubscriptionCertificateFilterInput
  ) {
    onDeleteCertificate(filter: $filter) {
      id
      name
      documentUnsigned
      documentSigned
      isSigned
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      username
      phone
      email
      expoToken
      forexSubscription
      currentlyPlan
      hasPurchasedSomething
      expirationDate
      listPurchases {
        id
        username
        date
        plan
        expirationDate
        paymentMethod
      }
      isPaymentProcessing
      payWithApplePay
      totalReward
      totalReferred
      isReferred
      hasReferred
      referredBy
      listUserReferred
      isCommercial
      cumplidoCuota
      totalEarnCommercial
      totalReferredCommercial
      dateStartCommercial
      listUserReferredAsCommercial
      isCompletedKYC
      currentStateKYC
      externalURLKYC
      hasSigned
      dateSigned
      hasiOSSession
      hasAndroidSession
      deviceOSName
      deviceModelName
      deviceName
      deviceBrand
      activeDate
      registerDate
      solicitoEliminarCuenta
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      username
      phone
      email
      expoToken
      forexSubscription
      currentlyPlan
      hasPurchasedSomething
      expirationDate
      listPurchases {
        id
        username
        date
        plan
        expirationDate
        paymentMethod
      }
      isPaymentProcessing
      payWithApplePay
      totalReward
      totalReferred
      isReferred
      hasReferred
      referredBy
      listUserReferred
      isCommercial
      cumplidoCuota
      totalEarnCommercial
      totalReferredCommercial
      dateStartCommercial
      listUserReferredAsCommercial
      isCompletedKYC
      currentStateKYC
      externalURLKYC
      hasSigned
      dateSigned
      hasiOSSession
      hasAndroidSession
      deviceOSName
      deviceModelName
      deviceName
      deviceBrand
      activeDate
      registerDate
      solicitoEliminarCuenta
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      username
      phone
      email
      expoToken
      forexSubscription
      currentlyPlan
      hasPurchasedSomething
      expirationDate
      listPurchases {
        id
        username
        date
        plan
        expirationDate
        paymentMethod
      }
      isPaymentProcessing
      payWithApplePay
      totalReward
      totalReferred
      isReferred
      hasReferred
      referredBy
      listUserReferred
      isCommercial
      cumplidoCuota
      totalEarnCommercial
      totalReferredCommercial
      dateStartCommercial
      listUserReferredAsCommercial
      isCompletedKYC
      currentStateKYC
      externalURLKYC
      hasSigned
      dateSigned
      hasiOSSession
      hasAndroidSession
      deviceOSName
      deviceModelName
      deviceName
      deviceBrand
      activeDate
      registerDate
      solicitoEliminarCuenta
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
