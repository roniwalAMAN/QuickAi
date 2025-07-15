import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArtical from './pages/WriteArtical'
import BlogTitles from './pages/BlogTitles'
import GenerateImages from './pages/GenerateImages'
import RemoveBackgrond from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'

const App = () =>{
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/ai' element={<Layout />}>
            <Route index element ={<Dashboard />}/>
            <Route path='write-artical' element ={<WriteArtical />}/>
            <Route path='blog-titles' element ={<BlogTitles />}/>
            <Route path='generate-images' element ={<GenerateImages />}/>
            <Route path='remove-background' element ={<RemoveBackgrond />}/>
            <Route path='remove-object' element ={<RemoveObject />}/>
            <Route path='review-resume' element ={<ReviewResume />}/>
            <Route path='community' element ={<Community />}/>

          </Route>
      </Routes>
    </div>

  )
} 
export default App