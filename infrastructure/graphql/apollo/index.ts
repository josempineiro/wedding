import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Opaque: { input: any; output: any; }
  Time: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `guest` collection */
  deleteFromguestCollection: GuestDeleteResponse;
  /** Deletes zero or more records from the `table` collection */
  deleteFromtableCollection: TableDeleteResponse;
  /** Deletes zero or more records from the `wedding` collection */
  deleteFromweddingCollection: WeddingDeleteResponse;
  /** Adds one or more `guest` records to the collection */
  insertIntoguestCollection?: Maybe<GuestInsertResponse>;
  /** Adds one or more `table` records to the collection */
  insertIntotableCollection?: Maybe<TableInsertResponse>;
  /** Adds one or more `wedding` records to the collection */
  insertIntoweddingCollection?: Maybe<WeddingInsertResponse>;
  /** Updates zero or more records in the `guest` collection */
  updateguestCollection: GuestUpdateResponse;
  /** Updates zero or more records in the `table` collection */
  updatetableCollection: TableUpdateResponse;
  /** Updates zero or more records in the `wedding` collection */
  updateweddingCollection: WeddingUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromguestCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GuestFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtableCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TableFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromweddingCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WeddingFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoguestCollectionArgs = {
  objects: Array<GuestInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotableCollectionArgs = {
  objects: Array<TableInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoweddingCollectionArgs = {
  objects: Array<WeddingInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateguestCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<GuestFilter>;
  set: GuestUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetableCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<TableFilter>;
  set: TableUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateweddingCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<WeddingFilter>;
  set: WeddingUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `guest` */
  guestCollection?: Maybe<GuestConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `table` */
  tableCollection?: Maybe<TableConnection>;
  /** A pagable collection of type `wedding` */
  weddingCollection?: Maybe<WeddingConnection>;
};


/** The root type for querying data */
export type QueryGuestCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GuestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GuestOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryTableCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<TableFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TableOrderBy>>;
};


/** The root type for querying data */
export type QueryWeddingCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<WeddingFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<WeddingOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type Guest = Node & {
  __typename?: 'guest';
  birthday?: Maybe<Scalars['Date']['output']>;
  created_at: Scalars['Datetime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  table?: Maybe<Table>;
  table_id?: Maybe<Scalars['UUID']['output']>;
  table_position?: Maybe<Scalars['Int']['output']>;
  tags: Scalars['String']['output'];
  wedding?: Maybe<Wedding>;
  wedding_id: Scalars['UUID']['output'];
};

export type GuestConnection = {
  __typename?: 'guestConnection';
  edges: Array<GuestEdge>;
  pageInfo: PageInfo;
};

export type GuestDeleteResponse = {
  __typename?: 'guestDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Guest>;
};

export type GuestEdge = {
  __typename?: 'guestEdge';
  cursor: Scalars['String']['output'];
  node: Guest;
};

export type GuestFilter = {
  birthday?: InputMaybe<DateFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  table_id?: InputMaybe<UuidFilter>;
  table_position?: InputMaybe<IntFilter>;
  tags?: InputMaybe<StringFilter>;
  wedding_id?: InputMaybe<UuidFilter>;
};

export type GuestInsertInput = {
  birthday?: InputMaybe<Scalars['Date']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  table_id?: InputMaybe<Scalars['UUID']['input']>;
  table_position?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  wedding_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type GuestInsertResponse = {
  __typename?: 'guestInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Guest>;
};

export type GuestOrderBy = {
  birthday?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  table_id?: InputMaybe<OrderByDirection>;
  table_position?: InputMaybe<OrderByDirection>;
  tags?: InputMaybe<OrderByDirection>;
  wedding_id?: InputMaybe<OrderByDirection>;
};

export type GuestUpdateInput = {
  birthday?: InputMaybe<Scalars['Date']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  table_id?: InputMaybe<Scalars['UUID']['input']>;
  table_position?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  wedding_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type GuestUpdateResponse = {
  __typename?: 'guestUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Guest>;
};

export type Table = Node & {
  __typename?: 'table';
  guestCollection?: Maybe<GuestConnection>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  sorted_diner_ids?: Maybe<Array<Maybe<Scalars['UUID']['output']>>>;
};


export type TableGuestCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GuestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GuestOrderBy>>;
};

export type TableConnection = {
  __typename?: 'tableConnection';
  edges: Array<TableEdge>;
  pageInfo: PageInfo;
};

export type TableDeleteResponse = {
  __typename?: 'tableDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Table>;
};

export type TableEdge = {
  __typename?: 'tableEdge';
  cursor: Scalars['String']['output'];
  node: Table;
};

export type TableFilter = {
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
};

export type TableInsertInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sorted_diner_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type TableInsertResponse = {
  __typename?: 'tableInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Table>;
};

export type TableOrderBy = {
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
};

export type TableUpdateInput = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sorted_diner_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
};

export type TableUpdateResponse = {
  __typename?: 'tableUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Table>;
};

export type Wedding = Node & {
  __typename?: 'wedding';
  created_at: Scalars['Datetime']['output'];
  datetime: Scalars['Datetime']['output'];
  guestCollection?: Maybe<GuestConnection>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at: Scalars['Datetime']['output'];
  user_id?: Maybe<Scalars['UUID']['output']>;
};


export type WeddingGuestCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<GuestFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<GuestOrderBy>>;
};

export type WeddingConnection = {
  __typename?: 'weddingConnection';
  edges: Array<WeddingEdge>;
  pageInfo: PageInfo;
};

export type WeddingDeleteResponse = {
  __typename?: 'weddingDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Wedding>;
};

export type WeddingEdge = {
  __typename?: 'weddingEdge';
  cursor: Scalars['String']['output'];
  node: Wedding;
};

export type WeddingFilter = {
  created_at?: InputMaybe<DatetimeFilter>;
  datetime?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type WeddingInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  datetime?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type WeddingInsertResponse = {
  __typename?: 'weddingInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Wedding>;
};

export type WeddingOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  datetime?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type WeddingUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  datetime?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type WeddingUpdateResponse = {
  __typename?: 'weddingUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Wedding>;
};

export type GuestFragment = { __typename?: 'guest', id: any, name: string, email?: string | null, tags: string, birthday?: any | null, created_at: any, table_position?: number | null, wedding?: { __typename?: 'wedding', id: any, name: string } | null, table?: { __typename?: 'table', id: any, name: string, sorted_diner_ids?: Array<any | null> | null } | null };

export type TableFragment = { __typename?: 'table', id: any, name: string, sorted_diner_ids?: Array<any | null> | null, guestCollection?: { __typename?: 'guestConnection', edges: Array<{ __typename?: 'guestEdge', cursor: string, node: { __typename?: 'guest', id: any, name: string, email?: string | null, tags: string, birthday?: any | null, created_at: any, table_position?: number | null, wedding?: { __typename?: 'wedding', id: any, name: string } | null, table?: { __typename?: 'table', id: any, name: string, sorted_diner_ids?: Array<any | null> | null } | null } }> } | null };

export type WeddingFragment = { __typename?: 'wedding', id: any, name: string, datetime: any };

export type CreateGuestMutationVariables = Exact<{
  objects: Array<GuestInsertInput> | GuestInsertInput;
}>;


export type CreateGuestMutation = { __typename?: 'Mutation', insertIntoguestCollection?: { __typename?: 'guestInsertResponse', records: Array<{ __typename?: 'guest', id: any, name: string, email?: string | null, tags: string, birthday?: any | null, created_at: any, table_position?: number | null, wedding?: { __typename?: 'wedding', id: any, name: string } | null, table?: { __typename?: 'table', id: any, name: string, sorted_diner_ids?: Array<any | null> | null } | null }> } | null };

export type CreateTableMutationVariables = Exact<{
  objects: Array<TableInsertInput> | TableInsertInput;
}>;


export type CreateTableMutation = { __typename?: 'Mutation', insertIntotableCollection?: { __typename?: 'tableInsertResponse', records: Array<{ __typename?: 'table', id: any, name: string, sorted_diner_ids?: Array<any | null> | null, guestCollection?: { __typename?: 'guestConnection', edges: Array<{ __typename?: 'guestEdge', cursor: string, node: { __typename?: 'guest', id: any, name: string, email?: string | null, tags: string, birthday?: any | null, created_at: any, table_position?: number | null, wedding?: { __typename?: 'wedding', id: any, name: string } | null, table?: { __typename?: 'table', id: any, name: string, sorted_diner_ids?: Array<any | null> | null } | null } }> } | null }> } | null };

export type CreateWeddingMutationVariables = Exact<{
  objects: Array<WeddingInsertInput> | WeddingInsertInput;
}>;


export type CreateWeddingMutation = { __typename?: 'Mutation', insertIntoweddingCollection?: { __typename?: 'weddingInsertResponse', records: Array<{ __typename?: 'wedding', id: any, name: string, datetime: any }> } | null };

export type DeleteGuestMutationVariables = Exact<{
  guestId: Scalars['UUID']['input'];
}>;


export type DeleteGuestMutation = { __typename?: 'Mutation', deleteFromguestCollection: { __typename?: 'guestDeleteResponse', affectedCount: number } };

export type UpdateGuestMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  guest: GuestUpdateInput;
}>;


export type UpdateGuestMutation = { __typename?: 'Mutation', updateguestCollection: { __typename?: 'guestUpdateResponse', records: Array<{ __typename?: 'guest', id: any, name: string, email?: string | null, tags: string, birthday?: any | null, created_at: any, table_position?: number | null, wedding?: { __typename?: 'wedding', id: any, name: string } | null, table?: { __typename?: 'table', id: any, name: string, sorted_diner_ids?: Array<any | null> | null } | null }> } };

export type UpdateTableMutationVariables = Exact<{
  id: Scalars['UUID']['input'];
  table: TableUpdateInput;
}>;


export type UpdateTableMutation = { __typename?: 'Mutation', updatetableCollection: { __typename?: 'tableUpdateResponse', records: Array<{ __typename?: 'table', id: any, name: string, sorted_diner_ids?: Array<any | null> | null, guestCollection?: { __typename?: 'guestConnection', edges: Array<{ __typename?: 'guestEdge', cursor: string, node: { __typename?: 'guest', id: any, name: string, email?: string | null, tags: string, birthday?: any | null, created_at: any, table_position?: number | null, wedding?: { __typename?: 'wedding', id: any, name: string } | null, table?: { __typename?: 'table', id: any, name: string, sorted_diner_ids?: Array<any | null> | null } | null } }> } | null }> } };

export type GuestsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type GuestsQuery = { __typename?: 'Query', guestCollection?: { __typename?: 'guestConnection', edges: Array<{ __typename?: 'guestEdge', cursor: string, node: { __typename?: 'guest', id: any, name: string, email?: string | null, tags: string, birthday?: any | null, created_at: any, table_position?: number | null, wedding?: { __typename?: 'wedding', id: any, name: string } | null, table?: { __typename?: 'table', id: any, name: string, sorted_diner_ids?: Array<any | null> | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type TablesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type TablesQuery = { __typename?: 'Query', tableCollection?: { __typename?: 'tableConnection', edges: Array<{ __typename?: 'tableEdge', cursor: string, node: { __typename?: 'table', id: any, name: string, sorted_diner_ids?: Array<any | null> | null, guestCollection?: { __typename?: 'guestConnection', edges: Array<{ __typename?: 'guestEdge', cursor: string, node: { __typename?: 'guest', id: any, name: string, email?: string | null, tags: string, birthday?: any | null, created_at: any, table_position?: number | null, wedding?: { __typename?: 'wedding', id: any, name: string } | null, table?: { __typename?: 'table', id: any, name: string, sorted_diner_ids?: Array<any | null> | null } | null } }> } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type WeddingsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Cursor']['input']>;
}>;


export type WeddingsQuery = { __typename?: 'Query', weddingCollection?: { __typename?: 'weddingConnection', edges: Array<{ __typename?: 'weddingEdge', cursor: string, node: { __typename?: 'wedding', id: any, name: string, datetime: any } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export const GuestFragmentDoc = gql`
    fragment Guest on guest {
  id
  name
  email
  tags
  birthday
  created_at
  wedding {
    id
    name
  }
  table {
    id
    name
    sorted_diner_ids
  }
  table_position
}
    `;
export const TableFragmentDoc = gql`
    fragment Table on table {
  id
  name
  sorted_diner_ids
  guestCollection(first: 100) {
    edges {
      cursor
      node {
        id
        name
        email
        tags
        birthday
        created_at
        wedding {
          id
          name
        }
        table {
          id
          name
          sorted_diner_ids
        }
        table_position
      }
    }
  }
}
    `;
export const WeddingFragmentDoc = gql`
    fragment Wedding on wedding {
  id
  name
  datetime
}
    `;
export const CreateGuestDocument = gql`
    mutation createGuest($objects: [guestInsertInput!]!) {
  insertIntoguestCollection(objects: $objects) {
    records {
      ...Guest
    }
  }
}
    ${GuestFragmentDoc}`;
export type CreateGuestMutationFn = Apollo.MutationFunction<CreateGuestMutation, CreateGuestMutationVariables>;

/**
 * __useCreateGuestMutation__
 *
 * To run a mutation, you first call `useCreateGuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGuestMutation, { data, loading, error }] = useCreateGuestMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useCreateGuestMutation(baseOptions?: Apollo.MutationHookOptions<CreateGuestMutation, CreateGuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGuestMutation, CreateGuestMutationVariables>(CreateGuestDocument, options);
      }
export type CreateGuestMutationHookResult = ReturnType<typeof useCreateGuestMutation>;
export type CreateGuestMutationResult = Apollo.MutationResult<CreateGuestMutation>;
export type CreateGuestMutationOptions = Apollo.BaseMutationOptions<CreateGuestMutation, CreateGuestMutationVariables>;
export const CreateTableDocument = gql`
    mutation createTable($objects: [tableInsertInput!]!) {
  insertIntotableCollection(objects: $objects) {
    records {
      ...Table
    }
  }
}
    ${TableFragmentDoc}`;
export type CreateTableMutationFn = Apollo.MutationFunction<CreateTableMutation, CreateTableMutationVariables>;

/**
 * __useCreateTableMutation__
 *
 * To run a mutation, you first call `useCreateTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTableMutation, { data, loading, error }] = useCreateTableMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useCreateTableMutation(baseOptions?: Apollo.MutationHookOptions<CreateTableMutation, CreateTableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTableMutation, CreateTableMutationVariables>(CreateTableDocument, options);
      }
export type CreateTableMutationHookResult = ReturnType<typeof useCreateTableMutation>;
export type CreateTableMutationResult = Apollo.MutationResult<CreateTableMutation>;
export type CreateTableMutationOptions = Apollo.BaseMutationOptions<CreateTableMutation, CreateTableMutationVariables>;
export const CreateWeddingDocument = gql`
    mutation createWedding($objects: [weddingInsertInput!]!) {
  insertIntoweddingCollection(objects: $objects) {
    records {
      ...Wedding
    }
  }
}
    ${WeddingFragmentDoc}`;
export type CreateWeddingMutationFn = Apollo.MutationFunction<CreateWeddingMutation, CreateWeddingMutationVariables>;

/**
 * __useCreateWeddingMutation__
 *
 * To run a mutation, you first call `useCreateWeddingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWeddingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWeddingMutation, { data, loading, error }] = useCreateWeddingMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useCreateWeddingMutation(baseOptions?: Apollo.MutationHookOptions<CreateWeddingMutation, CreateWeddingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWeddingMutation, CreateWeddingMutationVariables>(CreateWeddingDocument, options);
      }
export type CreateWeddingMutationHookResult = ReturnType<typeof useCreateWeddingMutation>;
export type CreateWeddingMutationResult = Apollo.MutationResult<CreateWeddingMutation>;
export type CreateWeddingMutationOptions = Apollo.BaseMutationOptions<CreateWeddingMutation, CreateWeddingMutationVariables>;
export const DeleteGuestDocument = gql`
    mutation deleteGuest($guestId: UUID!) {
  deleteFromguestCollection(filter: {id: {eq: $guestId}}, atMost: 1) {
    affectedCount
  }
}
    `;
export type DeleteGuestMutationFn = Apollo.MutationFunction<DeleteGuestMutation, DeleteGuestMutationVariables>;

/**
 * __useDeleteGuestMutation__
 *
 * To run a mutation, you first call `useDeleteGuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGuestMutation, { data, loading, error }] = useDeleteGuestMutation({
 *   variables: {
 *      guestId: // value for 'guestId'
 *   },
 * });
 */
export function useDeleteGuestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGuestMutation, DeleteGuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGuestMutation, DeleteGuestMutationVariables>(DeleteGuestDocument, options);
      }
export type DeleteGuestMutationHookResult = ReturnType<typeof useDeleteGuestMutation>;
export type DeleteGuestMutationResult = Apollo.MutationResult<DeleteGuestMutation>;
export type DeleteGuestMutationOptions = Apollo.BaseMutationOptions<DeleteGuestMutation, DeleteGuestMutationVariables>;
export const UpdateGuestDocument = gql`
    mutation updateGuest($id: UUID!, $guest: guestUpdateInput!) {
  updateguestCollection(filter: {id: {eq: $id}}, set: $guest) {
    records {
      ...Guest
    }
  }
}
    ${GuestFragmentDoc}`;
export type UpdateGuestMutationFn = Apollo.MutationFunction<UpdateGuestMutation, UpdateGuestMutationVariables>;

/**
 * __useUpdateGuestMutation__
 *
 * To run a mutation, you first call `useUpdateGuestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGuestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGuestMutation, { data, loading, error }] = useUpdateGuestMutation({
 *   variables: {
 *      id: // value for 'id'
 *      guest: // value for 'guest'
 *   },
 * });
 */
export function useUpdateGuestMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGuestMutation, UpdateGuestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGuestMutation, UpdateGuestMutationVariables>(UpdateGuestDocument, options);
      }
export type UpdateGuestMutationHookResult = ReturnType<typeof useUpdateGuestMutation>;
export type UpdateGuestMutationResult = Apollo.MutationResult<UpdateGuestMutation>;
export type UpdateGuestMutationOptions = Apollo.BaseMutationOptions<UpdateGuestMutation, UpdateGuestMutationVariables>;
export const UpdateTableDocument = gql`
    mutation updateTable($id: UUID!, $table: tableUpdateInput!) {
  updatetableCollection(filter: {id: {eq: $id}}, set: $table) {
    records {
      ...Table
    }
  }
}
    ${TableFragmentDoc}`;
export type UpdateTableMutationFn = Apollo.MutationFunction<UpdateTableMutation, UpdateTableMutationVariables>;

/**
 * __useUpdateTableMutation__
 *
 * To run a mutation, you first call `useUpdateTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTableMutation, { data, loading, error }] = useUpdateTableMutation({
 *   variables: {
 *      id: // value for 'id'
 *      table: // value for 'table'
 *   },
 * });
 */
export function useUpdateTableMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTableMutation, UpdateTableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTableMutation, UpdateTableMutationVariables>(UpdateTableDocument, options);
      }
export type UpdateTableMutationHookResult = ReturnType<typeof useUpdateTableMutation>;
export type UpdateTableMutationResult = Apollo.MutationResult<UpdateTableMutation>;
export type UpdateTableMutationOptions = Apollo.BaseMutationOptions<UpdateTableMutation, UpdateTableMutationVariables>;
export const GuestsDocument = gql`
    query guests($first: Int, $after: Cursor) {
  guestCollection(first: $first, after: $after) {
    edges {
      node {
        ...Guest
      }
      cursor
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
    ${GuestFragmentDoc}`;

/**
 * __useGuestsQuery__
 *
 * To run a query within a React component, call `useGuestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGuestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGuestsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGuestsQuery(baseOptions?: Apollo.QueryHookOptions<GuestsQuery, GuestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GuestsQuery, GuestsQueryVariables>(GuestsDocument, options);
      }
export function useGuestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GuestsQuery, GuestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GuestsQuery, GuestsQueryVariables>(GuestsDocument, options);
        }
export type GuestsQueryHookResult = ReturnType<typeof useGuestsQuery>;
export type GuestsLazyQueryHookResult = ReturnType<typeof useGuestsLazyQuery>;
export type GuestsQueryResult = Apollo.QueryResult<GuestsQuery, GuestsQueryVariables>;
export const TablesDocument = gql`
    query tables($first: Int, $after: Cursor) {
  tableCollection(first: $first, after: $after) {
    edges {
      node {
        ...Table
      }
      cursor
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
    ${TableFragmentDoc}`;

/**
 * __useTablesQuery__
 *
 * To run a query within a React component, call `useTablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTablesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useTablesQuery(baseOptions?: Apollo.QueryHookOptions<TablesQuery, TablesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TablesQuery, TablesQueryVariables>(TablesDocument, options);
      }
export function useTablesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TablesQuery, TablesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TablesQuery, TablesQueryVariables>(TablesDocument, options);
        }
export type TablesQueryHookResult = ReturnType<typeof useTablesQuery>;
export type TablesLazyQueryHookResult = ReturnType<typeof useTablesLazyQuery>;
export type TablesQueryResult = Apollo.QueryResult<TablesQuery, TablesQueryVariables>;
export const WeddingsDocument = gql`
    query weddings($first: Int, $after: Cursor) {
  weddingCollection(first: $first, after: $after) {
    edges {
      node {
        ...Wedding
      }
      cursor
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
    ${WeddingFragmentDoc}`;

/**
 * __useWeddingsQuery__
 *
 * To run a query within a React component, call `useWeddingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWeddingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWeddingsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useWeddingsQuery(baseOptions?: Apollo.QueryHookOptions<WeddingsQuery, WeddingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WeddingsQuery, WeddingsQueryVariables>(WeddingsDocument, options);
      }
export function useWeddingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WeddingsQuery, WeddingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WeddingsQuery, WeddingsQueryVariables>(WeddingsDocument, options);
        }
export type WeddingsQueryHookResult = ReturnType<typeof useWeddingsQuery>;
export type WeddingsLazyQueryHookResult = ReturnType<typeof useWeddingsLazyQuery>;
export type WeddingsQueryResult = Apollo.QueryResult<WeddingsQuery, WeddingsQueryVariables>;