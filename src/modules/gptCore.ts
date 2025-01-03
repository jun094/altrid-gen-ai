import { API_ERROR, API_SPEC, GPT_TEMPLATE } from 'constants/gptConstants';
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai';
import { CustomError } from './CustomError';
import generateGPTPrompt, { generateGPTPromptOptionsType } from './gptTemplate';

console.log(process.env)
const openAIConfig = new Configuration({
  apiKey: process.env.REACT_APP_OPEN_AI_KEY,
});

const openai = new OpenAIApi(openAIConfig);

type openAIMessage = {
  messageStream: Array<ChatCompletionRequestMessage>;
};

export type checkMyWritingType = {
  text?: string;
  previousStream?: openAIMessage['messageStream'];
  options?: generateGPTPromptOptionsType;
};

const coreModule = async ({ messageStream }: openAIMessage) =>
  openai.createChatCompletion({
    model: 'gpt-4o-mini',
    temperature: 1,
    n: 1,
    // top_p: 0.2,
    // frequency_penalty: 0.3,
    // presence_penalty: 0,
    messages: messageStream,
  });

const checkMyWriting = async ({
  text = '',
  previousStream = [],
  options = { writingPurpose: 'Academic', writingStyle: 'General', writingTone: 'General' },
}: checkMyWritingType) => {
  if (!text.trim() || text.trim().length > API_SPEC.TEXT_LIMIT) {
    throw new CustomError({
      message: API_ERROR.BAD_REQUEST.MESSAGE,
      errorCode: API_ERROR.BAD_REQUEST.CODE,
      statusCode: API_ERROR.BAD_REQUEST.STATUS,
    });
  }

  const { writingPurpose, writingStyle, writingTone } = options;
  const gptPrompt = generateGPTPrompt({
    type: GPT_TEMPLATE.CHECK_MY_WRITING,
    text,
    options: { writingPurpose, writingStyle, writingTone },
  });

  const messageStream: openAIMessage['messageStream'] = [...previousStream, { role: 'user', content: gptPrompt }];

  try {
    const { data: completion } = await coreModule({ messageStream });
    const rawAnswer = completion?.choices[0]?.message;
    return rawAnswer;
  } catch (e: any) {
    if (e.response.status === API_ERROR.BAD_REQUEST) {
      throw new CustomError({
        message: API_ERROR.BAD_REQUEST.MESSAGE,
        errorCode: API_ERROR.BAD_REQUEST.CODE,
        statusCode: API_ERROR.BAD_REQUEST.STATUS,
      });
    } else if (e.response.status === API_ERROR.USAGE_LIMIT) {
      throw new CustomError({
        message: API_ERROR.USAGE_LIMIT.MESSAGE,
        errorCode: API_ERROR.USAGE_LIMIT.CODE,
        statusCode: API_ERROR.USAGE_LIMIT.STATUS,
      });
    } else {
      throw new CustomError({
        message: API_ERROR.UNKNOWN.MESSAGE,
        errorCode: API_ERROR.UNKNOWN.CODE,
        statusCode: API_ERROR.UNKNOWN.STATUS,
      });
    }
  }
};

export { checkMyWriting };
