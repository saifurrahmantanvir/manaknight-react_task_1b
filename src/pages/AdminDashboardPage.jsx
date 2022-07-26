import React from "react";
import MkdSDK from "../utils/MkdSDK";

const AdminDashboardPage = () => {
  let sdk = new MkdSDK()

  React.useEffect(() => {
    sdk.callRestAPI({
      payload: {},
      page: 1,
      limit: 10
    }, 'PAGINATE')
  })

  return (
    <>
      <div className="w-full py-10 px-32 h-screen text-gray-700 bg-black">
        <nav className="flex justify-between items-center mb-20">
          <span className="font-black text-5xl text-white">APP</span>

          <button className='flex items-center gap-2 font-thin text-base text-black bg-green rounded-3xl px-6 py-3'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 20C5 17.544 6.991 15.553 9.447 15.553H14.553C17.009 15.553 19 17.544 19 20" stroke="#696969" strokeWidth="1.4824" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.0052 5.2448C16.6649 6.90453 16.6649 9.59548 15.0052 11.2552C13.3455 12.9149 10.6545 12.9149 8.9948 11.2552C7.33507 9.59548 7.33507 6.90453 8.9948 5.2448C10.6545 3.58507 13.3455 3.58507 15.0052 5.2448" stroke="#696969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Login</span>
          </button>
        </nav>

        <div className="flex justify-between text-white mb-8">
          <h2 className="font-thin text-4xl">Today’s leaderboard</h2>

          <div className="flex justify-around items-center flex-shrink-0 flex-grow-0 text-xs bg-black-al rounded-2xl px-3 py-6">
            <span>30 July 2022</span>
            <span className="w-2 h-2 rounded-full bg-gray-700"></span>
            <span className="bg-green py-1 px-3 rounded-md text-sm text-black">SUBMISSIONS OPEN</span>
            <span className="w-2 h-2 border rounded-full bg-gray-700"></span>
            <span>11:34</span>
          </div>
        </div>

        <div className="grid items-center pl-6 mb-5" style={{ gridTemplateColumns: '50px repeat(2, 1fr) max-content' }}>
          <span>#</span>
          <span>Title</span>
          <span>Author</span>
          <span className="flex items-center">
            Most Liked
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10L12 14L16 10" stroke="#696969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <div className="card-container">
          <div className="grid items-center border rounded-lg px-6 py-4" style={{ gridTemplateColumns: '50px repeat(2, 1fr) 50px' }}>
            <span>01</span>
            <figure className="card-figure flex items-center gap-2">
              <img className="w-28 h-16 rounded-lg" src={'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'} alt='' />
              <figcaption className="text-xl text-white font-thin">some lorem text</figcaption>
            </figure>

            <figure className="flex items-center gap-2">
              <img className="w-6 h-6 rounded-full" src={'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'} alt="" />
              <figcaption className="text-green-light font-thin">author name</figcaption>
            </figure>

            <div className="flex items-center gap-2">
              <span>288</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0085 3.75833V16.25" stroke="#9BFF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.01929 8.76167L10.0001 3.74834L14.981 8.76167" stroke="#9BFF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
