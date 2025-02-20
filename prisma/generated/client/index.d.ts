
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model Classroom
 * 
 */
export type Classroom = $Result.DefaultSelection<Prisma.$ClassroomPayload>
/**
 * Model StudentApplication
 * 
 */
export type StudentApplication = $Result.DefaultSelection<Prisma.$StudentApplicationPayload>
/**
 * Model Admission
 * 
 */
export type Admission = $Result.DefaultSelection<Prisma.$AdmissionPayload>
/**
 * Model Parent
 * 
 */
export type Parent = $Result.DefaultSelection<Prisma.$ParentPayload>
/**
 * Model Guardian
 * 
 */
export type Guardian = $Result.DefaultSelection<Prisma.$GuardianPayload>
/**
 * Model MedicalRecord
 * 
 */
export type MedicalRecord = $Result.DefaultSelection<Prisma.$MedicalRecordPayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const GradeLevel: {
  GRADE_1: 'GRADE_1',
  GRADE_2: 'GRADE_2',
  GRADE_3: 'GRADE_3',
  GRADE_4: 'GRADE_4',
  GRADE_5: 'GRADE_5',
  GRADE_6: 'GRADE_6'
};

export type GradeLevel = (typeof GradeLevel)[keyof typeof GradeLevel]


export const AdmissionStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type AdmissionStatus = (typeof AdmissionStatus)[keyof typeof AdmissionStatus]


export const AdmissionType: {
  NEW_STUDENT: 'NEW_STUDENT',
  TRANSFEREE: 'TRANSFEREE'
};

export type AdmissionType = (typeof AdmissionType)[keyof typeof AdmissionType]


export const CivilStatus: {
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  WIDOWED: 'WIDOWED',
  SEPARATED: 'SEPARATED',
  DIVORCED: 'DIVORCED'
};

export type CivilStatus = (typeof CivilStatus)[keyof typeof CivilStatus]


export const NameSuffix: {
  JR: 'JR',
  SR: 'SR',
  I: 'I',
  II: 'II',
  III: 'III',
  IV: 'IV',
  V: 'V'
};

export type NameSuffix = (typeof NameSuffix)[keyof typeof NameSuffix]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type GradeLevel = $Enums.GradeLevel

export const GradeLevel: typeof $Enums.GradeLevel

export type AdmissionStatus = $Enums.AdmissionStatus

export const AdmissionStatus: typeof $Enums.AdmissionStatus

export type AdmissionType = $Enums.AdmissionType

export const AdmissionType: typeof $Enums.AdmissionType

export type CivilStatus = $Enums.CivilStatus

export const CivilStatus: typeof $Enums.CivilStatus

export type NameSuffix = $Enums.NameSuffix

