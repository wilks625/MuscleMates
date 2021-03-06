const db = require('./connection');
const { User, Activities } = require('../models');

db.once('open', async () => {

  await User.deleteMany();

  await User.create(
    {
    username: "Computers4real" ,
    firstname: "Bill",
    lastname: "Winklehorn",
    email: "WinklehornB007@aol.com",
    password: "Trailmixed23",
  },
  {
    username: "Pizza4me" ,
    firstname: "Alex",
    lastname: "Winklehorn",
    email: "WinklehornB006@yahoo.com",
    password: "2sexy4exercise",
  },
  {
    username: "BigTyme" ,
    firstname: "Don",
    lastname: "Burgundy",
    email: "Burgandy@channel8news.com",
    password: "TooSwole4this",
  },
  {
    username: "Pump&Tone",
    firstname: "Jacob",
    lastname: "Fransisco",
    email: "RunWitMe4fun@gmail.com",
    password: "Igot#theruns100",
  },
  {
    username: "SebastianJ88",
    firstname: "Sebastian",
    lastname: "Jeffersly",
    email: "Jeffersly02@hotmail.com",
    password: "Bo$$88",
  },
  {
    username: "MiricaleMuscles" ,
    firstname: "Robert",
    lastname: "Gatsby",
    email: "Gatsby@gmail.com",
    password: "Bobis2sexy",
  },
  {
    username: "Rafeal98" ,
    firstname: "Rafeal",
    lastname: "Boardbottom",
    email: "BottomB@yahoo.com",
    password: "Started@Dabottom2",
  },
  {
    username: "Kevin99" ,
    firstname: "Kevin",
    lastname: "Kandistidious",
    email: "StudiousK@gmail.com",
    password: "#Kevin400",
  },
  {
    username: "McLuvin" ,
    firstname: "Marlon",
    lastname: "Davidson",
    email: "DavidsonM@aol.com",
    password: "#Cash69Money",
  },
  {
    username: "Rod00" ,
    firstname: "Rodney",
    lastname: "Redwarn",
    email: "RedwarnR@hotmail.com",
    password: "#Read2me",
  },
  {
    username: "JacobisPumped",
    firstname: "Jacob",
    lastname: "Johnson",
    email: "JohnsonJ12@gmail.com",
    password: "#Pumpup2X",
  },
  {
    username: "Stephen0625",
    firstname: "Steve",
    lastname: "Wilkes",
    email: "WilkesS625@yahoo.com",
    password: "2sexy4this",
  },
  {
    username: "Alexander12",
    firstname: "Alex",
    lastname: "Vassoon",
    email: "VassoonA89@gmail.com",
    password: "123456",
  },
  {
    username: "Carlos359",
    firstname: "Carlos",
    lastname: "Laramie",
    email: "LaramieC43@gmail.com",
    password: "111111",
  },
  {
    username: "Izzy523",
    firstname: "Izzy",
    lastname: "Oble",
    email: "ObleIsHere23@yahoo.com",
    password: "@roadRash23",
  },
  {
    username: "EmilyLifts",
    firstname: "Emily",
    lastname: "Edelbrock",
    email: "EdlebrockE22@gmail.com",
    password: "Race4This",
  },
  {
    username: "JoannaB",
    firstname: "Joanna",
    lastname: "Blaze",
    email: "BlazeJ@hotmail.com",
    password: "#BlazinJohn",
  },
  {
    username: "AmandaBynes",
    firstname: "Amanda",
    lastname: "Bynes",
    email: "BynesA626@gmail.com",
    password: "Bynes626runs",
  },
  {
    username: "Jessica",
    firstname: "Jessica",
    lastname: "Raile",
    email: "raileJ12@gmail.com",
    password: "Kick2Success",
  },
  {
    username: "Lisa22",
    firstname: "Lisa",
    lastname: "Bellward",
    email: "BellwardL22@hotmail.com",
    password: "BellsforLisa22",
  }
  );

  console.log('users seeded');

  process.exit();
});