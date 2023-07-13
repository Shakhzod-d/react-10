import React, { Component } from 'react'

export default class Messages extends Component {
  render() {
    return (
      <>

        <div className="mess__menu">
                  <div className="mess__search">
                        <img className='search__icon' src='./icons/search.svg'></img>
                        <input
                            type="text"
                            placeholder='Search in page'
                            className='input__search'

                        />

                        <button className='btn'>Search</button>
                    </div>

                      <div className="mess__cards">
                        <div className="card1">
                          <input className='checkbox' type="checkbox" aria-label="Checkbox for following text input"></input>
                          <img src="./icons/grill.svg" alt="" />

                          <div className="user__info">
                              <p className='name'>Username</p>
                              <p className='info'>Lorem ipsum dolor sit amet consectetur. Sed curabitur sollicitudin arcu.</p>
                          </div>

                          <p className='hour'>19:30</p>



                        </div>

                        <hr />

                        <div className="card2">
                        <input className='checkbox' type="checkbox" aria-label="Checkbox for following text input"></input>
                          <img src="./icons/grill.svg" alt="" />

                          <div className="user__info">
                              <p className='name'>Username</p>
                              <p className='info'>Lorem ipsum dolor sit amet consectetur. Sed curabitur sollicitudin arcu.</p>
                          </div>

                          <p className='hour'>19:30</p>

                        </div>

                        <hr />

                        <div className="card3">
                        <input className='checkbox' type="checkbox" aria-label="Checkbox for following text input"></input>
                          <img src="./icons/grill.svg" alt="" />

                          <div className="user__info">
                              <p className='name'>Username</p>
                              <p className='info'>Lorem ipsum dolor sit amet consectetur. Sed curabitur sollicitudin arcu.</p>
                          </div>

                          <p className='hour'>19:30</p>

                        </div>

                        <hr />
                      </div>
                      
                </div>

      </>
    )
  }
}

