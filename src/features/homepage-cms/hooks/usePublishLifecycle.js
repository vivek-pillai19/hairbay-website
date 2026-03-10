import { useState, useCallback } from 'react';

const usePublishLifecycle = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const execute = useCallback(async (action, { 
    successDuration = 2000, 
    onReset = () => {},
    initialDelay = 0 
  } = {}) => {
    setIsProcessing(true);
    
    try {
      if (initialDelay > 0) {
        await new Promise(resolve => setTimeout(resolve, initialDelay));
      }

      if (action) {
        await action();
      }
      
      setIsProcessing(false);
      setIsSuccess(true);

      if (successDuration > 0) {
        setTimeout(() => {
          setIsSuccess(false);
          onReset();
        }, successDuration);
      } else {
        setIsSuccess(false);
        onReset();
      }
    } catch (error) {
      console.error("Publish execution failed:", error);
      setIsProcessing(false);
      setIsSuccess(false);
    }
  }, []);

  return {
    isProcessing,
    isSuccess,
    execute
  };
};

export default usePublishLifecycle;
