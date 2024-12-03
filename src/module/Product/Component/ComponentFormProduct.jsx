import '../../../assets/scss/module/formProduct/index.css'

import React from 'react'

export default function ComponentFormProduct() {
  return (
    <div className='my-12 mx-auto'>
        <div className='container'>
            <div className='layout'>
                <h2 className=''>Your Form</h2>
                <form>
                    <input type="text" placeholder='First Name' className='first-name' />
                    <input type="text" placeholder='Last Name' className='last-name' />
                    <input type="number" placeholder='Age' className='age' />
                    <input type="text" placeholder='Address' className='address' />
                    <input type="text" placeholder='Place of work' className='place-of-work'/>
                    <input type="text" placeholder='Job title' className='job-title' />
                    <input type="text" placeholder='Phone number' className='phone-number' />
                    <input type="text" placeholder='Skype' className='skype' />
                </form>
            </div>
            <div class="template">
                <div class="template-form">
                    <input type="text" placeholder="First name" className='first-name'/>
                    <input type="text" placeholder="Last name" className='last-name' />
                    <input placeholder="Age" type="number" className='age'/>
                    <input type="text" placeholder="Address" className='address' />
                    <input type="text" placeholder="Place of work" className='place-of-work' />
                    <input type="text" placeholder="Job title" className='job-title' />
                    <input type="text" placeholder="Phone number" className='phone-number'/>
                    <input type="text" placeholder="Skype" className='skype'/>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
