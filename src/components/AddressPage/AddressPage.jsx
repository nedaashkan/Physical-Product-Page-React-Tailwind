import ShoppingCartCost2 from "./ShoppingCartCost2";
import AddressSection from "./AddressSection";

export default function AddressPage() {
  return (
    <div className="AddressPage bg-black">
      <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[5rem] text-center text-[#00d5ff] mb-5 lg:mb-5 md:mb-5">
        trendyol
      </h1>
      <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center lg:space-x-2 md:space-x-2 space-x-0">
        <ShoppingCartCost2 />
        <AddressSection />
      </div>
    </div>
  );
}
