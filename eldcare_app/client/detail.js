import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.detail.onCreated(()=> {

  let agencies = Session.get("agencies");
  let id = FlowRouter.getParam('id');
  const obj = _.find(agencies, function(f){ return f.id == id})
  console.log(obj);
  Session.set("obj",obj);
});

Template.detail.helpers({
  title:()=>
  {
    return Session.get("obj").title;
  },
  detail:()=>
  {
    return Session.get("obj").detail;
  }
});

Template.detail.events({

});
