import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import { Description, ChangeTheme, SidebarContainer } from './styles'
const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Gabriel C Silva</Title>
      <Paragraph tipo="secundario" fontSize={16}>
        gbri-dev
      </Paragraph>
      <Description tipo="principal" fontSize={12}>
        Programador FullStack C#
      </Description>
      <ChangeTheme>Trocar tema</ChangeTheme>
    </SidebarContainer>
  </aside>
)
export default Sidebar
