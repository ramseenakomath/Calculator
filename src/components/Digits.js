import React from 'react'

const Digits = ({screenClear,clickHandle,equalHandle}) => {
  return (
    <div>
        <div className='digit-btns'>
					  <div class="row">										
						  <button onClick={screenClear} class="btn">AC</button>        
					  </div>

						<div class="row">
						 <button onClick={() =>clickHandle('7')} class="btn">7</button>
						 <button onClick={() =>clickHandle('8')} class="btn">8</button>
						 <button onClick={() =>clickHandle('9')} class="btn">9</button>         
						</div>

						<div class="row">
						 <button onClick={() =>clickHandle('4')} class="btn">4</button>
						 <button onClick={() =>clickHandle('5')} class="btn">5</button>
						 <button onClick={() =>clickHandle('6')} class="btn">6</button>         
						</div>

						<div class="row">
						 <button onClick={() =>clickHandle('1')} class="btn">1</button>
						 <button onClick={() =>clickHandle('2')} class="btn">2</button>
						 <button onClick={() =>clickHandle('3')} class="btn">3</button>         
						</div>  

						<div class="row">
							<button onClick={() =>clickHandle('.') }class="btn">.</button>
							<button onClick={() =>clickHandle('0')} class="btn">0</button>
							<button onClick={equalHandle} class="btn">=</button>                               
						</div>		
					</div>
    </div>
  )
}

export default Digits