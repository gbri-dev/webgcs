import project from '../../models/Project.class'
import Paragraph from '../Paragraph'
import Title from '../Title'
import { LinkButton } from './styles'
import { Card } from './styles'

type Props = project

const Project = ({ id, name, html_url, full_name }: Props) => {
  return (
    <Card key={id}>
      <Title>{name}</Title>
      <Paragraph tipo={'secundario'}>{full_name}</Paragraph>
      <LinkButton href={html_url}>Visualizar</LinkButton>
    </Card>
  )
}

export default Project
