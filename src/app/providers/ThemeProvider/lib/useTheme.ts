import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContet'
import { useContext } from 'react'

interface UseThemeResult {
  toggleTheme: () => void
  theme?: Theme
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

    if (setTheme != null) {
      setTheme(newTheme)
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    document.body.className = newTheme
  }

  return { theme, toggleTheme }
}