export const NameSuffix: typeof $Enums.NameSuffix

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classroom`: Exposes CRUD operations for the **Classroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classrooms
    * const classrooms = await prisma.classroom.findMany()
    * ```
    */
  get classroom(): Prisma.ClassroomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentApplication`: Exposes CRUD operations for the **StudentApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentApplications
    * const studentApplications = await prisma.studentApplication.findMany()
    * ```
    */
  get studentApplication(): Prisma.StudentApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admission`: Exposes CRUD operations for the **Admission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admissions
    * const admissions = await prisma.admission.findMany()
    * ```
    */
  get admission(): Prisma.AdmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parent`: Exposes CRUD operations for the **Parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parents
    * const parents = await prisma.parent.findMany()
    * ```
    */
  get parent(): Prisma.ParentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guardian`: Exposes CRUD operations for the **Guardian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guardians
    * const guardians = await prisma.guardian.findMany()
    * ```
    */
  get guardian(): Prisma.GuardianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalRecord`: Exposes CRUD operations for the **MedicalRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalRecords
    * const medicalRecords = await prisma.medicalRecord.findMany()
    * ```
    */
  get medicalRecord(): Prisma.MedicalRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.0
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Teacher: 'Teacher',
    Student: 'Student',
    Subject: 'Subject',
    Classroom: 'Classroom',
    StudentApplication: 'StudentApplication',
    Admission: 'Admission',
    Parent: 'Parent',
    Guardian: 'Guardian',
    MedicalRecord: 'MedicalRecord',
    School: 'School'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admin" | "teacher" | "student" | "subject" | "classroom" | "studentApplication" | "admission" | "parent" | "guardian" | "medicalRecord" | "school"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      Classroom: {
        payload: Prisma.$ClassroomPayload<ExtArgs>
        fields: Prisma.ClassroomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassroomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassroomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findFirst: {
            args: Prisma.ClassroomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassroomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          findMany: {
            args: Prisma.ClassroomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>[]
          }
          create: {
            args: Prisma.ClassroomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          createMany: {
            args: Prisma.ClassroomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClassroomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          update: {
            args: Prisma.ClassroomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          deleteMany: {
            args: Prisma.ClassroomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassroomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClassroomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassroomPayload>
          }
          aggregate: {
            args: Prisma.ClassroomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassroom>
          }
          groupBy: {
            args: Prisma.ClassroomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassroomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassroomCountArgs<ExtArgs>
            result: $Utils.Optional<ClassroomCountAggregateOutputType> | number
          }
        }
      }
      StudentApplication: {
        payload: Prisma.$StudentApplicationPayload<ExtArgs>
        fields: Prisma.StudentApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          findFirst: {
            args: Prisma.StudentApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          findMany: {
            args: Prisma.StudentApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>[]
          }
          create: {
            args: Prisma.StudentApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          createMany: {
            args: Prisma.StudentApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          update: {
            args: Prisma.StudentApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          deleteMany: {
            args: Prisma.StudentApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          aggregate: {
            args: Prisma.StudentApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentApplication>
          }
          groupBy: {
            args: Prisma.StudentApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<StudentApplicationCountAggregateOutputType> | number
          }
        }
      }
      Admission: {
        payload: Prisma.$AdmissionPayload<ExtArgs>
        fields: Prisma.AdmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          findFirst: {
            args: Prisma.AdmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          findMany: {
            args: Prisma.AdmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>[]
          }
          create: {
            args: Prisma.AdmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          createMany: {
            args: Prisma.AdmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          update: {
            args: Prisma.AdmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          deleteMany: {
            args: Prisma.AdmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdmissionPayload>
          }
          aggregate: {
            args: Prisma.AdmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmission>
          }
          groupBy: {
            args: Prisma.AdmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdmissionCountArgs<ExtArgs>
            result: $Utils.Optional<AdmissionCountAggregateOutputType> | number
          }
        }
      }
      Parent: {
        payload: Prisma.$ParentPayload<ExtArgs>
        fields: Prisma.ParentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findFirst: {
            args: Prisma.ParentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          findMany: {
            args: Prisma.ParentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>[]
          }
          create: {
            args: Prisma.ParentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          createMany: {
            args: Prisma.ParentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ParentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          update: {
            args: Prisma.ParentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          deleteMany: {
            args: Prisma.ParentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParentPayload>
          }
          aggregate: {
            args: Prisma.ParentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParent>
          }
          groupBy: {
            args: Prisma.ParentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParentCountArgs<ExtArgs>
            result: $Utils.Optional<ParentCountAggregateOutputType> | number
          }
        }
      }
      Guardian: {
        payload: Prisma.$GuardianPayload<ExtArgs>
        fields: Prisma.GuardianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuardianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuardianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>
          }
          findFirst: {
            args: Prisma.GuardianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuardianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>
          }
          findMany: {
            args: Prisma.GuardianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>[]
          }
          create: {
            args: Prisma.GuardianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>
          }
          createMany: {
            args: Prisma.GuardianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GuardianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>
          }
          update: {
            args: Prisma.GuardianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>
          }
          deleteMany: {
            args: Prisma.GuardianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuardianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GuardianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuardianPayload>
          }
          aggregate: {
            args: Prisma.GuardianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuardian>
          }
          groupBy: {
            args: Prisma.GuardianGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuardianGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuardianCountArgs<ExtArgs>
            result: $Utils.Optional<GuardianCountAggregateOutputType> | number
          }
        }
      }
      MedicalRecord: {
        payload: Prisma.$MedicalRecordPayload<ExtArgs>
        fields: Prisma.MedicalRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findFirst: {
            args: Prisma.MedicalRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findMany: {
            args: Prisma.MedicalRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          create: {
            args: Prisma.MedicalRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          createMany: {
            args: Prisma.MedicalRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MedicalRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          update: {
            args: Prisma.MedicalRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          deleteMany: {
            args: Prisma.MedicalRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicalRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          aggregate: {
            args: Prisma.MedicalRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalRecord>
          }
          groupBy: {
            args: Prisma.MedicalRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalRecordCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordCountAggregateOutputType> | number
          }
        }
      }
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    teacher?: TeacherOmit
    student?: StudentOmit
    subject?: SubjectOmit
    classroom?: ClassroomOmit
    studentApplication?: StudentApplicationOmit
    admission?: AdmissionOmit
    parent?: ParentOmit
    guardian?: GuardianOmit
    medicalRecord?: MedicalRecordOmit
    school?: SchoolOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    subjects: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | TeacherCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }


  /**
   * Count Type ClassroomCountOutputType
   */

  export type ClassroomCountOutputType = {
    students: number
  }

  export type ClassroomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ClassroomCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassroomCountOutputType
     */
    select?: ClassroomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassroomCountOutputType without action
   */
  export type ClassroomCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type ParentCountOutputType
   */

  export type ParentCountOutputType = {
    children_as_father: number
    children_as_mother: number
  }

  export type ParentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children_as_father?: boolean | ParentCountOutputTypeCountChildren_as_fatherArgs
    children_as_mother?: boolean | ParentCountOutputTypeCountChildren_as_motherArgs
  }

  // Custom InputTypes
  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParentCountOutputType
     */
    select?: ParentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountChildren_as_fatherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentApplicationWhereInput
  }

  /**
   * ParentCountOutputType without action
   */
  export type ParentCountOutputTypeCountChildren_as_motherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentApplicationWhereInput
  }


  /**
   * Count Type GuardianCountOutputType
   */

  export type GuardianCountOutputType = {
    students: number
  }

  export type GuardianCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | GuardianCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * GuardianCountOutputType without action
   */
  export type GuardianCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuardianCountOutputType
     */
    select?: GuardianCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuardianCountOutputType without action
   */
  export type GuardianCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentApplicationWhereInput
  }


  /**
   * Count Type MedicalRecordCountOutputType
   */

  export type MedicalRecordCountOutputType = {
    student_applications: number
  }

  export type MedicalRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student_applications?: boolean | MedicalRecordCountOutputTypeCountStudent_applicationsArgs
  }

  // Custom InputTypes
  /**
   * MedicalRecordCountOutputType without action
   */
  export type MedicalRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecordCountOutputType
     */
    select?: MedicalRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicalRecordCountOutputType without action
   */
  export type MedicalRecordCountOutputTypeCountStudent_applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentApplicationWhereInput
  }


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    admissions: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admissions?: boolean | SchoolCountOutputTypeCountAdmissionsArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountAdmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.UserRole | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.UserRole | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    role?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    role?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    role?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    role: $Enums.UserRole
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "role", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      role: $Enums.UserRole
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    middle_name: string | null
    last_name: string | null
    username: string | null
    password: string | null
    phone_number: string | null
    address: string | null
    role: $Enums.UserRole | null
    date_of_birth: Date | null
    classroom_id: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    middle_name: string | null
    last_name: string | null
    username: string | null
    password: string | null
    phone_number: string | null
    address: string | null
    role: $Enums.UserRole | null
    date_of_birth: Date | null
    classroom_id: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    email: number
    name: number
    middle_name: number
    last_name: number
    username: number
    password: number
    phone_number: number
    address: number
    role: number
    date_of_birth: number
    classroom_id: number
    _all: number
  }


  export type TeacherMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    middle_name?: true
    last_name?: true
    username?: true
    password?: true
    phone_number?: true
    address?: true
    role?: true
    date_of_birth?: true
    classroom_id?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    middle_name?: true
    last_name?: true
    username?: true
    password?: true
    phone_number?: true
    address?: true
    role?: true
    date_of_birth?: true
    classroom_id?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    middle_name?: true
    last_name?: true
    username?: true
    password?: true
    phone_number?: true
    address?: true
    role?: true
    date_of_birth?: true
    classroom_id?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: string
    email: string
    name: string
    middle_name: string | null
    last_name: string
    username: string
    password: string
    phone_number: string
    address: string
    role: $Enums.UserRole
    date_of_birth: Date
    classroom_id: string | null
    _count: TeacherCountAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    middle_name?: boolean
    last_name?: boolean
    username?: boolean
    password?: boolean
    phone_number?: boolean
    address?: boolean
    role?: boolean
    date_of_birth?: boolean
    classroom_id?: boolean
    subjects?: boolean | Teacher$subjectsArgs<ExtArgs>
    classroom?: boolean | Teacher$classroomArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>



  export type TeacherSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    middle_name?: boolean
    last_name?: boolean
    username?: boolean
    password?: boolean
    phone_number?: boolean
    address?: boolean
    role?: boolean
    date_of_birth?: boolean
    classroom_id?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "middle_name" | "last_name" | "username" | "password" | "phone_number" | "address" | "role" | "date_of_birth" | "classroom_id", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | Teacher$subjectsArgs<ExtArgs>
    classroom?: boolean | Teacher$classroomArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      subjects: Prisma.$SubjectPayload<ExtArgs>[]
      classroom: Prisma.$ClassroomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      middle_name: string | null
      last_name: string
      username: string
      password: string
      phone_number: string
      address: string
      role: $Enums.UserRole
      date_of_birth: Date
      classroom_id: string | null
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends Teacher$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    classroom<T extends Teacher$classroomArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$classroomArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */ 
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'String'>
    readonly email: FieldRef<"Teacher", 'String'>
    readonly name: FieldRef<"Teacher", 'String'>
    readonly middle_name: FieldRef<"Teacher", 'String'>
    readonly last_name: FieldRef<"Teacher", 'String'>
    readonly username: FieldRef<"Teacher", 'String'>
    readonly password: FieldRef<"Teacher", 'String'>
    readonly phone_number: FieldRef<"Teacher", 'String'>
    readonly address: FieldRef<"Teacher", 'String'>
    readonly role: FieldRef<"Teacher", 'UserRole'>
    readonly date_of_birth: FieldRef<"Teacher", 'DateTime'>
    readonly classroom_id: FieldRef<"Teacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.subjects
   */
  export type Teacher$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Teacher.classroom
   */
  export type Teacher$classroomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    where?: ClassroomWhereInput
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    middle_name: string | null
    last_name: string | null
    username: string | null
    password: string | null
    role: $Enums.UserRole | null
    phone_number: string | null
    date_of_birth: Date | null
    classroom_id: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    middle_name: string | null
    last_name: string | null
    username: string | null
    password: string | null
    role: $Enums.UserRole | null
    phone_number: string | null
    date_of_birth: Date | null
    classroom_id: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    email: number
    name: number
    middle_name: number
    last_name: number
    username: number
    password: number
    role: number
    phone_number: number
    date_of_birth: number
    classroom_id: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    middle_name?: true
    last_name?: true
    username?: true
    password?: true
    role?: true
    phone_number?: true
    date_of_birth?: true
    classroom_id?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    middle_name?: true
    last_name?: true
    username?: true
    password?: true
    role?: true
    phone_number?: true
    date_of_birth?: true
    classroom_id?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    middle_name?: true
    last_name?: true
    username?: true
    password?: true
    role?: true
    phone_number?: true
    date_of_birth?: true
    classroom_id?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    email: string
    name: string
    middle_name: string | null
    last_name: string
    username: string
    password: string
    role: $Enums.UserRole
    phone_number: string
    date_of_birth: Date
    classroom_id: string
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    middle_name?: boolean
    last_name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    phone_number?: boolean
    date_of_birth?: boolean
    classroom_id?: boolean
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    middle_name?: boolean
    last_name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    phone_number?: boolean
    date_of_birth?: boolean
    classroom_id?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "middle_name" | "last_name" | "username" | "password" | "role" | "phone_number" | "date_of_birth" | "classroom_id", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classroom?: boolean | ClassroomDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      classroom: Prisma.$ClassroomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      middle_name: string | null
      last_name: string
      username: string
      password: string
      role: $Enums.UserRole
      phone_number: string
      date_of_birth: Date
      classroom_id: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classroom<T extends ClassroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassroomDefaultArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly middle_name: FieldRef<"Student", 'String'>
    readonly last_name: FieldRef<"Student", 'String'>
    readonly username: FieldRef<"Student", 'String'>
    readonly password: FieldRef<"Student", 'String'>
    readonly role: FieldRef<"Student", 'UserRole'>
    readonly phone_number: FieldRef<"Student", 'String'>
    readonly date_of_birth: FieldRef<"Student", 'DateTime'>
    readonly classroom_id: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    teacher_id: string | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    teacher_id: string | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    teacher_id: number
    _all: number
  }


  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    teacher_id?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    teacher_id?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    teacher_id?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    name: string
    teacher_id: string | null
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacher_id?: boolean
    teacher?: boolean | Subject$teacherArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>



  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    teacher_id?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "teacher_id", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Subject$teacherArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      teacher_id: string | null
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends Subject$teacherArgs<ExtArgs> = {}>(args?: Subset<T, Subject$teacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subject model
   */ 
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'String'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly teacher_id: FieldRef<"Subject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.teacher
   */
  export type Subject$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model Classroom
   */

  export type AggregateClassroom = {
    _count: ClassroomCountAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  export type ClassroomMinAggregateOutputType = {
    id: string | null
    name: string | null
    grade_level: $Enums.GradeLevel | null
    teacher_id: string | null
  }

  export type ClassroomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    grade_level: $Enums.GradeLevel | null
    teacher_id: string | null
  }

  export type ClassroomCountAggregateOutputType = {
    id: number
    name: number
    grade_level: number
    teacher_id: number
    _all: number
  }


  export type ClassroomMinAggregateInputType = {
    id?: true
    name?: true
    grade_level?: true
    teacher_id?: true
  }

  export type ClassroomMaxAggregateInputType = {
    id?: true
    name?: true
    grade_level?: true
    teacher_id?: true
  }

  export type ClassroomCountAggregateInputType = {
    id?: true
    name?: true
    grade_level?: true
    teacher_id?: true
    _all?: true
  }

  export type ClassroomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classroom to aggregate.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classrooms
    **/
    _count?: true | ClassroomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassroomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassroomMaxAggregateInputType
  }

  export type GetClassroomAggregateType<T extends ClassroomAggregateArgs> = {
        [P in keyof T & keyof AggregateClassroom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassroom[P]>
      : GetScalarType<T[P], AggregateClassroom[P]>
  }




  export type ClassroomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassroomWhereInput
    orderBy?: ClassroomOrderByWithAggregationInput | ClassroomOrderByWithAggregationInput[]
    by: ClassroomScalarFieldEnum[] | ClassroomScalarFieldEnum
    having?: ClassroomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassroomCountAggregateInputType | true
    _min?: ClassroomMinAggregateInputType
    _max?: ClassroomMaxAggregateInputType
  }

  export type ClassroomGroupByOutputType = {
    id: string
    name: string
    grade_level: $Enums.GradeLevel
    teacher_id: string | null
    _count: ClassroomCountAggregateOutputType | null
    _min: ClassroomMinAggregateOutputType | null
    _max: ClassroomMaxAggregateOutputType | null
  }

  type GetClassroomGroupByPayload<T extends ClassroomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassroomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassroomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
            : GetScalarType<T[P], ClassroomGroupByOutputType[P]>
        }
      >
    >


  export type ClassroomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    grade_level?: boolean
    teacher_id?: boolean
    teacher?: boolean | Classroom$teacherArgs<ExtArgs>
    students?: boolean | Classroom$studentsArgs<ExtArgs>
    _count?: boolean | ClassroomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classroom"]>



  export type ClassroomSelectScalar = {
    id?: boolean
    name?: boolean
    grade_level?: boolean
    teacher_id?: boolean
  }

  export type ClassroomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "grade_level" | "teacher_id", ExtArgs["result"]["classroom"]>
  export type ClassroomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Classroom$teacherArgs<ExtArgs>
    students?: boolean | Classroom$studentsArgs<ExtArgs>
    _count?: boolean | ClassroomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClassroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classroom"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs> | null
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      grade_level: $Enums.GradeLevel
      teacher_id: string | null
    }, ExtArgs["result"]["classroom"]>
    composites: {}
  }

  type ClassroomGetPayload<S extends boolean | null | undefined | ClassroomDefaultArgs> = $Result.GetResult<Prisma.$ClassroomPayload, S>

  type ClassroomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassroomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassroomCountAggregateInputType | true
    }

  export interface ClassroomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classroom'], meta: { name: 'Classroom' } }
    /**
     * Find zero or one Classroom that matches the filter.
     * @param {ClassroomFindUniqueArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassroomFindUniqueArgs>(args: SelectSubset<T, ClassroomFindUniqueArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Classroom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassroomFindUniqueOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassroomFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassroomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Classroom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassroomFindFirstArgs>(args?: SelectSubset<T, ClassroomFindFirstArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Classroom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindFirstOrThrowArgs} args - Arguments to find a Classroom
     * @example
     * // Get one Classroom
     * const classroom = await prisma.classroom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassroomFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassroomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Classrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classrooms
     * const classrooms = await prisma.classroom.findMany()
     * 
     * // Get first 10 Classrooms
     * const classrooms = await prisma.classroom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classroomWithIdOnly = await prisma.classroom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassroomFindManyArgs>(args?: SelectSubset<T, ClassroomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Classroom.
     * @param {ClassroomCreateArgs} args - Arguments to create a Classroom.
     * @example
     * // Create one Classroom
     * const Classroom = await prisma.classroom.create({
     *   data: {
     *     // ... data to create a Classroom
     *   }
     * })
     * 
     */
    create<T extends ClassroomCreateArgs>(args: SelectSubset<T, ClassroomCreateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Classrooms.
     * @param {ClassroomCreateManyArgs} args - Arguments to create many Classrooms.
     * @example
     * // Create many Classrooms
     * const classroom = await prisma.classroom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassroomCreateManyArgs>(args?: SelectSubset<T, ClassroomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Classroom.
     * @param {ClassroomDeleteArgs} args - Arguments to delete one Classroom.
     * @example
     * // Delete one Classroom
     * const Classroom = await prisma.classroom.delete({
     *   where: {
     *     // ... filter to delete one Classroom
     *   }
     * })
     * 
     */
    delete<T extends ClassroomDeleteArgs>(args: SelectSubset<T, ClassroomDeleteArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Classroom.
     * @param {ClassroomUpdateArgs} args - Arguments to update one Classroom.
     * @example
     * // Update one Classroom
     * const classroom = await prisma.classroom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassroomUpdateArgs>(args: SelectSubset<T, ClassroomUpdateArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Classrooms.
     * @param {ClassroomDeleteManyArgs} args - Arguments to filter Classrooms to delete.
     * @example
     * // Delete a few Classrooms
     * const { count } = await prisma.classroom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassroomDeleteManyArgs>(args?: SelectSubset<T, ClassroomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classrooms
     * const classroom = await prisma.classroom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassroomUpdateManyArgs>(args: SelectSubset<T, ClassroomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Classroom.
     * @param {ClassroomUpsertArgs} args - Arguments to update or create a Classroom.
     * @example
     * // Update or create a Classroom
     * const classroom = await prisma.classroom.upsert({
     *   create: {
     *     // ... data to create a Classroom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classroom we want to update
     *   }
     * })
     */
    upsert<T extends ClassroomUpsertArgs>(args: SelectSubset<T, ClassroomUpsertArgs<ExtArgs>>): Prisma__ClassroomClient<$Result.GetResult<Prisma.$ClassroomPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Classrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomCountArgs} args - Arguments to filter Classrooms to count.
     * @example
     * // Count the number of Classrooms
     * const count = await prisma.classroom.count({
     *   where: {
     *     // ... the filter for the Classrooms we want to count
     *   }
     * })
    **/
    count<T extends ClassroomCountArgs>(
      args?: Subset<T, ClassroomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassroomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassroomAggregateArgs>(args: Subset<T, ClassroomAggregateArgs>): Prisma.PrismaPromise<GetClassroomAggregateType<T>>

    /**
     * Group by Classroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassroomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassroomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassroomGroupByArgs['orderBy'] }
        : { orderBy?: ClassroomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassroomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassroomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classroom model
   */
  readonly fields: ClassroomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classroom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassroomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends Classroom$teacherArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$teacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    students<T extends Classroom$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Classroom$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Classroom model
   */ 
  interface ClassroomFieldRefs {
    readonly id: FieldRef<"Classroom", 'String'>
    readonly name: FieldRef<"Classroom", 'String'>
    readonly grade_level: FieldRef<"Classroom", 'GradeLevel'>
    readonly teacher_id: FieldRef<"Classroom", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Classroom findUnique
   */
  export type ClassroomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findUniqueOrThrow
   */
  export type ClassroomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom findFirst
   */
  export type ClassroomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findFirstOrThrow
   */
  export type ClassroomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classroom to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classrooms.
     */
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom findMany
   */
  export type ClassroomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter, which Classrooms to fetch.
     */
    where?: ClassroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classrooms to fetch.
     */
    orderBy?: ClassroomOrderByWithRelationInput | ClassroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classrooms.
     */
    cursor?: ClassroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classrooms.
     */
    skip?: number
    distinct?: ClassroomScalarFieldEnum | ClassroomScalarFieldEnum[]
  }

  /**
   * Classroom create
   */
  export type ClassroomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The data needed to create a Classroom.
     */
    data: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
  }

  /**
   * Classroom createMany
   */
  export type ClassroomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classrooms.
     */
    data: ClassroomCreateManyInput | ClassroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Classroom update
   */
  export type ClassroomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The data needed to update a Classroom.
     */
    data: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
    /**
     * Choose, which Classroom to update.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom updateMany
   */
  export type ClassroomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classrooms.
     */
    data: XOR<ClassroomUpdateManyMutationInput, ClassroomUncheckedUpdateManyInput>
    /**
     * Filter which Classrooms to update
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to update.
     */
    limit?: number
  }

  /**
   * Classroom upsert
   */
  export type ClassroomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * The filter to search for the Classroom to update in case it exists.
     */
    where: ClassroomWhereUniqueInput
    /**
     * In case the Classroom found by the `where` argument doesn't exist, create a new Classroom with this data.
     */
    create: XOR<ClassroomCreateInput, ClassroomUncheckedCreateInput>
    /**
     * In case the Classroom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassroomUpdateInput, ClassroomUncheckedUpdateInput>
  }

  /**
   * Classroom delete
   */
  export type ClassroomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
    /**
     * Filter which Classroom to delete.
     */
    where: ClassroomWhereUniqueInput
  }

  /**
   * Classroom deleteMany
   */
  export type ClassroomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classrooms to delete
     */
    where?: ClassroomWhereInput
    /**
     * Limit how many Classrooms to delete.
     */
    limit?: number
  }

  /**
   * Classroom.teacher
   */
  export type Classroom$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * Classroom.students
   */
  export type Classroom$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Classroom without action
   */
  export type ClassroomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classroom
     */
    select?: ClassroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classroom
     */
    omit?: ClassroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassroomInclude<ExtArgs> | null
  }


  /**
   * Model StudentApplication
   */

  export type AggregateStudentApplication = {
    _count: StudentApplicationCountAggregateOutputType | null
    _min: StudentApplicationMinAggregateOutputType | null
    _max: StudentApplicationMaxAggregateOutputType | null
  }

  export type StudentApplicationMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    suffix: $Enums.NameSuffix | null
    gender: string | null
    civil_status: $Enums.CivilStatus | null
    date_of_birth: Date | null
    birth_place: string | null
    nationality: string | null
    email: string | null
    phone_number: string | null
    tel_number: string | null
    permanent_address: string | null
    current_address: string | null
    postal_code: string | null
    father_id: string | null
    mother_id: string | null
    guardian_id: string | null
    medical_record_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StudentApplicationMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    suffix: $Enums.NameSuffix | null
    gender: string | null
    civil_status: $Enums.CivilStatus | null
    date_of_birth: Date | null
    birth_place: string | null
    nationality: string | null
    email: string | null
    phone_number: string | null
    tel_number: string | null
    permanent_address: string | null
    current_address: string | null
    postal_code: string | null
    father_id: string | null
    mother_id: string | null
    guardian_id: string | null
    medical_record_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StudentApplicationCountAggregateOutputType = {
    id: number
    first_name: number
    middle_name: number
    last_name: number
    suffix: number
    gender: number
    civil_status: number
    date_of_birth: number
    birth_place: number
    nationality: number
    email: number
    phone_number: number
    tel_number: number
    permanent_address: number
    current_address: number
    postal_code: number
    father_id: number
    mother_id: number
    guardian_id: number
    medical_record_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StudentApplicationMinAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    suffix?: true
    gender?: true
    civil_status?: true
    date_of_birth?: true
    birth_place?: true
    nationality?: true
    email?: true
    phone_number?: true
    tel_number?: true
    permanent_address?: true
    current_address?: true
    postal_code?: true
    father_id?: true
    mother_id?: true
    guardian_id?: true
    medical_record_id?: true
    created_at?: true
    updated_at?: true
  }

  export type StudentApplicationMaxAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    suffix?: true
    gender?: true
    civil_status?: true
    date_of_birth?: true
    birth_place?: true
    nationality?: true
    email?: true
    phone_number?: true
    tel_number?: true
    permanent_address?: true
    current_address?: true
    postal_code?: true
    father_id?: true
    mother_id?: true
    guardian_id?: true
    medical_record_id?: true
    created_at?: true
    updated_at?: true
  }

  export type StudentApplicationCountAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    suffix?: true
    gender?: true
    civil_status?: true
    date_of_birth?: true
    birth_place?: true
    nationality?: true
    email?: true
    phone_number?: true
    tel_number?: true
    permanent_address?: true
    current_address?: true
    postal_code?: true
    father_id?: true
    mother_id?: true
    guardian_id?: true
    medical_record_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StudentApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentApplication to aggregate.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentApplications
    **/
    _count?: true | StudentApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentApplicationMaxAggregateInputType
  }

  export type GetStudentApplicationAggregateType<T extends StudentApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentApplication[P]>
      : GetScalarType<T[P], AggregateStudentApplication[P]>
  }




  export type StudentApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentApplicationWhereInput
    orderBy?: StudentApplicationOrderByWithAggregationInput | StudentApplicationOrderByWithAggregationInput[]
    by: StudentApplicationScalarFieldEnum[] | StudentApplicationScalarFieldEnum
    having?: StudentApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentApplicationCountAggregateInputType | true
    _min?: StudentApplicationMinAggregateInputType
    _max?: StudentApplicationMaxAggregateInputType
  }

  export type StudentApplicationGroupByOutputType = {
    id: string
    first_name: string
    middle_name: string | null
    last_name: string
    suffix: $Enums.NameSuffix | null
    gender: string
    civil_status: $Enums.CivilStatus | null
    date_of_birth: Date
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    father_id: string | null
    mother_id: string | null
    guardian_id: string | null
    medical_record_id: string | null
    created_at: Date
    updated_at: Date
    _count: StudentApplicationCountAggregateOutputType | null
    _min: StudentApplicationMinAggregateOutputType | null
    _max: StudentApplicationMaxAggregateOutputType | null
  }

  type GetStudentApplicationGroupByPayload<T extends StudentApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], StudentApplicationGroupByOutputType[P]>
        }
      >
    >


  export type StudentApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    suffix?: boolean
    gender?: boolean
    civil_status?: boolean
    date_of_birth?: boolean
    birth_place?: boolean
    nationality?: boolean
    email?: boolean
    phone_number?: boolean
    tel_number?: boolean
    permanent_address?: boolean
    current_address?: boolean
    postal_code?: boolean
    father_id?: boolean
    mother_id?: boolean
    guardian_id?: boolean
    medical_record_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    father?: boolean | StudentApplication$fatherArgs<ExtArgs>
    mother?: boolean | StudentApplication$motherArgs<ExtArgs>
    guardian?: boolean | StudentApplication$guardianArgs<ExtArgs>
    medical_record?: boolean | StudentApplication$medical_recordArgs<ExtArgs>
    admission?: boolean | StudentApplication$admissionArgs<ExtArgs>
  }, ExtArgs["result"]["studentApplication"]>



  export type StudentApplicationSelectScalar = {
    id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    suffix?: boolean
    gender?: boolean
    civil_status?: boolean
    date_of_birth?: boolean
    birth_place?: boolean
    nationality?: boolean
    email?: boolean
    phone_number?: boolean
    tel_number?: boolean
    permanent_address?: boolean
    current_address?: boolean
    postal_code?: boolean
    father_id?: boolean
    mother_id?: boolean
    guardian_id?: boolean
    medical_record_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type StudentApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "middle_name" | "last_name" | "suffix" | "gender" | "civil_status" | "date_of_birth" | "birth_place" | "nationality" | "email" | "phone_number" | "tel_number" | "permanent_address" | "current_address" | "postal_code" | "father_id" | "mother_id" | "guardian_id" | "medical_record_id" | "created_at" | "updated_at", ExtArgs["result"]["studentApplication"]>
  export type StudentApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    father?: boolean | StudentApplication$fatherArgs<ExtArgs>
    mother?: boolean | StudentApplication$motherArgs<ExtArgs>
    guardian?: boolean | StudentApplication$guardianArgs<ExtArgs>
    medical_record?: boolean | StudentApplication$medical_recordArgs<ExtArgs>
    admission?: boolean | StudentApplication$admissionArgs<ExtArgs>
  }

  export type $StudentApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentApplication"
    objects: {
      father: Prisma.$ParentPayload<ExtArgs> | null
      mother: Prisma.$ParentPayload<ExtArgs> | null
      guardian: Prisma.$GuardianPayload<ExtArgs> | null
      medical_record: Prisma.$MedicalRecordPayload<ExtArgs> | null
      admission: Prisma.$AdmissionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      middle_name: string | null
      last_name: string
      suffix: $Enums.NameSuffix | null
      gender: string
      civil_status: $Enums.CivilStatus | null
      date_of_birth: Date
      birth_place: string
      nationality: string
      email: string
      phone_number: string
      tel_number: string | null
      permanent_address: string
      current_address: string
      postal_code: string
      father_id: string | null
      mother_id: string | null
      guardian_id: string | null
      medical_record_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["studentApplication"]>
    composites: {}
  }

  type StudentApplicationGetPayload<S extends boolean | null | undefined | StudentApplicationDefaultArgs> = $Result.GetResult<Prisma.$StudentApplicationPayload, S>

  type StudentApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentApplicationCountAggregateInputType | true
    }

  export interface StudentApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentApplication'], meta: { name: 'StudentApplication' } }
    /**
     * Find zero or one StudentApplication that matches the filter.
     * @param {StudentApplicationFindUniqueArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentApplicationFindUniqueArgs>(args: SelectSubset<T, StudentApplicationFindUniqueArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one StudentApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentApplicationFindUniqueOrThrowArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first StudentApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationFindFirstArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentApplicationFindFirstArgs>(args?: SelectSubset<T, StudentApplicationFindFirstArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first StudentApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationFindFirstOrThrowArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more StudentApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentApplications
     * const studentApplications = await prisma.studentApplication.findMany()
     * 
     * // Get first 10 StudentApplications
     * const studentApplications = await prisma.studentApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentApplicationWithIdOnly = await prisma.studentApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentApplicationFindManyArgs>(args?: SelectSubset<T, StudentApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a StudentApplication.
     * @param {StudentApplicationCreateArgs} args - Arguments to create a StudentApplication.
     * @example
     * // Create one StudentApplication
     * const StudentApplication = await prisma.studentApplication.create({
     *   data: {
     *     // ... data to create a StudentApplication
     *   }
     * })
     * 
     */
    create<T extends StudentApplicationCreateArgs>(args: SelectSubset<T, StudentApplicationCreateArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many StudentApplications.
     * @param {StudentApplicationCreateManyArgs} args - Arguments to create many StudentApplications.
     * @example
     * // Create many StudentApplications
     * const studentApplication = await prisma.studentApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentApplicationCreateManyArgs>(args?: SelectSubset<T, StudentApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentApplication.
     * @param {StudentApplicationDeleteArgs} args - Arguments to delete one StudentApplication.
     * @example
     * // Delete one StudentApplication
     * const StudentApplication = await prisma.studentApplication.delete({
     *   where: {
     *     // ... filter to delete one StudentApplication
     *   }
     * })
     * 
     */
    delete<T extends StudentApplicationDeleteArgs>(args: SelectSubset<T, StudentApplicationDeleteArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one StudentApplication.
     * @param {StudentApplicationUpdateArgs} args - Arguments to update one StudentApplication.
     * @example
     * // Update one StudentApplication
     * const studentApplication = await prisma.studentApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentApplicationUpdateArgs>(args: SelectSubset<T, StudentApplicationUpdateArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more StudentApplications.
     * @param {StudentApplicationDeleteManyArgs} args - Arguments to filter StudentApplications to delete.
     * @example
     * // Delete a few StudentApplications
     * const { count } = await prisma.studentApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentApplicationDeleteManyArgs>(args?: SelectSubset<T, StudentApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentApplications
     * const studentApplication = await prisma.studentApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentApplicationUpdateManyArgs>(args: SelectSubset<T, StudentApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentApplication.
     * @param {StudentApplicationUpsertArgs} args - Arguments to update or create a StudentApplication.
     * @example
     * // Update or create a StudentApplication
     * const studentApplication = await prisma.studentApplication.upsert({
     *   create: {
     *     // ... data to create a StudentApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentApplication we want to update
     *   }
     * })
     */
    upsert<T extends StudentApplicationUpsertArgs>(args: SelectSubset<T, StudentApplicationUpsertArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of StudentApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationCountArgs} args - Arguments to filter StudentApplications to count.
     * @example
     * // Count the number of StudentApplications
     * const count = await prisma.studentApplication.count({
     *   where: {
     *     // ... the filter for the StudentApplications we want to count
     *   }
     * })
    **/
    count<T extends StudentApplicationCountArgs>(
      args?: Subset<T, StudentApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentApplicationAggregateArgs>(args: Subset<T, StudentApplicationAggregateArgs>): Prisma.PrismaPromise<GetStudentApplicationAggregateType<T>>

    /**
     * Group by StudentApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentApplicationGroupByArgs['orderBy'] }
        : { orderBy?: StudentApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentApplication model
   */
  readonly fields: StudentApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    father<T extends StudentApplication$fatherArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$fatherArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    mother<T extends StudentApplication$motherArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$motherArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    guardian<T extends StudentApplication$guardianArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$guardianArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    medical_record<T extends StudentApplication$medical_recordArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$medical_recordArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    admission<T extends StudentApplication$admissionArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$admissionArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentApplication model
   */ 
  interface StudentApplicationFieldRefs {
    readonly id: FieldRef<"StudentApplication", 'String'>
    readonly first_name: FieldRef<"StudentApplication", 'String'>
    readonly middle_name: FieldRef<"StudentApplication", 'String'>
    readonly last_name: FieldRef<"StudentApplication", 'String'>
    readonly suffix: FieldRef<"StudentApplication", 'NameSuffix'>
    readonly gender: FieldRef<"StudentApplication", 'String'>
    readonly civil_status: FieldRef<"StudentApplication", 'CivilStatus'>
    readonly date_of_birth: FieldRef<"StudentApplication", 'DateTime'>
    readonly birth_place: FieldRef<"StudentApplication", 'String'>
    readonly nationality: FieldRef<"StudentApplication", 'String'>
    readonly email: FieldRef<"StudentApplication", 'String'>
    readonly phone_number: FieldRef<"StudentApplication", 'String'>
    readonly tel_number: FieldRef<"StudentApplication", 'String'>
    readonly permanent_address: FieldRef<"StudentApplication", 'String'>
    readonly current_address: FieldRef<"StudentApplication", 'String'>
    readonly postal_code: FieldRef<"StudentApplication", 'String'>
    readonly father_id: FieldRef<"StudentApplication", 'String'>
    readonly mother_id: FieldRef<"StudentApplication", 'String'>
    readonly guardian_id: FieldRef<"StudentApplication", 'String'>
    readonly medical_record_id: FieldRef<"StudentApplication", 'String'>
    readonly created_at: FieldRef<"StudentApplication", 'DateTime'>
    readonly updated_at: FieldRef<"StudentApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentApplication findUnique
   */
  export type StudentApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication findUniqueOrThrow
   */
  export type StudentApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication findFirst
   */
  export type StudentApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentApplications.
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentApplications.
     */
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * StudentApplication findFirstOrThrow
   */
  export type StudentApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentApplications.
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentApplications.
     */
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * StudentApplication findMany
   */
  export type StudentApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplications to fetch.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentApplications.
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * StudentApplication create
   */
  export type StudentApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentApplication.
     */
    data: XOR<StudentApplicationCreateInput, StudentApplicationUncheckedCreateInput>
  }

  /**
   * StudentApplication createMany
   */
  export type StudentApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentApplications.
     */
    data: StudentApplicationCreateManyInput | StudentApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentApplication update
   */
  export type StudentApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentApplication.
     */
    data: XOR<StudentApplicationUpdateInput, StudentApplicationUncheckedUpdateInput>
    /**
     * Choose, which StudentApplication to update.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication updateMany
   */
  export type StudentApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentApplications.
     */
    data: XOR<StudentApplicationUpdateManyMutationInput, StudentApplicationUncheckedUpdateManyInput>
    /**
     * Filter which StudentApplications to update
     */
    where?: StudentApplicationWhereInput
    /**
     * Limit how many StudentApplications to update.
     */
    limit?: number
  }

  /**
   * StudentApplication upsert
   */
  export type StudentApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentApplication to update in case it exists.
     */
    where: StudentApplicationWhereUniqueInput
    /**
     * In case the StudentApplication found by the `where` argument doesn't exist, create a new StudentApplication with this data.
     */
    create: XOR<StudentApplicationCreateInput, StudentApplicationUncheckedCreateInput>
    /**
     * In case the StudentApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentApplicationUpdateInput, StudentApplicationUncheckedUpdateInput>
  }

  /**
   * StudentApplication delete
   */
  export type StudentApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter which StudentApplication to delete.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication deleteMany
   */
  export type StudentApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentApplications to delete
     */
    where?: StudentApplicationWhereInput
    /**
     * Limit how many StudentApplications to delete.
     */
    limit?: number
  }

  /**
   * StudentApplication.father
   */
  export type StudentApplication$fatherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    where?: ParentWhereInput
  }

  /**
   * StudentApplication.mother
   */
  export type StudentApplication$motherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    where?: ParentWhereInput
  }

  /**
   * StudentApplication.guardian
   */
  export type StudentApplication$guardianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    where?: GuardianWhereInput
  }

  /**
   * StudentApplication.medical_record
   */
  export type StudentApplication$medical_recordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
  }

  /**
   * StudentApplication.admission
   */
  export type StudentApplication$admissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    where?: AdmissionWhereInput
  }

  /**
   * StudentApplication without action
   */
  export type StudentApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Admission
   */

  export type AggregateAdmission = {
    _count: AdmissionCountAggregateOutputType | null
    _min: AdmissionMinAggregateOutputType | null
    _max: AdmissionMaxAggregateOutputType | null
  }

  export type AdmissionMinAggregateOutputType = {
    id: string | null
    student_id: string | null
    admission_type: $Enums.AdmissionType | null
    intended_grade_level: string | null
    previous_school_id: string | null
    status: $Enums.AdmissionStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdmissionMaxAggregateOutputType = {
    id: string | null
    student_id: string | null
    admission_type: $Enums.AdmissionType | null
    intended_grade_level: string | null
    previous_school_id: string | null
    status: $Enums.AdmissionStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdmissionCountAggregateOutputType = {
    id: number
    student_id: number
    admission_type: number
    intended_grade_level: number
    previous_school_id: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AdmissionMinAggregateInputType = {
    id?: true
    student_id?: true
    admission_type?: true
    intended_grade_level?: true
    previous_school_id?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type AdmissionMaxAggregateInputType = {
    id?: true
    student_id?: true
    admission_type?: true
    intended_grade_level?: true
    previous_school_id?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type AdmissionCountAggregateInputType = {
    id?: true
    student_id?: true
    admission_type?: true
    intended_grade_level?: true
    previous_school_id?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AdmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admission to aggregate.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admissions
    **/
    _count?: true | AdmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdmissionMaxAggregateInputType
  }

  export type GetAdmissionAggregateType<T extends AdmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmission[P]>
      : GetScalarType<T[P], AggregateAdmission[P]>
  }




  export type AdmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdmissionWhereInput
    orderBy?: AdmissionOrderByWithAggregationInput | AdmissionOrderByWithAggregationInput[]
    by: AdmissionScalarFieldEnum[] | AdmissionScalarFieldEnum
    having?: AdmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdmissionCountAggregateInputType | true
    _min?: AdmissionMinAggregateInputType
    _max?: AdmissionMaxAggregateInputType
  }

  export type AdmissionGroupByOutputType = {
    id: string
    student_id: string
    admission_type: $Enums.AdmissionType
    intended_grade_level: string
    previous_school_id: string | null
    status: $Enums.AdmissionStatus
    created_at: Date
    updated_at: Date
    _count: AdmissionCountAggregateOutputType | null
    _min: AdmissionMinAggregateOutputType | null
    _max: AdmissionMaxAggregateOutputType | null
  }

  type GetAdmissionGroupByPayload<T extends AdmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdmissionGroupByOutputType[P]>
            : GetScalarType<T[P], AdmissionGroupByOutputType[P]>
        }
      >
    >


  export type AdmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    admission_type?: boolean
    intended_grade_level?: boolean
    previous_school_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    student?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    previous_school?: boolean | Admission$previous_schoolArgs<ExtArgs>
  }, ExtArgs["result"]["admission"]>



  export type AdmissionSelectScalar = {
    id?: boolean
    student_id?: boolean
    admission_type?: boolean
    intended_grade_level?: boolean
    previous_school_id?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AdmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "admission_type" | "intended_grade_level" | "previous_school_id" | "status" | "created_at" | "updated_at", ExtArgs["result"]["admission"]>
  export type AdmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    previous_school?: boolean | Admission$previous_schoolArgs<ExtArgs>
  }

  export type $AdmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admission"
    objects: {
      student: Prisma.$StudentApplicationPayload<ExtArgs>
      previous_school: Prisma.$SchoolPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      student_id: string
      admission_type: $Enums.AdmissionType
      intended_grade_level: string
      previous_school_id: string | null
      status: $Enums.AdmissionStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["admission"]>
    composites: {}
  }

  type AdmissionGetPayload<S extends boolean | null | undefined | AdmissionDefaultArgs> = $Result.GetResult<Prisma.$AdmissionPayload, S>

  type AdmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdmissionCountAggregateInputType | true
    }

  export interface AdmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admission'], meta: { name: 'Admission' } }
    /**
     * Find zero or one Admission that matches the filter.
     * @param {AdmissionFindUniqueArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdmissionFindUniqueArgs>(args: SelectSubset<T, AdmissionFindUniqueArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Admission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdmissionFindUniqueOrThrowArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, AdmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Admission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFindFirstArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdmissionFindFirstArgs>(args?: SelectSubset<T, AdmissionFindFirstArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Admission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFindFirstOrThrowArgs} args - Arguments to find a Admission
     * @example
     * // Get one Admission
     * const admission = await prisma.admission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, AdmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Admissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admissions
     * const admissions = await prisma.admission.findMany()
     * 
     * // Get first 10 Admissions
     * const admissions = await prisma.admission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const admissionWithIdOnly = await prisma.admission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdmissionFindManyArgs>(args?: SelectSubset<T, AdmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Admission.
     * @param {AdmissionCreateArgs} args - Arguments to create a Admission.
     * @example
     * // Create one Admission
     * const Admission = await prisma.admission.create({
     *   data: {
     *     // ... data to create a Admission
     *   }
     * })
     * 
     */
    create<T extends AdmissionCreateArgs>(args: SelectSubset<T, AdmissionCreateArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Admissions.
     * @param {AdmissionCreateManyArgs} args - Arguments to create many Admissions.
     * @example
     * // Create many Admissions
     * const admission = await prisma.admission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdmissionCreateManyArgs>(args?: SelectSubset<T, AdmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admission.
     * @param {AdmissionDeleteArgs} args - Arguments to delete one Admission.
     * @example
     * // Delete one Admission
     * const Admission = await prisma.admission.delete({
     *   where: {
     *     // ... filter to delete one Admission
     *   }
     * })
     * 
     */
    delete<T extends AdmissionDeleteArgs>(args: SelectSubset<T, AdmissionDeleteArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Admission.
     * @param {AdmissionUpdateArgs} args - Arguments to update one Admission.
     * @example
     * // Update one Admission
     * const admission = await prisma.admission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdmissionUpdateArgs>(args: SelectSubset<T, AdmissionUpdateArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Admissions.
     * @param {AdmissionDeleteManyArgs} args - Arguments to filter Admissions to delete.
     * @example
     * // Delete a few Admissions
     * const { count } = await prisma.admission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdmissionDeleteManyArgs>(args?: SelectSubset<T, AdmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admissions
     * const admission = await prisma.admission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdmissionUpdateManyArgs>(args: SelectSubset<T, AdmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admission.
     * @param {AdmissionUpsertArgs} args - Arguments to update or create a Admission.
     * @example
     * // Update or create a Admission
     * const admission = await prisma.admission.upsert({
     *   create: {
     *     // ... data to create a Admission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admission we want to update
     *   }
     * })
     */
    upsert<T extends AdmissionUpsertArgs>(args: SelectSubset<T, AdmissionUpsertArgs<ExtArgs>>): Prisma__AdmissionClient<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Admissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionCountArgs} args - Arguments to filter Admissions to count.
     * @example
     * // Count the number of Admissions
     * const count = await prisma.admission.count({
     *   where: {
     *     // ... the filter for the Admissions we want to count
     *   }
     * })
    **/
    count<T extends AdmissionCountArgs>(
      args?: Subset<T, AdmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdmissionAggregateArgs>(args: Subset<T, AdmissionAggregateArgs>): Prisma.PrismaPromise<GetAdmissionAggregateType<T>>

    /**
     * Group by Admission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdmissionGroupByArgs['orderBy'] }
        : { orderBy?: AdmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admission model
   */
  readonly fields: AdmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplicationDefaultArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    previous_school<T extends Admission$previous_schoolArgs<ExtArgs> = {}>(args?: Subset<T, Admission$previous_schoolArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admission model
   */ 
  interface AdmissionFieldRefs {
    readonly id: FieldRef<"Admission", 'String'>
    readonly student_id: FieldRef<"Admission", 'String'>
    readonly admission_type: FieldRef<"Admission", 'AdmissionType'>
    readonly intended_grade_level: FieldRef<"Admission", 'String'>
    readonly previous_school_id: FieldRef<"Admission", 'String'>
    readonly status: FieldRef<"Admission", 'AdmissionStatus'>
    readonly created_at: FieldRef<"Admission", 'DateTime'>
    readonly updated_at: FieldRef<"Admission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admission findUnique
   */
  export type AdmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission findUniqueOrThrow
   */
  export type AdmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission findFirst
   */
  export type AdmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admissions.
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admissions.
     */
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Admission findFirstOrThrow
   */
  export type AdmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admission to fetch.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admissions.
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admissions.
     */
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Admission findMany
   */
  export type AdmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter, which Admissions to fetch.
     */
    where?: AdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admissions to fetch.
     */
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admissions.
     */
    cursor?: AdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admissions.
     */
    skip?: number
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * Admission create
   */
  export type AdmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Admission.
     */
    data: XOR<AdmissionCreateInput, AdmissionUncheckedCreateInput>
  }

  /**
   * Admission createMany
   */
  export type AdmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admissions.
     */
    data: AdmissionCreateManyInput | AdmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admission update
   */
  export type AdmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Admission.
     */
    data: XOR<AdmissionUpdateInput, AdmissionUncheckedUpdateInput>
    /**
     * Choose, which Admission to update.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission updateMany
   */
  export type AdmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admissions.
     */
    data: XOR<AdmissionUpdateManyMutationInput, AdmissionUncheckedUpdateManyInput>
    /**
     * Filter which Admissions to update
     */
    where?: AdmissionWhereInput
    /**
     * Limit how many Admissions to update.
     */
    limit?: number
  }

  /**
   * Admission upsert
   */
  export type AdmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Admission to update in case it exists.
     */
    where: AdmissionWhereUniqueInput
    /**
     * In case the Admission found by the `where` argument doesn't exist, create a new Admission with this data.
     */
    create: XOR<AdmissionCreateInput, AdmissionUncheckedCreateInput>
    /**
     * In case the Admission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdmissionUpdateInput, AdmissionUncheckedUpdateInput>
  }

  /**
   * Admission delete
   */
  export type AdmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    /**
     * Filter which Admission to delete.
     */
    where: AdmissionWhereUniqueInput
  }

  /**
   * Admission deleteMany
   */
  export type AdmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admissions to delete
     */
    where?: AdmissionWhereInput
    /**
     * Limit how many Admissions to delete.
     */
    limit?: number
  }

  /**
   * Admission.previous_school
   */
  export type Admission$previous_schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput
  }

  /**
   * Admission without action
   */
  export type AdmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
  }


  /**
   * Model Parent
   */

  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null
    _avg: ParentAvgAggregateOutputType | null
    _sum: ParentSumAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  export type ParentAvgAggregateOutputType = {
    annual_income: number | null
  }

  export type ParentSumAggregateOutputType = {
    annual_income: number | null
  }

  export type ParentMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    occupation: string | null
    annual_income: number | null
  }

  export type ParentMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    occupation: string | null
    annual_income: number | null
  }

  export type ParentCountAggregateOutputType = {
    id: number
    first_name: number
    middle_name: number
    last_name: number
    occupation: number
    annual_income: number
    _all: number
  }


  export type ParentAvgAggregateInputType = {
    annual_income?: true
  }

  export type ParentSumAggregateInputType = {
    annual_income?: true
  }

  export type ParentMinAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    occupation?: true
    annual_income?: true
  }

  export type ParentMaxAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    occupation?: true
    annual_income?: true
  }

  export type ParentCountAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    occupation?: true
    annual_income?: true
    _all?: true
  }

  export type ParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parent to aggregate.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parents
    **/
    _count?: true | ParentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParentMaxAggregateInputType
  }

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
        [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>
  }




  export type ParentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParentWhereInput
    orderBy?: ParentOrderByWithAggregationInput | ParentOrderByWithAggregationInput[]
    by: ParentScalarFieldEnum[] | ParentScalarFieldEnum
    having?: ParentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParentCountAggregateInputType | true
    _avg?: ParentAvgAggregateInputType
    _sum?: ParentSumAggregateInputType
    _min?: ParentMinAggregateInputType
    _max?: ParentMaxAggregateInputType
  }

  export type ParentGroupByOutputType = {
    id: string
    first_name: string
    middle_name: string | null
    last_name: string
    occupation: string
    annual_income: number | null
    _count: ParentCountAggregateOutputType | null
    _avg: ParentAvgAggregateOutputType | null
    _sum: ParentSumAggregateOutputType | null
    _min: ParentMinAggregateOutputType | null
    _max: ParentMaxAggregateOutputType | null
  }

  type GetParentGroupByPayload<T extends ParentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParentGroupByOutputType[P]>
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
        }
      >
    >


  export type ParentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    occupation?: boolean
    annual_income?: boolean
    children_as_father?: boolean | Parent$children_as_fatherArgs<ExtArgs>
    children_as_mother?: boolean | Parent$children_as_motherArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent"]>



  export type ParentSelectScalar = {
    id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    occupation?: boolean
    annual_income?: boolean
  }

  export type ParentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "middle_name" | "last_name" | "occupation" | "annual_income", ExtArgs["result"]["parent"]>
  export type ParentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children_as_father?: boolean | Parent$children_as_fatherArgs<ExtArgs>
    children_as_mother?: boolean | Parent$children_as_motherArgs<ExtArgs>
    _count?: boolean | ParentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ParentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parent"
    objects: {
      children_as_father: Prisma.$StudentApplicationPayload<ExtArgs>[]
      children_as_mother: Prisma.$StudentApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      first_name: string
      middle_name: string | null
      last_name: string
      occupation: string
      annual_income: number | null
    }, ExtArgs["result"]["parent"]>
    composites: {}
  }

  type ParentGetPayload<S extends boolean | null | undefined | ParentDefaultArgs> = $Result.GetResult<Prisma.$ParentPayload, S>

  type ParentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParentCountAggregateInputType | true
    }

  export interface ParentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parent'], meta: { name: 'Parent' } }
    /**
     * Find zero or one Parent that matches the filter.
     * @param {ParentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParentFindUniqueArgs>(args: SelectSubset<T, ParentFindUniqueArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Parent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParentFindUniqueOrThrowArgs>(args: SelectSubset<T, ParentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParentFindFirstArgs>(args?: SelectSubset<T, ParentFindFirstArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParentFindFirstOrThrowArgs>(args?: SelectSubset<T, ParentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     * 
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parentWithIdOnly = await prisma.parent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParentFindManyArgs>(args?: SelectSubset<T, ParentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Parent.
     * @param {ParentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     * 
     */
    create<T extends ParentCreateArgs>(args: SelectSubset<T, ParentCreateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Parents.
     * @param {ParentCreateManyArgs} args - Arguments to create many Parents.
     * @example
     * // Create many Parents
     * const parent = await prisma.parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParentCreateManyArgs>(args?: SelectSubset<T, ParentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parent.
     * @param {ParentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     * 
     */
    delete<T extends ParentDeleteArgs>(args: SelectSubset<T, ParentDeleteArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Parent.
     * @param {ParentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParentUpdateArgs>(args: SelectSubset<T, ParentUpdateArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Parents.
     * @param {ParentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParentDeleteManyArgs>(args?: SelectSubset<T, ParentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParentUpdateManyArgs>(args: SelectSubset<T, ParentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parent.
     * @param {ParentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
     */
    upsert<T extends ParentUpsertArgs>(args: SelectSubset<T, ParentUpsertArgs<ExtArgs>>): Prisma__ParentClient<$Result.GetResult<Prisma.$ParentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
    **/
    count<T extends ParentCountArgs>(
      args?: Subset<T, ParentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParentAggregateArgs>(args: Subset<T, ParentAggregateArgs>): Prisma.PrismaPromise<GetParentAggregateType<T>>

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParentGroupByArgs['orderBy'] }
        : { orderBy?: ParentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parent model
   */
  readonly fields: ParentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    children_as_father<T extends Parent$children_as_fatherArgs<ExtArgs> = {}>(args?: Subset<T, Parent$children_as_fatherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    children_as_mother<T extends Parent$children_as_motherArgs<ExtArgs> = {}>(args?: Subset<T, Parent$children_as_motherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parent model
   */ 
  interface ParentFieldRefs {
    readonly id: FieldRef<"Parent", 'String'>
    readonly first_name: FieldRef<"Parent", 'String'>
    readonly middle_name: FieldRef<"Parent", 'String'>
    readonly last_name: FieldRef<"Parent", 'String'>
    readonly occupation: FieldRef<"Parent", 'String'>
    readonly annual_income: FieldRef<"Parent", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Parent findUnique
   */
  export type ParentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findUniqueOrThrow
   */
  export type ParentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent findFirst
   */
  export type ParentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findFirstOrThrow
   */
  export type ParentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parent to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent findMany
   */
  export type ParentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter, which Parents to fetch.
     */
    where?: ParentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parents to fetch.
     */
    orderBy?: ParentOrderByWithRelationInput | ParentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parents.
     */
    cursor?: ParentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parents.
     */
    skip?: number
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[]
  }

  /**
   * Parent create
   */
  export type ParentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to create a Parent.
     */
    data: XOR<ParentCreateInput, ParentUncheckedCreateInput>
  }

  /**
   * Parent createMany
   */
  export type ParentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parents.
     */
    data: ParentCreateManyInput | ParentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent update
   */
  export type ParentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The data needed to update a Parent.
     */
    data: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
    /**
     * Choose, which Parent to update.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent updateMany
   */
  export type ParentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parents.
     */
    data: XOR<ParentUpdateManyMutationInput, ParentUncheckedUpdateManyInput>
    /**
     * Filter which Parents to update
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to update.
     */
    limit?: number
  }

  /**
   * Parent upsert
   */
  export type ParentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * The filter to search for the Parent to update in case it exists.
     */
    where: ParentWhereUniqueInput
    /**
     * In case the Parent found by the `where` argument doesn't exist, create a new Parent with this data.
     */
    create: XOR<ParentCreateInput, ParentUncheckedCreateInput>
    /**
     * In case the Parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParentUpdateInput, ParentUncheckedUpdateInput>
  }

  /**
   * Parent delete
   */
  export type ParentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
    /**
     * Filter which Parent to delete.
     */
    where: ParentWhereUniqueInput
  }

  /**
   * Parent deleteMany
   */
  export type ParentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parents to delete
     */
    where?: ParentWhereInput
    /**
     * Limit how many Parents to delete.
     */
    limit?: number
  }

  /**
   * Parent.children_as_father
   */
  export type Parent$children_as_fatherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    where?: StudentApplicationWhereInput
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    cursor?: StudentApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * Parent.children_as_mother
   */
  export type Parent$children_as_motherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    where?: StudentApplicationWhereInput
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    cursor?: StudentApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * Parent without action
   */
  export type ParentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent
     */
    select?: ParentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent
     */
    omit?: ParentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParentInclude<ExtArgs> | null
  }


  /**
   * Model Guardian
   */

  export type AggregateGuardian = {
    _count: GuardianCountAggregateOutputType | null
    _min: GuardianMinAggregateOutputType | null
    _max: GuardianMaxAggregateOutputType | null
  }

  export type GuardianMinAggregateOutputType = {
    id: string | null
    name: string | null
    relation: string | null
    phone_number: string | null
  }

  export type GuardianMaxAggregateOutputType = {
    id: string | null
    name: string | null
    relation: string | null
    phone_number: string | null
  }

  export type GuardianCountAggregateOutputType = {
    id: number
    name: number
    relation: number
    phone_number: number
    _all: number
  }


  export type GuardianMinAggregateInputType = {
    id?: true
    name?: true
    relation?: true
    phone_number?: true
  }

  export type GuardianMaxAggregateInputType = {
    id?: true
    name?: true
    relation?: true
    phone_number?: true
  }

  export type GuardianCountAggregateInputType = {
    id?: true
    name?: true
    relation?: true
    phone_number?: true
    _all?: true
  }

  export type GuardianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guardian to aggregate.
     */
    where?: GuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guardians to fetch.
     */
    orderBy?: GuardianOrderByWithRelationInput | GuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guardians
    **/
    _count?: true | GuardianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuardianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuardianMaxAggregateInputType
  }

  export type GetGuardianAggregateType<T extends GuardianAggregateArgs> = {
        [P in keyof T & keyof AggregateGuardian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuardian[P]>
      : GetScalarType<T[P], AggregateGuardian[P]>
  }




  export type GuardianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuardianWhereInput
    orderBy?: GuardianOrderByWithAggregationInput | GuardianOrderByWithAggregationInput[]
    by: GuardianScalarFieldEnum[] | GuardianScalarFieldEnum
    having?: GuardianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuardianCountAggregateInputType | true
    _min?: GuardianMinAggregateInputType
    _max?: GuardianMaxAggregateInputType
  }

  export type GuardianGroupByOutputType = {
    id: string
    name: string
    relation: string
    phone_number: string
    _count: GuardianCountAggregateOutputType | null
    _min: GuardianMinAggregateOutputType | null
    _max: GuardianMaxAggregateOutputType | null
  }

  type GetGuardianGroupByPayload<T extends GuardianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuardianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuardianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuardianGroupByOutputType[P]>
            : GetScalarType<T[P], GuardianGroupByOutputType[P]>
        }
      >
    >


  export type GuardianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    relation?: boolean
    phone_number?: boolean
    students?: boolean | Guardian$studentsArgs<ExtArgs>
    _count?: boolean | GuardianCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guardian"]>



  export type GuardianSelectScalar = {
    id?: boolean
    name?: boolean
    relation?: boolean
    phone_number?: boolean
  }

  export type GuardianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "relation" | "phone_number", ExtArgs["result"]["guardian"]>
  export type GuardianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Guardian$studentsArgs<ExtArgs>
    _count?: boolean | GuardianCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GuardianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guardian"
    objects: {
      students: Prisma.$StudentApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      relation: string
      phone_number: string
    }, ExtArgs["result"]["guardian"]>
    composites: {}
  }

  type GuardianGetPayload<S extends boolean | null | undefined | GuardianDefaultArgs> = $Result.GetResult<Prisma.$GuardianPayload, S>

  type GuardianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuardianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuardianCountAggregateInputType | true
    }

  export interface GuardianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guardian'], meta: { name: 'Guardian' } }
    /**
     * Find zero or one Guardian that matches the filter.
     * @param {GuardianFindUniqueArgs} args - Arguments to find a Guardian
     * @example
     * // Get one Guardian
     * const guardian = await prisma.guardian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuardianFindUniqueArgs>(args: SelectSubset<T, GuardianFindUniqueArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Guardian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuardianFindUniqueOrThrowArgs} args - Arguments to find a Guardian
     * @example
     * // Get one Guardian
     * const guardian = await prisma.guardian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuardianFindUniqueOrThrowArgs>(args: SelectSubset<T, GuardianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Guardian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianFindFirstArgs} args - Arguments to find a Guardian
     * @example
     * // Get one Guardian
     * const guardian = await prisma.guardian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuardianFindFirstArgs>(args?: SelectSubset<T, GuardianFindFirstArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Guardian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianFindFirstOrThrowArgs} args - Arguments to find a Guardian
     * @example
     * // Get one Guardian
     * const guardian = await prisma.guardian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuardianFindFirstOrThrowArgs>(args?: SelectSubset<T, GuardianFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Guardians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guardians
     * const guardians = await prisma.guardian.findMany()
     * 
     * // Get first 10 Guardians
     * const guardians = await prisma.guardian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guardianWithIdOnly = await prisma.guardian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuardianFindManyArgs>(args?: SelectSubset<T, GuardianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Guardian.
     * @param {GuardianCreateArgs} args - Arguments to create a Guardian.
     * @example
     * // Create one Guardian
     * const Guardian = await prisma.guardian.create({
     *   data: {
     *     // ... data to create a Guardian
     *   }
     * })
     * 
     */
    create<T extends GuardianCreateArgs>(args: SelectSubset<T, GuardianCreateArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Guardians.
     * @param {GuardianCreateManyArgs} args - Arguments to create many Guardians.
     * @example
     * // Create many Guardians
     * const guardian = await prisma.guardian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuardianCreateManyArgs>(args?: SelectSubset<T, GuardianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Guardian.
     * @param {GuardianDeleteArgs} args - Arguments to delete one Guardian.
     * @example
     * // Delete one Guardian
     * const Guardian = await prisma.guardian.delete({
     *   where: {
     *     // ... filter to delete one Guardian
     *   }
     * })
     * 
     */
    delete<T extends GuardianDeleteArgs>(args: SelectSubset<T, GuardianDeleteArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Guardian.
     * @param {GuardianUpdateArgs} args - Arguments to update one Guardian.
     * @example
     * // Update one Guardian
     * const guardian = await prisma.guardian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuardianUpdateArgs>(args: SelectSubset<T, GuardianUpdateArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Guardians.
     * @param {GuardianDeleteManyArgs} args - Arguments to filter Guardians to delete.
     * @example
     * // Delete a few Guardians
     * const { count } = await prisma.guardian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuardianDeleteManyArgs>(args?: SelectSubset<T, GuardianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guardians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guardians
     * const guardian = await prisma.guardian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuardianUpdateManyArgs>(args: SelectSubset<T, GuardianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Guardian.
     * @param {GuardianUpsertArgs} args - Arguments to update or create a Guardian.
     * @example
     * // Update or create a Guardian
     * const guardian = await prisma.guardian.upsert({
     *   create: {
     *     // ... data to create a Guardian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guardian we want to update
     *   }
     * })
     */
    upsert<T extends GuardianUpsertArgs>(args: SelectSubset<T, GuardianUpsertArgs<ExtArgs>>): Prisma__GuardianClient<$Result.GetResult<Prisma.$GuardianPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Guardians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianCountArgs} args - Arguments to filter Guardians to count.
     * @example
     * // Count the number of Guardians
     * const count = await prisma.guardian.count({
     *   where: {
     *     // ... the filter for the Guardians we want to count
     *   }
     * })
    **/
    count<T extends GuardianCountArgs>(
      args?: Subset<T, GuardianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuardianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guardian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuardianAggregateArgs>(args: Subset<T, GuardianAggregateArgs>): Prisma.PrismaPromise<GetGuardianAggregateType<T>>

    /**
     * Group by Guardian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuardianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuardianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuardianGroupByArgs['orderBy'] }
        : { orderBy?: GuardianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuardianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuardianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guardian model
   */
  readonly fields: GuardianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guardian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuardianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Guardian$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Guardian$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guardian model
   */ 
  interface GuardianFieldRefs {
    readonly id: FieldRef<"Guardian", 'String'>
    readonly name: FieldRef<"Guardian", 'String'>
    readonly relation: FieldRef<"Guardian", 'String'>
    readonly phone_number: FieldRef<"Guardian", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Guardian findUnique
   */
  export type GuardianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardian to fetch.
     */
    where: GuardianWhereUniqueInput
  }

  /**
   * Guardian findUniqueOrThrow
   */
  export type GuardianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardian to fetch.
     */
    where: GuardianWhereUniqueInput
  }

  /**
   * Guardian findFirst
   */
  export type GuardianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardian to fetch.
     */
    where?: GuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guardians to fetch.
     */
    orderBy?: GuardianOrderByWithRelationInput | GuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guardians.
     */
    cursor?: GuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guardians.
     */
    distinct?: GuardianScalarFieldEnum | GuardianScalarFieldEnum[]
  }

  /**
   * Guardian findFirstOrThrow
   */
  export type GuardianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardian to fetch.
     */
    where?: GuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guardians to fetch.
     */
    orderBy?: GuardianOrderByWithRelationInput | GuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guardians.
     */
    cursor?: GuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guardians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guardians.
     */
    distinct?: GuardianScalarFieldEnum | GuardianScalarFieldEnum[]
  }

  /**
   * Guardian findMany
   */
  export type GuardianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter, which Guardians to fetch.
     */
    where?: GuardianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guardians to fetch.
     */
    orderBy?: GuardianOrderByWithRelationInput | GuardianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guardians.
     */
    cursor?: GuardianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guardians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guardians.
     */
    skip?: number
    distinct?: GuardianScalarFieldEnum | GuardianScalarFieldEnum[]
  }

  /**
   * Guardian create
   */
  export type GuardianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * The data needed to create a Guardian.
     */
    data: XOR<GuardianCreateInput, GuardianUncheckedCreateInput>
  }

  /**
   * Guardian createMany
   */
  export type GuardianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guardians.
     */
    data: GuardianCreateManyInput | GuardianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guardian update
   */
  export type GuardianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * The data needed to update a Guardian.
     */
    data: XOR<GuardianUpdateInput, GuardianUncheckedUpdateInput>
    /**
     * Choose, which Guardian to update.
     */
    where: GuardianWhereUniqueInput
  }

  /**
   * Guardian updateMany
   */
  export type GuardianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guardians.
     */
    data: XOR<GuardianUpdateManyMutationInput, GuardianUncheckedUpdateManyInput>
    /**
     * Filter which Guardians to update
     */
    where?: GuardianWhereInput
    /**
     * Limit how many Guardians to update.
     */
    limit?: number
  }

  /**
   * Guardian upsert
   */
  export type GuardianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * The filter to search for the Guardian to update in case it exists.
     */
    where: GuardianWhereUniqueInput
    /**
     * In case the Guardian found by the `where` argument doesn't exist, create a new Guardian with this data.
     */
    create: XOR<GuardianCreateInput, GuardianUncheckedCreateInput>
    /**
     * In case the Guardian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuardianUpdateInput, GuardianUncheckedUpdateInput>
  }

  /**
   * Guardian delete
   */
  export type GuardianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
    /**
     * Filter which Guardian to delete.
     */
    where: GuardianWhereUniqueInput
  }

  /**
   * Guardian deleteMany
   */
  export type GuardianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guardians to delete
     */
    where?: GuardianWhereInput
    /**
     * Limit how many Guardians to delete.
     */
    limit?: number
  }

  /**
   * Guardian.students
   */
  export type Guardian$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    where?: StudentApplicationWhereInput
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    cursor?: StudentApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * Guardian without action
   */
  export type GuardianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guardian
     */
    select?: GuardianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guardian
     */
    omit?: GuardianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuardianInclude<ExtArgs> | null
  }


  /**
   * Model MedicalRecord
   */

  export type AggregateMedicalRecord = {
    _count: MedicalRecordCountAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  export type MedicalRecordMinAggregateOutputType = {
    id: string | null
    has_medical_condition: boolean | null
    medical_condition: string | null
  }

  export type MedicalRecordMaxAggregateOutputType = {
    id: string | null
    has_medical_condition: boolean | null
    medical_condition: string | null
  }

  export type MedicalRecordCountAggregateOutputType = {
    id: number
    has_medical_condition: number
    medical_condition: number
    _all: number
  }


  export type MedicalRecordMinAggregateInputType = {
    id?: true
    has_medical_condition?: true
    medical_condition?: true
  }

  export type MedicalRecordMaxAggregateInputType = {
    id?: true
    has_medical_condition?: true
    medical_condition?: true
  }

  export type MedicalRecordCountAggregateInputType = {
    id?: true
    has_medical_condition?: true
    medical_condition?: true
    _all?: true
  }

  export type MedicalRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecord to aggregate.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalRecords
    **/
    _count?: true | MedicalRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type GetMedicalRecordAggregateType<T extends MedicalRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalRecord[P]>
      : GetScalarType<T[P], AggregateMedicalRecord[P]>
  }




  export type MedicalRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithAggregationInput | MedicalRecordOrderByWithAggregationInput[]
    by: MedicalRecordScalarFieldEnum[] | MedicalRecordScalarFieldEnum
    having?: MedicalRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalRecordCountAggregateInputType | true
    _min?: MedicalRecordMinAggregateInputType
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type MedicalRecordGroupByOutputType = {
    id: string
    has_medical_condition: boolean
    medical_condition: string | null
    _count: MedicalRecordCountAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  type GetMedicalRecordGroupByPayload<T extends MedicalRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
        }
      >
    >


  export type MedicalRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    has_medical_condition?: boolean
    medical_condition?: boolean
    student_applications?: boolean | MedicalRecord$student_applicationsArgs<ExtArgs>
    _count?: boolean | MedicalRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>



  export type MedicalRecordSelectScalar = {
    id?: boolean
    has_medical_condition?: boolean
    medical_condition?: boolean
  }

  export type MedicalRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "has_medical_condition" | "medical_condition", ExtArgs["result"]["medicalRecord"]>
  export type MedicalRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student_applications?: boolean | MedicalRecord$student_applicationsArgs<ExtArgs>
    _count?: boolean | MedicalRecordCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MedicalRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalRecord"
    objects: {
      student_applications: Prisma.$StudentApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      has_medical_condition: boolean
      medical_condition: string | null
    }, ExtArgs["result"]["medicalRecord"]>
    composites: {}
  }

  type MedicalRecordGetPayload<S extends boolean | null | undefined | MedicalRecordDefaultArgs> = $Result.GetResult<Prisma.$MedicalRecordPayload, S>

  type MedicalRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalRecordCountAggregateInputType | true
    }

  export interface MedicalRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalRecord'], meta: { name: 'MedicalRecord' } }
    /**
     * Find zero or one MedicalRecord that matches the filter.
     * @param {MedicalRecordFindUniqueArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalRecordFindUniqueArgs>(args: SelectSubset<T, MedicalRecordFindUniqueArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MedicalRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalRecordFindUniqueOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MedicalRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalRecordFindFirstArgs>(args?: SelectSubset<T, MedicalRecordFindFirstArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MedicalRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MedicalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany()
     * 
     * // Get first 10 MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalRecordFindManyArgs>(args?: SelectSubset<T, MedicalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MedicalRecord.
     * @param {MedicalRecordCreateArgs} args - Arguments to create a MedicalRecord.
     * @example
     * // Create one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.create({
     *   data: {
     *     // ... data to create a MedicalRecord
     *   }
     * })
     * 
     */
    create<T extends MedicalRecordCreateArgs>(args: SelectSubset<T, MedicalRecordCreateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MedicalRecords.
     * @param {MedicalRecordCreateManyArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalRecordCreateManyArgs>(args?: SelectSubset<T, MedicalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MedicalRecord.
     * @param {MedicalRecordDeleteArgs} args - Arguments to delete one MedicalRecord.
     * @example
     * // Delete one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.delete({
     *   where: {
     *     // ... filter to delete one MedicalRecord
     *   }
     * })
     * 
     */
    delete<T extends MedicalRecordDeleteArgs>(args: SelectSubset<T, MedicalRecordDeleteArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MedicalRecord.
     * @param {MedicalRecordUpdateArgs} args - Arguments to update one MedicalRecord.
     * @example
     * // Update one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalRecordUpdateArgs>(args: SelectSubset<T, MedicalRecordUpdateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MedicalRecords.
     * @param {MedicalRecordDeleteManyArgs} args - Arguments to filter MedicalRecords to delete.
     * @example
     * // Delete a few MedicalRecords
     * const { count } = await prisma.medicalRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalRecordDeleteManyArgs>(args?: SelectSubset<T, MedicalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalRecordUpdateManyArgs>(args: SelectSubset<T, MedicalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicalRecord.
     * @param {MedicalRecordUpsertArgs} args - Arguments to update or create a MedicalRecord.
     * @example
     * // Update or create a MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.upsert({
     *   create: {
     *     // ... data to create a MedicalRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalRecord we want to update
     *   }
     * })
     */
    upsert<T extends MedicalRecordUpsertArgs>(args: SelectSubset<T, MedicalRecordUpsertArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordCountArgs} args - Arguments to filter MedicalRecords to count.
     * @example
     * // Count the number of MedicalRecords
     * const count = await prisma.medicalRecord.count({
     *   where: {
     *     // ... the filter for the MedicalRecords we want to count
     *   }
     * })
    **/
    count<T extends MedicalRecordCountArgs>(
      args?: Subset<T, MedicalRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicalRecordAggregateArgs>(args: Subset<T, MedicalRecordAggregateArgs>): Prisma.PrismaPromise<GetMedicalRecordAggregateType<T>>

    /**
     * Group by MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicalRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalRecordGroupByArgs['orderBy'] }
        : { orderBy?: MedicalRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalRecord model
   */
  readonly fields: MedicalRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student_applications<T extends MedicalRecord$student_applicationsArgs<ExtArgs> = {}>(args?: Subset<T, MedicalRecord$student_applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicalRecord model
   */ 
  interface MedicalRecordFieldRefs {
    readonly id: FieldRef<"MedicalRecord", 'String'>
    readonly has_medical_condition: FieldRef<"MedicalRecord", 'Boolean'>
    readonly medical_condition: FieldRef<"MedicalRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MedicalRecord findUnique
   */
  export type MedicalRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findUniqueOrThrow
   */
  export type MedicalRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findFirst
   */
  export type MedicalRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findFirstOrThrow
   */
  export type MedicalRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findMany
   */
  export type MedicalRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecords to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord create
   */
  export type MedicalRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalRecord.
     */
    data?: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
  }

  /**
   * MedicalRecord createMany
   */
  export type MedicalRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalRecord update
   */
  export type MedicalRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalRecord.
     */
    data: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
    /**
     * Choose, which MedicalRecord to update.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord updateMany
   */
  export type MedicalRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
  }

  /**
   * MedicalRecord upsert
   */
  export type MedicalRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalRecord to update in case it exists.
     */
    where: MedicalRecordWhereUniqueInput
    /**
     * In case the MedicalRecord found by the `where` argument doesn't exist, create a new MedicalRecord with this data.
     */
    create: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
    /**
     * In case the MedicalRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
  }

  /**
   * MedicalRecord delete
   */
  export type MedicalRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter which MedicalRecord to delete.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord deleteMany
   */
  export type MedicalRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecords to delete
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to delete.
     */
    limit?: number
  }

  /**
   * MedicalRecord.student_applications
   */
  export type MedicalRecord$student_applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    where?: StudentApplicationWhereInput
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    cursor?: StudentApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * MedicalRecord without action
   */
  export type MedicalRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolAvgAggregateOutputType = {
    general_weighted_average: number | null
  }

  export type SchoolSumAggregateOutputType = {
    general_weighted_average: number | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    last_year_level: string | null
    last_school_year: string | null
    general_weighted_average: number | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    last_year_level: string | null
    last_school_year: string | null
    general_weighted_average: number | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    address: number
    last_year_level: number
    last_school_year: number
    general_weighted_average: number
    _all: number
  }


  export type SchoolAvgAggregateInputType = {
    general_weighted_average?: true
  }

  export type SchoolSumAggregateInputType = {
    general_weighted_average?: true
  }

  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    last_year_level?: true
    last_school_year?: true
    general_weighted_average?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    last_year_level?: true
    last_school_year?: true
    general_weighted_average?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    last_year_level?: true
    last_school_year?: true
    general_weighted_average?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _avg?: SchoolAvgAggregateInputType
    _sum?: SchoolSumAggregateInputType
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    name: string
    address: string
    last_year_level: string | null
    last_school_year: string | null
    general_weighted_average: number | null
    _count: SchoolCountAggregateOutputType | null
    _avg: SchoolAvgAggregateOutputType | null
    _sum: SchoolSumAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    last_year_level?: boolean
    last_school_year?: boolean
    general_weighted_average?: boolean
    admissions?: boolean | School$admissionsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>



  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    last_year_level?: boolean
    last_school_year?: boolean
    general_weighted_average?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "last_year_level" | "last_school_year" | "general_weighted_average", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admissions?: boolean | School$admissionsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      admissions: Prisma.$AdmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      last_year_level: string | null
      last_school_year: string | null
      general_weighted_average: number | null
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admissions<T extends School$admissionsArgs<ExtArgs> = {}>(args?: Subset<T, School$admissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdmissionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the School model
   */ 
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly name: FieldRef<"School", 'String'>
    readonly address: FieldRef<"School", 'String'>
    readonly last_year_level: FieldRef<"School", 'String'>
    readonly last_school_year: FieldRef<"School", 'String'>
    readonly general_weighted_average: FieldRef<"School", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.admissions
   */
  export type School$admissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admission
     */
    select?: AdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admission
     */
    omit?: AdmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdmissionInclude<ExtArgs> | null
    where?: AdmissionWhereInput
    orderBy?: AdmissionOrderByWithRelationInput | AdmissionOrderByWithRelationInput[]
    cursor?: AdmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdmissionScalarFieldEnum | AdmissionScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    username: 'username',
    password: 'password',
    phone_number: 'phone_number',
    address: 'address',
    role: 'role',
    date_of_birth: 'date_of_birth',
    classroom_id: 'classroom_id'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    username: 'username',
    password: 'password',
    role: 'role',
    phone_number: 'phone_number',
    date_of_birth: 'date_of_birth',
    classroom_id: 'classroom_id'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    teacher_id: 'teacher_id'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const ClassroomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    grade_level: 'grade_level',
    teacher_id: 'teacher_id'
  };

  export type ClassroomScalarFieldEnum = (typeof ClassroomScalarFieldEnum)[keyof typeof ClassroomScalarFieldEnum]


  export const StudentApplicationScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    suffix: 'suffix',
    gender: 'gender',
    civil_status: 'civil_status',
    date_of_birth: 'date_of_birth',
    birth_place: 'birth_place',
    nationality: 'nationality',
    email: 'email',
    phone_number: 'phone_number',
    tel_number: 'tel_number',
    permanent_address: 'permanent_address',
    current_address: 'current_address',
    postal_code: 'postal_code',
    father_id: 'father_id',
    mother_id: 'mother_id',
    guardian_id: 'guardian_id',
    medical_record_id: 'medical_record_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StudentApplicationScalarFieldEnum = (typeof StudentApplicationScalarFieldEnum)[keyof typeof StudentApplicationScalarFieldEnum]


  export const AdmissionScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    admission_type: 'admission_type',
    intended_grade_level: 'intended_grade_level',
    previous_school_id: 'previous_school_id',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AdmissionScalarFieldEnum = (typeof AdmissionScalarFieldEnum)[keyof typeof AdmissionScalarFieldEnum]


  export const ParentScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    occupation: 'occupation',
    annual_income: 'annual_income'
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum]


  export const GuardianScalarFieldEnum: {
    id: 'id',
    name: 'name',
    relation: 'relation',
    phone_number: 'phone_number'
  };

  export type GuardianScalarFieldEnum = (typeof GuardianScalarFieldEnum)[keyof typeof GuardianScalarFieldEnum]


  export const MedicalRecordScalarFieldEnum: {
    id: 'id',
    has_medical_condition: 'has_medical_condition',
    medical_condition: 'medical_condition'
  };

  export type MedicalRecordScalarFieldEnum = (typeof MedicalRecordScalarFieldEnum)[keyof typeof MedicalRecordScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    last_year_level: 'last_year_level',
    last_school_year: 'last_school_year',
    general_weighted_average: 'general_weighted_average'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AdminOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TeacherOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    username: 'username',
    password: 'password',
    phone_number: 'phone_number',
    address: 'address',
    classroom_id: 'classroom_id'
  };

  export type TeacherOrderByRelevanceFieldEnum = (typeof TeacherOrderByRelevanceFieldEnum)[keyof typeof TeacherOrderByRelevanceFieldEnum]


  export const StudentOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    username: 'username',
    password: 'password',
    phone_number: 'phone_number',
    classroom_id: 'classroom_id'
  };

  export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum]


  export const SubjectOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    teacher_id: 'teacher_id'
  };

  export type SubjectOrderByRelevanceFieldEnum = (typeof SubjectOrderByRelevanceFieldEnum)[keyof typeof SubjectOrderByRelevanceFieldEnum]


  export const ClassroomOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    teacher_id: 'teacher_id'
  };

  export type ClassroomOrderByRelevanceFieldEnum = (typeof ClassroomOrderByRelevanceFieldEnum)[keyof typeof ClassroomOrderByRelevanceFieldEnum]


  export const StudentApplicationOrderByRelevanceFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    gender: 'gender',
    birth_place: 'birth_place',
    nationality: 'nationality',
    email: 'email',
    phone_number: 'phone_number',
    tel_number: 'tel_number',
    permanent_address: 'permanent_address',
    current_address: 'current_address',
    postal_code: 'postal_code',
    father_id: 'father_id',
    mother_id: 'mother_id',
    guardian_id: 'guardian_id',
    medical_record_id: 'medical_record_id'
  };

  export type StudentApplicationOrderByRelevanceFieldEnum = (typeof StudentApplicationOrderByRelevanceFieldEnum)[keyof typeof StudentApplicationOrderByRelevanceFieldEnum]


  export const AdmissionOrderByRelevanceFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    intended_grade_level: 'intended_grade_level',
    previous_school_id: 'previous_school_id'
  };

  export type AdmissionOrderByRelevanceFieldEnum = (typeof AdmissionOrderByRelevanceFieldEnum)[keyof typeof AdmissionOrderByRelevanceFieldEnum]


  export const ParentOrderByRelevanceFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    occupation: 'occupation'
  };

  export type ParentOrderByRelevanceFieldEnum = (typeof ParentOrderByRelevanceFieldEnum)[keyof typeof ParentOrderByRelevanceFieldEnum]


  export const GuardianOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    relation: 'relation',
    phone_number: 'phone_number'
  };

  export type GuardianOrderByRelevanceFieldEnum = (typeof GuardianOrderByRelevanceFieldEnum)[keyof typeof GuardianOrderByRelevanceFieldEnum]


  export const MedicalRecordOrderByRelevanceFieldEnum: {
    id: 'id',
    medical_condition: 'medical_condition'
  };

  export type MedicalRecordOrderByRelevanceFieldEnum = (typeof MedicalRecordOrderByRelevanceFieldEnum)[keyof typeof MedicalRecordOrderByRelevanceFieldEnum]


  export const SchoolOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    last_year_level: 'last_year_level',
    last_school_year: 'last_school_year'
  };

  export type SchoolOrderByRelevanceFieldEnum = (typeof SchoolOrderByRelevanceFieldEnum)[keyof typeof SchoolOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'GradeLevel'
   */
  export type EnumGradeLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GradeLevel'>
    


  /**
   * Reference to a field of type 'NameSuffix'
   */
  export type EnumNameSuffixFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NameSuffix'>
    


  /**
   * Reference to a field of type 'CivilStatus'
   */
  export type EnumCivilStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CivilStatus'>
    


  /**
   * Reference to a field of type 'AdmissionType'
   */
  export type EnumAdmissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdmissionType'>
    


  /**
   * Reference to a field of type 'AdmissionStatus'
   */
  export type EnumAdmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdmissionStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    username?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: EnumUserRoleFilter<"Admin"> | $Enums.UserRole
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    role?: EnumUserRoleFilter<"Admin"> | $Enums.UserRole
  }, "id" | "email" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumUserRoleWithAggregatesFilter<"Admin"> | $Enums.UserRole
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: StringFilter<"Teacher"> | string
    email?: StringFilter<"Teacher"> | string
    name?: StringFilter<"Teacher"> | string
    middle_name?: StringNullableFilter<"Teacher"> | string | null
    last_name?: StringFilter<"Teacher"> | string
    username?: StringFilter<"Teacher"> | string
    password?: StringFilter<"Teacher"> | string
    phone_number?: StringFilter<"Teacher"> | string
    address?: StringFilter<"Teacher"> | string
    role?: EnumUserRoleFilter<"Teacher"> | $Enums.UserRole
    date_of_birth?: DateTimeFilter<"Teacher"> | Date | string
    classroom_id?: StringNullableFilter<"Teacher"> | string | null
    subjects?: SubjectListRelationFilter
    classroom?: XOR<ClassroomNullableScalarRelationFilter, ClassroomWhereInput> | null
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    role?: SortOrder
    date_of_birth?: SortOrder
    classroom_id?: SortOrderInput | SortOrder
    subjects?: SubjectOrderByRelationAggregateInput
    classroom?: ClassroomOrderByWithRelationInput
    _relevance?: TeacherOrderByRelevanceInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    classroom_id?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    name?: StringFilter<"Teacher"> | string
    middle_name?: StringNullableFilter<"Teacher"> | string | null
    last_name?: StringFilter<"Teacher"> | string
    password?: StringFilter<"Teacher"> | string
    phone_number?: StringFilter<"Teacher"> | string
    address?: StringFilter<"Teacher"> | string
    role?: EnumUserRoleFilter<"Teacher"> | $Enums.UserRole
    date_of_birth?: DateTimeFilter<"Teacher"> | Date | string
    subjects?: SubjectListRelationFilter
    classroom?: XOR<ClassroomNullableScalarRelationFilter, ClassroomWhereInput> | null
  }, "id" | "email" | "username" | "classroom_id">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    role?: SortOrder
    date_of_birth?: SortOrder
    classroom_id?: SortOrderInput | SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teacher"> | string
    email?: StringWithAggregatesFilter<"Teacher"> | string
    name?: StringWithAggregatesFilter<"Teacher"> | string
    middle_name?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    last_name?: StringWithAggregatesFilter<"Teacher"> | string
    username?: StringWithAggregatesFilter<"Teacher"> | string
    password?: StringWithAggregatesFilter<"Teacher"> | string
    phone_number?: StringWithAggregatesFilter<"Teacher"> | string
    address?: StringWithAggregatesFilter<"Teacher"> | string
    role?: EnumUserRoleWithAggregatesFilter<"Teacher"> | $Enums.UserRole
    date_of_birth?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    classroom_id?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    middle_name?: StringNullableFilter<"Student"> | string | null
    last_name?: StringFilter<"Student"> | string
    username?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    role?: EnumUserRoleFilter<"Student"> | $Enums.UserRole
    phone_number?: StringFilter<"Student"> | string
    date_of_birth?: DateTimeFilter<"Student"> | Date | string
    classroom_id?: StringFilter<"Student"> | string
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone_number?: SortOrder
    date_of_birth?: SortOrder
    classroom_id?: SortOrder
    classroom?: ClassroomOrderByWithRelationInput
    _relevance?: StudentOrderByRelevanceInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    middle_name?: StringNullableFilter<"Student"> | string | null
    last_name?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    role?: EnumUserRoleFilter<"Student"> | $Enums.UserRole
    phone_number?: StringFilter<"Student"> | string
    date_of_birth?: DateTimeFilter<"Student"> | Date | string
    classroom_id?: StringFilter<"Student"> | string
    classroom?: XOR<ClassroomScalarRelationFilter, ClassroomWhereInput>
  }, "id" | "email" | "username">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone_number?: SortOrder
    date_of_birth?: SortOrder
    classroom_id?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    middle_name?: StringNullableWithAggregatesFilter<"Student"> | string | null
    last_name?: StringWithAggregatesFilter<"Student"> | string
    username?: StringWithAggregatesFilter<"Student"> | string
    password?: StringWithAggregatesFilter<"Student"> | string
    role?: EnumUserRoleWithAggregatesFilter<"Student"> | $Enums.UserRole
    phone_number?: StringWithAggregatesFilter<"Student"> | string
    date_of_birth?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    classroom_id?: StringWithAggregatesFilter<"Student"> | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    teacher_id?: StringNullableFilter<"Subject"> | string | null
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teacher_id?: SortOrderInput | SortOrder
    teacher?: TeacherOrderByWithRelationInput
    _relevance?: SubjectOrderByRelevanceInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    teacher_id?: StringNullableFilter<"Subject"> | string | null
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
  }, "id" | "name">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    teacher_id?: SortOrderInput | SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subject"> | string
    name?: StringWithAggregatesFilter<"Subject"> | string
    teacher_id?: StringNullableWithAggregatesFilter<"Subject"> | string | null
  }

  export type ClassroomWhereInput = {
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    id?: StringFilter<"Classroom"> | string
    name?: StringFilter<"Classroom"> | string
    grade_level?: EnumGradeLevelFilter<"Classroom"> | $Enums.GradeLevel
    teacher_id?: StringNullableFilter<"Classroom"> | string | null
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    students?: StudentListRelationFilter
  }

  export type ClassroomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    grade_level?: SortOrder
    teacher_id?: SortOrderInput | SortOrder
    teacher?: TeacherOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
    _relevance?: ClassroomOrderByRelevanceInput
  }

  export type ClassroomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    teacher_id?: string
    AND?: ClassroomWhereInput | ClassroomWhereInput[]
    OR?: ClassroomWhereInput[]
    NOT?: ClassroomWhereInput | ClassroomWhereInput[]
    grade_level?: EnumGradeLevelFilter<"Classroom"> | $Enums.GradeLevel
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    students?: StudentListRelationFilter
  }, "id" | "name" | "teacher_id">

  export type ClassroomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    grade_level?: SortOrder
    teacher_id?: SortOrderInput | SortOrder
    _count?: ClassroomCountOrderByAggregateInput
    _max?: ClassroomMaxOrderByAggregateInput
    _min?: ClassroomMinOrderByAggregateInput
  }

  export type ClassroomScalarWhereWithAggregatesInput = {
    AND?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    OR?: ClassroomScalarWhereWithAggregatesInput[]
    NOT?: ClassroomScalarWhereWithAggregatesInput | ClassroomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Classroom"> | string
    name?: StringWithAggregatesFilter<"Classroom"> | string
    grade_level?: EnumGradeLevelWithAggregatesFilter<"Classroom"> | $Enums.GradeLevel
    teacher_id?: StringNullableWithAggregatesFilter<"Classroom"> | string | null
  }

  export type StudentApplicationWhereInput = {
    AND?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    OR?: StudentApplicationWhereInput[]
    NOT?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    id?: StringFilter<"StudentApplication"> | string
    first_name?: StringFilter<"StudentApplication"> | string
    middle_name?: StringNullableFilter<"StudentApplication"> | string | null
    last_name?: StringFilter<"StudentApplication"> | string
    suffix?: EnumNameSuffixNullableFilter<"StudentApplication"> | $Enums.NameSuffix | null
    gender?: StringFilter<"StudentApplication"> | string
    civil_status?: EnumCivilStatusNullableFilter<"StudentApplication"> | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFilter<"StudentApplication"> | Date | string
    birth_place?: StringFilter<"StudentApplication"> | string
    nationality?: StringFilter<"StudentApplication"> | string
    email?: StringFilter<"StudentApplication"> | string
    phone_number?: StringFilter<"StudentApplication"> | string
    tel_number?: StringNullableFilter<"StudentApplication"> | string | null
    permanent_address?: StringFilter<"StudentApplication"> | string
    current_address?: StringFilter<"StudentApplication"> | string
    postal_code?: StringFilter<"StudentApplication"> | string
    father_id?: StringNullableFilter<"StudentApplication"> | string | null
    mother_id?: StringNullableFilter<"StudentApplication"> | string | null
    guardian_id?: StringNullableFilter<"StudentApplication"> | string | null
    medical_record_id?: StringNullableFilter<"StudentApplication"> | string | null
    created_at?: DateTimeFilter<"StudentApplication"> | Date | string
    updated_at?: DateTimeFilter<"StudentApplication"> | Date | string
    father?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
    mother?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
    guardian?: XOR<GuardianNullableScalarRelationFilter, GuardianWhereInput> | null
    medical_record?: XOR<MedicalRecordNullableScalarRelationFilter, MedicalRecordWhereInput> | null
    admission?: XOR<AdmissionNullableScalarRelationFilter, AdmissionWhereInput> | null
  }

  export type StudentApplicationOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    suffix?: SortOrderInput | SortOrder
    gender?: SortOrder
    civil_status?: SortOrderInput | SortOrder
    date_of_birth?: SortOrder
    birth_place?: SortOrder
    nationality?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    tel_number?: SortOrderInput | SortOrder
    permanent_address?: SortOrder
    current_address?: SortOrder
    postal_code?: SortOrder
    father_id?: SortOrderInput | SortOrder
    mother_id?: SortOrderInput | SortOrder
    guardian_id?: SortOrderInput | SortOrder
    medical_record_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    father?: ParentOrderByWithRelationInput
    mother?: ParentOrderByWithRelationInput
    guardian?: GuardianOrderByWithRelationInput
    medical_record?: MedicalRecordOrderByWithRelationInput
    admission?: AdmissionOrderByWithRelationInput
    _relevance?: StudentApplicationOrderByRelevanceInput
  }

  export type StudentApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    OR?: StudentApplicationWhereInput[]
    NOT?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    first_name?: StringFilter<"StudentApplication"> | string
    middle_name?: StringNullableFilter<"StudentApplication"> | string | null
    last_name?: StringFilter<"StudentApplication"> | string
    suffix?: EnumNameSuffixNullableFilter<"StudentApplication"> | $Enums.NameSuffix | null
    gender?: StringFilter<"StudentApplication"> | string
    civil_status?: EnumCivilStatusNullableFilter<"StudentApplication"> | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFilter<"StudentApplication"> | Date | string
    birth_place?: StringFilter<"StudentApplication"> | string
    nationality?: StringFilter<"StudentApplication"> | string
    phone_number?: StringFilter<"StudentApplication"> | string
    tel_number?: StringNullableFilter<"StudentApplication"> | string | null
    permanent_address?: StringFilter<"StudentApplication"> | string
    current_address?: StringFilter<"StudentApplication"> | string
    postal_code?: StringFilter<"StudentApplication"> | string
    father_id?: StringNullableFilter<"StudentApplication"> | string | null
    mother_id?: StringNullableFilter<"StudentApplication"> | string | null
    guardian_id?: StringNullableFilter<"StudentApplication"> | string | null
    medical_record_id?: StringNullableFilter<"StudentApplication"> | string | null
    created_at?: DateTimeFilter<"StudentApplication"> | Date | string
    updated_at?: DateTimeFilter<"StudentApplication"> | Date | string
    father?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
    mother?: XOR<ParentNullableScalarRelationFilter, ParentWhereInput> | null
    guardian?: XOR<GuardianNullableScalarRelationFilter, GuardianWhereInput> | null
    medical_record?: XOR<MedicalRecordNullableScalarRelationFilter, MedicalRecordWhereInput> | null
    admission?: XOR<AdmissionNullableScalarRelationFilter, AdmissionWhereInput> | null
  }, "id" | "email">

  export type StudentApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    suffix?: SortOrderInput | SortOrder
    gender?: SortOrder
    civil_status?: SortOrderInput | SortOrder
    date_of_birth?: SortOrder
    birth_place?: SortOrder
    nationality?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    tel_number?: SortOrderInput | SortOrder
    permanent_address?: SortOrder
    current_address?: SortOrder
    postal_code?: SortOrder
    father_id?: SortOrderInput | SortOrder
    mother_id?: SortOrderInput | SortOrder
    guardian_id?: SortOrderInput | SortOrder
    medical_record_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: StudentApplicationCountOrderByAggregateInput
    _max?: StudentApplicationMaxOrderByAggregateInput
    _min?: StudentApplicationMinOrderByAggregateInput
  }

  export type StudentApplicationScalarWhereWithAggregatesInput = {
    AND?: StudentApplicationScalarWhereWithAggregatesInput | StudentApplicationScalarWhereWithAggregatesInput[]
    OR?: StudentApplicationScalarWhereWithAggregatesInput[]
    NOT?: StudentApplicationScalarWhereWithAggregatesInput | StudentApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentApplication"> | string
    first_name?: StringWithAggregatesFilter<"StudentApplication"> | string
    middle_name?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    last_name?: StringWithAggregatesFilter<"StudentApplication"> | string
    suffix?: EnumNameSuffixNullableWithAggregatesFilter<"StudentApplication"> | $Enums.NameSuffix | null
    gender?: StringWithAggregatesFilter<"StudentApplication"> | string
    civil_status?: EnumCivilStatusNullableWithAggregatesFilter<"StudentApplication"> | $Enums.CivilStatus | null
    date_of_birth?: DateTimeWithAggregatesFilter<"StudentApplication"> | Date | string
    birth_place?: StringWithAggregatesFilter<"StudentApplication"> | string
    nationality?: StringWithAggregatesFilter<"StudentApplication"> | string
    email?: StringWithAggregatesFilter<"StudentApplication"> | string
    phone_number?: StringWithAggregatesFilter<"StudentApplication"> | string
    tel_number?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    permanent_address?: StringWithAggregatesFilter<"StudentApplication"> | string
    current_address?: StringWithAggregatesFilter<"StudentApplication"> | string
    postal_code?: StringWithAggregatesFilter<"StudentApplication"> | string
    father_id?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    mother_id?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    guardian_id?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    medical_record_id?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"StudentApplication"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"StudentApplication"> | Date | string
  }

  export type AdmissionWhereInput = {
    AND?: AdmissionWhereInput | AdmissionWhereInput[]
    OR?: AdmissionWhereInput[]
    NOT?: AdmissionWhereInput | AdmissionWhereInput[]
    id?: StringFilter<"Admission"> | string
    student_id?: StringFilter<"Admission"> | string
    admission_type?: EnumAdmissionTypeFilter<"Admission"> | $Enums.AdmissionType
    intended_grade_level?: StringFilter<"Admission"> | string
    previous_school_id?: StringNullableFilter<"Admission"> | string | null
    status?: EnumAdmissionStatusFilter<"Admission"> | $Enums.AdmissionStatus
    created_at?: DateTimeFilter<"Admission"> | Date | string
    updated_at?: DateTimeFilter<"Admission"> | Date | string
    student?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
    previous_school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
  }

  export type AdmissionOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    admission_type?: SortOrder
    intended_grade_level?: SortOrder
    previous_school_id?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    student?: StudentApplicationOrderByWithRelationInput
    previous_school?: SchoolOrderByWithRelationInput
    _relevance?: AdmissionOrderByRelevanceInput
  }

  export type AdmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    student_id?: string
    AND?: AdmissionWhereInput | AdmissionWhereInput[]
    OR?: AdmissionWhereInput[]
    NOT?: AdmissionWhereInput | AdmissionWhereInput[]
    admission_type?: EnumAdmissionTypeFilter<"Admission"> | $Enums.AdmissionType
    intended_grade_level?: StringFilter<"Admission"> | string
    previous_school_id?: StringNullableFilter<"Admission"> | string | null
    status?: EnumAdmissionStatusFilter<"Admission"> | $Enums.AdmissionStatus
    created_at?: DateTimeFilter<"Admission"> | Date | string
    updated_at?: DateTimeFilter<"Admission"> | Date | string
    student?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
    previous_school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
  }, "id" | "student_id">

  export type AdmissionOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    admission_type?: SortOrder
    intended_grade_level?: SortOrder
    previous_school_id?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AdmissionCountOrderByAggregateInput
    _max?: AdmissionMaxOrderByAggregateInput
    _min?: AdmissionMinOrderByAggregateInput
  }

  export type AdmissionScalarWhereWithAggregatesInput = {
    AND?: AdmissionScalarWhereWithAggregatesInput | AdmissionScalarWhereWithAggregatesInput[]
    OR?: AdmissionScalarWhereWithAggregatesInput[]
    NOT?: AdmissionScalarWhereWithAggregatesInput | AdmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admission"> | string
    student_id?: StringWithAggregatesFilter<"Admission"> | string
    admission_type?: EnumAdmissionTypeWithAggregatesFilter<"Admission"> | $Enums.AdmissionType
    intended_grade_level?: StringWithAggregatesFilter<"Admission"> | string
    previous_school_id?: StringNullableWithAggregatesFilter<"Admission"> | string | null
    status?: EnumAdmissionStatusWithAggregatesFilter<"Admission"> | $Enums.AdmissionStatus
    created_at?: DateTimeWithAggregatesFilter<"Admission"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Admission"> | Date | string
  }

  export type ParentWhereInput = {
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    id?: StringFilter<"Parent"> | string
    first_name?: StringFilter<"Parent"> | string
    middle_name?: StringNullableFilter<"Parent"> | string | null
    last_name?: StringFilter<"Parent"> | string
    occupation?: StringFilter<"Parent"> | string
    annual_income?: FloatNullableFilter<"Parent"> | number | null
    children_as_father?: StudentApplicationListRelationFilter
    children_as_mother?: StudentApplicationListRelationFilter
  }

  export type ParentOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    occupation?: SortOrder
    annual_income?: SortOrderInput | SortOrder
    children_as_father?: StudentApplicationOrderByRelationAggregateInput
    children_as_mother?: StudentApplicationOrderByRelationAggregateInput
    _relevance?: ParentOrderByRelevanceInput
  }

  export type ParentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParentWhereInput | ParentWhereInput[]
    OR?: ParentWhereInput[]
    NOT?: ParentWhereInput | ParentWhereInput[]
    first_name?: StringFilter<"Parent"> | string
    middle_name?: StringNullableFilter<"Parent"> | string | null
    last_name?: StringFilter<"Parent"> | string
    occupation?: StringFilter<"Parent"> | string
    annual_income?: FloatNullableFilter<"Parent"> | number | null
    children_as_father?: StudentApplicationListRelationFilter
    children_as_mother?: StudentApplicationListRelationFilter
  }, "id">

  export type ParentOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    occupation?: SortOrder
    annual_income?: SortOrderInput | SortOrder
    _count?: ParentCountOrderByAggregateInput
    _avg?: ParentAvgOrderByAggregateInput
    _max?: ParentMaxOrderByAggregateInput
    _min?: ParentMinOrderByAggregateInput
    _sum?: ParentSumOrderByAggregateInput
  }

  export type ParentScalarWhereWithAggregatesInput = {
    AND?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    OR?: ParentScalarWhereWithAggregatesInput[]
    NOT?: ParentScalarWhereWithAggregatesInput | ParentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parent"> | string
    first_name?: StringWithAggregatesFilter<"Parent"> | string
    middle_name?: StringNullableWithAggregatesFilter<"Parent"> | string | null
    last_name?: StringWithAggregatesFilter<"Parent"> | string
    occupation?: StringWithAggregatesFilter<"Parent"> | string
    annual_income?: FloatNullableWithAggregatesFilter<"Parent"> | number | null
  }

  export type GuardianWhereInput = {
    AND?: GuardianWhereInput | GuardianWhereInput[]
    OR?: GuardianWhereInput[]
    NOT?: GuardianWhereInput | GuardianWhereInput[]
    id?: StringFilter<"Guardian"> | string
    name?: StringFilter<"Guardian"> | string
    relation?: StringFilter<"Guardian"> | string
    phone_number?: StringFilter<"Guardian"> | string
    students?: StudentApplicationListRelationFilter
  }

  export type GuardianOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phone_number?: SortOrder
    students?: StudentApplicationOrderByRelationAggregateInput
    _relevance?: GuardianOrderByRelevanceInput
  }

  export type GuardianWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuardianWhereInput | GuardianWhereInput[]
    OR?: GuardianWhereInput[]
    NOT?: GuardianWhereInput | GuardianWhereInput[]
    name?: StringFilter<"Guardian"> | string
    relation?: StringFilter<"Guardian"> | string
    phone_number?: StringFilter<"Guardian"> | string
    students?: StudentApplicationListRelationFilter
  }, "id">

  export type GuardianOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phone_number?: SortOrder
    _count?: GuardianCountOrderByAggregateInput
    _max?: GuardianMaxOrderByAggregateInput
    _min?: GuardianMinOrderByAggregateInput
  }

  export type GuardianScalarWhereWithAggregatesInput = {
    AND?: GuardianScalarWhereWithAggregatesInput | GuardianScalarWhereWithAggregatesInput[]
    OR?: GuardianScalarWhereWithAggregatesInput[]
    NOT?: GuardianScalarWhereWithAggregatesInput | GuardianScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guardian"> | string
    name?: StringWithAggregatesFilter<"Guardian"> | string
    relation?: StringWithAggregatesFilter<"Guardian"> | string
    phone_number?: StringWithAggregatesFilter<"Guardian"> | string
  }

  export type MedicalRecordWhereInput = {
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    id?: StringFilter<"MedicalRecord"> | string
    has_medical_condition?: BoolFilter<"MedicalRecord"> | boolean
    medical_condition?: StringNullableFilter<"MedicalRecord"> | string | null
    student_applications?: StudentApplicationListRelationFilter
  }

  export type MedicalRecordOrderByWithRelationInput = {
    id?: SortOrder
    has_medical_condition?: SortOrder
    medical_condition?: SortOrderInput | SortOrder
    student_applications?: StudentApplicationOrderByRelationAggregateInput
    _relevance?: MedicalRecordOrderByRelevanceInput
  }

  export type MedicalRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    has_medical_condition?: BoolFilter<"MedicalRecord"> | boolean
    medical_condition?: StringNullableFilter<"MedicalRecord"> | string | null
    student_applications?: StudentApplicationListRelationFilter
  }, "id">

  export type MedicalRecordOrderByWithAggregationInput = {
    id?: SortOrder
    has_medical_condition?: SortOrder
    medical_condition?: SortOrderInput | SortOrder
    _count?: MedicalRecordCountOrderByAggregateInput
    _max?: MedicalRecordMaxOrderByAggregateInput
    _min?: MedicalRecordMinOrderByAggregateInput
  }

  export type MedicalRecordScalarWhereWithAggregatesInput = {
    AND?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    OR?: MedicalRecordScalarWhereWithAggregatesInput[]
    NOT?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicalRecord"> | string
    has_medical_condition?: BoolWithAggregatesFilter<"MedicalRecord"> | boolean
    medical_condition?: StringNullableWithAggregatesFilter<"MedicalRecord"> | string | null
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    address?: StringFilter<"School"> | string
    last_year_level?: StringNullableFilter<"School"> | string | null
    last_school_year?: StringNullableFilter<"School"> | string | null
    general_weighted_average?: FloatNullableFilter<"School"> | number | null
    admissions?: AdmissionListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    last_year_level?: SortOrderInput | SortOrder
    last_school_year?: SortOrderInput | SortOrder
    general_weighted_average?: SortOrderInput | SortOrder
    admissions?: AdmissionOrderByRelationAggregateInput
    _relevance?: SchoolOrderByRelevanceInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    address?: StringFilter<"School"> | string
    last_year_level?: StringNullableFilter<"School"> | string | null
    last_school_year?: StringNullableFilter<"School"> | string | null
    general_weighted_average?: FloatNullableFilter<"School"> | number | null
    admissions?: AdmissionListRelationFilter
  }, "id">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    last_year_level?: SortOrderInput | SortOrder
    last_school_year?: SortOrderInput | SortOrder
    general_weighted_average?: SortOrderInput | SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _avg?: SchoolAvgOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
    _sum?: SchoolSumOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    name?: StringWithAggregatesFilter<"School"> | string
    address?: StringWithAggregatesFilter<"School"> | string
    last_year_level?: StringNullableWithAggregatesFilter<"School"> | string | null
    last_school_year?: StringNullableWithAggregatesFilter<"School"> | string | null
    general_weighted_average?: FloatNullableWithAggregatesFilter<"School"> | number | null
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    role?: $Enums.UserRole
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    role?: $Enums.UserRole
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    role?: $Enums.UserRole
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type TeacherCreateInput = {
    id?: string
    email: string
    name: string
    middle_name?: string | null
    last_name: string
    username: string
    password: string
    phone_number: string
    address: string
    role?: $Enums.UserRole
    date_of_birth: Date | string
    classroom_id?: string | null
    subjects?: SubjectCreateNestedManyWithoutTeacherInput
    classroom?: ClassroomCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    middle_name?: string | null
    last_name: string
    username: string
    password: string
    phone_number: string
    address: string
    role?: $Enums.UserRole
    date_of_birth: Date | string
    classroom_id?: string | null
    subjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    classroom?: ClassroomUncheckedCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom_id?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: SubjectUpdateManyWithoutTeacherNestedInput
    classroom?: ClassroomUpdateOneWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom_id?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    classroom?: ClassroomUncheckedUpdateOneWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: string
    email: string
    name: string
    middle_name?: string | null
    last_name: string
    username: string
    password: string
    phone_number: string
    address: string
    role?: $Enums.UserRole
    date_of_birth: Date | string
    classroom_id?: string | null
  }

  export type TeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentCreateInput = {
    id?: string
    email: string
    name: string
    middle_name?: string | null
    last_name: string
    username: string
    password: string
    role?: $Enums.UserRole
    phone_number: string
    date_of_birth: Date | string
    classroom: ClassroomCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    middle_name?: string | null
    last_name: string
    username: string
    password: string
    role?: $Enums.UserRole
    phone_number: string
    date_of_birth: Date | string
    classroom_id: string
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone_number?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom?: ClassroomUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone_number?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom_id?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateManyInput = {
    id?: string
    email: string
    name: string
    middle_name?: string | null
    last_name: string
    username: string
    password: string
    role?: $Enums.UserRole
    phone_number: string
    date_of_birth: Date | string
    classroom_id: string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone_number?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone_number?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectCreateInput = {
    id?: string
    name: string
    teacher?: TeacherCreateNestedOneWithoutSubjectsInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: string
    name: string
    teacher_id?: string | null
  }

  export type SubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacher?: TeacherUpdateOneWithoutSubjectsNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacher_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectCreateManyInput = {
    id?: string
    name: string
    teacher_id?: string | null
  }

  export type SubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacher_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassroomCreateInput = {
    id?: string
    name: string
    grade_level: $Enums.GradeLevel
    teacher?: TeacherCreateNestedOneWithoutClassroomInput
    students?: StudentCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateInput = {
    id?: string
    name: string
    grade_level: $Enums.GradeLevel
    teacher_id?: string | null
    students?: StudentUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade_level?: EnumGradeLevelFieldUpdateOperationsInput | $Enums.GradeLevel
    teacher?: TeacherUpdateOneWithoutClassroomNestedInput
    students?: StudentUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade_level?: EnumGradeLevelFieldUpdateOperationsInput | $Enums.GradeLevel
    teacher_id?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomCreateManyInput = {
    id?: string
    name: string
    grade_level: $Enums.GradeLevel
    teacher_id?: string | null
  }

  export type ClassroomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade_level?: EnumGradeLevelFieldUpdateOperationsInput | $Enums.GradeLevel
  }

  export type ClassroomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade_level?: EnumGradeLevelFieldUpdateOperationsInput | $Enums.GradeLevel
    teacher_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentApplicationCreateInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    created_at?: Date | string
    updated_at?: Date | string
    father?: ParentCreateNestedOneWithoutChildren_as_fatherInput
    mother?: ParentCreateNestedOneWithoutChildren_as_motherInput
    guardian?: GuardianCreateNestedOneWithoutStudentsInput
    medical_record?: MedicalRecordCreateNestedOneWithoutStudent_applicationsInput
    admission?: AdmissionCreateNestedOneWithoutStudentInput
  }

  export type StudentApplicationUncheckedCreateInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    father_id?: string | null
    mother_id?: string | null
    guardian_id?: string | null
    medical_record_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    admission?: AdmissionUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: ParentUpdateOneWithoutChildren_as_fatherNestedInput
    mother?: ParentUpdateOneWithoutChildren_as_motherNestedInput
    guardian?: GuardianUpdateOneWithoutStudentsNestedInput
    medical_record?: MedicalRecordUpdateOneWithoutStudent_applicationsNestedInput
    admission?: AdmissionUpdateOneWithoutStudentNestedInput
  }

  export type StudentApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    father_id?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_id?: NullableStringFieldUpdateOperationsInput | string | null
    medical_record_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: AdmissionUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type StudentApplicationCreateManyInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    father_id?: string | null
    mother_id?: string | null
    guardian_id?: string | null
    medical_record_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    father_id?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_id?: NullableStringFieldUpdateOperationsInput | string | null
    medical_record_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionCreateInput = {
    id?: string
    admission_type: $Enums.AdmissionType
    intended_grade_level: string
    status?: $Enums.AdmissionStatus
    created_at?: Date | string
    updated_at?: Date | string
    student: StudentApplicationCreateNestedOneWithoutAdmissionInput
    previous_school?: SchoolCreateNestedOneWithoutAdmissionsInput
  }

  export type AdmissionUncheckedCreateInput = {
    id?: string
    student_id: string
    admission_type: $Enums.AdmissionType
    intended_grade_level: string
    previous_school_id?: string | null
    status?: $Enums.AdmissionStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    admission_type?: EnumAdmissionTypeFieldUpdateOperationsInput | $Enums.AdmissionType
    intended_grade_level?: StringFieldUpdateOperationsInput | string
    status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentApplicationUpdateOneRequiredWithoutAdmissionNestedInput
    previous_school?: SchoolUpdateOneWithoutAdmissionsNestedInput
  }

  export type AdmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    admission_type?: EnumAdmissionTypeFieldUpdateOperationsInput | $Enums.AdmissionType
    intended_grade_level?: StringFieldUpdateOperationsInput | string
    previous_school_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionCreateManyInput = {
    id?: string
    student_id: string
    admission_type: $Enums.AdmissionType
    intended_grade_level: string
    previous_school_id?: string | null
    status?: $Enums.AdmissionStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    admission_type?: EnumAdmissionTypeFieldUpdateOperationsInput | $Enums.AdmissionType
    intended_grade_level?: StringFieldUpdateOperationsInput | string
    status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    admission_type?: EnumAdmissionTypeFieldUpdateOperationsInput | $Enums.AdmissionType
    intended_grade_level?: StringFieldUpdateOperationsInput | string
    previous_school_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParentCreateInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    occupation: string
    annual_income?: number | null
    children_as_father?: StudentApplicationCreateNestedManyWithoutFatherInput
    children_as_mother?: StudentApplicationCreateNestedManyWithoutMotherInput
  }

  export type ParentUncheckedCreateInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    occupation: string
    annual_income?: number | null
    children_as_father?: StudentApplicationUncheckedCreateNestedManyWithoutFatherInput
    children_as_mother?: StudentApplicationUncheckedCreateNestedManyWithoutMotherInput
  }

  export type ParentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    annual_income?: NullableFloatFieldUpdateOperationsInput | number | null
    children_as_father?: StudentApplicationUpdateManyWithoutFatherNestedInput
    children_as_mother?: StudentApplicationUpdateManyWithoutMotherNestedInput
  }

  export type ParentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    annual_income?: NullableFloatFieldUpdateOperationsInput | number | null
    children_as_father?: StudentApplicationUncheckedUpdateManyWithoutFatherNestedInput
    children_as_mother?: StudentApplicationUncheckedUpdateManyWithoutMotherNestedInput
  }

  export type ParentCreateManyInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    occupation: string
    annual_income?: number | null
  }

  export type ParentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    annual_income?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ParentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    annual_income?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type GuardianCreateInput = {
    id?: string
    name: string
    relation: string
    phone_number: string
    students?: StudentApplicationCreateNestedManyWithoutGuardianInput
  }

  export type GuardianUncheckedCreateInput = {
    id?: string
    name: string
    relation: string
    phone_number: string
    students?: StudentApplicationUncheckedCreateNestedManyWithoutGuardianInput
  }

  export type GuardianUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    students?: StudentApplicationUpdateManyWithoutGuardianNestedInput
  }

  export type GuardianUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    students?: StudentApplicationUncheckedUpdateManyWithoutGuardianNestedInput
  }

  export type GuardianCreateManyInput = {
    id?: string
    name: string
    relation: string
    phone_number: string
  }

  export type GuardianUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type GuardianUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalRecordCreateInput = {
    id?: string
    has_medical_condition?: boolean
    medical_condition?: string | null
    student_applications?: StudentApplicationCreateNestedManyWithoutMedical_recordInput
  }

  export type MedicalRecordUncheckedCreateInput = {
    id?: string
    has_medical_condition?: boolean
    medical_condition?: string | null
    student_applications?: StudentApplicationUncheckedCreateNestedManyWithoutMedical_recordInput
  }

  export type MedicalRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    has_medical_condition?: BoolFieldUpdateOperationsInput | boolean
    medical_condition?: NullableStringFieldUpdateOperationsInput | string | null
    student_applications?: StudentApplicationUpdateManyWithoutMedical_recordNestedInput
  }

  export type MedicalRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    has_medical_condition?: BoolFieldUpdateOperationsInput | boolean
    medical_condition?: NullableStringFieldUpdateOperationsInput | string | null
    student_applications?: StudentApplicationUncheckedUpdateManyWithoutMedical_recordNestedInput
  }

  export type MedicalRecordCreateManyInput = {
    id?: string
    has_medical_condition?: boolean
    medical_condition?: string | null
  }

  export type MedicalRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    has_medical_condition?: BoolFieldUpdateOperationsInput | boolean
    medical_condition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    has_medical_condition?: BoolFieldUpdateOperationsInput | boolean
    medical_condition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolCreateInput = {
    id?: string
    name: string
    address: string
    last_year_level?: string | null
    last_school_year?: string | null
    general_weighted_average?: number | null
    admissions?: AdmissionCreateNestedManyWithoutPrevious_schoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    last_year_level?: string | null
    last_school_year?: string | null
    general_weighted_average?: number | null
    admissions?: AdmissionUncheckedCreateNestedManyWithoutPrevious_schoolInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    last_year_level?: NullableStringFieldUpdateOperationsInput | string | null
    last_school_year?: NullableStringFieldUpdateOperationsInput | string | null
    general_weighted_average?: NullableFloatFieldUpdateOperationsInput | number | null
    admissions?: AdmissionUpdateManyWithoutPrevious_schoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    last_year_level?: NullableStringFieldUpdateOperationsInput | string | null
    last_school_year?: NullableStringFieldUpdateOperationsInput | string | null
    general_weighted_average?: NullableFloatFieldUpdateOperationsInput | number | null
    admissions?: AdmissionUncheckedUpdateManyWithoutPrevious_schoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    name: string
    address: string
    last_year_level?: string | null
    last_school_year?: string | null
    general_weighted_average?: number | null
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    last_year_level?: NullableStringFieldUpdateOperationsInput | string | null
    last_school_year?: NullableStringFieldUpdateOperationsInput | string | null
    general_weighted_average?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    last_year_level?: NullableStringFieldUpdateOperationsInput | string | null
    last_school_year?: NullableStringFieldUpdateOperationsInput | string | null
    general_weighted_average?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type ClassroomNullableScalarRelationFilter = {
    is?: ClassroomWhereInput | null
    isNot?: ClassroomWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherOrderByRelevanceInput = {
    fields: TeacherOrderByRelevanceFieldEnum | TeacherOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    role?: SortOrder
    date_of_birth?: SortOrder
    classroom_id?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    role?: SortOrder
    date_of_birth?: SortOrder
    classroom_id?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    role?: SortOrder
    date_of_birth?: SortOrder
    classroom_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClassroomScalarRelationFilter = {
    is?: ClassroomWhereInput
    isNot?: ClassroomWhereInput
  }

  export type StudentOrderByRelevanceInput = {
    fields: StudentOrderByRelevanceFieldEnum | StudentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone_number?: SortOrder
    date_of_birth?: SortOrder
    classroom_id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone_number?: SortOrder
    date_of_birth?: SortOrder
    classroom_id?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone_number?: SortOrder
    date_of_birth?: SortOrder
    classroom_id?: SortOrder
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type SubjectOrderByRelevanceInput = {
    fields: SubjectOrderByRelevanceFieldEnum | SubjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacher_id?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacher_id?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacher_id?: SortOrder
  }

  export type EnumGradeLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.GradeLevel | EnumGradeLevelFieldRefInput<$PrismaModel>
    in?: $Enums.GradeLevel[]
    notIn?: $Enums.GradeLevel[]
    not?: NestedEnumGradeLevelFilter<$PrismaModel> | $Enums.GradeLevel
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassroomOrderByRelevanceInput = {
    fields: ClassroomOrderByRelevanceFieldEnum | ClassroomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClassroomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    grade_level?: SortOrder
    teacher_id?: SortOrder
  }

  export type ClassroomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    grade_level?: SortOrder
    teacher_id?: SortOrder
  }

  export type ClassroomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    grade_level?: SortOrder
    teacher_id?: SortOrder
  }

  export type EnumGradeLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GradeLevel | EnumGradeLevelFieldRefInput<$PrismaModel>
    in?: $Enums.GradeLevel[]
    notIn?: $Enums.GradeLevel[]
    not?: NestedEnumGradeLevelWithAggregatesFilter<$PrismaModel> | $Enums.GradeLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradeLevelFilter<$PrismaModel>
    _max?: NestedEnumGradeLevelFilter<$PrismaModel>
  }

  export type EnumNameSuffixNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NameSuffix | EnumNameSuffixFieldRefInput<$PrismaModel> | null
    in?: $Enums.NameSuffix[] | null
    notIn?: $Enums.NameSuffix[] | null
    not?: NestedEnumNameSuffixNullableFilter<$PrismaModel> | $Enums.NameSuffix | null
  }

  export type EnumCivilStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CivilStatus | EnumCivilStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CivilStatus[] | null
    notIn?: $Enums.CivilStatus[] | null
    not?: NestedEnumCivilStatusNullableFilter<$PrismaModel> | $Enums.CivilStatus | null
  }

  export type ParentNullableScalarRelationFilter = {
    is?: ParentWhereInput | null
    isNot?: ParentWhereInput | null
  }

  export type GuardianNullableScalarRelationFilter = {
    is?: GuardianWhereInput | null
    isNot?: GuardianWhereInput | null
  }

  export type MedicalRecordNullableScalarRelationFilter = {
    is?: MedicalRecordWhereInput | null
    isNot?: MedicalRecordWhereInput | null
  }

  export type AdmissionNullableScalarRelationFilter = {
    is?: AdmissionWhereInput | null
    isNot?: AdmissionWhereInput | null
  }

  export type StudentApplicationOrderByRelevanceInput = {
    fields: StudentApplicationOrderByRelevanceFieldEnum | StudentApplicationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    suffix?: SortOrder
    gender?: SortOrder
    civil_status?: SortOrder
    date_of_birth?: SortOrder
    birth_place?: SortOrder
    nationality?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    tel_number?: SortOrder
    permanent_address?: SortOrder
    current_address?: SortOrder
    postal_code?: SortOrder
    father_id?: SortOrder
    mother_id?: SortOrder
    guardian_id?: SortOrder
    medical_record_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StudentApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    suffix?: SortOrder
    gender?: SortOrder
    civil_status?: SortOrder
    date_of_birth?: SortOrder
    birth_place?: SortOrder
    nationality?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    tel_number?: SortOrder
    permanent_address?: SortOrder
    current_address?: SortOrder
    postal_code?: SortOrder
    father_id?: SortOrder
    mother_id?: SortOrder
    guardian_id?: SortOrder
    medical_record_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StudentApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    suffix?: SortOrder
    gender?: SortOrder
    civil_status?: SortOrder
    date_of_birth?: SortOrder
    birth_place?: SortOrder
    nationality?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    tel_number?: SortOrder
    permanent_address?: SortOrder
    current_address?: SortOrder
    postal_code?: SortOrder
    father_id?: SortOrder
    mother_id?: SortOrder
    guardian_id?: SortOrder
    medical_record_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumNameSuffixNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NameSuffix | EnumNameSuffixFieldRefInput<$PrismaModel> | null
    in?: $Enums.NameSuffix[] | null
    notIn?: $Enums.NameSuffix[] | null
    not?: NestedEnumNameSuffixNullableWithAggregatesFilter<$PrismaModel> | $Enums.NameSuffix | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNameSuffixNullableFilter<$PrismaModel>
    _max?: NestedEnumNameSuffixNullableFilter<$PrismaModel>
  }

  export type EnumCivilStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CivilStatus | EnumCivilStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CivilStatus[] | null
    notIn?: $Enums.CivilStatus[] | null
    not?: NestedEnumCivilStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.CivilStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCivilStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumCivilStatusNullableFilter<$PrismaModel>
  }

  export type EnumAdmissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionType | EnumAdmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionType[]
    notIn?: $Enums.AdmissionType[]
    not?: NestedEnumAdmissionTypeFilter<$PrismaModel> | $Enums.AdmissionType
  }

  export type EnumAdmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionStatus | EnumAdmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionStatus[]
    notIn?: $Enums.AdmissionStatus[]
    not?: NestedEnumAdmissionStatusFilter<$PrismaModel> | $Enums.AdmissionStatus
  }

  export type StudentApplicationScalarRelationFilter = {
    is?: StudentApplicationWhereInput
    isNot?: StudentApplicationWhereInput
  }

  export type SchoolNullableScalarRelationFilter = {
    is?: SchoolWhereInput | null
    isNot?: SchoolWhereInput | null
  }

  export type AdmissionOrderByRelevanceInput = {
    fields: AdmissionOrderByRelevanceFieldEnum | AdmissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdmissionCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    admission_type?: SortOrder
    intended_grade_level?: SortOrder
    previous_school_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    admission_type?: SortOrder
    intended_grade_level?: SortOrder
    previous_school_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdmissionMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    admission_type?: SortOrder
    intended_grade_level?: SortOrder
    previous_school_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumAdmissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionType | EnumAdmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionType[]
    notIn?: $Enums.AdmissionType[]
    not?: NestedEnumAdmissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.AdmissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdmissionTypeFilter<$PrismaModel>
    _max?: NestedEnumAdmissionTypeFilter<$PrismaModel>
  }

  export type EnumAdmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionStatus | EnumAdmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionStatus[]
    notIn?: $Enums.AdmissionStatus[]
    not?: NestedEnumAdmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumAdmissionStatusFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StudentApplicationListRelationFilter = {
    every?: StudentApplicationWhereInput
    some?: StudentApplicationWhereInput
    none?: StudentApplicationWhereInput
  }

  export type StudentApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParentOrderByRelevanceInput = {
    fields: ParentOrderByRelevanceFieldEnum | ParentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ParentCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    occupation?: SortOrder
    annual_income?: SortOrder
  }

  export type ParentAvgOrderByAggregateInput = {
    annual_income?: SortOrder
  }

  export type ParentMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    occupation?: SortOrder
    annual_income?: SortOrder
  }

  export type ParentMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    occupation?: SortOrder
    annual_income?: SortOrder
  }

  export type ParentSumOrderByAggregateInput = {
    annual_income?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type GuardianOrderByRelevanceInput = {
    fields: GuardianOrderByRelevanceFieldEnum | GuardianOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GuardianCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phone_number?: SortOrder
  }

  export type GuardianMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phone_number?: SortOrder
  }

  export type GuardianMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phone_number?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MedicalRecordOrderByRelevanceInput = {
    fields: MedicalRecordOrderByRelevanceFieldEnum | MedicalRecordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MedicalRecordCountOrderByAggregateInput = {
    id?: SortOrder
    has_medical_condition?: SortOrder
    medical_condition?: SortOrder
  }

  export type MedicalRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    has_medical_condition?: SortOrder
    medical_condition?: SortOrder
  }

  export type MedicalRecordMinOrderByAggregateInput = {
    id?: SortOrder
    has_medical_condition?: SortOrder
    medical_condition?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AdmissionListRelationFilter = {
    every?: AdmissionWhereInput
    some?: AdmissionWhereInput
    none?: AdmissionWhereInput
  }

  export type AdmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolOrderByRelevanceInput = {
    fields: SchoolOrderByRelevanceFieldEnum | SchoolOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    last_year_level?: SortOrder
    last_school_year?: SortOrder
    general_weighted_average?: SortOrder
  }

  export type SchoolAvgOrderByAggregateInput = {
    general_weighted_average?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    last_year_level?: SortOrder
    last_school_year?: SortOrder
    general_weighted_average?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    last_year_level?: SortOrder
    last_school_year?: SortOrder
    general_weighted_average?: SortOrder
  }

  export type SchoolSumOrderByAggregateInput = {
    general_weighted_average?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type SubjectCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type ClassroomCreateNestedOneWithoutTeacherInput = {
    create?: XOR<ClassroomCreateWithoutTeacherInput, ClassroomUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutTeacherInput
    connect?: ClassroomWhereUniqueInput
  }

  export type SubjectUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type ClassroomUncheckedCreateNestedOneWithoutTeacherInput = {
    create?: XOR<ClassroomCreateWithoutTeacherInput, ClassroomUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutTeacherInput
    connect?: ClassroomWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubjectUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutTeacherInput | SubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutTeacherInput | SubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutTeacherInput | SubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type ClassroomUpdateOneWithoutTeacherNestedInput = {
    create?: XOR<ClassroomCreateWithoutTeacherInput, ClassroomUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutTeacherInput
    upsert?: ClassroomUpsertWithoutTeacherInput
    disconnect?: ClassroomWhereInput | boolean
    delete?: ClassroomWhereInput | boolean
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutTeacherInput, ClassroomUpdateWithoutTeacherInput>, ClassroomUncheckedUpdateWithoutTeacherInput>
  }

  export type SubjectUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutTeacherInput | SubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutTeacherInput | SubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutTeacherInput | SubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type ClassroomUncheckedUpdateOneWithoutTeacherNestedInput = {
    create?: XOR<ClassroomCreateWithoutTeacherInput, ClassroomUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutTeacherInput
    upsert?: ClassroomUpsertWithoutTeacherInput
    disconnect?: ClassroomWhereInput | boolean
    delete?: ClassroomWhereInput | boolean
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutTeacherInput, ClassroomUpdateWithoutTeacherInput>, ClassroomUncheckedUpdateWithoutTeacherInput>
  }

  export type ClassroomCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ClassroomCreateWithoutStudentsInput, ClassroomUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutStudentsInput
    connect?: ClassroomWhereUniqueInput
  }

  export type ClassroomUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<ClassroomCreateWithoutStudentsInput, ClassroomUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassroomCreateOrConnectWithoutStudentsInput
    upsert?: ClassroomUpsertWithoutStudentsInput
    connect?: ClassroomWhereUniqueInput
    update?: XOR<XOR<ClassroomUpdateToOneWithWhereWithoutStudentsInput, ClassroomUpdateWithoutStudentsInput>, ClassroomUncheckedUpdateWithoutStudentsInput>
  }

  export type TeacherCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectsInput
    connect?: TeacherWhereUniqueInput
  }

  export type TeacherUpdateOneWithoutSubjectsNestedInput = {
    create?: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectsInput
    upsert?: TeacherUpsertWithoutSubjectsInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutSubjectsInput, TeacherUpdateWithoutSubjectsInput>, TeacherUncheckedUpdateWithoutSubjectsInput>
  }

  export type TeacherCreateNestedOneWithoutClassroomInput = {
    create?: XOR<TeacherCreateWithoutClassroomInput, TeacherUncheckedCreateWithoutClassroomInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutClassroomInput
    connect?: TeacherWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutClassroomInput = {
    create?: XOR<StudentCreateWithoutClassroomInput, StudentUncheckedCreateWithoutClassroomInput> | StudentCreateWithoutClassroomInput[] | StudentUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassroomInput | StudentCreateOrConnectWithoutClassroomInput[]
    createMany?: StudentCreateManyClassroomInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutClassroomInput = {
    create?: XOR<StudentCreateWithoutClassroomInput, StudentUncheckedCreateWithoutClassroomInput> | StudentCreateWithoutClassroomInput[] | StudentUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassroomInput | StudentCreateOrConnectWithoutClassroomInput[]
    createMany?: StudentCreateManyClassroomInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type EnumGradeLevelFieldUpdateOperationsInput = {
    set?: $Enums.GradeLevel
  }

  export type TeacherUpdateOneWithoutClassroomNestedInput = {
    create?: XOR<TeacherCreateWithoutClassroomInput, TeacherUncheckedCreateWithoutClassroomInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutClassroomInput
    upsert?: TeacherUpsertWithoutClassroomInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutClassroomInput, TeacherUpdateWithoutClassroomInput>, TeacherUncheckedUpdateWithoutClassroomInput>
  }

  export type StudentUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<StudentCreateWithoutClassroomInput, StudentUncheckedCreateWithoutClassroomInput> | StudentCreateWithoutClassroomInput[] | StudentUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassroomInput | StudentCreateOrConnectWithoutClassroomInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClassroomInput | StudentUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: StudentCreateManyClassroomInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClassroomInput | StudentUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClassroomInput | StudentUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutClassroomNestedInput = {
    create?: XOR<StudentCreateWithoutClassroomInput, StudentUncheckedCreateWithoutClassroomInput> | StudentCreateWithoutClassroomInput[] | StudentUncheckedCreateWithoutClassroomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassroomInput | StudentCreateOrConnectWithoutClassroomInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClassroomInput | StudentUpsertWithWhereUniqueWithoutClassroomInput[]
    createMany?: StudentCreateManyClassroomInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClassroomInput | StudentUpdateWithWhereUniqueWithoutClassroomInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClassroomInput | StudentUpdateManyWithWhereWithoutClassroomInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type ParentCreateNestedOneWithoutChildren_as_fatherInput = {
    create?: XOR<ParentCreateWithoutChildren_as_fatherInput, ParentUncheckedCreateWithoutChildren_as_fatherInput>
    connectOrCreate?: ParentCreateOrConnectWithoutChildren_as_fatherInput
    connect?: ParentWhereUniqueInput
  }

  export type ParentCreateNestedOneWithoutChildren_as_motherInput = {
    create?: XOR<ParentCreateWithoutChildren_as_motherInput, ParentUncheckedCreateWithoutChildren_as_motherInput>
    connectOrCreate?: ParentCreateOrConnectWithoutChildren_as_motherInput
    connect?: ParentWhereUniqueInput
  }

  export type GuardianCreateNestedOneWithoutStudentsInput = {
    create?: XOR<GuardianCreateWithoutStudentsInput, GuardianUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: GuardianCreateOrConnectWithoutStudentsInput
    connect?: GuardianWhereUniqueInput
  }

  export type MedicalRecordCreateNestedOneWithoutStudent_applicationsInput = {
    create?: XOR<MedicalRecordCreateWithoutStudent_applicationsInput, MedicalRecordUncheckedCreateWithoutStudent_applicationsInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutStudent_applicationsInput
    connect?: MedicalRecordWhereUniqueInput
  }

  export type AdmissionCreateNestedOneWithoutStudentInput = {
    create?: XOR<AdmissionCreateWithoutStudentInput, AdmissionUncheckedCreateWithoutStudentInput>
    connectOrCreate?: AdmissionCreateOrConnectWithoutStudentInput
    connect?: AdmissionWhereUniqueInput
  }

  export type AdmissionUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<AdmissionCreateWithoutStudentInput, AdmissionUncheckedCreateWithoutStudentInput>
    connectOrCreate?: AdmissionCreateOrConnectWithoutStudentInput
    connect?: AdmissionWhereUniqueInput
  }

  export type NullableEnumNameSuffixFieldUpdateOperationsInput = {
    set?: $Enums.NameSuffix | null
  }

  export type NullableEnumCivilStatusFieldUpdateOperationsInput = {
    set?: $Enums.CivilStatus | null
  }

  export type ParentUpdateOneWithoutChildren_as_fatherNestedInput = {
    create?: XOR<ParentCreateWithoutChildren_as_fatherInput, ParentUncheckedCreateWithoutChildren_as_fatherInput>
    connectOrCreate?: ParentCreateOrConnectWithoutChildren_as_fatherInput
    upsert?: ParentUpsertWithoutChildren_as_fatherInput
    disconnect?: ParentWhereInput | boolean
    delete?: ParentWhereInput | boolean
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutChildren_as_fatherInput, ParentUpdateWithoutChildren_as_fatherInput>, ParentUncheckedUpdateWithoutChildren_as_fatherInput>
  }

  export type ParentUpdateOneWithoutChildren_as_motherNestedInput = {
    create?: XOR<ParentCreateWithoutChildren_as_motherInput, ParentUncheckedCreateWithoutChildren_as_motherInput>
    connectOrCreate?: ParentCreateOrConnectWithoutChildren_as_motherInput
    upsert?: ParentUpsertWithoutChildren_as_motherInput
    disconnect?: ParentWhereInput | boolean
    delete?: ParentWhereInput | boolean
    connect?: ParentWhereUniqueInput
    update?: XOR<XOR<ParentUpdateToOneWithWhereWithoutChildren_as_motherInput, ParentUpdateWithoutChildren_as_motherInput>, ParentUncheckedUpdateWithoutChildren_as_motherInput>
  }

  export type GuardianUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<GuardianCreateWithoutStudentsInput, GuardianUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: GuardianCreateOrConnectWithoutStudentsInput
    upsert?: GuardianUpsertWithoutStudentsInput
    disconnect?: GuardianWhereInput | boolean
    delete?: GuardianWhereInput | boolean
    connect?: GuardianWhereUniqueInput
    update?: XOR<XOR<GuardianUpdateToOneWithWhereWithoutStudentsInput, GuardianUpdateWithoutStudentsInput>, GuardianUncheckedUpdateWithoutStudentsInput>
  }

  export type MedicalRecordUpdateOneWithoutStudent_applicationsNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutStudent_applicationsInput, MedicalRecordUncheckedCreateWithoutStudent_applicationsInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutStudent_applicationsInput
    upsert?: MedicalRecordUpsertWithoutStudent_applicationsInput
    disconnect?: MedicalRecordWhereInput | boolean
    delete?: MedicalRecordWhereInput | boolean
    connect?: MedicalRecordWhereUniqueInput
    update?: XOR<XOR<MedicalRecordUpdateToOneWithWhereWithoutStudent_applicationsInput, MedicalRecordUpdateWithoutStudent_applicationsInput>, MedicalRecordUncheckedUpdateWithoutStudent_applicationsInput>
  }

  export type AdmissionUpdateOneWithoutStudentNestedInput = {
    create?: XOR<AdmissionCreateWithoutStudentInput, AdmissionUncheckedCreateWithoutStudentInput>
    connectOrCreate?: AdmissionCreateOrConnectWithoutStudentInput
    upsert?: AdmissionUpsertWithoutStudentInput
    disconnect?: AdmissionWhereInput | boolean
    delete?: AdmissionWhereInput | boolean
    connect?: AdmissionWhereUniqueInput
    update?: XOR<XOR<AdmissionUpdateToOneWithWhereWithoutStudentInput, AdmissionUpdateWithoutStudentInput>, AdmissionUncheckedUpdateWithoutStudentInput>
  }

  export type AdmissionUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<AdmissionCreateWithoutStudentInput, AdmissionUncheckedCreateWithoutStudentInput>
    connectOrCreate?: AdmissionCreateOrConnectWithoutStudentInput
    upsert?: AdmissionUpsertWithoutStudentInput
    disconnect?: AdmissionWhereInput | boolean
    delete?: AdmissionWhereInput | boolean
    connect?: AdmissionWhereUniqueInput
    update?: XOR<XOR<AdmissionUpdateToOneWithWhereWithoutStudentInput, AdmissionUpdateWithoutStudentInput>, AdmissionUncheckedUpdateWithoutStudentInput>
  }

  export type StudentApplicationCreateNestedOneWithoutAdmissionInput = {
    create?: XOR<StudentApplicationCreateWithoutAdmissionInput, StudentApplicationUncheckedCreateWithoutAdmissionInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutAdmissionInput
    connect?: StudentApplicationWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutAdmissionsInput = {
    create?: XOR<SchoolCreateWithoutAdmissionsInput, SchoolUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutAdmissionsInput
    connect?: SchoolWhereUniqueInput
  }

  export type EnumAdmissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.AdmissionType
  }

  export type EnumAdmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.AdmissionStatus
  }

  export type StudentApplicationUpdateOneRequiredWithoutAdmissionNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutAdmissionInput, StudentApplicationUncheckedCreateWithoutAdmissionInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutAdmissionInput
    upsert?: StudentApplicationUpsertWithoutAdmissionInput
    connect?: StudentApplicationWhereUniqueInput
    update?: XOR<XOR<StudentApplicationUpdateToOneWithWhereWithoutAdmissionInput, StudentApplicationUpdateWithoutAdmissionInput>, StudentApplicationUncheckedUpdateWithoutAdmissionInput>
  }

  export type SchoolUpdateOneWithoutAdmissionsNestedInput = {
    create?: XOR<SchoolCreateWithoutAdmissionsInput, SchoolUncheckedCreateWithoutAdmissionsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutAdmissionsInput
    upsert?: SchoolUpsertWithoutAdmissionsInput
    disconnect?: SchoolWhereInput | boolean
    delete?: SchoolWhereInput | boolean
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutAdmissionsInput, SchoolUpdateWithoutAdmissionsInput>, SchoolUncheckedUpdateWithoutAdmissionsInput>
  }

  export type StudentApplicationCreateNestedManyWithoutFatherInput = {
    create?: XOR<StudentApplicationCreateWithoutFatherInput, StudentApplicationUncheckedCreateWithoutFatherInput> | StudentApplicationCreateWithoutFatherInput[] | StudentApplicationUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutFatherInput | StudentApplicationCreateOrConnectWithoutFatherInput[]
    createMany?: StudentApplicationCreateManyFatherInputEnvelope
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
  }

  export type StudentApplicationCreateNestedManyWithoutMotherInput = {
    create?: XOR<StudentApplicationCreateWithoutMotherInput, StudentApplicationUncheckedCreateWithoutMotherInput> | StudentApplicationCreateWithoutMotherInput[] | StudentApplicationUncheckedCreateWithoutMotherInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutMotherInput | StudentApplicationCreateOrConnectWithoutMotherInput[]
    createMany?: StudentApplicationCreateManyMotherInputEnvelope
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
  }

  export type StudentApplicationUncheckedCreateNestedManyWithoutFatherInput = {
    create?: XOR<StudentApplicationCreateWithoutFatherInput, StudentApplicationUncheckedCreateWithoutFatherInput> | StudentApplicationCreateWithoutFatherInput[] | StudentApplicationUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutFatherInput | StudentApplicationCreateOrConnectWithoutFatherInput[]
    createMany?: StudentApplicationCreateManyFatherInputEnvelope
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
  }

  export type StudentApplicationUncheckedCreateNestedManyWithoutMotherInput = {
    create?: XOR<StudentApplicationCreateWithoutMotherInput, StudentApplicationUncheckedCreateWithoutMotherInput> | StudentApplicationCreateWithoutMotherInput[] | StudentApplicationUncheckedCreateWithoutMotherInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutMotherInput | StudentApplicationCreateOrConnectWithoutMotherInput[]
    createMany?: StudentApplicationCreateManyMotherInputEnvelope
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentApplicationUpdateManyWithoutFatherNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutFatherInput, StudentApplicationUncheckedCreateWithoutFatherInput> | StudentApplicationCreateWithoutFatherInput[] | StudentApplicationUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutFatherInput | StudentApplicationCreateOrConnectWithoutFatherInput[]
    upsert?: StudentApplicationUpsertWithWhereUniqueWithoutFatherInput | StudentApplicationUpsertWithWhereUniqueWithoutFatherInput[]
    createMany?: StudentApplicationCreateManyFatherInputEnvelope
    set?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    disconnect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    delete?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    update?: StudentApplicationUpdateWithWhereUniqueWithoutFatherInput | StudentApplicationUpdateWithWhereUniqueWithoutFatherInput[]
    updateMany?: StudentApplicationUpdateManyWithWhereWithoutFatherInput | StudentApplicationUpdateManyWithWhereWithoutFatherInput[]
    deleteMany?: StudentApplicationScalarWhereInput | StudentApplicationScalarWhereInput[]
  }

  export type StudentApplicationUpdateManyWithoutMotherNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutMotherInput, StudentApplicationUncheckedCreateWithoutMotherInput> | StudentApplicationCreateWithoutMotherInput[] | StudentApplicationUncheckedCreateWithoutMotherInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutMotherInput | StudentApplicationCreateOrConnectWithoutMotherInput[]
    upsert?: StudentApplicationUpsertWithWhereUniqueWithoutMotherInput | StudentApplicationUpsertWithWhereUniqueWithoutMotherInput[]
    createMany?: StudentApplicationCreateManyMotherInputEnvelope
    set?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    disconnect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    delete?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    update?: StudentApplicationUpdateWithWhereUniqueWithoutMotherInput | StudentApplicationUpdateWithWhereUniqueWithoutMotherInput[]
    updateMany?: StudentApplicationUpdateManyWithWhereWithoutMotherInput | StudentApplicationUpdateManyWithWhereWithoutMotherInput[]
    deleteMany?: StudentApplicationScalarWhereInput | StudentApplicationScalarWhereInput[]
  }

  export type StudentApplicationUncheckedUpdateManyWithoutFatherNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutFatherInput, StudentApplicationUncheckedCreateWithoutFatherInput> | StudentApplicationCreateWithoutFatherInput[] | StudentApplicationUncheckedCreateWithoutFatherInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutFatherInput | StudentApplicationCreateOrConnectWithoutFatherInput[]
    upsert?: StudentApplicationUpsertWithWhereUniqueWithoutFatherInput | StudentApplicationUpsertWithWhereUniqueWithoutFatherInput[]
    createMany?: StudentApplicationCreateManyFatherInputEnvelope
    set?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    disconnect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    delete?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    update?: StudentApplicationUpdateWithWhereUniqueWithoutFatherInput | StudentApplicationUpdateWithWhereUniqueWithoutFatherInput[]
    updateMany?: StudentApplicationUpdateManyWithWhereWithoutFatherInput | StudentApplicationUpdateManyWithWhereWithoutFatherInput[]
    deleteMany?: StudentApplicationScalarWhereInput | StudentApplicationScalarWhereInput[]
  }

  export type StudentApplicationUncheckedUpdateManyWithoutMotherNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutMotherInput, StudentApplicationUncheckedCreateWithoutMotherInput> | StudentApplicationCreateWithoutMotherInput[] | StudentApplicationUncheckedCreateWithoutMotherInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutMotherInput | StudentApplicationCreateOrConnectWithoutMotherInput[]
    upsert?: StudentApplicationUpsertWithWhereUniqueWithoutMotherInput | StudentApplicationUpsertWithWhereUniqueWithoutMotherInput[]
    createMany?: StudentApplicationCreateManyMotherInputEnvelope
    set?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    disconnect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    delete?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    update?: StudentApplicationUpdateWithWhereUniqueWithoutMotherInput | StudentApplicationUpdateWithWhereUniqueWithoutMotherInput[]
    updateMany?: StudentApplicationUpdateManyWithWhereWithoutMotherInput | StudentApplicationUpdateManyWithWhereWithoutMotherInput[]
    deleteMany?: StudentApplicationScalarWhereInput | StudentApplicationScalarWhereInput[]
  }

  export type StudentApplicationCreateNestedManyWithoutGuardianInput = {
    create?: XOR<StudentApplicationCreateWithoutGuardianInput, StudentApplicationUncheckedCreateWithoutGuardianInput> | StudentApplicationCreateWithoutGuardianInput[] | StudentApplicationUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutGuardianInput | StudentApplicationCreateOrConnectWithoutGuardianInput[]
    createMany?: StudentApplicationCreateManyGuardianInputEnvelope
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
  }

  export type StudentApplicationUncheckedCreateNestedManyWithoutGuardianInput = {
    create?: XOR<StudentApplicationCreateWithoutGuardianInput, StudentApplicationUncheckedCreateWithoutGuardianInput> | StudentApplicationCreateWithoutGuardianInput[] | StudentApplicationUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutGuardianInput | StudentApplicationCreateOrConnectWithoutGuardianInput[]
    createMany?: StudentApplicationCreateManyGuardianInputEnvelope
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
  }

  export type StudentApplicationUpdateManyWithoutGuardianNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutGuardianInput, StudentApplicationUncheckedCreateWithoutGuardianInput> | StudentApplicationCreateWithoutGuardianInput[] | StudentApplicationUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutGuardianInput | StudentApplicationCreateOrConnectWithoutGuardianInput[]
    upsert?: StudentApplicationUpsertWithWhereUniqueWithoutGuardianInput | StudentApplicationUpsertWithWhereUniqueWithoutGuardianInput[]
    createMany?: StudentApplicationCreateManyGuardianInputEnvelope
    set?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    disconnect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    delete?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    update?: StudentApplicationUpdateWithWhereUniqueWithoutGuardianInput | StudentApplicationUpdateWithWhereUniqueWithoutGuardianInput[]
    updateMany?: StudentApplicationUpdateManyWithWhereWithoutGuardianInput | StudentApplicationUpdateManyWithWhereWithoutGuardianInput[]
    deleteMany?: StudentApplicationScalarWhereInput | StudentApplicationScalarWhereInput[]
  }

  export type StudentApplicationUncheckedUpdateManyWithoutGuardianNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutGuardianInput, StudentApplicationUncheckedCreateWithoutGuardianInput> | StudentApplicationCreateWithoutGuardianInput[] | StudentApplicationUncheckedCreateWithoutGuardianInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutGuardianInput | StudentApplicationCreateOrConnectWithoutGuardianInput[]
    upsert?: StudentApplicationUpsertWithWhereUniqueWithoutGuardianInput | StudentApplicationUpsertWithWhereUniqueWithoutGuardianInput[]
    createMany?: StudentApplicationCreateManyGuardianInputEnvelope
    set?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    disconnect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    delete?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    update?: StudentApplicationUpdateWithWhereUniqueWithoutGuardianInput | StudentApplicationUpdateWithWhereUniqueWithoutGuardianInput[]
    updateMany?: StudentApplicationUpdateManyWithWhereWithoutGuardianInput | StudentApplicationUpdateManyWithWhereWithoutGuardianInput[]
    deleteMany?: StudentApplicationScalarWhereInput | StudentApplicationScalarWhereInput[]
  }

  export type StudentApplicationCreateNestedManyWithoutMedical_recordInput = {
    create?: XOR<StudentApplicationCreateWithoutMedical_recordInput, StudentApplicationUncheckedCreateWithoutMedical_recordInput> | StudentApplicationCreateWithoutMedical_recordInput[] | StudentApplicationUncheckedCreateWithoutMedical_recordInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutMedical_recordInput | StudentApplicationCreateOrConnectWithoutMedical_recordInput[]
    createMany?: StudentApplicationCreateManyMedical_recordInputEnvelope
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
  }

  export type StudentApplicationUncheckedCreateNestedManyWithoutMedical_recordInput = {
    create?: XOR<StudentApplicationCreateWithoutMedical_recordInput, StudentApplicationUncheckedCreateWithoutMedical_recordInput> | StudentApplicationCreateWithoutMedical_recordInput[] | StudentApplicationUncheckedCreateWithoutMedical_recordInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutMedical_recordInput | StudentApplicationCreateOrConnectWithoutMedical_recordInput[]
    createMany?: StudentApplicationCreateManyMedical_recordInputEnvelope
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StudentApplicationUpdateManyWithoutMedical_recordNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutMedical_recordInput, StudentApplicationUncheckedCreateWithoutMedical_recordInput> | StudentApplicationCreateWithoutMedical_recordInput[] | StudentApplicationUncheckedCreateWithoutMedical_recordInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutMedical_recordInput | StudentApplicationCreateOrConnectWithoutMedical_recordInput[]
    upsert?: StudentApplicationUpsertWithWhereUniqueWithoutMedical_recordInput | StudentApplicationUpsertWithWhereUniqueWithoutMedical_recordInput[]
    createMany?: StudentApplicationCreateManyMedical_recordInputEnvelope
    set?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    disconnect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    delete?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    update?: StudentApplicationUpdateWithWhereUniqueWithoutMedical_recordInput | StudentApplicationUpdateWithWhereUniqueWithoutMedical_recordInput[]
    updateMany?: StudentApplicationUpdateManyWithWhereWithoutMedical_recordInput | StudentApplicationUpdateManyWithWhereWithoutMedical_recordInput[]
    deleteMany?: StudentApplicationScalarWhereInput | StudentApplicationScalarWhereInput[]
  }

  export type StudentApplicationUncheckedUpdateManyWithoutMedical_recordNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutMedical_recordInput, StudentApplicationUncheckedCreateWithoutMedical_recordInput> | StudentApplicationCreateWithoutMedical_recordInput[] | StudentApplicationUncheckedCreateWithoutMedical_recordInput[]
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutMedical_recordInput | StudentApplicationCreateOrConnectWithoutMedical_recordInput[]
    upsert?: StudentApplicationUpsertWithWhereUniqueWithoutMedical_recordInput | StudentApplicationUpsertWithWhereUniqueWithoutMedical_recordInput[]
    createMany?: StudentApplicationCreateManyMedical_recordInputEnvelope
    set?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    disconnect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    delete?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    connect?: StudentApplicationWhereUniqueInput | StudentApplicationWhereUniqueInput[]
    update?: StudentApplicationUpdateWithWhereUniqueWithoutMedical_recordInput | StudentApplicationUpdateWithWhereUniqueWithoutMedical_recordInput[]
    updateMany?: StudentApplicationUpdateManyWithWhereWithoutMedical_recordInput | StudentApplicationUpdateManyWithWhereWithoutMedical_recordInput[]
    deleteMany?: StudentApplicationScalarWhereInput | StudentApplicationScalarWhereInput[]
  }

  export type AdmissionCreateNestedManyWithoutPrevious_schoolInput = {
    create?: XOR<AdmissionCreateWithoutPrevious_schoolInput, AdmissionUncheckedCreateWithoutPrevious_schoolInput> | AdmissionCreateWithoutPrevious_schoolInput[] | AdmissionUncheckedCreateWithoutPrevious_schoolInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutPrevious_schoolInput | AdmissionCreateOrConnectWithoutPrevious_schoolInput[]
    createMany?: AdmissionCreateManyPrevious_schoolInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type AdmissionUncheckedCreateNestedManyWithoutPrevious_schoolInput = {
    create?: XOR<AdmissionCreateWithoutPrevious_schoolInput, AdmissionUncheckedCreateWithoutPrevious_schoolInput> | AdmissionCreateWithoutPrevious_schoolInput[] | AdmissionUncheckedCreateWithoutPrevious_schoolInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutPrevious_schoolInput | AdmissionCreateOrConnectWithoutPrevious_schoolInput[]
    createMany?: AdmissionCreateManyPrevious_schoolInputEnvelope
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
  }

  export type AdmissionUpdateManyWithoutPrevious_schoolNestedInput = {
    create?: XOR<AdmissionCreateWithoutPrevious_schoolInput, AdmissionUncheckedCreateWithoutPrevious_schoolInput> | AdmissionCreateWithoutPrevious_schoolInput[] | AdmissionUncheckedCreateWithoutPrevious_schoolInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutPrevious_schoolInput | AdmissionCreateOrConnectWithoutPrevious_schoolInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutPrevious_schoolInput | AdmissionUpsertWithWhereUniqueWithoutPrevious_schoolInput[]
    createMany?: AdmissionCreateManyPrevious_schoolInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutPrevious_schoolInput | AdmissionUpdateWithWhereUniqueWithoutPrevious_schoolInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutPrevious_schoolInput | AdmissionUpdateManyWithWhereWithoutPrevious_schoolInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type AdmissionUncheckedUpdateManyWithoutPrevious_schoolNestedInput = {
    create?: XOR<AdmissionCreateWithoutPrevious_schoolInput, AdmissionUncheckedCreateWithoutPrevious_schoolInput> | AdmissionCreateWithoutPrevious_schoolInput[] | AdmissionUncheckedCreateWithoutPrevious_schoolInput[]
    connectOrCreate?: AdmissionCreateOrConnectWithoutPrevious_schoolInput | AdmissionCreateOrConnectWithoutPrevious_schoolInput[]
    upsert?: AdmissionUpsertWithWhereUniqueWithoutPrevious_schoolInput | AdmissionUpsertWithWhereUniqueWithoutPrevious_schoolInput[]
    createMany?: AdmissionCreateManyPrevious_schoolInputEnvelope
    set?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    disconnect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    delete?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    connect?: AdmissionWhereUniqueInput | AdmissionWhereUniqueInput[]
    update?: AdmissionUpdateWithWhereUniqueWithoutPrevious_schoolInput | AdmissionUpdateWithWhereUniqueWithoutPrevious_schoolInput[]
    updateMany?: AdmissionUpdateManyWithWhereWithoutPrevious_schoolInput | AdmissionUpdateManyWithWhereWithoutPrevious_schoolInput[]
    deleteMany?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGradeLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.GradeLevel | EnumGradeLevelFieldRefInput<$PrismaModel>
    in?: $Enums.GradeLevel[]
    notIn?: $Enums.GradeLevel[]
    not?: NestedEnumGradeLevelFilter<$PrismaModel> | $Enums.GradeLevel
  }

  export type NestedEnumGradeLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GradeLevel | EnumGradeLevelFieldRefInput<$PrismaModel>
    in?: $Enums.GradeLevel[]
    notIn?: $Enums.GradeLevel[]
    not?: NestedEnumGradeLevelWithAggregatesFilter<$PrismaModel> | $Enums.GradeLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGradeLevelFilter<$PrismaModel>
    _max?: NestedEnumGradeLevelFilter<$PrismaModel>
  }

  export type NestedEnumNameSuffixNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NameSuffix | EnumNameSuffixFieldRefInput<$PrismaModel> | null
    in?: $Enums.NameSuffix[] | null
    notIn?: $Enums.NameSuffix[] | null
    not?: NestedEnumNameSuffixNullableFilter<$PrismaModel> | $Enums.NameSuffix | null
  }

  export type NestedEnumCivilStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CivilStatus | EnumCivilStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CivilStatus[] | null
    notIn?: $Enums.CivilStatus[] | null
    not?: NestedEnumCivilStatusNullableFilter<$PrismaModel> | $Enums.CivilStatus | null
  }

  export type NestedEnumNameSuffixNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NameSuffix | EnumNameSuffixFieldRefInput<$PrismaModel> | null
    in?: $Enums.NameSuffix[] | null
    notIn?: $Enums.NameSuffix[] | null
    not?: NestedEnumNameSuffixNullableWithAggregatesFilter<$PrismaModel> | $Enums.NameSuffix | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNameSuffixNullableFilter<$PrismaModel>
    _max?: NestedEnumNameSuffixNullableFilter<$PrismaModel>
  }

  export type NestedEnumCivilStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CivilStatus | EnumCivilStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CivilStatus[] | null
    notIn?: $Enums.CivilStatus[] | null
    not?: NestedEnumCivilStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.CivilStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCivilStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumCivilStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumAdmissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionType | EnumAdmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionType[]
    notIn?: $Enums.AdmissionType[]
    not?: NestedEnumAdmissionTypeFilter<$PrismaModel> | $Enums.AdmissionType
  }

  export type NestedEnumAdmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionStatus | EnumAdmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionStatus[]
    notIn?: $Enums.AdmissionStatus[]
    not?: NestedEnumAdmissionStatusFilter<$PrismaModel> | $Enums.AdmissionStatus
  }

  export type NestedEnumAdmissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionType | EnumAdmissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionType[]
    notIn?: $Enums.AdmissionType[]
    not?: NestedEnumAdmissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.AdmissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdmissionTypeFilter<$PrismaModel>
    _max?: NestedEnumAdmissionTypeFilter<$PrismaModel>
  }

  export type NestedEnumAdmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdmissionStatus | EnumAdmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdmissionStatus[]
    notIn?: $Enums.AdmissionStatus[]
    not?: NestedEnumAdmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumAdmissionStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SubjectCreateWithoutTeacherInput = {
    id?: string
    name: string
  }

  export type SubjectUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
  }

  export type SubjectCreateOrConnectWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput>
  }

  export type SubjectCreateManyTeacherInputEnvelope = {
    data: SubjectCreateManyTeacherInput | SubjectCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ClassroomCreateWithoutTeacherInput = {
    id?: string
    name: string
    grade_level: $Enums.GradeLevel
    students?: StudentCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    grade_level: $Enums.GradeLevel
    students?: StudentUncheckedCreateNestedManyWithoutClassroomInput
  }

  export type ClassroomCreateOrConnectWithoutTeacherInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutTeacherInput, ClassroomUncheckedCreateWithoutTeacherInput>
  }

  export type SubjectUpsertWithWhereUniqueWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutTeacherInput, SubjectUncheckedUpdateWithoutTeacherInput>
    create: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutTeacherInput, SubjectUncheckedUpdateWithoutTeacherInput>
  }

  export type SubjectUpdateManyWithWhereWithoutTeacherInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutTeacherInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    teacher_id?: StringNullableFilter<"Subject"> | string | null
  }

  export type ClassroomUpsertWithoutTeacherInput = {
    update: XOR<ClassroomUpdateWithoutTeacherInput, ClassroomUncheckedUpdateWithoutTeacherInput>
    create: XOR<ClassroomCreateWithoutTeacherInput, ClassroomUncheckedCreateWithoutTeacherInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutTeacherInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutTeacherInput, ClassroomUncheckedUpdateWithoutTeacherInput>
  }

  export type ClassroomUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade_level?: EnumGradeLevelFieldUpdateOperationsInput | $Enums.GradeLevel
    students?: StudentUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade_level?: EnumGradeLevelFieldUpdateOperationsInput | $Enums.GradeLevel
    students?: StudentUncheckedUpdateManyWithoutClassroomNestedInput
  }

  export type ClassroomCreateWithoutStudentsInput = {
    id?: string
    name: string
    grade_level: $Enums.GradeLevel
    teacher?: TeacherCreateNestedOneWithoutClassroomInput
  }

  export type ClassroomUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    grade_level: $Enums.GradeLevel
    teacher_id?: string | null
  }

  export type ClassroomCreateOrConnectWithoutStudentsInput = {
    where: ClassroomWhereUniqueInput
    create: XOR<ClassroomCreateWithoutStudentsInput, ClassroomUncheckedCreateWithoutStudentsInput>
  }

  export type ClassroomUpsertWithoutStudentsInput = {
    update: XOR<ClassroomUpdateWithoutStudentsInput, ClassroomUncheckedUpdateWithoutStudentsInput>
    create: XOR<ClassroomCreateWithoutStudentsInput, ClassroomUncheckedCreateWithoutStudentsInput>
    where?: ClassroomWhereInput
  }

  export type ClassroomUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ClassroomWhereInput
    data: XOR<ClassroomUpdateWithoutStudentsInput, ClassroomUncheckedUpdateWithoutStudentsInput>
  }

  export type ClassroomUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade_level?: EnumGradeLevelFieldUpdateOperationsInput | $Enums.GradeLevel
    teacher?: TeacherUpdateOneWithoutClassroomNestedInput
  }

  export type ClassroomUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    grade_level?: EnumGradeLevelFieldUpdateOperationsInput | $Enums.GradeLevel
    teacher_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherCreateWithoutSubjectsInput = {
    id?: string
    email: string
    name: string
    middle_name?: string | null
    last_name: string
    username: string
    password: string
    phone_number: string
    address: string
    role?: $Enums.UserRole
    date_of_birth: Date | string
    classroom_id?: string | null
    classroom?: ClassroomCreateNestedOneWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutSubjectsInput = {
    id?: string
    email: string
    name: string
    middle_name?: string | null
    last_name: string
    username: string
    password: string
    phone_number: string
    address: string
    role?: $Enums.UserRole
    date_of_birth: Date | string
    classroom_id?: string | null
    classroom?: ClassroomUncheckedCreateNestedOneWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutSubjectsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
  }

  export type TeacherUpsertWithoutSubjectsInput = {
    update: XOR<TeacherUpdateWithoutSubjectsInput, TeacherUncheckedUpdateWithoutSubjectsInput>
    create: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutSubjectsInput, TeacherUncheckedUpdateWithoutSubjectsInput>
  }

  export type TeacherUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom_id?: NullableStringFieldUpdateOperationsInput | string | null
    classroom?: ClassroomUpdateOneWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutSubjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom_id?: NullableStringFieldUpdateOperationsInput | string | null
    classroom?: ClassroomUncheckedUpdateOneWithoutTeacherNestedInput
  }

  export type TeacherCreateWithoutClassroomInput = {
    id?: string
    email: string
    name: string
    middle_name?: string | null
    last_name: string
    username: string
    password: string
    phone_number: string
    address: string
    role?: $Enums.UserRole
    date_of_birth: Date | string
    classroom_id?: string | null
    subjects?: SubjectCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutClassroomInput = {
    id?: string
    email: string
    name: string
    middle_name?: string | null
    last_name: string
    username: string
    password: string
    phone_number: string
    address: string
    role?: $Enums.UserRole
    date_of_birth: Date | string
    classroom_id?: string | null
    subjects?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutClassroomInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutClassroomInput, TeacherUncheckedCreateWithoutClassroomInput>
  }

  export type StudentCreateWithoutClassroomInput = {
    id?: string
    email: string
    name: string
    middle_name?: string | null
    last_name: string
    username: string
    password: string
    role?: $Enums.UserRole
    phone_number: string
    date_of_birth: Date | string
  }

  export type StudentUncheckedCreateWithoutClassroomInput = {
    id?: string
    email: string
    name: string
    middle_name?: string | null
    last_name: string
    username: string
    password: string
    role?: $Enums.UserRole
    phone_number: string
    date_of_birth: Date | string
  }

  export type StudentCreateOrConnectWithoutClassroomInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutClassroomInput, StudentUncheckedCreateWithoutClassroomInput>
  }

  export type StudentCreateManyClassroomInputEnvelope = {
    data: StudentCreateManyClassroomInput | StudentCreateManyClassroomInput[]
    skipDuplicates?: boolean
  }

  export type TeacherUpsertWithoutClassroomInput = {
    update: XOR<TeacherUpdateWithoutClassroomInput, TeacherUncheckedUpdateWithoutClassroomInput>
    create: XOR<TeacherCreateWithoutClassroomInput, TeacherUncheckedCreateWithoutClassroomInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutClassroomInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutClassroomInput, TeacherUncheckedUpdateWithoutClassroomInput>
  }

  export type TeacherUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom_id?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: SubjectUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    classroom_id?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutClassroomInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutClassroomInput, StudentUncheckedUpdateWithoutClassroomInput>
    create: XOR<StudentCreateWithoutClassroomInput, StudentUncheckedCreateWithoutClassroomInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutClassroomInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutClassroomInput, StudentUncheckedUpdateWithoutClassroomInput>
  }

  export type StudentUpdateManyWithWhereWithoutClassroomInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutClassroomInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    middle_name?: StringNullableFilter<"Student"> | string | null
    last_name?: StringFilter<"Student"> | string
    username?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    role?: EnumUserRoleFilter<"Student"> | $Enums.UserRole
    phone_number?: StringFilter<"Student"> | string
    date_of_birth?: DateTimeFilter<"Student"> | Date | string
    classroom_id?: StringFilter<"Student"> | string
  }

  export type ParentCreateWithoutChildren_as_fatherInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    occupation: string
    annual_income?: number | null
    children_as_mother?: StudentApplicationCreateNestedManyWithoutMotherInput
  }

  export type ParentUncheckedCreateWithoutChildren_as_fatherInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    occupation: string
    annual_income?: number | null
    children_as_mother?: StudentApplicationUncheckedCreateNestedManyWithoutMotherInput
  }

  export type ParentCreateOrConnectWithoutChildren_as_fatherInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutChildren_as_fatherInput, ParentUncheckedCreateWithoutChildren_as_fatherInput>
  }

  export type ParentCreateWithoutChildren_as_motherInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    occupation: string
    annual_income?: number | null
    children_as_father?: StudentApplicationCreateNestedManyWithoutFatherInput
  }

  export type ParentUncheckedCreateWithoutChildren_as_motherInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    occupation: string
    annual_income?: number | null
    children_as_father?: StudentApplicationUncheckedCreateNestedManyWithoutFatherInput
  }

  export type ParentCreateOrConnectWithoutChildren_as_motherInput = {
    where: ParentWhereUniqueInput
    create: XOR<ParentCreateWithoutChildren_as_motherInput, ParentUncheckedCreateWithoutChildren_as_motherInput>
  }

  export type GuardianCreateWithoutStudentsInput = {
    id?: string
    name: string
    relation: string
    phone_number: string
  }

  export type GuardianUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    relation: string
    phone_number: string
  }

  export type GuardianCreateOrConnectWithoutStudentsInput = {
    where: GuardianWhereUniqueInput
    create: XOR<GuardianCreateWithoutStudentsInput, GuardianUncheckedCreateWithoutStudentsInput>
  }

  export type MedicalRecordCreateWithoutStudent_applicationsInput = {
    id?: string
    has_medical_condition?: boolean
    medical_condition?: string | null
  }

  export type MedicalRecordUncheckedCreateWithoutStudent_applicationsInput = {
    id?: string
    has_medical_condition?: boolean
    medical_condition?: string | null
  }

  export type MedicalRecordCreateOrConnectWithoutStudent_applicationsInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutStudent_applicationsInput, MedicalRecordUncheckedCreateWithoutStudent_applicationsInput>
  }

  export type AdmissionCreateWithoutStudentInput = {
    id?: string
    admission_type: $Enums.AdmissionType
    intended_grade_level: string
    status?: $Enums.AdmissionStatus
    created_at?: Date | string
    updated_at?: Date | string
    previous_school?: SchoolCreateNestedOneWithoutAdmissionsInput
  }

  export type AdmissionUncheckedCreateWithoutStudentInput = {
    id?: string
    admission_type: $Enums.AdmissionType
    intended_grade_level: string
    previous_school_id?: string | null
    status?: $Enums.AdmissionStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdmissionCreateOrConnectWithoutStudentInput = {
    where: AdmissionWhereUniqueInput
    create: XOR<AdmissionCreateWithoutStudentInput, AdmissionUncheckedCreateWithoutStudentInput>
  }

  export type ParentUpsertWithoutChildren_as_fatherInput = {
    update: XOR<ParentUpdateWithoutChildren_as_fatherInput, ParentUncheckedUpdateWithoutChildren_as_fatherInput>
    create: XOR<ParentCreateWithoutChildren_as_fatherInput, ParentUncheckedCreateWithoutChildren_as_fatherInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutChildren_as_fatherInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutChildren_as_fatherInput, ParentUncheckedUpdateWithoutChildren_as_fatherInput>
  }

  export type ParentUpdateWithoutChildren_as_fatherInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    annual_income?: NullableFloatFieldUpdateOperationsInput | number | null
    children_as_mother?: StudentApplicationUpdateManyWithoutMotherNestedInput
  }

  export type ParentUncheckedUpdateWithoutChildren_as_fatherInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    annual_income?: NullableFloatFieldUpdateOperationsInput | number | null
    children_as_mother?: StudentApplicationUncheckedUpdateManyWithoutMotherNestedInput
  }

  export type ParentUpsertWithoutChildren_as_motherInput = {
    update: XOR<ParentUpdateWithoutChildren_as_motherInput, ParentUncheckedUpdateWithoutChildren_as_motherInput>
    create: XOR<ParentCreateWithoutChildren_as_motherInput, ParentUncheckedCreateWithoutChildren_as_motherInput>
    where?: ParentWhereInput
  }

  export type ParentUpdateToOneWithWhereWithoutChildren_as_motherInput = {
    where?: ParentWhereInput
    data: XOR<ParentUpdateWithoutChildren_as_motherInput, ParentUncheckedUpdateWithoutChildren_as_motherInput>
  }

  export type ParentUpdateWithoutChildren_as_motherInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    annual_income?: NullableFloatFieldUpdateOperationsInput | number | null
    children_as_father?: StudentApplicationUpdateManyWithoutFatherNestedInput
  }

  export type ParentUncheckedUpdateWithoutChildren_as_motherInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    occupation?: StringFieldUpdateOperationsInput | string
    annual_income?: NullableFloatFieldUpdateOperationsInput | number | null
    children_as_father?: StudentApplicationUncheckedUpdateManyWithoutFatherNestedInput
  }

  export type GuardianUpsertWithoutStudentsInput = {
    update: XOR<GuardianUpdateWithoutStudentsInput, GuardianUncheckedUpdateWithoutStudentsInput>
    create: XOR<GuardianCreateWithoutStudentsInput, GuardianUncheckedCreateWithoutStudentsInput>
    where?: GuardianWhereInput
  }

  export type GuardianUpdateToOneWithWhereWithoutStudentsInput = {
    where?: GuardianWhereInput
    data: XOR<GuardianUpdateWithoutStudentsInput, GuardianUncheckedUpdateWithoutStudentsInput>
  }

  export type GuardianUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type GuardianUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalRecordUpsertWithoutStudent_applicationsInput = {
    update: XOR<MedicalRecordUpdateWithoutStudent_applicationsInput, MedicalRecordUncheckedUpdateWithoutStudent_applicationsInput>
    create: XOR<MedicalRecordCreateWithoutStudent_applicationsInput, MedicalRecordUncheckedCreateWithoutStudent_applicationsInput>
    where?: MedicalRecordWhereInput
  }

  export type MedicalRecordUpdateToOneWithWhereWithoutStudent_applicationsInput = {
    where?: MedicalRecordWhereInput
    data: XOR<MedicalRecordUpdateWithoutStudent_applicationsInput, MedicalRecordUncheckedUpdateWithoutStudent_applicationsInput>
  }

  export type MedicalRecordUpdateWithoutStudent_applicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    has_medical_condition?: BoolFieldUpdateOperationsInput | boolean
    medical_condition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicalRecordUncheckedUpdateWithoutStudent_applicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    has_medical_condition?: BoolFieldUpdateOperationsInput | boolean
    medical_condition?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdmissionUpsertWithoutStudentInput = {
    update: XOR<AdmissionUpdateWithoutStudentInput, AdmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<AdmissionCreateWithoutStudentInput, AdmissionUncheckedCreateWithoutStudentInput>
    where?: AdmissionWhereInput
  }

  export type AdmissionUpdateToOneWithWhereWithoutStudentInput = {
    where?: AdmissionWhereInput
    data: XOR<AdmissionUpdateWithoutStudentInput, AdmissionUncheckedUpdateWithoutStudentInput>
  }

  export type AdmissionUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    admission_type?: EnumAdmissionTypeFieldUpdateOperationsInput | $Enums.AdmissionType
    intended_grade_level?: StringFieldUpdateOperationsInput | string
    status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    previous_school?: SchoolUpdateOneWithoutAdmissionsNestedInput
  }

  export type AdmissionUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    admission_type?: EnumAdmissionTypeFieldUpdateOperationsInput | $Enums.AdmissionType
    intended_grade_level?: StringFieldUpdateOperationsInput | string
    previous_school_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationCreateWithoutAdmissionInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    created_at?: Date | string
    updated_at?: Date | string
    father?: ParentCreateNestedOneWithoutChildren_as_fatherInput
    mother?: ParentCreateNestedOneWithoutChildren_as_motherInput
    guardian?: GuardianCreateNestedOneWithoutStudentsInput
    medical_record?: MedicalRecordCreateNestedOneWithoutStudent_applicationsInput
  }

  export type StudentApplicationUncheckedCreateWithoutAdmissionInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    father_id?: string | null
    mother_id?: string | null
    guardian_id?: string | null
    medical_record_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentApplicationCreateOrConnectWithoutAdmissionInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutAdmissionInput, StudentApplicationUncheckedCreateWithoutAdmissionInput>
  }

  export type SchoolCreateWithoutAdmissionsInput = {
    id?: string
    name: string
    address: string
    last_year_level?: string | null
    last_school_year?: string | null
    general_weighted_average?: number | null
  }

  export type SchoolUncheckedCreateWithoutAdmissionsInput = {
    id?: string
    name: string
    address: string
    last_year_level?: string | null
    last_school_year?: string | null
    general_weighted_average?: number | null
  }

  export type SchoolCreateOrConnectWithoutAdmissionsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutAdmissionsInput, SchoolUncheckedCreateWithoutAdmissionsInput>
  }

  export type StudentApplicationUpsertWithoutAdmissionInput = {
    update: XOR<StudentApplicationUpdateWithoutAdmissionInput, StudentApplicationUncheckedUpdateWithoutAdmissionInput>
    create: XOR<StudentApplicationCreateWithoutAdmissionInput, StudentApplicationUncheckedCreateWithoutAdmissionInput>
    where?: StudentApplicationWhereInput
  }

  export type StudentApplicationUpdateToOneWithWhereWithoutAdmissionInput = {
    where?: StudentApplicationWhereInput
    data: XOR<StudentApplicationUpdateWithoutAdmissionInput, StudentApplicationUncheckedUpdateWithoutAdmissionInput>
  }

  export type StudentApplicationUpdateWithoutAdmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: ParentUpdateOneWithoutChildren_as_fatherNestedInput
    mother?: ParentUpdateOneWithoutChildren_as_motherNestedInput
    guardian?: GuardianUpdateOneWithoutStudentsNestedInput
    medical_record?: MedicalRecordUpdateOneWithoutStudent_applicationsNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutAdmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    father_id?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_id?: NullableStringFieldUpdateOperationsInput | string | null
    medical_record_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUpsertWithoutAdmissionsInput = {
    update: XOR<SchoolUpdateWithoutAdmissionsInput, SchoolUncheckedUpdateWithoutAdmissionsInput>
    create: XOR<SchoolCreateWithoutAdmissionsInput, SchoolUncheckedCreateWithoutAdmissionsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutAdmissionsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutAdmissionsInput, SchoolUncheckedUpdateWithoutAdmissionsInput>
  }

  export type SchoolUpdateWithoutAdmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    last_year_level?: NullableStringFieldUpdateOperationsInput | string | null
    last_school_year?: NullableStringFieldUpdateOperationsInput | string | null
    general_weighted_average?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SchoolUncheckedUpdateWithoutAdmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    last_year_level?: NullableStringFieldUpdateOperationsInput | string | null
    last_school_year?: NullableStringFieldUpdateOperationsInput | string | null
    general_weighted_average?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StudentApplicationCreateWithoutFatherInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    created_at?: Date | string
    updated_at?: Date | string
    mother?: ParentCreateNestedOneWithoutChildren_as_motherInput
    guardian?: GuardianCreateNestedOneWithoutStudentsInput
    medical_record?: MedicalRecordCreateNestedOneWithoutStudent_applicationsInput
    admission?: AdmissionCreateNestedOneWithoutStudentInput
  }

  export type StudentApplicationUncheckedCreateWithoutFatherInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    mother_id?: string | null
    guardian_id?: string | null
    medical_record_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    admission?: AdmissionUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentApplicationCreateOrConnectWithoutFatherInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutFatherInput, StudentApplicationUncheckedCreateWithoutFatherInput>
  }

  export type StudentApplicationCreateManyFatherInputEnvelope = {
    data: StudentApplicationCreateManyFatherInput | StudentApplicationCreateManyFatherInput[]
    skipDuplicates?: boolean
  }

  export type StudentApplicationCreateWithoutMotherInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    created_at?: Date | string
    updated_at?: Date | string
    father?: ParentCreateNestedOneWithoutChildren_as_fatherInput
    guardian?: GuardianCreateNestedOneWithoutStudentsInput
    medical_record?: MedicalRecordCreateNestedOneWithoutStudent_applicationsInput
    admission?: AdmissionCreateNestedOneWithoutStudentInput
  }

  export type StudentApplicationUncheckedCreateWithoutMotherInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    father_id?: string | null
    guardian_id?: string | null
    medical_record_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    admission?: AdmissionUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentApplicationCreateOrConnectWithoutMotherInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutMotherInput, StudentApplicationUncheckedCreateWithoutMotherInput>
  }

  export type StudentApplicationCreateManyMotherInputEnvelope = {
    data: StudentApplicationCreateManyMotherInput | StudentApplicationCreateManyMotherInput[]
    skipDuplicates?: boolean
  }

  export type StudentApplicationUpsertWithWhereUniqueWithoutFatherInput = {
    where: StudentApplicationWhereUniqueInput
    update: XOR<StudentApplicationUpdateWithoutFatherInput, StudentApplicationUncheckedUpdateWithoutFatherInput>
    create: XOR<StudentApplicationCreateWithoutFatherInput, StudentApplicationUncheckedCreateWithoutFatherInput>
  }

  export type StudentApplicationUpdateWithWhereUniqueWithoutFatherInput = {
    where: StudentApplicationWhereUniqueInput
    data: XOR<StudentApplicationUpdateWithoutFatherInput, StudentApplicationUncheckedUpdateWithoutFatherInput>
  }

  export type StudentApplicationUpdateManyWithWhereWithoutFatherInput = {
    where: StudentApplicationScalarWhereInput
    data: XOR<StudentApplicationUpdateManyMutationInput, StudentApplicationUncheckedUpdateManyWithoutFatherInput>
  }

  export type StudentApplicationScalarWhereInput = {
    AND?: StudentApplicationScalarWhereInput | StudentApplicationScalarWhereInput[]
    OR?: StudentApplicationScalarWhereInput[]
    NOT?: StudentApplicationScalarWhereInput | StudentApplicationScalarWhereInput[]
    id?: StringFilter<"StudentApplication"> | string
    first_name?: StringFilter<"StudentApplication"> | string
    middle_name?: StringNullableFilter<"StudentApplication"> | string | null
    last_name?: StringFilter<"StudentApplication"> | string
    suffix?: EnumNameSuffixNullableFilter<"StudentApplication"> | $Enums.NameSuffix | null
    gender?: StringFilter<"StudentApplication"> | string
    civil_status?: EnumCivilStatusNullableFilter<"StudentApplication"> | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFilter<"StudentApplication"> | Date | string
    birth_place?: StringFilter<"StudentApplication"> | string
    nationality?: StringFilter<"StudentApplication"> | string
    email?: StringFilter<"StudentApplication"> | string
    phone_number?: StringFilter<"StudentApplication"> | string
    tel_number?: StringNullableFilter<"StudentApplication"> | string | null
    permanent_address?: StringFilter<"StudentApplication"> | string
    current_address?: StringFilter<"StudentApplication"> | string
    postal_code?: StringFilter<"StudentApplication"> | string
    father_id?: StringNullableFilter<"StudentApplication"> | string | null
    mother_id?: StringNullableFilter<"StudentApplication"> | string | null
    guardian_id?: StringNullableFilter<"StudentApplication"> | string | null
    medical_record_id?: StringNullableFilter<"StudentApplication"> | string | null
    created_at?: DateTimeFilter<"StudentApplication"> | Date | string
    updated_at?: DateTimeFilter<"StudentApplication"> | Date | string
  }

  export type StudentApplicationUpsertWithWhereUniqueWithoutMotherInput = {
    where: StudentApplicationWhereUniqueInput
    update: XOR<StudentApplicationUpdateWithoutMotherInput, StudentApplicationUncheckedUpdateWithoutMotherInput>
    create: XOR<StudentApplicationCreateWithoutMotherInput, StudentApplicationUncheckedCreateWithoutMotherInput>
  }

  export type StudentApplicationUpdateWithWhereUniqueWithoutMotherInput = {
    where: StudentApplicationWhereUniqueInput
    data: XOR<StudentApplicationUpdateWithoutMotherInput, StudentApplicationUncheckedUpdateWithoutMotherInput>
  }

  export type StudentApplicationUpdateManyWithWhereWithoutMotherInput = {
    where: StudentApplicationScalarWhereInput
    data: XOR<StudentApplicationUpdateManyMutationInput, StudentApplicationUncheckedUpdateManyWithoutMotherInput>
  }

  export type StudentApplicationCreateWithoutGuardianInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    created_at?: Date | string
    updated_at?: Date | string
    father?: ParentCreateNestedOneWithoutChildren_as_fatherInput
    mother?: ParentCreateNestedOneWithoutChildren_as_motherInput
    medical_record?: MedicalRecordCreateNestedOneWithoutStudent_applicationsInput
    admission?: AdmissionCreateNestedOneWithoutStudentInput
  }

  export type StudentApplicationUncheckedCreateWithoutGuardianInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    father_id?: string | null
    mother_id?: string | null
    medical_record_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    admission?: AdmissionUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentApplicationCreateOrConnectWithoutGuardianInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutGuardianInput, StudentApplicationUncheckedCreateWithoutGuardianInput>
  }

  export type StudentApplicationCreateManyGuardianInputEnvelope = {
    data: StudentApplicationCreateManyGuardianInput | StudentApplicationCreateManyGuardianInput[]
    skipDuplicates?: boolean
  }

  export type StudentApplicationUpsertWithWhereUniqueWithoutGuardianInput = {
    where: StudentApplicationWhereUniqueInput
    update: XOR<StudentApplicationUpdateWithoutGuardianInput, StudentApplicationUncheckedUpdateWithoutGuardianInput>
    create: XOR<StudentApplicationCreateWithoutGuardianInput, StudentApplicationUncheckedCreateWithoutGuardianInput>
  }

  export type StudentApplicationUpdateWithWhereUniqueWithoutGuardianInput = {
    where: StudentApplicationWhereUniqueInput
    data: XOR<StudentApplicationUpdateWithoutGuardianInput, StudentApplicationUncheckedUpdateWithoutGuardianInput>
  }

  export type StudentApplicationUpdateManyWithWhereWithoutGuardianInput = {
    where: StudentApplicationScalarWhereInput
    data: XOR<StudentApplicationUpdateManyMutationInput, StudentApplicationUncheckedUpdateManyWithoutGuardianInput>
  }

  export type StudentApplicationCreateWithoutMedical_recordInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    created_at?: Date | string
    updated_at?: Date | string
    father?: ParentCreateNestedOneWithoutChildren_as_fatherInput
    mother?: ParentCreateNestedOneWithoutChildren_as_motherInput
    guardian?: GuardianCreateNestedOneWithoutStudentsInput
    admission?: AdmissionCreateNestedOneWithoutStudentInput
  }

  export type StudentApplicationUncheckedCreateWithoutMedical_recordInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    father_id?: string | null
    mother_id?: string | null
    guardian_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    admission?: AdmissionUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentApplicationCreateOrConnectWithoutMedical_recordInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutMedical_recordInput, StudentApplicationUncheckedCreateWithoutMedical_recordInput>
  }

  export type StudentApplicationCreateManyMedical_recordInputEnvelope = {
    data: StudentApplicationCreateManyMedical_recordInput | StudentApplicationCreateManyMedical_recordInput[]
    skipDuplicates?: boolean
  }

  export type StudentApplicationUpsertWithWhereUniqueWithoutMedical_recordInput = {
    where: StudentApplicationWhereUniqueInput
    update: XOR<StudentApplicationUpdateWithoutMedical_recordInput, StudentApplicationUncheckedUpdateWithoutMedical_recordInput>
    create: XOR<StudentApplicationCreateWithoutMedical_recordInput, StudentApplicationUncheckedCreateWithoutMedical_recordInput>
  }

  export type StudentApplicationUpdateWithWhereUniqueWithoutMedical_recordInput = {
    where: StudentApplicationWhereUniqueInput
    data: XOR<StudentApplicationUpdateWithoutMedical_recordInput, StudentApplicationUncheckedUpdateWithoutMedical_recordInput>
  }

  export type StudentApplicationUpdateManyWithWhereWithoutMedical_recordInput = {
    where: StudentApplicationScalarWhereInput
    data: XOR<StudentApplicationUpdateManyMutationInput, StudentApplicationUncheckedUpdateManyWithoutMedical_recordInput>
  }

  export type AdmissionCreateWithoutPrevious_schoolInput = {
    id?: string
    admission_type: $Enums.AdmissionType
    intended_grade_level: string
    status?: $Enums.AdmissionStatus
    created_at?: Date | string
    updated_at?: Date | string
    student: StudentApplicationCreateNestedOneWithoutAdmissionInput
  }

  export type AdmissionUncheckedCreateWithoutPrevious_schoolInput = {
    id?: string
    student_id: string
    admission_type: $Enums.AdmissionType
    intended_grade_level: string
    status?: $Enums.AdmissionStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdmissionCreateOrConnectWithoutPrevious_schoolInput = {
    where: AdmissionWhereUniqueInput
    create: XOR<AdmissionCreateWithoutPrevious_schoolInput, AdmissionUncheckedCreateWithoutPrevious_schoolInput>
  }

  export type AdmissionCreateManyPrevious_schoolInputEnvelope = {
    data: AdmissionCreateManyPrevious_schoolInput | AdmissionCreateManyPrevious_schoolInput[]
    skipDuplicates?: boolean
  }

  export type AdmissionUpsertWithWhereUniqueWithoutPrevious_schoolInput = {
    where: AdmissionWhereUniqueInput
    update: XOR<AdmissionUpdateWithoutPrevious_schoolInput, AdmissionUncheckedUpdateWithoutPrevious_schoolInput>
    create: XOR<AdmissionCreateWithoutPrevious_schoolInput, AdmissionUncheckedCreateWithoutPrevious_schoolInput>
  }

  export type AdmissionUpdateWithWhereUniqueWithoutPrevious_schoolInput = {
    where: AdmissionWhereUniqueInput
    data: XOR<AdmissionUpdateWithoutPrevious_schoolInput, AdmissionUncheckedUpdateWithoutPrevious_schoolInput>
  }

  export type AdmissionUpdateManyWithWhereWithoutPrevious_schoolInput = {
    where: AdmissionScalarWhereInput
    data: XOR<AdmissionUpdateManyMutationInput, AdmissionUncheckedUpdateManyWithoutPrevious_schoolInput>
  }

  export type AdmissionScalarWhereInput = {
    AND?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
    OR?: AdmissionScalarWhereInput[]
    NOT?: AdmissionScalarWhereInput | AdmissionScalarWhereInput[]
    id?: StringFilter<"Admission"> | string
    student_id?: StringFilter<"Admission"> | string
    admission_type?: EnumAdmissionTypeFilter<"Admission"> | $Enums.AdmissionType
    intended_grade_level?: StringFilter<"Admission"> | string
    previous_school_id?: StringNullableFilter<"Admission"> | string | null
    status?: EnumAdmissionStatusFilter<"Admission"> | $Enums.AdmissionStatus
    created_at?: DateTimeFilter<"Admission"> | Date | string
    updated_at?: DateTimeFilter<"Admission"> | Date | string
  }

  export type SubjectCreateManyTeacherInput = {
    id?: string
    name: string
  }

  export type SubjectUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateManyClassroomInput = {
    id?: string
    email: string
    name: string
    middle_name?: string | null
    last_name: string
    username: string
    password: string
    role?: $Enums.UserRole
    phone_number: string
    date_of_birth: Date | string
  }

  export type StudentUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone_number?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone_number?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyWithoutClassroomInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone_number?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationCreateManyFatherInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    mother_id?: string | null
    guardian_id?: string | null
    medical_record_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentApplicationCreateManyMotherInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    father_id?: string | null
    guardian_id?: string | null
    medical_record_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentApplicationUpdateWithoutFatherInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    mother?: ParentUpdateOneWithoutChildren_as_motherNestedInput
    guardian?: GuardianUpdateOneWithoutStudentsNestedInput
    medical_record?: MedicalRecordUpdateOneWithoutStudent_applicationsNestedInput
    admission?: AdmissionUpdateOneWithoutStudentNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutFatherInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    mother_id?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_id?: NullableStringFieldUpdateOperationsInput | string | null
    medical_record_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: AdmissionUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type StudentApplicationUncheckedUpdateManyWithoutFatherInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    mother_id?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_id?: NullableStringFieldUpdateOperationsInput | string | null
    medical_record_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationUpdateWithoutMotherInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: ParentUpdateOneWithoutChildren_as_fatherNestedInput
    guardian?: GuardianUpdateOneWithoutStudentsNestedInput
    medical_record?: MedicalRecordUpdateOneWithoutStudent_applicationsNestedInput
    admission?: AdmissionUpdateOneWithoutStudentNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutMotherInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    father_id?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_id?: NullableStringFieldUpdateOperationsInput | string | null
    medical_record_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: AdmissionUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type StudentApplicationUncheckedUpdateManyWithoutMotherInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    father_id?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_id?: NullableStringFieldUpdateOperationsInput | string | null
    medical_record_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationCreateManyGuardianInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    father_id?: string | null
    mother_id?: string | null
    medical_record_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentApplicationUpdateWithoutGuardianInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: ParentUpdateOneWithoutChildren_as_fatherNestedInput
    mother?: ParentUpdateOneWithoutChildren_as_motherNestedInput
    medical_record?: MedicalRecordUpdateOneWithoutStudent_applicationsNestedInput
    admission?: AdmissionUpdateOneWithoutStudentNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutGuardianInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    father_id?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableStringFieldUpdateOperationsInput | string | null
    medical_record_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: AdmissionUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type StudentApplicationUncheckedUpdateManyWithoutGuardianInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    father_id?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableStringFieldUpdateOperationsInput | string | null
    medical_record_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationCreateManyMedical_recordInput = {
    id?: string
    first_name: string
    middle_name?: string | null
    last_name: string
    suffix?: $Enums.NameSuffix | null
    gender: string
    civil_status?: $Enums.CivilStatus | null
    date_of_birth: Date | string
    birth_place: string
    nationality: string
    email: string
    phone_number: string
    tel_number?: string | null
    permanent_address: string
    current_address: string
    postal_code: string
    father_id?: string | null
    mother_id?: string | null
    guardian_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentApplicationUpdateWithoutMedical_recordInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    father?: ParentUpdateOneWithoutChildren_as_fatherNestedInput
    mother?: ParentUpdateOneWithoutChildren_as_motherNestedInput
    guardian?: GuardianUpdateOneWithoutStudentsNestedInput
    admission?: AdmissionUpdateOneWithoutStudentNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutMedical_recordInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    father_id?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    admission?: AdmissionUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type StudentApplicationUncheckedUpdateManyWithoutMedical_recordInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    suffix?: NullableEnumNameSuffixFieldUpdateOperationsInput | $Enums.NameSuffix | null
    gender?: StringFieldUpdateOperationsInput | string
    civil_status?: NullableEnumCivilStatusFieldUpdateOperationsInput | $Enums.CivilStatus | null
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    birth_place?: StringFieldUpdateOperationsInput | string
    nationality?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    tel_number?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: StringFieldUpdateOperationsInput | string
    current_address?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    father_id?: NullableStringFieldUpdateOperationsInput | string | null
    mother_id?: NullableStringFieldUpdateOperationsInput | string | null
    guardian_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionCreateManyPrevious_schoolInput = {
    id?: string
    student_id: string
    admission_type: $Enums.AdmissionType
    intended_grade_level: string
    status?: $Enums.AdmissionStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdmissionUpdateWithoutPrevious_schoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    admission_type?: EnumAdmissionTypeFieldUpdateOperationsInput | $Enums.AdmissionType
    intended_grade_level?: StringFieldUpdateOperationsInput | string
    status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentApplicationUpdateOneRequiredWithoutAdmissionNestedInput
  }

  export type AdmissionUncheckedUpdateWithoutPrevious_schoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    admission_type?: EnumAdmissionTypeFieldUpdateOperationsInput | $Enums.AdmissionType
    intended_grade_level?: StringFieldUpdateOperationsInput | string
    status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdmissionUncheckedUpdateManyWithoutPrevious_schoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    student_id?: StringFieldUpdateOperationsInput | string
    admission_type?: EnumAdmissionTypeFieldUpdateOperationsInput | $Enums.AdmissionType
    intended_grade_level?: StringFieldUpdateOperationsInput | string
    status?: EnumAdmissionStatusFieldUpdateOperationsInput | $Enums.AdmissionStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}