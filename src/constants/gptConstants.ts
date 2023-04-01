export const API_SPEC = {
    TEXT_LIMIT: 2000,
}

export const API_ERROR = {
  BAD_REQUEST: {
    STATUS: 400,
    CODE: 'bad_request',
    MESSAGE: '잘못된 요청입니다.',
  },
  USAGE_LIMIT: {
    STATUS: 429,
    CODE: 'usage_limit',
    MESSAGE: '최대 이용량을 초과했습니다.',
  },
  UNKNOWN: {
    STATUS: 500,
    CODE: 'unavailable',
    MESSAGE: '일시적으로 이용할 수 없습니다.',
  },
};

export enum GPT_TEMPLATE {
  CHECK_MY_WRITING = 0,
}
