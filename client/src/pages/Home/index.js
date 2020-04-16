import React, { Fragment } from 'react';
import { Columns } from 'react-bulma-components';

import { Link } from 'react-router-dom';

import { List, Heading, Button } from './styles';

export default function Home() {
  return (
    <Fragment>
      <Columns>
        <Columns.Column>
          <Heading
            className="has-text-weight-light has-text-centered has-text-white"
            size={1}
          >
            SEU APP DE <br />
            <span className="has-text-success">MÚSICA</span>
          </Heading>
        </Columns.Column>
      </Columns>
      <Columns className="is-centered is-mobile">
        <Columns.Column
          mobile={{ size: 8, offset: 1 }}
          desktop={{ size: 4, offset: 2 }}
        >
          <List className="has-text-white">
            <li>
              Suas músicas <b>Favoritas</b>
            </li>
            <li>
              Seus <b>Podcasts</b>
            </li>
            <li>
              Os <b>Lançamentos</b>
            </li>
            <li>
              As novas <b>descobertas</b>
            </li>
          </List>
        </Columns.Column>
      </Columns>
      <Columns className="has-text-centered">
        <Columns.Column>
          <Link to="/">
            <Button className="is-success is-outlined is-large has-text-white">
              CADASTRAR AGORA
            </Button>
          </Link>
        </Columns.Column>
      </Columns>
    </Fragment>
  );
}
