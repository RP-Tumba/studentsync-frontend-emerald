/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { studentService } from "../services/api";

const useStudentStore = create((set, get) => ({
  students: [],
  loading: false,
  error: null,
  selectedStudent: null,

  // Fetch all students
  fetchStudents: async () => {
    set({ loading: true, error: null });
    try {
      const response = await studentService.getAllStudents();
      set({ students: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Get single student
  getStudent: async (id) => {
    set({ loading: true, error: null });
    // implementation goes here
  },

  // Add student
  addStudent: async (studentData) => {
    set({ loading: true, error: null });
    // implementation goes here
  },

  // Update student
  updateStudent: async (id, studentData) => {
    set({ loading: true, error: null });
    // implementation goes here
  },

  // Delete student
  deleteStudent: async (id) => {
    set({ loading: true, error: null });
    // implementation goes here
  },
}));

export default useStudentStore;
