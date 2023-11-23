function PhysicalProductInfoOption() {
  return (
    <div classNameName="PhysicalProductInfoOption w-full lg:w-2/6 md:w-2/6">
      <div className="flex flex-col mx-2 p-1 md:p-3 lg:p-4 md:mx-0 lg:mx-0">
        <div className="flex flex-col">
          <h2 className="text-[0.9rem] md:text-[0.9rem] lg:text-[1.1rem] text-center text-[#CFCFCF]">
            فیزیکال . رسته . نام شرکت سازنده و محصول
          </h2>
          <h1 className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.6rem]  text-center md:text-start lg:text-start text-[#00d5ff]">
            Product Name Product Name
          </h1>
          <p className="text-[0.7rem] md:text-[0.9rem] lg:text-[1.1rem] text-center md:text-start lg:text-start  text-[#CFCFCF]">
            Product Description Product Description
            <br className="" />
            Product Description
          </p>
          <h3 className=" text-[1rem] md:text-[1.3rem] lg:text-[1.7rem]  text-[#CFCFCF]  flex flex-row-reverse justify-center lg:justify-end md:justify-end ">
            100,000,000
            <span className="text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#CFCFCF] flex justify-center items-center p-1">
              تومان
            </span>
          </h3>
          <>
            <li className="text-[0.9rem] md:text-[0.9rem] lg:text-[0.8rem]  text-[#CFCFCF]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم لورم ایپسوم
            </li>
          </>
        </div>

        <br />

        <div className="flex flex-col">
          <h2 className="">پیشنهادات دیگر</h2>
          <div className="flex flex-row">
            <img src="" alt="" srcset="" />
            <div className="flex flex-row">
              <p className="">Product Name Product Name</p>
              <h3 className="flex flex-row-reverse justify-end">
                100,000,000 <span className="">تومان</span>
              </h3>
            </div>
          </div>
        </div>
        <br />

        <div className="flex flex-col">
          <div className="flex flex-row-reverse justify-end">
            <div className="h-5 w-5 bg-orange-400"></div>
            <h3 className="">.تحویل اکسپرس اِیمور را رایگان تجربه کنید</h3>
          </div>
          <h4 className="">ارسال بازه __ تا __ نام ماه</h4>
          <button className="text-start">افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
  );
}
export default PhysicalProductInfoOption;
// <h1 classNameName="text-[0.9rem] md:text-[1.3rem] lg:text-[2.2rem] text-[#E6E6E6]">
//   hi my name is neda
// </h1>;
