import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './main.html';

Template.home.onCreated(()=> {

  let agencies = [
    {
      id:1,
      title: "ECON Home Care Services",
      detail:" 260 Sims Avenue  #04-01 Singapore 387 604 Provides Nursing Care and Doctor house call."
    },
    {
      id:2,
      title: "MV Medical Pte Ltd",
      detail:"Provides Nursing home and Doctor house call."
    },
    {
      id:3,
      title: "Nicole Consultancy Pte Ltd",
      detail:"Provides Nursing services and Doctor House."
    },
    {
      id:4,
      title: "Accented Home Nursing",
      detail:"Provides Home nursing, Personal home care & Relief-caregiving."
    },
    {
      id:5,
      title: "Tzu Chi Foundations",
      detail:"Provides Home medical and home nursing visits for elderly."
    },
  ];

  let products = [
    {
      id:1,
      title: "Eye tracker",
      detail:"Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur."
    },
    {
      id:2,
      title: "700XD GPS Tracker",
      detail:"Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur."
    },
    {
      id:3,
      title: "10X40D Angle tracker",
      detail:"Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur."
    },
    {
      id:4,
      title: "20x40D canon CCTV",
      detail:"Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur."
    },
    {
      id:5,
      title: "20x40D canon CCTV",
      detail:"Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur."
    },
    {
      id:6,
      title: "20x50D canon CCTV",
      detail:"Lorem ipsum dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur."
    },
  ];

  Session.set("agencies",agencies);
  Session.set("products",products);

});

Template.home.helpers({

  agencies: () =>
  {
    return Session.get("agencies");
  },
  products: () =>
  {
    return Session.get("products");
  }


});

Template.home.events({

});
