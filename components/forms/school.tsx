import { Input } from "@/components/ui/input";
import { useState } from "react";


export default function SchoolForm() {

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    last_year_level: "",
    last_school_year: "",
    general_weighted_average: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div >
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
        placeholder="Last Year Level"
        value={formData.last_year_level}
        onChange={handleChange}
        className="mb-2"
      />
      <Input
        name="last_school_year"
        placeholder="Last School Year"
        value={formData.last_school_year}
        onChange={handleChange}
        className="mb-2"
      />
      <Input
        name="general_weighted_average"
        type="number"
        placeholder="General Weighted Average"
        value={formData.general_weighted_average}
        onChange={handleChange}
        className="mb-2"
      />

      
    </div>
  );
}
