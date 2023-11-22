import ProductImgSLider from "./ProductImgSLider";
import ProductInfo from "./ProductInfo";

function PhysicalProductImgSLiderInfo() {
  return (
    <div className="PhysicalProductImgSLiderInfo w-3/4 bg-lime-300">
      <div className="flex-col">
        <ProductImgSLider />
        <ProductInfo />
      </div>
    </div>
  );
}

export default PhysicalProductImgSLiderInfo;
