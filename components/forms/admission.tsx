import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

interface AdmissionFormProps {
  data: {
    admission_type: string;
    intended_grade_level: string;
    previous_school: string;
    previous_school_id: string;
    status: string;
  };
  onUpdate: (updatedData: Partial<AdmissionFormProps["data"]>) => void;
}

export default function AdmissionForm({ data, onUpdate }: AdmissionFormProps) {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Admission Details</h2>
      
      <Input
        name="admission_type"
        placeholder="Admission Type"
        value={formData.admission_type}
        onChange={handleChange}
        className="mb-2"
      />
      
      <Input
        name="intended_grade_level"
        placeholder="Intended Grade Level"
        value={formData.intended_grade_level}
        onChange={handleChange}
        className="mb-2"
      />
      
      <Input
        name="previous_school"
        placeholder="Previous School"
        value={formData.previous_school}
        onChange={handleChange}
        className="mb-2"
      />
      
      <Input
        name="previous_school_id"
        placeholder="Previous School ID"
        value={formData.previous_school_id}
        onChange={handleChange}
        className="mb-2"
      />
      
      <Input
        name="status"
        placeholder="Status"
        value={formData.status}
        onChange={handleChange}
        className="mb-2"
      />
    </div>
  );
}