import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Your Personal AI Tutor
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience personalized learning powered by AI. Get instant feedback,
          24/7 support, and master any subject at your own pace.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" className="text-lg">
            Join the Waitlist
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            Learn More
          </Button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our AI Tutor?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Learning
              </h3>
              <p className="text-muted-foreground">
                Adaptive study plans tailored to your learning style and pace
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
              <p className="text-muted-foreground">
                Get immediate answers and explanations to your questions
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Access help anytime, anywhere - day or night
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Adaptive Learning</h3>
              <p className="text-muted-foreground">
                Our AI analyzes your progress and adjusts the difficulty level
                to ensure optimal learning
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your improvement with detailed analytics and performance
                insights
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Interactive Exercises
              </h3>
              <p className="text-muted-foreground">
                Engage with dynamic practice problems and real-world
                applications
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Smart Review System
              </h3>
              <p className="text-muted-foreground">
                Automatically schedule reviews to reinforce your learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-muted-foreground">
                Join our waitlist to get early access
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Set Your Goals</h3>
              <p className="text-muted-foreground">
                Tell us what you want to learn
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
              <p className="text-muted-foreground">
                Begin your personalized learning journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <p className="text-muted-foreground mb-4">
                "The AI tutor helped me understand complex concepts in minutes.
                It's like having a personal teacher available 24/7!"
              </p>
              <p className="font-semibold">- Sarah, College Student</p>
            </div>
            <div className="p-6 border rounded-lg">
              <p className="text-muted-foreground mb-4">
                "As a parent, I'm impressed by how the AI adapts to my child's
                learning style. The progress tracking is invaluable."
              </p>
              <p className="font-semibold">- Michael, Parent</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                How does the AI tutor work?
              </h3>
              <p className="text-muted-foreground">
                Our AI analyzes your learning style, progress, and goals to
                create personalized study plans and provide targeted assistance.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                What subjects are covered?
              </h3>
              <p className="text-muted-foreground">
                We cover a wide range of subjects including mathematics,
                science, languages, and more. Our AI is continuously learning
                and expanding its knowledge base.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Is it suitable for all ages?
              </h3>
              <p className="text-muted-foreground">
                Yes! Our AI tutor adapts to different learning levels and
                styles, making it suitable for high school students, college
                students, and lifelong learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our waitlist today and be among the first to experience the
            future of personalized learning.
          </p>
          <Button size="lg" className="text-lg">
            Join the Waitlist Now
          </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
