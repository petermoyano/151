import type {
  ComponentTechnicalData,
  CraneComponentId,
} from "@/types/industrial";

const documents = {
  bridge: {
    title: "Puentes grúa birrieles con viga superior",
    type: "Ficha de producto",
    publisher: "FORVIS",
    url: "https://www.forvis.com.ar/puentes-grua-birrieles",
  },
  hoistManual: {
    title: "Manual de uso y mantenimiento - Polipastos FV",
    type: "Manual PDF",
    publisher: "FORVIS",
    url: "https://www.forvis.com.ar/assets/download/ManualFV.pdf",
  },
  hoistTechnical: {
    title: "Polipastos FV - Características técnicas",
    type: "Guía técnica",
    publisher: "FORVIS",
    url: "https://www.forvis.com.ar/polipastos-electricos-cable-acero-tecnica",
  },
  fvs3Data: {
    title: "FVS3 - Dimensiones y características",
    type: "Ficha técnica PDF",
    publisher: "FORVIS",
    url: "https://www.forvis.com.ar/assets/FVS3%20Datos%20%20monorriel-Birriel.PDF",
  },
  craneTrolley: {
    title: "Carros grúa - Componentes y opciones",
    type: "Ficha de producto",
    publisher: "FORVIS",
    url: "https://www.forvis.com.ar/carros-gruas",
  },
  componentKit: {
    title: "Kit de componentes para puente grúa",
    type: "Ficha de producto",
    publisher: "FORVIS",
    url: "https://www.forvis.com.ar/kits-de-componentes",
  },
  electrification: {
    title: "Electrificación móvil Insul-8",
    type: "Ficha de producto",
    publisher: "FORVIS",
    url: "https://www.forvis.com.ar/blindo-trolley-barras",
  },
  remoteControl: {
    title: "Control remoto industrial Alpha 600",
    type: "Ficha de producto",
    publisher: "FORVIS",
    url: "https://www.forvis.com.ar/control-remoto-industrial",
  },
  alpha600Data: {
    title: "Alpha 600 Series - Technical data",
    type: "Ficha técnica PDF",
    publisher: "Fomotech / FORVIS",
    url: "https://www.forvis.com.ar/assets/download/Alpha600_EN.pdf",
  },
  femSelection: {
    title: "Selección del polipasto según normas FEM",
    type: "Guía técnica",
    publisher: "FORVIS",
    url: "https://www.forvis.com.ar/polipastos-electricos-cable-acero-normas",
  },
} as const;

