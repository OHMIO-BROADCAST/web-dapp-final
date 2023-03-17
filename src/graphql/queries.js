/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: [SearchableUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserAggregationInput]
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getNoticiaPrincipal = /* GraphQL */ `
  query GetNoticiaPrincipal($id: ID!) {
    getNoticiaPrincipal(id: $id) {
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
export const listNoticiaPrincipals = /* GraphQL */ `
  query ListNoticiaPrincipals(
    $filter: ModelNoticiaPrincipalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNoticiaPrincipals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getNoticia = /* GraphQL */ `
  query GetNoticia($id: ID!) {
    getNoticia(id: $id) {
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
export const listNoticias = /* GraphQL */ `
  query ListNoticias(
    $filter: ModelNoticiaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNoticias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCuotaComercial = /* GraphQL */ `
  query GetCuotaComercial($id: ID!) {
    getCuotaComercial(id: $id) {
      cantidadReferidos
      lastUpdate
      fechaCierre
      id
      createdAt
      updatedAt
    }
  }
`;
export const listCuotaComercials = /* GraphQL */ `
  query ListCuotaComercials(
    $filter: ModelCuotaComercialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCuotaComercials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        cantidadReferidos
        lastUpdate
        fechaCierre
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getModo = /* GraphQL */ `
  query GetModo($id: ID!) {
    getModo(id: $id) {
      automatic
      lastUpdate
      id
      createdAt
      updatedAt
    }
  }
`;
export const listModos = /* GraphQL */ `
  query ListModos(
    $filter: ModelModoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        automatic
        lastUpdate
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWallet = /* GraphQL */ `
  query GetWallet($id: ID!) {
    getWallet(id: $id) {
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
export const listWallets = /* GraphQL */ `
  query ListWallets(
    $filter: ModelWalletFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWallets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        wallet
        network
        dateAdded
        idOHMIOBOX
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCertificate = /* GraphQL */ `
  query GetCertificate($id: ID!) {
    getCertificate(id: $id) {
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
export const listCertificates = /* GraphQL */ `
  query ListCertificates(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        documentUnsigned
        documentSigned
        isSigned
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const usersByEmailAndUsername = /* GraphQL */ `
  query UsersByEmailAndUsername(
    $email: String!
    $username: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByEmailAndUsername(
      email: $email
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
