import React from 'react';

import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative h-screen p-10">
      <Image
        src="/assets/pizza.webp"
        height="600px"
        width="400ox"
        alt="pizza"
        className="bg-center bg-no-repeat bg-cover  absolute 
        "
      />
      <Image
        src="/assets/juice.webp"
        height="500px"
        width="300ox"
        alt="juice"
        className="bg-center bg-no-repeat bg-cover 
        "
      />
      <Image
        src="/assets/salad.webp"
        height="500px"
        width="350ox"
        alt="salad"
        className="bg-center bg-no-repeat bg-cover 
        "
      />
      <Image
        src="/assets/pasta.webp"
        height="600px"
        width="400ox"
        alt="pasta"
        className="bg-center bg-no-repeat bg-cover 
        "
      />
      <Image
        src="/assets/banner.jpg"
        height="2000px"
        width="2000px"
        alt="banner"
        className=" bg-no-repeat bg-cover "
      />
    </div>
  );
};

export default Banner;
