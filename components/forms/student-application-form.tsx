import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";

import StudentApplication from "@/components/forms/student-application";
import Admission from "@/components/forms/admission";
import ParentGuardian from "@/components/forms/family-background";
import MedicalRecord from "@/components/forms/medical-record";
import School from "@/components/forms/school";
import HomeAddressForm from "@/components/forms/home-address";
import ReviewInformation from "@/components/forms/review-information"; // Import ReviewInformation
import { useStudentApplication } from "@/hooks/useStudentApplication";

const MemoizedStudentApplication = React.memo(StudentApplication);
const MemoizedAdmission = React.memo(Admission);
const MemoizedParentGuardian = React.memo(ParentGuardian);
const MemoizedMedicalRecord = React.memo(MedicalRecord);
const MemoizedSchool = React.memo(School);
const MemoizedHomeAddressForm = React.memo(HomeAddressForm);
const MemoizedReviewInformation = React.memo(ReviewInformation);

export default function StudentApplicationForm() {
  const steps = useMemo(() => [
    "Student Application",
    "Home Address",
    "School Information",
    "Family Background",
    "Medical Record",
    "Admission",
    "Review Information"
  ], []);
  
  const { step, formData, updateFormData, nextStep, prevStep, handleSubmit } = useStudentApplication();

  const renderStep = useMemo(() => {
    switch (step) {
      case 0:
        return <MemoizedStudentApplication data={formData.studentApplication} onUpdate={(data) => updateFormData("studentApplication", data)} />;
      case 1:
        return <MemoizedHomeAddressForm data={formData.homeAddress} onUpdate={(data) => updateFormData("homeAddress", data)} />;
      case 2:
        return <MemoizedSchool data={formData.school} onUpdate={(data) => updateFormData("school", data)} />;
      case 3:
        return <MemoizedParentGuardian data={formData.parentGuardian} onUpdate={(data) => updateFormData("parentGuardian", data)} />;
      case 4:
        return <MemoizedMedicalRecord data={formData.medicalRecord} onUpdate={(data) => updateFormData("medicalRecord", data)} />;
      case 5:
        return <MemoizedAdmission data={formData.admission} onUpdate={(data) => updateFormData("admission", data)} />;
      case 6:
        return (
          <MemoizedReviewInformation
            formData={{
              ...formData,
              student: formData.studentApplication,
              admission: {
                ...formData.admission,
                previous_school: {
                  name: formData.admission.previous_school,
                  address: "",
                  last_year_level: "",
                  last_school_year: "",
                  general_weighted_average: 0
                }
              },
              familyBackground: {
                ...formData.parentGuardian,
                father_annual_income: Number(formData.parentGuardian.father_annual_income),
                mother_annual_income: Number(formData.parentGuardian.mother_annual_income),
                guardian_annual_income: Number(formData.parentGuardian.guardian_annual_income)
              },
              medicalRecord: {
                ...formData.medicalRecord,
                medical_condition: formData.medicalRecord.medical_condition || "",
                has_medical_condition: false
              }
            }}
            onSubmit={handleSubmit}
          />
        );
      default:
        return <MemoizedStudentApplication data={formData.studentApplication} onUpdate={(data) => updateFormData("studentApplication", data)} />;
    }
  }, [step, formData, updateFormData, handleSubmit]);

  if (step === null) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-3xl w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
          <Skeleton className="h-6 w-1/2 mb-2" />
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
    );
  }
adadadaaddadad
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
        <Breadcrumb>
          <BreadcrumbList>
            {steps.map((label, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {index === step ? (
                    <BreadcrumbPage className="text-blue-500">{label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={`#step-${index}`}>{label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < steps.length - 1 && <BreadcrumbSeparator key={`separator-${index}`} />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-6">{renderStep}</div>

        <div className="flex justify-between mt-6">
          <Button onClick={prevStep} disabled={step === 0} variant="outline">Previous</Button>
          {step === steps.length - 1 ? (
            <Button onClick={handleSubmit} variant="default">Submit</Button>
          ) : (
            <Button onClick={nextStep}>Next</Button>
          )}
        </div>
      </div>
    </div>
  );
}