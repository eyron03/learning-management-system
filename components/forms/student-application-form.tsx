import React, { useState, useEffect } from "react";
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
import ReviewInformation from "@/components/forms/review-information";

const steps = [
  "Student Application",
  "Admission",
  "Family Background",
  "Medical Record",
  "School Information",
  "Review Information"
];

export default function StudentApplicationForm() {
  const [step, setStep] = useState<number | null>(null);

  // Simulate loading
  useEffect(() => {
    setTimeout(() => setStep(0), 1000);
  }, []);

  const nextStep = () => setStep((prev) => (prev !== null ? Math.min(prev + 1, steps.length - 1) : 0));
  const prevStep = () => setStep((prev) => (prev !== null ? Math.max(prev - 1, 0) : 0));

  const renderStep = () => {
    switch (step) {
      case 0:
        return <StudentApplication />;
      case 1:
        return <Admission />;
      case 2:
        return <ParentGuardian />;
      case 3:
        return <MedicalRecord />;
      case 4:
        return <School />;
      default:
        return <ReviewInformation formData={{
          student: {
            first_name: "",
            last_name: ""
          },
          admission: {
            admission_type: "",
            intended_grade_level: "",
            previous_school: ""
          },
          familyBackground: {
            father_first_name: "",
            father_last_name: "",
            mother_first_name: "",
            mother_last_name: ""
          },
          medicalRecord: {
            medical_conditions: ""
          },
          school: {
            name: "",
            address: ""
          }
        }} onSubmit={function (): void {
          throw new Error("Function not implemented.");
        } } />;
    }
  };

  if (step === null) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
        
        <div className="mb-4">
          <Skeleton className="h-6 w-1/2 mb-2" />
          <Skeleton className="h-6 w-2/3" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="flex justify-between mt-6">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
        </div>
        </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full mx-auto p-6 bg-white rounded-lg shadow-lg">
        
        {/* Breadcrumb Navigation */}
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
  
        {/* Step Content */}
        <div className="mt-6">{renderStep()}</div>
  
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <Button onClick={prevStep} disabled={step === 0} variant="outline">
            Previous
          </Button>
          <Button onClick={nextStep} disabled={step === steps.length - 1}>
            Next
          </Button>
        </div>
  
      </div>
    </div>
  );
  
}
