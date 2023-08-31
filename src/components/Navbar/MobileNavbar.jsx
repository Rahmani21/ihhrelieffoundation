import { faCheck, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { informationDropItem, institutionalDropItem, scopeDropItems,documentDropItem, agendaDropItems, whatCanYouDoDropItems, logDropItems } from "../../assets/Data/Data";
import { Link } from "react-router-dom";



const MobileNavbar = () => {
  const [followToggle, setFollowToggle] = useState(false);
  const [languageToggle, setLanguageToggle] = useState(false);
  const [currencyToggle, setCurrencyToggle] = useState(false);

  const [menuBarToggle1, setMenuBarToggle1] = useState(false);
  const [menuBarToggle2, setMenuBarToggle2] = useState(false);
  const [menuBarToggle3, setMenuBarToggle3] = useState(false);
  const [loginToggle, setLoginToggle] = useState(false);


  return (
    <div>
      <div className="flex flex-col">
        <div className="py-5 px-5 bg-white border border-solid w-[100vw] text-[#838080] absolute top-0 left-0">
          <div>
            <div className="flex flex-row gap-5">
              <button onClick={() => setFollowToggle(true)}>
                <i className="fa fa-solid fa-check mr-2 bg-black text-white rounded-full p-1"></i>
                <FontAwesomeIcon icon={faCheck} className=" bg-black text-white rounded-full p-1" />
                Follow
              </button>
              <button onClick={() => setLanguageToggle(true)}>
                <i className="fa fa-solid fa-globe mr-2"></i>
                <FontAwesomeIcon icon={faGlobe} className="top-14" />
                EN
              </button>
              <button onClick={() => setCurrencyToggle(true)}>
                <i className="fa fa-language mr-2"></i>
                TRY
              </button>
            </div>
            {followToggle && (
              <div className="fixed h-72 px-5 w-[100vw] top-0 left-0 z-20 bg-white flex flex-col shadow-lg gap-8 py-8 ">
                <div className="flex flex-row gap-5">
                  <button onClick={(prev) => setFollowToggle(!prev)}>
                    <i className="fa fa-solid fa-check mr-2 bg-black text-white rounded-full p-1"></i>
                    Follow
                  </button>
                  <button onClick={(prev) => setLanguageToggle(!prev)}>
                    <i className="fa fa-solid fa-globe mr-2"></i>
                    EN
                  </button>
                  <button onClick={(prev) => setCurrencyToggle(!prev)}>
                    <i className="fa fa-language mr-2"></i>
                    TRY
                  </button>
                </div>
                <ul className="absolute top-14 left-6 mt-5 space-y-5">
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Youtube</li>
                  <li className="">
                    <i
                      className="fa-solid fa-xmark absolute text-3xl cursor-pointer ml-10"
                      onClick={(prev) => setFollowToggle(!prev)}
                    />
                    Close
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="py-5 px-5 bg-white border border-solid w-[100vw] absolute top-0 left-0">
          <div>
            <div className="flex flex-row gap-5">
              <button onClick={(prev) => setFollowToggle(!prev)}>
                <i className="fa fa-solid fa-check mr-2 bg-black text-white rounded-full p-1"></i>
                Follow
              </button>
              <button onClick={(prev) => setLanguageToggle(!prev)}>
                <i className="fa fa-solid fa-globe mr-2"></i>
                EN
              </button>
              <button onClick={(prev) => setCurrencyToggle(!prev)}>
                <i className="fa fa-language mr-2"></i>
                TRY
              </button>
            </div>
            {languageToggle && (
              <div className="fixed h-72 px-5 w-[100vw] top-0 left-0 z-20 bg-white flex flex-col shadow-lg gap-8 py-8 ">
                <div className="flex flex-row gap-5">
                  <button onClick={(prev) => setFollowToggle(!prev)}>
                    <i className="fa fa-solid fa-check mr-2 bg-black text-white rounded-full p-1"></i>
                    Follow
                  </button>
                  <button onClick={(prev) => setLanguageToggle(!prev)}>
                    <i className="fa fa-solid fa-globe mr-2"></i>
                    EN
                  </button>
                  <button onClick={(prev) => setCurrencyToggle(!prev)}>
                    Follow
                  </button>
                </div>
                <ul className="absolute top-14 left-7 mt-5 space-y-5">
                  <li>Turkce (TR)</li>
                  <li>English (EN)</li>
                  <li>العربیه (AR)</li>
                  <li className="">
                    <i
                      className="fa-solid fa-xmark absolute text-3xl cursor-pointer ml-10"
                      onClick={(prev) => setLanguageToggle(!prev)}
                    />
                    Close
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="py-5 px-5 bg-white border border-solid w-[100vw] absolute top-0 left-0">
          <div>
            <div className="flex flex-row gap-5">
              <button onClick={() => setFollowToggle(true)}>
                <i className="fa fa-solid fa-check mr-2 bg-black text-white rounded-full p-1"></i>
                Follow
              </button>
              <button onClick={() => setLanguageToggle(true)}>
                <i className="fa fa-solid fa-globe mr-2"></i>
                EN
              </button>
              <button onClick={() => setCurrencyToggle(true)}>
                <i className="fa fa-language mr-2"></i>
                TRY
              </button>
            </div>
            {currencyToggle && (
              <div className="fixed h-72 px-5 w-[100vw] top-0 left-0 z-20 bg-white flex flex-col shadow-lg gap-8 py-8 ">
                <div className="flex flex-row gap-5">
                  <button onClick={(prev) => setFollowToggle(!prev)}>
                    <i className="fa fa-solid fa-check mr-2 bg-black text-white rounded-full p-1"></i>
                    Follow
                  </button>
                  <button onClick={(prev) => setLanguageToggle(!prev)}>
                    <i className="fa fa-solid fa-globe mr-2"></i>
                    EN
                  </button>
                  <button onClick={(prev) => setCurrencyToggle(!prev)}>
                    <i className="fa fa-language mr-2"></i>
                    TRY
                  </button>
                </div>
                <ul className="absolute top-14 left-6 mt-5 space-y-5">
                  <li>TRY</li>
                  <li>USD</li>
                  <li>EUR</li>
                  <li>GBP</li>
                  <li className="">
                    <i
                      className="fa-solid fa-xmark absolute text-3xl cursor-pointer ml-10"
                      onClick={(prev) => setCurrencyToggle(!prev)}
                    />
                    Close
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className=" w-[100vw] absolute top-[11%] left-0 py-5 ">
          <div className="px-5">
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-[100%] bg-gray-100 text-gray-700 border-2 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-gray-200 focus:border-green-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Search within the site"
                  />
                </div>
              </div>
            </form>
          </div>


          <div>
            <div
              className="flex justify-between p-5 border-b-2 "
              onClick={() => setMenuBarToggle1(true)}
            >
              <h1>Who are we</h1>
              <i className="fa fa-sharp fa-solid fa-plus cursor-pointer"></i>
            </div>
            {menuBarToggle1 && (
              <div className="fixed h-[50%] overflow-auto px-5 w-[100vw] top-40 left-0 z-20 bg-white flex flex-col shadow-lg gap-8 py-8 ">
                <div
                  className=" fixed top-40 left-6 z-10 flex justify-between"
                  onClick={(prev) => setMenuBarToggle1(!prev)}
                >
                  <h1>Who are we</h1>
                  <i className=" absolute top-1 left-96 fa fa-sharp fa-solid fa-minus cursor-pointer"></i>
                </div>

                <ul className=" absolute top-14 ml-5 mt-5 space-y-2 h-auto">
                {
                  institutionalDropItem.map(item =>{
                    return <li key={item.id}>
                    <FontAwesomeIcon className="mr-2 text-yellow" icon={item.icon} />
                    <Link to={item.href} >{item.dropListItemName}</Link>
                    </li>
                  })
                }  
                {
                  informationDropItem.map(item =>{
                    return <li key={item.id}>
                    <FontAwesomeIcon className="mr-2 text-yellow" icon={item.icon} />
                    <Link to={item.href} >{item.dropListItemName}</Link>
                    </li>
                  })
                }  
                {
                  scopeDropItems.map(item =>{
                    return <li key={item.id}>
                    <FontAwesomeIcon className="mr-2 text-yellow" icon={item.icon} />
                    <Link to={item.href} >{item.dropListItemName}</Link>
                    </li>
                  })
                }  
                </ul>
              </div>
            )}
          </div>

          <div>
            <div
              className="flex justify-between p-5 border-b-2 "
              onClick={() => setMenuBarToggle2(true)}
            >
              <h1>What we do</h1>
              <i className="fa fa-sharp fa-solid fa-plus cursor-pointer"></i>
            </div>
            {menuBarToggle2 && (
              <div className="fixed h-[50%] overflow-auto px-5 w-[100vw] top-40 left-0 z-20 bg-white flex flex-col shadow-lg gap-8 py-8 ">
                <div
                className=" fixed top-40 left-6 z-10 flex justify-between"
                  onClick={(prev) => setMenuBarToggle2(!prev)}
                >
                <h1>What we do</h1>
                <i className=" absolute left-96 top-1 fa fa-sharp fa-solid fa-minus cursor-pointer"></i>
                </div>
                <ul className=" absolute top-14 ml-5 mt-5 space-y-5">
                {
                  scopeDropItems.map(item =>{
                    return <li key={item.id}>
                    <FontAwesomeIcon className="mr-2 text-yellow" icon={item.icon} />
                    <Link to={item.href} >{item.dropListItemName}</Link>
                    </li>
                  })
                }  
                {
                  agendaDropItems.map(item =>{
                    return <li key={item.id}>
                    <FontAwesomeIcon className="mr-2 text-yellow" icon={item.icon} />
                    <Link to={item.href} >{item.dropListItemName}</Link>
                    </li>
                  })
                }  
                <li>
                
                </li>

                </ul>
              </div>
            )}
          </div>




          <div>
            <div
              className="flex justify-between p-5 border-b-2 "
              onClick={() => setMenuBarToggle3(true)}
            >
              <h1>What can you do</h1>
              <i className="fa fa-sharp fa-solid fa-plus cursor-pointer"></i>
            </div>
            {menuBarToggle3 && (
              <div className="fixed h-[100%] overflow-auto px-5 w-[100vw] top-40 left-0 z-20 bg-white flex flex-col shadow-lg gap-8 py-8 ">
                <div
                  className="flex justify-between"
                  onClick={(prev) => setMenuBarToggle3(!prev)}
                >
                <h1>What can you do</h1>
                  <i className="fa fa-sharp fa-solid fa-minus cursor-pointer"></i>
                </div>
                <ul className=" absolute top-14 ml-5 mt-5 space-y-5">
                {
                  whatCanYouDoDropItems.map(item =>{
                    return <li key={item.id}>
                    <FontAwesomeIcon className="mr-2 text-yellow" icon={item.icon} />
                    <Link to={item.href} >{item.dropListItemName}</Link>
                    </li>
                  })
                }  
                </ul>
              </div>
            )}
          </div>

          <div>
            <div
              className="flex justify-between p-5 border-b-2 "
              onClick={() => setLoginToggle(true)}
            >
              <h1>Login</h1>
              <i className="fa fa-sharp fa-solid fa-plus cursor-pointer"></i>
            </div>
            {loginToggle && (
              <div className="fixed h-[100%] overflow-auto px-5 w-[100vw] top-40 left-0 z-20 bg-white flex flex-col shadow-lg gap-8 py-8 ">
                <div
                  className="flex justify-between"
                  onClick={(prev) => setLoginToggle(!prev)}
                >
                <h1>Login</h1>
                  <i className="fa fa-sharp fa-solid fa-minus cursor-pointer"></i>
                </div>
                <ul className=" absolute top-14 ml-5 mt-5 space-y-5">
                {
                  logDropItems.map(item =>{
                    return <li key={item.id}>
                    <FontAwesomeIcon className="mr-2 text-yellow" icon={item.icon} />
                    <Link to={item.href} >{item.dropListItemName}</Link>
                    </li>
                  })
                } 
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
