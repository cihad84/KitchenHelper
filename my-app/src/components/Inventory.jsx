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
  const [inventory, setInventory] = useState([{name:'eggs', id:1}, {name:'milk', id:2} ])

  let handleSubmit = (event) => {
    setInventory([...inventory, {name:event.target[1].value}])
    event.target[1].value = "";
    event.preventDefault();
  }

  let deleteItem = (event) => {
    // inventory.splice(event.target.parentElement.parentElement.dataset.key, 1)
    setInventory(inventory.filter(item => item.name !== event.currentTarget.dataset.name))
    console.log(event.currentTarget.dataset.name)

  }
  return (
    <div className='Inventory'>{console.log('hit')}
      <form onSubmit={handleSubmit}>
        <Button variant="contained"  >Contained</Button>
        <TextField id="outlined-basic" label="Add Stock" variant="outlined" />
      </form>

      <FormGroup>
        {inventory.map((item) =>
          <div key={item.id} >
            <FormControlLabel control={<Checkbox defaultChecked />} label={item.name} />
            <Fab size='small' color="primary" aria-label="add">
              <RemoveIcon data-name={item.name} onClick={deleteItem}/>
            </Fab>

          </div>
          )}
      </FormGroup>
    </div>

  );
};

export default Inventory;