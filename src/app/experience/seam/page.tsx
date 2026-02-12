import { ExperienceLayout } from "@/components/experience-layout";

const steps = [
  {
    instruction: "Settle in. Take a breath. Let your attention soften.",
    duration: "a few breaths",
  },
  {
    instruction: "Bring your awareness to the sides of your body. Not the back, not the front — the edges. The place where one becomes the other.",
  },
  {
    instruction: "Start at your head. Feel the sides of your skull, just above your ears. There is a ridge there — a line where the back of the head curves into the temples.",
    duration: "a moment",
  },
  {
    instruction: "Follow that line down. The sides of your neck. The tops of your shoulders. The outer edges of your arms.",
  },
  {
    instruction: "Now feel the sides of your torso. Your ribs, expanding and contracting with each breath. The seam runs along the side of each rib, where the back muscles give way to the softer front.",
    duration: "15 seconds",
  },
  {
    instruction: "Continue down through the sides of your hips, the outer edges of your thighs, your knees, your calves, the outer edges of your feet.",
  },
  {
    instruction: "This seam is not a line drawn on a map. It is a living, functional boundary. In embryological development, it is where the dorsal and ventral sheets folded together to form your body.",
  },
  {
    instruction: "Imagine this seam softening. Not collapsing — just becoming more available. As if the two surfaces could breathe independently while remaining joined.",
    duration: "a moment",
  },
  {
    instruction: "When the seam is sensed clearly, posture reorganizes from within. You are not holding yourself up. You are allowing two surfaces to find their relationship to gravity — together.",
  },
];

export default function SeamPage() {
  return (
    <ExperienceLayout
      title="The Functional Seam"
      subtitle="Explore the living boundary where your back surface meets your front — the seam that organizes your posture."
      steps={steps}
      prevExperience={{ label: "Surfaces", href: "/experience/surfaces" }}
      nextExperience={{ label: "Next: Imagery", href: "/experience/imagery" }}
    />
  );
}
