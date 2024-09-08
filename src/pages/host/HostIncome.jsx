import incomeImg from '../../assets/incomeImg.png'

const Transactions = () => {
    return(
        <div>
        <ul className='mx-4 my-3'>
            <li className='flex justify-between items-center bg-orange-200 p-3 rounded-lg mt-2'>
                <h3 className='text-xl font-bold'>$720</h3>
                <p className='text-sm'>1/12/22</p>
            </li>
            <li className='flex justify-between items-center bg-orange-200 p-3 rounded-lg mt-2'>
            <h3 className='text-xl font-bold'>$560</h3>
                <p className='text-sm'>10/11/22</p>
            </li>
            <li className='flex justify-between items-center bg-orange-200 p-3 rounded-lg mt-2'>
            <h3 className='text-xl font-bold'>$980</h3>
                <p className='text-sm'>23/11/22</p>
            </li>
        </ul>
    </div>
    )
}
function HostIncome() {
  return (
    <div className='mx-5 my-5'>
        <div>
            <h2 className='text-2xl font-bold'>Income</h2>
            <p className='text-slate-600 my-2 text-sm'>Last <span className='underline'>30 days</span></p>
            <h1 className='text-4xl font-bold my-2'>$2,260</h1>
        </div>
        <img src={incomeImg} />
        <div>
            <div className='flex justify-between items-center'>
                <h3 className='text-xl font-semibold'>Your transactions (3) </h3>
                <p className='text-slate-600 text-sm'>Last <span className='underline'>30 days</span></p>
            </div>
            <Transactions />
        </div>
    </div>
  )
}

export default HostIncome