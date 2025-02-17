import { PrismaClient } from "@prisma/client";
import { SubjectCreateInput, SubjectUpdateInput, SubjectWhereUniqueInput, SubjectWhereInput } from "@/types/subject";

const prisma = new PrismaClient();

// Create a new subject
export const createSubject = async (data: SubjectCreateInput) => {
  try {
    const subject = await prisma.subject.create({
      data,
    });
    return subject;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Error creating subject: " + error.message);
    } else {
      throw new Error("Unknown error occurred while creating subject");
    }
  }
};

// Update an existing subject
export const updateSubject = async (where: SubjectWhereUniqueInput, data: SubjectUpdateInput) => {
  try {
    const subject = await prisma.subject.update({
      where,
      data,
    });
    return subject;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Error updating subject: " + error.message);
    } else {
      throw new Error("Unknown error occurred while updating subject");
    }
  }
};

// Find a subject by unique identifier (id)
export const findSubjectById = async (where: SubjectWhereUniqueInput) => {
  try {
    const subject = await prisma.subject.findUnique({
      where,
    });
    return subject;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Error finding subject: " + error.message);
    } else {
      throw new Error("Unknown error occurred while finding subject");
    }
  }
};

// Find all subjects (no filters)
export const findAllSubjects = async () => {
  try {
    const subjects = await prisma.subject.findMany(); // No filters applied
    return subjects;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Error finding all subjects: " + error.message);
    } else {
      throw new Error("Unknown error occurred while finding all subjects");
    }
  }
};

// Find subjects based on filters
export const findSubjects = async (where: SubjectWhereInput) => {
  try {
    const subjects = await prisma.subject.findMany({
      where,
    });
    return subjects;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Error finding subjects: " + error.message);
    } else {
      throw new Error("Unknown error occurred while finding subjects");
    }
  }
};

// Delete a subject
export const deleteSubject = async (where: SubjectWhereUniqueInput) => {
  try {
    const subject = await prisma.subject.delete({
      where,
    });
    return subject;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Error deleting subject: " + error.message);
    } else {
      throw new Error("Unknown error occurred while deleting subject");
    }
  }
};
