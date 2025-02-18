"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export default function StudentForm({ onStudentAdded }: { onStudentAdded: () => void }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    phone_number: "",
    date_of_birth: "",
    grade_level: "GRADE_1",
   
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleGradeChange(value: string) {
    setFormData({ ...formData, grade_level: value });
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

    if (!formData.email || !formData.password || !formData.phone_number || !formData.date_of_birth || !formData.grade_level) {
      setErrorMessage("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      await fetch("/api/students", {
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

          <div>
            <Label htmlFor="grade_level">Grade Level</Label>
            <Select onValueChange={handleGradeChange} defaultValue={formData.grade_level}>
              <SelectTrigger>
                <SelectValue placeholder="Select Grade Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="GRADE_1">Grade 1</SelectItem>
                <SelectItem value="GRADE_2">Grade 2</SelectItem>
                <SelectItem value="GRADE_3">Grade 3</SelectItem>
                <SelectItem value="GRADE_4">Grade 4</SelectItem>
                <SelectItem value="GRADE_5">Grade 5</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Classroom field will be implemented similarly */}

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
