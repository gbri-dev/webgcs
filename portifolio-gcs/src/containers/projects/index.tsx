import { useEffect, useState } from 'react'
import axios from 'axios'
import Project from '../../components/Project'
import Title from '../../components/Title'
import { List } from './styles'

interface Repository {
  id: number
  name: string
  url: string
  full_name: string
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([])

  useEffect(() => {
    // Fazendo a requisição para a API do GitHub
    axios
      .get('https://api.github.com/users/gbri-dev/repos')
      .then((response) => {
        const repositories: Repository[] = response.data.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          full_name: repo.full_name
        }))
        setRepos(repositories)
      })
      .catch((error) => {
        console.error('Erro ao buscar repositórios:', error)
      })
  }, [])

  return (
    <section>
      <Title fontSize={16}>Projetos</Title>
      <List>
        {repos.map((repo) => (
          <li key={repo.id}>
            <Project
              id={repo.id}
              name={repo.name}
              html_url={repo.url}
              full_name={repo.full_name}
            />
          </li>
        ))}
      </List>
    </section>
  )
}

export default Projects
