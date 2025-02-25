import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center">Review Your Information</h3>

      <Card>
        <CardHeader>
          <CardTitle>Student Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <p><strong>Name:</strong> {formData.student.first_name} {formData.student.middle_name ?? ''} {formData.student.last_name} {formData.student.suffix ?? ''}</p>
          <p><strong>Gender:</strong> {formData.student.gender}</p>
          <p><strong>Date of Birth:</strong> {formData.student.date_of_birth}</p>
          <p><strong>Birth Place:</strong> {formData.student.birth_place}</p>
          <p><strong>Nationality:</strong> {formData.student.nationality}</p>
          <p><strong>Email:</strong> {formData.student.email}</p>
          <p><strong>Phone Number:</strong> {formData.student.phone_number}</p>
          <p><strong>Telephone:</strong> {formData.student.tel_number || "N/A"}</p>
          <p><strong>Religion:</strong> {formData.student.religion}</p>
        </CardContent>
      </Card>

     
      <Card>
        <CardHeader>
          <CardTitle>Home Address</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <p><strong>Street:</strong> {formData.homeAddress.street}</p>
          <p><strong>City:</strong> {formData.homeAddress.city}</p>
          <p><strong>Province:</strong> {formData.homeAddress.province}</p>
          <p><strong>Postal Code:</strong> {formData.homeAddress.postal_code}</p>
        </CardContent>
      </Card>

      
      <Card>
        <CardHeader>
          <CardTitle>Family Background</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <p><strong>Father:</strong> {formData.familyBackground.father_first_name || "N/A"} {formData.familyBackground.father_last_name || ""}</p>
          <p><strong>Mother:</strong> {formData.familyBackground.mother_first_name || "N/A"} {formData.familyBackground.mother_last_name || ""}</p>
          <p><strong>Guardian:</strong> {formData.familyBackground.guardian_first_name || "N/A"} {formData.familyBackground.guardian_last_name || ""}</p>
        </CardContent>
      </Card>

      
      <Card>
        <CardHeader>
          <CardTitle>Medical Record</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Has Medical Condition:</strong> {formData.medicalRecord.has_medical_condition ? "Yes" : "No"}</p>
          {formData.medicalRecord.has_medical_condition && (
            <p><strong>Condition:</strong> {formData.medicalRecord.medical_condition}</p>
          )}
        </CardContent>
      </Card>

      {/* Admission Details */}
      <Card>
        <CardHeader>
          <CardTitle>Admission Details</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <p><strong>Admission Type:</strong> {formData.admission.admission_type}</p>
          <p><strong>Intended Grade Level:</strong> {formData.admission.intended_grade_level}</p>
          <p><strong>Status:</strong> {formData.admission.status}</p>
          {formData.admission.previous_school && (
            <>
              <Separator />
              <h4 className="col-span-2 font-semibold">Previous School</h4>
              <p><strong>Name:</strong> {formData.admission.previous_school.name}</p>
              <p><strong>Address:</strong> {formData.admission.previous_school.address}</p>
              <p><strong>Last Year Level:</strong> {formData.admission.previous_school.last_year_level || "N/A"}</p>
              <p><strong>Last School Year:</strong> {formData.admission.previous_school.last_school_year || "N/A"}</p>
              <p><strong>General Weighted Average:</strong> {formData.admission.previous_school.general_weighted_average || "N/A"}</p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="mt-6 flex justify-center">
        <Button size="lg" onClick={onSubmit} className="px-6">
          Submit Application
        </Button>
      </div>
    </div>
  );
};

export default ReviewInformation;
