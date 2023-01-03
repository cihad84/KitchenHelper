import React, {useState}from 'react';
import './css/inventory.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import Fab from '@mui/material/Fab';

function Inventory () {
  const [inventory, setInventory] = useState([{name:'eggs'}, {name:'milk'} ])

  let handleSubmit = (event) => {
    setInventory([...inventory, {name:event.target[1].value}])
    event.preventDefault();
  }
  return (
    <div className='Inventory'>
      <form onSubmit={handleSubmit}>
        <Button variant="contained" >Contained</Button>
        <TextField id="outlined-basic" label="Add Stock" variant="outlined" />
      </form>

      <FormGroup>
        {inventory.map((item, index) =>
          <div>
            <FormControlLabel key={index} control={<Checkbox defaultChecked />} label={item.name} />
            <Fab size='small' color="primary" aria-label="add">
              <RemoveIcon />
            </Fab>

          </div>
          )}
      </FormGroup>
    </div>

  );
};

export default Inventory;