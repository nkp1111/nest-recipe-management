// format response for each request
export interface FormattedResponse<T = any> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T | null;
}

export function formatResponse<T>(
  statusCode: number,
  success: boolean,
  message: string,
  data?: T,
): FormattedResponse<T> {
  return {
    statusCode,
    success,
    message,
    data: data || null,
  };
}
