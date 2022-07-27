import React from "react";
import { useDrag } from "react-dnd";
import MkdSDK from "../utils/MkdSDK";

const response = {
  error: false,
  list: [
    {
      id: 1,
      title: "Rune raises $100,000 for marketing through NFT butterflies sale",
      photo: "https://picsum.photos/200/200",
      user_id: 1,
      username: "boss",
      create_at: "2022-01-01",
      update_at: "2022-01-01T04:00:00.000Z",
      like: 10
    },
    {
      id: 2,
      title: "Having a familiarity or understanding of how something works.",
      photo: "https://picsum.photos/seed/picsum/200/200",
      user_id: 1,
      username: "danny",
      create_at: "2022-01-01",
      update_at: "2022-01-01T04:00:00.000Z",
      like: 10
    },
    {
      id: 3,
      title: "A shout of agreement, or to draw attention to a speaker.",
      photo: "https://unsplash.com/photos/6cY-FvMlmkQ",
      user_id: 1,
      username: "sally",
      create_at: "2022-01-01",
      update_at: "2022-01-01T04:00:00.000Z",
      like: 10
    },
    {
      id: 4,
      title: "Someone whos solitary or independent.",
      photo: "https://unsplash.com/photos/6J--NXulQCs",
      user_id: 1,
      username: "bob",
      create_at: "2022-01-01",
      update_at: "2022-01-01T04:00:00.000Z",
      like: 10
    },
    {
      id: 5,
      title: "To risk it all, even if it means losing everything. To go all out.",
      photo: "https://unsplash.com/photos/pwaaqfoMibI",
      user_id: 1,
      username: "han",
      create_at: "2022-01-01",
      update_at: "2022-01-01T04:00:00.000Z",
      like: 10
    },
    {
      id: 6,
      title: "Usually this references a tool used by rescuers when they pry or cut open a car to save the occupant.",
      photo: "https://unsplash.com/photos/1DkWWN1dr-s",
      user_id: 1,
      username: "fanny",
      create_at: "2022-01-01",
      update_at: "2022-01-01T04:00:00.000Z",
      like: 10
    },
    {
      id: 7,
      title: "High quality, exceptional; something thats very valuable.",
      photo: "https://unsplash.com/photos/GYumuBnTqKc",
      user_id: 1,
      username: "quak",
      create_at: "2022-01-01",
      update_at: "2022-01-01T04:00:00.000Z",
      like: 10
    },
    {
      id: 8,
      title: "To be left behind; abandoned. Being in a helpless situation without a way to recover.",
      photo: "https://unsplash.com/photos/tBtuxtLvAZs",
      user_id: 1,
      username: "britney",
      create_at: "2022-01-01",
      update_at: "2022-01-01T04:00:00.000Z",
      like: 10
    },
    {
      id: 9,
      title: "People tend to associate with others who share similar interests or values.",
      photo: "https://unsplash.com/photos/-wWRHIUklxM",
      user_id: 1,
      username: "sam",
      create_at: "2022-01-01",
      update_at: "2022-01-01T04:00:00.000Z",
      like: 10
    },
    {
      id: 10,
      title: "A rhetorical question used by a person who feels they are being given less consideration than someone else.",
      photo: "https://unsplash.com/photos/-wWRHIUklxM",
      user_id: 1,
      username: "brandon",
      create_at: "2022-01-01",
      update_at: "2022-01-01T04:00:00.000Z",
      like: 10
    }
  ],
  page: 1,
  limit: 10,
  total: 112,
  num_pages: 12
}

const AdminDashboardPage = () => {
  const [listItems, setListItems] = React.useState(response.list)
  const [page, setPage] = React.useState(1)
  let sdk = new MkdSDK()

  const dragItem = React.useRef(null)
  const dragOverItem = React.useRef(null)

  React.useEffect(() => {
    sdk.callRestAPI({
      payload: {},
      page,
      limit: 10
    }, 'PAGINATE')
  }, [page])

  const goToPrev = () => {
    setPage((cPage) => {
      if (cPage > 1) {
        return cPage - 1
      }
      return 1
    })
  }

  const goToNext = () => {
    setPage((cPage) => {
      if (cPage < response.num_pages) {
        return cPage + 1
      }
      return cPage
    })
  }

  const handleSort = () => {
    let _listItems = [...listItems]

    const draggedItemContent = _listItems.splice(dragItem.current, 1)[0]

    _listItems.splice(dragOverItem.current, 0, draggedItemContent)

    dragItem.current = null
    dragOverItem.current = null

    setListItems(_listItems)
  }

  return (
    <>
      <div className="w-full py-10 px-32 text-gray-700 bg-black">
        <div className=" mx-auto" style={{ maxWidth: '1216px' }}>
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

            <div className="flex justify-around items-center flex-shrink-0 flex-grow-0 text-xs bg-black-al rounded-2xl px-6 py-3">
              <span>30 July 2022</span>
              <span className="w-2 h-2 rounded-full bg-gray-700 mx-2"></span>
              <span className="bg-green py-1 px-3 rounded-md text-sm text-black">SUBMISSIONS OPEN</span>
              <span className="w-2 h-2 border rounded-full bg-gray-700 mx-2"></span>
              <span>11:34</span>
            </div>
          </div>

          <div className="grid items-center pl-6 mb-5" style={{ gridTemplateColumns: '50px repeat(2, 1fr) max-content' }}>
            <span>#</span>
            <span>Title</span>
            <span className="ml-5">Author</span>
            <span className="flex items-center">
              Most Liked
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10L12 14L16 10" stroke="#696969" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <ul className="flex flex-col gap-3 list-none">
            {listItems.map((item, index) => (
              <li className="grid items-center border rounded-lg text-base px-6 py-4 draggable" draggable={true} style={{ gridTemplateColumns: '50px repeat(2, 1fr) 50px' }} key={item.id}
                onDragStart={(e) => (dragItem.current = index)}
                onDragEnter={(e) => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}
              >
                <span>{index + 1}</span>
                <figure className="card-figure flex items-center gap-2">
                  <img className="w-28 h-16 rounded-lg" src={item.photo} alt='' />
                  <figcaption className="text-xl text-white font-thin">{item.title}</figcaption>
                </figure>

                <figure className="flex items-center gap-2 ml-3">
                  <img className="w-6 h-6 rounded-full" src={item.photo} alt='' />
                  <figcaption className="text-green-light font-thin">{item.username}</figcaption>
                </figure>

                <div className="flex items-center gap-2">
                  <span className="text-white">{item.like}</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0085 3.75833V16.25" stroke="#9BFF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.01929 8.76167L10.0001 3.74834L14.981 8.76167" stroke="#9BFF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-5 mt-8">
            <button className="font-thin text-base text-black bg-green rounded-3xl px-6 py-3" onClick={goToPrev}>prev</button>
            <button className="font-thin text-base text-black bg-green rounded-3xl px-6 py-3" onClick={goToNext}>next</button>
          </div>
        </div>
      </div>
    </>
  );
};


export default AdminDashboardPage;
