import { Consulta } from "./consulta";

export interface Paciente {
    id: string,
    name: string,
    rg: string,
    telefone: string,
    dataNascimento: string,
    consulta: Consulta[]
}