class Project {
  id: number
  name: string
  html_url: string
  full_name: string
  constructor(id: number, name: string, html_url: string, full_name: string) {
    this.id = id
    this.name = name
    this.html_url = html_url
    this.full_name = full_name
  }
}

export default Project
