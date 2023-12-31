import ProductImgSLider from "./ProductImgSLider";
import ProductInfo from "./ProductInfo";

function PhysicalProductImgSLiderInfo() {
  return (
    <div className="PhysicalProductImgSLiderInfo w-full lg:w-3/4 md:w-3/4">
      <div className="flex-col">
        <ProductImgSLider />
        <ProductInfo />
      </div>
    </div>
  );
}

export default PhysicalProductImgSLiderInfo;
