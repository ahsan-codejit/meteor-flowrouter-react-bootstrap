
FlowRouter.route("/", {
  name: "home",
  action() {
    ReactLayout.render(MainLayout, { content: <Home /> });
  }
});

// Or optionally overwrite the default nav/footer with custom components

// FlowRouter.route("/", {
//   name: "home",
//   action() {
//     ReactLayout.render(MainLayout, {
//       nav: <CustomNav />,
//       content: <Home />,
//       footer: <CustomFooter />
//     });
//   }
// });

FlowRouter.route("/dashboard", {
  name: "dashboard",
  triggersEnter: [AccountsTemplates.ensureSignedIn], // force login
  action() {
    ReactLayout.render(MainLayout, { content: <Dashboard /> });
  }
});

FlowRouter.route("/logout", {
  name: "logout",
  action() {
    Meteor.logout(() => {
      FlowRouter.redirect("/");
    });
  }
});

FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { content: <NotFound /> });
  }
};


// UserAccounts Routes
AccountsTemplates.configureRoute("changePwd");
AccountsTemplates.configureRoute("forgotPwd");
AccountsTemplates.configureRoute("resetPwd");
AccountsTemplates.configureRoute("signIn");
AccountsTemplates.configureRoute("signUp");
AccountsTemplates.configureRoute("verifyEmail");
