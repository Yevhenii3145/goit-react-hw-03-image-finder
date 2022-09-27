import React from 'react'

export default function ImageGalleryItem({link,alt,onClick}) {

  return (
    <li onClick={() => onClick()} className="imageGalleryItem">
        <img className='imageGalleryItemImage' src={link} alt={alt} />
    </li>
  )
}
