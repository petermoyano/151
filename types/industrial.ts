export type ComponentStatus = "Operational" | "Attention" | "Offline";

export interface IndustrialComponentMetadata<TId extends string = string> {
  id: TId;
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
  | "hoist"
  | "cable"
  | "hook";

export type InteractionState = "idle" | "hovered" | "selected";
