import { Article, Tidbit } from "@/lib/types/blog";
import { facebookArticles, facebookTidbits } from "./facebook-converted-content";

export const sampleArticles: Article[] = [
  {
    id: "1",
    title: "The Dorsal-Ventral Relationship: Foundation of Postural Intelligence",
    slug: "dorsal-ventral-relationship",
    excerpt: "How the interplay between our back and front surfaces creates the fundamental architecture of human posture and movement.",
    coverImage: "/images/posture-anatomy.jpg",
    publishDate: "2024-02-15",
    tags: ["dorsal", "ventral", "posture", "evolutionary posture"],
    readingTime: 8,
    content: `
      <p>The human body is not a collection of isolated parts, but a continuous surface that folds and unfolds in relationship to gravity. At the heart of this relationship lies the dorsal-ventral dynamic — the fundamental dialogue between our back and front surfaces.</p>

      <h2>The Evolutionary Context</h2>
      <p>In embryological development, the human body begins as a simple tube. Through a process of folding and differentiation, this tube transforms into our complex form. The dorsal surface (what becomes our back) and the ventral surface (what becomes our front) emerge from this original unity.</p>

      <blockquote>
        <p>"The body is not a machine to be fixed, but a relationship to be understood." — F.M. Alexander</p>
      </blockquote>

      <h2>Surface Tension and Structural Integrity</h2>
      <p>Modern research in biotensegrity reveals that our bodies maintain structural integrity not through rigid compression, but through balanced tension across surfaces. The dorsal and ventral surfaces work together like the two sides of a balloon, creating internal pressure that gives form to the whole.</p>
    `,
    featured: true,
  },
  {
    id: "2",
    title: "Four Postural Types: Recognizing Patterns in Human Movement",
    slug: "four-postural-types",
    excerpt: "Exploring the four fundamental postural patterns that emerge from different relationships between head and hip orientation.",
    coverImage: "/images/postural-types.jpg",
    publishDate: "2024-02-10",
    tags: ["four types", "head orientation", "hip orientation", "movement patterns"],
    readingTime: 12,
    content: `
      <p>Through years of observation and practice, Posture Release Imagery has identified four primary postural types that represent fundamental patterns in how humans organize themselves in gravity.</p>

      <h2>The Typology Framework</h2>
      <p>Each type emerges from the combination of two key variables: head orientation (forward or back) and hip orientation (forward or back). This creates four possible combinations, each with distinct characteristics and movement tendencies.</p>

      <h3>Type A: Balanced Integration</h3>
      <p>Head forward, hips forward. Characterized by dynamic balance and fluid movement patterns.</p>

      <h3>Type B: Forward Drive</h3>
      <p>Head back, hips forward. Often associated with goal-directed movement and forward momentum.</p>
    `,
    featured: false,
  },
  // Facebook-converted content
  ...facebookArticles
];

export const sampleTidbits: Tidbit[] = [
  {
    id: "t1",
    text: "The human spine contains more proprioceptive receptors than any other part of the body. Our back surface is our primary sensory map of gravitational relationship.",
    publishDate: "2024-02-20",
    tags: ["proprioception", "spine", "dorsal surface"],
    imageUrl: "/images/spine-anatomy.jpg"
  },
  {
    id: "t2",
    text: "Alexander Technique research shows that habitual tension patterns begin forming within the first year of life, long before conscious memory.",
    sourceTitle: "The Alexander Technique: A Systematic Approach",
    sourceUrl: "https://example.com/alexander-research",
    publishDate: "2024-02-18",
    tags: ["alexander technique", "habit formation", "early development"],
  },
  {
    id: "t3",
    text: "Recent studies in evolutionary biology suggest that bipedalism may have emerged not from efficiency, but from the need to free hands for carrying objects and children.",
    sourceTitle: "The Evolution of Bipedalism",
    sourceUrl: "https://example.com/bipedalism-study",
    publishDate: "2024-02-16",
    tags: ["evolution", "bipedalism", "evolutionary posture"],
  },
  {
    id: "t4",
    text: "Surface tension in the body creates structural integrity without muscular effort. Think of a soap bubble — its form emerges from balanced forces, not rigid structure.",
    publishDate: "2024-02-14",
    tags: ["biotensegrity", "surface tension", "structural integrity"],
  },
  {
    id: "t5",
    text: "The ventral surface (front of the body) evolved for interaction, while the dorsal surface evolved for protection. This creates different sensory priorities between front and back.",
    publishDate: "2024-02-12",
    tags: ["ventral", "dorsal", "sensory evolution"],
  },
  // Facebook-converted content
  ...facebookTidbits
];
