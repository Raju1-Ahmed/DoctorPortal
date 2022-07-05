import React from 'react';

const Info = ({img, CardTitle, bgclass}) => {
    return (
        <div className={`card lg:card-side bg-black shadow-xl ${bgclass}`}>
        <figure className='pl-5  pt-5 '>
            <img src={img} alt="Album"/></figure>
        <div className="card-body text-white">
          <h2 className="card-title">{CardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>                                                      
      </div>
    );             
};

export default Info;