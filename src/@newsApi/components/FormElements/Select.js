import React from 'react';
import {MenuItem, Select, InputLabel,FormControl} from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';

const AppSelect = props => {
  const {handleChange, value, name, options, className, label} = props;

  return(
    <div className={className}>
      <FormControl style={{width: 100+'%',}}>
        <InputLabel>{label}</InputLabel>
        {/*<Select
           native
           value={value}
           name={name}
           onChange={e =>{ handleChange(e) }}
           inputProps={{
             name: 'age',
             id: 'age-native-simple',
           }}
         >
           {
             options.map((key, index)=>{
               return(
                 <option value={Object.keys(key)[0]} key={index}>{Object.values(key)[0]}</option>
               )
             })
           }
         </Select>*/}
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
