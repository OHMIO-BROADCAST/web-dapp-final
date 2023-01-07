/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const pinpoint = /* GraphQL */ `
  mutation Pinpoint($input: pinpointInput) {
    pinpoint(input: $input) {
      statusCode
      body
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
export const createNoticiaPrincipal = /* GraphQL */ `
  mutation CreateNoticiaPrincipal(
    $input: CreateNoticiaPrincipalInput!
    $condition: ModelNoticiaPrincipalConditionInput
  ) {
    createNoticiaPrincipal(input: $input, condition: $condition) {
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
export const updateNoticiaPrincipal = /* GraphQL */ `
  mutation UpdateNoticiaPrincipal(
    $input: UpdateNoticiaPrincipalInput!
    $condition: ModelNoticiaPrincipalConditionInput
  ) {
    updateNoticiaPrincipal(input: $input, condition: $condition) {
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
export const deleteNoticiaPrincipal = /* GraphQL */ `
  mutation DeleteNoticiaPrincipal(
    $input: DeleteNoticiaPrincipalInput!
    $condition: ModelNoticiaPrincipalConditionInput
  ) {
    deleteNoticiaPrincipal(input: $input, condition: $condition) {
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
export const createNoticia = /* GraphQL */ `
  mutation CreateNoticia(
    $input: CreateNoticiaInput!
    $condition: ModelNoticiaConditionInput
  ) {
    createNoticia(input: $input, condition: $condition) {
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
export const updateNoticia = /* GraphQL */ `
  mutation UpdateNoticia(
    $input: UpdateNoticiaInput!
    $condition: ModelNoticiaConditionInput
  ) {
    updateNoticia(input: $input, condition: $condition) {
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
export const deleteNoticia = /* GraphQL */ `
  mutation DeleteNoticia(
    $input: DeleteNoticiaInput!
    $condition: ModelNoticiaConditionInput
  ) {
    deleteNoticia(input: $input, condition: $condition) {
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
export const createCuotaComercial = /* GraphQL */ `
  mutation CreateCuotaComercial(
    $input: CreateCuotaComercialInput!
    $condition: ModelCuotaComercialConditionInput
  ) {
    createCuotaComercial(input: $input, condition: $condition) {
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
export const updateCuotaComercial = /* GraphQL */ `
  mutation UpdateCuotaComercial(
    $input: UpdateCuotaComercialInput!
    $condition: ModelCuotaComercialConditionInput
  ) {
    updateCuotaComercial(input: $input, condition: $condition) {
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
export const deleteCuotaComercial = /* GraphQL */ `
  mutation DeleteCuotaComercial(
    $input: DeleteCuotaComercialInput!
    $condition: ModelCuotaComercialConditionInput
  ) {
    deleteCuotaComercial(input: $input, condition: $condition) {
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
export const createModo = /* GraphQL */ `
  mutation CreateModo(
    $input: CreateModoInput!
    $condition: ModelModoConditionInput
  ) {
    createModo(input: $input, condition: $condition) {
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
export const updateModo = /* GraphQL */ `
  mutation UpdateModo(
    $input: UpdateModoInput!
    $condition: ModelModoConditionInput
  ) {
    updateModo(input: $input, condition: $condition) {
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
export const deleteModo = /* GraphQL */ `
  mutation DeleteModo(
    $input: DeleteModoInput!
    $condition: ModelModoConditionInput
  ) {
    deleteModo(input: $input, condition: $condition) {
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
export const createCertificate = /* GraphQL */ `
  mutation CreateCertificate(
    $input: CreateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    createCertificate(input: $input, condition: $condition) {
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
export const updateCertificate = /* GraphQL */ `
  mutation UpdateCertificate(
    $input: UpdateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    updateCertificate(input: $input, condition: $condition) {
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
export const deleteCertificate = /* GraphQL */ `
  mutation DeleteCertificate(
    $input: DeleteCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    deleteCertificate(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      isPaymentProcessing
      payWithApplePay
      totalReward
      totalReferred
      isReferred
      hasReferred
      referredBy {
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
        isPaymentProcessing
        payWithApplePay
        totalReward
        totalReferred
        isReferred
        hasReferred
        isCommercial
        cumplidoCuota
        totalEarnCommercial
        totalReferredCommercial
        dateStartCommercial
        isCompletedKYC
        currentStateKYC
        externalURLKYC
        hasSigned
        registerDate
        solicitoEliminarCuenta
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      listUserReferred {
        nextToken
        startedAt
      }
      isCommercial
      cumplidoCuota
      totalEarnCommercial
      totalReferredCommercial
      dateStartCommercial
      isCompletedKYC
      currentStateKYC
      externalURLKYC
      hasSigned
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      isPaymentProcessing
      payWithApplePay
      totalReward
      totalReferred
      isReferred
      hasReferred
      referredBy {
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
        isPaymentProcessing
        payWithApplePay
        totalReward
        totalReferred
        isReferred
        hasReferred
        isCommercial
        cumplidoCuota
        totalEarnCommercial
        totalReferredCommercial
        dateStartCommercial
        isCompletedKYC
        currentStateKYC
        externalURLKYC
        hasSigned
        registerDate
        solicitoEliminarCuenta
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      listUserReferred {
        nextToken
        startedAt
      }
      isCommercial
      cumplidoCuota
      totalEarnCommercial
      totalReferredCommercial
      dateStartCommercial
      isCompletedKYC
      currentStateKYC
      externalURLKYC
      hasSigned
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
      isPaymentProcessing
      payWithApplePay
      totalReward
      totalReferred
      isReferred
      hasReferred
      referredBy {
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
        isPaymentProcessing
        payWithApplePay
        totalReward
        totalReferred
        isReferred
        hasReferred
        isCommercial
        cumplidoCuota
        totalEarnCommercial
        totalReferredCommercial
        dateStartCommercial
        isCompletedKYC
        currentStateKYC
        externalURLKYC
        hasSigned
        registerDate
        solicitoEliminarCuenta
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      listUserReferred {
        nextToken
        startedAt
      }
      isCommercial
      cumplidoCuota
      totalEarnCommercial
      totalReferredCommercial
      dateStartCommercial
      isCompletedKYC
      currentStateKYC
      externalURLKYC
      hasSigned
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
