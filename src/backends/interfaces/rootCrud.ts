import { Class, User } from "./data";

export interface createClassWithRelation  {
  data: Class;
  relation: {
    participants: User[];
    mentors: User[];
  };
};

export interface createClassWithoutRelation {
    data: Class
}

export interface updateClass {
  where: String,
  data?: Class | any
  participants?: User[] | any
  mentors?: User[] | any
}


