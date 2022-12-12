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
