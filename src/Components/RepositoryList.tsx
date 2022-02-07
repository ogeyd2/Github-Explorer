import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

interface Respository {
  name: string;
  description: string;
  html_url: string;
}

//URL: https://api.github.com/users/ogeyd2/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Respository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/ogeyd2/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repositories.map(repository => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          )
        })}
      </ul>
    </section>
  )
}
