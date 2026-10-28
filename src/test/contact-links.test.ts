import { describe, expect, it } from "vitest";
import { contactGroups } from "@/lib/contact-links";

describe("Existing contact destinations", () => {
  const destinations = contactGroups.flatMap((group) => group.links.map((link) => link.href));
  for (const href of [
    "mailto:contact@shasworlds.com",
    "https://www.instagram.com/shasworlds/",
    "https://www.instagram.com/sharleneintransition/",
    "https://pypd.shasworlds.com/#video",
    "https://instagram.com/shasworlds",
    "https://www.youtube.com/@ShasWorldsVEVO",
    "https://open.spotify.com/track/6VmS6D7vxrZAknL9dm9V2B",
    "https://www.tensor.trade/trade/stop",
    "https://x.com/0xsharlene",
    "https://t.me/sharleneofficial",
  ]) {
    it(`preserves ${href}`, () => { expect(destinations).toContain(href); });
  }
});