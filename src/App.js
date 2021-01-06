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
      income: '55000',
      email: 'test@gmail.com',
    },
  });

  const onSubmit = (data, e) => {
    if (e.nativeEvent.submitter.id === 'petland') window.petland(data);
    else if (e.nativeEvent.submitter.id === 'lending') window.lending(data);
  };

  const fields = [
    { name: 'fname', label: 'First Name' },
    { name: 'mi', label: 'Middle Initial' },
    { name: 'lname', label: 'Last Name' },
  ];

  return (
    <div className='App bg-gray-100 h-screen flex items-center justify-center'>
      <div className='container mx-auto flex flex-col bg-white rounded-2xl p-10 shadow-md'>
        <h2 className='text-6xl text-indigo-500 font-semibold'>
          Prefill Values
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
          <div className='flex justify-evenly space-x-4'>
            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg mr-4'>First Name</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='fname'
                ref={register}
              />
            </div>

            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg'>Middle Initial</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='mi'
                ref={register}
              />
            </div>

            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg'>Last Name</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='lname'
                ref={register}
              />
            </div>
          </div>

          <div className='flex justify-evenly space-x-4'>
            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg mr-4'>Social Security</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='social'
                ref={register}
              />
            </div>

            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg'>Date of Birth</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='dob'
                ref={register}
              />
            </div>

            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg'>Income</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='income'
                ref={register}
              />
            </div>
          </div>
          <div className='flex justify-evenly space-x-4'>
            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg mr-4'>Zip Code</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='zip'
                ref={register}
              />
            </div>

            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg'>Street Address</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='staddre'
                ref={register}
              />
            </div>

            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg'>Suite or Apartment</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='apt'
                ref={register}
              />
            </div>
          </div>

          <div className='flex justify-evenly space-x-4'>
            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg mr-4'>City</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='city'
                ref={register}
              />
            </div>

            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg'>State</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='state'
                ref={register}
              />
            </div>

            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg'>Email</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='email'
                ref={register}
              />
            </div>
          </div>

          <button
            type='submit'
            className='bg-indigo-500 text-white text-lg px-4 py-2 rounded mt-5 mr-4'
            id='lending'
          >
            Submit Lending
          </button>

          <button
            type='submit'
            name='petland'
            className='bg-indigo-500 text-white text-lg px-4 py-2 rounded mt-5'
            id='petland'
          >
            Submit Petland
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
