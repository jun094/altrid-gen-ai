import { GPT_TEMPLATE } from 'constants/gptConstants';

export type generateGPTPromptOptionsType = {
  writingPurpose: string;
  writingTone: string;
  writingStyle: string;
};

type generateGPTPromptType = {
  type: GPT_TEMPLATE;
  text: string;
  options: generateGPTPromptOptionsType;
};

const generateGPTPrompt = ({ type, text, options }: generateGPTPromptType) => {
  switch (type) {
    case GPT_TEMPLATE.CHECK_MY_WRITING:
      return `
                TEXT:
                 ${text}

                Please check grammar and revise the story for above TEXT.

                Rules:
                 1. Do not mention that you are an AI language model.
                 2. Write in this tone: ${options.writingTone}.
                 3. And the output should use this writing style: ${options.writingStyle}.
            `;
    default:
      return 'Hello!';
  }
};

export default generateGPTPrompt;
