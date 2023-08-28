import { CookieValueTypes, getCookie } from 'cookies-next';
import { useState, useEffect, SetStateAction, Dispatch } from 'react';

export const useSetSelectedEntity = (
  entityValue: string,
  cookieName: string,
): { selectedEntity: string; setSelectedEntity: Dispatch<SetStateAction<string>> } => {
  const [selectedEntity, setSelectedEntity] = useState('');

  useEffect(() => {
    const cookieValue = getCookie(cookieName) as CookieValueTypes;
    if (typeof cookieValue === 'string') {
      setSelectedEntity(cookieValue);
    } else {
      setSelectedEntity(entityValue);
    }
  }, [cookieName]);

  return { selectedEntity, setSelectedEntity };
};
