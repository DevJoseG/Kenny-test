import { FaChevronDown } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
const App = () => (
  <main className="relative h-screen flex justify-center items-center">
    {/* Main section */}
    <section className="containerall bg-gray-full rounded-lg p-4 h-auto relative">
      {/* Title section */}
      <div className="title-section flex items-center relative justify-center">
        <div className="absolute left-0 top-0 rounded-full bg-gray-secondary w-10 h-10">
          <button className="w-full h-full secondary-letters text-xl">x</button>
        </div>
        <div className="title"><h1 className="text-2xl main-letters text-center">Schedule Details</h1></div>
      </div>
      {/* Title section end*/}
      {/* Main section container*/}
      <div className="main-section-container p-6">
        {/* Start section */}
        <div className="start-section flex max-h-14 items-center mb-6">
          <p className="text-xl main-letters w-14">Starts</p>
          <div className="selectbox relative rounded-full bg-gray-secondary border-gray w-44 py-1.5 px-5 text-center flex items-center justify-center">
            <select className='w-full' name="" id="">
              <option value="">May 16, 2023</option>
              <option value="">May 17, 2023</option>
              <option value="">May 18, 2023</option>
            </select>
            < FaChevronDown className="absolute right-5" />
          </div>
          < FaMinus  />
          <div className="selectbox relative rounded-full bg-gray-secondary border-gray w-44 py-1.5 px-5 text-center flex items-center justify-center">
            <select className='w-full' name="" id="">
              <option value="">Set Time</option>
              <option value="">7:00 AM</option>
              <option value="">3:00 PM</option>
            </select>
            < FaChevronDown className="absolute right-5" />
          </div>
        </div>
        {/* Start section end*/}
        {/* End section */}
        <div className="start-section flex max-h-14 items-center mb-6">
          <p className="text-xl main-letters w-14">Ends</p>
          <div className="selectbox relative rounded-full bg-gray-secondary border-gray w-44 py-1.5 px-5 text-center flex items-center justify-center">
            <select className='w-full' name="" id="">
              <option value="">May 16, 2023</option>
              <option value="">May 17, 2023</option>
              <option value="">May 18, 2023</option>
            </select>
            < FaChevronDown className="absolute right-5" />
          </div>
          < FaMinus  />
          <div className="selectbox relative rounded-full bg-gray-secondary border-gray w-44 py-1.5 px-5 text-center flex items-center justify-center">
            <select className='w-full' name="" id="">
              <option value="">Set Time</option>
              <option value="">7:00 AM</option>
              <option value="">3:00 PM</option>
            </select>
            < FaChevronDown className="absolute right-5" />
          </div>
        </div>
        {/* End section end */}
        {/* Notes section */}
        <div className="notes-section bg-gray-secondary rounded-lg border-gray">
          <textarea className="text-center secondary-letter w-full h-full bg-gray-secondary rounded-lg" name="" placeholder="Notes" id="" cols="" rows="4"></textarea>
        </div>
        {/* Notes section end*/}
        {/* Save button section */}
        <div className="save-button mt-5">
          <div className="text-center">
            <button className="w-32 bg-gradient-color text-white rounded-full text-2xl py-2">Save</button>
          </div>
        </div>
      </div>
      {/* Save button section end */}
      {/* Main section container end*/}
      {/* Corner section */}
      <div className="corner"></div>
      {/* Corner section end */}
    </section>
    {/* Main section end*/}
  </main>
);

export default App;