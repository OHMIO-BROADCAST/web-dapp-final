/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      hasPurchasedSomething
      totalReward
      totalReferred
      isReferred
      hasReferred
      referredBy
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
        hasPurchasedSomething
        totalReward
        totalReferred
        isReferred
        hasReferred
        referredBy
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
        hasPurchasedSomething
        totalReward
        totalReferred
        isReferred
        hasReferred
        referredBy
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
