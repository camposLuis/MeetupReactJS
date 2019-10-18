import React, { useState, useEffect, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import pt from 'date-fns/locale/pt';
import { Container } from './styles';

export default function DatePickerInput({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <Container>
      <ReactDatePicker
        name={fieldName}
        placeholderText="Data do meetup"
        selected={selected}
        onChange={date => setSelected(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        locale={pt}
        timeCaption="time"
        dateFormat="dd 'de' MMMM 'de' yyyy 'às' H'h'"
        ref={ref}
      />
      {error && <span>{error}</span>}
    </Container>
  );
}

DatePickerInput.propTypes = {
  name: PropTypes.string.isRequired,
};
