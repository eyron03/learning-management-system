import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { AdmissionType, AdmissionStatus } from "@/helpers/enums";

interface AdmissionFormProps {
  data: {
    admission_type: AdmissionType;
    intended_grade_level: string;
    previous_school: string;
    status: AdmissionStatus;
  };
  schools?: { id: string; name: string }[]; // Make schools optional
  onUpdate: (updatedData: Partial<AdmissionFormProps["data"]>) => void;
}

export default function AdmissionForm({ data, schools = [], onUpdate }: AdmissionFormProps) {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (name: string, value: string) => {
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Admission Details</h2>

      {/* Admission Type (Enum) */}
      <Select onValueChange={(value) => handleChange("admission_type", value)}>
        <SelectTrigger>
          <SelectValue placeholder="Select Admission Type" />
        </SelectTrigger>
        <SelectContent>
          {Object.values(AdmissionType).map((type) => (
            <SelectItem key={type} value={type}>{type}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Intended Grade Level */}
      <Input
        name="intended_grade_level"
        placeholder="Intended Grade Level"
        value={formData.intended_grade_level}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        className="mb-2"
      />

<Select onValueChange={(value) => handleChange("previous_school", value)}>
  <SelectTrigger>
    <SelectValue placeholder="Select Previous School" />
  </SelectTrigger>
  <SelectContent>
    {schools.length > 0 ? (
      schools.map((school) => (
        <SelectItem key={school.id} value={school.id}>{school.name}</SelectItem>
      ))
    ) : (
      <SelectItem key="no-schools" value="none" disabled>No schools available</SelectItem>
    )}
  </SelectContent>
</Select>


   
    </div>
  );
}
