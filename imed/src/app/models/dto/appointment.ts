import { PatientDTO } from "./patient";
import { ProfessionalDTO } from "./professional";

export class AppointmentDTO {
  appointmentId!: number;
  professional: ProfessionalDTO = new ProfessionalDTO();
  patient: PatientDTO = new PatientDTO();
  dateTime!: Date;
  date_created!: Date;
  observation!: String;
}
