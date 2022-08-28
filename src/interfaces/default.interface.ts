export interface ActionType {
  type: string;
  payload: any;
}

export interface RequestError {
  data: {
    error: any;
    message: string;
    statusCode: number;
  };
  status: number;
}
