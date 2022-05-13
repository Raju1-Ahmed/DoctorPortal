import React from 'react';

const Info = ({img, CardTitle, bgclass}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgclass}`}>
        <figure className='pl-5'>
            <img src={img} alt="Album"/></figure>
        <div class="card-body text-white">
          <h2 class="card-title">{CardTitle}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>                                                      
      </div>
    );             
};

export default Info;