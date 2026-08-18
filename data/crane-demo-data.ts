export const craneDemoComponentIds = [
  "rails",
  "bridge",
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
    type: "Puente grúa industrial",
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
      id: "bridge",
      assetId: "CRN-01-BRG",
      name: "Puente de la grúa",
      category: "Estructura principal",
      status: "operativo",
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
      id: "trolley",
      assetId: "CRN-01-TRL",
      name: "Carro de traslación",
      category: "Movimiento",
      status: "operativo",
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
      name: "Sistema de izaje",
      category: "Izaje",
      status: "atencion",
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
