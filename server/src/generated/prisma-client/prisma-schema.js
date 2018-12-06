module.exports = {
        typeDefs: /* GraphQL */ `type AggregateEquipment {
  count: Int!
}

type AggregateEquipmentType {
  count: Int!
}

type AggregateListing {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Equipment {
  id: ID!
  title: String!
  description: String!
  status: EquipmentStatus!
  type: EquipmentType!
  owner: User!
  listings(where: ListingWhereInput, orderBy: ListingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Listing!]
}

type EquipmentConnection {
  pageInfo: PageInfo!
  edges: [EquipmentEdge]!
  aggregate: AggregateEquipment!
}

input EquipmentCreateInput {
  title: String!
  description: String!
  status: EquipmentStatus!
  type: EquipmentTypeCreateOneWithoutEquipmentsInput!
  owner: UserCreateOneWithoutEquipmentsInput!
  listings: ListingCreateManyWithoutEquipmentInput
}

input EquipmentCreateManyWithoutOwnerInput {
  create: [EquipmentCreateWithoutOwnerInput!]
  connect: [EquipmentWhereUniqueInput!]
}

input EquipmentCreateManyWithoutTypeInput {
  create: [EquipmentCreateWithoutTypeInput!]
  connect: [EquipmentWhereUniqueInput!]
}

input EquipmentCreateOneWithoutListingsInput {
  create: EquipmentCreateWithoutListingsInput
  connect: EquipmentWhereUniqueInput
}

input EquipmentCreateWithoutListingsInput {
  title: String!
  description: String!
  status: EquipmentStatus!
  type: EquipmentTypeCreateOneWithoutEquipmentsInput!
  owner: UserCreateOneWithoutEquipmentsInput!
}

input EquipmentCreateWithoutOwnerInput {
  title: String!
  description: String!
  status: EquipmentStatus!
  type: EquipmentTypeCreateOneWithoutEquipmentsInput!
  listings: ListingCreateManyWithoutEquipmentInput
}

input EquipmentCreateWithoutTypeInput {
  title: String!
  description: String!
  status: EquipmentStatus!
  owner: UserCreateOneWithoutEquipmentsInput!
  listings: ListingCreateManyWithoutEquipmentInput
}

type EquipmentEdge {
  node: Equipment!
  cursor: String!
}

enum EquipmentOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EquipmentPreviousValues {
  id: ID!
  title: String!
  description: String!
  status: EquipmentStatus!
}

enum EquipmentStatus {
  DRAFT
  PUBLISHED
  BOOKED
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
  title: String!
  description: String!
  equipments(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Equipment!]
}

type EquipmentTypeConnection {
  pageInfo: PageInfo!
  edges: [EquipmentTypeEdge]!
  aggregate: AggregateEquipmentType!
}

input EquipmentTypeCreateInput {
  title: String!
  description: String!
  equipments: EquipmentCreateManyWithoutTypeInput
}

input EquipmentTypeCreateOneWithoutEquipmentsInput {
  create: EquipmentTypeCreateWithoutEquipmentsInput
  connect: EquipmentTypeWhereUniqueInput
}

input EquipmentTypeCreateWithoutEquipmentsInput {
  title: String!
  description: String!
}

type EquipmentTypeEdge {
  node: EquipmentType!
  cursor: String!
}

enum EquipmentTypeOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EquipmentTypePreviousValues {
  id: ID!
  title: String!
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
  title: String
  description: String
  equipments: EquipmentUpdateManyWithoutTypeInput
}

input EquipmentTypeUpdateManyMutationInput {
  title: String
  description: String
}

input EquipmentTypeUpdateOneRequiredWithoutEquipmentsInput {
  create: EquipmentTypeCreateWithoutEquipmentsInput
  update: EquipmentTypeUpdateWithoutEquipmentsDataInput
  upsert: EquipmentTypeUpsertWithoutEquipmentsInput
  connect: EquipmentTypeWhereUniqueInput
}

input EquipmentTypeUpdateWithoutEquipmentsDataInput {
  title: String
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
  title: String
  description: String
  status: EquipmentStatus
  type: EquipmentTypeUpdateOneRequiredWithoutEquipmentsInput
  owner: UserUpdateOneRequiredWithoutEquipmentsInput
  listings: ListingUpdateManyWithoutEquipmentInput
}

input EquipmentUpdateManyMutationInput {
  title: String
  description: String
  status: EquipmentStatus
}

input EquipmentUpdateManyWithoutOwnerInput {
  create: [EquipmentCreateWithoutOwnerInput!]
  delete: [EquipmentWhereUniqueInput!]
  connect: [EquipmentWhereUniqueInput!]
  disconnect: [EquipmentWhereUniqueInput!]
  update: [EquipmentUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [EquipmentUpsertWithWhereUniqueWithoutOwnerInput!]
}

input EquipmentUpdateManyWithoutTypeInput {
  create: [EquipmentCreateWithoutTypeInput!]
  delete: [EquipmentWhereUniqueInput!]
  connect: [EquipmentWhereUniqueInput!]
  disconnect: [EquipmentWhereUniqueInput!]
  update: [EquipmentUpdateWithWhereUniqueWithoutTypeInput!]
  upsert: [EquipmentUpsertWithWhereUniqueWithoutTypeInput!]
}

input EquipmentUpdateOneRequiredWithoutListingsInput {
  create: EquipmentCreateWithoutListingsInput
  update: EquipmentUpdateWithoutListingsDataInput
  upsert: EquipmentUpsertWithoutListingsInput
  connect: EquipmentWhereUniqueInput
}

input EquipmentUpdateWithoutListingsDataInput {
  title: String
  description: String
  status: EquipmentStatus
  type: EquipmentTypeUpdateOneRequiredWithoutEquipmentsInput
  owner: UserUpdateOneRequiredWithoutEquipmentsInput
}

input EquipmentUpdateWithoutOwnerDataInput {
  title: String
  description: String
  status: EquipmentStatus
  type: EquipmentTypeUpdateOneRequiredWithoutEquipmentsInput
  listings: ListingUpdateManyWithoutEquipmentInput
}

input EquipmentUpdateWithoutTypeDataInput {
  title: String
  description: String
  status: EquipmentStatus
  owner: UserUpdateOneRequiredWithoutEquipmentsInput
  listings: ListingUpdateManyWithoutEquipmentInput
}

input EquipmentUpdateWithWhereUniqueWithoutOwnerInput {
  where: EquipmentWhereUniqueInput!
  data: EquipmentUpdateWithoutOwnerDataInput!
}

input EquipmentUpdateWithWhereUniqueWithoutTypeInput {
  where: EquipmentWhereUniqueInput!
  data: EquipmentUpdateWithoutTypeDataInput!
}

input EquipmentUpsertWithoutListingsInput {
  update: EquipmentUpdateWithoutListingsDataInput!
  create: EquipmentCreateWithoutListingsInput!
}

input EquipmentUpsertWithWhereUniqueWithoutOwnerInput {
  where: EquipmentWhereUniqueInput!
  update: EquipmentUpdateWithoutOwnerDataInput!
  create: EquipmentCreateWithoutOwnerInput!
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
  status: EquipmentStatus
  status_not: EquipmentStatus
  status_in: [EquipmentStatus!]
  status_not_in: [EquipmentStatus!]
  type: EquipmentTypeWhereInput
  owner: UserWhereInput
  listings_every: ListingWhereInput
  listings_some: ListingWhereInput
  listings_none: ListingWhereInput
  AND: [EquipmentWhereInput!]
  OR: [EquipmentWhereInput!]
  NOT: [EquipmentWhereInput!]
}

input EquipmentWhereUniqueInput {
  id: ID
}

type Listing {
  id: ID!
  title: String!
  description: String!
  start: DateTime!
  end: DateTime!
  status: ListingStatus!
  equipment: Equipment!
  owner: User!
}

type ListingConnection {
  pageInfo: PageInfo!
  edges: [ListingEdge]!
  aggregate: AggregateListing!
}

input ListingCreateInput {
  title: String!
  description: String!
  start: DateTime!
  end: DateTime!
  status: ListingStatus!
  equipment: EquipmentCreateOneWithoutListingsInput!
  owner: UserCreateOneWithoutListingsInput!
}

input ListingCreateManyWithoutEquipmentInput {
  create: [ListingCreateWithoutEquipmentInput!]
  connect: [ListingWhereUniqueInput!]
}

input ListingCreateManyWithoutOwnerInput {
  create: [ListingCreateWithoutOwnerInput!]
  connect: [ListingWhereUniqueInput!]
}

input ListingCreateWithoutEquipmentInput {
  title: String!
  description: String!
  start: DateTime!
  end: DateTime!
  status: ListingStatus!
  owner: UserCreateOneWithoutListingsInput!
}

input ListingCreateWithoutOwnerInput {
  title: String!
  description: String!
  start: DateTime!
  end: DateTime!
  status: ListingStatus!
  equipment: EquipmentCreateOneWithoutListingsInput!
}

type ListingEdge {
  node: Listing!
  cursor: String!
}

enum ListingOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  start_ASC
  start_DESC
  end_ASC
  end_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ListingPreviousValues {
  id: ID!
  title: String!
  description: String!
  start: DateTime!
  end: DateTime!
  status: ListingStatus!
}

enum ListingStatus {
  DRAFT
  PUBLISHED
  BOOKED
}

type ListingSubscriptionPayload {
  mutation: MutationType!
  node: Listing
  updatedFields: [String!]
  previousValues: ListingPreviousValues
}

input ListingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ListingWhereInput
  AND: [ListingSubscriptionWhereInput!]
  OR: [ListingSubscriptionWhereInput!]
  NOT: [ListingSubscriptionWhereInput!]
}

input ListingUpdateInput {
  title: String
  description: String
  start: DateTime
  end: DateTime
  status: ListingStatus
  equipment: EquipmentUpdateOneRequiredWithoutListingsInput
  owner: UserUpdateOneRequiredWithoutListingsInput
}

input ListingUpdateManyMutationInput {
  title: String
  description: String
  start: DateTime
  end: DateTime
  status: ListingStatus
}

input ListingUpdateManyWithoutEquipmentInput {
  create: [ListingCreateWithoutEquipmentInput!]
  delete: [ListingWhereUniqueInput!]
  connect: [ListingWhereUniqueInput!]
  disconnect: [ListingWhereUniqueInput!]
  update: [ListingUpdateWithWhereUniqueWithoutEquipmentInput!]
  upsert: [ListingUpsertWithWhereUniqueWithoutEquipmentInput!]
}

input ListingUpdateManyWithoutOwnerInput {
  create: [ListingCreateWithoutOwnerInput!]
  delete: [ListingWhereUniqueInput!]
  connect: [ListingWhereUniqueInput!]
  disconnect: [ListingWhereUniqueInput!]
  update: [ListingUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ListingUpsertWithWhereUniqueWithoutOwnerInput!]
}

input ListingUpdateWithoutEquipmentDataInput {
  title: String
  description: String
  start: DateTime
  end: DateTime
  status: ListingStatus
  owner: UserUpdateOneRequiredWithoutListingsInput
}

input ListingUpdateWithoutOwnerDataInput {
  title: String
  description: String
  start: DateTime
  end: DateTime
  status: ListingStatus
  equipment: EquipmentUpdateOneRequiredWithoutListingsInput
}

input ListingUpdateWithWhereUniqueWithoutEquipmentInput {
  where: ListingWhereUniqueInput!
  data: ListingUpdateWithoutEquipmentDataInput!
}

input ListingUpdateWithWhereUniqueWithoutOwnerInput {
  where: ListingWhereUniqueInput!
  data: ListingUpdateWithoutOwnerDataInput!
}

input ListingUpsertWithWhereUniqueWithoutEquipmentInput {
  where: ListingWhereUniqueInput!
  update: ListingUpdateWithoutEquipmentDataInput!
  create: ListingCreateWithoutEquipmentInput!
}

input ListingUpsertWithWhereUniqueWithoutOwnerInput {
  where: ListingWhereUniqueInput!
  update: ListingUpdateWithoutOwnerDataInput!
  create: ListingCreateWithoutOwnerInput!
}

input ListingWhereInput {
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
  status: ListingStatus
  status_not: ListingStatus
  status_in: [ListingStatus!]
  status_not_in: [ListingStatus!]
  equipment: EquipmentWhereInput
  owner: UserWhereInput
  AND: [ListingWhereInput!]
  OR: [ListingWhereInput!]
  NOT: [ListingWhereInput!]
}

input ListingWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
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
  createListing(data: ListingCreateInput!): Listing!
  updateListing(data: ListingUpdateInput!, where: ListingWhereUniqueInput!): Listing
  updateManyListings(data: ListingUpdateManyMutationInput!, where: ListingWhereInput): BatchPayload!
  upsertListing(where: ListingWhereUniqueInput!, create: ListingCreateInput!, update: ListingUpdateInput!): Listing!
  deleteListing(where: ListingWhereUniqueInput!): Listing
  deleteManyListings(where: ListingWhereInput): BatchPayload!
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
  equipment(where: EquipmentWhereUniqueInput!): Equipment
  equipments(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Equipment]!
  equipmentsConnection(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EquipmentConnection!
  equipmentType(where: EquipmentTypeWhereUniqueInput!): EquipmentType
  equipmentTypes(where: EquipmentTypeWhereInput, orderBy: EquipmentTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EquipmentType]!
  equipmentTypesConnection(where: EquipmentTypeWhereInput, orderBy: EquipmentTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EquipmentTypeConnection!
  listing(where: ListingWhereUniqueInput!): Listing
  listings(where: ListingWhereInput, orderBy: ListingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Listing]!
  listingsConnection(where: ListingWhereInput, orderBy: ListingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ListingConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  equipment(where: EquipmentSubscriptionWhereInput): EquipmentSubscriptionPayload
  equipmentType(where: EquipmentTypeSubscriptionWhereInput): EquipmentTypeSubscriptionPayload
  listing(where: ListingSubscriptionWhereInput): ListingSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  authId: String
  firstName: String!
  lastName: String!
  role: UserRole!
  equipments(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Equipment!]
  listings(where: ListingWhereInput, orderBy: ListingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Listing!]
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
  equipments: EquipmentCreateManyWithoutOwnerInput
  listings: ListingCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutEquipmentsInput {
  create: UserCreateWithoutEquipmentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutListingsInput {
  create: UserCreateWithoutListingsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutEquipmentsInput {
  email: String!
  authId: String
  firstName: String!
  lastName: String!
  role: UserRole!
  listings: ListingCreateManyWithoutOwnerInput
}

input UserCreateWithoutListingsInput {
  email: String!
  authId: String
  firstName: String!
  lastName: String!
  role: UserRole!
  equipments: EquipmentCreateManyWithoutOwnerInput
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
  equipments: EquipmentUpdateManyWithoutOwnerInput
  listings: ListingUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  email: String
  authId: String
  firstName: String
  lastName: String
  role: UserRole
}

input UserUpdateOneRequiredWithoutEquipmentsInput {
  create: UserCreateWithoutEquipmentsInput
  update: UserUpdateWithoutEquipmentsDataInput
  upsert: UserUpsertWithoutEquipmentsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutListingsInput {
  create: UserCreateWithoutListingsInput
  update: UserUpdateWithoutListingsDataInput
  upsert: UserUpsertWithoutListingsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutEquipmentsDataInput {
  email: String
  authId: String
  firstName: String
  lastName: String
  role: UserRole
  listings: ListingUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutListingsDataInput {
  email: String
  authId: String
  firstName: String
  lastName: String
  role: UserRole
  equipments: EquipmentUpdateManyWithoutOwnerInput
}

input UserUpsertWithoutEquipmentsInput {
  update: UserUpdateWithoutEquipmentsDataInput!
  create: UserCreateWithoutEquipmentsInput!
}

input UserUpsertWithoutListingsInput {
  update: UserUpdateWithoutListingsDataInput!
  create: UserCreateWithoutListingsInput!
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
  equipments_every: EquipmentWhereInput
  equipments_some: EquipmentWhereInput
  equipments_none: EquipmentWhereInput
  listings_every: ListingWhereInput
  listings_some: ListingWhereInput
  listings_none: ListingWhereInput
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
    