export const forvisComponentData = {
  rails: {
    manufacturer: "FORVIS / estructura de nave",
    model: "Vías carrileras elevadas",
    specifications: [
      {
        label: "Disposición",
        value: "Vigas carrileras elevadas sobre columnas",
        basis: "FORVIS",
      },
      {
        label: "Recorrido longitudinal",
        value: "50 m",
        basis: "Configuración demo",
      },
      {
        label: "Trocha del puente",
        value: "20 m",
        basis: "Configuración demo",
      },
      {
        label: "Control recomendado",
        value: "Uniones: inspección diaria y periódica",
        basis: "FORVIS",
      },
    ],
    documentation: [documents.bridge, documents.hoistManual],
  },
  "end-stops": {
    manufacturer: "FORVIS",
    model: "Topes regulables con fin de carrera",
    specifications: [
      {
        label: "Protección mecánica",
        value: "Topes y paragolpes en ambos extremos",
        basis: "FORVIS",
      },
      {
        label: "Protección eléctrica",
        value: "Fin de carrera regulable",
        basis: "FORVIS",
      },
      {
        label: "Verificación",
        value: "Fin de carrera y paragolpes: diaria",
        basis: "FORVIS",
      },
    ],
    documentation: [documents.hoistManual, documents.craneTrolley],
  },
  bridge: {
    manufacturer: "FORVIS",
    model: "Puente grúa birriel apoyado",
    specifications: [
      {
        label: "Ejecución",
        value: "Birriel con vigas de carga superiores",
        basis: "FORVIS",
      },
      {
        label: "Capacidad nominal",
        value: "5.000 kg",
        basis: "Configuración demo",
      },
      {
        label: "Trocha",
        value: "20 m",
        basis: "Configuración demo",
      },
      {
        label: "Rango de la familia",
        value: "3 a 60 t; trochas de hasta 30 m",
        basis: "FORVIS",
      },
    ],
    documentation: [documents.bridge, documents.componentKit],
  },
  "power-supply": {
    manufacturer: "FORVIS / Insul-8",
    model: "Sistema festón para electrificación móvil",
    specifications: [
      {
        label: "Tecnología",
        value: "Festón para alimentación del carro",
        basis: "FORVIS",
      },
      {
        label: "Alimentación",
        value: "3 x 220/380 V, 50 Hz",
        basis: "FORVIS",
      },
      {
        label: "Aplicación",
        value: "Línea eléctrica para la trocha",
        basis: "FORVIS",
      },
      {
        label: "Inspección",
        value: "Puesta en marcha, trimestral y periódica",
        basis: "FORVIS",
      },
    ],
    documentation: [documents.electrification, documents.componentKit],
  },
  "main-power-panel": {
    manufacturer: "FORVIS",
    model: "Gabinete eléctrico y comandos",
    specifications: [
      {
        label: "Alimentación",
        value: "3 x 220/380 V, 50 Hz",
        basis: "FORVIS",
      },
      {
        label: "Mando",
        value: "Baja tensión mediante contactores",
        basis: "FORVIS",
      },
      {
        label: "Seccionamiento",
        value: "Llave de corte principal",
        basis: "FORVIS",
      },
      {
        label: "Inspección",
        value: "Puesta en marcha, anual y periódica",
        basis: "FORVIS",
      },
    ],
    documentation: [documents.componentKit, documents.hoistTechnical],
  },
  "bridge-control-panel": {
    manufacturer: "FORVIS / Fomotech",
    model: "Gabinete FORVIS con receptor Alpha 608B",
    specifications: [
      {
        label: "Movimientos",
        value: "3 movimientos",
        basis: "FORVIS",
      },
      {
        label: "Seguridad",
        value: "Parada de emergencia de rápida respuesta",
        basis: "FORVIS",
      },
      {
        label: "Protección",
        value: "Falta e inversión de fase; sub/sobretensión",
        basis: "FORVIS",
      },
      {
        label: "Configuración",
        value: "Receptor programable en gabinete de control",
        basis: "Configuración demo",
      },
    ],
    documentation: [documents.remoteControl, documents.alpha600Data],
  },
  trolley: {
    manufacturer: "FORVIS",
    model: "Carro birriel FVS3 5008.1",
    specifications: [
      {
        label: "Capacidad",
        value: "5.000 kg",
        basis: "FORVIS",
      },
      {
        label: "Ejecución",
        value: "Carro eléctrico birriel",
        basis: "FORVIS",
      },
      {
        label: "Peso con carro birriel",
        value: "740 kg",
        basis: "FORVIS",
      },
      {
        label: "Trocha del carro",
        value: "1.400 mm",
        basis: "FORVIS",
      },
    ],
    documentation: [documents.fvs3Data, documents.craneTrolley],
  },
  "trolley-motor-a": {
    manufacturer: "FORVIS",
    model: "Accionamiento CA de traslación - lado A",
    specifications: [
      {
        label: "Tipo",
        value: "Motorreductor de corriente alterna",
        basis: "FORVIS",
      },
      {
        label: "Freno",
        value: "Freno a disco incorporado",
        basis: "FORVIS",
      },
      {
        label: "Regulación",
        value: "Dos velocidades o velocidad variable",
        basis: "FORVIS",
      },
      {
        label: "Posición",
        value: "Accionamiento lado A",
        basis: "Configuración demo",
      },
    ],
    documentation: [documents.craneTrolley, documents.hoistTechnical],
  },
  "trolley-motor-b": {
    manufacturer: "FORVIS",
    model: "Accionamiento CA de traslación - lado B",
    specifications: [
      {
        label: "Tipo",
        value: "Motorreductor de corriente alterna",
        basis: "FORVIS",
      },
      {
        label: "Freno",
        value: "Freno a disco incorporado",
        basis: "FORVIS",
      },
      {
        label: "Regulación",
        value: "Dos velocidades o velocidad variable",
        basis: "FORVIS",
      },
      {
        label: "Posición",
        value: "Accionamiento lado B",
        basis: "Configuración demo",
      },
    ],
    documentation: [documents.craneTrolley, documents.hoistTechnical],
  },
  "trolley-wheels": {
    manufacturer: "FORVIS",
    model: "Ruedas pestañadas para carro birriel",
    specifications: [
      {
        label: "Cantidad",
        value: "4 ruedas",
        basis: "Configuración demo",
      },
      {
        label: "Ajuste lateral",
        value: "Luz entre pestañas: 2 a 5 mm",
        basis: "FORVIS",
      },
      {
        label: "Lubricación del dentado",
        value: "Rocol Tufgear 90 Heavy o equivalente",
        basis: "FORVIS",
      },
      {
        label: "Inspección",
        value: "Diaria y periódica",
        basis: "FORVIS",
      },
    ],
    documentation: [documents.hoistManual, documents.craneTrolley],
  },
  hoist: {
    manufacturer: "FORVIS",
    model: "FVS3 5008.1",
    specifications: [
      {
        label: "Capacidad",
        value: "5.000 kg",
        basis: "FORVIS",
      },
      {
        label: "Altura de elevación",
        value: "8 m",
        basis: "FORVIS",
      },
      {
        label: "Velocidad de elevación",
        value: "4,41 m/min",
        basis: "FORVIS",
      },
      {
        label: "Motor de izaje",
        value: "5,5 HP; trifásico; aislación clase F",
        basis: "FORVIS",
      },
      {
        label: "Clasificación",
        value: "FEM 1Am; 2 ramales de cable",
        basis: "FORVIS",
      },
    ],
    documentation: [
      documents.hoistManual,
      documents.fvs3Data,
      documents.hoistTechnical,
      documents.femSelection,
    ],
  },
  cable: {
    manufacturer: "FORVIS / proveedor homologado",
    model: "Cable de acero para FVS3 5008.1",
    specifications: [
      {
        label: "Aparejo",
        value: "2 ramales de cable",
        basis: "FORVIS",
      },
      {
        label: "Altura de servicio",
        value: "8 m",
        basis: "FORVIS",
      },
      {
        label: "Criterio de descarte",
        value: "Alambres rotos según DIN 15020",
        basis: "FORVIS",
      },
      {
        label: "Inspección",
        value: "Diaria; mantener lubricado",
        basis: "FORVIS",
      },
      {
        label: "Lubricante indicado",
        value: "Bardahl Bargras 1013 o equivalente validado",
        basis: "FORVIS",
      },
    ],
    documentation: [documents.hoistManual, documents.hoistTechnical],
  },
  hook: {
    manufacturer: "FORVIS",
    model: "Gancho giratorio de 5 t con pestillo",
    specifications: [
      {
        label: "Capacidad nominal",
        value: "5.000 kg",
        basis: "Configuración demo",
      },
      {
        label: "Montaje",
        value: "Rodamiento axial",
        basis: "FORVIS",
      },
      {
        label: "Dimensionamiento",
        value: "Normas DIN y categoría FEM",
        basis: "FORVIS",
      },
      {
        label: "Inspección",
        value: "Diaria y anual",
        basis: "FORVIS",
      },
    ],
    documentation: [documents.hoistManual, documents.craneTrolley],
  },
} satisfies Record<CraneComponentId, ComponentTechnicalData>;
