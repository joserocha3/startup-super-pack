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
  equipment: EquipmentCreateOneWithoutAvailabilitiesInput!
  start: DateTime!
  end: DateTime!
  booked: Boolean
}

input AvailabilityCreateManyWithoutEquipmentInput {
  create: [AvailabilityCreateWithoutEquipmentInput!]
  connect: [AvailabilityWhereUniqueInput!]
}

input AvailabilityCreateWithoutEquipmentInput {
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
  equipment: EquipmentUpdateOneRequiredWithoutAvailabilitiesInput
  start: DateTime
  end: DateTime
  booked: Boolean
}

input AvailabilityUpdateManyMutationInput {
  start: DateTime
  end: DateTime
  booked: Boolean
}

input AvailabilityUpdateManyWithoutEquipmentInput {
  create: [AvailabilityCreateWithoutEquipmentInput!]
  delete: [AvailabilityWhereUniqueInput!]
  connect: [AvailabilityWhereUniqueInput!]
  disconnect: [AvailabilityWhereUniqueInput!]
  update: [AvailabilityUpdateWithWhereUniqueWithoutEquipmentInput!]
  upsert: [AvailabilityUpsertWithWhereUniqueWithoutEquipmentInput!]
}

input AvailabilityUpdateWithoutEquipmentDataInput {
  start: DateTime
  end: DateTime
  booked: Boolean
}

input AvailabilityUpdateWithWhereUniqueWithoutEquipmentInput {
  where: AvailabilityWhereUniqueInput!
  data: AvailabilityUpdateWithoutEquipmentDataInput!
}

input AvailabilityUpsertWithWhereUniqueWithoutEquipmentInput {
  where: AvailabilityWhereUniqueInput!
  update: AvailabilityUpdateWithoutEquipmentDataInput!
  create: AvailabilityCreateWithoutEquipmentInput!
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
  availabilities(where: AvailabilityWhereInput, orderBy: AvailabilityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Availability!]
}

type EquipmentConnection {
  pageInfo: PageInfo!
  edges: [EquipmentEdge]!
  aggregate: AggregateEquipment!
}

input EquipmentCreateInput {
  description: String!
  type: EquipmentTypeCreateOneWithoutEquipmentsInput!
  owner: UserCreateOneInput!
  availabilities: AvailabilityCreateManyWithoutEquipmentInput
}

input EquipmentCreateManyWithoutTypeInput {
  create: [EquipmentCreateWithoutTypeInput!]
  connect: [EquipmentWhereUniqueInput!]
}

input EquipmentCreateOneWithoutAvailabilitiesInput {
  create: EquipmentCreateWithoutAvailabilitiesInput
  connect: EquipmentWhereUniqueInput
}

input EquipmentCreateWithoutAvailabilitiesInput {
  description: String!
  type: EquipmentTypeCreateOneWithoutEquipmentsInput!
  owner: UserCreateOneInput!
}

input EquipmentCreateWithoutTypeInput {
  description: String!
  owner: UserCreateOneInput!
  availabilities: AvailabilityCreateManyWithoutEquipmentInput
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
  equipments(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Equipment!]
}

type EquipmentTypeConnection {
  pageInfo: PageInfo!
  edges: [EquipmentTypeEdge]!
  aggregate: AggregateEquipmentType!
}

input EquipmentTypeCreateInput {
  description: String!
  equipments: EquipmentCreateManyWithoutTypeInput
}

input EquipmentTypeCreateOneWithoutEquipmentsInput {
  create: EquipmentTypeCreateWithoutEquipmentsInput
  connect: EquipmentTypeWhereUniqueInput
}

