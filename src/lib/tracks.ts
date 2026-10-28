// To unlock a drop: set isLocked to false (and add its preSaveUrl).
export type Track = {
  label: string;
  status: string;
  details: string;
  isLocked: boolean;
  preSaveUrl: string;
};

export const tracks: Track[] = [
  {
    label: "Track 01",
    status: "Unlocking January",
    details: "The origin of the journey. Presence, release, and entering the flow.",
    isLocked: false,
    preSaveUrl: "",
  },
  { label: "Track 02", status: "Locked", details: "Alignment & Expansion.", isLocked: true, preSaveUrl: "" },
  { label: "Track 03", status: "Locked", details: "Inner State & Frequency.", isLocked: true, preSaveUrl: "" },
  { label: "Track 04", status: "Locked", details: "The Culmination.", isLocked: true, preSaveUrl: "" },
];
