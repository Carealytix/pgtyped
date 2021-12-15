/** Types generated for queries found in "src/books/books.sql" */
import { PreparedQuery } from '@pgtyped/query';

export type category = 'novel' | 'science-fiction' | 'thriller';

export type categoryArray = (category)[];

export type numberArray = (number)[];

export type stringArray = (string)[];

/** 'FindBookById' parameters type */
export interface IFindBookByIdParams {
  id: number | null | void;
}

/** 'FindBookById' return type */
export interface IFindBookByIdResult {
  author_id: number | null;
  categories: categoryArray | null;
  id: number;
  name: string | null;
  rank: number | null;
}

/** 'FindBookById' query type */
export interface IFindBookByIdQuery {
  params: IFindBookByIdParams;
  result: IFindBookByIdResult;
}

const findBookByIdIR: any = {"name":"FindBookById","params":[{"name":"id","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":57,"b":58,"line":2,"col":32}]}}],"usedParamSet":{"id":true},"statement":{"body":"SELECT * FROM books WHERE id = :id","loc":{"a":25,"b":58,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM books WHERE id = :id
 * ```
 */
export const findBookById = new PreparedQuery<IFindBookByIdParams,IFindBookByIdResult>(findBookByIdIR);


/** 'InsertBooks' parameters type */
export interface IInsertBooksParams {
  books: readonly ({
    rank: number,
    name: string,
    authorId: number,
    categories: categoryArray | null | void
  })[];
}

/** 'InsertBooks' return type */
export interface IInsertBooksResult {
  book_id: number;
}

/** 'InsertBooks' query type */
export interface IInsertBooksQuery {
  params: IInsertBooksParams;
  result: IInsertBooksResult;
}

const insertBooksIR: any = {"name":"InsertBooks","params":[{"name":"books","codeRefs":{"defined":{"a":94,"b":98,"line":6,"col":9},"used":[{"a":211,"b":215,"line":9,"col":8}]},"transform":{"type":"pick_array_spread","keys":[{"name":"rank","required":true},{"name":"name","required":true},{"name":"authorId","required":true},{"name":"categories","required":false}]},"required":false}],"usedParamSet":{"books":true},"statement":{"body":"INSERT INTO books (rank, name, author_id, categories)\nVALUES :books RETURNING id as book_id","loc":{"a":149,"b":239,"line":8,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO books (rank, name, author_id, categories)
 * VALUES :books RETURNING id as book_id
 * ```
 */
export const insertBooks = new PreparedQuery<IInsertBooksParams,IInsertBooksResult>(insertBooksIR);


/** 'UpdateBooksCustom' parameters type */
export interface IUpdateBooksCustomParams {
  id: number;
  rank: number | null | void;
}

/** 'UpdateBooksCustom' return type */
export type IUpdateBooksCustomResult = void;

/** 'UpdateBooksCustom' query type */
export interface IUpdateBooksCustomQuery {
  params: IUpdateBooksCustomParams;
  result: IUpdateBooksCustomResult;
}

const updateBooksCustomIR: any = {"name":"UpdateBooksCustom","params":[{"name":"rank","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":325,"b":328,"line":17,"col":20},{"a":371,"b":374,"line":18,"col":23}]}},{"name":"id","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":437,"b":439,"line":22,"col":12}]}}],"usedParamSet":{"rank":true,"id":true},"statement":{"body":"UPDATE books\nSET\n    rank = (\n        CASE WHEN (:rank::int IS NOT NULL)\n                 THEN :rank\n             ELSE rank\n            END\n        )\nWHERE id = :id!","loc":{"a":275,"b":439,"line":14,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * UPDATE books
 * SET
 *     rank = (
 *         CASE WHEN (:rank::int IS NOT NULL)
 *                  THEN :rank
 *              ELSE rank
 *             END
 *         )
 * WHERE id = :id!
 * ```
 */
export const updateBooksCustom = new PreparedQuery<IUpdateBooksCustomParams,IUpdateBooksCustomResult>(updateBooksCustomIR);


/** 'UpdateBooks' parameters type */
export interface IUpdateBooksParams {
  id: number;
  name: string | null | void;
  rank: number | null | void;
}

/** 'UpdateBooks' return type */
export type IUpdateBooksResult = void;

/** 'UpdateBooks' query type */
export interface IUpdateBooksQuery {
  params: IUpdateBooksParams;
  result: IUpdateBooksResult;
}

const updateBooksIR: any = {"name":"UpdateBooks","params":[{"name":"name","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":520,"b":523,"line":30,"col":12}]}},{"name":"rank","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":538,"b":541,"line":31,"col":12}]}},{"name":"id","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":555,"b":557,"line":32,"col":12}]}}],"usedParamSet":{"name":true,"rank":true,"id":true},"statement":{"body":"UPDATE books\n                     \nSET\n    name = :name,\n    rank = :rank\nWHERE id = :id!","loc":{"a":469,"b":557,"line":27,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * UPDATE books
 *                      
 * SET
 *     name = :name,
 *     rank = :rank
 * WHERE id = :id!
 * ```
 */
export const updateBooks = new PreparedQuery<IUpdateBooksParams,IUpdateBooksResult>(updateBooksIR);


/** 'GetBooksByAuthorName' parameters type */
export interface IGetBooksByAuthorNameParams {
  authorName: string;
}

/** 'GetBooksByAuthorName' return type */
export interface IGetBooksByAuthorNameResult {
  author_id: number | null;
  categories: categoryArray | null;
  id: number;
  name: string | null;
  rank: number | null;
}

/** 'GetBooksByAuthorName' query type */
export interface IGetBooksByAuthorNameQuery {
  params: IGetBooksByAuthorNameParams;
  result: IGetBooksByAuthorNameResult;
}

const getBooksByAuthorNameIR: any = {"name":"GetBooksByAuthorName","params":[{"name":"authorName","required":true,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":705,"b":715,"line":37,"col":44}]}}],"usedParamSet":{"authorName":true},"statement":{"body":"SELECT b.* FROM books b\nINNER JOIN authors a ON a.id = b.author_id\nWHERE a.first_name || ' ' || a.last_name = :authorName!","loc":{"a":594,"b":715,"line":35,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT b.* FROM books b
 * INNER JOIN authors a ON a.id = b.author_id
 * WHERE a.first_name || ' ' || a.last_name = :authorName!
 * ```
 */
export const getBooksByAuthorName = new PreparedQuery<IGetBooksByAuthorNameParams,IGetBooksByAuthorNameResult>(getBooksByAuthorNameIR);


/** 'AggregateEmailsAndTest' parameters type */
export interface IAggregateEmailsAndTestParams {
  testAges: numberArray | null | void;
}

/** 'AggregateEmailsAndTest' return type */
export interface IAggregateEmailsAndTestResult {
  agetest: boolean | null;
  emails: stringArray | null;
}

/** 'AggregateEmailsAndTest' query type */
export interface IAggregateEmailsAndTestQuery {
  params: IAggregateEmailsAndTestParams;
  result: IAggregateEmailsAndTestResult;
}

const aggregateEmailsAndTestIR: any = {"name":"AggregateEmailsAndTest","params":[{"name":"testAges","required":false,"transform":{"type":"scalar"},"codeRefs":{"used":[{"a":807,"b":814,"line":40,"col":53}]}}],"usedParamSet":{"testAges":true},"statement":{"body":"SELECT array_agg(email) as emails, array_agg(age) = :testAges as ageTest FROM users","loc":{"a":754,"b":836,"line":40,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT array_agg(email) as emails, array_agg(age) = :testAges as ageTest FROM users
 * ```
 */
export const aggregateEmailsAndTest = new PreparedQuery<IAggregateEmailsAndTestParams,IAggregateEmailsAndTestResult>(aggregateEmailsAndTestIR);


