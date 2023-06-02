/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment Guest on guest {\n  id\n  name\n  email\n  tags\n  birthday\n  created_at\n  wedding {\n    id\n    name\n  }\n  table {\n    id\n    name\n    sorted_diner_ids\n  }\n  table_position\n}": types.GuestFragmentDoc,
    "fragment Table on table {\n  id\n  name\n  sorted_diner_ids\n  guestCollection(first: 100) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        email\n        tags\n        birthday\n        created_at\n        wedding {\n          id\n          name\n        }\n        table {\n          id\n          name\n          sorted_diner_ids\n        }\n        table_position\n      }\n    }\n  }\n}": types.TableFragmentDoc,
    "fragment Wedding on wedding {\n  id\n  name\n  datetime\n}": types.WeddingFragmentDoc,
    "mutation createGuest($objects: [guestInsertInput!]!) {\n  insertIntoguestCollection(objects: $objects) {\n    records {\n      ...Guest\n    }\n  }\n}": types.CreateGuestDocument,
    "mutation createTable($objects: [tableInsertInput!]!) {\n  insertIntotableCollection(objects: $objects) {\n    records {\n      ...Table\n    }\n  }\n}": types.CreateTableDocument,
    "mutation createWedding($objects: [weddingInsertInput!]!) {\n  insertIntoweddingCollection(objects: $objects) {\n    records {\n      ...Wedding\n    }\n  }\n}": types.CreateWeddingDocument,
    "mutation deleteGuest($guestId: UUID!) {\n  deleteFromguestCollection(filter: {id: {eq: $guestId}}, atMost: 1) {\n    affectedCount\n  }\n}": types.DeleteGuestDocument,
    "mutation updateGuest($id: UUID!, $guest: guestUpdateInput!) {\n  updateguestCollection(filter: {id: {eq: $id}}, set: $guest) {\n    records {\n      ...Guest\n    }\n  }\n}": types.UpdateGuestDocument,
    "mutation updateTable($id: UUID!, $table: tableUpdateInput!) {\n  updatetableCollection(filter: {id: {eq: $id}}, set: $table) {\n    records {\n      ...Table\n    }\n  }\n}": types.UpdateTableDocument,
    "query guests($first: Int, $after: Cursor) {\n  guestCollection(first: $first, after: $after) {\n    edges {\n      node {\n        ...Guest\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}": types.GuestsDocument,
    "query tables($first: Int, $after: Cursor) {\n  tableCollection(first: $first, after: $after) {\n    edges {\n      node {\n        ...Table\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}": types.TablesDocument,
    "query weddings($first: Int, $after: Cursor) {\n  weddingCollection(first: $first, after: $after) {\n    edges {\n      node {\n        ...Wedding\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}": types.WeddingsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Guest on guest {\n  id\n  name\n  email\n  tags\n  birthday\n  created_at\n  wedding {\n    id\n    name\n  }\n  table {\n    id\n    name\n    sorted_diner_ids\n  }\n  table_position\n}"): (typeof documents)["fragment Guest on guest {\n  id\n  name\n  email\n  tags\n  birthday\n  created_at\n  wedding {\n    id\n    name\n  }\n  table {\n    id\n    name\n    sorted_diner_ids\n  }\n  table_position\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Table on table {\n  id\n  name\n  sorted_diner_ids\n  guestCollection(first: 100) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        email\n        tags\n        birthday\n        created_at\n        wedding {\n          id\n          name\n        }\n        table {\n          id\n          name\n          sorted_diner_ids\n        }\n        table_position\n      }\n    }\n  }\n}"): (typeof documents)["fragment Table on table {\n  id\n  name\n  sorted_diner_ids\n  guestCollection(first: 100) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        email\n        tags\n        birthday\n        created_at\n        wedding {\n          id\n          name\n        }\n        table {\n          id\n          name\n          sorted_diner_ids\n        }\n        table_position\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Wedding on wedding {\n  id\n  name\n  datetime\n}"): (typeof documents)["fragment Wedding on wedding {\n  id\n  name\n  datetime\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createGuest($objects: [guestInsertInput!]!) {\n  insertIntoguestCollection(objects: $objects) {\n    records {\n      ...Guest\n    }\n  }\n}"): (typeof documents)["mutation createGuest($objects: [guestInsertInput!]!) {\n  insertIntoguestCollection(objects: $objects) {\n    records {\n      ...Guest\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createTable($objects: [tableInsertInput!]!) {\n  insertIntotableCollection(objects: $objects) {\n    records {\n      ...Table\n    }\n  }\n}"): (typeof documents)["mutation createTable($objects: [tableInsertInput!]!) {\n  insertIntotableCollection(objects: $objects) {\n    records {\n      ...Table\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createWedding($objects: [weddingInsertInput!]!) {\n  insertIntoweddingCollection(objects: $objects) {\n    records {\n      ...Wedding\n    }\n  }\n}"): (typeof documents)["mutation createWedding($objects: [weddingInsertInput!]!) {\n  insertIntoweddingCollection(objects: $objects) {\n    records {\n      ...Wedding\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation deleteGuest($guestId: UUID!) {\n  deleteFromguestCollection(filter: {id: {eq: $guestId}}, atMost: 1) {\n    affectedCount\n  }\n}"): (typeof documents)["mutation deleteGuest($guestId: UUID!) {\n  deleteFromguestCollection(filter: {id: {eq: $guestId}}, atMost: 1) {\n    affectedCount\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation updateGuest($id: UUID!, $guest: guestUpdateInput!) {\n  updateguestCollection(filter: {id: {eq: $id}}, set: $guest) {\n    records {\n      ...Guest\n    }\n  }\n}"): (typeof documents)["mutation updateGuest($id: UUID!, $guest: guestUpdateInput!) {\n  updateguestCollection(filter: {id: {eq: $id}}, set: $guest) {\n    records {\n      ...Guest\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation updateTable($id: UUID!, $table: tableUpdateInput!) {\n  updatetableCollection(filter: {id: {eq: $id}}, set: $table) {\n    records {\n      ...Table\n    }\n  }\n}"): (typeof documents)["mutation updateTable($id: UUID!, $table: tableUpdateInput!) {\n  updatetableCollection(filter: {id: {eq: $id}}, set: $table) {\n    records {\n      ...Table\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query guests($first: Int, $after: Cursor) {\n  guestCollection(first: $first, after: $after) {\n    edges {\n      node {\n        ...Guest\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}"): (typeof documents)["query guests($first: Int, $after: Cursor) {\n  guestCollection(first: $first, after: $after) {\n    edges {\n      node {\n        ...Guest\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query tables($first: Int, $after: Cursor) {\n  tableCollection(first: $first, after: $after) {\n    edges {\n      node {\n        ...Table\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}"): (typeof documents)["query tables($first: Int, $after: Cursor) {\n  tableCollection(first: $first, after: $after) {\n    edges {\n      node {\n        ...Table\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query weddings($first: Int, $after: Cursor) {\n  weddingCollection(first: $first, after: $after) {\n    edges {\n      node {\n        ...Wedding\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}"): (typeof documents)["query weddings($first: Int, $after: Cursor) {\n  weddingCollection(first: $first, after: $after) {\n    edges {\n      node {\n        ...Wedding\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;