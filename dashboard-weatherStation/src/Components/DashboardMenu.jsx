import { useState } from "react";

import React from 'react'

export default function DasboardMenu() {
    const [abierto, setAbierto] = useState(false)
  return (
    <div className="relative inline-block text-left">
        <div>
            <button
             className="inline-flex justify-center w-full rounded-md font-bold text-3xl text-white hover:text-black cursor-pointer"
            onClick={() => setAbierto(!abierto)}
            >
              Menu
            </button>
        </div>

        { abierto && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Opción 1</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Opción 2</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Opción 3</a>
                    </div>
                  </div>
        )

        }
    </div>
  )
}
