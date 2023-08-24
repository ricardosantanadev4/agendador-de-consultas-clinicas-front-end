import { Especialista } from "./especialista"

export interface Consulta {
    id: string,
    especialista: Especialista,
    dataCriacao: string,
    dataAtendimento: string,
    horarioAtendimento: string,
    statusConsulta: string
}
