import { useEffect,useState,Fragment } from 'react';
import NavBar from '../../components/Misc/NavBar.jsx';
import Footer from '../../components/Misc/Footer.jsx';
import WhoWeAreSection from '../../components/About/WhoWeArePage/WhoWeAreSection.jsx';
import OurStorySection from '../../components/About/WhoWeArePage/OurStorySection.jsx';
import MeetTheTeamSection from '../../components/About/WhoWeArePage/MeetTheTeamSection.jsx';
import OurClientsSection from '../../components/About/WhoWeArePage/OurClientsSection.jsx';
import axios from 'axios';
import Loader from '../Loader.jsx';
import url from '../../utils/baseApi.js';
import { useAlert } from 'react-alert';


const WhoWeArePage = () => {

    const alert = useAlert()

    const [whoWeArePageDetails,setWhoWeArePageDetails] = useState([])
    const [teamMembers,setTeamMembers] = useState([])
    const [ourClients,setOurClients] = useState([])

    async function fetchData(){
        try{
            const {data} =  await axios.get(`${url}/api/v1/who-we-are-page-details`)
            setWhoWeArePageDetails(data.details)
            const {data:team} = await axios.get(`${url}/api/v1/team-member/all`)
            setTeamMembers(team.details)
            const {data:clients} = await axios.get(`${url}/api/v1/our-clients/images`)
            setOurClients(clients.item.imageGallery)
        }catch(error){
            alert.error(error.response.data.message)
        }
        
       
    }

    useEffect(() => {
        fetchData()
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);


  return (
    <Fragment>
    {whoWeArePageDetails.length === 0 || teamMembers.length === 0  ? (
      <Loader />
    ) : (
    <Fragment>
        <div className='bg-gradient-to-b from-white via-[#eaf8f5] to-white min-h-screen'>
        
            {/* NavBar */}

            <div>
                <NavBar />
            </div>

            {/* Page Sections */}

            <div className="animate-crossfade ">

                {/* Who We Are Section */}

                <div>
                    {
                        whoWeArePageDetails.length > 0 && (
                            <WhoWeAreSection whoWeAreSlides={whoWeArePageDetails[1].whoWeAreSection.whoWeAre} />
                        )
                    }
                    
                </div>

                {/* Our Story Section */}

                <div>
                    {
                        whoWeArePageDetails.length > 0 && (
                            <OurStorySection ourStorySlides={whoWeArePageDetails[0].ourStorySection.ourStory} />
                        )
                    }
                    
                </div>

                {/* Meet The Team Section */}

                <div className=''>
                    {
                        teamMembers.length > 0 && (
                            <MeetTheTeamSection teamMembers={teamMembers} />
                        )
                    }
                    
                </div>

                {/* Our Clients Section */}

                <div>
                    {
                        ourClients.length > 0 && (
                            <OurClientsSection clients={ourClients} />
                        )
                    }
                    
                </div>

            </div>


            {/* Footer */}

            <div>
                <Footer />
            </div>

        </div>
    
    </Fragment>
      )}
    </Fragment>
  );
}


export default WhoWeArePage;