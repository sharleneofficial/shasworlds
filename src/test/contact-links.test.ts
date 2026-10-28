import { describe, expect, it } from "vitest";
import { contactGroups } from "@/lib/contact-links";

describe("Existing contact destinations", () => {
  const destinations = contactGroups.flatMap((group) => group.links.map((link) => link.href));
  for (const href of [
    "https://t.me/shasworlds",
    "mailto:contact@shasworlds.com",
    "https://www.instagram.com/shasworlds",
    "https://www.instagram.com/sharlene.official",
    "https://x.com/shasworlds",
    "https://www.youtube.com/@ShasWorldsVEVO",
    "https://open.spotify.com/track/6VmS6D7vxrZAknL9dm9V2B",
    "https://www.tensor.trade/trade/stop",
    "https://pypd.shasworlds.com/",
  ]) {
    it(`preserves ${href}`, () => { expect(destinations).toContain(href); });
  }
});

describe("Every contact link carries an icon", () => {
  it("assigns an icon to all links in all groups", () => {
    for (const group of contactGroups) {
      expect(group.links.length).toBeGreaterThan(0);
      for (const link of group.links) expect(link.icon).toBeTruthy();
    }
  });
});
