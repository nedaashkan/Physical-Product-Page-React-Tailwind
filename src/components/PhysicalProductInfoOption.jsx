import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

function PhysicalProductInfoOption() {
  return (
    <div classNameName="PhysicalProductInfoOption w-full lg:w-2/6 md:w-2/6">
      <div className="flex flex-col mx-2 p-1 md:p-2 lg:p-3 md:mx-0 lg:mx-0">
        {/* product info */}
        <div className="flex flex-col">
          <h2 className="hidden md:block lg:block text-[0.9rem] md:text-[0.8rem] lg:text-[0.9rem] text-center text-[#CFCFCF] mb-3 md:mb-5 lg:mb-6 ">
            فیزیکال . دسته . نام شرکت سازنده و محصول
          </h2>
          <h1 className="text-[1.1rem] md:text-[1.1rem] lg:text-[1.3rem]  text-center md:text-start lg:text-start text-[#00d5ff] mb-2 md:mb-2 lg:mb-2">
            Product Name Product Name
          </h1>
          <p className="text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] text-center md:text-start lg:text-start  text-[#CFCFCF]  mb-1 md:mb-1 lg:mb-1">
            Product Description Product Description
            <br className="" />
            Product Description
          </p>
          <h3 className=" text-[1rem] md:text-[1.3rem] lg:text-[1.6rem]  text-[#CFCFCF]  flex flex-row-reverse justify-center lg:justify-end md:justify-end mb-2 md:mb-5 lg:mb-10">
            100,000,000
            <span className="text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#CFCFCF] flex justify-center items-center p-1">
              تومان
            </span>
          </h3>
          <li
            dir="rtl"
            className="text-[0.5rem] md:text-[0.9rem] lg:text-[0.8rem] text-[#3A3A3A] text-center md:text-start lg:text-start mb-2 md:mb-1"
          >
            <span className="text-[0.7rem] md:text-[0.5rem] lg:text-[0.7rem]  text-[#CFCFCF]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم
            </span>
          </li>
          <li
            dir="rtl"
            className="text-[0.5rem] md:text-[0.9rem] lg:text-[0.8rem] text-[#3A3A3A] text-center md:text-start lg:text-start mb-2 md:mb-1"
          >
            <span className="text-[0.7rem] md:text-[0.5rem] lg:text-[0.7rem]  text-[#CFCFCF]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم
            </span>
          </li>{" "}
          <li
            dir="rtl"
            className="text-[0.5rem] md:text-[0.9rem] lg:text-[0.8rem] text-[#3A3A3A] text-center md:text-start lg:text-start mb-2 md:mb-1"
          >
            <span className="text-[0.7rem] md:text-[0.5rem] lg:text-[0.7rem]  text-[#CFCFCF]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم
            </span>
          </li>
          س
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* more product */}
        <div className="flex flex-col">
          <h2 className="text-[1rem] md:text-[0.9rem] lg:text-[1.1rem] text-center md:text-start lg:text-start  text-[#CFCFCF]  mb-1 md:mb-1 lg:mb-6">
            پیشنهادات دیگر
          </h2>
          <div className="flex flex-row items-center justify-center mb-1 md:mb-2 lg:mb-3">
            <img
              src="/src/assets/ProductImg/2.png"
              alt="/"
              className="w-fit md:w-[30%] lg:w-[30%] "
            />
            <div className="flex flex-col">
              <p className="text-[0.8rem] md:text-[0.8rem] lg:text-[1rem]  text-[#CFCFCF]">
                Product Name Product Name
              </p>
              <h3 className=" text-[0.8rem] md:text-[0.8rem] lg:text-[1rem]  text-[#CFCFCF]  flex flex-row-reverse justify-center lg:justify-end md:justify-end">
                100,000,000
                <span className="text-[0.7rem] md:text-[0.5rem] lg:text-[0.6rem] text-[#CFCFCF] flex justify-center items-center p-1">
                  تومان
                </span>
              </h3>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center mb-1 md:mb-2 lg:mb-3">
            <img
              src="/src/assets/ProductImg/2.png"
              alt="/"
              className="w-fit md:w-[30%] lg:w-[30%] "
            />
            <div className="flex flex-col">
              <p className="text-[0.8rem] md:text-[0.8rem] lg:text-[1rem]  text-[#CFCFCF]">
                Product Name Product Name
              </p>
              <h3 className=" text-[0.8rem] md:text-[0.8rem] lg:text-[1rem]  text-[#CFCFCF]  flex flex-row-reverse justify-center lg:justify-end md:justify-end">
                100,000,000
                <span className="text-[0.7rem] md:text-[0.5rem] lg:text-[0.6rem] text-[#CFCFCF] flex justify-center items-center p-1">
                  تومان
                </span>
              </h3>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mb-1 md:mb-2 lg:mb-3">
            <img
              src="/src/assets/ProductImg/2.png"
              alt="/"
              className="w-fit md:w-[30%] lg:w-[30%] "
            />
            <div className="flex flex-col">
              <p className="text-[0.8rem] md:text-[0.8rem] lg:text-[1rem]  text-[#CFCFCF]">
                Product Name Product Name
              </p>
              <h3 className=" text-[0.8rem] md:text-[0.8rem] lg:text-[1rem]  text-[#CFCFCF]  flex flex-row-reverse justify-center lg:justify-end md:justify-end">
                100,000,000
                <span className="text-[0.7rem] md:text-[0.5rem] lg:text-[0.6rem] text-[#CFCFCF] flex justify-center items-center p-1">
                  تومان
                </span>
              </h3>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* add to shopping cart */}
        <div className="flex flex-col  justify-center items-center">
          <div className="flex flex-row-reverse justify-center items-center">
            <FontAwesomeIcon
              icon={faSquareFull}
              className="text-[0.8rem] md:text-[1rem] lg:text-[1.5rem] p-[4px]"
            />
            <h3 className="text-[0.9rem] md:text-[0.8rem] lg:text-[1rem] text-center text-[#CFCFCF] mb-2">
              .تحویل اکسپرس
              <span className="text-[#00d5ff]"> اِیمور</span>
              را رایگان تجربه کنید
            </h3>
          </div>
          <h4 className="text-[0.9rem] md:text-[0.8rem] lg:text-[1rem] text-[#5e5d5d] text-center">
            ارسال بازه __ تا __ نام ماه
          </h4>
          <button className=" text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] text-center bg-[#00d5ff] lg:p-1 w-[50%] md:w-full lg:w-full mt-3">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
export default PhysicalProductInfoOption;
