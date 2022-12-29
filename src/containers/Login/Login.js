import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation, Redirect } from 'react-router-dom'
import i18n from "i18next";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/img/logo.png';
import BottomLogo from '../../assets/img/bottom_logo.png';
import { useTranslation, withTranslation } from 'react-i18next';
import { Store } from '../../Store';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button'
import './Login.scss';
import { masterActions } from '../../_actions';
import { useDispatch, useSelector } from 'react-redux'
import emailIcon from "../../assets/img/email.png";
import passwordIcon from "../../assets/img/password.png";
import 'react-toastify/dist/ReactToastify.css'


const Login = () => {
	const dispatch = useDispatch()
	const { t } = useTranslation()
	let history = useHistory()
	const [convertedText, setConvertedText] = useState('en')
	const loggedIn = useSelector((state) => state.authentication)
	const user = useSelector((state) => state.authentication.user)
	const loginPage = useSelector(state => state.loginPage);
	const [username, setUsername] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [loginfailMessage, setLoginfailMessage] = useState('')
	const location = useLocation()
	useEffect(() => {
		////localStorage.clear();
	}, [])

	function handleChange(e, n) {
		console.log(e, "event target", n)

		if (n === "userName") {
			setUsername(e);
		}
		if (n === "password") {
			setPassword(e);
		}
	}

	// let username = "UIS00037";
	// let passwords = "insee@123";
	function handleSubmit(e) {
		e.preventDefault()
		console.log(username)
		console.log(password)
		const { from } = location.state || { from: { pathname: '/Dashboard' } }
		dispatch(masterActions.login(username, password, from))
		dispatch(masterActions.isLoggedIn(true))
	}

	console.log('loggedIn', loggedIn)


	return (
		<Grid className="LoginContainer">
			{localStorage.getItem('userData') ? <Redirect to='/Dashboard' /> : null}
			<div className="container login_sec">
				<div className="row">
					<div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 mb-4">
						<div className="login_left_sec">
							<img alt="logo" src={logo} />
							<div className="left_txt">
								<h4 className="head_txt">Welcome to the Insee Plus</h4>
								{/* <div className="address_dtl">
									<span> <i class="fa fa-phone" aria-hidden="true"></i> +6666 297-7000</span><br />
									<span> <i class="fa fa-envelope" aria-hidden="true"></i> Welcome@siamcitycement.com</span>
								</div> */}

							</div>
						</div>

					</div>
					<div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
						<div className="login_img">
							<div className="login_right_sec">
								<div className="title-heading">
									{/* {loggedIn && loggedIn.loggedInFail ? (
										<span>{loggedIn.message}</span>
									) : (
										''
									)} */}

									{loginPage && loginPage.error !== undefined || null ? <span>{loginPage.error}</span> : ''}

									<h4 className="head_txt">
										{/* {t("welcome.label")} */}
								Log In
							</h4>
									{/* <Typography className="sub_head"> */}
									{/* {t("login.label")} */}
									{/* This is a sucure system and you will need to provide your login details to access the site
							</Typography> */}
								</div>
								<div className="Login_Section form_section">
									<form onSubmit={handleSubmit}>
										<div className="inputBox ">
											<input type={"text"} name={"username"} onChange={event => setUsername(event.target.value)} placeholder="UserName" className="input" />
											{/* <img src={emailIcon} /> */}
										</div>

										<div className="inputBox mb-1">
											<input type={"password"} name={"password"} onChange={event => setPassword(event.target.value)} placeholder="Password" className="input" />
											{/* <img src={passwordIcon} /> */}
										</div>
										<div className='inputBox text-right mb-4'>
											{/* <a href='javascript:;'>{t('Forget Password ?')}</a> */}
										</div>

										<Button type={"submit"} label={t("login.button")} />
									</form>
								</div>
							</div>
						</div>


					</div>
				</div>

			</div>

			<div className="container bottom_logo">
				<div className="row">
					<img src={BottomLogo} />
				</div>
			</div>

		</Grid>
	);
}

export default withTranslation()(Login);
