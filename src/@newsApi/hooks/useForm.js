import {useCallback, useState} from 'react';
import _ from '@lodash';

function useForm(initialState)
{
  const [form, setForm] = useState(initialState);

  const handleChange = useCallback((event)=>{
    event.persist();
    setForm(
      form => ({
        ...form,
        [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
      })
    )
  },[]);

  return {
    form,
    handleChange,
    setForm
  }
}

export default useForm;
