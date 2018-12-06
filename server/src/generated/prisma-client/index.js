"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Equipment",
    embedded: false
  },
  {
    name: "EquipmentStatus",
    embedded: false
  },
  {
    name: "EquipmentType",
    embedded: false
  },
  {
    name: "Listing",
    embedded: false
  },
  {
    name: "ListingStatus",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "UserRole",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
