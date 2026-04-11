import { useCallback, useState } from 'react';

export const useToast = (initialType = 'info') => {
  const [toast, setToast] = useState({
    visible: false,
    text: '',
    type: initialType,
  });

  const showToast = useCallback((text, type = initialType) => {
    setToast({ visible: true, text, type });
  }, [initialType]);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  return {
    toast,
    showToast,
    hideToast,
  };
};

export default useToast;
