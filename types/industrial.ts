export type ComponentStatus =
  | "Operativo"
  | "Requiere atención"
  | "Fuera de servicio";

export type TechnicalDataBasis = "FORVIS" | "Configuración demo";

export interface ComponentSpecification {
  label: string;
  value: string;
  basis: TechnicalDataBasis;
}

export interface ComponentDocumentation {
  title: string;
  type: string;
  publisher: string;
  url: string;
}

export interface ComponentTechnicalData {
  manufacturer: string;
  model: string;
  specifications: readonly ComponentSpecification[];
  documentation: readonly ComponentDocumentation[];
}

export interface IndustrialComponentMetadata<TId extends string = string>
  extends ComponentTechnicalData {
  id: TId;
  parentId?: TId;
  name: string;
  category: string;
  description: string;
  status: ComponentStatus;
  assetCode: string;
}

export type CraneComponentId =
  | "rails"
  | "end-stops"
  | "bridge"
  | "power-supply"
  | "main-power-panel"
  | "bridge-control-panel"
  | "trolley"
  | "trolley-motor-a"
  | "trolley-motor-b"
  | "trolley-wheels"
  | "hoist"
  | "cable"
  | "hook";

export type InteractionState = "idle" | "hovered" | "selected";
