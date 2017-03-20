import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.loginArea.onCreated(()=> {



});

Template.loginArea.helpers({

});

Template.loginArea.events({

"click #login":()=>
{
  FlowRouter.go("home");
}

});
