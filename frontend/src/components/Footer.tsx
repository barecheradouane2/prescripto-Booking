import {assets} from '../assets/assets_frontend/assets'
const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 justify-between p-4 mt-20 '>
       <div className='flex flex-col gap-4 flex-1'>
          <img
            src={assets.logo}
            alt="logo"
            className="w-32 h-auto"
          />

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>



        </div>

        <div className='flex flex-col gap-4 flex-1 items-center'>
          <h2 className='text-xl font-semibold'>COMPANY</h2>
          <div className='flex flex-col gap-2'>
            <p >About Us</p>
            <p>Contact Us</p>
            <p>Delivery</p>
            <p>Privacy policy</p>
         
          </div>

         
        </div>

         <div className='flex flex-col gap-4 flex-1  items-center'>
          <h2 className='text-xl font-semibold'>GET IN TOUCH</h2>
          <div className='flex flex-col gap-2'>
            <p >+0-000-000-000</p>
            
         
          </div>

         
        </div>





    </div>
  )
}

export default Footer