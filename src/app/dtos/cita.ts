import { Cliente } from './cliente';

export class Cita {
    idCita: number;
    fecha: string;
    turno: number;
    asistencia: boolean;
    cliente: Cliente[];
}