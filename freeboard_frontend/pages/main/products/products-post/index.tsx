import { useAuth } from "../../../../src/components/commons/hooks/useAuth";
import ProductsWriteUI from "../../../../src/components/units/products/write/products.write.index";

export default function ProductPost() {
  useAuth();

  return <ProductsWriteUI isEdit={false} />;
}
