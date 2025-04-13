import React, { use } from 'react';
import PackageCard from '../PackageCard/PackageCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    return (
        <div className='w-11/12 lg:container mx-auto'>
            <h2 className='text-5xl'>Select Your Package</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4'>
                {
                    pricingData.map(pricing=><PackageCard key={pricing.id} pricing={pricing}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;