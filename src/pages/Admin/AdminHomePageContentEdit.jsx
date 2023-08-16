import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import SideBar from '../../components/Admin/Misc/SideBar';
import axios from 'axios';
import Cookies from 'js-cookie';

const AdminHomePageContentEdit = () => {
  const alert = useAlert();

  const [section1title, setSection1Title] = useState('');
  const [section1content, setSection1Content] = useState('');
  const [section2title, setSection2Title] = useState('');
  const [section2content, setSection2Content] = useState('');
  const [section3title, setSection3Title] = useState('');
  const [section3content, setSection3Content] = useState('');

  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [map, setMap] = useState('');

  async function updateOverview() {
    if (section1title.trim() === "" || section1content.trim() === "" ||
        section2title.trim() === "" || section2content.trim() === "" ||
        section3title.trim() === "" || section3content.trim() === "") {
      return alert.error("All fields in Overview section are required");
    }

    try {
      const token = Cookies.get('token');
      const config = {
        headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
      };
      const { data } = await axios.put("http://localhost:8080/api/v1/home-page-overview-details/update",
        {
          mission: { title: section1title, content: section1content },
          vision: { title: section2title, content: section2content },
          quality: { title: section3title, content: section3content }
        },
        config
      );
      if (data.success) {
        alert.success("Successfully Updated");
      }
    } catch (error) {
      alert.error(error.response.data.error);
    }
  }

  async function updateContact() {
    if (location.trim() === "" || email.trim() === "" || phone.trim() === "" || map.trim() === "") {
      return alert.error("All fields in Contact Info section are required");
    }

    try {
      const token = Cookies.get('token');
      const config = {
        headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
      };
      const { data } = await axios.put("http://localhost:8080/api/v1/home-page-contact-details/update",
        {
          location,
          email,
          phone,
          map
        },
        config
      );
      if (data.success) {
        alert.success("Successfully Updated");
      }
    } catch (error) {
      alert.error(error.response.data.error);
    }
  }

  async function fetchData() {
    const { data } = await axios.get('http://localhost:8080/api/v1/home-page-details');
    const overviewSection = data.details[1].overviewSection;
    const contactSection = data.details[0].contactSection;

    setSection1Title(overviewSection.mission.title);
    setSection1Content(overviewSection.mission.content);
    setSection2Title(overviewSection.vision.title);
    setSection2Content(overviewSection.vision.content);
    setSection3Title(overviewSection.quality.title);
    setSection3Content(overviewSection.quality.content);
    setLocation(contactSection.location);
    setEmail(contactSection.email);
    setPhone(contactSection.phone);
    setMap(contactSection.map);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="lg:grid lg:grid-cols-5">
        <div className="col-span-1 z-50 relative">
          <SideBar />
        </div>
        <div className="col-span-4 md:px-5 sm:px-5 z-30 relative lg:pt-10 md:pt-32 sm:pt-32 animate-crossfade bg-gradient-to-br from-[#eaf8f5] to-transparent min-h-screen pb-20 overflow-y-clip">
          <div>
            <div className="mb-5 flex justify-between">
              <button onClick={() => { window.history.go(-1) }} className="text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2">&#x2190;Back</button>
            </div>
            <div className="mb-5 pb-5 border-b-[1px] border-b-slate-300">
              <h2 className="text-4xl font-semibold text-gray-600">Update Overview Content</h2>
            </div>
            <div className='mt-10'>
              {/* Section 1 */}
              <div className='mb-10'>
                <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Section 1</label>
                <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={section1title} onChange={(e) => setSection1Title(e.target.value)} required />
              </div>
              <div className='mt-5 '>
                <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>
                  <tbody>
                    <tr className='text-gray-600 font-semibold'>
                      <td>
                        <textarea rows="6" id='new-service-point' type="text" className='mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => { setSection1Content(e.target.value) }} value={section1content} placeholder='Paragraph' required />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='mt-10'>
              {/* Section 2 */}
              <div className='mb-10'>
                <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Section 2</label>
                <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={section2title} onChange={(e) => setSection2Title(e.target.value)} required />
              </div>
              <div className='mt-5 '>
                <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>
                  <tbody>
                    <tr className='text-gray-600 font-semibold'>
                      <td>
                        <textarea rows="6" id='new-service-point' type="text" className='mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => { setSection2Content(e.target.value) }} value={section2content} placeholder='Paragraph' required />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='mt-10'>
              {/* Section 3 */}
              <div className='mb-10'>
                <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Section 3</label>
                <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={section3title} onChange={(e) => setSection3Title(e.target.value)} required />
              </div>
              <div className='mt-5 '>
                <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>
                  <tbody>
                    <tr className='text-gray-600 font-semibold'>
                      <td>
                        <textarea rows="6" id='new-service-point' type="text" className='mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => { setSection3Content(e.target.value) }} value={section3content} placeholder='Paragraph' required />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <button onClick={updateOverview} className="my-10 bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
          </div>
          <div>
            <div className="mb-5 mt-10 pb-5 border-b-[1px] border-b-slate-300">
              <h2 className="text-4xl font-semibold text-gray-600">Update Contact Info</h2>
            </div>
            <div className='mt-10'>
              {/* Location */}
              <div className='mb-10'>
                <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Location</label>
                <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={location} onChange={(e) => setLocation(e.target.value)} required />
              </div>
              {/* Email */}
              <div className='mb-10'>
                <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Email</label>
                <input id='service-name' type="email" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              {/* Phone */}
              <div className='mb-10'>
                <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Phone</label>
                <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              {/* Map */}
              <div className='mb-10'>
                <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Map</label>
                <input id='service-name' type="url" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={map} onChange={(e) => setMap(e.target.value)} required />
              </div>
            </div>
            <div className="mb-5 mt-10 flex justify-between">
              <button onClick={updateContact} className="bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePageContentEdit;
