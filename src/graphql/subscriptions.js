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
