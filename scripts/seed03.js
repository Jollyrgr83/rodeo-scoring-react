// DATABASE SEED 03
// This file will add Competitor entries
//dependencies
const mongoose = require("mongoose");
// bring in models
const db = require("../models");
//establish mongoDB connection
mongoose.connect("mongodb://localhost/reactRodeoDB");

const apprenticeArr = [
{ firstName: "Logan", lastName: "Pope", orgName: "York Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "103"},
{ firstName: "Lucas", lastName: "Elston", orgName: "York Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "104"},
{ firstName: "Zack", lastName: "Hopper", orgName: "York Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "105"},
{ firstName: "Caleb", lastName: "Traenkner", orgName: "York Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "106"},
{ firstName: "Bruce", lastName: "Cunupp", orgName: "York Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "107"},
{ firstName: "Zack", lastName: "Childers", orgName: "York Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "108"},
{ firstName: "Jeremy", lastName: "Garrett", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "109"},
{ firstName: "DJ", lastName: "Roper", orgName: "Blue Ridge Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "110"},
{ firstName: "Michael", lastName: "Sims", orgName: "Blue Ridge Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "111"},
{ firstName: "Jake", lastName: "Steward", orgName: "Blue Ridge Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "112"},
{ firstName: "Corey", lastName: "Thomas", orgName: "Berkeley Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "113"},
{ firstName: "Henry", lastName: "Owens", orgName: "Berkeley Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "114"},
{ firstName: "Wyman", lastName: "Boatwright, Jr", orgName: "Horry Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "115"},
{ firstName: "Chase", lastName: "Cox", orgName: "Horry Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "116"},
{ firstName: "Ethan", lastName: "Avant", orgName: "Horry Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "117"},
{ firstName: "Aaron", lastName: "Hughes", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "118"},
{ firstName: "Jacob", lastName: "Rostad", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "119"},
{ firstName: "Joseph", lastName: "Shillinglaw", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "120"},
{ firstName: "Drew", lastName: "Boatwright", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "121"},
{ firstName: "Will", lastName: "Brown", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "122"},
{ firstName: "Josh", lastName: "Sawyer", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "123"},
{ firstName: "Reggie", lastName: "Graves", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "124"},
{ firstName: "Josh", lastName: "Ham", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "125"},
{ firstName: "JT", lastName: "Windham", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "126"},
{ firstName: "Michael", lastName: "Powell", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "127"},
{ firstName: "Wilson", lastName: "Mishoe", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "128"},
{ firstName: "Hunter", lastName: "Melton", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "129"},
{ firstName: "Jamie", lastName: "Anderson", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "130"},
{ firstName: "Peter", lastName: "Strong", orgName: "Palmetto Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "131"},
{ firstName: "Jose", lastName: "Bello", orgName: "Palmetto Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "132"},
{ firstName: "Randall", lastName: "Mcalhaney", orgName: "Palmetto Electric Cooperative", tierID: "Apprentice", year: 2017, compNum: "133"},
{ firstName: "Matthew", lastName: "Martin", orgName: "Santee Cooper", tierID: "Apprentice", year: 2017, compNum: "134"},
{ firstName: "Lee", lastName: "Cochran", orgName: "Santee Cooper", tierID: "Apprentice", year: 2018, compNum: "101"},
{ firstName: "Grayson", lastName: "Smith", orgName: "York Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "103"},
{ firstName: "Alex", lastName: "Pittman", orgName: "York Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "104"},
{ firstName: "Dustin", lastName: "Victor", orgName: "York Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "105"},
{ firstName: "Bruce", lastName: "Cunupp", orgName: "York Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "106"},
{ firstName: "Lucas", lastName: "Elston", orgName: "York Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "107"},
{ firstName: "Jake", lastName: "Stewart", orgName: "Blue Ridge Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "108"},
{ firstName: "D.J.", lastName: "Roper", orgName: "Blue Ridge Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "109"},
{ firstName: "Cameron", lastName: "Kenner", orgName: "Mid-Carolina Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "110"},
{ firstName: "Cody", lastName: "Fulmer", orgName: "Mid-Carolina Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "111"},
{ firstName: "Josh", lastName: "Hughes", orgName: "Mid-Carolina Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "112"},
{ firstName: "Garen", lastName: "Murray", orgName: "Broad River Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "113"},
{ firstName: "Daniel", lastName: "Sams", orgName: "Broad River Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "114"},
{ firstName: "Kyle", lastName: "Patrick", orgName: "York Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "116"},
{ firstName: "Austin", lastName: "Seitz", orgName: "Black River Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "117"},
{ firstName: "Joseph", lastName: "Kruger", orgName: "Black River Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "118"},
{ firstName: "Corey", lastName: "Thomas", orgName: "Berkeley Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "119"},
{ firstName: "Jacob", lastName: "O'Dea", orgName: "Berkeley Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "120"},
{ firstName: "Colby", lastName: "Moore", orgName: "Berkeley Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "121"},
{ firstName: "Henry", lastName: "Owens", orgName: "Berkeley Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "122"},
{ firstName: "Austin", lastName: "Griswold", orgName: "Santee Cooper", tierID: "Apprentice", year: 2018, compNum: "123"},
{ firstName: "Jamie", lastName: "Anderson", orgName: "Santee Cooper", tierID: "Apprentice", year: 2018, compNum: "124"},
{ firstName: "Brenton", lastName: "Hollingsworth", orgName: "York Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "125"},
{ firstName: "Joseph", lastName: "Shillinglaw", orgName: "Santee Cooper", tierID: "Apprentice", year: 2018, compNum: "126"},
{ firstName: "Joseph", lastName: "Watson", orgName: "Pee Dee Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "127"},
{ firstName: "Barett", lastName: "Altman", orgName: "Pee Dee Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "128"},
{ firstName: "Greg", lastName: "Beckum", orgName: "Pee Dee Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "129"},
{ firstName: "Scott", lastName: "Truett", orgName: "Pee Dee Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "130"},
{ firstName: "Russ", lastName: "Wannamaker", orgName: "Tri-County Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "131"},
{ firstName: "Hunter", lastName: "Melton", orgName: "Santee Cooper", tierID: "Apprentice", year: 2018, compNum: "132"},
{ firstName: "Charlie", lastName: "Thompkins", orgName: "Santee Cooper", tierID: "Apprentice", year: 2018, compNum: "133"},
{ firstName: "Conner", lastName: "Brown", orgName: "Santee Cooper", tierID: "Apprentice", year: 2018, compNum: "134"},
{ firstName: "Aaron Thomas", lastName: "Hughes", orgName: "Santee Cooper", tierID: "Apprentice", year: 2018, compNum: "135"},
{ firstName: "Josh", lastName: "Sawyer", orgName: "Santee Cooper", tierID: "Apprentice", year: 2018, compNum: "136"},
{ firstName: "Drew", lastName: "Boatwright", orgName: "Santee Cooper", tierID: "Apprentice", year: 2018, compNum: "137"},
{ firstName: "William", lastName: "Gregory", orgName: "Santee Cooper", tierID: "Apprentice", year: 2018, compNum: "138"},
{ firstName: "David", lastName: "Blizzard", orgName: "Tri-County Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "139"},
{ firstName: "Dakota", lastName: "Smith", orgName: "Newberry Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "140"},
{ firstName: "Phillip", lastName: "Padgett", orgName: "Newberry Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "141"},
{ firstName: "Caleb", lastName: "Black", orgName: "Newberry Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "142"},
{ firstName: "Scooter", lastName: "Carter", orgName: "Santee Cooper", tierID: "Apprentice", year: 2018, compNum: "143"},
{ firstName: "Judson", lastName: "Ward", orgName: "Santee Cooper", tierID: "Apprentice", year: 2018, compNum: "144"},
{ firstName: "Peter", lastName: "Strong", orgName: "Palmetto Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "147"},
{ firstName: "Leighton", lastName: "Brown", orgName: "Palmetto Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "148"},
{ firstName: "Andrew", lastName: "Just", orgName: "Palmetto Electric Cooperative", tierID: "Apprentice", year: 2018, compNum: "149"},
{ firstName: "Hunter", lastName: "Melton", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "101"},
{ firstName: "Ethan", lastName: "Johnson", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "102"},
{ firstName: "Chandler", lastName: "Strickland", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "103"},
{ firstName: "Richard", lastName: "Carter", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "104"},
{ firstName: "Dalton", lastName: "Jones", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "105"},
{ firstName: "Austin", lastName: "Griswold", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "106"},
{ firstName: "Jacob R", lastName: "Asbill", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "107"},
{ firstName: "Tristan", lastName: "Tucker", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "108"},
{ firstName: "Grant", lastName: "Burton", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "109"},
{ firstName: "Andrew", lastName: "Mills", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "110"},
{ firstName: "Jamie", lastName: "Anderson", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "111"},
{ firstName: "Robert", lastName: "Thornley", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "112"},
{ firstName: "Steven", lastName: "McCants", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "113"},
{ firstName: "TJ", lastName: "Brown", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "114"},
{ firstName: "Conner", lastName: "Brown", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "115"},
{ firstName: "Paten", lastName: "Powell", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "116"},
{ firstName: "Tyler", lastName: "Garrett", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "117"},
{ firstName: "Lee", lastName: "Cochran", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "118"},
{ firstName: "Jeremy", lastName: "Garrett", orgName: "Santee Cooper", tierID: "Apprentice", year: 2019, compNum: "119"}
];
const journeymanArr = [
{ teamName: "SC 1", groupNames: "Tommy Reece - Nick Brown - Coby Martin - Bryant Geathers", orgName: "Santee Cooper", tierID: "Journeyman", year: 2017, compNum: "201"},
{ teamName: "Blue Ridge 1", groupNames: "Chad Davidson - Jay Bagwell - Clay Crawford - Anson Perry", orgName: "Blue Ridge Electric Cooperative", tierID: "Journeyman", year: 2017, compNum: "202"},
{ teamName: "BEC 1", groupNames: "William Burbage - Mark Milovich - Wesley Mason", orgName: "Berkeley Electric Cooperative", tierID: "Journeyman", year: 2017, compNum: "203"},
{ teamName: "BEC 2", groupNames: "Will Mills - Cody Carter - Tim Whigham", orgName: "Berkeley Electric Cooperative", tierID: "Journeyman", year: 2017, compNum: "204"},
{ teamName: "SC 2", groupNames: "Jay Ayers - Johnny Brinson - Kevin Rhode", orgName: "Santee Cooper", tierID: "Journeyman", year: 2017, compNum: "205"},
{ teamName: "SC 3", groupNames: "Chad Williams - Dow Hardee - Joe Sawyer", orgName: "Santee Cooper", tierID: "Journeyman", year: 2017, compNum: "206"},
{ teamName: "SC 4", groupNames: "Jake Murray - Tyler Davison - Travis Wiggins", orgName: "Santee Cooper", tierID: "Journeyman", year: 2017, compNum: "207"},
{ teamName: "PEC 1", groupNames: "Tarl Graham - Thomas Scaachi - David White", orgName: "Palmetto Electric Cooperative", tierID: "Journeyman", year: 2017, compNum: "208"},
{ teamName: "SC 5", groupNames: "Sport Rabon - Chris Osha - McKenzie Johnson", orgName: "Santee Cooper", tierID: "Journeyman", year: 2017, compNum: "209"},
{ teamName: "Blue Ridge 1", groupNames: "Chad Davidson - Jay Bagwell - Clay Crawford - Mark McCall", orgName: "Blue Ridge Electric Cooperative", tierID: "Journeyman", year: 2018, compNum: "201"},
{ teamName: "Blue Ridge 2", groupNames: "Michael Sims - Jacob Kelley - Anson Perry - Sam McMillan", orgName: "Blue Ridge Electric Cooperative", tierID: "Journeyman", year: 2018, compNum: "202"},
{ teamName: "Broad River 1", groupNames: "Cameron Smith - Tyler Gibson - Steve Adams - David Upchurch", orgName: "Broad River Electric Cooperative", tierID: "Journeyman", year: 2018, compNum: "203"},
{ teamName: "Black River 1", groupNames: "Jacob Davis - Shane Newman - Ryan Munn - David Chambers", orgName: "Black River Electric Cooperative", tierID: "Journeyman", year: 2018, compNum: "204"},
{ teamName: "BEC 1", groupNames: "Mark Millovich - William Burbage - Wesley Mason", orgName: "Berkeley Electric Cooperative", tierID: "Journeyman", year: 2018, compNum: "205"},
{ teamName: "BEC 2", groupNames: "Will Mills - Cody Carter - Tim Whigham", orgName: "Berkeley Electric Cooperative", tierID: "Journeyman", year: 2018, compNum: "206"},
{ teamName: "SC 1", groupNames: "Jay Ayers - Johnny Brinson - Kevin Rhode - Greg Welch", orgName: "Santee Cooper", tierID: "Journeyman", year: 2018, compNum: "207"},
{ teamName: "Pee Dee 1", groupNames: "Chris Blackmon - Allen Kinsaul - Eugene Bryant - Sean Stephens", orgName: "Pee Dee Electric Cooperative", tierID: "Journeyman", year: 2018, compNum: "208"},
{ teamName: "Tri-County 1", groupNames: "Ryan Jones - Wesley Bilton - Parker Kenney", orgName: "Tri-County Electric Cooperative", tierID: "Journeyman", year: 2018, compNum: "211"},
{ teamName: "Marlboro 1", groupNames: "Justin Cheek - Caleb Bailey - Tommy Hayes - Johnny Rogers", orgName: "Marlboro Electric Cooperative", tierID: "Journeyman", year: 2018, compNum: "212"},
{ teamName: "SC 2", groupNames: "Matthew Martin - Sport Rabon - Mack Johnson", orgName: "Santee Cooper", tierID: "Journeyman", year: 2018, compNum: "213"},
{ teamName: "SEC 1", groupNames: "Channing Matthews - Corbett Collins - Russell Tedder", orgName: "Santee Electric Cooperative", tierID: "Journeyman", year: 2018, compNum: "214"},
{ teamName: "SC 3", groupNames: "Tommy Reece - Nick Brown - Coby Martin - Bryant Geathers", orgName: "Santee Cooper", tierID: "Journeyman", year: 2018, compNum: "215"},
{ teamName: "SC 4", groupNames: "Chad Williams - Dow Hardee - Joe Sawyer - Drew Jordan", orgName: "Santee Cooper", tierID: "Journeyman", year: 2018, compNum: "216"},
{ teamName: "PEC 1", groupNames: "Thomas Scaachi - Tarl Graham - Kurt Brunn - David White", orgName: "Palmetto Electric Cooperative", tierID: "Journeyman", year: 2018, compNum: "217"},
{ teamName: "Lynches River 1", groupNames: "Joe Wright - Alex Honeycutt - CJ Roberts - James Eason", orgName: "Lynches River Electric Cooperative", tierID: "Journeyman", year: 2018, compNum: "218"},
{ teamName: "SC 1", groupNames: "Tommy Reece - Nick Brown - Brandon Pugh - Christian Osha", orgName: "Santee Cooper", tierID: "Journeyman", year: 2019, compNum: "201"},
{ teamName: "SC 2", groupNames: "Sport Rabon-  Matthew Martin - Mack Johnson", orgName: "Santee Cooper", tierID: "Journeyman", year: 2019, compNum: "202"},
{ teamName: "SC 3", groupNames: "Jason Sanders - Jacob Black - Brad Yon", orgName: "Santee Cooper", tierID: "Journeyman", year: 2019, compNum: "203"},
{ teamName: "SC 4", groupNames: "Josh Craven - Luke Crosby - Rodian Henry", orgName: "Santee Cooper", tierID: "Journeyman", year: 2019, compNum: "204"},
{ teamName: "SC 5", groupNames: "William Brown - Evan Glen - Leon Gadsden - Kyle McKnight", orgName: "Santee Cooper", tierID: "Journeyman", year: 2019, compNum: "205"},
{ teamName: "SC 6", groupNames: "Dow Hardee - Chad Williams - Joe Sawyer", orgName: "Santee Cooper", tierID: "Journeyman", year: 2019, compNum: "206"},
{ teamName: "SC 7", groupNames: "Drew Boatwright - Charlie Thompkins - Josh Sawyer", orgName: "Santee Cooper", tierID: "Journeyman", year: 2019, compNum: "207"},
{ teamName: "SC 8", groupNames: "Jay Ayers - Joe Shillinglaw - Kevin Rhode", orgName: "Santee Cooper", tierID: "Journeyman", year: 2019, compNum: "208"},
{ teamName: "SC 9", groupNames: "Brandon Clarey - Kyle McKnight - Sam Gorman", orgName: "Santee Cooper", tierID: "Journeyman", year: 2019, compNum: "209"}
];
// add apprentices
const aObj = {};
for (let i = 0; i < apprenticeArr.length; i++) {
  db.Organization.findOne({ name: apprenticeArr[i].orgName }).then((data) => {
    aObj.organizationID = data._id;
    db.Tier.findOne({ name: apprenticeArr[i].tierID }).then((data) => {
      aObj.tierID = data._id;
      db.Years.findOne({ name: apprenticeArr[i].year }).then((data) => {
        aObj.yearID = data._id;
        db.Competitor.create({
          firstName: apprenticeArr[i].firstName,
          lastName: apprenticeArr[i].lastName,
          organizationID: aObj.organizationID,
          tierID: aObj.tierID,
          yearID: aObj.yearID,
          competitorNumber: apprenticeArr[i].compNum
        });
      })
    });
  });
}
// add journeymen
const jObj = {};
for (let i = 0; i < journeymanArr.length; i++) {
  db.Organization.findOne({ name: journeymanArr[i].orgName }).then((data) => {
    jObj.organizationID = data._id;
    db.Tier.findOne({ name: journeymanArr[i].tierID }).then((data) => {
      jObj.tierID = data._id;
      db.Years.findOne({ name: journeymanArr[i].year }).then((data) => {
        jObj.yearID = data._id;
        db.Competitor.create({
          teamName: journeymanArr[i].teamName,
          groupNames: journeymanArr[i].groupNames,
          organizationID: jObj.organizationID,
          tierID: jObj.tierID,
          yearID: jObj.yearID,
          competitorNumber: journeymanArr[i].compNum
        });
      })
    });
  });
}

