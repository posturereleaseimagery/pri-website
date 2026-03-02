import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const lineageCopy = `Years ago (1992), I was giving a lesson in the Alexander Technique to a young theater student. I was working with him seated in a chair and having difficulty getting him to “lighten up.” When my verbal suggestions and light (but still novice) hands-on cues failed to produce change, I happened to suggest that he imagine that he is a cheetah looking over a savanna for prey. This mental image had been a suggestion that I, off-handedly, had heard from my A.T. teacher when she was having trouble getting me “up” (Alexander Technique language). I never heard the suggestion again from her nor any other A.T. teacher. However, it obviously worked for my student in a way that my earlier approaches had not. He “shot up” in stature (without leaving the chair).

This event of providing a student with “colorful” direction marked the beginning of years of experimentation with imagery. It resulted in numerous new levels of excitement and understanding for me, along with more pain relief and freedom within myself.

The development of the imagery became useful for new students, most of whom were unfamiliar with the Alexander Technique.  And musing on my own drawings of simplified evolution brought about my first new principles. They related to the appropriate relationship between the dorsal and ventral surfaces of the body.

Where the dorsal and ventral surfaces on the body are actually located is currently (June, 2025) not accurately displayed on the internet. I hope that some of my illustrations, which show how we evolved from our animal “forefathers”, are someday available there. It is an evolutionary model of human development that shows how we became “secondarily” upright. (All animals are upright in a very meaningful sense).

I hope that one day, my model is accepted and available to people who google: “illustrations of dorsal and ventral surfaces on humans.” Having many people see PRI’s images and explanations could be of considerable value in assisting people toward a healthier understanding of ourselves and how we evolved to where we are.`;

export default function LineagePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm">
          About PRI
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          
        </h1>


        <div className="mt-10 rounded-xl border border-border/60 bg-card p-8 shadow-xl space-y-6">
          <img
            src="/images/Spread-1.webp"
            alt="PRI imagery spread"
            className="w-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold mb-4">History & Discovery</h2>
            <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
              {lineageCopy}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-warm/20 bg-warm/5 p-6">
          <h3 className="font-semibold text-warm">Want the Full Picture?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            The book includes detailed discussion of each of these influences and how
            they are synthesized in the PRI framework.
          </p>
          <Button asChild className="mt-4 bg-warm text-warm-foreground hover:bg-warm/90" size="sm">
            <Link href="/book">
              About the Book
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border/60 pt-6">
          <Link
            href="/about"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            About John Appleton
          </Link>
          <Link
            href="/about/method"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            The Method
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
