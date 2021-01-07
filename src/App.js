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
      phone: '3052221111',
      altPhone: '3057774444',
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
              <select
                className='border border-1 py-4 rounded-lg pl-4'
                name='state'
                ref={register}
              >
                <option value='AL'>Alabama</option>
                <option value='AK'>Alaska</option>
                <option value='AZ'>Arizona</option>
                <option value='AR'>Arkansas</option>
                <option value='CA'>California</option>
                <option value='CO'>Colorado</option>
                <option value='CT'>Connecticut</option>
                <option value='DE'>Delaware</option>
                <option value='DC'>District Of Columbia</option>
                <option value='FL'>Florida</option>
                <option value='GA'>Georgia</option>
                <option value='HI'>Hawaii</option>
                <option value='ID'>Idaho</option>
                <option value='IL'>Illinois</option>
                <option value='IN'>Indiana</option>
                <option value='IA'>Iowa</option>
                <option value='KS'>Kansas</option>
                <option value='KY'>Kentucky</option>
                <option value='LA'>Louisiana</option>
                <option value='ME'>Maine</option>
                <option value='MD'>Maryland</option>
                <option value='MA'>Massachusetts</option>
                <option value='MI'>Michigan</option>
                <option value='MN'>Minnesota</option>
                <option value='MS'>Mississippi</option>
                <option value='MO'>Missouri</option>
                <option value='MT'>Montana</option>
                <option value='NE'>Nebraska</option>
                <option value='NV'>Nevada</option>
                <option value='NH'>New Hampshire</option>
                <option value='NJ'>New Jersey</option>
                <option value='NM'>New Mexico</option>
                <option value='NY'>New York</option>
                <option value='NC'>North Carolina</option>
                <option value='ND'>North Dakota</option>
                <option value='OH'>Ohio</option>
                <option value='OK'>Oklahoma</option>
                <option value='OR'>Oregon</option>
                <option value='PA'>Pennsylvania</option>
                <option value='RI'>Rhode Island</option>
                <option value='SC'>South Carolina</option>
                <option value='SD'>South Dakota</option>
                <option value='TN'>Tennessee</option>
                <option value='TX'>Texas</option>
                <option value='UT'>Utah</option>
                <option value='VT'>Vermont</option>
                <option value='VA'>Virginia</option>
                <option value='WA'>Washington</option>
                <option value='WV'>West Virginia</option>
                <option value='WI'>Wisconsin</option>
                <option value='WY'>Wyoming</option>
              </select>
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

          <div className='flex justify-evenly space-x-4'>
            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg mr-4'>Phone</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='phone'
                ref={register}
              />
            </div>

            <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg mr-4'>Alt Phone</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='altPhone'
                ref={register}
              />
            </div>

            {/* <div className='flex flex-col flex-1 mb-5'>
              <label className='text-lg'>Last Name</label>
              <input
                className='border border-1 py-4 rounded-lg pl-4'
                type='text'
                name='lname'
                ref={register}
              />
            </div> */}
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
