import Header from "./Header";
import PhysicalProductImgSLiderInfo from "./PhysicalProductImgSLiderInfo";
import PhysicalProductInfoOption from "./PhysicalProductInfoOption";

function PhysicalProductPage() {
  return (
    <div className="PhysicalProductPage  bg-black">
      <Header />
      <div className="flex flex-col lg:flex-row md:flex-row space-x-0 lg:space-x-2 md:space-x-2">
        <PhysicalProductImgSLiderInfo />
        <PhysicalProductInfoOption />
      </div>
    </div>
  );
}

export default PhysicalProductPage;
