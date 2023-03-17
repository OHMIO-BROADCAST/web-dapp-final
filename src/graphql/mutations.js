/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
    }
  }
`;
export const createWallet = /* GraphQL */ `
  mutation CreateWallet(
    $input: CreateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    createWallet(input: $input, condition: $condition) {
      wallet
      network
      dateAdded
      idOHMIOBOX
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateWallet = /* GraphQL */ `
  mutation UpdateWallet(
    $input: UpdateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    updateWallet(input: $input, condition: $condition) {
      wallet
      network
      dateAdded
      idOHMIOBOX
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteWallet = /* GraphQL */ `
  mutation DeleteWallet(
    $input: DeleteWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    deleteWallet(input: $input, condition: $condition) {
      wallet
      network
      dateAdded
      idOHMIOBOX
      id
      createdAt
      updatedAt
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
      idMoralis
      wallets {
        wallet
        network
        dateAdded
        idOHMIOBOX
        id
        createdAt
        updatedAt
      }
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
      idMoralis
      wallets {
        wallet
        network
        dateAdded
        idOHMIOBOX
        id
        createdAt
        updatedAt
      }
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
      idMoralis
      wallets {
        wallet
        network
        dateAdded
        idOHMIOBOX
        id
        createdAt
        updatedAt
      }
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
    }
  }
`;
