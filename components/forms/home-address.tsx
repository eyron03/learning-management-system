import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface HomeAddressFormProps {
  studentApplicationId: string; // Pass this from the parent component
}

export default function HomeAddressForm({ studentApplicationId }: HomeAddressFormProps) {
  const [homeAddress, setHomeAddress] = useState({
    street: "",
    city: "",
    province: "",
    postal_code: "",
    student_application_id: studentApplicationId, // Automatically set
  });

  useEffect(() => {
    setHomeAddress((prev) => ({ ...prev, student_application_id: studentApplicationId }));
  }, [studentApplicationId]); // Update if the ID changes

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHomeAddress({ ...homeAddress, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/home-address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(homeAddress),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Home Address submitted successfully:", data);
      } else {
        console.error("Failed to submit Home Address:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting Home Address:", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">Home Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <Input name="street" placeholder="Street" onChange={handleChange} />
          <Input name="city" placeholder="City" onChange={handleChange} />
          <Input name="province" placeholder="Province" onChange={handleChange} />
          <Input name="postal_code" placeholder="Postal Code" onChange={handleChange} />
        </div>
      </form>
    </div>
  );
}
