import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

interface ParentGuardianFormProps {
  data: {
    father_first_name: string;
    father_middle_name: string;
    father_last_name: string;
    father_occupation: string;
    father_annual_income: string;
    father_phone_number: string;
    father_deceased: boolean;

    mother_first_name: string;
    mother_middle_name: string;
    mother_last_name: string;
    mother_occupation: string;
    mother_annual_income: string;
    mother_phone_number: string;
    mother_deceased: boolean;

    guardian_first_name: string;
    guardian_middle_name: string;
    guardian_last_name: string;
    guardian_occupation: string;
    guardian_annual_income: string;
    guardian_phone_number: string;
  };
  onUpdate: (updatedData: Partial<ParentGuardianFormProps["data"]>) => void;
}

export default function ParentGuardianForm({ data, onUpdate }: ParentGuardianFormProps) {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const updatedData = type === "checkbox" ? { ...formData, [name]: checked } : { ...formData, [name]: value };
    setFormData(updatedData);
    onUpdate(updatedData);
  };

  const showGuardianForm = formData.father_deceased && formData.mother_deceased;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Family Background Information</h2>

      {/* Father Fields */}
      <h3 className="font-semibold mb-2 text-center">Father Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-1">
          <Input
            name="father_first_name"
            placeholder="Father's First Name"
            value={formData.father_first_name}
            onChange={handleChange}
            className="mb-2"
            disabled={formData.father_deceased}
          />
        </div>
        <div className="col-span-1">
          <Input
            name="father_middle_name"
            placeholder="Father's Middle Name"
            value={formData.father_middle_name}
            onChange={handleChange}
            className="mb-2"
            disabled={formData.father_deceased}
          />
        </div>
        <div className="col-span-1">
          <Input
            name="father_last_name"
            placeholder="Father's Last Name"
            value={formData.father_last_name}
            onChange={handleChange}
            className="mb-2"
            disabled={formData.father_deceased}
          />
        </div>
        <div className="col-span-1">
          <Input
            name="father_occupation"
            placeholder="Father's Occupation"
            value={formData.father_occupation}
            onChange={handleChange}
            className="mb-2"
            disabled={formData.father_deceased}
          />
        </div>
        <div className="col-span-1">
          <Input
            name="father_annual_income"
            type="number"
            placeholder="Father's Annual Income"
            value={formData.father_annual_income}
            onChange={handleChange}
            className="mb-2"
            disabled={formData.father_deceased}
          />
        </div>
        <div className="col-span-1">
          <Input
            name="father_phone_number"
            placeholder="Father's Phone Number"
            value={formData.father_phone_number}
            onChange={handleChange}
            className="mb-2"
            disabled={formData.father_deceased}
          />
        </div>
        <div className="col-span-2">
          <label className="block">
            <input
              type="checkbox"
              name="father_deceased"
              checked={formData.father_deceased}
              onChange={handleChange}
              className="mr-2"
            />
            Father Deceased
          </label>
        </div>
      </div>

      
      
      <h3 className="font-semibold mb-2 text-center">Mother Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-1">
          <Input
            name="mother_first_name"
            placeholder="Mother's First Name"
            value={formData.mother_first_name}
            onChange={handleChange}
            className="mb-2"
            disabled={formData.mother_deceased}
          />
        </div>
        <div className="col-span-1">
          <Input
            name="mother_middle_name"
            placeholder="Mother's Middle Name"
            value={formData.mother_middle_name}
            onChange={handleChange}
            className="mb-2"
            disabled={formData.mother_deceased}
          />
        </div>
        <div className="col-span-1">
          <Input
            name="mother_last_name"
            placeholder="Mother's Last Name"
            value={formData.mother_last_name}
            onChange={handleChange}
            className="mb-2"
            disabled={formData.mother_deceased}
          />
        </div>
        <div className="col-span-1">
          <Input
            name="mother_occupation"
            placeholder="Mother's Occupation"
            value={formData.mother_occupation}
            onChange={handleChange}
            className="mb-2"
            disabled={formData.mother_deceased}
          />
        </div>
        <div className="col-span-1">
          <Input
            name="mother_annual_income"
            type="number"
            placeholder="Mother's Annual Income"
            value={formData.mother_annual_income}
            onChange={handleChange}
            className="mb-2"
            disabled={formData.mother_deceased}
          />
        </div>
        <div className="col-span-1">
          <Input
            name="mother_phone_number"
            placeholder="Mother's Phone Number"
            value={formData.mother_phone_number}
            onChange={handleChange}
            className="mb-2"
            disabled={formData.mother_deceased}
          />
        </div>
        <div className="col-span-2">
          <label className="block">
            <input
              type="checkbox"
              name="mother_deceased"
              checked={formData.mother_deceased}
              onChange={handleChange}
              className="mr-2"
            />
            Mother Deceased
          </label>
        </div>
      </div>

      {showGuardianForm && (
        <div className="space-y-4">
          <h3 className="font-semibold mb-4 text-center">Guardian Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="col-span-1">
              <Input
                name="guardian_first_name"
                placeholder="Guardian's First Name"
                value={formData.guardian_first_name}
                onChange={handleChange}
                className="mb-2"
              />
            </div>
            <div className="col-span-1">
              <Input
                name="guardian_middle_name"
                placeholder="Guardian's Middle Name"
                value={formData.guardian_middle_name}
                onChange={handleChange}
                className="mb-2"
              />
            </div>
            <div className="col-span-1">
              <Input
                name="guardian_last_name"
                placeholder="Guardian's Last Name"
                value={formData.guardian_last_name}
                onChange={handleChange}
                className="mb-2"
              />
            </div>
            <div className="col-span-1">
              <Input
                name="guardian_occupation"
                placeholder="Guardian's Occupation"
                value={formData.guardian_occupation}
                onChange={handleChange}
                className="mb-2"
              />
            </div>
            <div className="col-span-1">
              <Input
                name="guardian_annual_income"
                type="number"
                placeholder="Guardian's Annual Income"
                value={formData.guardian_annual_income}
                onChange={handleChange}
                className="mb-2"
              />
            </div>
            <div className="col-span-1">
              <Input
                name="guardian_phone_number"
                placeholder="Guardian's Phone Number"
                value={formData.guardian_phone_number}
                onChange={handleChange}
                className="mb-2"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}