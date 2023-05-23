import LinkButton from './link-button';

const editButtonStyle = 'w-[112px] text-secondary-light hover:text-secondary-light-b hover:cursor-pointer hover:transition-colors'

export default function Routine() {
  return (
    <>
      <div className='mt-8 justify-center text-center align-middle flex'>
        <div className='text-white text-center'>
          <div className='flex w-100 mb-2'>
          <div className='w-[288px] font-bold'>ROUTINE TITLE</div>
          <LinkButton
          className={editButtonStyle}
          route={'/routines/edit'}
          buttonTitle={'✎ Edit'}
        />
          </div>
          <div className='flex'>
            <div className='w-72 bg-main-light border-white border py-1'>Exercise</div>
            <div className='w-14 bg-main-light border-white border py-1'>Sets</div>
            <div className='w-14 bg-main-light border-white border py-1'>Reps</div>
          </div>
          <div className='h-[154px] overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-main-light-b pr-[2px]'>
          <div className='flex bg-main-dark-b'>
            <div className='w-72 border-white border py-1 px-2'>Exercise A</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
          </div>
          <div className='flex bg-main-dark-b'>
            <div className='w-72 border-white border py-1 px-2'>Exercise B</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
          </div>
          <div className='flex bg-main-dark-b'>
            <div className='w-72 border-white border py-1 px-2'>Exercise C</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
          </div>
          <div className='flex bg-main-dark-b'>
            <div className='w-72 border-white border py-1 px-2'>Exercise D</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
          </div>
          <div className='flex bg-main-dark-b'>
            <div className='w-72 border-white border py-1 px-2'>Exercise F</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
          </div>
          <div className='flex bg-main-dark-b'>
            <div className='w-72 border-white border py-1 px-2'>Exercise G</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
          </div>
          <div className='flex bg-main-dark-b'>
            <div className='w-72 border-white border py-1 px-2'>Exercise H</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
          </div>
          <div className='flex bg-main-dark-b'>
            <div className='w-72 border-white border py-1 px-2'>Exercise E</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
            <div className='w-14 border-white border py-1 px-2'>#</div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
