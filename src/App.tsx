import React, { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Container,
  Titlte,
  Form,
  Input,
  Button,
  IconSearch,
  ListRepositories,
  TotalRepositories,
  IconGithub,
} from './styles';

interface User {
  id: number;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  favorite?: boolean;
}

export default function App(){
  const [repositories, setRepositories] = useState<User[]>([]);
  const [username, setUsername] = useState('');

  async function sendRepository() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    console.log(data);

    data.map(item => {
      let date = item.created_at.split("T");
      date = date[0].split("-");
      
      let day = date[2];
      let month = date[1];
      let year = date[0];

      item.created_at = `${day}/${month}/${year}`;
    })

    setRepositories(data);
  }
  
  return (
    <Container>
      <Titlte><IconGithub /> CONSULTA DE REPOSITÓRIOS</Titlte>
      <Form>
        <Input onChange={e => setUsername(e.target.value)} placeholder="Insira o seu nome de usuário..."/>
        <Button onClick={sendRepository} >
          <IconSearch />
          Consultar
        </Button>
        {repositories.length > 0 
        ?
          <TotalRepositories>
            {repositories.length} repositórios
          </TotalRepositories>
        :
          <></>
        }
      </Form>
      <ListRepositories>
        <ul>
          {
            repositories.map(repo => (
              <a href={repo.html_url} target="_blank">
                {repo.description !== null
                ?
                  <OverlayTrigger
                    trigger="hover"
                    placement="right"
                    overlay={
                      <Popover id="popover-basic">
                        <Popover.Header as="h3">Criado em: {repo.created_at}</Popover.Header>
                        <Popover.Body>
                        {repo.description}
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <li key={repo.id}>{repo.name}</li>
                  </OverlayTrigger> 
                :
                  <li key={repo.id}>{repo.name}</li>
                }
              </a>
            ))
          }
        </ul>
      </ListRepositories>
    </Container>
  );
}