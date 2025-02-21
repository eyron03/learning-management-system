// components/forms/review-information.tsx
import React from "react";
import { Button } from "@/components/ui/button";

interface ReviewInformationProps {
  formData: {
    student: {
      first_name: string;
      last_name: string;
    };
    admission: {
      admission_type: string;
      intended_grade_level: string;
      previous_school: string;
    };
    familyBackground: {
      father_first_name: string;
      father_last_name: string;
      mother_first_name: string;
      mother_last_name: string;
    };
    medicalRecord: {
      medical_conditions: string;
    };
    school: {
      name: string;
      address: string;
    };
  };
  onSubmit: () => void;
}

const ReviewInformation: React.FC<ReviewInformationProps> = ({ formData, onSubmit }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Review Information</h3>
      
      {/* Student Application */}
      <div>
        <h4 className="font-semibold">Student Application</h4>
        <p><strong>First Name:</strong> {formData.student.first_name}</p>
        <p><strong>Last Name:</strong> {formData.student.last_name}</p>
        {/* Add other student application data here */}
      </div>

      {/* Admission Details */}
      <div>
        <h4 className="font-semibold">Admission Details</h4>
        <p><strong>Admission Type:</strong> {formData.admission.admission_type}</p>
        <p><strong>Intended Grade Level:</strong> {formData.admission.intended_grade_level}</p>
        <p><strong>Previous School:</strong> {formData.admission.previous_school}</p>
        {/* Add other admission details here */}
      </div>

      {/* Family Background */}
      <div>
        <h4 className="font-semibold">Family Background</h4>
        <p><strong>Fathers Name:</strong> {formData.familyBackground.father_first_name} {formData.familyBackground.father_last_name}</p>
        <p><strong>Mothers Name:</strong> {formData.familyBackground.mother_first_name} {formData.familyBackground.mother_last_name}</p>
        {/* Add other family background data here */}
      </div>

      {/* Medical Record */}
      <div>
        <h4 className="font-semibold">Medical Record</h4>
        <p><strong>Medical Conditions:</strong> {formData.medicalRecord.medical_conditions}</p>
        {/* Add other medical record data here */}
      </div>

      {/* School Information */}
      <div>
        <h4 className="font-semibold">School Information</h4>
        <p><strong>School Name:</strong> {formData.school.name}</p>
        <p><strong>School Address:</strong> {formData.school.address}</p>
        {/* Add other school information data here */}
      </div>

      {/* Submit Button */}
      <div className="mt-6 flex justify-end">
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default ReviewInformation;
