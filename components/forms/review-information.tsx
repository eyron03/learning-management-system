import React from "react";
import { Button } from "@/components/ui/button";

interface ReviewInformationProps {
  formData: {
    student: {
      first_name: string;
      middle_name?: string;
      last_name: string;
      suffix?: string;
      gender: string;
      date_of_birth: string;
      birth_place: string;
      nationality: string;
      email: string;
      phone_number: string;
      tel_number?: string;
      religion: string;
    };
    homeAddress: {
      street: string;
      city: string;
      province: string;
      postal_code: string;
    };
    familyBackground: {
      father_first_name?: string;
      father_middle_name?: string;
      father_last_name?: string;
      father_occupation?: string;
      father_civil_status?: string;
      father_annual_income?: number;
      father_phone_number?: string;
      father_deceased?: boolean;
      mother_first_name?: string;
      mother_middle_name?: string;
      mother_last_name?: string;
      mother_occupation?: string;
      mother_civil_status?: string;
      mother_annual_income?: number;
      mother_phone_number?: string;
      mother_deceased?: boolean;
      guardian_first_name?: string;
      guardian_middle_name?: string;
      guardian_last_name?: string;
      guardian_occupation?: string;
      guardian_annual_income?: number;
      guardian_phone_number?: string;
    };
    medicalRecord: {
      has_medical_condition: boolean;
      medical_condition?: string;
    };
    admission: {
      admission_type: string;
      intended_grade_level: string;
      previous_school?: {
        name: string;
        address: string;
        last_year_level?: string;
        last_school_year?: string;
        general_weighted_average?: number;
      };
      status: string;
    };
  };
  onSubmit: () => void;
}

const ReviewInformation: React.FC<ReviewInformationProps> = ({ formData, onSubmit }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Review Information</h3>
      
      {/* Student Details */}
      <div>
        <h4 className="font-semibold">Student Information</h4>
        <p><strong>Name:</strong> {formData.student.first_name} {formData.student.middle_name ?? ''} {formData.student.last_name} {formData.student.suffix ?? ''}</p>
        <p><strong>Gender:</strong> {formData.student.gender}</p>
        <p><strong>Date of Birth:</strong> {formData.student.date_of_birth}</p>
        <p><strong>Birth Place:</strong> {formData.student.birth_place}</p>
        <p><strong>Nationality:</strong> {formData.student.nationality}</p>
        <p><strong>Email:</strong> {formData.student.email}</p>
        <p><strong>Phone Number:</strong> {formData.student.phone_number}</p>
        <p><strong>Telephone Number:</strong> {formData.student.tel_number ?? 'N/A'}</p>
        <p><strong>Religion:</strong> {formData.student.religion}</p>
      </div>
      
      {/* Home Address */}
      <div>
        <h4 className="font-semibold">Home Address</h4>
        <p><strong>Street:</strong> {formData.homeAddress.street}</p>
        <p><strong>City:</strong> {formData.homeAddress.city}</p>
        <p><strong>Province:</strong> {formData.homeAddress.province}</p>
        <p><strong>Postal Code:</strong> {formData.homeAddress.postal_code}</p>
      </div>

      {/* Family Background */}
      <div>
        <h4 className="font-semibold">Family Background</h4>
        <p><strong>Father&apos;s Name:</strong> {formData.familyBackground.father_first_name ?? 'N/A'} {formData.familyBackground.father_last_name ?? ''}</p>
        <p><strong>Mother&apos;s Name:</strong> {formData.familyBackground.mother_first_name ?? 'N/A'} {formData.familyBackground.mother_last_name ?? ''}</p>
        <p><strong>Guardian&apos;s Name:</strong> {formData.familyBackground.guardian_first_name ?? 'N/A'} {formData.familyBackground.guardian_last_name ?? ''}</p>
      </div>

      {/* Medical Record */}
      <div>
        <h4 className="font-semibold">Medical Record</h4>
        <p><strong>Has Medical Condition:</strong> {formData.medicalRecord.has_medical_condition ? 'Yes' : 'No'}</p>
        {formData.medicalRecord.has_medical_condition && (
          <p><strong>Condition:</strong> {formData.medicalRecord.medical_condition}</p>
        )}
      </div>

      {/* Admission Details */}
      <div>
        <h4 className="font-semibold">Admission Details</h4>
        <p><strong>Admission Type:</strong> {formData.admission.admission_type}</p>
        <p><strong>Intended Grade Level:</strong> {formData.admission.intended_grade_level}</p>
        <p><strong>Admission Status:</strong> {formData.admission.status}</p>
        {formData.admission.previous_school && (
          <div>
            <h5 className="font-semibold mt-2">Previous School</h5>
            <p><strong>Name:</strong> {formData.admission.previous_school.name}</p>
            <p><strong>Address:</strong> {formData.admission.previous_school.address}</p>
            <p><strong>Last Year Level:</strong> {formData.admission.previous_school.last_year_level ?? 'N/A'}</p>
            <p><strong>Last School Year:</strong> {formData.admission.previous_school.last_school_year ?? 'N/A'}</p>
            <p><strong>General Weighted Average:</strong> {formData.admission.previous_school.general_weighted_average ?? 'N/A'}</p>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-6 flex justify-end">
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default ReviewInformation;
