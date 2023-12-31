import React from 'react'
import {  useSelector } from 'react-redux';

import NavBar from '../components/Home/NavBar'
import { Navigate } from 'react-router-dom';

const Home = () => {

  const {user,loading,isAuthenticated} = useSelector(state=>state.user);


 if (!isAuthenticated && !loading)
  return <Navigate to ='/' />

  return (
    <>
      {loading && user === null ? (
        <div className="typing-indicator m-10 ">
          <div className="typing-circle"></div>
          <div className="typing-circle"></div>
          <div className="typing-circle"></div>
          <div className="typing-shadow"></div>
          <div className="typing-shadow"></div>
          <div className="typing-shadow"></div>
        </div>
      ) : (
        
        <div className="flex">
          <NavBar />
          <div className="basis-[80%] border bg-gray-100 ">
            <div className="w-3/4 mx-auto bg-white rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src="/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home
