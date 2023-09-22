import { ReactNode, createContext, useState } from 'react'

interface ThemeState {
  mode: string
  setMode: (value: string) => void
}
interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeState>({
  mode: 'light',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setMode: (_value: string) => void {},
})

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState('light')

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
