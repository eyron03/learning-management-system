"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Teacher {
  id: string;
  name: string;
  last_name: string;
}

export default function ClassroomForm({ onClassroomAdded }: { onClassroomAdded: () => void }) {
  const [name, setName] = useState("");
  const [gradeLevel, setGradeLevel] = useState("GRADE_1");
  const [teacherId, setTeacherId] = useState("");
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchTeachers() {
      const res = await fetch("/api/teacher");
      if (res.ok) {
        const data = await res.json();
        setTeachers(data);
      }
    }
    fetchTeachers();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/classroom", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, grade_level: gradeLevel, teacherId }),
    });

    if (res.ok) {
      onClassroomAdded();
      setOpen(false);
      setName("");
      setGradeLevel("GRADE_1");
      setTeacherId("");
    }
    setLoading(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Classroom</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Classroom</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <Label>Grade Level</Label>
            <Select value={gradeLevel} onValueChange={setGradeLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select Grade Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="GRADE_1">Grade 1</SelectItem>
                <SelectItem value="GRADE_2">Grade 2</SelectItem>
                <SelectItem value="GRADE_3">Grade 3</SelectItem>
                <SelectItem value="GRADE_4">Grade 4</SelectItem>
                <SelectItem value="GRADE_5">Grade 5</SelectItem>
                <SelectItem value="GRADE_6">Grade 6</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Assign Teacher</Label>
            <Select value={teacherId} onValueChange={setTeacherId}>
              <SelectTrigger>
                <SelectValue placeholder="Select a Teacher" />
              </SelectTrigger>
              <SelectContent>
                {teachers.map((teacher) => (
                  <SelectItem key={teacher.id} value={teacher.id}>
                    {teacher.name} {teacher.last_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="animate-spin w-4 h-4" /> : "Create"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
