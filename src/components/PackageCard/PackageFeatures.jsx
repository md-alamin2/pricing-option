import React from 'react';
import { CalendarCheck } from 'lucide-react';

const PackageFeatures = ({feature}) => {
    return (
        <p className='flex gap-2 mt-2'><CalendarCheck /> {feature}</p>
    );
};

export default PackageFeatures;