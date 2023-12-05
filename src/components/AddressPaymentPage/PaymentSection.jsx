import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

import Image from "./Image";

let PaymentSectionData = [
  {
    src: "/src/assets/PaymentSection/1.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/PaymentSection/2.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/PaymentSection/3.png",
    alt: "/",
    link: "",
  },
  {
    src: "/src/assets/PaymentSection/4.png",
    alt: "/",
    link: "",
  },
];

export default function PaymentSection() {
  return (
    <div className="MyBasket-container">
      <div className="flex justify-end items-center bg-[#3A3A3A] p-[0.3em]">
        <p className="mybasket-label - text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
          درگاه پرداخت
        </p>
        <FontAwesomeIcon
          icon={faSquareFull}
          className="text-[0.8rem] md:text-[1rem] lg:text-[1.5rem] p-[10px]  text-[#E6E6E6]"
        />
      </div>
      <div className="ItemsInMyBasket  bg-[#2E2E2E] p-[1em] mb-[1.5em]">
        <div className="flex justify-between">
          {PaymentSectionData.map((img, index) => {
            return (
              <Image
                imgAlt={img.alt}
                imgSrc={img.src}
                imgLink={img.link}
                key={index}
                imgClass={"w-9 md:w-20 lg:w-32"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
