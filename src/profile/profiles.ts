import {
  BookOpen,
  Calendar,
  Camera,
  Download,
  Dumbbell,
  FileText,
  MapPin,
  PenTool,
  Play,
  ShoppingBag,
  Sparkles,
  Terminal,
} from "lucide-react";
import type { Profile, ProfileTheme } from "./types";
import { energy, film, iridescent, swiss, terminal } from "./themes";

/** All people and links below are fictional examples. */

export const hana: Profile = {
  name: "Hana Mori",
  handle: "hana",
  role: "Illustrator & UI designer",
  location: "Kyoto → Lisbon",
  bio: "Drawing quiet worlds and designing interfaces that feel like them. Currently booking spring commissions.",
  avatar: { bg: "#f6d5dc", skin: "#f1c9a8", hair: "#2a2220", shirt: "#c24e6a", hairStyle: "bob" },
  socials: ["instagram", "dribbble", "behance", "x", "mail"],
  links: [
    { label: "Commission an illustration", sub: "3 slots open this season", icon: Sparkles },
    { label: "Portfolio 2026", sub: "Selected UI & editorial work", icon: PenTool },
    { label: "Print shop", sub: "Risograph prints & zines", icon: ShoppingBag },
    { label: "Read my process journal", icon: BookOpen },
  ],
  projectsLabel: "Recent work",
};

export interface Creator {
  profile: Profile;
  theme: ProfileTheme;
  discipline: string;
}

export const creators: Creator[] = [
  {
    discipline: "Graphic designer",
    theme: swiss,
    profile: {
      name: "Inès Okafor",
      handle: "ines.studio",
      role: "Brand & type designer",
      location: "Paris",
      bio: "Identity systems, posters and custom lettering for culture-led brands.",
      avatar: { bg: "#e3262e", skin: "#8d5a3b", hair: "#141414", shirt: "#111111", hairStyle: "bun" },
      socials: ["behance", "instagram", "linkedin"],
      links: [
        { label: "Case study — Musée Nord identity", icon: FileText },
        { label: "Typeface: Okafor Grotesk", icon: Download },
        { label: "Book a discovery call", icon: Calendar },
      ],
    },
  },
  {
    discipline: "Photographer",
    theme: film,
    profile: {
      name: "Theo Lindqvist",
      handle: "theo.frames",
      role: "Film & landscape photographer",
      location: "Bergen",
      bio: "35mm, long walks, northern light. Prints ship worldwide.",
      avatar: { bg: "#c78a52", skin: "#efcfb1", hair: "#c9a26b", shirt: "#3b2a22", hairStyle: "short" },
      socials: ["instagram", "youtube", "web"],
      links: [
        { label: "Series: Fjord Mornings", icon: Camera },
        { label: "Limited edition prints", icon: ShoppingBag },
        { label: "Booking & rates", icon: Calendar },
      ],
    },
  },
  {
    discipline: "Digital artist",
    theme: iridescent,
    profile: {
      name: "Mika Sato",
      handle: "mika.exe",
      role: "3D & digital artist",
      location: "Osaka",
      bio: "Soft chrome, impossible flowers and loops you can't stop watching.",
      avatar: { bg: "#a78bfa", skin: "#f3d0b5", hair: "#ff7ac6", shirt: "#ffffff", hairStyle: "long" },
      socials: ["instagram", "tiktok", "x"],
      links: [
        { label: "Watch the 'Bloom' loop series", icon: Play },
        { label: "Brush & texture packs", icon: Download },
        { label: "Collab enquiries", icon: Sparkles },
      ],
    },
  },
  {
    discipline: "Developer",
    theme: terminal,
    profile: {
      name: "Arjun Rao",
      handle: "arjun.dev",
      role: "Frontend & creative coder",
      location: "Bengaluru",
      bio: "> building tiny, fast, accessible things on the web_",
      avatar: { bg: "#14532d", skin: "#9c6b4a", hair: "#0b0f0c", shirt: "#4ade80", hairStyle: "short" },
      socials: ["github", "x", "linkedin"],
      links: [
        { label: "~/projects/shader-garden", icon: Terminal },
        { label: "Notes on web performance", icon: BookOpen },
        { label: "Download CV.pdf", icon: Download },
      ],
    },
  },
  {
    discipline: "Fitness creator",
    theme: energy,
    profile: {
      name: "Leila Haddad",
      handle: "leila.moves",
      role: "Strength coach & creator",
      location: "Dubai",
      bio: "Strong is a skill. Free programs, honest form checks, zero shortcuts.",
      avatar: { bg: "#d4ff3a", skin: "#c58c63", hair: "#1a1110", shirt: "#101010", hairStyle: "bun" },
      socials: ["youtube", "instagram", "tiktok"],
      links: [
        { label: "Free 8-week strength plan", icon: Dumbbell },
        { label: "Today's workout video", icon: Play },
        { label: "Find a class near you", icon: MapPin },
      ],
    },
  },
];
