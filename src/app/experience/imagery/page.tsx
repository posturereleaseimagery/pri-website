import { ExperienceLayout } from "@/components/experience-layout";

const steps = [
  {
    instruction: "In PRI, we use images not as metaphors but as perceptual tools. An image can reorganize your body from the inside — if you let it.",
    duration: "a breath",
  },
  {
    instruction: "Begin with the egg. Imagine your torso as an egg — smooth, continuous, gently curved in every direction. The shell is your back surface. The open end is your front.",
    duration: "15 seconds",
  },
  {
    instruction: "Feel the roundness of this egg-body. There are no flat planes, no sharp angles. Just a continuous curving surface that holds everything within it.",
  },
  {
    instruction: "Now let the egg rest in gravity. It does not need to be held upright. Its shape is self-supporting. Feel how this image changes the effort in your back and belly.",
    duration: "a moment",
  },
  {
    instruction: "Now shift to the lamb. Imagine a newborn lamb — just born, still finding its legs. Its back is arched, its belly soft, its head lifted with a kind of innocent curiosity.",
  },
  {
    instruction: "Feel the quality of the lamb in your own body. Not the shape exactly, but the quality — the softness of the belly, the aliveness of the spine, the openness of the face.",
    duration: "20 seconds",
  },
  {
    instruction: "These images are not fantasies. They are evolutionary echoes. The egg recalls the earliest body plan. The lamb recalls the moment a vertebrate first stands in gravity.",
  },
  {
    instruction: "Let both images dissolve now. But notice what remains in your body. Something has shifted — not because you moved, but because you imagined.",
  },
  {
    instruction: "This is the heart of Posture Release Imagery. The body listens to the imagination. And the imagination, when it is grounded in evolutionary truth, speaks the body's own language.",
  },
];

export default function ImageryPage() {
  return (
    <ExperienceLayout
      title="Archetypal Imagery"
      subtitle="Work with the egg, the lamb, and other imaginative forms that speak directly to your body's deep intelligence."
      steps={steps}
      prevExperience={{ label: "The Seam", href: "/experience/seam" }}
    />
  );
}
