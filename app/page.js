import MainButton from './components/main-button';

export default function Home() {
  return (
    <>
    <div class='bg-main-background bg-cover'>
      <h1 class='text-white font-bold md:fixed top-12 md:left-2/4 md:translate-x-[-50%] text-4xl text-center pt-8'>B-Fit!</h1>
      <div class='flex min-h-[100vh] items-center justify-evenly flex-col md:flex-row'>
        <div>
          <MainButton route={'/exercises'} buttonTitle={'Exercises'} />
        </div>
        <div>
          <MainButton route={'/routines'} buttonTitle={'Routines'} />
        </div>
        <div>
          <MainButton route={'/weekly'} buttonTitle={'Weekly Plan'} />
        </div>
      </div>
    </div>
    </>
  );
}
