import React, { useState, useEffect } from 'react'
// import { Store } from '../../Store'
import './Header.scss'
import '../../assets/css/Inseehome.scss'
import '../../assets/css/all-skins.min.scss'
import { eventActions } from '../../_actions';
// import { makeStyles } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import LeftDrawer from './LeftDrawer'
import { withTranslation, useTranslation } from 'react-i18next'
import userlogo from '../../assets/img/men.jpg'
// import ToggleButton from '../ToggleButton/ToggleButton'
import { useHistory, useParams } from 'react-router'
// import { orderActions } from '../../_actions'
import { useDispatch, useSelector } from 'react-redux'
// import { ToastContainer, toast } from 'react-toastify'



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

/* const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    back_button: {
      backgroundColor: '#000 !important',
      color: '#fff !important',
      marginRight: '8px !important',
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  })) 
*/

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(() => ({
  root: {
    padding: '25px',
    textAlign: 'center',
    width: '437px',
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    // margin: 0,
    padding: theme.spacing(1),
    textAlign: 'center',
    marginTop: '20px',
    display: 'block',
  },
}))(MuiDialogActions)

export const Context = React.createContext();

function Header(props) { 
  // const [toggle, setToggle] = useState(0);
  let userName = localStorage.getItem('userData');
  const [open, setOpen] = useState(false)
  const [headerDesign, setHeaderBar] = useState('')
  userName = JSON.parse(userName);
  const selectedLangCode = localStorage.getItem('lancode');
 

  const dispatch = useDispatch();


  //const { state, dispatch } = useContext(Store);
  const [validate, setValidate] = useState(false)
  let history = useHistory()
  const { t } = useTranslation()
  const [sidebarDesign, setSideBar] = useState('');
  const [addClass, setAddClass] = useState('');
  // const [fontSize, setFontSize] = React.useState(14);
//  const CustomerIdsValidate = useSelector((state) => state.customeruserid);
 const CustomerIdsValidateError = useSelector((state) => state.customeruserid.error);
//  const FontChange = useSelector((state) => state.fontsizechanger.fontsizechanger);
  const urlPath = window.location.pathname



//  const fontDecrement = () => {
//   let myDescriment = fontSize - 2;
//   setFontSize(myDescriment);
//   dispatch(eventActions.fontSizeChanger(myDescriment));
//  }

//  const fontIncrement = () => {
//    let myIncrement = fontSize + 2;
//    setFontSize(myIncrement);
//    dispatch(eventActions.fontSizeChanger(myIncrement));
//  }



  function onToggleChange(checked) {
    setValidate(checked)
  }

  function toggleMenu() {
    if(window.innerWidth<=400){
        if (sidebarDesign !== '' || headerDesign !== '') {
          setSideBar('');
          setHeaderBar('')
        } else {          
          setSideBar('show-side-bar');
          setHeaderBar('move-header-left');
        }
    
        if(addClass !== ''){
          setAddClass('move-content-area-left');
          dispatch(eventActions.addClasswithStype('move-content-area-left'));
        }
        else {
          setAddClass('') 
          dispatch(eventActions.addClasswithStype(''));
        }
    }
    else{
      if (sidebarDesign === '' || headerDesign === '') {
        setSideBar('margin-left-sidebar');
        setHeaderBar('padding-Left')
      } else {
        setSideBar('');
        setHeaderBar('')
      }
  
      if(addClass === ''){
        setAddClass('myNewClass');
        dispatch(eventActions.addClasswithStype('myNewClass'));
      }
      else {
        setAddClass('') 
        dispatch(eventActions.addClasswithStype(''));
      }
    }
    
  }

  useEffect(() => {
    dispatch(eventActions.CustomerUserId());
    if(CustomerIdsValidateError === "Unauthorized"){
      setOpen(true)
      setTimeout(() => {
        onLogout()
      }, 10000)
      
    }
  }, [1]);


  function onLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <>
      <LeftDrawer 
        style={`${sidebarDesign} ${sidebarDesign === 'show-side-bar' && 'responsive-main-sidebar'}`} sidebarLogo={`${(sidebarDesign === 'show-side-bar ') || (urlPath === "/SubDealerManagement")? 'logo' : ''}`} sidebarName={sidebarDesign} subdealerSidebar={urlPath === "/SubDealerManagement" ? 'subdealer-sidebar' : ''}/>
      <header className={ 'leftClass ' + headerDesign}>
        <div className='container-fluid head_sec' >
          <div className={`row nowrap ${sidebarDesign === 'show-side-bar' && 'flex-nowrap'}`}>
            <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 pl-0 pr-0'>
                <p className='d-flex'>
                <span className='toggle_menu title' onClick={toggleMenu}>
                  <i className='fa fa-bars' aria-hidden='true'></i>
                </span>
                <span className='title lh-1'>{props.title} </span>
                </p>
            </div>

            {/* <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12'>
              <button onClick={fontDecrement}> - </button>
              &nbsp;&nbsp;
              <button onClick={fontIncrement}> + </button>
            </div> */}

            <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12'>
              <div className='right-sec'>
                {/* <div className='customercare-box'>
                  <p className='mb-0'>{t('shipmentdetail.customercare_btn')}</p>
                  <p className='mb-0 text-right'>1732</p>
                </div> */}

                <div className='notification'>
                  <i className='fa fa-bell' aria-hidden='true'></i>
                  <span>3</span>
                </div>


                {validate === true ? (
                  <span
                    className='user-icon'
                    data-toggle='modal'
                    data-target='#myModal'
                  >
                    <div className='dropdown show'>
                      <div
                        className='dropdown-toggle'
                        // href='#'
                        role="button"
                        id='dropdownMenuLink'
                        data-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <img src={userlogo} height='40px' width='40px' alt='user-logo' />
                        <span className='user_name'>
                          {userName && userName ? userName.userId : 'John'}
                        </span>
                        <i className='fa fa-angle-down' aria-hidden='true'></i>
                      </div>

                      <div
                        className='dropdown-menu'
                        aria-labelledby='dropdownMenuLink'
                      >
                        <button className='dropdown-item'>
                          Profile
                        </button>
                        <button className='dropdown-item'>
                          Setting
                        </button>
                        <a className="dropdown-item" href="/" >
                          Logout
                        </a>
                      </div>
                    </div>
                  </span>
                ) : (
                  <span className='user-icon'>
                    <div className='dropdown show'>
                      <div
                        className='dropdown-toggle'
                        // href='#'
                        role="button"
                        id='dropdownMenuLink'
                        data-toggle='dropdown'
                        aria-expanded='false'
                      >
                        <img src={userlogo} height='40px' width='40px' alt='user-logo' />
                        <span className='user_name'>
                          {userName && userName ? userName.userId : 'John'}
                        </span>
                        <i className='fa fa-angle-down' aria-hidden='true'></i>
                      </div>

                      <div
                        className='dropdown-menu'
                        aria-labelledby='dropdownMenuLink'
                      >
                        <button className='dropdown-item'>
                          Profile
                        </button>
                        <button className='dropdown-item'>
                          Setting
                        </button>
                        <button
                          className='dropdown-item'
                          onClick={onLogout}
                          // href='javascript:;'
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='dialog-boxes'>
        <Dialog aria-labelledby='customized-dialog-title' open={open}>
          <DialogTitle id='customized-dialog-title'></DialogTitle>
          <DialogContent>
            <Typography>

            {
              selectedLangCode === 'en' || selectedLangCode === null || selectedLangCode === undefined ? 
              `User ${userName && userName ? userName.userId : 'John'} is already logged on INSEE Plus system and note that multiple logins using the same user will be terminated.`
              : `User ${userName && userName ? userName.userId : 'John'} Logged in to INSEE Plus, please note that logging in using the same user ID from other channels will be cancelled`
            }
            </Typography>
            <DialogActions style={{ display: "inline-block"}}>
              <div className='create_link d-flex text-center'>
                <button className='create p-2' onClick={onLogout}>
                  {t("Logout")}
                </button>
                
              </div>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export default withTranslation()(Header)
