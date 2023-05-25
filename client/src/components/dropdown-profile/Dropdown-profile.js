import React from "react";
import { PROFILE_DROPDOWN_MENU } from "../../shared/constant";

function DropdownProfile() {
  return (
    <div className="col-lg-3 col-md-3 col-sm-3">
      <div className="d-flex justify-content-center p-2">
        <div className="btn-group">
          <button
            className="btn btn-profile"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            id="dropdown-menu-css"
          >
            <li className="dropdown-item mb-2 mt-2 text-center">
              <a className="nav-link" href={PROFILE_DROPDOWN_MENU.PROFILE.LINK}>
                {PROFILE_DROPDOWN_MENU.PROFILE.NAME}
              </a>
            </li>
            {/* IF ADMIN LOGGED IN */}
            <li className="dropdown-item mb-2 text-center">
              <a
                className="nav-link"
                href={PROFILE_DROPDOWN_MENU.ADMIN_CONSOLE.LINK}
              >
                {PROFILE_DROPDOWN_MENU.ADMIN_CONSOLE.NAME}
              </a>
            </li>
            <li className="dropdown-item mb-2 text-center">
              <a
                className="nav-link"
                href={PROFILE_DROPDOWN_MENU.PURCHASE_HISTORY.LINK}
              >
                {PROFILE_DROPDOWN_MENU.PURCHASE_HISTORY.NAME}
              </a>
            </li>
            <li className="dropdown-item mb-2 text-center">
              <a
                className="nav-link"
                href={PROFILE_DROPDOWN_MENU.WISHLIST.LINK}
              >
                {PROFILE_DROPDOWN_MENU.WISHLIST.NAME}
              </a>
            </li>
            <li className="dropdown-item mb-2 text-center">
              <a
                className="nav-link"
                href={PROFILE_DROPDOWN_MENU.SHIPPING_ADDRESS.LINK}
              >
                {PROFILE_DROPDOWN_MENU.SHIPPING_ADDRESS.NAME}
              </a>
            </li>
            <li className="dropdown-item mb-2 text-center">
              <a
                className="nav-link"
                href={PROFILE_DROPDOWN_MENU.ORDER_AND_DELIERY.LINK}
              >
                {PROFILE_DROPDOWN_MENU.ORDER_AND_DELIERY.NAME}
              </a>
            </li>
            <li className="dropdown-item mb-2 text-center">
              <a
                className="nav-link"
                href={PROFILE_DROPDOWN_MENU.PAYMENT_AND_PRICING.LINK}
              >
                {PROFILE_DROPDOWN_MENU.PAYMENT_AND_PRICING.NAME}
              </a>
            </li>
            <li className="dropdown-item mb-2 text-center">
              <a
                className="nav-link"
                href={PROFILE_DROPDOWN_MENU.RETURN_AND_REFUND.LINK}
              >
                {PROFILE_DROPDOWN_MENU.RETURN_AND_REFUND.NAME}
              </a>
            </li>
            <li className="dropdown-item mb-2 text-center">
              <a className="nav-link" href={PROFILE_DROPDOWN_MENU.SETTING.LINK}>
                {PROFILE_DROPDOWN_MENU.SETTING.NAME}
              </a>
            </li>
            <li>
              <hr className={PROFILE_DROPDOWN_MENU.DIVIDER.CLASSNAME} />
            </li>
            <li className="dropdown-item text-center">
              <a className="nav-link" href={PROFILE_DROPDOWN_MENU.LOGOUT.LINK}>
                {PROFILE_DROPDOWN_MENU.LOGOUT.NAME}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DropdownProfile;
