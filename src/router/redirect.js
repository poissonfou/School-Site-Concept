let redirectInitial = {
  path: "/",
  redirect: " ",
};

let data = JSON.parse(localStorage.getItem("isLoggedIn"));

if (data == true) {
  const dataUser = JSON.parse(localStorage.getItem("arrayUsers"));

  const index = dataUser.findIndex((e) => e.isLoggedIn == true);

  route.redirect = `/board/${dataUser[index].id}`;
} else {
  route.redirect = "home";
}

export default redirectInitial;
