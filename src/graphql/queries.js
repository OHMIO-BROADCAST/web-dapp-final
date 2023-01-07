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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNoticiaPrincipals = /* GraphQL */ `
  query SyncNoticiaPrincipals(
    $filter: ModelNoticiaPrincipalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNoticiaPrincipals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNoticias = /* GraphQL */ `
  query SyncNoticias(
    $filter: ModelNoticiaFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNoticias(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCuotaComercials = /* GraphQL */ `
  query SyncCuotaComercials(
    $filter: ModelCuotaComercialFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCuotaComercials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncModos = /* GraphQL */ `
  query SyncModos(
    $filter: ModelModoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncModos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        automatic
        lastUpdate
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCertificates = /* GraphQL */ `
  query SyncCertificates(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCertificates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
    }
  }
`;
