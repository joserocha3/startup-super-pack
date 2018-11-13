module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCrossing {
  count: Int!
}

type AggregateGeofence {
  count: Int!
}

type AggregateRedemption {
  count: Int!
}

type AggregateReward {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Crossing {
  crossedIn: DateTime
  crossedOut: DateTime
  geofence: ID
  coordinates: String
  crosser: User
}

type CrossingConnection {
  pageInfo: PageInfo!
  edges: [CrossingEdge]!
  aggregate: AggregateCrossing!
}

input CrossingCreateInput {
  crossedIn: DateTime
  crossedOut: DateTime
  geofence: ID
  coordinates: String
  crosser: UserCreateOneWithoutCrossingsInput
}

input CrossingCreateManyWithoutCrosserInput {
  create: [CrossingCreateWithoutCrosserInput!]
  connect: [CrossingWhereUniqueInput!]
}

input CrossingCreateWithoutCrosserInput {
  crossedIn: DateTime
  crossedOut: DateTime
  geofence: ID
  coordinates: String
}

type CrossingEdge {
  node: Crossing!
  cursor: String!
}

enum CrossingOrderByInput {
  crossedIn_ASC
  crossedIn_DESC
  crossedOut_ASC
  crossedOut_DESC
  geofence_ASC
  geofence_DESC
  coordinates_ASC
  coordinates_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CrossingPreviousValues {
  crossedIn: DateTime
  crossedOut: DateTime
  geofence: ID
  coordinates: String
}

type CrossingSubscriptionPayload {
  mutation: MutationType!
  node: Crossing
  updatedFields: [String!]
  previousValues: CrossingPreviousValues
}

input CrossingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CrossingWhereInput
  AND: [CrossingSubscriptionWhereInput!]
  OR: [CrossingSubscriptionWhereInput!]
  NOT: [CrossingSubscriptionWhereInput!]
}

input CrossingUpdateInput {
  crossedIn: DateTime
  crossedOut: DateTime
  geofence: ID
  coordinates: String
  crosser: UserUpdateOneWithoutCrossingsInput
}

input CrossingUpdateManyMutationInput {
  crossedIn: DateTime
  crossedOut: DateTime
  geofence: ID
  coordinates: String
}

input CrossingUpdateManyWithoutCrosserInput {
  create: [CrossingCreateWithoutCrosserInput!]
  delete: [CrossingWhereUniqueInput!]
  connect: [CrossingWhereUniqueInput!]
  disconnect: [CrossingWhereUniqueInput!]
  update: [CrossingUpdateWithWhereUniqueWithoutCrosserInput!]
  upsert: [CrossingUpsertWithWhereUniqueWithoutCrosserInput!]
}

input CrossingUpdateWithoutCrosserDataInput {
  crossedIn: DateTime
  crossedOut: DateTime
  geofence: ID
  coordinates: String
}

input CrossingUpdateWithWhereUniqueWithoutCrosserInput {
  where: CrossingWhereUniqueInput!
  data: CrossingUpdateWithoutCrosserDataInput!
}

input CrossingUpsertWithWhereUniqueWithoutCrosserInput {
  where: CrossingWhereUniqueInput!
  update: CrossingUpdateWithoutCrosserDataInput!
  create: CrossingCreateWithoutCrosserInput!
}

input CrossingWhereInput {
  crossedIn: DateTime
  crossedIn_not: DateTime
  crossedIn_in: [DateTime!]
  crossedIn_not_in: [DateTime!]
  crossedIn_lt: DateTime
  crossedIn_lte: DateTime
  crossedIn_gt: DateTime
  crossedIn_gte: DateTime
  crossedOut: DateTime
  crossedOut_not: DateTime
  crossedOut_in: [DateTime!]
  crossedOut_not_in: [DateTime!]
  crossedOut_lt: DateTime
  crossedOut_lte: DateTime
  crossedOut_gt: DateTime
  crossedOut_gte: DateTime
  geofence: ID
  geofence_not: ID
  geofence_in: [ID!]
  geofence_not_in: [ID!]
  geofence_lt: ID
  geofence_lte: ID
  geofence_gt: ID
  geofence_gte: ID
  geofence_contains: ID
  geofence_not_contains: ID
  geofence_starts_with: ID
  geofence_not_starts_with: ID
  geofence_ends_with: ID
  geofence_not_ends_with: ID
  coordinates: String
  coordinates_not: String
  coordinates_in: [String!]
  coordinates_not_in: [String!]
  coordinates_lt: String
  coordinates_lte: String
  coordinates_gt: String
  coordinates_gte: String
  coordinates_contains: String
  coordinates_not_contains: String
  coordinates_starts_with: String
  coordinates_not_starts_with: String
  coordinates_ends_with: String
  coordinates_not_ends_with: String
  crosser: UserWhereInput
  AND: [CrossingWhereInput!]
  OR: [CrossingWhereInput!]
  NOT: [CrossingWhereInput!]
}

input CrossingWhereUniqueInput {
  coordinates: String
}

scalar DateTime

type Geofence {
  radius: Float
  description: String
  title: String
  coordinates: String
  status: String
  type: String
  points: Int
  refreshRate: Float
  owner: User
}

type GeofenceConnection {
  pageInfo: PageInfo!
  edges: [GeofenceEdge]!
  aggregate: AggregateGeofence!
}

input GeofenceCreateInput {
  radius: Float
  description: String
  title: String
  coordinates: String
  status: String
  type: String
  points: Int
  refreshRate: Float
  owner: UserCreateOneWithoutGeofencesInput
}

input GeofenceCreateManyWithoutOwnerInput {
  create: [GeofenceCreateWithoutOwnerInput!]
}

input GeofenceCreateWithoutOwnerInput {
  radius: Float
  description: String
  title: String
  coordinates: String
  status: String
  type: String
  points: Int
  refreshRate: Float
}

type GeofenceEdge {
  node: Geofence!
  cursor: String!
}

enum GeofenceOrderByInput {
  radius_ASC
  radius_DESC
  description_ASC
  description_DESC
  title_ASC
  title_DESC
  coordinates_ASC
  coordinates_DESC
  status_ASC
  status_DESC
  type_ASC
  type_DESC
  points_ASC
  points_DESC
  refreshRate_ASC
  refreshRate_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GeofencePreviousValues {
  radius: Float
  description: String
  title: String
  coordinates: String
  status: String
  type: String
  points: Int
  refreshRate: Float
}

type GeofenceSubscriptionPayload {
  mutation: MutationType!
  node: Geofence
  updatedFields: [String!]
  previousValues: GeofencePreviousValues
}

input GeofenceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GeofenceWhereInput
  AND: [GeofenceSubscriptionWhereInput!]
  OR: [GeofenceSubscriptionWhereInput!]
  NOT: [GeofenceSubscriptionWhereInput!]
}

input GeofenceUpdateManyMutationInput {
  radius: Float
  description: String
  title: String
  coordinates: String
  status: String
  type: String
  points: Int
  refreshRate: Float
}

input GeofenceUpdateManyWithoutOwnerInput {
  create: [GeofenceCreateWithoutOwnerInput!]
}

input GeofenceWhereInput {
  radius: Float
  radius_not: Float
  radius_in: [Float!]
  radius_not_in: [Float!]
  radius_lt: Float
  radius_lte: Float
  radius_gt: Float
  radius_gte: Float
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  coordinates: String
  coordinates_not: String
  coordinates_in: [String!]
  coordinates_not_in: [String!]
  coordinates_lt: String
  coordinates_lte: String
  coordinates_gt: String
  coordinates_gte: String
  coordinates_contains: String
  coordinates_not_contains: String
  coordinates_starts_with: String
  coordinates_not_starts_with: String
  coordinates_ends_with: String
  coordinates_not_ends_with: String
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  points: Int
  points_not: Int
  points_in: [Int!]
  points_not_in: [Int!]
  points_lt: Int
  points_lte: Int
  points_gt: Int
  points_gte: Int
  refreshRate: Float
  refreshRate_not: Float
  refreshRate_in: [Float!]
  refreshRate_not_in: [Float!]
  refreshRate_lt: Float
  refreshRate_lte: Float
  refreshRate_gt: Float
  refreshRate_gte: Float
  owner: UserWhereInput
  AND: [GeofenceWhereInput!]
  OR: [GeofenceWhereInput!]
  NOT: [GeofenceWhereInput!]
}

scalar Long

type Mutation {
  createCrossing(data: CrossingCreateInput!): Crossing!
  updateCrossing(data: CrossingUpdateInput!, where: CrossingWhereUniqueInput!): Crossing
  updateManyCrossings(data: CrossingUpdateManyMutationInput!, where: CrossingWhereInput): BatchPayload!
  upsertCrossing(where: CrossingWhereUniqueInput!, create: CrossingCreateInput!, update: CrossingUpdateInput!): Crossing!
  deleteCrossing(where: CrossingWhereUniqueInput!): Crossing
  deleteManyCrossings(where: CrossingWhereInput): BatchPayload!
  createGeofence(data: GeofenceCreateInput!): Geofence!
  updateManyGeofences(data: GeofenceUpdateManyMutationInput!, where: GeofenceWhereInput): BatchPayload!
  deleteManyGeofences(where: GeofenceWhereInput): BatchPayload!
  createRedemption(data: RedemptionCreateInput!): Redemption!
  updateManyRedemptions(data: RedemptionUpdateManyMutationInput!, where: RedemptionWhereInput): BatchPayload!
  deleteManyRedemptions(where: RedemptionWhereInput): BatchPayload!
  createReward(data: RewardCreateInput!): Reward!
  updateManyRewards(data: RewardUpdateManyMutationInput!, where: RewardWhereInput): BatchPayload!
  deleteManyRewards(where: RewardWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  crossing(where: CrossingWhereUniqueInput!): Crossing
  crossings(where: CrossingWhereInput, orderBy: CrossingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Crossing]!
  crossingsConnection(where: CrossingWhereInput, orderBy: CrossingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CrossingConnection!
  geofences(where: GeofenceWhereInput, orderBy: GeofenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Geofence]!
  geofencesConnection(where: GeofenceWhereInput, orderBy: GeofenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GeofenceConnection!
  redemptions(where: RedemptionWhereInput, orderBy: RedemptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Redemption]!
  redemptionsConnection(where: RedemptionWhereInput, orderBy: RedemptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RedemptionConnection!
  rewards(where: RewardWhereInput, orderBy: RewardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reward]!
  rewardsConnection(where: RewardWhereInput, orderBy: RewardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RewardConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Redemption {
  awardedAt: DateTime
  points: Float
  redeemer: User
  reward: String
}

type RedemptionConnection {
  pageInfo: PageInfo!
  edges: [RedemptionEdge]!
  aggregate: AggregateRedemption!
}

input RedemptionCreateInput {
  awardedAt: DateTime
  points: Float
  redeemer: UserCreateOneWithoutRedemptionsInput
  reward: String
}

input RedemptionCreateManyWithoutRedeemerInput {
  create: [RedemptionCreateWithoutRedeemerInput!]
}

input RedemptionCreateWithoutRedeemerInput {
  awardedAt: DateTime
  points: Float
  reward: String
}

type RedemptionEdge {
  node: Redemption!
  cursor: String!
}

enum RedemptionOrderByInput {
  awardedAt_ASC
  awardedAt_DESC
  points_ASC
  points_DESC
  reward_ASC
  reward_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RedemptionPreviousValues {
  awardedAt: DateTime
  points: Float
  reward: String
}

type RedemptionSubscriptionPayload {
  mutation: MutationType!
  node: Redemption
  updatedFields: [String!]
  previousValues: RedemptionPreviousValues
}

input RedemptionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RedemptionWhereInput
  AND: [RedemptionSubscriptionWhereInput!]
  OR: [RedemptionSubscriptionWhereInput!]
  NOT: [RedemptionSubscriptionWhereInput!]
}

input RedemptionUpdateManyMutationInput {
  awardedAt: DateTime
  points: Float
  reward: String
}

input RedemptionUpdateManyWithoutRedeemerInput {
  create: [RedemptionCreateWithoutRedeemerInput!]
}

input RedemptionWhereInput {
  awardedAt: DateTime
  awardedAt_not: DateTime
  awardedAt_in: [DateTime!]
  awardedAt_not_in: [DateTime!]
  awardedAt_lt: DateTime
  awardedAt_lte: DateTime
  awardedAt_gt: DateTime
  awardedAt_gte: DateTime
  points: Float
  points_not: Float
  points_in: [Float!]
  points_not_in: [Float!]
  points_lt: Float
  points_lte: Float
  points_gt: Float
  points_gte: Float
  redeemer: UserWhereInput
  reward: String
  reward_not: String
  reward_in: [String!]
  reward_not_in: [String!]
  reward_lt: String
  reward_lte: String
  reward_gt: String
  reward_gte: String
  reward_contains: String
  reward_not_contains: String
  reward_starts_with: String
  reward_not_starts_with: String
  reward_ends_with: String
  reward_not_ends_with: String
  AND: [RedemptionWhereInput!]
  OR: [RedemptionWhereInput!]
  NOT: [RedemptionWhereInput!]
}

type Reward {
  points: Float
  title: String
  text: String
  grantor: User
}

type RewardConnection {
  pageInfo: PageInfo!
  edges: [RewardEdge]!
  aggregate: AggregateReward!
}

input RewardCreateInput {
  points: Float
  title: String
  text: String
  grantor: UserCreateOneWithoutRewardsInput
}

input RewardCreateManyWithoutGrantorInput {
  create: [RewardCreateWithoutGrantorInput!]
}

input RewardCreateWithoutGrantorInput {
  points: Float
  title: String
  text: String
}

type RewardEdge {
  node: Reward!
  cursor: String!
}

enum RewardOrderByInput {
  points_ASC
  points_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RewardPreviousValues {
  points: Float
  title: String
  text: String
}

type RewardSubscriptionPayload {
  mutation: MutationType!
  node: Reward
  updatedFields: [String!]
  previousValues: RewardPreviousValues
}

input RewardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RewardWhereInput
  AND: [RewardSubscriptionWhereInput!]
  OR: [RewardSubscriptionWhereInput!]
  NOT: [RewardSubscriptionWhereInput!]
}

input RewardUpdateManyMutationInput {
  points: Float
  title: String
  text: String
}

input RewardUpdateManyWithoutGrantorInput {
  create: [RewardCreateWithoutGrantorInput!]
}

input RewardWhereInput {
  points: Float
  points_not: Float
  points_in: [Float!]
  points_not_in: [Float!]
  points_lt: Float
  points_lte: Float
  points_gt: Float
  points_gte: Float
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  grantor: UserWhereInput
  AND: [RewardWhereInput!]
  OR: [RewardWhereInput!]
  NOT: [RewardWhereInput!]
}

type Subscription {
  crossing(where: CrossingSubscriptionWhereInput): CrossingSubscriptionPayload
  geofence(where: GeofenceSubscriptionWhereInput): GeofenceSubscriptionPayload
  redemption(where: RedemptionSubscriptionWhereInput): RedemptionSubscriptionPayload
  reward(where: RewardSubscriptionWhereInput): RewardSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  authId: String
  firstName: String!
  lastName: String!
  role: UserRole!
  redemptions(where: RedemptionWhereInput, orderBy: RedemptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Redemption!]
  geofences(where: GeofenceWhereInput, orderBy: GeofenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Geofence!]
  crossings(where: CrossingWhereInput, orderBy: CrossingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Crossing!]
  rewards(where: RewardWhereInput, orderBy: RewardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Reward!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  authId: String
  firstName: String!
  lastName: String!
  role: UserRole!
  redemptions: RedemptionCreateManyWithoutRedeemerInput
  geofences: GeofenceCreateManyWithoutOwnerInput
  crossings: CrossingCreateManyWithoutCrosserInput
  rewards: RewardCreateManyWithoutGrantorInput
}

input UserCreateOneWithoutCrossingsInput {
  create: UserCreateWithoutCrossingsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutGeofencesInput {
  create: UserCreateWithoutGeofencesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRedemptionsInput {
  create: UserCreateWithoutRedemptionsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRewardsInput {
  create: UserCreateWithoutRewardsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCrossingsInput {
  email: String!
  authId: String
  firstName: String!
  lastName: String!
  role: UserRole!
  redemptions: RedemptionCreateManyWithoutRedeemerInput
  geofences: GeofenceCreateManyWithoutOwnerInput
  rewards: RewardCreateManyWithoutGrantorInput
}

input UserCreateWithoutGeofencesInput {
  email: String!
  authId: String
  firstName: String!
  lastName: String!
  role: UserRole!
  redemptions: RedemptionCreateManyWithoutRedeemerInput
  crossings: CrossingCreateManyWithoutCrosserInput
  rewards: RewardCreateManyWithoutGrantorInput
}

input UserCreateWithoutRedemptionsInput {
  email: String!
  authId: String
  firstName: String!
  lastName: String!
  role: UserRole!
  geofences: GeofenceCreateManyWithoutOwnerInput
  crossings: CrossingCreateManyWithoutCrosserInput
  rewards: RewardCreateManyWithoutGrantorInput
}

input UserCreateWithoutRewardsInput {
  email: String!
  authId: String
  firstName: String!
  lastName: String!
  role: UserRole!
  redemptions: RedemptionCreateManyWithoutRedeemerInput
  geofences: GeofenceCreateManyWithoutOwnerInput
  crossings: CrossingCreateManyWithoutCrosserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  authId_ASC
  authId_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  authId: String
  firstName: String!
  lastName: String!
  role: UserRole!
}

enum UserRole {
  ADMIN
  MANAGER
  CLIENT
  APP_USER
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  authId: String
  firstName: String
  lastName: String
  role: UserRole
  redemptions: RedemptionUpdateManyWithoutRedeemerInput
  geofences: GeofenceUpdateManyWithoutOwnerInput
  crossings: CrossingUpdateManyWithoutCrosserInput
  rewards: RewardUpdateManyWithoutGrantorInput
}

input UserUpdateManyMutationInput {
  email: String
  authId: String
  firstName: String
  lastName: String
  role: UserRole
}

input UserUpdateOneWithoutCrossingsInput {
  create: UserCreateWithoutCrossingsInput
  update: UserUpdateWithoutCrossingsDataInput
  upsert: UserUpsertWithoutCrossingsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCrossingsDataInput {
  email: String
  authId: String
  firstName: String
  lastName: String
  role: UserRole
  redemptions: RedemptionUpdateManyWithoutRedeemerInput
  geofences: GeofenceUpdateManyWithoutOwnerInput
  rewards: RewardUpdateManyWithoutGrantorInput
}

input UserUpsertWithoutCrossingsInput {
  update: UserUpdateWithoutCrossingsDataInput!
  create: UserCreateWithoutCrossingsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  authId: String
  authId_not: String
  authId_in: [String!]
  authId_not_in: [String!]
  authId_lt: String
  authId_lte: String
  authId_gt: String
  authId_gte: String
  authId_contains: String
  authId_not_contains: String
  authId_starts_with: String
  authId_not_starts_with: String
  authId_ends_with: String
  authId_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  role: UserRole
  role_not: UserRole
  role_in: [UserRole!]
  role_not_in: [UserRole!]
  redemptions_every: RedemptionWhereInput
  redemptions_some: RedemptionWhereInput
  redemptions_none: RedemptionWhereInput
  geofences_every: GeofenceWhereInput
  geofences_some: GeofenceWhereInput
  geofences_none: GeofenceWhereInput
  crossings_every: CrossingWhereInput
  crossings_some: CrossingWhereInput
  crossings_none: CrossingWhereInput
  rewards_every: RewardWhereInput
  rewards_some: RewardWhereInput
  rewards_none: RewardWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  authId: String
}
`
      }
    