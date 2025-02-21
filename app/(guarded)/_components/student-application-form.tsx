import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";

const steps = ["Personal Information", "Address Details", "Guardian Information", "Medical Information", "Review & Submit"];

export default function StudentApplicationForm() {
  const [step, setStep] = useState(0);
  
  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <Breadcrumb>
        {steps.map((label, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink className={step === index ? "text-blue-500" : ""}>{label}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      {step === 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <Input placeholder="First Name" className="mb-2" />
          <Input placeholder="Middle Name" className="mb-2" />
          <Input placeholder="Last Name" className="mb-2" />
          <Input type="date" placeholder="Date of Birth" className="mb-2" />
        </div>
      )}

      {step === 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Address Details</h2>
          <Input placeholder="Permanent Address" className="mb-2" />
          <Input placeholder="Current Address" className="mb-2" />
          <Input placeholder="Postal Code" className="mb-2" />
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Guardian Information</h2>
          <Input placeholder="Guardian Name" className="mb-2" />
          <Input placeholder="Relation" className="mb-2" />
          <Input placeholder="Phone Number" className="mb-2" />
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Medical Information</h2>
          <Input type="checkbox" className="mb-2" /> Has Medical Condition
          <Input placeholder="Medical Condition (if any)" className="mb-2" />
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>
          <p className="text-gray-600">Ensure all information is correct before submission.</p>
          <Button className="mt-4">Submit Application</Button>
        </div>
      )}

      <div className="flex justify-between mt-4">
        <Button onClick={prevStep} disabled={step === 0} variant="outline">
          Previous
        </Button>
        <Button onClick={nextStep} disabled={step === steps.length - 1}>
          Next
        </Button>
      </div>
    </div>
  );
}
