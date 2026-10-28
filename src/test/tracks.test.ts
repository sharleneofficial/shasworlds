import { describe, expect, it } from "vitest";
import { tracks } from "@/lib/tracks";

describe("Debut EP rollout", () => {
  it("features the January teaser with no live pre-save link", () => {
    expect(tracks[0]).toMatchObject({ label: "Track 01", status: "Unlocking January", isLocked: false, preSaveUrl: "" });
  });
  it.each(["Track 02", "Track 03", "Track 04"])("keeps %s locked", (label) => {
    expect(tracks.find((track) => track.label === label)).toMatchObject({ status: "Locked", isLocked: true, preSaveUrl: "" });
  });
});