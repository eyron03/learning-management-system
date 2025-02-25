import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

interface SchoolFormProps {
  data: {
    name: string;
    address: string;
    last_year_level: string;
    last_school_year: string;
    general_weighted_average: string;
  };
  onUpdate: (updatedData: Partial<SchoolFormProps["data"]>) => void;
}

export default function SchoolForm({ data, onUpdate }: SchoolFormProps) {
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
      <h2 className="text-xl font-semibold mb-4">School Information</h2>

      <Input
        name="name"
        placeholder="School Name"
        value={formData.name}
        onChange={handleChange}
        className="mb-2"
      />

      <Input
        name="address"
        placeholder="School Address"
        value={formData.address}
        onChange={handleChange}
        className="mb-2"
      />

      <Input
        name="last_year_level"
        placeholder="Last Year Level Attended"
        value={formData.last_year_level}
        onChange={handleChange}
        className="mb-2"
      />

      <Input
        name="last_school_year"
        placeholder="Last School Year Attended"
        value={formData.last_school_year}
        onChange={handleChange}
        className="mb-2"
      />

      <Input
        name="general_weighted_average"
        placeholder="General Weighted Average"
        value={formData.general_weighted_average}
        onChange={handleChange}
        className="mb-2"
      />
    </div>
  );
}
