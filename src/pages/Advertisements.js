import React, { Component } from 'react'

export default class Advertisements extends Component {
  render() {
    return (
      <>

            <div className="input__groups">

                     <div className="advert__search">
                        <img className='search__icon' src='./icons/search.svg'></img>
                        <input
                            type="text"
                            placeholder='Search in page'
                            className='input__search'

                        />

                        <button className='btn'>Search</button>
                    </div>

                <input 
                    type="text"
                    className='title'
                    placeholder='ADS title'


                 />
                 <input 
                    type="text"
                    className='description'
                    placeholder='ADS description'
                    

                 />
                 <input 
                    type="text"
                    className='http'
                    placeholder='https://example.com'
                    

                 />
                 <input 
                    type="text"
                    className='upload'
                    placeholder='Upload ADS'
                    

                 />
                 <div className="date__icon">
                 <input 
                    type="number"
                    placeholder='Date'
                    className='date'

                 />
                 <img src="./icons/date2.svg" alt="" />

                 </div>
                
                 
                 <div className="upload__icon">
                 <input 
                    type="text"
                    className='ADS'
                    placeholder='Upload ADS'

                 />
                 <img src="./icons/upload2.svg" alt="" />
                 </div>

                <button className='btn'>Upload</button>



            </div>

        

      </>
    )
  }
}
