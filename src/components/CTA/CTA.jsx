import './CTA.css'
import MainHeading from '../MainHeading/MainHeading'
import styles from '../../style'
import { useTranslation } from 'react-i18next'
// import {RiContactsLine} from 'react-icons/ri'
// import {GrLocation} from 'react-icons/gr'
import {CiLocationOn} from 'react-icons/ci'
import {BsTelephoneInbound} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
// import { useTranslation } from 'react-i18next'



// /send-email
const CTA = () => {

    
    const notifyError = () => {
        toast.error('Please fill in all the inputs', {
          position: toast.POSITION.TOP_CENTER
        });
      };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const { t } = useTranslation();

  const fetchData = async (event) => {
    event.preventDefault(); // Prevent default form submission
  
    // Check if any of the inputs is empty
    if (!name || !email || !msg) {
        toast.error("Please fill in all fields");
      return;
    }
    
    try {
      console.log(name);
      const formData = {
        name: name,
        email: email,
        msg: msg
      };
  
      const response = await axios.post('http://127.0.0.1:8000/api/send-email', formData);
      console.log(response.data);
      toast.success("Email is sent succefully");
      setName(''); // Clear the name input
      setEmail(''); // Clear the email input
      setMsg(''); // Clear the message input
    } catch (error) {
      console.error(error);
    }
  };
  
  

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
};

const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handleMsgChange = (event) => {
    setMsg(event.target.value);
  };


  return (
    <section id="contact" className={`contact ${styles.paddingY}`}>
        <MainHeading 
            properties = {{
                // icon: <RiContactsLine />,
                title: t('contactTitle'),
                subtitle: t('contactSubtitle'),
            }}
        />
        <div className={`${styles.paddingY} sm:px-16 px-6`}>
            <div className={`contact-touch mb-5`}>
                {/* <div className="contact-box"> */}
                    <span className='contact-number'>1</span>
                    <div className='contact-touch-info md:w-[75%]'>
                        <span className="touch-info-title">{t('contactHelpTitle1')}</span>
                        <span className="touch-info-details">{t('contactHelpInfo1')}</span>
                    </div>
                {/* </div> */}
            </div>
            <div className={`contact-touch mb-5`}>
                {/* <div className="contact-box"> */}
                    <span className='contact-number'>2</span>
                    <div className='contact-touch-info md:w-[75%]'>
                        <span className="touch-info-title">{t('contactHelpTitle2')}</span>
                        <span className="touch-info-details">
                        {t('contactHelpInfo2')}
                        </span>
                    </div>
                {/* </div> */}
            </div>
            <div className={`contact-touch`}>
                {/* <div className="contact-box"> */}
                    <span className='contact-number'>3</span>
                    <div className='contact-touch-info md:w-[75%]'>
                        <span className="touch-info-title">{t('contactHelpTitle3')}</span>
                        <span className="touch-info-details">{t('contactHelpInfo3')} </span>
                    </div>
                {/* </div> */}
            </div>
        </div>
        <div className="container-contact">
            <div className="contactInfo sm:px-16 px-6">
                <div className="box">
                    <div className="icon">
                        <CiLocationOn className='contat-icon' />
                    </div>
                    <div className="text mr-3">
                        <h3>{t('contactInfoAdress')}</h3>
                        <p>{t('contactInfoAdressSub')}</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BsTelephoneInbound className='contact-icon' />
                    </div>
                    <div className="text mr-3">
                        <h3>{t('contactInfoPhone')}</h3>
                        <p>{t('contactInfoPhoneSub')}</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <AiOutlineMail className='contact-icon' />
                    </div>
                    <div className="text mr-3">
                        <h3>{t('contactInfoEmail')}</h3>
                        <p>kaleem.edu.lb@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="contactForm sm:px-16 px-6">
                <form>
                    <h2>{t('contactFormHeader')}</h2>
                    <div className="inputBox">
                        <input id="nameMsg" value={name} type="text" onChange={handleNameChange} required />
                        <span>{t('contactFormName')}</span>
                    </div>
                    <div className="inputBox">
                        <input id="emailMsg" value={email} type="email" onChange={handleEmailChange} required />
                        <span>{t('contactFormMail')}</span>
                    </div>
                    <div className="inputBox">
                        <textarea id="areaMsg" value={msg} required="required" onChange={handleMsgChange}></textarea>
                        <span>{t('contactFormArea')}</span>
                    </div>
                    <div className="inputBox">
                        <input id="sendMsg" className='bg-blue-gradient' onClick={fetchData} type="submit" value={t('contactFormButton')} />
                        <p id="textMsg"></p>
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer
            className = "toast"
            position='top-right'
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme='light'
        />
    </section>
  )
}

export default CTA
