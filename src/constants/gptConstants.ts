export const API_SPEC = {
  TEXT_LIMIT: 2000,
};

export const API_ERROR = {
  BAD_REQUEST: <API_ERROR_TYPE>{
    STATUS: 400,
    CODE: 'bad_request',
    MESSAGE: '잘못된 요청입니다.',
  },
  USAGE_LIMIT: <API_ERROR_TYPE>{
    STATUS: 429,
    CODE: 'usage_limit',
    MESSAGE: '최대 이용량을 초과했습니다.',
  },
  UNKNOWN: <API_ERROR_TYPE>{
    STATUS: 500,
    CODE: 'unknown',
    MESSAGE: '알 수 없는 오류입니다.',
  },
};

export type API_ERROR_TYPE = {
  STATUS: number;
  CODE: string;
  MESSAGE: string;
};

export enum GPT_TEMPLATE {
  CHECK_MY_WRITING = 0,
}
