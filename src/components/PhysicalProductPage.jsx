import Header from "./Header";
import PhysicalProductImgSLiderInfo from "./PhysicalProductImgSLiderInfo";
import PhysicalProductInfoOption from "./PhysicalProductInfoOption";

function PhysicalProductPage() {
  return (
    <div className="PhysicalProductPage  bg-black">
      <Header />
      <div className="flex-col md:flex-row lg:flex-row">
        <PhysicalProductImgSLiderInfo />
        <PhysicalProductInfoOption />
      </div>
    </div>
  );
}

export default PhysicalProductPage;
