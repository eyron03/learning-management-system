"use client";

import { useEffect, useState } from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Trash } from "lucide-react";
import SubjectForm from "./subject-form";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";

const ITEMS_PER_PAGE = 10;

type Teacher = {
  id: string;
  name: string;
  email: string;
  username: string;
  phone_number: string;
  address: string;
  role: string;
  date_of_birth: string;
};

type Subject = {
  id: string;
  name: string;
  teacherId?: string;
  teacher: Teacher | null;
};

export default function SubjectTable() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchSubjects();
  }, []);

  async function fetchSubjects() {
    setLoading(true);
    fetch("/api/subject")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched subjects:", data); // Debugging
        setSubjects(data);
      })
      .finally(() => setLoading(false));
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this subject?")) {
      setDeleting(id);
      await fetch(`/api/subject/${id}`, { method: "DELETE" });
      setSubjects(subjects.filter((subject) => subject.id !== id));
      setDeleting(null);
    }
  }

  const totalPages = Math.ceil(subjects.length / ITEMS_PER_PAGE);
  const paginatedSubjects = subjects.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="w-full px-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Subject Management</h1>
        <SubjectForm onSubjectAdded={fetchSubjects} />
      </div>

      <ScrollArea className="w-full h-[500px] border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead>Subject Name</TableHead>
              <TableHead>Assigned Teacher</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton className="h-4 w-[250px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
                  <TableCell className="text-center"><Skeleton className="h-8 w-8 rounded-full mx-auto" /></TableCell>
                </TableRow>
              ))
            ) : paginatedSubjects.length > 0 ? (
              paginatedSubjects.map((subject, index) => (
                <TableRow key={subject.id} className={`hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell>{subject.teacher ? subject.teacher.name : "Unassigned"}</TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(subject.id)}
                      disabled={deleting === subject.id}
                    >
                      {deleting === subject.id ? <Loader2 className="animate-spin w-4 h-4" /> : <Trash />}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center py-4 text-gray-500">
                  No subjects found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>

      <div className="mt-4">
        <Pagination>
          <PaginationContent>
            {currentPage > 1 ? (
              <PaginationItem>
                <PaginationPrevious onClick={() => setCurrentPage((prev) => prev - 1)} />
              </PaginationItem>
            ) : (
              <PaginationItem>
                <PaginationPrevious className="pointer-events-none opacity-50" />
              </PaginationItem>
            )}
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => setCurrentPage(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {currentPage < totalPages ? (
              <PaginationItem>
                <PaginationNext onClick={() => setCurrentPage((prev) => prev + 1)} />
              </PaginationItem>
            ) : (
              <PaginationItem>
                <PaginationNext className="pointer-events-none opacity-50" />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
