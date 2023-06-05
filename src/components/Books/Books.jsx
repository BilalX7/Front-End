// import  { Component } from "react";
// import "./Books.css";
// import axios from "axios";
// import BookItem from "../BookItem/BookItem";
// import '../../pages/BookPage/BookPage';
// import MainHeading from "../MainHeading/MainHeading";
// import styles from "../../style";
// // import Button from "../Button/Button";
// import {MdExpandMore, MdExpandLess} from 'react-icons/md'

// class Books extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       item: "",
//       books: [],
//       category: [],
//       value: "",
//       language: "",
//       showMore: true,
//       max: 6, 
//       data: {
//         categoryOne: [
//           {
//           },
//         ],
//         categoryTwo: [
//           { 
//           },
//         ],
//         categoryThree: [
//           {
//           },
//         ],
//         categoryFour: [
//           { 
//           },
//         ],
//       },
//     };
//   }

//   componentDidMount() {
//     // this.fetchData();
//     this.data();
//     this.language();
//   }

//   language = () => {
//     console.log(localStorage.getItem('language'));
//     const languageValue = localStorage.getItem("language")
//     // this.state.language = localStorage.getItem("language");
//     if (localStorage.getItem('language') == 'ar') {
//       document.documentElement.setAttribute('dir', languageValue === 'ar' ? 'rtl' : 'ltr');
//     } 
//   }

