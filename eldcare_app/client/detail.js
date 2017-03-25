import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.detail.onCreated(()=> {

  let agencies = Session.get("agencies");
  let id = FlowRouter.getParam('id');
  const obj = _.find(agencies, function(f){ return f.id == id})
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
  ,
  good:()=>
  {
    return Session.get("obj").good;
  }
  ,bad:()=>
  {
    return Session.get("obj").bad;
  }
});

Template.detail.events({

  "click .goodservice": (e)=>
  {
     let obj = Session.get("obj");
     if(!obj.good)
     {
       obj.good = 0;
     }
     obj.good +=1;
     Session.set("obj",obj);

  },
  "click .badservice": (e)=>
  {
    let obj = Session.get("obj");
    if(!obj.bad)
    {
      obj.bad = 0;
    }
    obj.bad +=1;
    Session.set("obj",obj);

  },

});
