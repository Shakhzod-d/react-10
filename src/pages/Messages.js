import React, {useState} from 'react'

export default function Messages() {

    const [show,setShow]=useState(false), [change,setChange]=useState(true)

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

                    {
                      change?<div className="mess__cards">
                        <div className="card1">
                          <div onClick={() =>setChange(false)} className="to_message">
                            <input className='checkbox' onClick={() =>setShow(true)} type="checkbox" aria-label="Checkbox for following text input"></input>
                          </div>
                          <img src="./icons/grill.svg" alt="" />

                          <div className="user__info">
                              <p className='name'>Username</p>
                              <p className='info' >Lorem ipsum dolor sit amet consectetur. Sed curabitur sollicitudin arcu.</p>
                          </div>

                          <p className='hour'>19:30</p>

                        </div>

                        <hr />

                        <div className="card2">
                          <div onClick={() =>setChange(false)} className="to_message">
                            <input className='checkbox' onClick={() =>setShow(true)} type="checkbox" aria-label="Checkbox for following text input"></input>

                          </div>
                          <img src="./icons/grill.svg" alt="" />

                          <div className="user__info">
                              <p className='name'>Username</p>
                              <p className='info'>Lorem ipsum dolor sit amet consectetur. Sed curabitur sollicitudin arcu.</p>
                          </div>

                          <p className='hour'>19:30</p>

                        </div>

                        <hr />

                        <div className="card3">
                          <div onClick={() =>setChange(false)} className="to_message">
                            <input className='checkbox' onClick={() =>setShow(true)} type="checkbox" aria-label="Checkbox for following text input"></input>

                          </div>


                          <img src="./icons/grill.svg" alt="" />

                          <div className="user__info">
                              <p className='name'>Username</p>
                              <p className='info'>Lorem ipsum dolor sit amet consectetur. Sed curabitur sollicitudin arcu.</p>
                          </div>

                          <p className='hour'>19:30</p>

                        </div>

                        <hr />
                      </div>:null
                    }



                      
                </div>

                {
                  show?<div className="message__user">
                  <div className="container">
                     <div className="row">
                      <div className="col-10">
                       <div className="card">
                          <div className="card-header">
                            <div className="arrow__vector" onClick={() =>setShow(false)} >
                              <a onClick={() =>setChange(true)} className='arrow__icon' href="#"><img src="./icons/arrow__left.svg" alt="" /></a>
                            </div>
                              
                              <div className="user__class">
                                <img src="./icons/grill.svg" alt="" />
                                <p>User name</p>

                              </div>
                            
                          </div>

                          <div className="card-body">
                              <div className="message__card">
                                    <img className='movie' src="./icons/movie.png" alt="" />
                                      <p className='movie__title'>My name is Catherine. I like dancing in <br /> the rain and travelling </p>
                                      <p className='movie__info'>My name is Catherine. I like dancing in the <br /> rain and travelling all around the world. <br /> My name is Catherine. I like dancing in the <br /> rain and travelling all around the <br /> world.My name is Catherine. I like dancing <br /> in the rain and travelling all around the <br /> world.</p>

                                      <div className="select__icons">
                                          <p>19:00</p>
                                          <img src="./icons/excellent.svg" alt="" />
                                      </div>
                              </div>


                              <div className="mini__card">
                                  <p>Hello what’s up student</p>
                              </div>

                              <div className="mini__card2">
                                <p>Have you already seen this video?</p>

                              </div>

                              <div className="mini__card4">
                                <p>did you do your english homework?</p>
                                <img src="./icons/theand.svg" alt="" />

                              </div>


                              
                            </div>

                            <div className="card-footer">
                              <div className="type__group">
                                    <input 
                                      type="text"
                                      placeholder='Type your message... '
                                    />
                                   <img className='add' src="./icons/add.svg" alt="" />
                                   <img className='camera' src="./icons/Camera.svg" alt="" />
                              </div>

                            <div className="item"></div>
                            

                            </div>
                        </div>
                        
                      </div>
                     </div>
                  </div>

                  <div className="user__actives">
                        <div className="first__user">
                            <img src="./icons/grill.svg" alt="" />
                            <div className="user__info">
                              <p className='user__name'>User name</p>
                              <p className='user__answer'>hello</p>
                            </div>
 
                            <img className='active__icon' src="./icons/excellent.svg" alt="" />
                        </div>
                        <div className="second__user">
                            <img src="./icons/grill.svg" alt="" />
                            <div className="user__info">
                              <p className='user__name'>User name</p>
                              <p className='user__answer'>hello</p>
                            </div>
 
                            <img className='active__icon' src="./icons/excellent.svg" alt="" />
                        </div>
                        <div className="third__user">
                            <img src="./icons/grill.svg" alt="" />
                            <div className="user__info">
                              <p className='user__name'>User name</p>
                              <p className='user__answer'>hello</p>
                            </div>
 
                            <img className='active__icon' src="./icons/excellent.svg" alt="" />
                        </div>
                        <div className="fourth__user">
                            <img src="./icons/grill.svg" alt="" />
                            <div className="user__info">
                              <p className='user__name'>User name</p>
                              <p className='user__answer'>hello</p>
                            </div>
 
                            <img className='active__icon' src="./icons/excellent.svg" alt="" />
                        </div>  

                        <div className="fives__user">
                            <img src="./icons/grill.svg" alt="" />
                            <div className="user__info">
                              <p className='user__name'>User name</p>
                              <p className='user__answer'>hello</p>
                            </div>
 
                            <img className='active__icon' src="./icons/excellent.svg" alt="" />
                        </div>
                        <div className="fives__user">
                            <img src="./icons/grill.svg" alt="" />
                            <div className="user__info">
                              <p className='user__name'>User name</p>
                              <p className='user__answer'>hello</p>
                            </div>
 
                            <img className='active__icon' src="./icons/excellent.svg" alt="" />
                        </div>
                        <div className="fives__user">
                            <img src="./icons/grill.svg" alt="" />
                            <div className="user__info">
                              <p className='user__name'>User name</p>
                              <p className='user__answer'>hello</p>
                            </div>
 
                            <img className='active__icon' src="./icons/excellent.svg" alt="" />
                        </div>
                        <div className="fives__user">
                            <img src="./icons/grill.svg" alt="" />
                            <div className="user__info">
                              <p className='user__name'>User name</p>
                              <p className='user__answer'>hello</p>
                            </div>
 
                            <img className='active__icon' src="./icons/excellent.svg" alt="" />
                        </div>
                        <div className="fives__user">
                            <img src="./icons/grill.svg" alt="" />
                            <div className="user__info">
                              <p className='user__name'>User name</p>
                              <p className='user__answer'>hello</p>
                            </div>
 
                            <img className='active__icon' src="./icons/excellent.svg" alt="" />
                        </div>
                        <div className="fives__user">
                            <img src="./icons/grill.svg" alt="" />
                            <div className="user__info">
                              <p className='user__name'>User name</p>
                              <p className='user__answer'>hello</p>
                            </div>
 
                            <img className='active__icon' src="./icons/excellent.svg" alt="" />
                        </div>
                        <div className="fives__user">
                            <img src="./icons/grill.svg" alt="" />
                            <div className="user__info">
                              <p className='user__name'>User name</p>
                              <p className='user__answer'>hello</p>
                            </div>
 
                            <img className='active__icon' src="./icons/excellent.svg" alt="" />
                        </div>
                        <div className="fives__user">
                            <img src="./icons/grill.svg" alt="" />
                            <div className="user__info">
                              <p className='user__name'>User name</p>
                              <p className='user__answer'>hello</p>
                            </div>
 
                            <img className='active__icon' src="./icons/excellent.svg" alt="" />
                        </div>
                        <div className="fives__user">
                            <img src="./icons/grill.svg" alt="" />
                            <div className="user__info">
                              <p className='user__name'>User name</p>
                              <p className='user__answer'>hello</p>
                            </div>
 
                            <img className='active__icon' src="./icons/excellent.svg" alt="" />
                        </div>

                  </div>

              </div>:null

              }
                



             

    </>
  )
}





