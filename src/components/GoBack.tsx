
const GoBack = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
  <button onClick={handleGoBack} className='absolute z-20  flex cursor-pointer items-center -top-16 gap-3'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
    <span className='text-xl font-semibold'>Volver</span>
    </button>
  );
};

export default GoBack;

