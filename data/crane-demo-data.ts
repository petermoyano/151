import { forvisComponentData } from "@/data/forvis-component-data";

export const craneDemoComponentIds = [
  "rails",
  "end-stops",
  "bridge",
  "power-supply",
  "main-power-panel",
  "bridge-control-panel",
  "trolley",
  "trolley-motor-a",
  "trolley-motor-b",
  "trolley-wheels",
  "hoist",
  "cable",
  "hook",
] as const;

export type CraneDemoComponentId = (typeof craneDemoComponentIds)[number];

export const craneDemoData = {
  asset: {
    id: "CRN-01",
    name: "Puente Grúa 01",
    type: "Puente grúa birriel apoyado",
    manufacturer: "FORVIS",
    model: "Puente grúa birriel con vigas de carga superiores",
    ratedCapacityKg: 5_000,
    spanM: 20,
    runwayLengthM: 50,
    hoistModel: "FVS3 5008.1",
    configurationBasis:
      "Configuración de demostración compatible con catálogo FORVIS; validar contra la placa y documentación del activo instalado.",
    location: "Nave Principal",
    operationalStatus: "operativo",
    overallHealth: "atencion",
    lastUpdated: "2026-08-18T16:45:00-03:00",
  },
  components: [
    {
      id: "rails",
      assetId: "CRN-01-RLS",
      name: "Rieles de soporte",
      category: "Estructura",
      technical: forvisComponentData.rails,
      status: "operativo",
      maintenance: {
        lastCompleted: "2026-07-12",
        nextScheduled: "2026-10-12",
        status: "al_dia",
        description:
          "Inspección de alineación, fijaciones y desgaste de superficie.",
      },
      recentAlerts: [],
      spareParts: [],
    },
    {
      id: "end-stops",
      parentId: "rails",
      assetId: "CRN-01-STP",
      name: "Topes de fin de carrera",
      category: "Seguridad de traslación",
      technical: forvisComponentData["end-stops"],
      status: "operativo",
      maintenance: {
        lastCompleted: "2026-07-12",
        nextScheduled: "2026-10-12",
        status: "al_dia",
        description:
          "Inspección de fijaciones, deformaciones, amortiguadores y distancia de seguridad.",
      },
      recentAlerts: [],
      spareParts: [
        {
          name: "Amortiguador elastomérico de fin de carrera",
          priority: "preventivo",
          recommendedPurchaseBefore: "2027-01-15",
          reason:
            "Mantener una unidad disponible para reemplazo ante daño por impacto.",
        },
      ],
    },
    {
      id: "bridge",
      assetId: "CRN-01-BRG",
      name: "Puente birriel FORVIS",
      category: "Estructura principal",
      status: "operativo",
      technical: forvisComponentData.bridge,
      maintenance: {
        lastCompleted: "2026-07-12",
        nextScheduled: "2026-10-12",
        status: "al_dia",
        description:
          "Inspección estructural, uniones y verificación visual.",
      },
      recentAlerts: [],
      spareParts: [],
    },
    {
      id: "power-supply",
      parentId: "bridge",
      assetId: "CRN-01-FST",
      name: "Sistema festón de alimentación",
      category: "Alimentación eléctrica",
      status: "operativo",
      technical: forvisComponentData["power-supply"],
      maintenance: {
        lastCompleted: "2026-08-01",
        nextScheduled: "2026-10-01",
        status: "al_dia",
        description:
          "Inspección de carros portacables, lazos, aislamiento, fijaciones y conexiones eléctricas.",
      },
      recentAlerts: [],
      spareParts: [
        {
          name: "Carro portacable para sistema festón",
          priority: "preventivo",
          recommendedPurchaseBefore: "2026-12-01",
          reason:
            "Mantener una unidad de reemplazo para evitar indisponibilidad ante desgaste de ruedas.",
        },
      ],
    },
    {
      id: "main-power-panel",
      parentId: "power-supply",
      assetId: "CRN-01-PNL-PWR",
      name: "Tablero general de potencia",
      category: "Distribución eléctrica",
      status: "operativo",
      technical: forvisComponentData["main-power-panel"],
      maintenance: {
        lastCompleted: "2026-07-18",
        nextScheduled: "2026-10-18",
        status: "al_dia",
        description:
          "Termografía, reapriete de conexiones, prueba de protecciones, limpieza y revisión de sellos.",
      },
      recentAlerts: [],
      spareParts: [
        {
          name: "Kit de ventilación y filtros para tablero",
          priority: "preventivo",
          recommendedPurchaseBefore: "2026-12-15",
          reason:
            "Mantener consumibles disponibles para el próximo mantenimiento trimestral.",
        },
      ],
    },
    {
      id: "bridge-control-panel",
      parentId: "power-supply",
      assetId: "CRN-01-PNL-CTL",
      name: "Tablero de control del puente",
      category: "Control y automatización",
      status: "operativo",
      technical: forvisComponentData["bridge-control-panel"],
      maintenance: {
        lastCompleted: "2026-08-04",
        nextScheduled: "2026-10-04",
        status: "al_dia",
        description:
          "Verificación de PLC, contactores, borneras, fuente de control y ventilación del gabinete.",
      },
      recentAlerts: [],
      spareParts: [
        {
          name: "Fuente de alimentación 24 VDC",
          priority: "preventivo",
          recommendedPurchaseBefore: "2026-11-30",
          reason:
            "Mantener una unidad compatible para reducir el tiempo de recuperación ante falla.",
        },
      ],
    },
    {
      id: "trolley",
      assetId: "CRN-01-TRL",
      name: "Carro birriel FORVIS",
      category: "Movimiento",
      status: "operativo",
      technical: forvisComponentData.trolley,
      maintenance: {
        lastCompleted: "2026-07-28",
        nextScheduled: "2026-09-28",
        status: "al_dia",
        description:
          "Inspección general del carro, estructura, freno y sincronización.",
      },
      recentAlerts: [],
      spareParts: [],
    },
    {
      id: "trolley-motor-a",
      parentId: "trolley",
      assetId: "CRN-01-TRL-MA",
      name: "Motor de traslación A",
      category: "Accionamiento del carro",
      status: "operativo",
      technical: forvisComponentData["trolley-motor-a"],
      maintenance: {
        lastCompleted: "2026-07-28",
        nextScheduled: "2026-09-28",
        status: "al_dia",
        description:
          "Control eléctrico, lubricación y verificación de temperatura y vibración.",
      },
      recentAlerts: [],
      spareParts: [],
    },
    {
      id: "trolley-motor-b",
      parentId: "trolley",
      assetId: "CRN-01-TRL-MB",
      name: "Motor de traslación B",
      category: "Accionamiento del carro",
      status: "operativo",
      technical: forvisComponentData["trolley-motor-b"],
      maintenance: {
        lastCompleted: "2026-07-28",
        nextScheduled: "2026-09-28",
        status: "al_dia",
        description:
          "Control eléctrico, lubricación y verificación de temperatura y vibración.",
      },
      recentAlerts: [
        {
          date: "2026-08-03",
          severity: "info",
          type: "pico_corriente",
          description:
            "Pico breve de consumo eléctrico durante una maniobra de traslación.",
          resolved: true,
        },
      ],
      spareParts: [],
    },
    {
      id: "trolley-wheels",
      parentId: "trolley",
      assetId: "CRN-01-TRL-WHL",
      name: "Ruedas del carro",
      category: "Rodadura del carro",
      status: "operativo",
      technical: forvisComponentData["trolley-wheels"],
      maintenance: {
        lastCompleted: "2026-07-28",
        nextScheduled: "2026-09-28",
        status: "al_dia",
        description:
          "Inspección de las cuatro ruedas, ejes, pestañas, alineación y desgaste de rodadura.",
      },
      recentAlerts: [],
      spareParts: [
        {
          name: "Juego de ruedas de traslación",
          priority: "preventivo",
          recommendedPurchaseBefore: "2026-12-15",
          reason:
            "Mantener un juego disponible para el próximo ciclo de inspección dimensional.",
        },
      ],
    },
    {
      id: "hoist",
      assetId: "CRN-01-HST",
      name: "Polipasto FORVIS FVS3",
      category: "Izaje",
      status: "atencion",
      technical: forvisComponentData.hoist,
      maintenance: {
        lastCompleted: "2026-07-22",
        nextScheduled: "2026-09-22",
        status: "al_dia",
        description:
          "Lubricación, inspección de freno y revisión del motor de izaje.",
      },
      recentAlerts: [
        {
          date: "2026-08-07",
          severity: "warning",
          type: "vibracion",
          description:
            "Vibración del motor por encima del rango habitual durante izaje.",
          resolved: false,
        },
        {
          date: "2026-08-11",
          severity: "warning",
          type: "vibracion",
          description:
            "Segundo evento de vibración elevada durante una maniobra de izaje.",
          resolved: false,
        },
        {
          date: "2026-08-15",
          severity: "warning",
          type: "temperatura",
          description:
            "Temperatura del motor alcanzó 78 °C durante operación intensiva.",
          resolved: false,
        },
      ],
      spareParts: [
        {
          name: "Kit de rodamientos del motor de izaje",
          priority: "recomendado",
          recommendedPurchaseBefore: "2026-09-15",
          reason:
            "Compra preventiva debido a las recientes señales de vibración.",
        },
      ],
    },
    {
      id: "cable",
      assetId: "CRN-01-WRP",
      name: "Cable de acero",
      category: "Sistema de izaje",
      status: "operativo",
      technical: forvisComponentData.cable,
      maintenance: {
        lastCompleted: "2026-07-06",
        nextScheduled: "2026-09-05",
        status: "al_dia",
        description:
          "Inspección de desgaste, lubricación, deformaciones y condición general.",
      },
      recentAlerts: [],
      spareParts: [
        {
          name: "Cable de acero de reemplazo",
          priority: "preventivo",
          recommendedPurchaseBefore: "2026-11-01",
          reason:
            "Mantener stock preventivo para el próximo ciclo anual.",
        },
      ],
    },
    {
      id: "hook",
      assetId: "CRN-01-HOK",
      name: "Gancho principal",
      category: "Sistema de izaje",
      status: "operativo",
      technical: forvisComponentData.hook,
      maintenance: {
        lastCompleted: "2026-08-02",
        nextScheduled: "2026-10-02",
        status: "al_dia",
        description:
          "Inspección dimensional, seguro, desgaste y posibles deformaciones.",
      },
      recentAlerts: [],
      spareParts: [],
    },
  ],
} as const;

export type CraneDemoComponent = (typeof craneDemoData.components)[number];

export function getCraneDemoComponent(
  id: CraneDemoComponentId | null | undefined,
) {
  return craneDemoData.components.find((component) => component.id === id);
}
