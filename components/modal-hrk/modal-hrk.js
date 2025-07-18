import classNames from 'classnames'
import React from 'react'

const ModalHrk = ({
    showModal = false,
    children
}) => {
  return (
    <>

        {
            showModal &&

            <div className={classNames(
                'flex', 
                'flex-col', 
                'items-center', 
                'justify-center', 
                'absolute', 
                'z-50', 
                'left-0', 
                'top-0', 
                'w-screen', 
                'h-screen',
                'bg-primary',
                'bg-opacity-90',
                'transition-all',
                'slide-fwd-center'
                )}>

                {children}
                
            </div>

        }
    
    </>
  )
}

export default ModalHrk