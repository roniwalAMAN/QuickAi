import { FileText, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const ResumeReview = () => {
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    // resume review logic here
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-gray-700'>
      {/* Left column */}
      <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Sparkles className='w-6 text-[#00DA83]' />
          <h1 className='text-xl font-semibold'>Resume Review</h1>
        </div>

        <p className='mt-6 text-sm font-medium'>Upload Resume</p>

        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file" accept='application/pdf'
          className='w-full p-2 px-3 mt-3 outline-none text-sm rounded-md border border-gray-300 text-gray-600'
          required
        />
        <p className='text-xs text-gray-500 font-light mt-1'>Supports PDF resume only.</p>

        {/* <p className='mt-6 text-sm font-medium'>Optional: Add comments or specific job role</p>

        <textarea
          onChange={(e) => setFeedback(e.target.value)}
          value={feedback}
          rows={4}
          className='w-full p-2 px-3 mt-3 outline-none text-sm rounded-md border border-gray-300'
          placeholder='e.g., Apply for Frontend Intern, focus on projects...'
        /> */}

        <button
          type="submit"
          className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer transition-all duration-300 hover:opacity-90'
        >
          <FileText className='w-5' />
          Review Resume
        </button>
      </form>

      {/* Right column */}
      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>
        <div className='flex items-center gap-3'>
          <FileText className='w-5 h-5 text-[#00DA83]' />
          <h1 className='text-xl font-semibold'>Analysis Results</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400 text-center'>
            <FileText className='w-9 h-9' />
            <p>Upload your resume and click "Review Resume" to get started</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeReview
