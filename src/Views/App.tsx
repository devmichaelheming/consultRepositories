import React, { useState, useEffect, useRef } from 'react';

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
  AvatarGithub,
} from './styles';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'

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
  const [show, setShow] = useState(false);
  const [error, setError] = useState(0);
  const [loading, setLoading] = useState(false);

  const inputUsername = useRef(null);
  const handleClose = () => setShow(false);

  async function sendRepository() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    console.log(data.message);

    if(data.message === "Not Found") {
      setError(1);
      setLoading(false);
    } else if(data.length === 0) {
      setError(2);
      setLoading(false);
    }

    data.map(item => {
      let date = item.created_at.split("T");
      date = date[0].split("-");
      
      let day = date[2];
      let month = date[1];
      let year = date[0];

      setLoading(false);
      setShow(true);
      item.created_at = `${day}/${month}/${year}`;
    })

    setRepositories(data);
  }

  useEffect(() => {
    if(show === false) {
      inputUsername.current.value = '';
      setRepositories([]);
      setUsername('');
    }
  }, [show])
  
  return (
    <Container>
      <Form>
        {loading
        ?
          <div className="spinner">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        :
          <></>
        }

        <Titlte><IconGithub />CONSULTAR REPOSITÓRIOS</Titlte>
        <Input ref={inputUsername} onChange={e => setUsername(e.target.value)} placeholder="Insira o seu nome de usuário..."/>
        <Button onClick={sendRepository} >
          <IconSearch />
          Consultar
        </Button>
        {error !== 0
        ?
          <Alert
            className="col-lg-12 mb-0"
            style={{ padding: '0.5rem 1rem' }}
            transition={true}
            variant="danger"
            onClose={() => setError(0)}
            dismissible
          >
            { error === 1 ? 'Usuário invalido, tente novamente.' : 'Nenhum repositório encontrado, tente outro usuário.'}
          </Alert>
        :
          <></>
        }
      </Form>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <AvatarGithub src={`https://github.com/${username}.png`}/>
            {username}
            {repositories.length > 0 
            ?
              <TotalRepositories>
                {repositories.length} repositórios
              </TotalRepositories>
            :
              <></>
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: '0'  }}>
        <ListRepositories>
          <ul>
            {
              repositories.map(repo => (
                <a key={repo.id} href={repo.html_url} target="_blank">
                  {repo.description !== null
                  ?
                    <OverlayTrigger
                      trigger={['hover', 'focus']}
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
                      <li>{repo.name}</li>
                    </OverlayTrigger> 
                  :
                    <li>{repo.name}</li>
                  }
                </a>
              ))
            }
          </ul>
          </ListRepositories>
        </Modal.Body>
      </Modal>
    </Container>
  );
}