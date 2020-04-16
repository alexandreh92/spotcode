import React, { Fragment, useState, useEffect } from 'react';
import { Columns, Heading } from 'react-bulma-components';

import Album from '~/components/Album';

import { RecentlyPlayed, Recommendeds } from './styles';

import api from '~/services/api';

export default function Discovery() {
  const [recentAlbums, setRecentAlbums] = useState([]);
  const [recommendedAlbums, setRecomendedAlbums] = useState([]);

  useEffect(() => {
    async function getAlbums() {
      const res = await api.get('/discover');
      setRecentAlbums(res.data.recent_albums);
      setRecomendedAlbums(res.data.recommend_albums);
    }
    getAlbums();
  }, []);

  return (
    <Fragment>
      <RecentlyPlayed>
        <Heading className="has-text-white" size={4}>
          Tocadas recentemente
        </Heading>
        <Columns className="is-mobile">
          {recentAlbums.map(recentAlbum => (
            <Columns.Column
              desktop={{ size: 3 }}
              mobile={{ size: 6 }}
              key={`recent_${recentAlbum.id}`}
            >
              <Album
                artistName={recentAlbum.artist?.name}
                title={recentAlbum.title}
                cover={recentAlbum.cover?.url}
                albumId={recentAlbum.id}
              />
            </Columns.Column>
          ))}
        </Columns>
      </RecentlyPlayed>
      <Recommendeds>
        <Heading className="has-text-white" size={4}>
          Recomendadas
        </Heading>
        <Columns className="is-mobile">
          {recommendedAlbums.map(recommendedAlbum => (
            <Columns.Column
              desktop={{ size: 3 }}
              mobile={{ size: 6 }}
              key={`recommend_${recommendedAlbum.id}`}
            >
              <Album
                artistName={recommendedAlbum.artist?.name}
                title={recommendedAlbum.title}
                cover={recommendedAlbum.cover?.url}
                albumId={recommendedAlbum.id}
              />
            </Columns.Column>
          ))}
        </Columns>
      </Recommendeds>
    </Fragment>
  );
}
