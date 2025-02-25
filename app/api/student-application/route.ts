import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { AdmissionStatus } from "@prisma/client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received body:", body); // Debugging

    
    const {
      studentApplication,
      homeAddress,
      school,
      parentGuardian,
      medicalRecord,
      admission
    } = body;

    // Validate required fields
    if (!studentApplication || !homeAddress || !school || !parentGuardian || !admission) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create the student application entry
    const newStudentApplication = await prisma.studentApplication.create({
      data: {
        control_no: studentApplication.control_no,
        first_name: studentApplication.first_name,
        middle_name: studentApplication.middle_name || null,
        last_name: studentApplication.last_name,
        suffix: studentApplication.suffix || null,
        gender: studentApplication.gender,
        date_of_birth: new Date(studentApplication.date_of_birth), // Ensure date format
        birth_place: studentApplication.birth_place,
        nationality: studentApplication.nationality,
        email: studentApplication.email,
        phone_number: studentApplication.phone_number,
        tel_number: studentApplication.tel_number || null,
        religion: studentApplication.religion,

        // Create related home address
        home_address: {
          create: {
            street: homeAddress.street,
            city: homeAddress.city,
            province: homeAddress.province,
            postal_code: homeAddress.postal_code,
          },
        },

        // Create related school entry
        admission: {
          create: {
            admission_type: admission.admission_type,
            intended_grade_level: admission.intended_grade_level,
            status: admission.status.toUpperCase() as AdmissionStatus, // Ensure enum compatibility
            previous_school: admission.previous_school
              ? {
                  create: {
                    name: school.name,
                    address: school.address,
                    last_year_level: school.last_year_level,
                    last_school_year: school.last_school_year,
                    general_weighted_average: parseFloat(school.general_weighted_average), // Convert string to float
                  },
                }
              : undefined, // Only create school if previous_school is provided
          },
        },

        // Create related family background
        family_background: {
          create: {
            father_first_name: parentGuardian.father_first_name || null,
            father_middle_name: parentGuardian.father_middle_name || null,
            father_last_name: parentGuardian.father_last_name || null,
            father_occupation: parentGuardian.father_occupation || null,
            father_civil_status: parentGuardian.father_civil_status || null,
            father_annual_income: parentGuardian.father_annual_income
              ? parseFloat(parentGuardian.father_annual_income)
              : null,
            father_phone_number: parentGuardian.father_phone_number || null,
            father_deceased: parentGuardian.father_deceased || false,

            mother_first_name: parentGuardian.mother_first_name || null,
            mother_middle_name: parentGuardian.mother_middle_name || null,
            mother_last_name: parentGuardian.mother_last_name || null,
            mother_occupation: parentGuardian.mother_occupation || null,
            mother_civil_status: parentGuardian.mother_civil_status || null,
            mother_annual_income: parentGuardian.mother_annual_income
              ? parseFloat(parentGuardian.mother_annual_income)
              : null,
            mother_phone_number: parentGuardian.mother_phone_number || null,
            mother_deceased: parentGuardian.mother_deceased || false,

            guardian_first_name: parentGuardian.guardian_first_name || null,
            guardian_middle_name: parentGuardian.guardian_middle_name || null,
            guardian_last_name: parentGuardian.guardian_last_name || null,
            guardian_occupation: parentGuardian.guardian_occupation || null,
            guardian_annual_income: parentGuardian.guardian_annual_income
              ? parseFloat(parentGuardian.guardian_annual_income)
              : null,
            guardian_phone_number: parentGuardian.guardian_phone_number || null,
          },
        },

        // Create medical record if provided
        medical_record: medicalRecord.medical_condition
          ? {
              create: {
                has_medical_condition: true,
                medical_condition: medicalRecord.medical_condition,
              },
            }
          : undefined, // Don't create medical record if no condition is provided
      },
    });

    return NextResponse.json(newStudentApplication, { status: 201 });
  } catch (error: unknown) {
    console.error("Error submitting student application:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
