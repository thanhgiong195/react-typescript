import { useState, useCallback, createContext } from 'react';

export const SampleContext = createContext({
  sample: '',
  updateData: (text: string) => {},
});

export function useUpdateContext() {
  const checkLogin = localStorage.getItem('keyAuth');
  const [sample, setSample] = useState(checkLogin || '');

  const updateData = useCallback((text: string): void => {
    setSample(text);
  }, []);

  return {
    sample,
    updateData,
  };
}
