import React from 'react';
import PackageFeatures from './PackageFeatures';

const PackageCard = ({pricing}) => {
    const {name, price, description, features} = pricing;

    return (
        <div className='border-2 rounded-2xl bg-gradient-to-br from-indigo-400 via-orange-300  to-red-400 p-4'>
            {/* card header */}
            <div className='lg:text-center'>
                <h1 className='text-5xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* card body */}
            <div className='bg-orange-300 mt-4 p-2 rounded-2xl'>
                <p className='font-medium'>{description}</p>
                {
                    features.map((feature, index)=><PackageFeatures key={index} feature={feature}></PackageFeatures>)
                }
            </div>
            <button className='btn btn-wide mt-4 block mx-auto'>Select Package</button>
        </div>
    );
};

export default PackageCard;