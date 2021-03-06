import { useState } from 'react';

interface IPreference {
    query: string;
    rating: number|null;
    currentMovie: number|null;
}

export const usePreferences = (): [IPreference, CallableFunction] => {
  const cacheKey = 'userPreferences';

  let userPref: IPreference = {
    query: '',
    rating: 4,
    currentMovie: null
  };
  let storedPref: string|null = localStorage.getItem(cacheKey);
  if(storedPref !== null) {
    userPref = JSON.parse(storedPref);
  }
  
  const [preferences, setPreferences] = useState(userPref);

  const changePreferences = (preferences: IPreference) => {
    setPreferences(preferences);
    localStorage.setItem(cacheKey, JSON.stringify(preferences));
  }

  return [preferences, changePreferences];
}
