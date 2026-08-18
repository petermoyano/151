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
  "end-stops": {
    id: "end-stops",
    name: "Topes de fin de carrera",
    parentId: "rails",
    category: "Seguridad de traslación",
    description:
      "Conjunto de topes mecánicos y amortiguadores que limita el recorrido del puente en ambos extremos de los rieles.",
    status: "Operativo",
    assetCode: "CRN-01-STP",
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
  "power-supply": {
    id: "power-supply",
    name: "Alimentación eléctrica por festón",
    parentId: "bridge",
    category: "Alimentación eléctrica",
    description:
      "Riel portacables, carros y lazos flexibles que suministran energía al carro durante su desplazamiento.",
    status: "Operativo",
    assetCode: "CRN-01-FST",
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
  "trolley-motor-a": {
    id: "trolley-motor-a",
    name: "Motor de traslación A",
    parentId: "trolley",
    category: "Accionamiento del carro",
    description:
      "Motorreductor eléctrico del lado A que impulsa el desplazamiento transversal del carro.",
    status: "Operativo",
    assetCode: "CRN-01-TRL-MA",
  },
  "trolley-motor-b": {
    id: "trolley-motor-b",
    name: "Motor de traslación B",
    parentId: "trolley",
    category: "Accionamiento del carro",
    description:
      "Motorreductor eléctrico del lado B que sincroniza el desplazamiento transversal del carro.",
    status: "Operativo",
    assetCode: "CRN-01-TRL-MB",
  },
  "trolley-wheels": {
    id: "trolley-wheels",
    name: "Ruedas del carro",
    parentId: "trolley",
    category: "Rodadura del carro",
    description:
      "Conjunto de cuatro ruedas, ejes y superficies de rodadura que guía el carro sobre el puente.",
    status: "Operativo",
    assetCode: "CRN-01-TRL-WHL",
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
