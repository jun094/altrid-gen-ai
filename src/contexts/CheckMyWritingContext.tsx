/* eslint-disable @typescript-eslint/no-empty-function */
import { generateGPTPromptOptionsType } from 'modules/gptTemplate';
import React, { ReactNode, createContext, useMemo, useState } from 'react';

type CheckMyWritingContextProps = {
  children: ReactNode;
};

type CheckMyWritingContextValueType = {
  userSubmittedText: string;
  gptOutputText: string;
  writingOptions: generateGPTPromptOptionsType;
  setUserSubmittedText: (text: string) => void;
  setGptOutputText: (text: string) => void;
  setWritingOptions: (options: generateGPTPromptOptionsType) => void;
};

const CheckMyWritingContext = createContext<CheckMyWritingContextValueType>({
  userSubmittedText: '',
  gptOutputText: '',
  writingOptions: { writingPurpose: 'General', writingStyle: 'General', writingTone: 'General' },
  setUserSubmittedText: () => {},
  setGptOutputText: () => {},
  setWritingOptions: () => {},
});

const CheckMyWritingContextProviderWrapper = ({ children }: CheckMyWritingContextProps) => {
  const [userSubmittedText, setUserSubmittedText] = useState<string>('');
  const [gptOutputText, setGptOutputText] = useState<string>('');
  const [writingOptions, setWritingOptions] = useState<generateGPTPromptOptionsType>({
    writingPurpose: 'General',
    writingStyle: 'General',
    writingTone: 'General',
  });

  const value = useMemo<CheckMyWritingContextValueType>(
    () => ({
      userSubmittedText,
      gptOutputText,
      writingOptions,
      setUserSubmittedText,
      setGptOutputText,
      setWritingOptions,
    }),
    [userSubmittedText, gptOutputText, writingOptions, setUserSubmittedText, setGptOutputText, setWritingOptions]
  );

  return <CheckMyWritingContext.Provider value={value}>{children}</CheckMyWritingContext.Provider>;
};

export default CheckMyWritingContext;
export const CheckMyWritingContextProvider = CheckMyWritingContextProviderWrapper;
