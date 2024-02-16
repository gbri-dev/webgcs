import Paragraph from '../Paragraph'
import Title from '../Title'
import { LinkButton } from './styles'
import { Card } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto exemplo</Title>
    <Paragraph tipo={'secundario'}>Descricao do projeto</Paragraph>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
