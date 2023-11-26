function ContactMenu() {
  return (
    <div className="ContactMenu  bg-black flex justify-center items-center mb-11">
      <span className="text-center  flex flex-row-reverse justify-around items-center border-b-[1px] border-[#E6E6E6] w-11/12 md:w-3/4 lg:w-4/5 py-3">
        <a href="/">
          <span className="text-[#E6E6E6] text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] border-l-[1px] border-[#E6E6E6] lg:px-4 px-2">
            محصولات فیزیکی
          </span>
        </a>
        <a href="/">
          <span className="text-[#E6E6E6] text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] border-l-[1px] border-[#E6E6E6] lg:px-4 px-2">
            محصولات دیجیتال
          </span>
        </a>
        <a href="/">
          <span className="text-[#E6E6E6] text-[0.8rem] md:text-[1rem] lg:text-[1.1rem] border-l-[1px] border-[#E6E6E6] lg:px-4 px-2">
            حساب کاربری
          </span>
        </a>
        <a href="/">
          <span className="text-[#E6E6E6] text-[0.8rem] md:text-[1rem] lg:text-[1.1rem]  lg:px-4 px-2">
            گزارش باگ
          </span>
        </a>
      </span>
    </div>
  );
}

export default ContactMenu;
