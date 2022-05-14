import React from 'react';
import treatment from '../../../../assets/images/treatment.png'

const Terms = () => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
          <div className=''>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary uppercase">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Terms;