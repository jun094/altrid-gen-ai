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

const generateGPTPrompt = ({
  type,
  text,
  options,
}: generateGPTPromptType) => {
  switch (type) {
    case GPT_TEMPLATE.CHECK_MY_WRITING:
      return `
TEXT:
${text}

PROMPT INPUT:
Fundamental rules for revision:
When it comes to writing content for a specific purpose, three factors are crucial, "perplexity", "burstiness", and "clearness".
Perplexity measures the complexity of text. Separately, burstiness compares the variations of sentences. Clearness measures the level of comprehension of text.
Humans tend to write with greater burstiness, for example, with some longer or more complex sentences alongside shorter ones. AI sentences tend to be more uniform.
Therefore, when writing the following content I am going to ask you to revise the story above, I need it to have a good amount of perplexity, burstiness, and clearness.
Along with more advanced perplexity, burstiness, and clearness, I am also going to ask you to fix all grammar errors, spelling mistakes, and ambiguous delivery in the previous text and generate a newly revised article with explained writing tasks and tips, feedback, and suggestions on how to improve writing skills.

 1. Do not mention that you are an AI language model.
 2. Add a good amount of perplexity, burstiness, and clearness in the newly revised version.
 3. Fix all grammar errors, spelling mistakes, and ambiguous sentences.
 4. Explain writing tasks and tips, feedback, and suggestions on how to improve writing skills based on the previous work at the end. Those explanation should be wrapped into bracket characters.
 5. Consider writing purpose: ${options.writingPurpose}
 6. Write in this tone: ${options.writingTone}
 7. And the output should use this writing style: ${options.writingStyle}`;
    default:
      return 'Hello!';
  }
};

export default generateGPTPrompt;
