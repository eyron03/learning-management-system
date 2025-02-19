"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

interface Classroom {
  id: string;
  name: string;
}

export default function StudentForm({ onStudentAdded }: { onStudentAdded: () => void }) {
  const [open, setOpen] = useState(false);
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    last_name:"",
    email: "",
    username: "",
    password: "",
    phone_number: "",
    date_of_birth: "",
    classroomId: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);

  // Fetch classrooms when modal opens
  useEffect(() => {
    if (open) {
      fetch("/api/classroom")
        .then((res) => res.json())
        .then((data) => setClassrooms(data))
        .catch((err) => console.error("Error fetching classrooms:", err));
    }
  }, [open]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleDateChange(date: Date | undefined) {
    if (date) {
      setFormData({ ...formData, date_of_birth: date.toISOString() });
      setDate(date);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    if (!formData.email || !formData.password || !formData.phone_number || !formData.date_of_birth || !formData.classroomId) {
      setErrorMessage("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      await fetch("/api/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setOpen(false);
      onStudentAdded();
    } catch (error) {
      console.error("Error adding student:", error);
      setErrorMessage("Failed to add student. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Add Student</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
        </DialogHeader>

        {errorMessage && <div className="text-red-600">{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">First Name</Label>
            <Input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="last_name">Last Name</Label>
            <Input id="last_name" type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="phone_number">Phone Number</Label>
            <Input id="phone_number" type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
          </div>

         
          <div>
            <Label htmlFor="classroomId">Classroom</Label>
    <select id="classroomId" name="classroomId"value={formData.classroomId}onChange={handleChange} required className="border rounded p-2 w-full" aria-label="Select a classroom"  title="Select a classroom" >
                  <option value="">Select a classroom</option>
                  {classrooms.map((classroom) => (
                    <option key={classroom.id} value={classroom.id}>
                      {classroom.name}
                    </option>
                  ))}
                </select>

          </div>

          <div>
            <Label htmlFor="date_of_birth">Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={`w-[240px] justify-start text-left font-normal ${!date ? "text-muted-foreground" : ""}`}>
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2 rounded-lg shadow-lg border bg-white" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateChange}
                  initialFocus
                  captionLayout="dropdown-buttons"
                  fromYear={1960}
                  toYear={2025}
                  className="rounded-lg border shadow-md p-4 bg-gray-50"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="animate-spin w-4 h-4" /> : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
