import React from 'react';
import './css/inventory.css';

function Inventory () {
  let list = [{name:'eggs'}, {name:'milk'}, ]
  return (
    <div className='Inventory'>
      {list.map((item) =>
      <li></li>)}
      <span className='ingredient'>eggs</span>
      <span className='ingredient'>milk</span>
    </div>

  );
};

export default Inventory;