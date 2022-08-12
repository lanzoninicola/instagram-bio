export interface LoaderResponse<T> {
  ok: boolean;
  status: number;
  payload: T;
}
