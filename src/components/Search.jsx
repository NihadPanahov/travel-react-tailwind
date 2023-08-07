import React from "react";
import { RiCustomerService2Full, RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Exquisite Getaways: Luxury Included Escapes for Couples.</h2>
          <p className="py-4">
            Embark on an unparalleled journey of opulent Caribbean all-inclusive
            getaways for couples at BEACHES Resorts. Our opulent beachfront
            havens, nestled within the most stunning tropical landscapes and
            exquisite coastlines in Saint Lucia, Jamaica, Antigua, The Bahamas,
            Grenada, Barbados, and Curaçao, present boundless options of gourmet
            dining, distinctive bars offering premium spirits and wines, and a
            plethora of both land and water activities, including complimentary
            access to our golf resorts and professional scuba diving at most of
            our locations. Should you be orchestrating a wedding event, BEACHES
            stands as the forefront in Caribbean destination weddings and
            honeymoon packages.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2 uppercase">Forefront in Hospitality</h3>
              <p className="py-1 uppercase">
                AProviding Unmatched All-Inclusive Services for Two Decades Straight
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-purple-900 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4 hover:scale-110 hover:duration-200 hover:ease-in-out">
            Rates & Availabilities
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
