import { ExperienceLayout } from "@/components/experience-layout";

const steps = [
  {
    instruction: "Begin again with the back of your body. But this time, imagine you could see it — as if looking at yourself from behind.",
    duration: "a few breaths",
  },
  {
    instruction: "The dorsal surface is the older surface, evolutionarily speaking. In the earliest creatures, the back faced the sun. It is the surface of protection, of structure, of the spine.",
  },
  {
    instruction: "Feel its quality. It tends toward firmness, toward holding. The muscles of the back are postural — they work without your asking.",
    duration: "15 seconds",
  },
  {
    instruction: "Now come to the front — the ventral surface. This is the younger surface. It is where the mouth formed, where the gut opened to the world. It is the surface of vulnerability, of reaching, of expression.",
  },
  {
    instruction: "Feel its quality. The front tends toward softness, toward openness. Your face, your palms, your belly — these are the surfaces that engage.",
    duration: "15 seconds",
  },
  {
    instruction: "Now notice: where do these two surfaces meet? There is a line — a seam — running along each side of your body. From the sides of your head, down your neck, along your ribs, your hips, the outer edges of your legs.",
  },
  {
    instruction: "You do not need to find it precisely. Just sense that there is a boundary. A place where back becomes front. This seam is alive.",
    duration: "a moment",
  },
  {
    instruction: "Rest in the awareness of three things: back, front, and the seam between them. You are developing a new kind of postural intelligence — one that begins with sensation, not correction.",
  },
];

export default function SurfacesPage() {
  return (
    <ExperienceLayout
      title="Dorsal & Ventral Surfaces"
      subtitle="Deepen your awareness of the two fundamental surfaces that define your body and your posture."
      steps={steps}
      prevExperience={{ label: "First Touch", href: "/experience/first-touch" }}
      nextExperience={{ label: "Next: The Seam", href: "/experience/seam" }}
    />
  );
}
