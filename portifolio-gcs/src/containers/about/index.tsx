import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { GitHubSection } from './styles'

const AboutMe = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph tipo="principal">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint repudiandae
      voluptates quos nisi reiciendis aperiam culpa quam harum quod ut!
    </Paragraph>
    <GitHubSection>
      <img
        alt="github stats"
        src="https://github-readme-stats.vercel.app/api?username=gbri-dev&show_icons=true&theme=github_dark&include_all_commits=true&count_private=true"
      />
      <img
        alt="linguagens mais usadas"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=gbri-dev&layout=compact&langs_count=7&theme=github_dark"
      />
    </GitHubSection>
  </section>
)

export default AboutMe
