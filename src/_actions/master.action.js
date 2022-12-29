import { masterConstants } from "../_constants";
import { masterService } from "../_services";
import { alertActions } from './';
import { history } from '../_helpers';

export const masterActions = {
  loginPage,
  login,
  isLoggedIn
};


function login(username, password, from) {
  return dispatch => {
      dispatch(request({username}));

      masterService.login(username, password)
          .then(
              user => {
                  if(user.status==200)
                  {
                    localStorage.setItem('userData', JSON.stringify(user.data));
            
                    dispatch(success(user));
                    setTimeout(() => {
                      let userName = localStorage.getItem('userData')
                     userName = JSON.parse(userName)
                     if(userName){
                      if(userName.countryCode && userName.countryCode === 'TH'){
                        localStorage.setItem("lancode",'th');
                      return
                      }
                      if(userName.countryCode && userName.countryCode === 'VN'){
                        localStorage.setItem("lancode",'vt');
                       
                      }  
                    }
                  
                    
                    },2000);
                  }else
                  {
                    /////console.log('useruser',user); 
                    dispatch(failure("User not Found"));
                  }
              },
              error => {
                  dispatch(failure(error.toString()));
                  dispatch(alertActions.error(error.toString()));
              }
          );
  };

  function request(user) { return { type: masterConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: masterConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: masterConstants.LOGIN_FAILURE, error } }
}


function loginPage(username,password,form) {
  return (dispatch) => {
    dispatch(request());

    masterService.loginPage(username,password).then(
      (loginPage) => dispatch(success(loginPage)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request(loginPage) {
    return { type: masterConstants.LOGIN_REQUEST, loginPage};
  }
  function success(loginPage) {
    return { type: masterConstants.LOGIN_SUCCESS, loginPage };
  }
  function failure(error) {
    return { type: masterConstants.LOGIN_FAILURE, error };
  }
}

function isLoggedIn(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(isLoggedIn) {
    return { type: masterConstants.ISLOGGED_IN_REQUEST, isLoggedIn };
  }
  function success(isLoggedIn) {
    return { type: masterConstants.ISLOGGED_IN_SUCCESS, isLoggedIn };
  }
  function failure(error) {
    return { type: masterConstants.ISLOGGED_IN_FAILURE, error };
  }
}