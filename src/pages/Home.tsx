import Navigation from "../components/Navigation/Navigation";
import TrustedTech from "../components/TrustedTech/TrustedTech";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Workflow from "../components/Workflow/Workflow";
import TicketForm from "../components/TicketForm/TicketForm";

export default function Home() {
  return (
    <>
      <Navigation />

      <Hero />

      <TrustedTech />

      <Services />

      <WhyChoose />

      <Workflow />

      <TicketForm />

    </>
  );
}