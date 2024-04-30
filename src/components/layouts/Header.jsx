import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ArrowRightEndOnRectangleIcon, ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../../store/slices/sidebar'
import AuthContext from '../../contexts/AuthContext'


export default function Header() {
      
  const showSidebar = useSelector(state => state.sidebar.show)
  const user = useContext(AuthContext)
  const dispatcher = useDispatch()

  const handleClick = () => {
    dispatcher(toggle())
  }


  return (
    <nav className="bg-gray-800 fixed left-0 right-0 z-50 shadow-md shadow-slate-900" dir='rtl'>
      
          <div className="mx-auto px-3 sm:px-5 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center">
                {/* Mobile menu button*/}
                <button onClick={handleClick} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {showSidebar ? (
                    <ArrowRightEndOnRectangleIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <ArrowLeftEndOnRectangleIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch ">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
         
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:mr-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile */}
                <Menu as="div" className="relative mr-3">
                  <div>
                    <div className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

    </nav>
  )
}
