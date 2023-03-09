import { useQueryFetchUsedItem } from "../../../../../../src/components/commons/hooks/queries/useQueryFetchUsedItem";
import ProductsWriteUI from "../../../../../../src/components/units/products/write/products.write.index";

export default function ProductPostEdit() {
  const { data } = useQueryFetchUsedItem();
  return <ProductsWriteUI isEdit={true} data={data} />;
}
