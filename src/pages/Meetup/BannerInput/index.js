import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdLocalSee } from 'react-icons/md';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput({ idBanner, urlBanner }) {
  const { defaultValue, registerField } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    if (idBanner && urlBanner) {
      setFile(idBanner);
      setPreview(urlBanner);
    }
  }, [ref.current, idBanner, urlBanner]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {!preview ? (
          <>
            <MdLocalSee size={54} color="#FFF" opacity={0.3} />
            <span>Selecionar imagem</span>
          </>
        ) : (
          <img src={preview} alt="" />
        )}

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

BannerInput.propTypes = {
  idBanner: PropTypes.shape().isRequired,
  urlBanner: PropTypes.shape().isRequired,
};
