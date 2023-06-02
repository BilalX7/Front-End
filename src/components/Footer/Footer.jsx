import './Footer.css'
import {BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'
import styles from '../../style'

const Footer = () => {
  return (
    <footer>
      <ul>
        <li className={`${styles.paragraph} text-gradient`}>Social Media</li>
      </ul>
      <ul className='social-icon'>
        <li>
          <a href="https://www.facebook.com/bilal.koubar?mibextid=LQQJ4d" rel='noreferrer' target='_blank'><BsFacebook /></a>
        </li>
        <li>
          <a href="https://instagram.com/bilal_koubar?igshid=MjEwN2IyYWYwYw==" rel='noreferrer' target='_blank'><BsInstagram /></a>
        </li>
        <li>
          <a href="https://wa.me/message/KADANU5Y3FQKF1"><BsWhatsapp /></a>
        </li>
      </ul>
      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#services">Features</a>
        </li>
        <li>
          <a href="/books">Books</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p>Created By <span>Bilal Koubar </span>| &copy; 2023 All Right Reserved</p>
      <div className='d-grid'>
          <a href='https://wa.me/message/KADANU5Y3FQKF1' rel='noreferrer' target='_blank'>
            <button className='btn whattsapp btn-color'>
              <BsWhatsapp size={'2.5rem'}/>
            </button>
          </a>
      </div>
      <ScrollToTopButton className="scrollToTop" threshold={1000} />
    </footer>
  )
}

export default Footer
