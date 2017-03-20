FlowRouter.route('/', {
  name: 'Login.show',
  action() {
    BlazeLayout.render('loginArea');
  }
});

FlowRouter.route('/home', {
  name: 'Home.show',
  action() {
    BlazeLayout.render('App_body', {main: 'home'});
  }
});

FlowRouter.route('/detail/:id', {
  name: 'Detail.show',
  action() {
    BlazeLayout.render('App_body', {main: 'detail'});
  }
});
