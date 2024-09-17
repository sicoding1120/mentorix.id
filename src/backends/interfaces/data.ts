// interface untuk model User
export interface User  {
  id: string;
  name?: string;
  password: string;
  fullName: string;
  email: string;
  profilePicture?: string;
  bio?: string;
  portfolioLink?: string;
  profileId: string;
  enrolledClasses: Class[]; // Relasi ke Class yang diikuti oleh User
  mentoredClasses: Class[]; // Relasi ke Class yang di-mentor-i oleh User
  schollStatus?: string;
};

// interface untuk model Class
export interface Class  {
  id_credential: string;
  title: string;
  price: number;
  isDiscount: boolean;
  discountPrice: number;
  difficultyLevel: string;
  lesson: number;
  mentorixPoin: number;
  time: number;
  progress: number;
  authorTeams: string;
  aboutClass: string;
  StepClass: string[];
  materiList: string[];
  prepareToLearn: string[];
  nilai?: Nilai; // Nilai dari enum Nilai
  isCertivicate: boolean;
  urlCertivication: string;
  participants: User[]; // Relasi ke User yang menjadi peserta kelas
  mentors: User[]; // Relasi ke User yang menjadi mentor kelas
};

// Enum untuk nilai (Nilai)
export enum Nilai {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}

// interface untuk request create class
export interface CreateClassInput  {
  title: string;
  price: number;
  isDiscount: boolean;
  discountPrice: number;
  difficultyLevel: string;
  lesson: number;
  mentorixPoin: number;
  time: number;
  progress: number;
  authorTeams: string;
  aboutClass: string;
  StepClass: string[];
  materiList: string[];
  prepareToLearn: string[];
  nilai?: Nilai;
  isCertivicate: boolean;
  urlCertivication: string;
  participantIds?: string[]; // Array ID untuk peserta
  mentorIds?: string[]; // Array ID untuk mentor
};

// interface untuk request create user
export interface CreateUserInput  {
  name?: string;
  password: string;
  fullName: string;
  email: string;
  profilePicture?: string;
  bio?: string;
  portfolioLink?: string;
  schollStatus?: string;
  enrolledClassIds?: string[]; // Array ID untuk kelas yang diikuti
  mentoredClassIds?: string[]; // Array ID untuk kelas yang di-mentor-i
};

// interface untuk response user dengan relasi class
export interface UserWithClasses  {
  id: string;
  name?: string;
  fullName: string;
  email: string;
  enrolledClasses: Class[];
  mentoredClasses: Class[];
};

// interface untuk response class dengan relasi user
export interface ClassWithUsers  {
  id_credential: string;
  title: string;
  price: number;
  participants: User[];
  mentors: User[];
};



