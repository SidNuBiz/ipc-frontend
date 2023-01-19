import { useEffect } from 'react';
import NavBar from '../../components/Misc/NavBar.jsx';
import Footer from '../../components/Misc/Footer.jsx';
import { whoWeArePageContents } from '../../data/siteContent.js';
import WhoWeAreSection from '../../components/About/WhoWeArePage/WhoWeAreSection.jsx';
import OurStorySection from '../../components/About/WhoWeArePage/OurStorySection.jsx';
import MeetTheTeamSection from '../../components/About/WhoWeArePage/MeetTheTeamSection.jsx';
import OurClientsSection from '../../components/About/WhoWeArePage/OurClientsSection.jsx';

const WhoWeArePage = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);


    const pageContent = whoWeArePageContents;


  return (
    <div className='bg-gradient-to-b from-white via-[#eaf8f5] to-white min-h-screen'>
      
        {/* NavBar */}

        <div>
            <NavBar />
        </div>

        {/* Page Sections */}

        <div className="animate-crossfade ">

            {/* Who We Are Section */}

            <div>
                <WhoWeAreSection whoWeAreSlides={pageContent.whoWeAreSlides} />
            </div>

            {/* Our Story Section */}

            <div>
                <OurStorySection ourStorySlides={pageContent.ourStorySlides} />
            </div>

            {/* Meet The Team Section */}

            <div className=''>
                <MeetTheTeamSection teamMembers={pageContent.teamMembers} />
            </div>

            {/* Our Clients Section */}

            <div>
                <OurClientsSection clients={pageContent.clients} />
            </div>

        </div>


        {/* Footer */}

        <div>
            <Footer />
        </div>

    </div>
  );
}


export default WhoWeArePage;