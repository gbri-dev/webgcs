import { ThemeProvider } from 'styled-components'
import AboutMe from './containers/about'
import Projects from './containers/projects'
import Sidebar from './containers/sidebar'
import StyleGlobal, { Container } from './styles'
import themeLight from './themes/light'
import themeDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [changeTheme, setChangeTheme] = useState(false)

  const changeThemeOn = () => {
    setChangeTheme(!changeTheme)
  }

  return (
    <ThemeProvider theme={changeTheme ? themeDark : themeLight}>
      <StyleGlobal />
      <Container>
        <Sidebar changeThemeOn={changeThemeOn} />
        <main>
          <AboutMe />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
