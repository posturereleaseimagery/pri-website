import { ExperienceLayout } from "@/components/experience-layout";

const steps = [
  {
    instruction: "Settle into your seat. Let your weight be received by whatever is beneath you.",
    duration: "a few breaths",
  },
  {
    instruction: "Now bring your attention to the back of your body. The back of your head, your shoulder blades, your spine, the backs of your arms, your lower back, the backs of your thighs, your calves, your heels.",
    duration: "15 to 20 seconds",
  },
  {
    instruction: "Feel the whole back surface as one continuous landscape. It has been there your entire life — the surface that faces away from the world.",
  },
  {
    instruction: "Now shift your attention to the front. Your forehead, your eyes, your lips, your throat, your chest, your belly, your palms, the fronts of your thighs, the tops of your feet.",
    duration: "15 to 20 seconds",
  },
  {
    instruction: "Notice how different the front feels from the back. The front is where you meet the world. The back is where you rest away from it.",
  },
  {
    instruction: "Without trying to change anything, simply hold both surfaces in your awareness at once. Back and front. Dorsal and ventral. Two halves of one whole.",
    duration: "a moment",
  },
  {
    instruction: "This is the foundation of Posture Release Imagery. Your posture lives in the relationship between these two surfaces. You have just begun to listen to it.",
  },
];

export default function FirstTouchPage() {
  return (
    <ExperienceLayout
      title="First Touch"
      subtitle="A 60-second introduction to body surface awareness. No theory — just sensation."
      steps={steps}
      nextExperience={{ label: "Next: Surfaces", href: "/experience/surfaces" }}
    />
  );
}
