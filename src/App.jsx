import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features, {
  ProblemSection,
  RolesSection,
  HowItWorksSection,
} from "./components/Features";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import DemoForm from "./components/DemoForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <RolesSection />
        <HowItWorksSection />
        <Pricing />
        <Faq />
        <DemoForm />
      </main>
      <Footer />
    </div>
  );
}
