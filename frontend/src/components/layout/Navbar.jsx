import { useState } from 'react'

import { Link } from 'react-router-dom'
import useWishlistStore from '../../store/wishlistStore'
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu
} from 'lucide-react'

import MegaMenu from './MegaMenu'

import { navigation } from '../../data/navigation'

import useCartStore from '../../store/cartStore'
import useAuthStore from '../../store/authStore'

export default function Navbar() {
  const { wishlist } =
  useWishlistStore()
  const [activeMenu, setActiveMenu] = useState(null)

  const { cart } = useCartStore()

  const { user, logout } = useAuthStore()

const [showUserMenu, setShowUserMenu] =
  useState(false)






const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 relative">

      {/* DESKTOP */}

      <div className="hidden lg:flex items-center justify-between px-8 xl:px-10 py-5 relative">

        {/* LEFT */}

        <div className="flex items-center gap-6 xl:gap-10">

          {navigation.map((item) => (

            <div
              key={item.title}
              onMouseEnter={() => setActiveMenu(item)}
            >

              <button className="text-[15px] font-medium hover:text-mustard transition">

                {item.title}

              </button>

            </div>

          ))}

          <Link
            to="/collections"
            className="text-[15px] font-medium hover:text-mustard transition"
          >

            Collections

          </Link>

        </div>

        {/* LOGO */}

        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
        >

          <div className="text-center leading-none">

            <h1 className="text-3xl font-black tracking-tight">

              DESI STITCH

            </h1>

            <p className="text-[11px] tracking-[4px] text-gray-500 mt-1">

              BY SHIVIKA

            </p>

          </div>

        </Link>

        {/* RIGHT */}

        <div className="flex items-center gap-5">

          <div className="hidden xl:flex items-center border border-gray-300 rounded-full px-4 py-2 w-[220px]">

            <input
              placeholder="Search..."
              className="outline-none flex-1 text-sm bg-transparent"
            />

            <Search
              size={18}
              strokeWidth={1.7}
            />

          </div>

         

         <div className="relative">

  {!user ? (

    <Link
      to="/login"
      className="hover:text-mustard transition"
    >

      <User
        size={22}
        strokeWidth={1.7}
      />

    </Link>

  ) : (

    <button

      onClick={() =>
        setShowUserMenu(
          !showUserMenu
        )
      }

      className="flex items-center gap-2"

    >

      <User
        size={22}
        strokeWidth={1.7}
      />

      <span className="text-sm font-medium">

        {user.name}

      </span>

    </button>

  )}

  {user && showUserMenu && (

    <div
      className="
        absolute
        right-0
        top-full
        mt-3
        w-56
        bg-white
        rounded-2xl
        shadow-xl
        border
        p-2
        z-50
      "
    >

      <Link

        to="/account"

        onClick={() =>
          setShowUserMenu(false)
        }

        className="
          block
          px-4
          py-3
          rounded-xl
          hover:bg-gray-100
        "

      >

        My Account

      </Link>

      <Link

        to="/my-orders"

        onClick={() =>
          setShowUserMenu(false)
        }

        className="
          block
          px-4
          py-3
          rounded-xl
          hover:bg-gray-100
        "

      >

        My Orders

      </Link>

      <button

        onClick={() => {

          logout()

          setShowUserMenu(false)

        }}

        className="
          w-full
          text-left
          px-4
          py-3
          rounded-xl
          hover:bg-gray-100
        "

      >

        Logout

      </button>

    </div>

  )}

</div>

<Link
  to="/wishlist"
  className="relative"
>

  <Heart
    size={22}
    strokeWidth={1.7}
  />

  {wishlist.length > 0 && (

    <div
      className="
        absolute
        -top-2
        -right-2
        bg-black
        text-white
        text-[10px]
        w-5
        h-5
        rounded-full
        flex
        items-center
        justify-center
      "
    >

      {wishlist.length}

    </div>

  )}

</Link>

<Link
  to="/cart"
  className="relative"
>

            <ShoppingBag
              size={22}
              strokeWidth={1.7}
            />

            <div className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">

              {cart.length}

            </div>

          </Link>

        </div>

      </div>

      {/* MEGA MENU */}

      {activeMenu && (

        <div

          onMouseEnter={() => setActiveMenu(activeMenu)}

          onMouseLeave={() => setActiveMenu(null)}

          className="absolute left-0 top-full w-full z-50"

        >

          <MegaMenu menu={activeMenu} />

        </div>

      )}

      {/* MOBILE */}

      <div className="lg:hidden flex items-center justify-between px-4 py-4">

       <button
  onClick={() =>
    setMobileMenuOpen(true)
  }
>
  <Menu size={26} />
</button>

        <Link to="/">

          <div className="text-center leading-none">

            <h1 className="text-xl font-black tracking-tight">

              DESI STITCH

            </h1>

            <p className="text-[9px] tracking-[3px] text-gray-500 mt-1">

              BY SHIVIKA

            </p>

          </div>

        </Link>

      <div className="flex items-center gap-4">

  <Link
    to="/wishlist"
    className="relative"
  >
    <Heart size={24} />

    {wishlist.length > 0 && (
      <div className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
        {wishlist.length}
      </div>
    )}
  </Link>

  <Link
    to="/cart"
    className="relative"
  >
    <ShoppingBag size={24} />

    <div className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
      {cart.length}
    </div>
  </Link>

</div>

      </div>


 {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() =>
              setMobileMenuOpen(false)
            }
          />

          <div
            className="
              fixed
              top-0
              left-0
              h-full
              w-72
              bg-white
              z-[60]
              shadow-xl
              p-6
            "
          >
            <button
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="mb-8 text-lg"
            >
              ✕
            </button>

            <div className="flex flex-col gap-5">

              <Link
                to="/shop"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                Shop
              </Link>

              <Link
                to="/collections"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                Collections
              </Link>

              <Link
                to="/about"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                About Us
              </Link>

              <Link
                to="/contact"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                Contact
              </Link>

              <hr />

              {!user ? (
                <Link
                  to="/login"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                >
                  Login
                </Link>
              ) : (
                <>
                  <Link
                    to="/account"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    My Account
                  </Link>

                  <Link
                    to="/my-orders"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    My Orders
                  </Link>

                  <button
                    className="text-left"
                    onClick={() => {
                      logout()
                      setMobileMenuOpen(false)
                    }}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}


    </nav>

  )
}