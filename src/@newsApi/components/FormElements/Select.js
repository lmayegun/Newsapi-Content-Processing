import React from 'react';
import {MenuItem, Select, InputLabel,FormControl} from '@material-ui/core';

const AppSelect = props => {
  const {handleChange, value, name, options, className} = props;

  return(
    <div className={className}>
      <FormControl style={{width: 100+'%',}}>
        <InputLabel>Category</InputLabel>
        <Select
          value={value}
          name={name}
          onChange={e =>{ handleChange(e) }}
        >
        {
          options.map((key, index)=>{
            return(
              <MenuItem value={Object.keys(key)[0]} key={index}>{Object.values(key)[0]}</MenuItem>
            )
          })
        }
        </Select>
      </FormControl>
    </div>
  )
}

export default React.memo(AppSelect);
