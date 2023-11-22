export default function ProductImgSLider() {
  return (
    <div className="ProductImgSLider">
      <div className="bg-[url('/src/assets/ProductImgSLider/1.png')]">
        <div className="flex justify-center items-center">
          <div className="flex-col justify-center items-center lg:space-y-4 md:space-y-2 space-y-2 ml-2 lg:ml-0 md:ml-0">
            <img
              src="/src/assets/ProductImgSLider/3.png"
              alt="/"
              className="lg:w-10/12 md:w-6/12 w-6/12"
            />
            <img
              src="/src/assets/ProductImgSLider/4.png"
              alt="/"
              className="lg:w-10/12 md:w-6/12 w-6/12"
            />
            <img
              src="/src/assets/ProductImgSLider/5.png"
              alt="/"
              className="lg:w-10/12 md:w-6/12 w-6/12"
            />
            <img
              src="/src/assets/ProductImgSLider/6.png"
              alt="/"
              className="lg:w-10/12 md:w-6/12 w-6/12"
            />
            <img
              src="/src/assets/ProductImgSLider/7.png"
              alt="/"
              className="lg:w-10/12 md:w-6/12 w-6/12"
            />
          </div>
          <img
            src="/src/assets/ProductImgSLider/2.png"
            alt="/"
            className="w-10/12 lg:w-5/6 md:w-4/5"
          />
        </div>
      </div>
    </div>
  );
}
