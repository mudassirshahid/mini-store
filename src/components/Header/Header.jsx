import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useProductContext } from '../../ProductContext.jsx/ProductContext';
import { Link, useNavigate } from 'react-router-dom';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', to: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', to: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', to: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', to: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', to: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', to: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', to: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigate = useNavigate();

const handleLoginButton = () => {
  if(localStorage.getItem('token')) {
    navigate('/login')
    localStorage.removeItem('token')
  }
}
useEffect(() => {
  handleLoginButton()
},[])
  
  return (
    <header className="bg-white">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 text-3xl font-sans font-medium">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            TechStore.
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">

          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </Link>
          {/* <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
            Services
          </Link> */}
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm  leading-6 text-gray-900">
              Assets
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link to={item.to} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link to="products" className="text-sm font-semibold leading-6 text-gray-900">
            Products
          </Link>
          {/* <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
            Watches
          </Link> */}
          {/* <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
            Sale
          </Link> */}
          {/* <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
            Blog
          </Link> */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to='login'>
          <button className="text-sm font-semibold leading-6 text-gray-900" onClick={handleLoginButton}>
           {localStorage.getItem('token') ? 'Log out' : "Log in"} <span aria-hidden="true">&rarr;</span>
          </button>
          </Link>
          {/* <div to="#" className="text-2xl font-semibold leading-6 text-gray-900">
            Cart <sup>{'3'}</sup>
          </div> */}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Assets
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            to={item.to}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </Link>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </Link>
              </div>
              <div className="py-6">
              <Link to='login'>
          <button className="text-sm font-semibold leading-6 text-gray-900" onClick={handleLoginButton}>
           {localStorage.getItem('token') ? 'Log out' : "Log in"} <span aria-hidden="true">&rarr;</span>
          </button>
          </Link>
                {/* <div to="#" className="text-2xl font-semibold leading-6 text-gray-900">
            Cart <sup>{'3'}</sup>
          </div> */}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
