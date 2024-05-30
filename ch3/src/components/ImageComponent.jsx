import React from 'react'
import Image from 'next/image'

import myImage from '../../public/images/momo.jpeg'

const ImageComponent = () => {
  return (
    <div>
      <Image src={myImage} alt="momo picture"></Image>
    </div>
  )
}

export default ImageComponent
