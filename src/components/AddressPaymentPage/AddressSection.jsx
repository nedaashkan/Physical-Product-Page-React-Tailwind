import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";

export default function AddressSection() {
  return (
    <div className="MyBasket-container">
      <div className="flex justify-end items-center bg-[#3A3A3A] p-[0.3em]">
        <p className="mybasket-label - text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
          آدرس
        </p>
        <FontAwesomeIcon
          icon={faSquareFull}
          className="text-[0.8rem] md:text-[1rem] lg:text-[1.5rem] p-[10px]  text-[#E6E6E6]"
        />
      </div>
      <div className="ItemsInMyBasket - bg-[#2E2E2E] lg:p-1 md:p-1 p-[0.4em] lg:mb-[1.5em] md:mb-[1.5em] mb-[1em]">
        <div className="flex flex-col lg:p-3 md:p-3 p-[0.2em]">
          <div className="flex justify-center items-center border-[2px] border-[#00d5ff]">
            <p className="text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
              افزودن آدرس جدید
            </p>
            <FontAwesomeIcon
              icon={faSquareFull}
              className="text-[0.8rem] md:text-[1rem] lg:text-[1.5rem] p-[10px]  text-[#E6E6E6]"
            />
          </div>
          {/* all address */}

          {/* adress 1 */}
          <div className="flex-col border-[2px] border-[#00d5ff] lg:mt-4 md:mt-3 mt-2 lg:p-2 md:p-2 p-2">
            <div className="flex flex-row-reverse justify-between items-center">
              <p className=" text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
                عنوان آدرس
              </p>
              <div className="flex flex-row-reverse">
                <p className="text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
                  09143495178
                </p>
                <FontAwesomeIcon
                  icon={faSquareFull}
                  className="text-[0.8rem] md:text-[1rem] lg:text-[1.5rem] p-[10px]  text-[#E6E6E6]"
                />
              </div>
            </div>
            <p className=" text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
              شرح آدرس شرح آدرس شرح آدرس شرح آدرس شرح آدرس شرح آدرس شرح آدرس شرح
              آدرس شرح آدرس شرح آدرس شرح آدرس شرح آدرس شرح آدرس شرح
              <span className="lg:mr-11 md:mr-11 mr-10">
                <a
                  href="http://"
                  rel="noopener noreferrer"
                  className=" border-[#E6E6E6] border-b-[1px]"
                >
                  ویرایش ادرس
                </a>
              </span>
            </p>
          </div>
          {/* adress 2 */}
          <div className="flex-col border-[2px] border-[#00d5ff] lg:mt-4 md:mt-3 mt-2 lg:p-2 md:p-2 p-2">
            <div className="flex flex-row-reverse justify-between items-center">
              <p className=" text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
                عنوان آدرس
              </p>
              <div className="flex flex-row-reverse">
                <p className="text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
                  09143495178
                </p>
                <FontAwesomeIcon
                  icon={faSquareFull}
                  className="text-[0.8rem] md:text-[1rem] lg:text-[1.5rem] p-[10px]  text-[#E6E6E6]"
                />
              </div>
            </div>
            <p className=" text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">
              شرح آدرس شرح آدرس شرح آدرس شرح آدرس شرح آدرس شرح آدرس شرح آدرس شرح
              آدرس شرح آدرس شرح آدرس شرح آدرس شرح آدرس شرح آدرس شرح
              <span className="lg:mr-20 md:mr-15 mr-20">
                <a
                  href="http://"
                  rel="noopener noreferrer"
                  className=" border-[#E6E6E6] border-b-[1px]"
                >
                  ویرایش ادرس
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
