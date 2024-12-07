import React from 'react'

const CaptainDetail = () => {
  return (
    <div>
       <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
          <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
            <h4 className="text-lg font-medium">Ankit </h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">$120</h4>
            <p className="text-sm font-medium text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex p-3 bg-gray-100 rounded-xl  justify-evenly items-start gap-5 mt-2">
          <div className="text-center">
            <i className="text-3xl mb-2  font-thin ri-timer-2-line"></i>
            <h4 className="text-lg font-medium">10.2</h4>
            <p className="text-sm text-gray-500">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2  font-thin ri-speed-up-line"></i>
            <h4 className="text-lg font-medium">10.2</h4>
            <p className="text-sm text-gray-500">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-2  font-thin ri-booklet-line"></i>
            <h4 className="text-lg font-medium">10.2</h4>
            <p className="text-sm text-gray-500">Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetail
