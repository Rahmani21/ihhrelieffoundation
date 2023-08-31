import React from 'react'

const Donate = () => {
    return (
          <div  className="lg:flex lg:justify-center lg:px-72 pt-14 h-[50vh]">
            <div  className="">
              <h4 className="text-xl md:hidden sm:hidden">
                You can send your donation by sending sms on all lines
              </h4>
            </div>
            <div className="  text-xl ml-40 ">
              <h4 className="text-green-500 pb-5 font-semibold">3074</h4>
              <h5>You can donate immediately or by adding them to your basket</h5>
              <div className="pt-10 font-semibold">
                <a className="hover:text-green-500">Other donations</a>
              </div>
            </div>
          </div>
      );
}

export default Donate