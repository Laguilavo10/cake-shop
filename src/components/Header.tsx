import { WhatsAppIcon } from '../assets/icons'
import { useState } from 'react'
const optionsMenu = [
  {
    title: 'Sobre Nosotros',
    id: 'about-us'
  },
  {
    title: 'Menu',
    id: 'menu'
  },
  {
    title: 'Ubicación',
    id: 'location'
  }
]
export default function Header() {
  const [positionDiv, setPositionDiv] = useState({})

  const changeDiv = (evt: React.MouseEvent<HTMLLIElement>) => {
    const { left, width, top, height } =
      evt.currentTarget.getBoundingClientRect()
    const stylesDiv = {
      height: `${Math.round(height)}px`,
      transform: `translateX(${Math.round(left)}px)`,
      top: `${top}px`,
      width: `${Math.round(width)}px`
    }
    setPositionDiv(stylesDiv)
  }

  const hideDiv = () => {
    setPositionDiv((prev) => ({ ...prev, opacity: '0', visibility: 'hidden' }))
  }
  
  return (
    <>
      <div
        className='pointer-events-none fixed left-0 top-0 z-20 box-content hidden rounded bg-orange-600 transition-all duration-200 ease-linear md:block'
        style={positionDiv}
      />
      <header className='fixed left-0 right-0 top-0 z-30 flex w-full justify-between px-5 py-2 backdrop-blur-[20px] sm:grid sm:grid-cols-3 sm:items-center sm:justify-between sm:px-4 sm:py-4'>
        <ul className='col-start-2 hidden justify-center gap-7 sm:flex'>
          {optionsMenu.map(({ title, id }) => (
            <li onMouseEnter={changeDiv} onMouseLeave={hideDiv} key={id} className='transition-transform duration-150 ease-linear hover:scale-110 list-none'>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
        <div className='flex justify-end'>
          <WhatsAppIcon className='fill-green-whatsapp' />
        </div>
      </header>
    </>
  )
}
