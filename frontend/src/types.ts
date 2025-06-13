export interface Tag {
  text: string;
  color: string;
}

export interface ContactInfo {
  email: string;
  website: string;
  phone: string;
}

export interface Socials {
  linkedin: string;
  github: string;
}

export interface Professor {
  id: string;
  name: string;
  university: string;
  location: string;
  image: string;
  tags: Tag[];
  bio: string;
  contact: ContactInfo;
  socials: Socials;
}

export interface ProfessorCardProps {
    prof: Professor;
    openProfessorModal: (prof: Professor) => void;
}
export interface ProfessorsContextType {
    professors: Professor[];
    loading: boolean;
    error: string | null;
}

export interface ScholorshipType {
    title: string;
    university?: string;
    organization?: string;
    location: string;
    field: string;
    description: string;
    deadline: string;
}