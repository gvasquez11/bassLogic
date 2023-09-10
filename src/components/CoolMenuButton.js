import React from 'react'

function CoolMenuButton({isOpen, onClick, genericHamburgerLine}) {
  return (
    <>
        <button
            className="block md:hidden h-12 w-12 flex flex-col justify-center items-center group"
            onClick={onClick}
        >
            <div
                className={`${genericHamburgerLine} ${
                    isOpen
                        ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
            <div
                className={`${genericHamburgerLine} ${
                    isOpen
                        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                }`}
            />
        </button>
    </>
  )
}

export default CoolMenuButton