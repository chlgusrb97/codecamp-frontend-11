import { useAuth } from "../../../../../src/components/commons/hooks/useAuth";
import ProductsDetailUI from "../../../../../src/components/units/products/detail/products.detail.index";

export default function ProductPostMoved() {
  useAuth();

  return <ProductsDetailUI />;
}
