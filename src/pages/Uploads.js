import React, { Component } from 'react'

export default class Uploads extends Component {
  render() {
    return (
      <>
                  <div className="uploads">
                      <div className="uploads_search">
                        <img className='search__icon' src='./icons/search.svg'></img>
                        <input
                            type="text"
                            placeholder='Search in page'
                            className='input__search'

                        />

                        <button className='btn'>Search</button>
                    </div>

            <a href="#"><img className='filter__icon' src="./icons/filter2.svg" alt="" /></a>

            <div className="student__card">
              <div className="user__name">
                <img src="./icons/grill.svg" alt="" />
                <p className='name'>Username</p>
                <p className='days'>3 days ago</p>
              </div>

              <img className='shedevr' src="./icons/shedevr.png" alt="" />

              <p className='math'>Matematika <br /> Shu fanga oid qisqa malumot</p>

              <button className='btn'>Delete</button>
              
            </div>


        </div>

      </>
    )
  }
}
