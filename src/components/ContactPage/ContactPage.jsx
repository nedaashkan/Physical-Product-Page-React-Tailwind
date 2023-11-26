import ContactPageImg from "./ContactPageImg";
import ContactMenu from "./ContactMenu";
import AccordionSection from "./AccordionSection";
import Header from "./Header";
import TopFooter from "./TopFooter";
import Footer from "./Footer";

function ContactPage() {
  return (
    <div className="ContactPage  bg-black">
      <Header />
      <ContactPageImg />
      <ContactMenu />
      <AccordionSection />
      <br />
      <AccordionSection />
      <TopFooter />
      <Footer />
    </div>
  );
}

export default ContactPage;
