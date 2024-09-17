// Define the type for meta information
export interface Meta {
  timestamp: string; // ISO string format
  action: string;
  status: "success" | "failure" | "not_found";
}

// Define the type for additional info in responses
export interface Info {
  nextStep: string;
  note: string;
  version: string;
}

// Define the type for error details
export interface ErrorDetails {
  description: string;
  technicalDetails?: string;
  solution: string;
}

// Define the type for the response when creating a class
export interface CreateClassResponse {
  message: string;
  status: number;
  data: Class; // Define the Class type according to your model
  meta: Meta;
  info: Info;
}

// Define the type for the response when fetching all classes
export interface FetchAllClassesResponse {
  message: string;
  status: number;
  data: {
    totalRecords: number;
    classes: Class[]; // Define the Class type according to your model
  };
  meta: Meta;
  info: Info;
}

// Define the type for the response when fetching a single class by ID
export interface FetchClassByIdResponse {
  message: string;
  status: number;
  data: Class | null; // Class data or null if not found
  meta: Meta;
  info: Info;
}

// Define the type for the response when updating a class
export interface UpdateClassResponse {
  message: string;
  status: number;
  data: Class; // Define the Class type according to your model
  meta: Meta;
  info: Info;
}

// Define the type for the response when deleting a class
export interface DeleteClassResponse {
  message: string;
  status: number;
  data: Class; // Define the Class type according to your model
  meta: Meta;
  info: Info;
}

// Define the Class type based on your Prisma schema
export interface Class {
  id_credential: number;
  title: string;
  Kos: string;
  lesson: number;
  time: number;
  headerTitle: string;
  desc_cover: string;
  desc: string;
  kategori: string[];
  isDiscount: boolean;
  url: string;
  aboutClass: string[];
  isCertivicate: boolean;
  classDetail?: ClassDetail; // Optional field
}

// Define the ClassDetail type based on your Prisma schema
export interface ClassDetail {
  // Define fields for ClassDetail based on your schema
}
