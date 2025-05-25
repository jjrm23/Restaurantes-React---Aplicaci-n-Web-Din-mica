import { createContext } from 'react'

const ThemeContext = createContext({
  theme: 'light',
  ToggleTheme: () => {}
});

export default ThemeContext
