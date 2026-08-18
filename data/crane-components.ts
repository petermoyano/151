import type {
  CraneComponentId,
  IndustrialComponentMetadata,
} from "@/types/industrial";

export const craneComponents: Record<
  CraneComponentId,
  IndustrialComponentMetadata<CraneComponentId>
> = {
  rails: {
    id: "rails",
    name: "Rieles de apoyo",
    category: "Estructura de rodadura",
    description:
      "Vigas carrileras y columnas de apoyo que permiten el desplazamiento de la grúa a lo largo de la nave.",
    status: "Operativo",
    assetCode: "CRN-01-RWY",
  },
  bridge: {
    id: "bridge",
    name: "Puente de la grúa",
    category: "Estructura principal",
    description:
      "Estructura portante que atraviesa la nave y sostiene el recorrido transversal del carro.",
    status: "Operativo",
    assetCode: "CRN-01-BRG",
  },
  trolley: {
    id: "trolley",
    name: "Carro de traslación",
    category: "Mecanismo de traslación",
    description:
      "Carro motorizado que posiciona el conjunto de elevación a lo ancho del puente.",
    status: "Operativo",
    assetCode: "CRN-01-TRL",
  },
  hoist: {
    id: "hoist",
    name: "Conjunto del polipasto",
    category: "Sistema de elevación",
    description:
      "Motor, reductor y tambor de cable que elevan y descienden la carga suspendida.",
    status: "Operativo",
    assetCode: "CRN-01-HST",
  },
  cable: {
    id: "cable",
    name: "Cable de acero",
    category: "Sistema de elevación",
    description:
      "Cables de acero de alta resistencia que conectan el tambor del polipasto con el bloque del gancho.",
    status: "Operativo",
    assetCode: "CRN-01-CBL",
  },
  hook: {
    id: "hook",
    name: "Gancho principal",
    category: "Accesorio de izaje",
    description:
      "Punto principal de acero forjado utilizado para conectar y asegurar las cargas durante el izaje.",
    status: "Operativo",
    assetCode: "CRN-01-HK1",
  },
};
