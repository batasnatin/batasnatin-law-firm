import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Clock, Youtube, HelpCircle, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Free Legal Advice - Get Answers to Your Legal Questions | BATASnatin Law Firm",
  description: "Get free legal advice from experienced attorneys. Join BATASnatin LIVE daily at 8PM on YouTube or post your questions in our online forum for answers.",
};

export default function FreeLegalAdvicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <MessageSquare className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Free Legal Advice
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Get answers to your legal questions from experienced attorneys - completely free!
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Two Ways to Get Free Legal Advice
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the method that works best for you - join our live show or post your question online
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* BATASnatin LIVE */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Youtube className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">BATASnatin LIVE</CardTitle>
                <p className="text-sm text-muted-foreground">Real-time legal advice on YouTube</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-secondary/10 p-4 rounded-lg text-center">
                  <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <p className="font-bold text-lg">Every Day at 8:00 PM</p>
                  <p className="text-sm text-muted-foreground">Philippine Time</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Get immediate answers during the live show</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Ask questions in the YouTube chat</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Learn from other viewers&apos; questions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Watch past episodes anytime</p>
                  </div>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link href="/batasnatin-live">
                    <Youtube className="mr-2 h-5 w-5" />
                    Join BATASnatin LIVE
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Online Forum */}
            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Online Forum</CardTitle>
                <p className="text-sm text-muted-foreground">Post questions, get detailed answers</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-bold text-lg">24-48 Hour Response</p>
                  <p className="text-sm text-muted-foreground">Attorney answers posted online</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Post detailed questions anytime</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Get thorough written responses</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Browse previous questions and answers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Search for answers to common issues</p>
                  </div>
                </div>

                <Button asChild className="w-full" size="lg" variant="secondary">
                  <a href="https://batasnatin.com/forum" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Visit Forum
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Ask Questions */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                How to Ask Good Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Get better answers by providing clear, detailed information
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">✓ Do This</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p>Be specific about your situation and timeline</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p>Include relevant facts and documents you have</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p>Mention which government agency is involved (if any)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p>Ask clear, focused questions</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-destructive">✗ Avoid This</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-destructive">×</span>
                    <p>Don&apos;t be too vague or general</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive">×</span>
                    <p>Don&apos;t include personal information publicly (IDs, addresses)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive">×</span>
                    <p>Don&apos;t expect advice to replace formal legal counsel</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-destructive">×</span>
                    <p>Don&apos;t ask multiple unrelated questions at once</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-primary/5">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Important Disclaimer</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      The free legal advice provided through BATASnatin LIVE and our online forum is general in nature
                      and should not be considered as formal legal counsel or create an attorney-client relationship.
                    </p>
                    <p>
                      For specific legal representation or if your case requires detailed analysis and documentation,
                      please book a formal consultation (₱2,500) or check if you qualify for our pro bono services.
                    </p>
                    <p className="font-semibold text-foreground">
                      Responses are based on general Philippine law and may not address all nuances of your specific situation.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Need More Than Free Advice?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            If your legal issue requires formal representation, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/contact">
                Book Consultation (₱2,500)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
              <Link href="/pro-bono">
                Check Pro Bono Eligibility
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-white/70">
              Have more questions? Check our <Link href="/faqs" className="underline hover:text-secondary">FAQs</Link> or
              explore our <Link href="/practice-areas" className="underline hover:text-secondary">Practice Areas</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
