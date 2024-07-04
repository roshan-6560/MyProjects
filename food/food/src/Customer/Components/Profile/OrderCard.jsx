import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
      <div className='flex items-center space-x-5'>
        <img className='h-16 w-16' src="https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg" alt="" />
        <div>
          <p>Burger</p>
          <p className='text-gray-400'>₹199</p>
        </div>
      </div>
      <div>
        <Button variant='contained'>
          Track order
        </Button>
      </div>
    </Card>
  )
}

export default OrderCard
