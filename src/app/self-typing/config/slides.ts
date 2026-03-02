import { Slide } from '../types';

export const slides: Slide[] = [
  // TITLE SLIDE
  {
    id: "title",
    title: "The Four Postural Forms",
    body: "Discovering Your Baseline Organization Through Posture Release Imagery",
    type: "info"
  },

  // SLIDE 1
  {
    id: "observation-not-judgment",
    title: "This Is Observation, Not Judgment",
    body: "Throughout this experience, treat everything as a working hypothesis. You are not being placed in a box. You are observing which patterns repeatedly feel natural and automatic in your body. These tendencies often become most clear when you are tired, relaxed, or not trying to perform in any particular way.",
    type: "info"
  },

  // SLIDE 2
  {
    id: "core-idea",
    title: "The Core Idea: The Body Organizes Around Repeating Surface Sensations",
    body: "Posture Release Imagery proposes that the body develops repeating waves of sensation and tension that tend to stabilize into consistent patterns. These patterns influence how we look, move, speak, and respond emotionally. You can consciously act differently, but when you stop trying, you often return to your baseline organization.",
    type: "info"
  },

  // SLIDE 3
  {
    id: "quick-self-observation",
    title: "Quick Self-Observation",
    body: "Pause for a moment. Close your eyes if you like. Notice where your body feels most present or energized right now. Do you feel more activity in the face and head area, or more in the pelvis and hips. Simply observe without trying to change anything.",
    type: "info"
  },

  // SECTION 1 - THE HEAD POLARITY
  {
    id: "head-polarity-intro",
    title: "THE HEAD POLARITY - Emotional Stance and Perceptual Strategy",
    body: "People tend to show one of two dominant head orientations. One is more diffuse and scanning. The other is more focused and corrective. Neither is better. They represent different ways of regulating emotion and attention.",
    type: "info"
  },

  // SLIDE 4
  {
    id: "two-head-orientations",
    title: "Two Head Orientations",
    body: "People tend to show one of two dominant head orientations. One is more diffuse and scanning. The other is more focused and corrective. Neither is better. They represent different ways of regulating emotion and attention.",
    type: "info"
  },

  // SLIDE 5
  {
    id: "withdrawn-head",
    title: "The Withdrawn Head",
    body: "Withdrawn heads tend to scan the environment more frequently. The face often appears softer and rounder. The eyes may seem larger or more open. Smiling is more common. The emotional stance often communicates that things are acceptable and allowed to unfold. Attention spreads outward rather than locking onto a single target.",
    type: "info"
  },

  // SLIDE 6
  {
    id: "controlled-head",
    title: "The Controlled Head",
    body: "Controlled heads tend to keep a steady forward focus. The face may appear flatter or more angular with less spontaneous smiling. The emotional stance often communicates that something must be improved, corrected, or directed. Attention narrows and concentrates on specific goals or problems.",
    type: "info"
  },

  // SLIDE 7
  {
    id: "head-observation-exercise",
    title: "Head Observation Exercise",
    body: "Think about yourself in relaxed, unguarded situations. Notice your natural tendency. Do you scan and soften your attention across the environment, or do you hold a steady focus and orient toward correcting or directing things. Consider your behavior across many situations, not just one moment.",
    type: "choice",
    field: "headOrientation",
    options: [
      { label: "I scan and soften my attention across the environment", value: "withdrawn" },
      { label: "I hold a steady focus and orient toward correcting or directing", value: "controlled" }
    ]
  },

  // SLIDE 8
  {
    id: "parent-reflection-head",
    title: "Parent Reflection for Head Orientation",
    body: "Now reflect on your parents or primary caregivers. Which parent most consistently showed the scanning, accepting stance. Which parent showed the focused, corrective stance. Then notice which of those presences felt most physically similar to your own facial and emotional expression growing up.",
    type: "choice",
    field: "parentHeadModel",
    options: [
      { label: "Mother (scanning, accepting)", value: "mother" },
      { label: "Father (focused, corrective)", value: "father" },
      { label: "Unclear or both equally", value: "unclear" }
    ]
  },

  // SECTION 2 - THE HIP POLARITY
  {
    id: "hip-polarity-intro",
    title: "THE HIP POLARITY - Energetic Tempo and Vocal Expression",
    body: "People also tend to organize their energy through one of two hip tendencies. One is steady and humming. The other is explosive and reactive. This polarity often shows up in movement speed, vocal force, and baseline arousal.",
    type: "info"
  },

  // SLIDE 9
  {
    id: "two-hip-orientations",
    title: "Two Hip Orientations",
    body: "People also tend to organize their energy through one of two hip tendencies. One is steady and humming. The other is explosive and reactive. This polarity often shows up in movement speed, vocal force, and baseline arousal.",
    type: "info"
  },

  // SLIDE 10
  {
    id: "dropped-humming-hips",
    title: "The Dropped or Humming Hips",
    body: "Dropped or humming hips tend to express steady, continuous energy. Movement may feel grounded and consistent rather than sudden. Speech is often softer, slower, or more sustained. The body gives an impression of endurance and ongoing propulsion rather than quick bursts.",
    type: "info"
  },

  // SLIDE 11
  {
    id: "explosive-tipped-hips",
    title: "The Explosive or Tipped Hips",
    body: "Explosive or tipped hips tend to mobilize quickly. Movement may feel reactive or fast, with more weight toward the front of the body. Speech may be louder, quicker, or more forceful. The body gives an impression of rapid ignition and outward projection of energy.",
    type: "info"
  },

  // SLIDE 12
  {
    id: "hip-voice-observation",
    title: "Hip and Voice Observation Exercise",
    body: "Recall how you naturally move and speak when excited or engaged. Do your words roll out steadily and evenly, or do they shoot out quickly with force. Do you feel more grounded in sustained motion, or ready to spring into action. Observe patterns that repeat across your life.",
    type: "choice",
    field: "hipOrientation",
    options: [
      { label: "I express steady, continuous energy", value: "humming" },
      { label: "I mobilize quickly with outward projection", value: "explosive" }
    ]
  },

  // SLIDE 13
  {
    id: "parent-reflection-hip",
    title: "Parent Reflection for Hip Orientation",
    body: "Reflect again on your parents or caregivers. Which parent most consistently expressed the steady humming tempo. Which expressed the explosive, reactive tempo. Then notice which energetic pattern feels most familiar in your own body during everyday activity.",
    type: "choice",
    field: "parentHipModel",
    options: [
      { label: "Mother (steady, humming tempo)", value: "mother" },
      { label: "Father (explosive, reactive tempo)", value: "father" },
      { label: "Unclear or both equally", value: "unclear" }
    ]
  },

  // SECTION 3 - COMBINING THE POLARITIES
  {
    id: "combining-polarities",
    title: "COMBINING THE POLARITIES",
    body: "When head orientation and hip orientation combine, they create four possible baseline organizations. Each person tends to stabilize in one of these four attractor states as their default way of being in the world.",
    type: "info"
  },

  // SLIDE 14
  {
    id: "two-axes-four-forms",
    title: "Two Axes Create Four Baseline Forms",
    body: "When head orientation and hip orientation combine, they create four possible baseline organizations. Each person tends to stabilize in one of these four attractor states as their default way of being in the world.",
    type: "info"
  },

  // SLIDE 15
  {
    id: "four-postural-forms",
    title: "The Four Postural Forms",
    body: "You may now notice that you lean toward one head orientation and one hip orientation. Together, these create your likely baseline form. This form influences how you interact, move, and regulate emotion, even as your life experiences and choices vary widely.",
    type: "info"
  },

  // SLIDE 16
  {
    id: "sibling-comparison",
    title: "Sibling Comparison Exercise",
    body: "If you have siblings, briefly consider them. They may live very different lives and have very different personalities, yet often share a similar underlying energy pattern or interaction style. This can help reveal the foundational organization beneath individual life paths.",
    type: "info"
  },

  // SECTION 4 - ADAPTATION AND DEVELOPMENT
  {
    id: "adaptation-development",
    title: "ADAPTATION AND DEVELOPMENT",
    body: "Some people resemble a parent's pattern directly. Others organize as an adaptive opposite in response to a dominant parental energy. Both are possible. Your baseline organization reflects both inheritance and developmental adaptation over time.",
    type: "info"
  },

  // SLIDE 17
  {
    id: "resemblance-compensation",
    title: "Resemblance and Compensation",
    body: "Some people resemble a parent's pattern directly. Others organize as an adaptive opposite in response to a dominant parental energy. Both are possible. Your baseline organization reflects both inheritance and developmental adaptation over time.",
    type: "info"
  },

  // SLIDE 18
  {
    id: "emotional-accessibility",
    title: "Emotional Accessibility",
    body: "Each baseline form tends to make certain emotions more easily accessible and others less automatic. This does not limit your emotional range. It simply describes which emotional responses arise first and feel most natural without conscious effort.",
    type: "info"
  },

  // SECTION 5 - THE FROZEN WAVE CONCEPT
  {
    id: "frozen-wave-concept",
    title: "THE FROZEN WAVE CONCEPT",
    body: "This framework suggests that a developmental wave of organization travels through the body and stabilizes into a repeating pattern. You can consciously act outside this pattern, but when effort drops away, the body tends to return to its familiar baseline.",
    type: "info"
  },

  // SLIDE 19
  {
    id: "repeating-wave",
    title: "The Repeating Wave",
    body: "This framework suggests that a developmental wave of organization travels through the body and stabilizes into a repeating pattern. You can consciously act outside this pattern, but when effort drops away, the body tends to return to its familiar baseline.",
    type: "info"
  },

  // SLIDE 20
  {
    id: "stability-flexibility",
    title: "Stability with Flexibility",
    body: "The goal is not to change your type. The goal is to recognize your baseline so that opposite tendencies can be accessed consciously when useful. Awareness increases flexibility without denying your natural organization.",
    type: "info"
  },

  // SECTION 6 - FINAL INTEGRATION
  {
    id: "final-integration",
    title: "FINAL INTEGRATION",
    body: "Now summarize your observations. Which head orientation feels most natural. Which hip orientation feels most natural. Combine these to identify your likely baseline form. Treat this as a provisional conclusion that can be refined through continued observation.",
    type: "info"
  },

  // SLIDE 21
  {
    id: "provisional-self-typing",
    title: "Your Provisional Self-Typing",
    body: "Now summarize your observations. Which head orientation feels most natural. Which hip orientation feels most natural. Combine these to identify your likely baseline form. Treat this as a provisional conclusion that can be refined through continued observation.",
    type: "result"
  },

  // SLIDE 22
  {
    id: "acceptance-application",
    title: "Acceptance and Application",
    body: "Understanding your baseline organization can reduce unnecessary self-criticism and clarify recurring interaction patterns. It allows you to work with your tendencies rather than struggle to become their opposite.",
    type: "info"
  },

  // CLOSING SLIDE
  {
    id: "closing",
    title: "You Are an Organized Organism",
    body: "You are not a fixed box. You are a living organism with stable tendencies shaped by development, sensation, and experience. By observing these patterns directly, you gain both acceptance of your nature and freedom to expand beyond it when needed.",
    type: "info"
  },

  // Email Capture
  {
    id: "email-capture",
    title: "Save Your Results",
    body: "Would you like to receive your complete type description and learn more about PRI? Enter your email to get personalized insights.",
    type: "email"
  },

  // Thank You
  {
    id: "thank-you",
    title: "Thank You",
    body: "Thank you for taking this journey of self-discovery. Your results have been saved. You can explore more guided experiences or learn about PRI courses.",
    type: "info"
  }
];
