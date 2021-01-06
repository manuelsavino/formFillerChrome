import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fname: 'test',
      mi: 'V',
      lname: 'tests',
      social: '147-88-8854',
      dob: '01/20/1998',
      zip: '33178',
      staddre: '10122 SW 45th Ave',
      apt: '201',
      city: 'Miami',
      state: 'FL',
      email: 'test@gmail.com',
    },
  });

  const onSubmit = (data, e) => {
    // console.log(data);
    if (e.nativeEvent.submitter.id === 'petland') window.petland(data);
    else if (e.nativeEvent.submitter.id === 'lending') window.lending(data);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container mx-auto'>
          <h2 className='text-6xl text-gray-800'>Form Values</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
            <div className='flex space-x-4'>
              <label className='text-lg'>
                First Name
                <input
                  className='border border-1'
                  type='text'
                  name='fname'
                  ref={register}
                />
              </label>
              <label className='text-lg'>
                Middle Initial
                <input
                  className='border border-1'
                  type='text'
                  name='mi'
                  ref={register}
                />
              </label>
              <label className='text-lg'>
                Last Name
                <input
                  className='border border-1'
                  type='text'
                  name='lname'
                  ref={register}
                />
              </label>
            </div>
            <div className='flex space-x-4 mt-5'>
              <label className='text-lg'>
                Social Security Number
                <input
                  className='border border-1'
                  type='text'
                  name='social'
                  ref={register}
                />
              </label>
              <label className='text-lg'>
                DOB
                <input
                  className='border border-1'
                  type='text'
                  name='dob'
                  ref={register}
                />
              </label>
              <label className='text-lg'>
                Income
                <input
                  className='border border-1'
                  type='text'
                  name='income'
                  ref={register}
                />
              </label>
            </div>

            <div className='flex space-x-4 mt-5'>
              <label className='text-lg'>
                Zip Code
                <input
                  className='border border-1'
                  type='text'
                  name='zip'
                  ref={register}
                />
              </label>
              <label className='text-lg'>
                Street Address
                <input
                  className='border border-1'
                  type='text'
                  name='staddre'
                  ref={register}
                />
              </label>
              <label className='text-lg'>
                Suite Or Apt
                <input
                  className='border border-1'
                  type='text'
                  name='apt'
                  ref={register}
                />
              </label>
            </div>

            <div className='flex space-x-4 mt-5'>
              <label className='text-lg'>
                City
                <input
                  className='border border-1'
                  type='text'
                  name='city'
                  ref={register}
                />
              </label>
              <label className='text-lg'>
                State
                <input
                  className='border border-1'
                  type='text'
                  name='state'
                  ref={register}
                />
              </label>
              <label className='text-lg'>
                Email
                <input
                  className='border border-1'
                  type='text'
                  name='email'
                  ref={register}
                />
              </label>
            </div>

            <button
              type='submit'
              className='bg-blue-500 text-white text-lg px-4 py-2 rounded mt-5'
              id='lending'
            >
              Submit Lending
            </button>

            <button
              type='submit'
              name='petland'
              className='bg-blue-500 text-white text-lg px-4 py-2 rounded mt-5'
              id='petland'
            >
              Submit Petland
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
