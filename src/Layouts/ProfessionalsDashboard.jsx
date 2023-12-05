import { NavLink, Outlet } from "react-router-dom";

const ProfessionalsDashboard = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="flex justify-between">
            <div className="w-64 min-h-screen hidden md:block bg-[#6db2da]">
              <ul className="menu p-4 fixed">
                <li>
                  <NavLink
                    to="/professional/professional_profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    PARTICIPANT PROFILE
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/participant/manage_camps_registered_camps"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    MANAGE REGISTERED CAMPS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/participant/payment_history"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    PAYMENT HISTORY
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/participant/feedback_and_ratings"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    FEEDBACK AND RATINGS
                  </NavLink>
                </li> */}
                <div className="divider"></div>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contactUs"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    CONTACT US
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/availableCamps"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    AVAILABLE CAMPS
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-[#F6F6F6] overflow-x-auto">
              <Outlet />
            </div>
          </div>
          <label
            htmlFor="my-drawer"
            className="btn md:hidden bg-[#6db2da] w-full drawer-button"
          >
            OPEN DRAWER
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="">
            {/* Sidebar content here */}
            <div className="w-50 min-h-screen md:hidden bg-[#6db2da]">
              <ul className="menu p-4">
                <li>
                  <NavLink
                    to="/professional/professional_profile"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    PARTICIPANT PROFILE
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/participant/manage_camps_registered_camps"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    MANAGE REGISTERED CAMPS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/participant/payment_history"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    PAYMENT HISTORY
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/participant/feedback_and_ratings"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    FEEDBACK AND RATINGS
                  </NavLink>
                </li> */}
                <div className="divider"></div>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contactUs"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    CONTACT US
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/availableCamps"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#91283d] hover:text-[#be1f3f] hover:font-bold underline font-bold"
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    AVAILABLE CAMPS
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsDashboard;
