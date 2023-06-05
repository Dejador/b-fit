import LinkButton from './components/link-button';

export default function Home() {
  const buttonStyle =
    'border text-2xl bg-main-light hover:bg-main-dark-b text-white px-16 py-12 opacity-90 transition-colors rounded';
  return (
    <>
        <div className='bg-[url("/assets/images/background-main.jpg")] bg-cover flex h-screen items-center flex-col md:flex-row justify-evenly -mt-12 md:mt-0'>
          <div>
            <LinkButton
              className={buttonStyle}
              route={'/exercises'}
              buttonTitle={'Exercises'}
            />
          </div>
          <div>
            <LinkButton
              className={buttonStyle}
              route={'/routines'}
              buttonTitle={'Routines'}
            />
          </div>
          <div>
            <LinkButton
              className={buttonStyle}
              route={'/weekly'}
              buttonTitle={'Weekly Plan'}
            />
          </div>
        </div>
    </>
  );
}
