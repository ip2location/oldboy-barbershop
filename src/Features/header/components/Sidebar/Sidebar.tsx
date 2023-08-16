import { ReactElement } from 'react';
import { Cities } from '../Cities';

interface SidebarProps {
  setIsOpen: () => void;
}

export const Sidebar = ({ setIsOpen }: SidebarProps): ReactElement => {
  return (
    <div
      className="relative z-50"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 overflow-hidden">
        <div
          className="fixed inset-0 w-full h-full bg-opacity-tan opacity-50"
          onClick={setIsOpen}
        />
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md">
            {/* Close function and Icon */}
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="absolute top-0  flex pt-4 sm:-ml-10 sm:pr-4">
                <button
                  onClick={setIsOpen}
                  type="button"
                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl text-black m-0 ">
                {/* Search area */}
                <form>
                  <div className="relative m-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      className="block w-full p-4 h-10 pl-10 text-base text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Найти города"
                      required
                    />
                  </div>
                </form>

                {/* Hardcoded cities imported */}
                <div>
                  <Cities />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
