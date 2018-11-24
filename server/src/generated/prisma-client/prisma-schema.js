module.exports = {
        typeDefs: /* GraphQL */ `type AggregateAvailability {
  count: Int!
}

type AggregateEquipment {
  count: Int!
}

type AggregateEquipmentType {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Availability {
  id: ID!
  equipment: Equipment!
  start: DateTime!
  end: DateTime!
  booked: Boolean!
}

type AvailabilityConnection {
  pageInfo: PageInfo!
  edges: [AvailabilityEdge]!
  aggregate: AggregateAvailability!
}

input AvailabilityCreateInput {
  equipment: EquipmentCreateOneInput!
  start: DateTime!
  end: DateTime!
  booked: Boolean
}

type AvailabilityEdge {
  node: Availability!
  cursor: String!
}

enum AvailabilityOrderByInput {
  id_ASC
  id_DESC
  start_ASC
  start_DESC
  end_ASC
  end_DESC
  booked_ASC
  booked_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AvailabilityPreviousValues {
  id: ID!
  start: DateTime!
  end: DateTime!
  booked: Boolean!
}

type AvailabilitySubscriptionPayload {
  mutation: MutationType!
  node: Availability
  updatedFields: [String!]
  previousValues: AvailabilityPreviousValues
}

input AvailabilitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AvailabilityWhereInput
  AND: [AvailabilitySubscriptionWhereInput!]
  OR: [AvailabilitySubscriptionWhereInput!]
  NOT: [AvailabilitySubscriptionWhereInput!]
}

input AvailabilityUpdateInput {
  equipment: EquipmentUpdateOneRequiredInput
  start: DateTime
  end: DateTime
  booked: Boolean
}

input AvailabilityWhereInput {
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
  equipment: EquipmentWhereInput
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  booked: Boolean
  booked_not: Boolean
  AND: [AvailabilityWhereInput!]
  OR: [AvailabilityWhereInput!]
  NOT: [AvailabilityWhereInput!]
}

input AvailabilityWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Equipment {
  id: ID!
  description: String!
  type: EquipmentType!
  owner: User!
}

type EquipmentConnection {
  pageInfo: PageInfo!
  edges: [EquipmentEdge]!
  aggregate: AggregateEquipment!
}

input EquipmentCreateInput {
  description: String!
  type: EquipmentTypeCreateOneInput!
  owner: UserCreateOneWithoutEquipmentInput!
}

input EquipmentCreateManyWithoutOwnerInput {
  create: [EquipmentCreateWithoutOwnerInput!]
  connect: [EquipmentWhereUniqueInput!]
}

input EquipmentCreateOneInput {
  create: EquipmentCreateInput
  connect: EquipmentWhereUniqueInput
}

input EquipmentCreateWithoutOwnerInput {
  description: String!
  type: EquipmentTypeCreateOneInput!
}

type EquipmentEdge {
  node: Equipment!
  cursor: String!
}

enum EquipmentOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EquipmentPreviousValues {
  id: ID!
  description: String!
}

type EquipmentSubscriptionPayload {
  mutation: MutationType!
  node: Equipment
  updatedFields: [String!]
  previousValues: EquipmentPreviousValues
}

input EquipmentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EquipmentWhereInput
  AND: [EquipmentSubscriptionWhereInput!]
  OR: [EquipmentSubscriptionWhereInput!]
  NOT: [EquipmentSubscriptionWhereInput!]
}

type EquipmentType {
  id: ID!
  description: String!
}

type EquipmentTypeConnection {
  pageInfo: PageInfo!
  edges: [EquipmentTypeEdge]!
  aggregate: AggregateEquipmentType!
}

input EquipmentTypeCreateInput {
  description: String!
}

input EquipmentTypeCreateOneInput {
  create: EquipmentTypeCreateInput
  connect: EquipmentTypeWhereUniqueInput
}

type EquipmentTypeEdge {
  node: EquipmentType!
  cursor: String!
}

enum EquipmentTypeOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EquipmentTypePreviousValues {
  id: ID!
  description: String!
}

type EquipmentTypeSubscriptionPayload {
  mutation: MutationType!
  node: EquipmentType
  updatedFields: [String!]
  previousValues: EquipmentTypePreviousValues
}

input EquipmentTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EquipmentTypeWhereInput
  AND: [EquipmentTypeSubscriptionWhereInput!]
  OR: [EquipmentTypeSubscriptionWhereInput!]
  NOT: [EquipmentTypeSubscriptionWhereInput!]
}

input EquipmentTypeUpdateDataInput {
  description: String
}

input EquipmentTypeUpdateInput {
  description: String
}

input EquipmentTypeUpdateOneRequiredInput {
  create: EquipmentTypeCreateInput
  update: EquipmentTypeUpdateDataInput
  upsert: EquipmentTypeUpsertNestedInput
  connect: EquipmentTypeWhereUniqueInput
}

input EquipmentTypeUpsertNestedInput {
  update: EquipmentTypeUpdateDataInput!
  create: EquipmentTypeCreateInput!
}

input EquipmentTypeWhereInput {
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
  AND: [EquipmentTypeWhereInput!]
  OR: [EquipmentTypeWhereInput!]
  NOT: [EquipmentTypeWhereInput!]
}

input EquipmentTypeWhereUniqueInput {
  id: ID
}

input EquipmentUpdateDataInput {
  description: String
  type: EquipmentTypeUpdateOneRequiredInput
  owner: UserUpdateOneRequiredWithoutEquipmentInput
}

input EquipmentUpdateInput {
  description: String
  type: EquipmentTypeUpdateOneRequiredInput
  owner: UserUpdateOneRequiredWithoutEquipmentInput
}

input EquipmentUpdateManyWithoutOwnerInput {
  create: [EquipmentCreateWithoutOwnerInput!]
  delete: [EquipmentWhereUniqueInput!]
  connect: [EquipmentWhereUniqueInput!]
  disconnect: [EquipmentWhereUniqueInput!]
  update: [EquipmentUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [EquipmentUpsertWithWhereUniqueWithoutOwnerInput!]
}

input EquipmentUpdateOneRequiredInput {
  create: EquipmentCreateInput
  update: EquipmentUpdateDataInput
  upsert: EquipmentUpsertNestedInput
  connect: EquipmentWhereUniqueInput
}

input EquipmentUpdateWithoutOwnerDataInput {
  description: String
  type: EquipmentTypeUpdateOneRequiredInput
}

input EquipmentUpdateWithWhereUniqueWithoutOwnerInput {
  where: EquipmentWhereUniqueInput!
  data: EquipmentUpdateWithoutOwnerDataInput!
}

input EquipmentUpsertNestedInput {
  update: EquipmentUpdateDataInput!
  create: EquipmentCreateInput!
}

input EquipmentUpsertWithWhereUniqueWithoutOwnerInput {
  where: EquipmentWhereUniqueInput!
  update: EquipmentUpdateWithoutOwnerDataInput!
  create: EquipmentCreateWithoutOwnerInput!
}

input EquipmentWhereInput {
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
  type: EquipmentTypeWhereInput
  owner: UserWhereInput
  AND: [EquipmentWhereInput!]
  OR: [EquipmentWhereInput!]
  NOT: [EquipmentWhereInput!]
}

input EquipmentWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAvailability(data: AvailabilityCreateInput!): Availability!
  updateAvailability(data: AvailabilityUpdateInput!, where: AvailabilityWhereUniqueInput!): Availability
  updateManyAvailabilities(data: AvailabilityUpdateInput!, where: AvailabilityWhereInput): BatchPayload!
  upsertAvailability(where: AvailabilityWhereUniqueInput!, create: AvailabilityCreateInput!, update: AvailabilityUpdateInput!): Availability!
  deleteAvailability(where: AvailabilityWhereUniqueInput!): Availability
  deleteManyAvailabilities(where: AvailabilityWhereInput): BatchPayload!
  createEquipment(data: EquipmentCreateInput!): Equipment!
  updateEquipment(data: EquipmentUpdateInput!, where: EquipmentWhereUniqueInput!): Equipment
  updateManyEquipments(data: EquipmentUpdateInput!, where: EquipmentWhereInput): BatchPayload!
  upsertEquipment(where: EquipmentWhereUniqueInput!, create: EquipmentCreateInput!, update: EquipmentUpdateInput!): Equipment!
  deleteEquipment(where: EquipmentWhereUniqueInput!): Equipment
  deleteManyEquipments(where: EquipmentWhereInput): BatchPayload!
  createEquipmentType(data: EquipmentTypeCreateInput!): EquipmentType!
  updateEquipmentType(data: EquipmentTypeUpdateInput!, where: EquipmentTypeWhereUniqueInput!): EquipmentType
  updateManyEquipmentTypes(data: EquipmentTypeUpdateInput!, where: EquipmentTypeWhereInput): BatchPayload!
  upsertEquipmentType(where: EquipmentTypeWhereUniqueInput!, create: EquipmentTypeCreateInput!, update: EquipmentTypeUpdateInput!): EquipmentType!
  deleteEquipmentType(where: EquipmentTypeWhereUniqueInput!): EquipmentType
  deleteManyEquipmentTypes(where: EquipmentTypeWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
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
  availability(where: AvailabilityWhereUniqueInput!): Availability
  availabilities(where: AvailabilityWhereInput, orderBy: AvailabilityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Availability]!
  availabilitiesConnection(where: AvailabilityWhereInput, orderBy: AvailabilityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AvailabilityConnection!
  equipment(where: EquipmentWhereUniqueInput!): Equipment
  equipments(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Equipment]!
  equipmentsConnection(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EquipmentConnection!
  equipmentType(where: EquipmentTypeWhereUniqueInput!): EquipmentType
  equipmentTypes(where: EquipmentTypeWhereInput, orderBy: EquipmentTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EquipmentType]!
  equipmentTypesConnection(where: EquipmentTypeWhereInput, orderBy: EquipmentTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EquipmentTypeConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  availability(where: AvailabilitySubscriptionWhereInput): AvailabilitySubscriptionPayload
  equipment(where: EquipmentSubscriptionWhereInput): EquipmentSubscriptionPayload
  equipmentType(where: EquipmentTypeSubscriptionWhereInput): EquipmentTypeSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  authId: String
  firstName: String!
  lastName: String!
  role: UserRole!
  equipment(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Equipment!]
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
  equipment: EquipmentCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutEquipmentInput {
  create: UserCreateWithoutEquipmentInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutEquipmentInput {
  email: String!
  authId: String
  firstName: String!
  lastName: String!
  role: UserRole!
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
  CLIENT
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
  equipment: EquipmentUpdateManyWithoutOwnerInput
}

input UserUpdateOneRequiredWithoutEquipmentInput {
  create: UserCreateWithoutEquipmentInput
  update: UserUpdateWithoutEquipmentDataInput
  upsert: UserUpsertWithoutEquipmentInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutEquipmentDataInput {
  email: String
  authId: String
  firstName: String
  lastName: String
  role: UserRole
}

input UserUpsertWithoutEquipmentInput {
  update: UserUpdateWithoutEquipmentDataInput!
  create: UserCreateWithoutEquipmentInput!
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
  equipment_every: EquipmentWhereInput
  equipment_some: EquipmentWhereInput
  equipment_none: EquipmentWhereInput
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
    