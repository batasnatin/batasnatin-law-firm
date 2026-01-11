import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "BATASnatin LIVE - Free Daily Legal Advice | BATASnatin Law Firm",
  description: "Join us every day at 8:00 PM (Philippine Time) for free legal advice on YouTube. Ask your legal questions and get expert answers from Atty. Libayan.",
};

export default function BATAsnatinLivePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Youtube className="w-5 h-5" />
              <span className="font-semibold">FREE Legal Education</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              BATASnatin LIVE
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Free Daily Legal Advice Every Day at 8:00 PM
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Join Atty. Ranny Randolf B. Libayan as he answers your legal questions live on YouTube.
              No registration required. Just tune in and learn!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href="https://youtube.com/channel/UCVyNJy0q_Q2XB873gEkmgjQ" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-5 w-5" />
                  Subscribe on YouTube
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                <Link href="https://facebook.com/BATASnatin" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-5 w-5" />
                  Follow on Facebook
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Info */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center border-2 border-primary/20">
                <CardHeader>
                  <Clock className="w-12 h-12 text-primary mx-auto mb-2" />
                  <CardTitle>Daily Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-1">8:00 PM</p>
                  <p className="text-muted-foreground">Philippine Time</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-secondary/20">
                <CardHeader>
                  <Calendar className="w-12 h-12 text-secondary mx-auto mb-2" />
                  <CardTitle>Frequency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-secondary mb-1">Every Day</p>
                  <p className="text-muted-foreground">Monday to Sunday</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-primary/20">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mx-auto mb-2" />
                  <CardTitle>Format</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-1">Live Q&A</p>
                  <p className="text-muted-foreground">Interactive Session</p>
                </CardContent>
              </Card>
            </div>

            {/* Latest Episode */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-serif text-center mb-8">Latest Episode</h2>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dT0AJ_gwIRE"
                  title="BATASnatin LIVE"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">How to Join</h2>
            <p className="text-lg text-muted-foreground">
              Joining BATASnatin LIVE is easy and completely free. Follow these simple steps:
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-3">
                  1
                </div>
                <CardTitle>Subscribe to Our Channel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Subscribe to our YouTube channel to get notified when we go live every day at 8:00 PM.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://youtube.com/channel/UCVyNJy0q_Q2XB873gEkmgjQ" target="_blank" rel="noopener noreferrer">
                    <Youtube className="mr-2 h-4 w-4" />
                    Subscribe Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center text-xl font-bold mb-3">
                  2
                </div>
                <CardTitle>Follow Our Facebook Page</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Join our Facebook community for event reminders and additional legal tips and updates.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://facebook.com/BATASnatin" target="_blank" rel="noopener noreferrer">
                    <Facebook className="mr-2 h-4 w-4" />
                    Follow on Facebook
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-3">
                  3
                </div>
                <CardTitle>Tune In Daily at 8:00 PM</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Set your alarm for 8:00 PM Philippine Time and join us live! Ask your legal questions in the chat,
                  and Atty. Libayan will answer them during the show. You can also learn from other viewers&apos; questions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Episodes */}
      <section className="py-20 bg-background">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Past Episodes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Missed a show? No problem! Watch our previous episodes and catch up on valuable legal insights.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold font-serif mb-6">Season One</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { episode: 1, date: "August 31, 2018", facebook: "https://web.facebook.com/BATASnatin/videos/261581844465850/", youtube: "https://www.youtube.com/watch?v=Kmosry08haM" },
                { episode: 2, date: "September 7, 2018", facebook: "https://www.facebook.com/BATASnatin/videos/1061442454024488/", youtube: "https://www.youtube.com/watch?v=WxlwYkg7lHo" },
                { episode: 3, date: "September 13, 2018", facebook: "https://www.facebook.com/BATASnatin/videos/1761618313887550/", youtube: "https://www.youtube.com/watch?v=pSZBUD5VXDc" },
                { episode: 4, date: "September 21, 2018", facebook: "https://web.facebook.com/BATASnatin/videos/846150992256644/", youtube: "https://www.youtube.com/watch?v=pPtmb-Bedtg" },
                { episode: 5, date: "September 28, 2018", facebook: "https://web.facebook.com/BATASnatin/videos/701567683534502/", youtube: "https://www.youtube.com/watch?v=m7F8E_RO30U" },
                { episode: 6, date: "October 5, 2018", facebook: "https://web.facebook.com/BATASnatin/videos/283022252313866/", youtube: "https://www.youtube.com/watch?v=2-0m6Jco298" },
              ].map((ep) => (
                <Card key={ep.episode} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Episode {ep.episode}</CardTitle>
                    <p className="text-sm text-muted-foreground">{ep.date}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <Link href={ep.facebook} target="_blank" rel="noopener noreferrer">
                          <Facebook className="mr-1 h-3 w-3" />
                          Facebook
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <Link href={ep.youtube} target="_blank" rel="noopener noreferrer">
                          <Youtube className="mr-1 h-3 w-3" />
                          YouTube
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Never Miss a Show
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Subscribe to our YouTube channel and turn on notifications to get alerts when we go live every day at 8:00 PM.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="https://youtube.com/channel/UCVyNJy0q_Q2XB873gEkmgjQ" target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-5 w-5" />
              Subscribe to BATASnatin on YouTube
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
