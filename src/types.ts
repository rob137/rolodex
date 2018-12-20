export type ContactData = Contact[];

export type Contact = {
  name: string;
  phone: string;
  company: string;
  position: string;
  status: string;
  lastContact: string;
  notes: string;
}

export type NewContact = {
  name: string;
  phone: string;
  company: string;
  position: string;
  lastContact: string;
  notes: string;
}
