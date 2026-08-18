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
    name: "Supporting Rails",
    category: "Runway structure",
    description:
      "Twin runway beams and support columns that carry the crane along the building bay.",
    status: "Operational",
    assetCode: "CRN-01-RWY",
  },
  bridge: {
    id: "bridge",
    name: "Crane Bridge",
    category: "Primary structure",
    description:
      "The load-bearing bridge spanning the runway and supporting trolley travel.",
    status: "Operational",
    assetCode: "CRN-01-BRG",
  },
  trolley: {
    id: "trolley",
    name: "Travel Trolley",
    category: "Travel mechanism",
    description:
      "Motorized carriage that positions the lifting assembly across the crane bridge.",
    status: "Operational",
    assetCode: "CRN-01-TRL",
  },
  hoist: {
    id: "hoist",
    name: "Hoist Assembly",
    category: "Lifting system",
    description:
      "Motor, gearbox, and rope drum that raise and lower the suspended load.",
    status: "Operational",
    assetCode: "CRN-01-HST",
  },
  cable: {
    id: "cable",
    name: "Wire Rope",
    category: "Lifting system",
    description:
      "Paired high-strength steel wire ropes connecting the hoist drum to the hook block.",
    status: "Operational",
    assetCode: "CRN-01-CBL",
  },
  hook: {
    id: "hook",
    name: "Main Hook",
    category: "Load attachment",
    description:
      "Primary forged-steel attachment point used to connect and secure lifted loads.",
    status: "Operational",
    assetCode: "CRN-01-HK1",
  },
};
