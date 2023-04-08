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
  isShowHowTo: boolean;
  setUserSubmittedText: (text: string) => void;
  setGptOutputText: (text: string) => void;
  setWritingOptions: (options: generateGPTPromptOptionsType) => void;
  setIsShowHowTo: (bool: boolean) => void;
};

const CheckMyWritingContext = createContext<CheckMyWritingContextValueType>({
  userSubmittedText: '',
  gptOutputText: '',
  writingOptions: { writingPurpose: 'General', writingStyle: 'General', writingTone: 'General' },
  isShowHowTo: false,
  setUserSubmittedText: () => {},
  setGptOutputText: () => {},
  setWritingOptions: () => {},
  setIsShowHowTo: () => {},
});

const CheckMyWritingContextProviderWrapper = ({ children }: CheckMyWritingContextProps) => {
  const [userSubmittedText, setUserSubmittedText] = useState<string>('');
  const [gptOutputText, setGptOutputText] = useState<string>('');
  const [writingOptions, setWritingOptions] = useState<generateGPTPromptOptionsType>({
    writingPurpose: 'General',
    writingStyle: 'General',
    writingTone: 'General',
  });
  const [isShowHowTo, setIsShowHowTo] = useState<boolean>(false);

  const value = useMemo<CheckMyWritingContextValueType>(
    () => ({
      userSubmittedText,
      gptOutputText,
      writingOptions,
      isShowHowTo,
      setUserSubmittedText,
      setGptOutputText,
      setWritingOptions,
      setIsShowHowTo,
    }),
    [
      userSubmittedText,
      gptOutputText,
      writingOptions,
      isShowHowTo,
      setUserSubmittedText,
      setGptOutputText,
      setWritingOptions,
      setIsShowHowTo,
    ]
  );

  return <CheckMyWritingContext.Provider value={value}>{children}</CheckMyWritingContext.Provider>;
};

export default CheckMyWritingContext;
export const CheckMyWritingContextProvider = CheckMyWritingContextProviderWrapper;
