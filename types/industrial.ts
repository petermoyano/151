export type ComponentStatus =
  | "Operativo"
  | "Requiere atención"
  | "Fuera de servicio";

export interface IndustrialComponentMetadata<TId extends string = string> {
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
  | "bridge"
  | "trolley"
  | "trolley-motor-a"
  | "trolley-motor-b"
  | "trolley-wheels"
  | "hoist"
  | "cable"
  | "hook";

export type InteractionState = "idle" | "hovered" | "selected";
