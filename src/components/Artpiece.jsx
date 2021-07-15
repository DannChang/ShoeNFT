import React from 'react'

const Artpiece = ({ name, artist, usd, eth }) => {
    return (
        <div className="sm:ml-48 my-16 ">
          <div className='text-3xl text-yellow'>
            {name}
            <div className='text-sm'>
              by {artist}
            </div>
            <br></br>
            <div className='text-2xl'>
                ${usd} ({eth}E)
            </div>
            <button className="btn bg-yellow text-black text-base px-9 py-1 rounded">
                Buy now
            </button>
            <br></br>
            <div className='text-base'>
                42/50 available
            </div>
          </div>
        </div>
    )
}

export default Artpiece
