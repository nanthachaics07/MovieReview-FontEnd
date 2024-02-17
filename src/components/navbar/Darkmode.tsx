import { useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import createPersistedState from "use-persisted-state";
const useColorSchemeState = createPersistedState("colorScheme");

export function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  const [isDark, setIsDark] = useColorSchemeState();
  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  );

  useEffect(() => {
    if (value) {
      document.body.classList.add("dark");
      document.getElementById("root")?.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.getElementById("root")?.classList.remove("dark"); 
    }
    // if (value) {
    //   document.body.classList.remove("dark");
    //   document.getElementById("root")?.classList.remove("dark"); 
    // } else {
    //   document.body.classList.add("dark");
    //   document.getElementById("root")?.classList.add("dark");
    // }
  }, [value]);
  

  // return {
  //   isDark: value,
  //   setIsDark,
  // };

  return {
    isChecked: value,
    setIsChecked: setIsDark,
  }
}