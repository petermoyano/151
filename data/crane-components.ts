import { forvisComponentData } from "@/data/forvis-component-data";
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
    name: "Vías carrileras",
    category: "Estructura de rodadura",
    description:
      "Vigas carrileras elevadas y columnas de apoyo para el desplazamiento longitudinal del puente FORVIS.",
    status: "Operativo",
    assetCode: "CRN-01-RWY",
    ...forvisComponentData.rails,
  },
  "end-stops": {
    id: "end-stops",
    name: "Topes y fines de carrera",
    parentId: "rails",
    category: "Seguridad de traslación",
    description:
      "Topes mecánicos, paragolpes y finales de carrera que limitan el recorrido del puente en ambos extremos.",
    status: "Operativo",
    assetCode: "CRN-01-STP",
    ...forvisComponentData["end-stops"],
  },
  bridge: {
    id: "bridge",
    name: "Puente birriel FORVIS",
    category: "Estructura principal",
    description:
      "Puente grúa birriel apoyado, con vigas de carga superiores y configuración nominal de 5 toneladas.",
    status: "Operativo",
    assetCode: "CRN-01-BRG",
    ...forvisComponentData.bridge,
  },
  "power-supply": {
    id: "power-supply",
    name: "Sistema festón de alimentación",
    parentId: "bridge",
    category: "Alimentación eléctrica",
    description:
      "Sistema de electrificación móvil por festón integrado por FORVIS para alimentar el carro sobre la trocha.",
    status: "Operativo",
    assetCode: "CRN-01-FST",
    ...forvisComponentData["power-supply"],
  },
  "main-power-panel": {
    id: "main-power-panel",
    name: "Tablero general de potencia",
    parentId: "power-supply",
    category: "Distribución eléctrica",
    description:
      "Gabinete FORVIS de seccionamiento, protección y distribución eléctrica del puente grúa.",
    status: "Operativo",
    assetCode: "CRN-01-PNL-PWR",
    ...forvisComponentData["main-power-panel"],
  },
  "bridge-control-panel": {
    id: "bridge-control-panel",
    name: "Tablero de control del puente",
    parentId: "power-supply",
    category: "Control y automatización",
    description:
      "Gabinete de maniobra FORVIS con receptor industrial Alpha 608B para tres movimientos.",
    status: "Operativo",
    assetCode: "CRN-01-PNL-CTL",
    ...forvisComponentData["bridge-control-panel"],
  },
  trolley: {
    id: "trolley",
    name: "Carro birriel FORVIS",
    category: "Mecanismo de traslación",
    description:
      "Carro eléctrico birriel asociado al polipasto FVS3 5008.1 para posicionamiento transversal.",
    status: "Operativo",
    assetCode: "CRN-01-TRL",
    ...forvisComponentData.trolley,
  },
  "trolley-motor-a": {
    id: "trolley-motor-a",
    name: "Motor de traslación A",
    parentId: "trolley",
    category: "Accionamiento del carro",
    description:
      "Motorreductor de corriente alterna con freno a disco, instalado en el lado A del carro.",
    status: "Operativo",
    assetCode: "CRN-01-TRL-MA",
    ...forvisComponentData["trolley-motor-a"],
  },
  "trolley-motor-b": {
    id: "trolley-motor-b",
    name: "Motor de traslación B",
    parentId: "trolley",
    category: "Accionamiento del carro",
    description:
      "Motorreductor de corriente alterna con freno a disco, instalado en el lado B del carro.",
    status: "Operativo",
    assetCode: "CRN-01-TRL-MB",
    ...forvisComponentData["trolley-motor-b"],
  },
  "trolley-wheels": {
    id: "trolley-wheels",
    name: "Ruedas del carro",
    parentId: "trolley",
    category: "Rodadura del carro",
    description:
      "Conjunto de cuatro ruedas pestañadas que guía el carro birriel sobre las vigas del puente.",
    status: "Operativo",
    assetCode: "CRN-01-TRL-WHL",
    ...forvisComponentData["trolley-wheels"],
  },
  hoist: {
    id: "hoist",
    name: "Polipasto FORVIS FVS3",
    category: "Sistema de elevación",
    description:
      "Polipasto eléctrico a cable FORVIS FVS3 5008.1, configurado para 5 toneladas y 8 metros de elevación.",
    status: "Requiere atención",
    assetCode: "CRN-01-HST",
    ...forvisComponentData.hoist,
  },
  cable: {
    id: "cable",
    name: "Cable de acero",
    category: "Sistema de elevación",
    description:
      "Cable de acero en aparejo de dos ramales para el polipasto FORVIS FVS3 5008.1.",
    status: "Operativo",
    assetCode: "CRN-01-CBL",
    ...forvisComponentData.cable,
  },
  hook: {
    id: "hook",
    name: "Gancho principal",
    category: "Accesorio de izaje",
    description:
      "Gancho giratorio de 5 toneladas, montado sobre rodamiento axial y equipado con pestillo de seguridad.",
    status: "Operativo",
    assetCode: "CRN-01-HK1",
    ...forvisComponentData.hook,
  },
};
