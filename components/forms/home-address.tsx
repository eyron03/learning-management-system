import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

interface HomeAddressFormProps {
  data: {
    street: string;
    city: string;
    province: string;
    postal_code: string;
    student_application_id: string;
  };
  onUpdate: (updatedData: Partial<HomeAddressFormProps["data"]>) => void;
}

export default function HomeAddressForm({ data, onUpdate }: HomeAddressFormProps) {
  const searchParams = useSearchParams();
  const [studentApplicationId, setStudentApplicationId] = useState(data.student_application_id);
  const [homeAddress, setHomeAddress] = useState(data);

  useEffect(() => {
    const idFromQuery = searchParams.get("studentApplicationId");
    const idFromStorage = localStorage.getItem("studentApplicationId");

    if (idFromQuery) {
      setStudentApplicationId(idFromQuery);
      setHomeAddress((prev) => ({ ...prev, student_application_id: idFromQuery }));
      onUpdate({ student_application_id: idFromQuery });
    } else if (idFromStorage) {
      setStudentApplicationId(idFromStorage);
      setHomeAddress((prev) => ({ ...prev, student_application_id: idFromStorage }));
      onUpdate({ student_application_id: idFromStorage });
    }
  }, [searchParams, onUpdate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedAddress = { ...homeAddress, [e.target.name]: e.target.value };
    setHomeAddress(updatedAddress);
    onUpdate(updatedAddress);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">Home Address</h2>
      <div className="grid grid-cols-2 gap-4">
        <Input name="street" placeholder="Street" value={homeAddress.street} onChange={handleChange} />
        <Input name="city" placeholder="City" value={homeAddress.city} onChange={handleChange} />
        <Input name="province" placeholder="Province" value={homeAddress.province} onChange={handleChange} />
        <Input name="postal_code" placeholder="Postal Code" value={homeAddress.postal_code} onChange={handleChange} />
      </div>
      <p className="mt-4 text-center text-sm">Tracking Student ID: {studentApplicationId}</p>
    </div>
  );
}