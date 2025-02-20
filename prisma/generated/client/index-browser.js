
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.0
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.0",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  email: 'email',
  username: 'username',
  password: 'password',
  role: 'role'
};

exports.Prisma.TeacherScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  m_name: 'm_name',
  last_name: 'last_name',
  username: 'username',
  password: 'password',
  phone_number: 'phone_number',
  address: 'address',
  role: 'role',
  date_of_birth: 'date_of_birth',
  classroom_id: 'classroom_id'
};

exports.Prisma.StudentScalarFieldEnum = {
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

exports.Prisma.SubjectScalarFieldEnum = {
  id: 'id',
  name: 'name',
  teacher_id: 'teacher_id'
};

exports.Prisma.ClassroomScalarFieldEnum = {
  id: 'id',
  name: 'name',
  grade_level: 'grade_level',
  teacher_id: 'teacher_id'
};

exports.Prisma.StudentApplicationScalarFieldEnum = {
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

exports.Prisma.AdmissionScalarFieldEnum = {
  id: 'id',
  student_id: 'student_id',
  admission_type: 'admission_type',
  intended_grade_level: 'intended_grade_level',
  previous_school_id: 'previous_school_id',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ParentScalarFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  middle_name: 'middle_name',
  last_name: 'last_name',
  occupation: 'occupation',
  annual_income: 'annual_income'
};

exports.Prisma.GuardianScalarFieldEnum = {
  id: 'id',
  name: 'name',
  relation: 'relation',
  phone_number: 'phone_number'
};

exports.Prisma.MedicalRecordScalarFieldEnum = {
  id: 'id',
  has_medical_condition: 'has_medical_condition',
  medical_condition: 'medical_condition'
};

exports.Prisma.SchoolScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  last_year_level: 'last_year_level',
  last_school_year: 'last_school_year',
  general_weighted_average: 'general_weighted_average'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.AdminOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email',
  username: 'username',
  password: 'password'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.TeacherOrderByRelevanceFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  m_name: 'm_name',
  last_name: 'last_name',
  username: 'username',
  password: 'password',
  phone_number: 'phone_number',
  address: 'address',
  classroom_id: 'classroom_id'
};

exports.Prisma.StudentOrderByRelevanceFieldEnum = {
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

exports.Prisma.SubjectOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  teacher_id: 'teacher_id'
};

exports.Prisma.ClassroomOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  teacher_id: 'teacher_id'
};

exports.Prisma.StudentApplicationOrderByRelevanceFieldEnum = {
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

exports.Prisma.AdmissionOrderByRelevanceFieldEnum = {
  id: 'id',
  student_id: 'student_id',
  intended_grade_level: 'intended_grade_level',
  previous_school_id: 'previous_school_id'
};

exports.Prisma.ParentOrderByRelevanceFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  middle_name: 'middle_name',
  last_name: 'last_name',
  occupation: 'occupation'
};

exports.Prisma.GuardianOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  relation: 'relation',
  phone_number: 'phone_number'
};

exports.Prisma.MedicalRecordOrderByRelevanceFieldEnum = {
  id: 'id',
  medical_condition: 'medical_condition'
};

exports.Prisma.SchoolOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  last_year_level: 'last_year_level',
  last_school_year: 'last_school_year'
};
exports.UserRole = exports.$Enums.UserRole = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT'
};

exports.GradeLevel = exports.$Enums.GradeLevel = {
  GRADE_1: 'GRADE_1',
  GRADE_2: 'GRADE_2',
  GRADE_3: 'GRADE_3',
  GRADE_4: 'GRADE_4',
  GRADE_5: 'GRADE_5',
  GRADE_6: 'GRADE_6'
};

exports.NameSuffix = exports.$Enums.NameSuffix = {
  JR: 'JR',
  SR: 'SR',
  I: 'I',
  II: 'II',
  III: 'III',
  IV: 'IV',
  V: 'V'
};

exports.CivilStatus = exports.$Enums.CivilStatus = {
  SINGLE: 'SINGLE',
  MARRIED: 'MARRIED',
  WIDOWED: 'WIDOWED',
  SEPARATED: 'SEPARATED',
  DIVORCED: 'DIVORCED'
};

exports.AdmissionType = exports.$Enums.AdmissionType = {
  NEW_STUDENT: 'NEW_STUDENT',
  TRANSFEREE: 'TRANSFEREE'
};

exports.AdmissionStatus = exports.$Enums.AdmissionStatus = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
