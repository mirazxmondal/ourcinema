import React from 'react';
import FOFFooter from '../components/FOFFooter';
import Location from '../components/Location';
import fof from '../../Database/fof.json';
import Link from 'next/link';

interface FOFData {
  image: string;
}

function page(): JSX.Element {
  return (
    <div>
      <div>
        <button>2023</button>
        {fof[2023].map((data: FOFData) => (
          <Link href={data.image} key={data.image}>
            <div className='border-2 border-sky-500 h-[400px] w-[400px]'>
              {
                
              }
            </div>
          </Link>
        ))}
      </div>
      <Location />
      <FOFFooter />
    </div>
  );
}

export default page;
