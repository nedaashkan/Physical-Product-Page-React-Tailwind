import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

function ContactPageImg() {
  return (
    <div className="ContactPageImg  bg-black">
      <div className="bg-[url('/src/assets/ContactPage/1.png')] bg-cover h-20 lg:h-44  md:h-32">
        <div className="flex justify-center items-center space-x-2 lg:p-10 md:p-10 p-5">
          <FontAwesomeIcon
            icon={faSquareFull}
            className="text-[#E6E6E6] text-[1rem] md:text-[1.3rem] lg:text-[2rem] p-[4px] flex justify-center items-center"
          />
          <h1 className="text-[0.9rem] md:text-[1.3rem] lg:text-[2.2rem] text-center  text-[#E6E6E6]">
            Contact Us
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ContactPageImg;
