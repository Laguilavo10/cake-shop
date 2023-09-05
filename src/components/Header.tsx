import { MenuIcon, WhatsAppIcon, XIcon } from '../assets/icons'
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
  const [isOpenMenu, setIsOpenMenu] = useState(false)

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
      <div
        className={`${
          isOpenMenu ? 'bg-black/40' : 'bg-transparent'
        } fixed bottom-0 left-0 right-0 top-0 z-30 h-screen w-screen transition-all duration-200 ease-linear sm:hidden`}
        onClick={() => setIsOpenMenu(false)}
      />
      <header className='fixed left-0 right-0 top-0 z-30 flex w-full items-center justify-between px-5 py-2 backdrop-blur-[20px] sm:grid sm:grid-cols-3 sm:justify-between sm:px-4 sm:py-4'>
        <MenuIcon
          className='block h-8 sm:hidden'
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        />
        <ul
          className={`absolute left-0 top-0 flex h-screen w-52 flex-col items-center justify-center gap-8 bg-principal  ${
            isOpenMenu ? 'left-0' : '-translate-x-60'
          } shadow-primary-300 shadow-2xl transition-all duration-300 ease-in
            sm:relative sm:flex sm:h-auto sm:w-full sm:translate-x-0 sm:flex-row sm:items-start sm:justify-end sm:bg-transparent sm:text-center sm:text-base sm:shadow-none sm:col-start-2
            `}
        >
          {isOpenMenu && (
            <XIcon
              className='absolute right-2 top-2 h-8 w-8 sm:hidden'
              onClick={() => setIsOpenMenu(false)}
            />
          )}
          {optionsMenu.map(({ title, id }) => (
            <li
              onMouseEnter={changeDiv}
              onMouseLeave={hideDiv}
              key={id}
              className='flex list-none items-center text-center transition-transform duration-150 ease-linear hover:scale-110'
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
        <div className='flex justify-end'>
          <WhatsAppIcon className={`fill-green-whatsapp ${isOpenMenu && 'fill-white'} sm:!fill-green-whatsapp`} />
        </div>
      </header>
    </>
  )
}
