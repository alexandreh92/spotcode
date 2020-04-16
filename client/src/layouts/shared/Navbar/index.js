import React from 'react';
import {
  Navbar as BulmaNavbar,
  Container as BulmaContainer,
  Columns,
  Button,
  Dropdown,
} from 'react-bulma-components';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

import { FullWidthColumn, Logo } from './styles';

import LogoImg from '~/assets/images/logo.png';

export default function Navbar() {
  const signedIn = true;

  return (
    <BulmaNavbar color="dark">
      <BulmaContainer>
        <FullWidthColumn className="is-mobile">
          <Columns.Column desktop={{ size: 2 }} mobile={{ size: 5 }}>
            <Logo src={LogoImg} className="image" />
          </Columns.Column>
          <Columns.Column>
            {signedIn ? (
              <Dropdown
                className="is-pulled-right is-right"
                color="dark"
                label={<FaUserCircle size="2em" />}
              >
                <Dropdown.Item value="other">
                  <Link to="/">Edit User</Link>
                </Dropdown.Item>
                <Dropdown.Item value="other">
                  <Link to="/">Logout</Link>
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <Link to="/sign_in" className="is-pulled-right is-right">
                <Button outlined color="white">
                  ENTRAR
                </Button>
              </Link>
            )}
          </Columns.Column>
        </FullWidthColumn>
      </BulmaContainer>
    </BulmaNavbar>
  );
}
