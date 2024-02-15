import AboutMe from './containers/about'
import Projects from './containers/projects'
import Sidebar from './containers/sidebar'
import StyleGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <StyleGlobal />
      <Container>
        <Sidebar />
        <main>
          <AboutMe />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
