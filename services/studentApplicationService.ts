import { PrismaClient } from "@prisma/client";
import { 
  StudentApplicationData, 
  HomeAddressData, 
  FamilyBackgroundData, 
  MedicalRecordData, 
  AdmissionData 
} from "@/types/services";
import { NameSuffix, AdmissionType, AdmissionStatus, CivilStatus } from "@/helpers/enums";
const prisma = new PrismaClient();

// Create a new student application
export async function createStudentApplication(data: StudentApplicationData) {
  try {
    return await prisma.studentApplication.create({
      data: {
        control_no: data.control_no,
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        suffix: data.suffix as NameSuffix,
        gender: data.gender,
        date_of_birth: new Date(data.date_of_birth),
        birth_place: data.birth_place,
        nationality: data.nationality,
        email: data.email,
        phone_number: data.phone_number,
        tel_number: data.tel_number,
        religion: data.religion,

        medical_record: data.medical_record
          ? { create: { ...data.medical_record } }
          : undefined,

        admission: data.admission
          ? {
              create: {
                admission_type: data.admission.admission_type as AdmissionType,
                intended_grade_level: data.admission.intended_grade_level,
                previous_school: data.admission.previous_school
                  ? { connect: { id: data.admission.previous_school.id } }
                  : undefined,
                status: data.admission.status as AdmissionStatus || AdmissionStatus.PENDING,
              },
            }
          : undefined,

        home_address: data.home_address
          ? { create: { ...data.home_address } }
          : undefined,

        family_background: data.family_background
          ? { create: { 
              ...data.family_background, 
              father_civil_status: data.family_background.father_civil_status as CivilStatus,
              mother_civil_status: data.family_background.mother_civil_status as CivilStatus
            } }
          : undefined,
      },
    });
  } catch (error) {
    console.error("Error creating student application:", error);
    throw new Error("Failed to create student application.");
  }
}

// Get a student application by ID
export async function getStudentApplication(id: string) {
  try {
    return await prisma.studentApplication.findUnique({
      where: { id },
      include: {
        medical_record: true,
        admission: { include: { previous_school: true } },
        home_address: true,
        family_background: true,
      },
    });
  } catch (error) {
    console.error("Error fetching student application:", error);
    throw new Error("Failed to fetch student application.");
  }
}

// Update a student application
export async function updateStudentApplication(id: string, data: Partial<StudentApplicationData>) {
  try {
    return await prisma.studentApplication.update({
      where: { id },
      data: {
        control_no: data.control_no,
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        suffix: data.suffix as NameSuffix | null,
        gender: data.gender,
        date_of_birth: data.date_of_birth ? new Date(data.date_of_birth) : undefined,
        birth_place: data.birth_place,
        nationality: data.nationality,
        email: data.email,
        phone_number: data.phone_number,
        tel_number: data.tel_number,
        religion: data.religion,
        medical_record: data.medical_record
          ? {
              update: {
                has_medical_condition: data.medical_record.has_medical_condition,
                medical_condition: data.medical_record.medical_condition,
              },
              create: {
                has_medical_condition: data.medical_record.has_medical_condition,
                medical_condition: data.medical_record.medical_condition,
              },
            }
          : undefined,
        admission: data.admission
          ? {
              update: {
                admission_type: data.admission.admission_type as AdmissionType,
                intended_grade_level: data.admission.intended_grade_level,
                previous_school: data.admission.previous_school
                  ? { connect: { id: data.admission.previous_school.id } }
                  : undefined,
                status: data.admission.status as AdmissionStatus || AdmissionStatus.PENDING,
              },
              create: {
                admission_type: data.admission.admission_type as AdmissionType,
                intended_grade_level: data.admission.intended_grade_level,
                previous_school: data.admission.previous_school
                  ? { connect: { id: data.admission.previous_school.id } }
                  : undefined,
                status: data.admission.status as AdmissionStatus || AdmissionStatus.PENDING,
              },
            }
          : undefined,
        home_address: data.home_address
          ? { update: { ...data.home_address }, create: { ...data.home_address } }
          : undefined,
        family_background: data.family_background
          ? {
              update: {
                ...data.family_background,
                father_civil_status: data.family_background.father_civil_status as CivilStatus,
                mother_civil_status: data.family_background.mother_civil_status as CivilStatus,
              },
              create: {
                ...data.family_background,
                father_civil_status: data.family_background.father_civil_status as CivilStatus,
                mother_civil_status: data.family_background.mother_civil_status as CivilStatus,
              },
            }
          : undefined,
      },
    });
  } catch (error) {
    console.error("Error updating student application:", error);
    throw new Error("Failed to update student application.");
  }
}

// Delete a student application
export async function deleteStudentApplication(id: string) {
  try {
    return await prisma.studentApplication.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error deleting student application:", error);
    throw new Error("Failed to delete student application.");
  }
}

// Upsert HomeAddress
export async function upsertHomeAddress(student_application_id: string, data: HomeAddressData) {
  try {
    return await prisma.homeAddress.upsert({
      where: { student_application_id },
      update: {
        ...data,
      },
      create: {
        ...data,
        student_application_id,
      },
    });
  } catch (error) {
    console.error("Error upserting home address:", error);
    throw new Error("Failed to upsert home address.");
  }
}

// Upsert FamilyBackground
export async function upsertFamilyBackground(student_application_id: string, data: FamilyBackgroundData) {
    try {
      return await prisma.familyBackground.upsert({
        where: { student_application_id },
        update: {
          ...data,
          father_civil_status: data.father_civil_status ? data.father_civil_status as CivilStatus : null,
          mother_civil_status: data.mother_civil_status ? data.mother_civil_status as CivilStatus : null,
        },
        create: {
          ...data,
          student_application_id,
          father_civil_status: data.father_civil_status ? data.father_civil_status as CivilStatus : null,
          mother_civil_status: data.mother_civil_status ? data.mother_civil_status as CivilStatus : null,
        },
      });
    } catch (error) {
      console.error("Error upserting family background:", error);
      throw new Error("Failed to upsert family background.");
    }
  }
  
// Upsert MedicalRecord
export async function upsertMedicalRecord(student_application_id: string, data: MedicalRecordData) {
  try {
    return await prisma.medicalRecord.upsert({
      where: { id: data.id || "" },
      update: data,
      create: {
        has_medical_condition: data.has_medical_condition,
        medical_condition: data.medical_condition,
        student_applications: { connect: { id: student_application_id } },
      },
    });
  } catch (error) {
    console.error("Error upserting medical record:", error);
    throw new Error("Failed to upsert medical record.");
  }
}

// Upsert Admission
export async function upsertAdmission(student_application_id: string, data: AdmissionData) {
    try {
      return await prisma.admission.upsert({
        where: { student_id: student_application_id },
        update: {
          admission_type: data.admission_type as AdmissionType,
          intended_grade_level: data.intended_grade_level,
          previous_school_id: data.previous_school?.id || null, 
          status: data.status as AdmissionStatus || AdmissionStatus.PENDING,
        },
        create: {
          student_id: student_application_id,
          admission_type: data.admission_type as AdmissionType,
          intended_grade_level: data.intended_grade_level,
          previous_school_id: data.previous_school?.id || null, 
          status: data.status as AdmissionStatus || AdmissionStatus.PENDING,
        },
      });
    } catch (error) {
      console.error("Error upserting admission:", error);
      throw new Error("Failed to upsert admission.");
    }
  }
  
  
