import React from 'react'
import './assets/css/Header.css' 
import logo from './assets/img/Amazon-Logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import { auth } from "./firebase";


function Header() {
  const [{basket,user},dispatch]=useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header-logo' src={logo} alt='logo'/></Link>
        <div className='header-search'>
            <input className='header-search-input'type='text'/>
            <SearchIcon className='header-searchicon'/>
        </div>
        <div className='header-nav'>
          <Link to={!user && '/Login'} style={{textDecoration: 'none'}}>
            <div className='header-option' onClick={handleAuthentication}>
            <span className='header-optionLineone'>Hello {!user ? 'Guest' : user.email}</span>
            <span className='header-optionLinetwo' >{user ? 'Sign Out' : 'Sign In'}</span>
            </div></Link>
            <div className='header-option'>
            <span className='header-optionLineone'>Returns</span>
            <span className='header-optionLinetwo'>& Orders</span>
            </div>
            <div className='header-option'>
            <span className='header-optionLineone'>Your</span>
            <span className='header-optionLinetwo'>Prime</span>
            </div>
            <Link to="/checkout" style={{textDecoration: 'none'}}>
            <div className='header-optionbasket'>
                <ShoppingCartOutlinedIcon/>
                <span className='header-optionLinetwo header-basketcount'>{basket?.length}</span>
            </div></Link>
        </div>
    </div>
  )
}

export default Header