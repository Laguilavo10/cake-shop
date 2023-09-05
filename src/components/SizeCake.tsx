import React, { useState } from 'react'
import { convertToCOP } from '../utils/convertToCOP'
const sizes = [
  {
    size: 'S',
    price: '30000',
    countPeople: '10'
  },
  {
    size: 'M',
    price: '40000',
    countPeople: '12'
  },
  {
    size: 'L',
    price: '50000',
    countPeople: '15'
  }
]

export default function SizeCake() {
  const [selected, setSelected] = useState(sizes[1])
  return (
    <article className='flex justify-between'>
      <ul className='flex gap-2 relative'>
        {sizes.map((data) => (
          <li
            onClick={() => setSelected(data)}
            key={data.size}
            className='list-none'
          >
            <SizeItem title={data.size} isSelected={data.size === selected?.size} />
          </li>
        ))}
        <li>
          <small className='text-xs text-gray-400 font-light absolute left-0 -bottom-3'>*Para {selected.countPeople} personas</small>
        </li>
      </ul>
      
      <div>
        <small className='text-xs text-gray-400 font-light'>desde </small>
        <span className='font-bold text-2xl text-green-500'>${convertToCOP(selected.price ?? '')}</span>
      </div>
    </article>
  )
}

const SizeItem = ({
  title,
  isSelected = false
}: {
  title: string
  isSelected?: boolean
}) => {
  return (
    <div
      className={`inline cursor-pointer rounded-md border-2 px-2 ${
        isSelected
          ? 'border-yellow-300 text-yellow-500'
          : 'border-black/30 text-black/50'
      }`}
    >
      {title}
    </div>
  )
}
