export interface ResponseDataType {
  status: number;
  data: object;
  message: string;
  errors: object | null;
  meta: {
    length: number;
    took: number;
    total: number;
  };
}
