import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductWriteUIProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchUseditem"> | undefined
}

