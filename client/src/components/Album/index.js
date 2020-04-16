import React from 'react';
import { Image, Heading } from 'react-bulma-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Content } from './styles';

export default function Album({ albumId, title, artistName, cover }) {
  return (
    <Link to={`/album/${albumId}`}>
      <Image src={cover} />
      <Content>
        <Heading size={6} className="has-text-white">
          {title}
        </Heading>
        <Heading size={6} className="has-text-white" subtitle>
          {artistName}
        </Heading>
      </Content>
    </Link>
  );
}

Album.propTypes = {
  title: PropTypes.string,
  artistName: PropTypes.string,
  cover: PropTypes.string,
  albumId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Album.defaultProps = {
  title: '',
  artistName: '',
  cover: '',
  albumId: '',
};
