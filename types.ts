
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  category: 'Hund' | 'Katze' | 'Pferd' | 'Allgemein';
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export interface AnamneseFormData {
  petType: 'Hund' | 'Katze';
  petName: string;
  age: string;
  breed: string;
  mainComplaint: string;
  currentDiet: string;
  medicalHistory: string;
  ownerName: string;
  ownerEmail: string;
}

export interface BookingSlot {
  id: string;
  time: string;
  date: string;
  available: boolean;
}
