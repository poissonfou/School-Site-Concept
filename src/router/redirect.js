let redirectInitial = {
  path: "/School-Site-Concept/",
  redirect: "",
};

let data = JSON.parse(sessionStorage.getItem("isLoggedIn"));

if (data == true) {
  const dataUser = JSON.parse(sessionStorage.getItem("arrayUsers"));

  const index = dataUser.findIndex((e) => e.isLoggedIn == true);

  redirectInitial.redirect = `School-Site-Concept/board/${dataUser[index].id}`;
} else {
  redirectInitial.redirect = "home";
}

export default redirectInitial;
