import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import data from './CheckBox.json';

export default function CheckboxList() {
  const [checked, setChecked] = React.useState({});
  const [parentList, setParentChecked] = React.useState({});
console.log(parentList);

  const handleChange1 = (event,name) => {
    setParentChecked({...parentList,[name]: event.target.checked});
  };

  const handleChange2 = (event,name) => {
    setChecked({...checked,[name]: event.target.checked});
  };

  const children =(elementChild,isChecked)=>(
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel key={elementChild.city.name}
        label={elementChild.city.name}
        control={<Checkbox checked={Boolean(isChecked || checked[elementChild.city.name])} onChange={event=>handleChange2(event,elementChild.city.name)} />}
      />
     {elementChild.area.map(elementChild2 =>(
          <Box key={elementChild2.area} sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
        label={elementChild2.area}
        control={<Checkbox checked={elementChild2.area} checked={Boolean(isChecked || checked[elementChild.city.name])}  />}
      /></Box>    ))}
    </Box>
  );

  return (
    <>
      { data.result.map((element,index) => (
     <><FormControlLabel
        label={element.name}
        control={
          <Checkbox
            checked={Boolean(parentList[element.name])}
            value={element.id}
            indeterminate={checked[0] !== checked[1]}
            onChange={event=>handleChange1(event,element.name)}
          />
        }
      />
      {
      element.advertisers.map(elementChild =>(
        children(elementChild, Boolean(parentList[element.name]))
    ))}</> 
))}
    </>
  );
}