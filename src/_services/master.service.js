
import { API_URL_USER, API_URL_ADD_USER} from "../Constant/index";
export const masterService = {
  loginPage,
  login,
  logout
};


function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function login(username,password){
  const requestOptions={
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8"},
    body: JSON.stringify({"username":username,"password":password})
  }
  return fetch(API_URL_ADD_USER + `admin/login`, requestOptions)
    .then(handleLoginResponse)
    .then(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('userData', JSON.stringify(user));
        return user;
       
    });
}

function loginPage(username, password) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
    //  body: JSON.stringify(loginData),
  };
  console.log(requestOptions, "bodybody");
  return fetch(API_URL_ADD_USER + `external-user/login?password=` + password + `&username=` + username, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function handleLoginResponse(response) {
  console.log('response ', response.headers.get("X-AUTH-TOKEN"))
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if(response.headers.get("X-AUTH-TOKEN")!='')
      {
        localStorage.setItem('x-auth-token',response.headers.get("X-AUTH-TOKEN"));
      }
      //localStorage.setItem('X-AUTH-TOKEN',response.headers.get("X-AUTH-TOKEN"));
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}




