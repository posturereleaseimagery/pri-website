import { Metadata } from 'next';
import { QuizFlow } from './components/QuizFlow';

export const metadata: Metadata = {
  title: 'PRI Self-Typing Quiz | Posture Release Imagery',
  description: 'Discover your postural tendencies through this guided self-typing experience. A contemplative journey through the four fundamental postural forms.',
  keywords: 'posture, postural intelligence, PRI, self-typing, body awareness, somatic education',
};

export default function SelfTypingPage() {
  return (
    <main>
      <QuizFlow />
    </main>
  );
}
