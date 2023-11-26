import QuestionMenuPageImg from "./QuestionMenuPageImg";
import QuestionMenu from "./QuestionMenu";
import AccordionSection from "./AccordionSection";
import Header from "./Header";
import Footer from "./Footer";

function QuestionPage() {
  return (
    <div className="QuestionPage  bg-black">
      <Header />
      <QuestionMenuPageImg />
      <QuestionMenu />
      <AccordionSection />
      <br />
      <AccordionSection />
      <Footer />
    </div>
  );
}

export default QuestionPage;
