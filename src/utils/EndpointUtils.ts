import { AxiosResponse } from "axios";
import { ApiResponseError, ApiResponseModel } from "../models/API";

const handleError = (response: AxiosResponse): ApiResponseModel => {
  return {
    httpCode: response?.status || 0,
    errors: response?.data?.errors?.map((e: ApiResponseError) => e.detail) || [
      "Um erro desconhecido ocorreu.",
    ],
    errorsTypes: response?.data?.errors?.map(
      (e: ApiResponseError) => e.type
    ) || ["UnknownType"],
    headers: response?.headers,
    success: false,
  };
};

export const handleEndpointCallApiDex = async <T>(
  endpointCall: () => Promise<AxiosResponse<T, ApiResponseError>>,
  defaultDataValue?: T
): Promise<ApiResponseModel<T>> => {
  try {
    const response = await endpointCall();

    let data = response.data || defaultDataValue;

    if (response.data instanceof Blob) {
      data = response.data as unknown as T;
    }

    return {
      httpCode: response.status,
      errors: [],
      success: true,
      headers: response.headers,
      data,
    };
  } catch (error: any) {
    const { response = {} } = error;
    return handleError(response);
  }
};
