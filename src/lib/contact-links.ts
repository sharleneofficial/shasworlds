export const contactIntro = "I am here to ignite and create across galaxies and dimensions — uniting music, film, fashion, and digital art as immersive portals telling interconnected stories from New Earth and beyond. I invite you to step beyond what you thought was possible.";

export type ContactIcon = "mail" | "send" | "instagram" | "x" | "youtube" | "music" | "gem" | "globe";

export type ContactLink = { label: string; href: string; icon: ContactIcon };

export const contactGroups: { title: string; links: ContactLink[] }[] = [
  { title: "Contact", links: [
    { label: "Telegram", href: "https://t.me/shasworlds", icon: "send" },
    { label: "Email", href: "mailto:contact@shasworlds.com", icon: "mail" },
  ] },
  { title: "Social", links: [
    { label: "SHA", href: "https://www.instagram.com/shasworlds", icon: "instagram" },
    { label: "Sharlene (human journey)", href: "https://www.instagram.com/sharlene.official", icon: "instagram" },
    { label: "X", href: "https://x.com/shasworlds", icon: "x" },
    { label: "YouTube", href: "https://www.youtube.com/@ShasWorldsVEVO", icon: "youtube" },
    { label: "Spotify", href: "https://open.spotify.com/track/6VmS6D7vxrZAknL9dm9V2B", icon: "music" },
  ] },
  { title: "STOP — The Prequel by Sharlene", links: [
    { label: "Spotify", href: "https://open.spotify.com/track/6VmS6D7vxrZAknL9dm9V2B", icon: "music" },
    { label: "YouTube (VEVO)", href: "https://www.youtube.com/@ShasWorldsVEVO", icon: "youtube" },
    { label: "NFT Collection", href: "https://www.tensor.trade/trade/stop", icon: "gem" },
  ] },
  { title: "PYPD", links: [
    { label: "Enter the World", href: "https://pypd.shasworlds.com/", icon: "globe" },
  ] },
];
