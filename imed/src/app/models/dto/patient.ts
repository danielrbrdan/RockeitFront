import { AddressDTO } from "./address";

export class PatientDTO {
  id!: number;
  name!: string;
  phone!: number;
  totalAppointment!: number;
  addresses!: AddressDTO;
}