//   async data() {
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/api/books");
//       // console.log(response.data);
//       this.setState({data: response.data});
//       console.log(this.state.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   fetchData = async () => {
//     try {
//       const zakaria = this.state.value;
//       console.log(zakaria);
//       const response = await axios.post("http://127.0.0.1:8000/api/categories", {category: zakaria});
//       console.log(response.data);
//       this.setState({category: response.data});
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   handleChange = (event) => {
//     this.setState({ value: event.target.value });
//     console.log(this.state.value);
//     console.log(localStorage.getItem("language"));
//   };

  

//   //  handleShowMore = () => {
//   //   setMax(d.length);
//   //   setShowMore(false);
//   // };

//   //  handleShowLess = () => {
//   //   setMax(4);
//   //   setShowMore(true);
//   // };

//   render() {
//     const { category, data } = this.state;
//     const categoryOne = data["categoryOne"];
//     const categoryTwo = data["categoryTwo"];
//     const categoryThree = data["categoryThree"];
//     const categoryFour = data["categoryFour"];
//     const bilal = 
//       <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
//         {categoryOne.map((book, i) => {if (i < this.state.max) return (
//           // <div key={book.id} className="book-item bg-white shadow-md rounded-lg overflow-hidden">
//           //   <div>
//           //     <img src={catone} alt="cat" />
//           //   </div>
//           //   <div className="p-4">
//           //     <h2 className="font-bold text-xl mb-2">{book.name}</h2>
//           //     <p className="text-gray-700 text-base">{book.author}</p>
//           //   </div>
//           //   <a download={book.pdf} href={book.pdf}>
//           //     <button>Download</button>
//           //   </a>
//           // </div>
//           <BookItem
//               key={book.id} 
//               id= {book.id}
//               name= {book.name}
//               author= {book.author}
//               pdf= {book.pdf}
//               imgs = {"http://127.0.0.1:8000/storage/"+book.imgs}
//           />
//         )} )}
//       </div>
    
  
//     if (category.length > 0) {
//       return (
//         <div className={this.state.language}>
//           <MainHeading 
//             properties = {{
//               title: "Books",
//               subtitle: "all what you need",
//             }}
//           />
//           <label htmlFor="categorySelect" className={` ${styles.paragraph} block text-[30px] text-center mt-[50px] pb-3 `}>Select your category</label>
//           <select id="categorySelect" onChange={this.handleChange} onClick={this.fetchData}
//           className={`block appearance-none w-1/2 mx-auto bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:border-gray-500 hover:shadow-md transition duration-300`}>
//             <option value="all">All</option>
//             <option value="أدب عربي" className="bg-grey-100">أدب عربي</option>
//             <option value="في النحو والصرف">في النحو والصرف</option>
//             <option value="علم نفس">علم نفس</option>
//             <option value="دراسات قرآنيّة">دراسات قرآنيّة</option>
//           </select>
//           <h1 className={`${styles.heading2} book-heading my-4`}>{this.state.value}</h1>
//           {/* <h1 className="text-2xl font-bold text-gray-900 mb-4">Book Store</h1> */}
//           {this.state.value}
//           <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {category.map((book) => (
//               <BookItem
//                 key={book.id} 
//                 id= {book.id}
//                 name= {book.name}
//                 author= {book.author}
//                 pdf= {book.pdf}
//                 imgs = {"http://127.0.0.1:8000/storage/"+book.imgs}
//               />
//             ))}
//           </div>
//         </div>
//       );
//     }
  

//     return (
//       <div className={`${styles.paddingY}`}>
//         <MainHeading
//           className = "bookHeading" 
//           properties = {{
//             title: "Books",
//             subtitle: "all what you need",
//           }}
//         />
//         <label htmlFor="categorySelect" className={`select-heading ${styles.paragraph} block text-[30px] text-center mt-[50px] pb-3 `}>Select your category</label>
//         <select id="categorySelect" onChange={this.handleChange} onClick={this.fetchData}
//          className={`block appearance-none w-1/2 mx-auto bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:border-gray-500 hover:shadow-md transition duration-300`}>
//           <option value="all">All</option>
//           <option value="أدب عربي" className="bg-grey-100">أدب عربي</option>
//           <option value="في النحو والصرف">في النحو والصرف</option>
//           <option value="علم نفس">علم نفس</option>
//           <option value="دراسات قرآنيّة">دراسات قرآنيّة</option>
//         </select>
//         {/* <h1 className="text-2xl font-bold text-gray-900 mb-4">Book Store</h1> */}
//         <h1 className={`${styles.paragraph} my-4 book-heading`}>CATEGORY ONE</h1>
//           {bilal}
//         <div>
//           {this.state.showMore && this.state.max < categoryOne.length && (
//             <div className="flex items-center justify-center w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={() => { this.setState({ max: categoryOne.length, showMore: false }) }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//                 Show More <MdExpandMore className="text-black" />
//               </button>
//             </div>
//           )}
//           {!this.state.showMore && (
//             <div className="flex items-center justify-center w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={() => { this.setState({ max: 6, showMore: true }) }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//                 Show Less <MdExpandLess className="text-black" />
//               </button>
//             </div>
//           )}

//         </div>
        
//         <h1 className={`${styles.paragraph} my-4 book-heading`}>CATEGORY TWO</h1>
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
//           {categoryTwo.map((book, i) => {if (i < this.state.max) return(
//             <BookItem
//             key={book.id} 
//             id= {book.id}
//             name= {book.name}
//             author= {book.author}
//             pdf= {book.pdf}
//             imgs = {"http://127.0.0.1:8000/storage/"+book.imgs}
//             />
//             )})}
//         </div>
//         <div>
//           {this.state.showMore && this.state.max < categoryTwo.length && (
//             <div className="flex items-center justify-center w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={() => { this.setState({ max: categoryTwo.length, showMore: false }) }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//                 Show More <MdExpandMore className="text-black" />
//               </button>
//             </div>
//           )}


//           {!this.state.showMore && (
//             <div className="flex items-center justify-center w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={() => { this.setState({ max: 6, showMore: true }) }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//                 Show Less <MdExpandLess className="text-black" />
//               </button>
//             </div>
//           )}

//         </div>

//         <h1 className={`${styles.paragraph} my-4 book-heading`}>CATEGORY THREE</h1>
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
//           {categoryThree.map((book, i) => {if (i < this.state.max) return (
//             <BookItem
//             key={book.id} 
//             id= {book.id}
//             name= {book.name}
//             author= {book.author}
//             pdf= {book.pdf}
//             imgs = {"http://127.0.0.1:8000/storage/"+book.imgs}
//             />
//           )})}
//         </div>
//         {/* More and Less Button */}
//         <div>
//           {this.state.showMore && this.state.max < categoryThree.length && (
//             <div className="flex items-center justify-center w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={() => { this.setState({ max: categoryThree.length, showMore: false }) }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//                 Show More <MdExpandMore className="text-black" />
//               </button>
//             </div>
//           )}
//           {!this.state.showMore && (
//             <div className="flex items-center justify-center w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={() => { this.setState({ max: 6, showMore: true }) }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//                 Show Less <MdExpandLess className="text-black" />
//               </button>
//             </div>
//           )}
//         </div>
          
//         <h1 className={`${styles.paragraph} my-4 book-heading`}>CATEGORY FOUR</h1>
//         <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
//           {categoryFour.map((book, i) =>{ if (i < this.state.max) return (
//             <BookItem
//             key={book.id} 
//             id= {book.id}
//             name= {book.name}
//             author= {book.author}
//             pdf= {book.pdf}
//             imgs = {"http://127.0.0.1:8000/storage/"+book.imgs}
//             />
//           )})}
//         </div>
//         <div>
//           {this.state.showMore && this.state.max < categoryFour.length && (
//             <div className="flex items-center justify-center w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={() => { this.setState({ max: categoryFour.length, showMore: false }) }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//                 Show More <MdExpandMore className="text-black" />
//               </button>
//             </div>
//           )}
//           {!this.state.showMore && (
//             <div className="flex items-center justify-center w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
//               <button className='showmore' onClick={() => { this.setState({ max: 6, showMore: true }) }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
//                 Show Less <MdExpandLess className="text-black" />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
      
//     );
//   }
  
// }

// export default Books;
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "./Books.css";
import axios from "axios";
import BookItem from "../BookItem/BookItem";
import '../../pages/BookPage/BookPage';
import MainHeading from "../MainHeading/MainHeading";
import styles from "../../style";
// import Button from "../Button/Button";
import {MdExpandMore, MdExpandLess} from 'react-icons/md'

const Books = () => {
  const [ t, i18n ] = useTranslation();
  const [item, setItem] = useState("");
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState([]);
  const [value, setValue] = useState("");
  const [lang, setLang] = useState("");
  const [showMore, setShowMore] = useState(true);
  const [max, setMax] = useState(6);
  const [data, setData] = useState({
    categoryOne: [{}],
    categoryTwo: [{}],
    categoryThree: [{}],
    categoryFour: [{}],
  });

  useEffect(() => {
    fetchdata();
    language();
  }, []);

  const language = () => {
    console.log(localStorage.getItem('language'));
    const languageValue = localStorage.getItem("language")
    // this.state.language = localStorage.getItem("language");
    if (localStorage.getItem('language') == 'ar') {
      document.documentElement.setAttribute('dir', languageValue === 'ar' ? 'rtl' : 'ltr');
      document.body.style.fontFamily = "'Noto Kufi Arabic', sans-serif";
      i18n.changeLanguage(languageValue);
    }  
  }

  const fetchdata = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/books");
      // console.log(response.data);
      setData(response.data);
      // console.log(this.state.data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchData = async () => {
    try {
      const zakaria = value;
      console.log(zakaria);
      const response = await axios.post("http://127.0.0.1:8000/api/categories", {category: zakaria});
      console.log(response.data);
      setCategory(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(this.state.value);
    console.log(localStorage.getItem("language"));
  };

    useEffect(() => {
      fetchdata();
    }, [value]);

    const { categoryOne, categoryTwo, categoryThree, categoryFour } = data;

    const bilal = 
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
        {categoryOne.map((book, i) => {if (i < max) return (
          <BookItem
              key={book.id} 
              id= {book.id}
              name= {book.name}
              author= {book.author}
              pdf= {book.pdf}
              imgs = {"http://127.0.0.1:8000/storage/"+book.imgs}
          />
        )} )}
      </div>
    
  
    if (category.length > 0) {
      return (
        <div>
          <MainHeading 
            properties = {{
              title: "Books",
              subtitle: "all what you need",
            }}
          />
          <label htmlFor="categorySelect" className={` ${styles.paragraphNew} text-dimYellow block text-[30px] text-center mt-[50px] pb-3 `}>{t('booksSelectLabel')}</label>
          <select id="categorySelect" onChange={handleChange} onClick={fetchData}
          className={`block appearance-none text-center w-1/2 mx-auto bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:border-gray-500 hover:shadow-md transition duration-300`}>
            <option value="all">{t('booksCats')}</option>
            <option value="أدب عربي" className="bg-grey-100">{t('booksCat1')}</option>
            <option value="في النحو والصرف">{t('booksCat2')}</option>
            <option value="علم نفس">{t('booksCat3')}</option>
            <option value="دراسات قرآنيّة">{t('booksCat4')}</option>
          </select>
          <h1 className={`${styles.paragraphNew} book-heading book-heading-all my-4`}>{value}</h1>
          {/* <h1 className="text-2xl font-bold text-gray-900 mb-4">Book Store</h1> */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {category.map((book) => (
              <BookItem
                key={book.id} 
                id= {book.id}
                name= {book.name}
                author= {book.author}
                pdf= {book.pdf}
                imgs = {"http://127.0.0.1:8000/storage/"+book.imgs}
              />
            ))}
          </div>
        </div>
      );
    }
  
    // const ShowMoreButton = ({ max, categoryLength, showMore, setShowMore }) => {
  const handleShowMore = () => {
    setShowMore(false);
    setMax(categoryOne.length)
  };

  const handleShowLess = () => {
    setShowMore(true);
    setMax(6);
  };


    return (
      <div className={`${styles.paddingY}`}>
        <MainHeading
          className = "bookHeading" 
          properties = {{
            title: t('booksTitle'),
            subtitle: t('booksSubtitle'),
          }}
        />
        <label htmlFor="categorySelect" className={`select-heading ${styles.paragraph} text-dimYellow block text-[30px] text-center mt-[50px] pb-3 `}>{t('booksSelectLabel')}</label>
        <select id="categorySelect" onChange={handleChange} onClick={fetchData}
         className={`block appearance-none text-center w-1/2 mx-auto bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:border-gray-500 hover:shadow-md transition duration-300`}>
          <option value="all">{t('booksCats')}</option>
          <option value="أدب عربي" className="bg-grey-100">{t('booksCat1')}</option>
          <option value="في النحو والصرف">{t('booksCat2')}</option>
          <option value="علم نفس">{t('booksCat3')}</option>
          <option value="دراسات قرآنيّة">{t('booksCat4')}</option>
        </select>
        {/* <h1 className="text-2xl font-bold text-gray-900 mb-4">Book Store</h1> */}
        <h1 className={`${styles.paragraphNew} my-4 book-heading`}>{t('booksCat1')}</h1>
          {bilal}
        <div>
          {showMore && max < categoryOne.length && (
            <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
              <button className='showmore' onClick={handleShowMore} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
              {t('booksMore')} <MdExpandMore className="text-black" />
              </button>
            </div>
          )}
          {!showMore && (
            <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
              <button className='showmore' onClick={handleShowLess} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
              {t('booksLess')} <MdExpandLess className="text-black" />
              </button>
            </div>
          )}

        </div>
        
        <h1 className={`${styles.paragraphNew} my-4 book-heading`}>{t('booksCat2')}</h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
          {categoryTwo.map((book, i) => {if (i < max) return(
            <BookItem
            key={book.id} 
            id= {book.id}
            name= {book.name}
            author= {book.author}
            pdf= {book.pdf}
            imgs = {"http://127.0.0.1:8000/storage/"+book.imgs}
            />
            )})}
        </div>
        <div>
          {showMore && max < categoryTwo.length && (
            <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
              <button className='showmore' onClick={handleShowMore} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
              {t('booksMore')} <MdExpandMore className="text-black" />
              </button>
            </div>
          )}
          {!showMore && (
            <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
              <button className='showmore' onClick={handleShowLess} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
              {t('booksLess')} <MdExpandLess className="text-black" />
              </button>
            </div>
          )}

        </div>

        <h1 className={`${styles.paragraphNew} my-4 book-heading`}>{t('booksCat3')}</h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
          {categoryThree.map((book, i) => {if (i < max) return (
            <BookItem
            key={book.id} 
            id= {book.id}
            name= {book.name}
            author= {book.author}
            pdf= {book.pdf}
            imgs = {"http://127.0.0.1:8000/storage/"+book.imgs}
            />
          )})}
        </div>
        {/* More and Less Button */}
        <div>
          {showMore && max < categoryThree.length && (
            <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
              <button className='showmore' onClick={handleShowMore} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
                {t('booksMore')} <MdExpandMore className="text-black" />
              </button>
            </div>
          )}
          {!showMore && (
            <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
              <button className='showmore' onClick={handleShowLess} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
              {t('booksLess')} <MdExpandLess className="text-black" />
              </button>
            </div>
          )}
        </div>
          
        <h1 className={`${styles.paragraphNew} my-4 book-heading`}>{t('booksCat4')}</h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
          {categoryFour.map((book, i) =>{ if (i < max) return (
            <BookItem
            key={book.id} 
            id= {book.id}
            name= {book.name}
            author= {book.author}
            pdf= {book.pdf}
            imgs = {"http://127.0.0.1:8000/storage/"+book.imgs}
            />
          )})}
        </div>
        <div>
          {showMore && max < categoryFour.length && (
            <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
              <button className='showmore' onClick={handleShowMore} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
              {t('booksMore')} <MdExpandMore className="text-black" />
              </button>
            </div>
          )}
          {!showMore && (
            <div className="flex items-center justify-center mb-[35px] w-[45%] sm:w-[25%] md:w-[15%] mt-[15px] text-[16px] bg-white p-1 mx-auto">
              <button className='showmore' onClick={handleShowLess} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem' }}>
              {t('booksLess')} <MdExpandLess className="text-black" />
              </button>
            </div>
          )}
        </div>
      </div>
      
    );
  
}

export default Books;

