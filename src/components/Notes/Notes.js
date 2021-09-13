import React from 'react';
import { Link } from "@reach/router";


const Notes = () => {
  return (
    <div>
      <div style={{textAlign: 'right',padding: '5px 30px'}}>
        <Link to="/todos">Go to Todos</Link>
      </div>
      <h3>Coming Soon...</h3>

    </div>
  )
}

export default Notes;