input EquipmentTypeCreateWithoutEquipmentsInput {
  description: String!
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

input EquipmentTypeUpdateInput {
  description: String
  equipments: EquipmentUpdateManyWithoutTypeInput
}

input EquipmentTypeUpdateManyMutationInput {
  description: String
}

input EquipmentTypeUpdateOneRequiredWithoutEquipmentsInput {
  create: EquipmentTypeCreateWithoutEquipmentsInput
  update: EquipmentTypeUpdateWithoutEquipmentsDataInput
  upsert: EquipmentTypeUpsertWithoutEquipmentsInput
  connect: EquipmentTypeWhereUniqueInput
}

input EquipmentTypeUpdateWithoutEquipmentsDataInput {
  description: String
}

input EquipmentTypeUpsertWithoutEquipmentsInput {
  update: EquipmentTypeUpdateWithoutEquipmentsDataInput!
  create: EquipmentTypeCreateWithoutEquipmentsInput!
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
  equipments_every: EquipmentWhereInput
  equipments_some: EquipmentWhereInput
  equipments_none: EquipmentWhereInput
  AND: [EquipmentTypeWhereInput!]
  OR: [EquipmentTypeWhereInput!]
  NOT: [EquipmentTypeWhereInput!]
}

input EquipmentTypeWhereUniqueInput {
  id: ID
}

input EquipmentUpdateInput {
  description: String
  type: EquipmentTypeUpdateOneRequiredWithoutEquipmentsInput
  owner: UserUpdateOneRequiredInput
  availabilities: AvailabilityUpdateManyWithoutEquipmentInput
}

input EquipmentUpdateManyMutationInput {
  description: String
}

input EquipmentUpdateManyWithoutTypeInput {
  create: [EquipmentCreateWithoutTypeInput!]
  delete: [EquipmentWhereUniqueInput!]
  connect: [EquipmentWhereUniqueInput!]
  disconnect: [EquipmentWhereUniqueInput!]
  update: [EquipmentUpdateWithWhereUniqueWithoutTypeInput!]
  upsert: [EquipmentUpsertWithWhereUniqueWithoutTypeInput!]
}

input EquipmentUpdateOneRequiredWithoutAvailabilitiesInput {
  create: EquipmentCreateWithoutAvailabilitiesInput
  update: EquipmentUpdateWithoutAvailabilitiesDataInput
  upsert: EquipmentUpsertWithoutAvailabilitiesInput
  connect: EquipmentWhereUniqueInput
}

input EquipmentUpdateWithoutAvailabilitiesDataInput {
  description: String
  type: EquipmentTypeUpdateOneRequiredWithoutEquipmentsInput
  owner: UserUpdateOneRequiredInput
}

input EquipmentUpdateWithoutTypeDataInput {
  description: String
  owner: UserUpdateOneRequiredInput
  availabilities: AvailabilityUpdateManyWithoutEquipmentInput
}

input EquipmentUpdateWithWhereUniqueWithoutTypeInput {
  where: EquipmentWhereUniqueInput!
  data: EquipmentUpdateWithoutTypeDataInput!
}

input EquipmentUpsertWithoutAvailabilitiesInput {
  update: EquipmentUpdateWithoutAvailabilitiesDataInput!
  create: EquipmentCreateWithoutAvailabilitiesInput!
}

input EquipmentUpsertWithWhereUniqueWithoutTypeInput {
  where: EquipmentWhereUniqueInput!
  update: EquipmentUpdateWithoutTypeDataInput!
  create: EquipmentCreateWithoutTypeInput!
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
  availabilities_every: AvailabilityWhereInput
  availabilities_some: AvailabilityWhereInput
  availabilities_none: AvailabilityWhereInput
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
  updateManyAvailabilities(data: AvailabilityUpdateManyMutationInput!, where: AvailabilityWhereInput): BatchPayload!
  upsertAvailability(where: AvailabilityWhereUniqueInput!, create: AvailabilityCreateInput!, update: AvailabilityUpdateInput!): Availability!
  deleteAvailability(where: AvailabilityWhereUniqueInput!): Availability
  deleteManyAvailabilities(where: AvailabilityWhereInput): BatchPayload!
  createEquipment(data: EquipmentCreateInput!): Equipment!
  updateEquipment(data: EquipmentUpdateInput!, where: EquipmentWhereUniqueInput!): Equipment
  updateManyEquipments(data: EquipmentUpdateManyMutationInput!, where: EquipmentWhereInput): BatchPayload!
  upsertEquipment(where: EquipmentWhereUniqueInput!, create: EquipmentCreateInput!, update: EquipmentUpdateInput!): Equipment!
  deleteEquipment(where: EquipmentWhereUniqueInput!): Equipment
  deleteManyEquipments(where: EquipmentWhereInput): BatchPayload!
  createEquipmentType(data: EquipmentTypeCreateInput!): EquipmentType!
  updateEquipmentType(data: EquipmentTypeUpdateInput!, where: EquipmentTypeWhereUniqueInput!): EquipmentType
  updateManyEquipmentTypes(data: EquipmentTypeUpdateManyMutationInput!, where: EquipmentTypeWhereInput): BatchPayload!
  upsertEquipmentType(where: EquipmentTypeWhereUniqueInput!, create: EquipmentTypeCreateInput!, update: EquipmentTypeUpdateInput!): EquipmentType!
  deleteEquipmentType(where: EquipmentTypeWhereUniqueInput!): EquipmentType
  deleteManyEquipmentTypes(where: EquipmentTypeWhereInput): BatchPayload!
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
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
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

input UserUpdateDataInput {
  email: String
  authId: String
  firstName: String
  lastName: String
  role: UserRole
}

input UserUpdateInput {
  email: String
  authId: String
  firstName: String
  lastName: String
  role: UserRole
}

input UserUpdateManyMutationInput {
  email: String
  authId: String
  firstName: String
  lastName: String
  role: UserRole
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
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
    