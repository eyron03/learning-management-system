"use client";

import { useEffect, useState } from "react"
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Loader2, Trash } from "lucide-react"
import TeacherForm from "./teacher-form" 
import { format } from 'date-fns';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Skeleton } from "@/components/ui/skeleton"

type Teacher = {
  id: string
  email: string
  username: string
  role: string
  phone_number: string
  date_of_birth: string
}

const ITEMS_PER_PAGE = 10

export default function TeacherTable() {
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchTeachers()
  }, [])

  async function fetchTeachers() {
    setLoading(true)
    fetch("/api/teacher")
      .then((res) => res.json())
      .then((data) => setTeachers(data))
      .finally(() => setLoading(false))
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this teacher?")) {
      setDeleting(id)
      await fetch(`/api/teacher/${id}`, { method: "DELETE" })
      setTeachers(teachers.filter((teacher) => teacher.id !== id))
      setDeleting(null)
    }
  }

  const totalPages = Math.ceil(teachers.length / ITEMS_PER_PAGE)
  const paginatedTeachers = teachers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  return (
    <div className="w-full px-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Teacher Management</h1>
        <TeacherForm onTeacherAdded={fetchTeachers} />
      </div>

      <ScrollArea className="w-full h-[500px] border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead>Email</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Date of Birth</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton className="h-4 w-[250px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell className="text-center"><Skeleton className="h-8 w-8 rounded-full mx-auto" /></TableCell>
                </TableRow>
              ))
            ) : paginatedTeachers.length > 0 ? (
              paginatedTeachers.map((teacher, index) => (
                <TableRow
                  key={teacher.id}
                  className={`hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <TableCell>{teacher.email}</TableCell>
                  <TableCell>{teacher.username}</TableCell>
                  <TableCell>{teacher.phone_number}</TableCell>
                  <TableCell>{teacher.date_of_birth ? format(new Date(teacher.date_of_birth), 'MM/dd/yyyy') : ''}</TableCell>
                  <TableCell className="uppercase font-semibold">{teacher.role}</TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(teacher.id)}
                      disabled={deleting === teacher.id}
                    >
                      {deleting === teacher.id ? <Loader2 className="animate-spin w-4 h-4" /> : <Trash />}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                  No teachers found.
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
  )
}
