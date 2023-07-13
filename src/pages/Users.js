import React, { Component } from 'react'

export default class Users extends Component {
  render() {
    return (
      <>

                <div className="main__users">
                    <div className="users__search">
                        <img className='search__icon' src='./icons/search.svg'></img>
                        <input
                            type="text"
                            placeholder='Search in page'
                            className='input__search'

                        />

                        <button className='btn'>Search</button>
                    </div>


                    <table>
              <thead>
                <input className='checkbox' type="checkbox" aria-label="Checkbox for following text input"></input>
                  <p className='img'>Image</p>
                  <p className='name'>Name</p>
                  <p className='date'>Date</p>
                  <p className='type'>Type</p>
                  <p className='number'>Number</p>
                  <p className='email'>Email</p>
                  <p className='block'>Block</p>
                  <p className='chat'>Chat</p>

              </thead>

              <tbody>
                  <input className='checkbox' type="checkbox" aria-label="Checkbox for following text input"></input>
                  <img src="./icons/grill.svg" alt="" />
                  <p className='user'>User name</p>
                  <p className='date'>05.25.2023</p>
                  <p className='study'>Teacher</p>
                  <p className='number'>+998901234567</p>
                  <p className='mail'>user@gmail.com</p>
                  <button className='btn'>Block</button>
                  <img className='mess' src="./icons/message.svg" alt="" />
                  <img className='amal' src="./icons/share3.svg" alt="" />
              </tbody>
              
                
                  
            </table>

                </div>

            

      </>
    )
  }
}
