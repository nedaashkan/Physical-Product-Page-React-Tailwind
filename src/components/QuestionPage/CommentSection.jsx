export default function CommentSection() {
  return (
    <div className="CommentSection flex justify-center items-center">
      <div className="flex flex-col justify-center border-[#E6E6E6] border-[1px] w-11/12 md:w-3/4 lg:w-3/4 p-2 md:p-3 lg:p-3">
        <div className="flex flex-row-reverse gap-5">
          <h1 className="text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] text-[#E6E6E6]">
            نام مشتری
          </h1>
          <h1
            dir="rtl"
            className="text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] text-[#c3c2c2]"
          >
          8 خرداد 1402
          </h1>
        </div>
        <p className="text-right text-[0.7rem] md:text-[1rem] lg:text-[1rem]  text-[#E6E6E6] mt-4 md:mt-5 lg:mt-5">
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالا",
        </p>
      </div>
    </div>
  );
}
