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
FlowRouter.route('/feedback', {
  name: 'Feedback.show',
  action() {
    BlazeLayout.render('App_body', {main: 'feedback'});
  }
});
FlowRouter.route('/chat', {
  action() {
    BlazeLayout.render('App_body', {main: 'chat'});
  }
});
FlowRouter.route('/profile', {
  name: 'Profile.show',
  action() {
    BlazeLayout.render('App_body', {main: 'profile'});
  }
});
FlowRouter.route('/favorite', {
  name: 'Favorite.show',
  action() {
    BlazeLayout.render('App_body', {main: 'favorite'});
  }
});

FlowRouter.route('/detail/:id', {
  name: 'Detail.show',
  action() {
    BlazeLayout.render('App_body', {main: 'detail'});
  }
});
