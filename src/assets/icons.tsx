export function WhatsAppIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={`h-8 w-8 ${className}`}
      {...props}
    >
      <path
        // fill='white'
        d='M6.014 8.006c.114-.904 1.289-2.132 2.22-1.996V6.01c.907.172 1.625 1.734 2.03 2.436.286.509.1 1.025-.167 1.243-.361.29-.926.692-.808 1.095C9.5 11.5 12 14 13.23 14.711c.466.269.804-.44 1.092-.804.21-.28.726-.447 1.234-.171.759.442 1.474.956 2.135 1.534.33.276.408.684.179 1.115-.403.76-1.569 1.76-2.415 1.557C13.976 17.587 8 15.27 6.08 8.558c-.108-.318-.08-.438-.066-.552z'
      ></path>
      <path
        // fill='white'
        fillRule='evenodd'
        d='M12 23c-1.224 0-1.9-.131-3-.5l-2.106 1.053A2 2 0 014 21.763V19.5c-2.153-2.008-3-4.323-3-7.5C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm-6-4.37l-.636-.593C3.691 16.477 3 14.733 3 12a9 9 0 119 9c-.986 0-1.448-.089-2.364-.396l-.788-.264L6 21.764V18.63z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

export const BlobBackground = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' {...props}>
      <path
        fill='#F06'
        d='M146.2 25c12 10.8 18.8 26.5 25.8 42 7 15.6 14.1 31 11.7 44.7-2.4 13.8-14.4 25.9-26.9 34.1-12.4 8.3-25.4 12.6-37.8 14.1-12.4 1.5-24.3.1-37.6-1.5-13.2-1.7-27.8-3.6-35.2-11.9-7.4-8.3-7.6-23-11.4-38.2-3.8-15.2-11.2-30.9-8.5-44.1 2.7-13.3 15.5-24 29.5-33.9 14-9.9 29.1-18.8 45.2-20.4 16.1-1.5 33.2 4.3 45.2 15.1z'
      ></path>
    </svg>
  )
}

export const MenuIcon = ({className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={className}
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  )
}

export const XIcon = ({className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={className}
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  )
}
