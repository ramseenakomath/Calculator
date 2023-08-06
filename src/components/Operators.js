import React from 'react'

const Operators = ({clickHandle}) => {
  return (
<div className='operator-btns'>
						<div class="row">
						 <button onClick={() =>clickHandle('/')} class="btn">/</button>
						</div>

						<div class="row">
						  <button onClick={() =>clickHandle('*')} class="btn">*</button>       
						</div>
						
						<div class="row">
						  <button onClick={() =>clickHandle('-')} class="btn">-</button>       
						</div>
						
						<div class="row">
						  <button onClick={() =>clickHandle('+')} class="btn">+</button>       
						</div>										
					</div>		
  )
}

export default Operators