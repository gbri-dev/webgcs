import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragraph = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P tipo={tipo} fontSize={fontSize}>
    {children}
  </P>
)

export default Paragraph
