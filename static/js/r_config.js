/**
* adaptation of config.js from jhamrick
*
****/
// object to hold experiment phases
// Order counterbalanced 2/18/18 after half of the HITs
var EXPERIMENT = Object.freeze({
    practice: 0,
    consq: 1,
    ou: 2,
    length: 3
});

// object to hold trial order
var TRIAL = Object.freeze({
    prompton: 0,
    responding: 1,
    promptoff: 2,
    length: 3
});

// configuration object for the experiment

var CIGconfig = function(condition, counterbalance, timelimit) {

  this.condition = condition;
  this.counterbalance = counterbalance;

  this.fade = 200;

  this.debug = true; // set to false for actual run

  this.instructions = [
    "instructions/instruct-1.html",
    "instructions/instruct-2.html"
  ];

  this.pages = [
        "trial.html",
        "postquestionnaire.html",
        "thanks-mturksubmit.html"
      ];

  this.block = new Object();
  this.block[EXPERIMENT.practice] = ["instruct-practice"];
  this.block[EXPERIMENT.ou] = ["instruct-ou"];
  this.block[EXPERIMENT.consq] = ["instruct-consq"];

  this.promptlist = new Object();
  this.promptlist[EXPERIMENT.practice] = ["Name as many COLORS as you can"];
  this.promptlist[EXPERIMENT.ou] = _.shuffle([
        "How can you use a BRICK?",
        "How can you use a HAMMER?",
        "How can you use a CAR TIRE?"
      ]);
  this.promptlist[EXPERIMENT.consq] = _.shuffle([
    "What would happen if HUMANS NO LONGER NEEDED SLEEP?",
      "What would happen if HUMANS WERE 12 INCHES TALL?",
      "What would happen if GRAVITY NO LONGER EXISTED?"
    ]);

  this.timelimit = timelimit; // in milliseconds

  this.rest = 5000; // break time between trials in milliseconds

};
