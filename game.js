'use strict';
/* ===== PLAYER + CLUB DATA (merged in from players2026.js) ===== */
/* AFL 2026 player pool - generated from the supplied season averages (disposals, marks, goals, tackles per game).
   Row: [full name, short name, club index, position, rating, KIC, MAR, SPD, END, price, disposals, marks, goals, tackles] */
window.CLUBS26 = [{"name":"Adelaide Crows","short":"ADE","a":"#0b2a5b","b":"#e31937","s":"#0b2a5b","k":"#0b2a5b"},{"name":"Brisbane Lions","short":"BRL","a":"#7a0b2c","b":"#fdb913","s":"#0b2a5b","k":"#7a0b2c"},{"name":"Carlton Blues","short":"CAR","a":"#0e1e45","b":"#ffffff","s":"#0e1e45","k":"#0e1e45"},{"name":"Collingwood Magpies","short":"COL","a":"#111111","b":"#ffffff","s":"#111111","k":"#111111"},{"name":"Essendon Bombers","short":"ESS","a":"#111111","b":"#d6001c","s":"#111111","k":"#111111"},{"name":"Fremantle Dockers","short":"FRE","a":"#2a0d54","b":"#ffffff","s":"#ffffff","k":"#2a0d54"},{"name":"Geelong Cats","short":"GEE","a":"#0b2a5b","b":"#ffffff","s":"#0b2a5b","k":"#0b2a5b"},{"name":"Gold Coast Suns","short":"GCS","a":"#d6001c","b":"#fdb913","s":"#d6001c","k":"#d6001c"},{"name":"Greater Western Sydney Giants","short":"GWS","a":"#f47920","b":"#3b3b3b","s":"#3b3b3b","k":"#3b3b3b"},{"name":"Hawthorn Hawks","short":"HAW","a":"#4d2004","b":"#fbbf15","s":"#4d2004","k":"#4d2004"},{"name":"Melbourne Demons","short":"MEL","a":"#0a1f44","b":"#d71f26","s":"#0a1f44","k":"#d71f26"},{"name":"North Melbourne Kangaroos","short":"NTH","a":"#0052a5","b":"#ffffff","s":"#0052a5","k":"#0052a5"},{"name":"Port Adelaide Power","short":"PTA","a":"#00a3ad","b":"#111111","s":"#ffffff","k":"#111111"},{"name":"Richmond Tigers","short":"RIC","a":"#111111","b":"#ffd200","s":"#111111","k":"#111111"},{"name":"St Kilda Saints","short":"STK","a":"#d6001c","b":"#111111","s":"#111111","k":"#d6001c"},{"name":"Sydney Swans","short":"SYD","a":"#d6001c","b":"#ffffff","s":"#ffffff","k":"#d6001c"},{"name":"West Coast Eagles","short":"WCE","a":"#0b3a8a","b":"#f4c20d","s":"#0b3a8a","k":"#0b3a8a"},{"name":"Western Bulldogs","short":"WBD","a":"#1b4fa8","b":"#d6001c","s":"#1b4fa8","k":"#1b4fa8"}];
window.PLAYERS26 = [["Jordan Dawson","J. Dawson",0,"MID",94,94,89,89,94,15030,26.5,5.2,1.0,5.7],["Nick Daicos","N. Daicos",3,"MID",94,94,81,87,94,15030,34.7,4.0,1.13,2.5],["Isaac Heeney","I. Heeney",15,"MID",94,94,91,93,92,15030,22.4,5.6,1.9,4.5],["Marcus Bontempelli","M. Bontempelli",17,"MID",94,94,86,94,94,15030,27.5,4.6,1.3,6.2],["Bailey Smith","B. Smith",6,"MID",93,94,81,91,94,13530,32.2,4.0,0.46,4.9],["Christian Petracca","C. Petracca",10,"MID",93,94,82,92,93,13530,26.8,4.2,1.2,4.8],["Jesse Hogan","J. Hogan",8,"FWD",93,93,93,92,75,13530,12.5,6.8,2.9,1.2],["Tim Taranto","T. Taranto",13,"MID",93,93,85,87,94,13530,27.2,4.5,0.7,5.8],["Jack Steele","J. Steele",14,"MID",93,92,82,85,94,13530,25.8,4.1,0.6,7.2],["Chad Warner","C. Warner",15,"MID",93,94,78,90,93,13530,26.5,3.5,1.2,4.9],["Errol Gulden","E. Gulden",15,"MID",93,94,87,93,93,13530,29.8,4.8,0.9,4.2],["Toby Greene","T. Greene",8,"FWD",92,93,84,84,84,12180,16.8,4.5,2.4,2.8],["Tom Green","T. Green",8,"MID",92,93,79,84,93,12180,29.2,3.8,0.5,5.6],["Clayton Oliver","C. Oliver",10,"MID",92,93,76,90,93,12180,29.5,3.1,0.4,6.5],["Connor Rozee","C. Rozee",12,"MID",92,93,82,86,92,12180,25.8,4.2,0.9,4.6],["Zak Butters","Z. Butters",12,"MID",92,93,80,94,93,12180,27.5,3.9,0.8,5.1],["Adam Treloar","A. Treloar",17,"MID",92,93,82,93,93,12180,28.2,4.1,0.7,4.5],["Tom Liberatore","T. Liberatore",17,"MID",92,92,73,88,94,12180,26.1,2.8,0.5,8.5],["Izak Rankine","I. Rankine",0,"MID",91,92,82,92,91,10970,24.4,4.3,1.14,4.1],["Will Ashcroft","W. Ashcroft",1,"MID",91,93,86,88,92,10970,28.6,4.9,0.63,3.4],["Zac Bailey","Z. Bailey",1,"FWD",91,92,89,81,88,10970,21.5,5.5,1.35,2.9],["Josh Kelly","J. Kelly",8,"MID",91,92,83,91,91,10970,26.8,4.5,0.8,3.9],["Jai Newcombe","J. Newcombe",9,"MID",91,91,78,89,92,10970,24.8,3.6,0.7,6.2],["Luke Davies-Uniacke","L. Davies-Uniacke",11,"MID",91,92,78,94,92,10970,27.4,3.6,0.6,5.2],["Brad Crouch","B. Crouch",14,"MID",91,91,77,88,93,10970,26.5,3.5,0.4,6.8],["Sam Walsh","S. Walsh",2,"MID",90,92,81,93,92,9870,29.1,4.2,0.32,4.1],["Zach Merrett","Z. Merrett",4,"MID",90,91,84,88,91,9870,27.3,4.6,0.43,4.7],["Noah Anderson","N. Anderson",7,"MID",90,91,86,88,91,9870,27.6,5.1,0.32,3.6],["Will Day","W. Day",9,"MID",90,90,86,91,91,9870,25.1,5.0,0.5,4.5],["Jack Viney","J. Viney",10,"MID",90,90,76,86,92,9870,24.1,3.5,0.5,6.9],["Harry Sheezel","H. Sheezel",11,"DEF",90,91,91,86,91,9870,28.2,6.1,0.3,2.8],["Jack Sinclair","J. Sinclair",14,"DEF",90,91,88,79,91,9870,28.1,5.2,0.4,3.2],["Luke Parker","L. Parker",15,"MID",90,91,80,83,91,9870,23.5,4.1,0.8,5.2],["Lachie Neale","L. Neale",1,"MID",89,91,87,91,90,8890,28.7,5.3,0.19,2.6],["Logan Morris","L. Morris",1,"FWD",89,90,84,90,73,8890,11.5,4.8,2.77,1.5],["Patrick Cripps","P. Cripps",2,"MID",89,91,71,87,91,8890,26.2,2.6,0.64,4.9],["Josh Treacy","J. Treacy",5,"FWD",89,88,90,85,76,8890,12.3,6.2,2.11,2.3],["Jeremy Cameron","J. Cameron",6,"FWD",89,89,90,82,76,8890,14.3,5.9,2.16,1.1],["John Noble","J. Noble",7,"DEF",89,90,92,82,89,8890,26.3,7.1,0.3,1.9],["Bayley Fritsch","B. Fritsch",10,"FWD",89,89,84,81,76,8890,12.8,4.8,2.4,1.8],["Stephen Coniglio","S. Coniglio",8,"MID",88,89,80,88,89,8000,23.5,4.2,0.7,4.1],["Lachie Whitfield","L. Whitfield",8,"MID",88,89,90,92,88,8000,26.2,6.5,0.3,2.1],["Jason Horne-Francis","J. Horne-Francis",12,"MID",88,89,74,82,89,8000,21.4,3.1,1.1,4.8],["Jacob Hopper","J. Hopper",13,"MID",88,89,77,92,90,8000,24.5,3.8,0.5,5.2],["Max King","M. King",14,"FWD",88,88,88,85,70,8000,10.2,5.5,2.7,1.0],["Tom Papley","T. Papley",15,"FWD",88,89,74,88,81,8000,14.2,3.2,2.2,3.5],["Jake Waterman","J. Waterman",16,"FWD",88,88,89,84,72,8000,11.5,5.9,2.4,1.2],["George Hewett","G. Hewett",2,"MID",87,88,78,89,88,7200,23.6,4.1,0.62,4.2],["Josh Daicos","J. Daicos",3,"MID",87,89,88,82,89,7200,27.1,5.8,0.04,3.1],["Andrew Brayshaw","A. Brayshaw",5,"MID",87,88,74,88,90,7200,24.7,3.3,0.3,6.0],["Max Holmes","M. Holmes",6,"MID",87,89,82,83,89,7200,27.9,4.6,0.25,2.8],["Touk Miller","T. Miller",7,"MID",87,89,76,89,89,7200,25.0,3.8,0.52,4.2],["Matt Rowell","M. Rowell",7,"MID",87,88,70,88,91,7200,26.2,2.3,0.17,6.9],["Callum Mills","C. Mills",15,"MID",87,87,85,81,89,7200,23.2,5.1,0.3,5.4],["Harley Reid","H. Reid",16,"MID",87,88,77,81,88,7200,21.2,3.8,0.9,4.6],["Shai Bolton","S. Bolton",5,"MID",86,89,71,89,87,6490,22.8,2.9,0.96,3.7],["Oliver Dempsey","O. Dempsey",6,"MID",86,87,85,85,82,6490,19.8,5.2,1.2,2.0],["Jy Simpkin","J. Simpkin",11,"MID",86,87,74,88,88,6490,23.8,3.5,0.5,4.8],["Mitch Owens","M. Owens",14,"FWD",86,85,85,84,82,6490,15.2,5.1,1.4,3.9],["Elliot Yeo","E. Yeo",16,"MID",86,87,80,87,88,6490,22.5,4.2,0.5,5.1],["Matt Priddis","M. Priddis",16,"MID",86,88,75,83,89,6490,24.0,3.5,0.5,5.0],["Aaron Naughton","A. Naughton",17,"FWD",86,85,90,79,71,6490,11.1,6.5,2.1,1.6],["Alex Neal-Bullen","A. Neal-Bullen",10,"MID",85,86,83,80,86,5840,20.2,4.9,0.8,3.8],["Darcy Fogarty","D. Fogarty",0,"FWD",85,85,84,82,73,5840,11.6,5.1,2.12,2.1],["Josh Dunkley","J. Dunkley",1,"MID",85,82,81,82,89,5840,21.3,4.6,0.15,7.0],["Dayne Zorko","D. Zorko",1,"DEF",85,87,89,79,86,5840,25.0,6.5,0.24,2.0],["Kai Lohmann","K. Lohmann",1,"FWD",85,85,75,80,76,5840,12.7,3.6,2.04,3.2],["Jordan de Goey","J. de Goey",3,"FWD",85,87,82,82,84,5840,21.4,4.8,0.95,2.4],["Brent Daniels","B. Daniels",8,"FWD",85,86,77,79,84,5840,18.1,4.1,1.2,3.9],["Nick Larkey","N. Larkey",11,"FWD",85,86,85,87,68,5840,9.5,5.2,2.6,1.0],["Wayne Milera","W. Milera",0,"DEF",84,86,86,84,86,5260,25.1,5.8,0.15,2.4],["Archie Roberts","A. Roberts",4,"DEF",84,88,86,78,86,5260,28.1,5.5,0.1,1.2],["Will Setterfield","W. Setterfield",4,"MID",84,85,75,86,87,5260,23.3,3.8,0.27,5.2],["Luke Jackson","L. Jackson",5,"RUC",84,85,70,67,86,5260,18.4,2.9,1.07,5.1],["Karl Amon","K. Amon",9,"MID",84,86,84,90,86,5260,23.5,5.2,0.5,2.5],["Angus Brayshaw","A. Brayshaw",10,"MID",84,85,80,85,87,5260,22.0,4.5,0.4,4.5],["Sebastian Ross","S. Ross",14,"MID",84,85,78,81,87,5260,23.2,4.2,0.3,4.5],["Ed Richards","E. Richards",17,"DEF",84,85,82,85,87,5260,23.4,4.8,0.3,3.9],["Charlie Cameron","C. Cameron",1,"FWD",83,85,74,83,72,4730,11.8,3.7,2.26,2.0],["Ben Ainsworth","B. Ainsworth",2,"FWD",83,84,85,85,77,4730,17.7,5.4,1.2,1.4],["Caleb Serong","C. Serong",5,"MID",83,86,68,89,87,4730,24.5,2.3,0.46,4.5],["Shaun Mannagh","S. Mannagh",6,"FWD",83,86,68,79,81,4730,17.5,2.6,1.52,3.0],["Kysaiah Pickett","K. Pickett",10,"FWD",83,84,71,84,77,4730,13.5,3.1,1.9,3.5],["Sam Powell-Pepper","S. Powell-Pepper",12,"FWD",83,81,75,85,83,4730,15.5,3.8,1.1,5.2],["Nasiah Wanganeen-Milera","N. Wanganeen-Milera",14,"DEF",83,85,86,83,85,4730,24.5,5.8,0.2,2.1],["Sam Berry","S. Berry",0,"MID",82,82,68,81,87,4260,22.6,2.6,0.08,7.0],["Rory Laird","R. Laird",0,"DEF",82,83,87,79,84,4260,23.3,6.5,0.05,2.5],["Riley Thilthorpe","R. Thilthorpe",0,"FWD",82,82,84,77,72,4260,13.1,5.5,1.68,1.6],["Jye Amiss","J. Amiss",5,"FWD",82,83,79,75,67,4260,9.3,4.5,2.46,1.0],["Shannon Neale","S. Neale",6,"FWD",82,82,78,76,71,4260,10.4,4.3,2.08,2.6],["Jake Lloyd","J. Lloyd",15,"DEF",82,84,87,77,84,4260,24.5,6.2,0.1,1.8],["Bailey Dale","B. Dale",17,"DEF",82,85,85,77,84,4260,23.5,5.5,0.3,2.1],["Jamarra Ugle-Hagan","J. Ugle-Hagan",17,"FWD",82,83,82,82,68,4260,10.8,4.9,2.2,1.1],["Josh Rachele","J. Rachele",0,"FWD",81,84,70,83,76,3840,15.6,3.2,1.68,2.3],["Oscar Allen","O. Allen",16,"FWD",81,82,82,77,67,3840,10.2,5.1,2.2,1.1],["Jagga Smith","J. Smith",2,"MID",81,85,70,78,85,3840,24.9,3.1,0.4,2.7],["Will Hayward","W. Hayward",2,"FWD",81,82,85,77,75,3840,16.3,5.7,1.14,1.9],["James Sicily","J. Sicily",9,"DEF",81,81,88,73,82,3840,21.5,7.4,0.2,1.8],["Conor Nash","C. Nash",9,"MID",81,81,71,81,86,3840,20.5,3.2,0.3,6.1],["Tom Lynch","T. Lynch",13,"FWD",81,81,84,84,67,3840,10.1,5.4,2.1,1.3],["Logan McDonald","L. McDonald",15,"FWD",81,82,82,85,67,3840,10.8,5.1,2.1,1.2],["Dan Houston","D. Houston",3,"DEF",80,81,86,73,82,3450,21.2,6.3,0.25,2.5],["Daniel McStay","D. McStay",3,"FWD",80,79,75,74,71,3450,10.1,4.1,1.96,3.0],["Jade Gresham","J. Gresham",14,"FWD",80,83,70,80,80,3450,18.5,3.2,1.1,3.1],["Patrick Voss","P. Voss",5,"FWD",80,80,74,83,72,3450,10.7,4.0,1.88,3.2],["Tom Powell","T. Powell",11,"MID",80,81,73,78,83,3450,19.5,3.8,0.6,4.2],["Jack Graham","J. Graham",13,"MID",80,79,72,82,84,3450,18.0,3.5,0.6,5.8],["Mason Wood","M. Wood",14,"MID",80,81,85,84,78,3450,18.1,5.8,0.8,2.1],["Bradley Hill","B. Hill",14,"MID",80,83,82,85,81,3450,20.8,5.1,0.6,2.2],["Nic Newman","N. Newman",2,"DEF",79,79,86,81,81,3110,21.4,6.8,0.06,2.5],["Jack Crisp","J. Crisp",3,"MID",79,79,80,82,83,3110,20.4,4.9,0.25,4.2],["Mitchell Lewis","M. Lewis",9,"FWD",79,80,82,77,65,3110,9.8,5.2,2.1,1.1],["Colby McKercher","C. McKercher",11,"MID",79,83,78,79,83,3110,23.2,4.5,0.3,2.5],["Darcy Byrne-Jones","D. Byrne-Jones",12,"FWD",79,82,76,79,80,3110,19.2,4.2,0.8,2.8],["Dion Prestia","D. Prestia",13,"MID",79,82,70,83,84,3110,21.5,3.2,0.4,4.5],["Dom Sheed","D. Sheed",16,"MID",79,82,71,84,83,3110,21.8,3.5,0.4,3.8],["Tim English","T. English",17,"RUC",79,80,82,70,80,3110,18.9,5.2,0.6,3.1],["Billy Dowling","B. Dowling",0,"FWD",78,77,80,83,77,2800,14.7,5.0,1.0,3.7],["Lachie Schultz","L. Schultz",3,"FWD",78,77,74,77,78,2800,14.1,4.1,1.09,4.6],["Hayden Young","H. Young",5,"MID",78,81,73,84,81,2800,19.3,3.9,0.67,3.5],["Callan Ward","C. Ward",8,"MID",78,79,72,80,82,2800,18.9,3.8,0.5,4.8],["Cameron Zurhaar","C. Zurhaar",11,"FWD",78,78,74,74,73,2800,12.8,4.1,1.5,3.2],["Mitch Georgiades","M. Georgiades",12,"FWD",78,79,80,75,65,2800,9.1,4.9,2.2,1.1],["Jayden Short","J. Short",13,"DEF",78,81,81,71,81,2800,22.4,5.1,0.3,2.2],["Rowan Marshall","R. Marshall",14,"RUC",78,78,77,69,81,2800,17.8,4.5,0.6,4.2],["Harry McKay","H. McKay",2,"FWD",77,78,81,79,69,2520,13.1,5.3,1.52,1.4],["Blake Acres","B. Acres",2,"MID",77,78,85,76,78,2520,20.2,6.4,0.25,2.2],["Scott Pendlebury","S. Pendlebury",3,"MID",77,81,76,80,81,2520,22.5,4.4,0.29,2.6],["Patrick Dangerfield","P. Dangerfield",6,"FWD",77,81,70,79,72,2520,14.9,3.5,1.58,1.8],["Oliver Henry","O. Henry",6,"FWD",77,80,70,79,68,2520,11.4,3.5,2.0,2.0],["Bodhi Uwland","B. Uwland",7,"DEF",77,80,85,80,81,2520,23.1,6.3,0.04,1.7],["Harry Himmelberg","H. Himmelberg",8,"FWD",77,78,83,79,72,2520,15.2,5.8,1.1,1.8],["Zak Jones","Z. Jones",14,"MID",77,79,72,79,82,2520,19.5,3.8,0.5,4.2],["Taylor Walker","T. Walker",0,"FWD",76,78,77,73,65,2270,10.7,4.7,1.94,1.2],["Hugh McCluggage","H. McCluggage",1,"MID",76,78,73,81,78,2270,17.9,4.1,0.76,3.3],["Adam Cerra","A. Cerra",2,"MID",76,77,79,79,81,2270,20.5,5.1,0.18,3.6],["Sam Durham","S. Durham",4,"MID",76,79,70,78,81,2270,20.1,3.6,0.45,4.0],["Nate Caddy","N. Caddy",4,"FWD",76,79,74,77,64,2270,10.4,4.2,2.09,1.1],["Murphy Reid","M. Reid",5,"MID",76,82,68,84,81,2270,23.2,3.2,0.52,2.1],["Jacob van Rooyen","J. van Rooyen",10,"FWD",76,78,78,73,64,2270,10.1,4.8,2.0,1.2],["Max Gawn","M. Gawn",10,"RUC",76,76,76,68,77,2270,16.2,4.8,0.8,3.5],["Travis Boak","T. Boak",12,"MID",76,79,73,84,80,2270,19.8,4.1,0.5,3.5],["Levi Ashcroft","L. Ashcroft",1,"MID",75,78,82,80,75,2040,19.4,5.7,0.56,1.4],["Brodie Kemp","B. Kemp",2,"FWD",75,75,80,76,67,2040,11.2,5.2,1.56,2.0],["Patrick Lipinski","P. Lipinski",3,"MID",75,79,75,78,79,2040,20.4,4.5,0.5,2.4],["Darcy Parish","D. Parish",4,"MID",75,81,70,83,81,2040,24.5,3.7,0.14,2.4],["Ben King","B. King",7,"FWD",75,79,70,74,63,2040,7.6,3.7,2.61,0.6],["Liam Duggan","L. Duggan",16,"DEF",75,78,82,75,80,2040,21.8,5.5,0.1,2.5],["Cody Weightman","C. Weightman",17,"FWD",75,78,67,80,69,2040,11.2,3.0,1.9,2.8],["Caleb Daniel","C. Daniel",17,"DEF",75,79,76,73,80,2040,22.1,4.5,0.2,2.8],["Oliver Florent","O. Florent",2,"DEF",74,78,79,74,79,1840,22.6,5.2,0.08,2.2],["Cooper Lord","C. Lord",2,"MID",74,77,77,81,78,1840,20.1,4.9,0.36,2.4],["Elijah Tsatas","E. Tsatas",4,"MID",74,81,74,77,79,1840,24.2,4.3,0.17,1.5],["James Worpel","J. Worpel",6,"MID",74,75,64,77,82,1840,18.4,2.6,0.36,6.3],["Connor Macdonald","C. Macdonald",9,"FWD",74,76,72,74,76,1840,16.8,4.1,0.8,3.1],["Christian Salem","C. Salem",10,"DEF",74,77,81,70,78,1840,21.2,5.5,0.2,2.1],["Aaron Hall","A. Hall",11,"DEF",74,77,81,77,78,1840,21.0,5.5,0.2,2.0],["Todd Marshall","T. Marshall",12,"FWD",74,75,78,75,64,1840,10.5,4.9,1.8,1.4],["Justin McInerney","J. McInerney",15,"MID",74,77,75,80,77,1840,19.1,4.5,0.5,2.8],["Ben Keays","B. Keays",0,"FWD",73,77,63,79,72,1660,14.4,2.7,1.36,3.1],["Tim Membrey","T. Membrey",3,"FWD",73,75,79,70,63,1660,11.3,5.2,1.65,1.0],["Blake Hardwick","B. Hardwick",9,"DEF",73,75,81,72,77,1660,19.8,5.8,0.2,2.4],["Trent Rivers","T. Rivers",10,"DEF",73,76,79,73,78,1660,20.5,5.2,0.2,2.5],["Tom Sparrow","T. Sparrow",10,"MID",73,75,67,77,79,1660,18.4,3.2,0.5,4.5],["James Harmes","J. Harmes",10,"MID",73,75,68,76,79,1660,18.5,3.5,0.5,4.2],["Brodie Grundy","B. Grundy",15,"RUC",73,75,70,69,78,1660,17.5,3.9,0.6,3.8],["Joel Amartey","J. Amartey",15,"FWD",73,75,75,70,63,1660,10.1,4.5,1.9,1.1],["Cam Rayner","C. Rayner",1,"FWD",72,75,71,75,72,1490,15.8,4.1,1.0,2.5],["Harry Perryman","H. Perryman",8,"MID",72,74,74,79,77,1490,18.5,4.5,0.4,3.5],["Peter Wright","P. Wright",4,"FWD",72,75,73,71,65,1490,12.1,4.3,1.56,1.4],["Tanner Bruhn","T. Bruhn",6,"MID",72,75,75,79,79,1490,21.5,4.7,0.04,3.0],["Lawson Humphries","L. Humphries",6,"DEF",72,75,80,68,76,1490,20.3,5.6,0.21,2.1],["Gryan Miers","G. Miers",6,"FWD",72,76,76,69,76,1490,20.2,4.8,0.35,2.3],["Darcy Tucker","D. Tucker",11,"MID",72,74,71,76,77,1490,18.1,4.1,0.5,3.5],["Toby Nankervis","T. Nankervis",13,"RUC",72,71,72,62,77,1490,15.8,4.2,0.5,4.9],["Marcus Windhager","M. Windhager",14,"MID",72,73,68,81,79,1490,17.8,3.5,0.4,4.8],["Darcy Wilmot","D. Wilmot",1,"DEF",71,73,82,70,75,1340,20.7,6.3,0.04,1.6],["Sam Swadling","S. Swadling",3,"MID",71,78,70,73,73,1340,20.0,4.0,0.67,1.1],["Jordan Clark","J. Clark",5,"DEF",71,77,75,72,77,1340,22.4,4.7,0.07,2.0],["Jack Bowes","J. Bowes",6,"MID",71,76,68,79,73,1340,17.6,3.7,0.78,2.4],["Tom McDonald","T. McDonald",10,"FWD",71,73,77,71,63,1340,11.5,5.1,1.5,1.1],["Hugh Greenwood","H. Greenwood",11,"MID",71,71,63,82,79,1340,16.5,2.8,0.4,6.2],["Hunter Clark","H. Clark",14,"DEF",71,74,76,72,76,1340,19.2,4.8,0.3,2.8],["Nick Blakey","N. Blakey",15,"DEF",71,75,78,77,75,1340,20.8,5.2,0.2,1.8],["Rhylee West","R. West",17,"FWD",71,73,66,75,71,1340,13.5,3.2,1.2,3.5],["Josh Worrell","J. Worrell",0,"DEF",70,74,78,69,76,1210,21.6,5.5,0.0,1.7],["Oliver Hollands","O. Hollands",2,"MID",70,69,79,71,74,1210,16.9,5.5,0.29,3.5],["Brayden Maynard","B. Maynard",3,"DEF",70,69,77,72,77,1210,18.0,5.2,0.06,4.0],["Jye Caldwell","J. Caldwell",4,"MID",70,72,63,75,78,1210,18.0,2.9,0.35,4.9],["Vigo Visentini","V. Visentini",4,"RUC",70,68,80,67,73,1210,15.3,6.0,0.33,3.7],["Luke Ryan","L. Ryan",5,"DEF",70,72,82,74,74,1210,19.8,6.7,0.0,1.8],["Wil Powell","W. Powell",7,"MID",70,70,75,72,76,1210,17.3,4.8,0.25,3.9],["Noah Cumberland","N. Cumberland",13,"FWD",70,73,67,69,66,1210,12.1,3.5,1.5,2.1],["Jayden Hunt","J. Hunt",16,"DEF",70,73,75,68,74,1210,18.5,4.8,0.4,2.5],["Jarrod Berry","J. Berry",1,"MID",69,71,77,72,74,1090,18.4,5.2,0.23,2.6],["Nick Haynes","N. Haynes",2,"DEF",69,68,82,70,70,1090,18.1,7.8,0.0,1.3],["Ned Long","N. Long",3,"MID",69,68,61,74,78,1090,16.2,2.5,0.32,6.5],["Tom Stewart","T. Stewart",6,"DEF",69,73,79,70,74,1090,20.7,5.6,0.09,1.4],["Toby Bedford","T. Bedford",8,"FWD",69,70,64,75,71,1090,13.2,3.1,1.0,4.2],["Jarman Impey","J. Impey",9,"DEF",69,72,74,67,75,1090,19.1,4.8,0.2,2.8],["Liam Shiels","L. Shiels",11,"MID",69,70,68,75,75,1090,16.8,3.9,0.4,4.1],["Kane Farrell","K. Farrell",12,"DEF",69,72,74,68,73,1090,18.5,4.8,0.4,2.2],["Andrew Gaff","A. Gaff",16,"MID",69,75,71,81,74,1090,20.5,4.2,0.3,2.0],["James Peatling","J. Peatling",0,"MID",68,72,61,74,78,980,19.6,2.7,0.19,4.5],["Isaac Cumming","I. Cumming",8,"DEF",68,71,73,75,74,980,19.1,4.8,0.2,2.5],["Francis Evans","F. Evans",2,"FWD",68,71,62,69,70,980,13.6,2.9,1.04,3.7],["Jamie Elliott","J. Elliott",3,"FWD",68,72,65,70,63,980,11.8,3.5,1.55,1.5],["Ben Brown","B. Brown",10,"FWD",68,71,72,70,60,980,9.5,4.5,1.8,0.8],["Paul Curtis","P. Curtis",11,"FWD",68,71,63,76,67,980,11.5,3.0,1.4,3.2],["Tristan Xerri","T. Xerri",11,"RUC",68,66,64,60,76,980,14.5,3.2,0.4,6.1],["Nick Vlastuin","N. Vlastuin",13,"DEF",68,69,80,74,72,980,18.2,6.1,0.1,2.2],["Jack Ross","J. Ross",13,"MID",68,71,64,75,76,980,17.8,3.1,0.4,4.1],["Eric Hipwood","E. Hipwood",1,"FWD",67,69,71,70,61,880,10.4,4.5,1.43,1.7],["Jacob Farrow","J. Farrow",4,"DEF",67,68,79,71,70,880,17.6,6.1,0.19,1.8],["Karl Worner","K. Worner",5,"DEF",67,68,79,70,72,880,18.6,6.1,0.0,2.3],["Mac Andrew","M. Andrew",7,"DEF",67,67,80,65,70,880,17.7,6.7,0.09,1.6],["Bailey Humphrey","B. Humphrey",7,"FWD",67,70,61,72,68,880,13.6,2.9,1.1,3.0],["Josh Weddle","J. Weddle",9,"DEF",67,70,76,67,71,880,17.8,5.2,0.3,2.1],["Kamdyn McIntosh","K. McIntosh",13,"MID",67,69,74,73,71,880,16.8,4.9,0.4,2.5],["Jack Petruccelle","J. Petruccelle",16,"FWD",67,70,63,75,69,880,13.5,3.1,1.0,3.5],["Reuben Ginbey","R. Ginbey",16,"MID",67,66,61,77,76,880,15.8,2.8,0.3,5.8],["Elijah Hewett","E. Hewett",16,"MID",67,70,62,72,74,880,16.5,3.0,0.5,4.2],["Brayden Cook","B. Cook",0,"MID",66,70,72,70,68,790,16.7,4.7,0.5,1.9],["Jeremy Sharp","J. Sharp",5,"MID",66,66,78,72,61,790,12.0,6.0,1.0,1.0],["Jack Martin","J. Martin",6,"FWD",66,67,68,67,64,790,11.2,4.1,1.22,2.4],["Joel Jeffrey","J. Jeffrey",7,"MID",66,69,76,78,69,790,17.3,5.3,0.32,1.9],["Darcy Jones","D. Jones",8,"FWD",66,69,60,73,69,790,14.1,2.8,0.9,3.5],["Jack Scrimshaw","J. Scrimshaw",9,"DEF",66,68,78,68,70,790,18.2,5.9,0.1,1.8],["Quinton Narkle","Q. Narkle",12,"FWD",66,69,63,75,71,790,15.1,3.2,0.7,3.5],["Toby Boak","T. Boak",12,"MID",66,69,66,76,72,790,17.0,3.8,0.4,3.2],["Callum Wilkie","C. Wilkie",14,"DEF",66,64,80,64,68,790,16.5,7.6,0.0,1.8],["Oscar Ryan","O. Ryan",0,"FWD",65,68,66,66,70,720,16.0,4.0,0.5,3.0],["Jaspa Fletcher","J. Fletcher",1,"DEF",65,69,76,71,70,720,19.0,5.5,0.11,1.4],["Billy Wilson","B. Wilson",2,"DEF",65,69,74,68,72,720,19.9,5.1,0.0,1.9],["Mitch McGovern","M. McGovern",2,"FWD",65,67,68,74,61,720,10.4,4.2,1.36,1.9],["Sullivan Robey","S. Robey",4,"MID",65,69,62,68,71,720,16.1,3.1,0.6,3.2],["Michael Frederick","M. Frederick",5,"FWD",65,68,65,74,64,720,11.6,3.7,1.23,2.4],["Daniel Rioli","D. Rioli",7,"DEF",65,70,66,63,73,720,19.9,3.9,0.1,2.5],["Aaron Cadman","A. Cadman",8,"FWD",65,68,69,65,58,720,9.5,4.2,1.6,1.0],["Harrison Petty","H. Petty",10,"DEF",65,66,76,63,63,720,13.2,5.5,0.8,1.5],["Zane Duursma","Z. Duursma",11,"FWD",65,68,64,66,64,720,12.1,3.5,1.2,2.2],["Jake Soligo","J. Soligo",0,"MID",64,67,60,78,72,640,16.3,2.9,0.41,4.0],["Isaac Quaynor","I. Quaynor",3,"DEF",64,64,77,67,70,640,17.0,5.8,0.0,2.8],["Andrew McGrath","A. McGrath",4,"DEF",64,69,66,69,72,640,19.2,3.9,0.1,2.8],["Xavier Duursma","X. Duursma",4,"MID",64,66,73,74,67,640,15.9,4.9,0.44,2.0],["Dyson Sharp","D. Sharp",4,"MID",64,67,63,78,73,640,17.7,3.5,0.2,3.7],["Tobyn Murray","T. Murray",5,"FWD",64,67,58,70,68,640,13.0,2.0,1.0,4.0],["Tom Atkins","T. Atkins",6,"MID",64,68,57,77,76,640,18.1,1.4,0.16,5.9],["Finn Maginness","F. Maginness",9,"MID",64,63,61,71,72,640,14.2,3.1,0.4,5.2],["Eddie Ford","E. Ford",11,"FWD",64,66,63,68,64,640,11.8,3.5,1.1,2.8],["Shannon Hurn","S. Hurn",16,"DEF",64,66,76,71,69,640,18.0,5.5,0.1,1.8],["Darcy Cameron","D. Cameron",3,"RUC",63,65,64,55,72,580,17.7,3.8,0.13,3.5],["Beau McCreery","B. McCreery",3,"FWD",63,64,57,65,71,580,14.4,2.2,0.57,4.9],["Angus Anderson","A. Anderson",3,"FWD",63,66,58,71,65,580,11.6,2.5,1.18,3.3],["Neil Erasmus","N. Erasmus",5,"MID",63,67,66,76,70,580,17.3,4.0,0.3,2.7],["Jhye Clark","J. Clark",6,"MID",63,65,69,67,68,580,16.3,4.4,0.33,2.7],["Changkuoth Jiath","C. Jiath",9,"DEF",63,66,69,70,70,580,17.5,4.5,0.2,2.5],["Charlie Spargo","C. Spargo",10,"FWD",63,66,60,73,66,580,13.1,3.0,0.9,3.2],["Jase Burgoyne","J. Burgoyne",12,"DEF",63,67,70,69,69,580,17.8,4.6,0.2,2.2],["Trent Dumont","T. Dumont",12,"MID",63,65,63,76,71,580,16.2,3.5,0.3,3.8],["Noah Long","N. Long",16,"FWD",63,64,62,67,66,580,12.1,3.2,0.9,3.8],["Hugo Hall-Kahan","H. Hall-Kahan",0,"DEF",62,68,65,69,70,520,19.9,3.9,0.08,1.8],["Ryan Lester","R. Lester",1,"DEF",62,62,78,70,65,520,15.8,7.0,0.04,1.5],["Lincoln McCarthy","L. McCarthy",1,"FWD",62,64,70,72,63,520,13.0,4.8,0.75,1.8],["Mason Redman","M. Redman",4,"DEF",62,67,72,63,67,520,17.9,5.0,0.19,1.6],["Jay Polkinghorne","J. Polkinghorne",6,"FWD",62,65,65,66,56,520,7.8,3.9,1.75,1.1],["Ben Long","B. Long",7,"FWD",62,64,60,71,60,520,10.1,3.1,1.33,2.5],["Jed Walter","J. Walter",7,"FWD",62,66,61,73,56,520,7.8,3.2,1.83,1.3],["Jasper Pittard","J. Pittard",12,"DEF",62,66,69,69,68,520,17.5,4.5,0.2,2.0],["Maurice Rioli Jnr","M. Rioli Jnr",13,"FWD",62,62,58,72,66,520,10.5,2.8,1.0,4.5],["Ryan Byrnes","R. Byrnes",14,"MID",62,65,66,66,68,520,16.2,4.1,0.4,2.5],["Jamaine Jones","J. Jones",16,"DEF",62,64,67,69,68,520,16.2,4.1,0.3,2.8],["Daniel Curtin","D. Curtin",0,"MID",61,63,63,76,69,470,15.8,3.8,0.22,3.5],["Matt Carroll","M. Carroll",2,"FWD",61,67,67,69,60,470,14.0,4.3,0.9,0.8],["Edward Allan","E. Allan",3,"MID",61,65,56,67,73,470,16.6,1.4,0.32,5.2],["Matthew Johnson","M. Johnson",5,"MID",61,66,60,66,70,470,17.5,3.2,0.23,3.2],["Leo Lombard","L. Lombard",7,"MID",61,67,57,73,65,470,14.9,2.6,0.78,2.6],["Thomson Dow","T. Dow",13,"MID",61,64,58,70,70,470,16.5,2.8,0.3,3.8],["Sam Cumming","S. Cumming",13,"MID",61,66,58,76,66,470,15.4,2.9,0.6,2.7],["Braeden Campbell","B. Campbell",15,"DEF",61,64,67,68,67,470,16.5,4.2,0.3,2.2],["Ryan Maric","R. Maric",16,"FWD",61,63,64,71,60,470,11.2,3.8,1.1,2.1],["Lachie Bramble","L. Bramble",17,"DEF",61,65,67,66,68,470,17.5,4.2,0.2,2.2],["Toby McLean","T. McLean",17,"MID",61,64,60,76,69,470,16.0,3.0,0.4,3.5],["Elijah Hollands","E. Hollands",2,"FWD",60,67,57,72,63,420,15.5,2.8,0.83,1.3],["Jeremy Howe","J. Howe",3,"DEF",60,62,76,68,64,420,16.5,6.2,0.06,1.1],["Roan Steele","R. Steele",3,"FWD",60,66,58,66,63,420,14.5,3.0,0.79,1.9],["Archie Perkins","A. Perkins",4,"FWD",60,62,73,69,62,420,14.2,5.3,0.44,1.4],["Brayden Fiorini","B. Fiorini",4,"MID",60,68,58,73,60,420,15.0,3.0,1.0,0.5],["Nathan O'Driscoll","N. O'Driscoll",5,"MID",60,65,64,74,66,420,17.0,3.9,0.29,2.1],["Connor O'Sullivan","C. O'Sullivan",6,"DEF",60,60,77,67,63,420,15.0,6.6,0.04,1.6],["Sam Clohesy","S. Clohesy",7,"DEF",60,63,67,67,67,420,16.2,4.3,0.17,2.8],["Ryan Angwin","R. Angwin",8,"MID",60,63,66,70,65,420,16.1,4.2,0.3,2.1],["Kieren Briggs","K. Briggs",8,"RUC",60,61,61,57,67,420,13.8,3.5,0.4,4.1],["Kayne Turner","K. Turner",11,"FWD",60,61,59,72,64,420,11.1,3.0,0.8,4.0],["Keidean Coleman","K. Coleman",1,"DEF",59,62,73,68,63,380,16.2,5.4,0.15,1.2],["Matthew Cottrell","M. Cottrell",2,"FWD",59,62,62,64,64,380,14.6,3.6,0.43,2.5],["Zac Williams","Z. Williams",2,"DEF",59,64,57,67,68,380,17.4,2.9,0.22,2.9],["Jaxon Prior","J. Prior",4,"DEF",59,61,69,62,65,380,16.6,4.8,0.05,2.1],["Kyle Langford","K. Langford",4,"MID",59,61,71,69,64,380,15.7,5.0,0.21,1.9],["Zach Guthrie","Z. Guthrie",6,"DEF",59,61,71,69,65,380,16.0,5.1,0.04,2.4],["Beau Addinsall","B. Addinsall",7,"MID",59,63,62,75,66,380,17.1,3.7,0.22,2.1],["Calsher Dear","C. Dear",9,"FWD",59,62,63,67,55,380,9.0,3.8,1.4,1.0],["Tyler Sonsie","T. Sonsie",13,"MID",59,63,58,68,66,380,15.5,3.0,0.4,2.8],["Jimmy Webster","J. Webster",14,"DEF",59,62,68,66,66,380,16.5,4.5,0.1,2.2],["Matt Roberts","M. Roberts",15,"MID",59,62,63,73,65,380,15.2,3.8,0.3,2.8],["Harris Andrews","H. Andrews",1,"DEF",58,58,76,64,60,340,13.9,7.2,0.0,1.3],["Conor McKenna","C. McKenna",1,"FWD",58,65,55,67,58,340,12.2,2.1,1.19,1.5],["Lachlan Cowan","L. Cowan",2,"DEF",58,59,73,67,63,340,15.5,5.5,0.0,2.0],["Ashton Moir","A. Moir",2,"FWD",58,62,55,66,55,340,8.5,2.5,1.5,2.0],["Steele Sidebottom","S. Sidebottom",3,"MID",58,61,66,71,64,340,16.0,4.3,0.19,2.0],["Isaiah Dudley","I. Dudley",5,"FWD",58,63,55,67,59,340,10.6,1.8,1.26,2.5],["Ryan Burton","R. Burton",12,"DEF",58,61,69,61,64,340,16.1,4.8,0.1,1.9],["Nathan Broad","N. Broad",13,"DEF",58,60,71,67,63,340,15.2,5.1,0.1,2.1],["Jack Bytel","J. Bytel",14,"MID",58,61,58,65,67,340,15.0,3.0,0.3,3.5],["Luke Edwards","L. Edwards",16,"MID",58,61,59,64,66,340,15.1,3.2,0.3,3.1],["Jeremy McGovern","J. McGovern",16,"DEF",58,58,76,62,60,340,13.5,6.8,0.1,1.4],["Artie Jones","A. Jones",17,"FWD",58,60,56,62,61,340,11.0,2.8,0.9,3.1],["Luke Nankervis","L. Nankervis",0,"DEF",57,61,59,58,64,310,15.3,3.4,0.28,2.6],["Callum Ah Chee","C. Ah Chee",0,"FWD",57,60,58,63,57,310,10.9,3.1,1.0,1.9],["Bruce Reville","B. Reville",1,"MID",57,61,68,66,61,310,15.3,4.8,0.28,1.3],["Jacob Weitering","J. Weitering",2,"DEF",57,58,76,61,58,310,14.2,7.3,0.0,0.7],["Jordan Boyd","J. Boyd",2,"MID",57,58,69,65,64,310,14.5,5.0,0.0,3.0],["Heath Chapman","H. Chapman",5,"DEF",57,59,71,63,63,310,15.3,5.3,0.04,2.0],["Corey Wagner","C. Wagner",5,"DEF",57,60,59,60,67,310,16.9,3.4,0.0,2.9],["George Stevens","G. Stevens",6,"FWD",57,61,55,68,64,310,14.5,2.5,0.5,3.0],["Mitch Knevitt","M. Knevitt",6,"FWD",57,60,54,62,61,310,10.5,2.0,1.0,3.5],["Zeke Uwland","Z. Uwland",7,"DEF",57,61,61,67,61,310,15.4,3.8,0.41,1.3],["Sam Taylor","S. Taylor",8,"DEF",57,56,76,64,59,310,13.1,7.2,0.0,1.5],["Joel Smith","J. Smith",10,"DEF",57,59,66,58,62,310,14.1,4.5,0.3,2.1],["Zac Taylor","Z. Taylor",0,"FWD",56,59,56,64,61,280,12.3,3.0,0.59,2.8],["Campbell Chesser","C. Chesser",2,"MID",56,58,62,71,65,280,15.3,4.0,0.0,3.3],["Angus Clarke","A. Clarke",4,"FWD",56,57,64,60,57,280,10.3,4.2,0.67,2.3],["Archie May","A. May",4,"FWD",56,57,58,60,54,280,5.8,3.2,1.4,2.6],["Mark O'Connor","M. O'Connor",6,"DEF",56,58,65,62,62,280,14.4,4.4,0.18,2.5],["Rhys Stanley","R. Stanley",6,"RUC",56,60,56,55,66,280,17.0,3.0,0.0,3.0],["Seamus Mitchell","S. Mitchell",9,"DEF",56,58,64,59,62,280,15.1,4.2,0.1,2.2],["Steven May","S. May",10,"DEF",56,57,75,65,59,280,13.5,6.5,0.0,1.4],["Jake Lever","J. Lever",10,"DEF",56,56,75,58,58,280,12.8,7.1,0.0,1.2],["Charlie Comben","C. Comben",11,"DEF",56,57,73,60,60,280,13.5,5.8,0.1,1.8],["Geordie Payne","G. Payne",11,"FWD",56,59,55,60,56,280,10.5,2.8,1.0,2.0],["Steely Green","S. Green",13,"FWD",56,59,54,65,60,280,11.2,2.5,0.8,3.1],["Max Michalanney","M. Michalanney",0,"DEF",55,56,67,61,62,250,14.0,4.8,0.0,2.6],["Zach Reid","Z. Reid",4,"DEF",55,56,73,65,59,250,13.5,6.0,0.04,1.4],["Tom Edwards","T. Edwards",4,"FWD",55,58,54,61,54,250,9.1,2.7,1.14,1.9],["Oisin Mullin","O. Mullin",6,"DEF",55,57,55,67,65,250,13.8,2.9,0.12,4.1],["Sam Collins","S. Collins",7,"DEF",55,56,73,63,58,250,13.9,6.1,0.0,1.1],["Lachie Weller","L. Weller",7,"MID",55,60,55,72,61,250,14.5,2.9,0.45,2.0],["Miller Bergman","M. Bergman",11,"DEF",55,58,63,62,62,250,15.2,4.1,0.1,2.1],["Josh Sinn","J. Sinn",12,"MID",55,59,59,65,61,250,14.8,3.5,0.3,1.8],["Dane Rampe","D. Rampe",15,"DEF",55,57,72,62,60,250,14.2,5.8,0.0,1.5],["Harry Cunningham","H. Cunningham",15,"DEF",55,58,63,62,62,250,15.2,4.1,0.1,2.1],["Tom McCartin","T. McCartin",15,"DEF",55,55,74,67,58,250,12.8,6.5,0.0,1.5],["Tom Cole","T. Cole",16,"DEF",55,57,66,67,61,250,14.5,4.5,0.1,2.2],["Buku Khamis","B. Khamis",17,"DEF",55,58,63,57,58,250,12.2,4.1,0.5,1.8],["Tim O'Brien","T. O'Brien",17,"FWD",55,58,62,66,55,250,11.0,4.0,0.8,1.2],["Lachlan McAndrew","L. McAndrew",0,"RUC",54,55,53,59,63,230,11.6,2.3,0.29,4.5],["Lachlan Sullivan","L. Sullivan",3,"FWD",54,60,52,68,57,230,12.0,1.0,1.0,2.0],["Saad El-Hawli","S. El-Hawli",4,"DEF",54,58,59,57,60,230,14.6,3.6,0.25,1.6],["Jordan Ridley","J. Ridley",4,"DEF",54,56,72,62,56,230,13.9,6.0,0.0,0.6],["Sam Switkowski","S. Switkowski",5,"FWD",54,57,54,60,60,230,12.5,2.6,0.5,2.8],["Oscar McDonald","O. McDonald",5,"DEF",54,55,70,59,58,230,12.8,5.3,0.07,1.7],["Jaeger O'Meara","J. O'Meara",5,"MID",54,57,54,68,64,230,15.7,2.8,0.0,2.8],["Jack Buckley","J. Buckley",8,"DEF",54,54,73,67,57,230,12.4,6.1,0.0,1.6],["Ned Reeves","N. Reeves",9,"RUC",54,56,55,55,61,230,12.1,3.0,0.3,3.5],["Peter Ladhams","P. Ladhams",15,"RUC",54,57,57,55,60,230,12.1,3.2,0.4,3.1],["Aron Francis","A. Francis",15,"DEF",54,57,64,58,59,230,13.5,4.2,0.2,1.9],["Tom Barrass","T. Barrass",16,"DEF",54,55,73,57,57,230,12.8,6.2,0.0,1.5],["Matt Flynn","M. Flynn",16,"RUC",54,56,57,55,61,230,12.0,3.1,0.3,3.5],["Liam Jones","L. Jones",17,"DEF",54,55,73,58,57,230,12.5,6.2,0.0,1.5],["Mark Keane","M. Keane",0,"DEF",53,57,64,63,59,200,15.2,4.5,0.0,1.1],["Nick Murray","N. Murray",0,"DEF",53,55,64,64,57,200,12.4,4.4,0.18,1.9],["Luke Pedlar","L. Pedlar",0,"FWD",53,56,54,62,54,200,9.5,2.9,0.8,2.1],["Sam Marshall","S. Marshall",1,"MID",53,58,55,71,62,200,16.5,3.0,0.0,2.0],["Talor Byrne","T. Byrne",2,"FWD",53,55,56,58,54,200,8.8,3.1,0.75,2.5],["Ben McKay","B. McKay",11,"DEF",53,54,72,60,55,200,12.0,6.0,0.0,1.4],["Mark Blicavs","M. Blicavs",6,"RUC",53,56,53,55,60,200,13.2,2.6,0.25,2.9],["Oliver Wiltshire","O. Wiltshire",6,"FWD",53,58,52,62,55,200,11.3,1.7,0.88,1.6],["Conor Stone","C. Stone",8,"FWD",53,56,55,64,56,200,11.2,3.0,0.6,2.0],["Braydon Preuss","B. Preuss",8,"RUC",53,55,57,55,59,200,11.0,3.2,0.4,3.2],["Sam Frost","S. Frost",9,"DEF",53,54,70,60,56,200,12.5,5.5,0.0,1.5],["Aliir Aliir","A. Aliir",12,"DEF",53,53,73,61,55,200,11.2,6.8,0.0,1.5],["Logan Evans","L. Evans",12,"DEF",53,56,62,59,60,200,14.2,4.1,0.0,2.1],["Zaine Cordy","Z. Cordy",14,"DEF",53,55,63,63,57,200,12.5,4.2,0.2,1.8],["Charlie Edwards","C. Edwards",0,"MID",52,56,54,63,60,180,15.0,3.0,0.0,2.0],["James Tunstill","J. Tunstill",1,"MID",52,55,62,62,56,180,12.9,4.2,0.18,1.2],["Marc Pittonet","M. Pittonet",2,"RUC",52,56,51,55,59,180,12.7,1.4,0.45,2.9],["Wade Derksen","W. Derksen",2,"DEF",52,54,69,63,55,180,13.3,5.3,0.0,0.8],["Jack Ison","J. Ison",2,"DEF",52,54,59,56,54,180,11.2,3.8,0.38,1.6],["Flynn Riley","F. Riley",2,"RUC",52,53,51,55,56,180,6.0,1.0,1.0,5.0],["Harvey Harrison","H. Harrison",3,"MID",52,54,57,66,58,180,10.7,3.3,0.33,3.1],["Archer Day-Wicks","A. Day-Wicks",4,"FWD",52,54,53,61,59,180,11.1,2.7,0.33,3.4],["Zak Johnson","Z. Johnson",4,"DEF",52,57,61,62,58,180,16.0,4.1,0.0,0.3],["Judd McVee","J. McVee",5,"DEF",52,56,60,55,57,180,15.0,4.0,0.04,0.7],["Bailey Banfield","B. Banfield",5,"FWD",52,55,54,58,61,180,14.0,3.0,0.0,3.0],["Sam De Koning","S. De Koning",6,"DEF",52,56,58,56,58,180,14.4,3.6,0.05,1.5],["Will Graham","W. Graham",7,"DEF",52,54,53,65,58,180,10.8,2.7,0.42,3.2],["Samson Ryan","S. Ryan",13,"RUC",52,54,56,57,57,180,10.5,3.2,0.4,2.8],["Tom Campbell","T. Campbell",14,"RUC",52,54,56,55,58,180,11.0,3.2,0.3,3.0],["Alex Keath","A. Keath",17,"DEF",52,53,71,57,55,180,11.5,5.8,0.0,1.5],["Noah Answerth","N. Answerth",1,"DEF",51,52,64,62,55,160,11.8,4.6,0.0,1.8],["Shadeau Brain","S. Brain",1,"MID",51,55,66,70,54,160,14.5,5.0,0.0,0.0],["Harry Dean","H. Dean",2,"DEF",51,53,66,62,54,160,11.7,4.9,0.05,1.3],["Billy Frampton","B. Frampton",3,"DEF",51,52,69,61,53,160,11.7,5.5,0.0,1.1],["Jack Buller","J. Buller",3,"FWD",51,53,58,62,51,160,8.0,3.6,0.7,1.4],["Mitch Podhajski","M. Podhajski",3,"FWD",51,54,52,60,54,160,10.5,2.5,0.5,2.0],["Isaac Kako","I. Kako",4,"FWD",51,55,51,65,54,160,10.9,1.7,0.6,2.0],["Jaxon Artemis","J. Artemis",4,"MID",51,53,54,61,58,160,13.0,3.0,0.0,2.5],["Brennan Cox","B. Cox",5,"DEF",51,52,65,59,54,160,11.6,4.8,0.0,1.6],["Brad Close","B. Close",6,"FWD",51,55,51,59,55,160,10.6,2.1,0.61,2.3],["Ethan Read","E. Read",7,"FWD",51,55,53,60,52,160,9.9,2.7,0.8,1.3],["Jackson Archer","J. Archer",11,"DEF",51,53,62,62,57,160,12.1,4.2,0.0,2.4],["Dante Visentini","D. Visentini",12,"RUC",51,53,54,55,57,160,10.2,3.0,0.3,3.1],["Henry Hustwaite","H. Hustwaite",12,"MID",51,54,54,68,57,160,12.0,3.0,0.2,2.5],["Brian Teakle","B. Teakle",12,"RUC",51,53,53,55,57,160,11.0,2.8,0.3,2.8],["Josh Gibcus","J. Gibcus",13,"DEF",51,52,66,57,55,160,11.8,4.8,0.0,1.6],["Ben Miller","B. Miller",13,"DEF",51,53,64,63,55,160,12.0,4.5,0.0,1.5],["Dylan Grimes","D. Grimes",13,"DEF",51,52,69,55,53,160,11.0,5.5,0.0,1.4],["Jordon Butts","J. Butts",0,"DEF",50,52,62,55,51,150,11.2,4.4,0.11,0.6],["Finnbar Maley","F. Maley",0,"FWD",50,51,56,61,50,150,6.8,3.3,0.67,2.0],["Darcy Fort","D. Fort",1,"RUC",50,53,53,56,52,150,10.8,3.0,0.31,1.5],["Sam Draper","S. Draper",1,"RUC",50,54,51,55,51,150,10.0,2.3,0.65,1.0],["Ty Gallop","T. Gallop",1,"DEF",50,50,64,61,52,150,9.3,4.8,0.05,2.2],["Darragh Joyce","D. Joyce",1,"DEF",50,50,71,57,50,150,10.0,6.3,0.0,0.3],["Adam Saad","A. Saad",2,"DEF",50,54,51,58,57,150,14.3,2.3,0.0,1.3],["Flynn Young","F. Young",2,"FWD",50,53,53,61,51,150,9.3,3.0,0.67,1.3],["Charlie West","C. West",3,"FWD",50,53,52,62,50,150,7.4,2.7,1.0,1.1],["Nik Cox","N. Cox",4,"FWD",50,53,54,63,52,150,11.0,3.1,0.38,1.1],["Hussien El Achkar","H. El Achkar",4,"FWD",50,54,50,64,51,150,7.3,0.9,1.11,2.4],["Jack Henry","J. Henry",6,"DEF",50,52,60,55,51,150,9.5,4.1,0.29,1.2],["Jake Kolodjashnij","J. Kolodjashnij",6,"DEF",50,52,59,55,52,150,11.9,4.0,0.09,0.9],["Leek Aleer","L. Aleer",8,"DEF",50,51,67,62,52,150,10.5,5.1,0.0,1.4],["Archie Ward","A. Ward",8,"MID",50,52,51,67,56,150,11.0,2.5,0.2,2.5],["Toby Pink","T. Pink",11,"DEF",50,51,63,55,53,150,11.2,4.5,0.0,1.5],["Caleb Mitchell","C. Mitchell",15,"MID",50,52,54,66,54,150,11.0,3.0,0.2,1.8],["Ted Richards","T. Richards",15,"DEF",50,51,66,55,53,150,11.0,5.0,0.0,1.4],["Harry Edwards","H. Edwards",16,"DEF",50,51,65,64,53,150,11.0,4.8,0.0,1.4],["Ryan Gardner","R. Gardner",17,"DEF",50,51,64,57,52,150,10.8,4.5,0.0,1.4],["James Borlase","J. Borlase",0,"DEF",49,50,57,61,51,130,10.2,3.7,0.0,1.3],["Toby Murray","T. Murray",0,"RUC",49,50,51,55,50,130,6.2,2.6,0.69,2.1],["Hugh Bond","H. Bond",0,"DEF",49,51,54,57,55,130,11.0,3.1,0.0,2.4],["Chayce Jones","C. Jones",0,"DEF",49,51,50,59,54,130,11.7,2.3,0.0,1.7],["Darcy Gardiner","D. Gardiner",1,"DEF",49,50,62,55,50,130,9.5,4.5,0.0,0.9],["Daniel Annable","D. Annable",1,"FWD",49,51,50,61,51,130,9.7,2.3,0.33,1.3],["Zane Zakostelsky","Z. Zakostelsky",1,"RUC",49,50,59,55,50,130,7.3,4.0,0.33,1.7],["Lewis Young","L. Young",2,"DEF",49,51,55,64,51,130,10.4,3.4,0.14,1.4],["Will Hayes","W. Hayes",3,"FWD",49,51,50,59,50,130,6.7,2.1,0.8,1.2],["Oscar Steene","O. Steene",3,"RUC",49,51,50,55,50,130,8.4,2.2,0.5,1.5],["Wil Parker","W. Parker",3,"DEF",49,51,54,57,52,130,11.0,3.2,0.0,1.2],["Nick Bryan","N. Bryan",4,"RUC",49,52,50,55,54,130,11.1,1.5,0.15,2.2],["Harry Jones","H. Jones",4,"DEF",49,50,55,55,51,130,8.7,3.3,0.29,2.3],["Jayden Nguyen","J. Nguyen",4,"MID",49,51,51,67,53,130,11.6,2.4,0.0,1.4],["Rhys Unwin","R. Unwin",4,"FWD",49,50,50,66,54,130,7.5,1.8,0.25,3.8],["Ned Moyle","N. Moyle",7,"RUC",49,51,50,55,52,130,9.6,1.8,0.25,2.1],["Oscar Adams","O. Adams",7,"DEF",49,50,57,64,51,130,9.9,3.7,0.0,1.4],["James Blanck","J. Blanck",9,"DEF",49,50,62,61,52,130,10.5,4.5,0.0,1.4],["Denver Grainger-Barras","D. Grainger-Barras",9,"DEF",49,50,60,57,51,130,10.2,4.1,0.0,1.2],["Cillian Maher","C. Maher",9,"DEF",49,51,59,60,52,130,11.0,4.0,0.0,1.5],["Bodie Ryan","B. Ryan",9,"DEF",49,51,56,56,53,130,11.2,3.5,0.0,1.8],["Damon Greaves","D. Greaves",9,"DEF",49,51,56,55,52,130,11.0,3.5,0.0,1.5],["Peter Moore","P. Moore",10,"RUC",49,51,51,55,54,130,10.0,2.5,0.2,2.5],["Kyle Marshall","K. Marshall",12,"DEF",49,50,56,61,51,130,10.0,3.5,0.0,1.2],["Jordon McInerney","J. McInerney",15,"RUC",49,51,51,55,54,130,10.0,2.5,0.2,2.5],["Jedd Busslinger","J. Busslinger",17,"DEF",49,50,61,62,52,130,10.5,4.2,0.0,1.5],["Reilly O'Brien","R. O'Brien",0,"RUC",48,49,52,55,51,120,7.0,3.0,0.0,3.0],["Archie Ludowyke","A. Ludowyke",0,"FWD",48,49,50,65,49,120,6.5,2.5,0.5,1.5],["Mitch Hinge","M. Hinge",0,"DEF",48,49,49,55,50,120,10.0,1.0,0.0,1.0],["Cody Curtin","C. Curtin",1,"FWD",48,49,49,64,49,120,6.5,1.2,0.5,1.0],["Will McLachlan","W. McLachlan",1,"FWD",48,49,49,59,49,120,4.0,1.0,1.0,2.0],["Liam Reidy","L. Reidy",2,"RUC",48,50,49,55,57,120,10.5,0.8,0.0,3.5],["Lachie Fogarty","L. Fogarty",2,"MID",48,49,49,60,51,120,10.0,0.5,0.0,1.5],["Hudson O'Keeffe","H. O'Keeffe",2,"RUC",48,49,49,55,49,120,5.7,1.0,0.0,1.3],["Liam Puncher","L. Puncher",3,"DEF",48,49,52,55,49,120,5.9,2.9,0.0,1.1],["Darcy Moore","D. Moore",3,"DEF",48,49,52,55,49,120,6.2,3.0,0.0,0.8],["Noah Howes","N. Howes",3,"DEF",48,49,55,55,49,120,8.0,3.5,0.0,0.5],["Lachlan Blakiston","L. Blakiston",4,"RUC",48,49,50,55,50,120,8.9,2.2,0.12,1.9],["Max Kondogiannis","M. Kondogiannis",4,"DEF",48,50,50,57,52,120,10.2,2.2,0.08,2.0],["Matt Guelfi","M. Guelfi",4,"MID",48,49,49,60,49,120,4.7,0.0,0.0,1.3],["Alex Pearce","A. Pearce",5,"DEF",48,49,55,59,49,120,8.7,3.4,0.0,0.8],["Mason Cox","M. Cox",5,"RUC",48,49,50,55,49,120,6.5,2.3,0.35,1.2],["Chris Scerri","C. Scerri",5,"MID",48,50,49,58,51,120,9.6,1.0,0.11,1.9],["Sean Darcy","S. Darcy",5,"RUC",48,49,49,55,49,120,7.1,1.0,0.29,1.7],["Brandon Walker","B. Walker",5,"DEF",48,50,49,62,51,120,11.0,1.0,0.0,1.0],["Mitchell Edwards","M. Edwards",6,"RUC",48,51,49,55,52,120,10.3,1.4,0.15,1.9],["Jarrod Witts","J. Witts",7,"RUC",48,50,49,55,52,120,10.2,1.4,0.15,1.9],["Phillip Latch","P. Latch",11,"DEF",48,50,53,61,50,120,10.0,3.0,0.0,1.2],["Judah Dundon","J. Dundon",13,"DEF",48,50,53,61,51,120,10.0,3.0,0.0,1.5],["Theodore Paton","T. Paton",14,"DEF",48,50,53,56,50,120,10.0,3.0,0.0,1.2],["Patrick Retschko","P. Retschko",13,"MID",78,77,78,86,94,1600,18.7,5.2,0.3,2.5]];
/* ===== END DATA ===== */
/* AFL Mobile – Ultimate Team
   Menu (FC Mobile style) + 18-a-side AFL match in 3D.
   Rules ported from the Swift SpriteKit prototype; models from the AFL Game Assets file. All units are metres. */
(() => {
const $ = id => document.getElementById(id);
const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const wrap = a => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
var BALL_COLS = null;

/* =================== DATA =================== */
/* Real 2026 player pool (players2026.js) + career save */
const CLUBS = window.CLUBS26 || [];
const tierOf = r => r >= 92 ? 'icon' : r >= 80 ? 'gold' : r >= 68 ? 'silver' : 'bronze';
/* ---- economy knobs ---- */
const PRICE_MULT = 2.5;    // moves and coaches. Player prices use priceFor() instead.
const COIN_MULT = 4;       // every coin reward (matches, events, objectives) is multiplied by this
const WIN_BONUS = 1.25;    // extra on top for winning a match
/* Exponential card prices. An 80 is a mid upgrade, a 90 is a project, a 99 is a fortune. */
function priceFor(rating) {
  const anchors = [[45, 250], [55, 600], [65, 1400], [75, 2800], [80, 5000], [85, 16000], [90, 50000], [94, 180000], [99, 1200000], [110, 3500000]];
  const r = Math.max(anchors[0][0], Math.min(anchors[anchors.length - 1][0], rating));
  let i = 1;
  while (i < anchors.length - 1 && anchors[i][0] < r) i++;
  const a = anchors[i - 1], b = anchors[i], t = (r - a[0]) / (b[0] - a[0]);
  return Math.max(10, Math.round(a[1] * Math.pow(b[1] / a[1], t)));
}
/* ---- sponsorship: passive income that builds up over time, claimed from the Home tab ---- */
const SPON_RATE = 8;
const SPON_CAP_MS = 8 * 60 * 60 * 1000;
function sponsorPending() {
  if (!save || !save.spon) return 0;
  const elapsed = Math.min(Date.now() - save.spon.last, SPON_CAP_MS);
  const rate = SPON_RATE * (0.7 + teamRating() / 280) * bizMult();
  return money(Math.floor(elapsed / 60000 * rate));
}
function claimSponsor() {
  const n = sponsorPending(); if (n < 1) return;
  save.coins += n; save.spon.last = Date.now(); persist(); renderShell('Sponsorship: +' + fmt(n) + ' coins');
}
const money = n => Math.round(n * COIN_MULT), winMoney = n => Math.round(n * COIN_MULT * WIN_BONUS);
/* Difficulty changes how the away side plays, and what a win is worth. */
const DIFFS = [
  {id: 'easy', name: 'EASY', pay: .6, blurb: 'They miss more. Wins pay less. Light fatigue.'},
  {id: 'normal', name: 'NORMAL', pay: 1, blurb: 'A fair contest. Normal pay, normal fatigue.'},
  {id: 'hard', name: 'HARD', pay: 1.65, blurb: 'Wins pay more. Stamina and condition drop faster.'},
  {id: 'insane', name: 'TOO INSANE', pay: 3, blurb: 'The biggest purse, and the heaviest fatigue.'}
];
const DIFF_AI = {
  easy:     {chase: 2, tackle: .4, decide: 1.85, kickErr: 1.9, hand: .4, sprint: .55, shot: .75, hunt: false, press: 4},
  normal:   {chase: 3, tackle: 1, decide: 1, kickErr: 1, hand: 1, sprint: 1, shot: 1, hunt: false, press: 5},
  hard:     {chase: 4, tackle: 1.5, decide: .7, kickErr: .52, hand: 1.35, sprint: 1.12, shot: 1.12, hunt: false, press: 6.4},
  insane: {chase: 6, tackle: 2.35, decide: .28, kickErr: .22, hand: 2.2, sprint: 1.35, shot: 1.28, hunt: true, press: 11}
};
const diffId = () => { const id = save && save.diff === 'richmond' ? 'insane' : save && save.diff; return DIFF_AI[id] ? id : 'normal'; };
const diffNow = () => DIFFS.find(d => d.id === diffId());
const diffAI = () => DIFF_AI[diffId()];
const POOL = (window.PLAYERS26 || []).map((a, i) => ({id: i, full: a[0], name: a[1], club: a[2], pos: a[3], rating: a[4], kic: a[5], mar: a[6], spd: a[7], end: a[8], price: priceFor(a[4]), tier: tierOf(a[4]), lvl: 0, fantasy: false, b: {rating: a[4], kic: a[5], mar: a[6], spd: a[7], end: a[8]}}));
const slugName = full => full.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const SPECIAL = ["Nick Daicos","Marcus Bontempelli","Isaac Heeney","Jordan Dawson","Christian Petracca","Bailey Smith","Errol Gulden","Chad Warner","Toby Greene","Clayton Oliver","Zak Butters","Connor Rozee","Tom Liberatore","Will Ashcroft","Sam Walsh","Zach Merrett","Noah Anderson","Patrick Cripps","Jeremy Cameron","Lachie Neale","Sam Cumming"];
for (const full of SPECIAL) {
  const src = POOL.find(p => p && p.full === full && !p.fantasy);
  if (!src) continue;
  const up = k => Math.min(99, src.b[k] + 10);
  const rating = up('rating');
  POOL.push({
    id: POOL.length, full: src.full, name: src.name, club: src.club, pos: src.pos,
    rating, kic: up('kic'), mar: up('mar'), spd: up('spd'), end: up('end'),
    price: Math.round(priceFor(rating) * 1.35), tier: tierOf(rating), lvl: 0, fantasy: true,
    b: {rating, kic: up('kic'), mar: up('mar'), spd: up('spd'), end: up('end')},
    photo: `photos/special/${slugName(src.full)}.jpg`
  });
}
/* Premiership cards: the flag side, purple frame, a small boost, bought in the market. */
const PREM_LINE = [
  ['Ty Gallop', 'DEF'], ['Harris Andrews', 'DEF'], ['Ryan Lester', 'DEF'],
  ['Jaspa Fletcher', 'DEF'], ['Darcy Gardiner', 'DEF'], ['Dayne Zorko', 'DEF'],
  ['Jarrod Berry', 'MID'], ['Will Ashcroft', 'MID'], ['Zac Bailey', 'MID'],
  ['Charlie Cameron', 'FWD'], ['Logan Morris', 'FWD'], ['Conor McKenna', 'FWD'],
  ['Eric Hipwood', 'FWD'], ['Cam Rayner', 'FWD'], ['Kai Lohmann', 'FWD'],
  ['Sam Draper', 'RUC'], ['Josh Dunkley', 'MID'], ['Hugh McCluggage', 'MID'],
  ['Oscar Allen', 'FWD'], ['Lachie Neale', 'MID'], ['Levi Ashcroft', 'MID'],
  ['Darcy Fort', 'RUC'], ['Darcy Wilmot', 'DEF'],
  ['Cody Curtin', 'FWD'], ['Bruce Reville', 'MID'], ['Noah Answerth', 'DEF']
];
for (const [full, pos] of PREM_LINE) {
  const src = POOL.find(p => p && p.full === full && !p.fantasy && !p.prem);
  if (!src) continue;
  const bump = k => Math.min(99, src.b[k] + (k === 'rating' ? 3 : 2));
  const rating = bump('rating');
  POOL.push({
    id: POOL.length, full: src.full, name: src.name, club: 1, pos,
    rating, kic: bump('kic'), mar: bump('mar'), spd: bump('spd'), end: bump('end'),
    price: Math.round(priceFor(rating) * 1.2), tier: 'prem', lvl: 0, fantasy: false, prem: true,
    b: {rating, kic: bump('kic'), mar: bump('mar'), spd: bump('spd'), end: bump('end')},
    photo: `photos/prem/${slugName(src.full)}.jpg`
  });
}
/* ---- LEGACY players: 105 OVR, pack-only (1% per card in ICON PACKS), never sold in the market, never used by opponents ---- */
const LEGACY = [
  // [full name, short name, club index, pos, KIC, MAR, SPD, END, photo]
  ['Dustin Martin',       'D. Martin',      13, 'FWD', 122, 126, 128, 128, 'dustin-martin'],
  ['Gary Ablett Jr',      'G. Ablett Jr',    6, 'MID', 128, 120, 130, 128, 'gary-ablett-jr'],
  ['Tony Lockett',        'T. Lockett',     15, 'FWD', 140, 132, 108, 118, 'tony-lockett'],
  ['Leigh Matthews',      'L. Matthews',     9, 'MID', 126, 130, 124, 128, 'leigh-matthews'],
  ['Patrick Dangerfield', 'P. Dangerfield',  6, 'MID', 124, 126, 132, 128, 'patrick-dangerfield'],
  ['Guy McKenna',         'G. McKenna',     16, 'DEF', 118, 118, 122, 120, 'guy-mckenna'],
  ['Matthew Scarlett',    'M. Scarlett',     6, 'DEF', 120, 122, 116, 118, 'matthew-scarlett'],
  ['Francis Bourke',      'F. Bourke',      13, 'WING',112, 108, 118, 132, 'francis-bourke'],
  ['Wayne Carey',         'W. Carey',       11, 'FWD', 126, 132, 116, 112, 'wayne-carey'],
  ['Lance Franklin',      'L. Franklin',     9, 'FWD', 128, 128, 126, 114, 'lance-buddy-franklin'],
  ['Robert Harvey',       'R. Harvey',      14, 'WING',118, 110, 124, 134, 'robert-harvey'],
  ['Stephen Silvagni',    'S. Silvagni',     2, 'DEF', 116, 124, 110, 116, 'stephen-silvagni'],
  ['Max Gawn',            'M. Gawn',        10, 'RUC', 108, 120, 104, 122, 'max-gawn'],
  ['Jason Dunstall',      'J. Dunstall',     9, 'FWD', 122, 126, 108, 110, 'jason-dunstall'],
  ['Alex Rance',          'A. Rance',       13, 'DEF', 118, 126, 118, 116, 'alex-rance'],
  ['Gary Ablett Sr',      'G. Ablett Sr',    6, 'FWD', 124, 134, 122, 116, 'gary-ablett-sr'],
  ['Bruce Doull',         'B. Doull',        2, 'DEF', 114, 116, 114, 118, 'bruce-doull'],
  ['Luke Hodge',          'L. Hodge',        9, 'DEF', 120, 114, 114, 120, 'luke-hodge']
];
const LEGACY_RATING = 105, LEGACY_CHANCE = .045, LEGACY_CAP = 150, LEGACY_PITY = 10, SHARD_COST = 100;
for (const a of LEGACY) {
  POOL.push({
    id: POOL.length, full: a[0], name: a[1], club: a[2], pos: a[3], rating: LEGACY_RATING,
    kic: a[4], mar: a[5], spd: a[6], end: a[7], price: priceFor(105), tier: 'legacy', lvl: 0, fantasy: false, legacy: true,
    b: {rating: LEGACY_RATING, kic: a[4], mar: a[5], spd: a[6], end: a[7]},
    photo: `photos/legacy/${a[8]}.jpg`
  });
}
const capOf = p => p && p.legacy ? LEGACY_CAP : 99;
POOL.forEach(p => { if (!p.photo) p.photo = `photos/${slugName(p.full)}.jpg`; });
const MAXLVL = 5, ASC_MAX = 5;
function applyUp(p) {
  const L = (save && save.up && save.up[p.id]) || 0; p.lvl = L;
  for (const k of ['kic', 'mar', 'spd', 'end']) p[k] = Math.min(capOf(p), p.b[k] + L * 2);
  p.rating = Math.min(p.legacy ? 110 : 99, p.b.rating + L);
  const a = (save && save.asc && save.asc[p.id]) || 0; p.asc = a;
  const keys = ['kic', 'mar', 'spd', 'end'];
  for (let i = 0; i < a; i++) { const k = keys[i % 4]; p[k] = Math.min(capOf(p), p[k] + 1); }
}
/* Each level costs the price gap up to the next rating, so a 94 pushed to 99 costs about as much as buying the 99. */
function levelGap(p) {
  if (!p || p.lvl >= MAXLVL) return 0;
  const from = Math.min(capOf(p), p.b.rating + p.lvl), to = Math.min(capOf(p), from + 1);
  if (to <= from) return 0;
  return Math.max(500, priceFor(to) - priceFor(from));
}
function upCost(p) {
  const raw = levelGap(p);
  if (!raw) return 0;
  const disc = Math.min(0.4, (typeof facLv === 'function' ? facLv('train') : 0) * 0.08);
  return Math.max(400, Math.round(raw * (1 - disc)));
}
function campCost(p) {
  const raw = levelGap(p);
  if (!raw) return 0;
  return Math.max(500, Math.round(raw * 0.72));
}
function ascOf(id) { return (save && save.asc && save.asc[id]) || 0; }
function ascendCost(p) {
  const a = ascOf(p && p.id);
  if (!p || p.lvl < MAXLVL || a >= ASC_MAX) return 0;
  return Math.max(100000, Math.round(priceFor(Math.min(99, p.rating)) * 0.45 * (a + 1)));
}
/* ---- tier upgrade center: pay coins to permanently promote a card's tier (bronze -> silver -> gold) ---- */
const TIER_PROMO = {bronze: {to: 'silver', cost: 50000}, silver: {to: 'gold', cost: 100000}};
const PROMO_MIN = {silver: 68, gold: 80};
function applyPromo(p) {
  const t = save && save.promo && save.promo[p.id]; if (!t) return;
  const bump = Math.max(0, PROMO_MIN[t] - p.b.rating);          // a promoted card's stats rise by as much as its OVR does (safe to re-run)
  if (bump) for (const k of ['kic', 'mar', 'spd', 'end']) p.b[k] = Math.min(99, p.b[k] + bump);
  p.b.rating = Math.max(p.b.rating, PROMO_MIN[t]); p.tier = t;
}
/* 18 a side. Slot order = lineup order = formation order: back six, midfield six, forward six. */
const SLOTS = ['DEF', 'DEF', 'DEF', 'DEF', 'DEF', 'DEF', 'WING', 'MID', 'MID', 'RUC', 'MID', 'WING', 'FWD', 'FWD', 'FWD', 'FWD', 'FWD', 'FWD'];
const TEAM_SIZE = SLOTS.length;
/* =================== SIGNATURE MOVES & COACHES =================== */
/* Moves are bought in the Market and slotted onto players in the Squad tab (1 slot each, 2 once a player is upgraded to level 3). */
const MOVES = [
  {id: 'fend', name: 'FEND OFF', icon: '✋', tier: 'silver', price: 1800, kind: 'active', cd: 5, desc: 'Press the signature key: a stiff-arm hand-off. Tackles on you fail for 0.7 s and the tackler is knocked off balance.'},
  {id: 'side', name: 'SIDESTEP', icon: '💨', tier: 'silver', price: 2200, kind: 'active', cd: 4, desc: 'Press the signature key: a lightning sidestep in your move direction. Tackles are 35% less likely for 0.6 s.'},
  {id: 'snap', name: 'SNAP SHOT', icon: '🎯', tier: 'gold', price: 2500, kind: 'passive', desc: 'Releases the kick almost instantly instead of the slow wind-up. Deadly in traffic.'},
  {id: 'torp', name: 'TORPEDO', icon: '🚀', tier: 'gold', price: 3000, kind: 'passive', desc: 'Long, spiralling kicks travel 15% further.'},
  {id: 'banana', name: 'BANANA', icon: '🍌', tier: 'gold', price: 3500, kind: 'passive', desc: 'Curls the ball back to goal: shots from tight angles are far more accurate.'},
  {id: 'speccy', name: 'SPECKY', icon: '🦅', tier: 'gold', price: 4000, kind: 'passive', desc: 'Hangers! +15% chance on every mark and a wider reach in a pack.'},
  {id: 'bullet', name: 'BULLET HANDBALL', icon: '⚡', tier: 'silver', price: 2000, kind: 'passive', desc: 'Handpasses are faster and pinpoint accurate, even under pressure.'},
  {id: 'lock', name: 'LOCKDOWN TACKLE', icon: '🛡️', tier: 'silver', price: 2800, kind: 'passive', desc: 'Your tackles land 20% more often and the carrier stays on the ground longer.'},
  {id: 'ruck', name: 'HITOUT KING', icon: '🏐', tier: 'silver', price: 3000, kind: 'passive', desc: 'A 50% wider timing zone at the centre bounce and ball-ups. Best on a ruckman.'}
];
MOVES.forEach(m => m.price = Math.round(m.price * PRICE_MULT));
const MV = Object.fromEntries(MOVES.map(m => [m.id, m]));
/* Coaches: one is appointed at a time. Flat stat boosts apply to your whole lineup, plus a unique edge in matches. */
const COACHES = [
  {id: 'mentor', name: 'GARY PIKE', title: 'Development Coach', tier: 'bronze', price: 3000, flat: {all: 1}, fx: {}, desc: 'Solid all-rounder: +1 to every stat.'},
  {id: 'attack', name: 'DEAN MARLOW', title: 'Attack Architect', tier: 'silver', price: 7500, flat: {kic: 3, mar: 2}, fx: {kickRange: .06, goalAcc: .15}, desc: '+3 KIC, +2 MAR. Kicks go 6% further and shots at goal are 15% more accurate.'},
  {id: 'wall', name: 'BRETT CALLOWAY', title: 'The Wall', tier: 'silver', price: 7500, flat: {mar: 1, end: 2}, fx: {tackle: .12, oppMark: .08}, desc: '+1 MAR, +2 END. Your tackles land 12% more often and opponents mark 8% less.'},
  {id: 'fit', name: 'MARCUS OYELARAN', title: 'Conditioning Guru', tier: 'gold', price: 8000, flat: {end: 4, spd: 2}, fx: {stamina: .3, recover: .5}, desc: '+4 END, +2 SPD. Sprint drains 30% less stamina and recovers 50% faster.'},
  {id: 'mid', name: 'SOFIA BRANDT', title: 'Midfield Maestro', tier: 'gold', price: 9000, flat: {kic: 2, spd: 2}, fx: {handAcc: .6, ruck: 1.4}, desc: '+2 KIC, +2 SPD. Cleaner handballs and a 40% wider ball-up timing zone.'},
  {id: 'flag', name: 'HUGH McALLISTER', title: 'Premiership Mastermind', tier: 'icon', price: 20000, flat: {all: 3}, fx: {tackle: .06, goalAcc: .08, kickRange: .03, stamina: .12}, desc: '+3 to every stat plus a little extra in every area of the game.'}
];
COACHES.forEach(c => c.price = Math.round(c.price * PRICE_MULT));
const CO = Object.fromEntries(COACHES.map(c => [c.id, c]));
const moveSlots = p => p.lvl >= 3 ? 2 : 1;
const movesOn = id => (save && save.mv && save.mv.on[id]) || [];
const assignedCount = mid => Object.values(save.mv.on).reduce((a, l) => a + l.filter(x => x === mid).length, 0);
const availMove = mid => (save.mv.own[mid] || 0) - assignedCount(mid);
const AST = [
  {id: 'runner', name: 'RUNNER', title: 'Assistant', price: 2500, flat: {spd: 1}, desc: 'First assistant. +1 SPD to the whole side. The cheap one to buy.'},
  {id: 'attack', name: 'FORWARD COACH', title: 'Attack', price: 100000, flat: {kic: 2}, desc: 'Stacks with the head coach. +2 KIC.'},
  {id: 'defence', name: 'BACKLINE COACH', title: 'Defence', price: 250000, flat: {mar: 2, end: 1}, desc: 'Stacks with the head coach. +2 MAR and +1 END.'},
  {id: 'ruck', name: 'RUCK COACH', title: 'Ruck', price: 500000, flat: {end: 2, mar: 1}, desc: 'Stacks with the head coach. +2 END and +1 MAR.'}
];
function coachNow() { return save && save.coach && save.coach.cur ? CO[save.coach.cur] : null; }
function astFlat(k) {
  const owned = save && save.coach && save.coach.ast; if (!owned) return 0;
  let n = 0; for (const a of AST) if (owned[a.id]) n += (a.flat[k] || 0) + (a.flat.all || 0); return n;
}
let matchPrepFlat = 0;
function coachFlat(k) { const c = coachNow(); return (c ? (c.flat[k] || 0) + (c.flat.all || 0) : 0) + astFlat(k); }
function coachRating() { return Math.round(['kic', 'mar', 'spd', 'end'].reduce((a, k) => a + coachFlat(k), 0) / 4); }
function boosted(p) {
  const d = Object.assign({}, p);
  for (const k of ['kic', 'mar', 'spd', 'end']) d[k] = Math.min(capOf(p), p[k] + coachFlat(k) + matchPrepFlat);
  d.rating = Math.min(p.legacy ? 115 : 99, p.rating + coachRating() + matchPrepFlat); d.moves = movesOn(p.id).slice(); return d;
}
const hasMove = (p, id) => !!(p.d && p.d.moves && p.d.moves.includes(id));
const cfx = (p, k) => (p.team === 'home' && ms && ms.fx && ms.fx[k]) || 0;

const BONT_ID = 48000;
const LEGACY_BUY = 15000000;
function stubBont(ovr) {
  if (POOL[BONT_ID] && POOL[BONT_ID].bont) return POOL[BONT_ID];
  const p = {id: BONT_ID, full: 'Marcus Bontempelli', name: 'M. Bontempelli', club: 17, pos: 'MID', rating: ovr || 79, price: 0, lvl: 0, fantasy: false, legacy: false, prem: false, bont: true, photo: 'photos/special/marcus-bontempelli.jpg', kic: 80, mar: 80, spd: 82, end: 84, tier: 'gold'};
  p.b = {rating: p.rating, kic: p.kic, mar: p.mar, spd: p.spd, end: p.end};
  POOL[BONT_ID] = p;
  return p;
}
function stubTotw(o) {
  if (!o) return null;
  const cur = POOL[o.id];
  if (cur && cur.totw && cur.baseId === o.base) return cur;
  if (cur && save && save.owned && save.owned.includes(o.id)) return cur;
  const src = POOL[o.base]; if (!src || src.totw || src.bont) return cur || null;
  const rating = Math.min(99, (src.b ? src.b.rating : src.rating) + 2);
  const p = {id: o.id, full: src.full, name: src.name, club: src.club, pos: src.pos, rating, price: o.price || 0, lvl: 0, fantasy: false, legacy: false, prem: false, totw: true, bont: false, baseId: o.base, photo: src.photo, tier: 'gold',
    kic: Math.min(99, (src.b ? src.b.kic : src.kic) + 2), mar: Math.min(99, (src.b ? src.b.mar : src.mar) + 2), spd: Math.min(99, (src.b ? src.b.spd : src.spd) + 2), end: Math.min(99, (src.b ? src.b.end : src.end) + 2)};
  p.b = {rating, kic: p.kic, mar: p.mar, spd: p.spd, end: p.end};
  POOL[o.id] = p;
  return p;
}
const SAVE_KEY = 'aflUT2026', START_COINS = 5000;
let save = null;
try {
  const raw = JSON.parse(localStorage.getItem(SAVE_KEY));
  if (raw && raw.x && raw.x.bont && raw.x.bont.started) stubBont(raw.x.bont.ovr);
  (raw && raw.totwOwn || []).forEach(stubTotw);
  save = raw;
  if (!save || !CLUBS[save.club] || !Array.isArray(save.owned)) save = null;
  else {
    save.owned = save.owned.filter(id => Number.isInteger(id) && POOL[id]);
    save.lineup = (save.lineup || []).filter(id => save.owned.includes(id));
    if (save.lineup.length > TEAM_SIZE) save.lineup = save.lineup.slice(0, TEAM_SIZE);
  }
} catch (e) { save = null; }
/* ===== BUSINESS: extra ways to earn coins ===== */
const HR = 3600000, DAY = 86400000, WAG = {10: 2, 20: 3, 30: 5}, WSTAKE = {10: 2000, 20: 3000, 30: 5000};
const SPONS = [
  {n: 'Southern Bank', c: 75000, m: .08, w: 8, flat: 0},
  {n: 'Outback Airlines', c: 280000, m: .12, w: 20, flat: 0},
  {n: 'Gold Coast Motors', c: 900000, m: .15, w: 45, flat: 0},
  {n: 'Sherrin Global', c: 2500000, m: .2, w: 80, flat: 0},
  {n: 'National Grid', c: 1000000, m: 0, w: 100, flat: 600},
  {n: 'Harbour Corp', c: 3000000, m: 0, w: 200, flat: 1000},
  {n: 'Crown Leisure', c: 10000000, m: 0, w: 400, flat: 1800}
];
const BACH = [['w10', 'Win 10 matches', s => s.won >= 10, 5000], ['w50', 'Win 50 matches', s => s.won >= 50, 25000], ['p25', 'Play 25 matches', s => s.played >= 25, 6000], ['own50', 'Own 50 players', s => s.owned.length >= 50, 8000], ['own150', 'Own 150 players', s => s.owned.length >= 150, 30000], ['gold10', 'Own 10 gold+ cards', s => s.owned.filter(i => POOL[i] && POOL[i].rating >= 80).length >= 10, 15000], ['stad5', 'Stadium level 5', s => s.biz.stad >= 5, 12000], ['stk5', '5 wins in a row', s => s.biz.best >= 5, 10000], ['stk10', '10 wins in a row', s => s.biz.best >= 10, 40000], ['bank', 'Hold 1,000,000 coins', s => s.coins >= 1e6, 50000]];
const dupPay = p => Math.round(sellValue(p) * ({silver: 1.5, gold: 2.5, icon: 4}[p.tier] || 1));
const bizMult = () => {
  if (!save || !save.biz) return 1;
  const raw = 1 + (save.biz.stad || 0) * .03 + (save.biz.sp || []).reduce((a, i) => a + (SPONS[i] ? SPONS[i].m : 0), 0);
  return Math.min(1.8, raw);
};
const facLv = id => (save && save.biz && save.biz.fac && save.biz.fac[id]) || 0;
const stadCost = lv => Math.round(45000 * Math.pow(1.85, lv));
const facCost = lv => Math.round(45000 * Math.pow(1.85, lv));
const FAC_MAX = 8;
const loanSlots = () => 2 + Math.floor(((save && save.biz && save.biz.stad) || 0) / 2) + facLv('loans');
const RIGHTS_COST = 2000000;
const HPC_MAX = 8;
const hpcCost = lv => Math.round(750000 * Math.pow(2.2, lv));
/* 0.1% of the card price per hour. Extra loans pay less, so a bench isn't a bank. */
function loanRates(ids) {
  const list = ids.map(Number).filter(i => POOL[i]).sort((a, b) => POOL[b].price - POOL[a].price);
  const rates = {};
  list.forEach((id, n) => { rates[id] = Math.max(1, Math.round(POOL[id].price * 0.001 / (1 + n * 1.25))); });
  return rates;
}
function loanEarned(b, now, ids) {
  const rates = loanRates(ids);
  let t = 0;
  for (const i of ids) t += Math.floor(Math.min(now - b.loans[i], 24 * HR) / HR * (rates[i] || 0));
  return t;
}
function bizPrices() {
  const d = Math.floor(Date.now() / DAY);
  for (const p of POOL) if (p && !p.legacy && !p.fantasy && !p.prem && !p.bont && !p.totw) { if (p.bp == null) p.bp = p.price; const h = Math.sin(d * 12.9898 + p.id * 78.233) * 43758.5453; p.price = Math.max(10, Math.round(p.bp * (.85 + .35 * (h - Math.floor(h))))); }
}
function bizTick() {
  const b = save.biz, d = Math.floor(Date.now() / DAY);
  for (const id in b.loans) if (save.lineup.includes(+id)) delete b.loans[id];
  if (b.day !== d) { b.day = d; bizPrices(); }
}
function bizInit() {
  const b = save.biz = save.biz || {}; b.stad = b.stad || 0; b.hpc = b.hpc || 0; b.sp = b.sp || []; b.loans = b.loans || {}; b.scout = b.scout || null; b.merch = b.merch || {last: Date.now(), bonus: 0}; b.wager = b.wager || null; b.streak = b.streak || 0; b.best = b.best || 0; b.votes = b.votes || {}; b.day = 0; b.fac = b.fac || {train: 0, rec: 0, acad: 0, loans: 0}; b.rights = b.rights || 0; b.camp = b.camp || null;
  if (!save.look) save.look = {num: {}, boot: {}};
  if (!save.cond) save.cond = {};
  if (!save.inv) save.inv = {};
  if (!save.arm) save.arm = {};
  if (!save.cos) save.cos = {ball: 'sherrin', chant: 'none', trim: 'club', balls: ['sherrin'], chants: ['none'], trims: ['club'], grounds: null};
  if (!save.cos.balls) save.cos.balls = ['sherrin'];
  if (!save.cos.chants) save.cos.chants = ['none'];
  if (!save.cos.trims) save.cos.trims = ['club'];
  if (save.cos.grounds === undefined) save.cos.grounds = null;
  if (!save.totwOwn) save.totwOwn = [];
  if (!save.coach.ast) save.coach.ast = {};
  if (!save.mv.plus) save.mv.plus = {};
  if (!save.look) save.look = {num: {}, boot: {}};
  if (!save.cond) save.cond = {};
  save.ach = save.ach || {}; bizTick();
}
function bizMatch(won, hp, ap, st, h) {
  const b = save.biz, n = []; let c = 0;
  const perf = money((st.marks || 0) * 15 + (st.tackles || 0) * 15 + h.g * 30); c += perf; n.push('Performance bonus +' + fmt(perf));
  if (won) { const m = money(Math.min(hp - ap, 60) * 8); if (m) { c += m; n.push('Margin bonus +' + fmt(m)); } b.streak++; b.best = Math.max(b.best, b.streak); const s = money(Math.min(b.streak, 10) * 100); c += s; n.push('Win streak x' + b.streak + ' +' + fmt(s));
    const flat = (b.sp || []).reduce((a, i) => a + ((SPONS[i] && SPONS[i].flat) || 0), 0); if (flat) { const f = money(flat); c += f; n.push('Naming deals +' + fmt(f)); }
  } else b.streak = 0;
  if (b.stad) { const g = money(b.stad * 90); c += g; n.push('Gate income +' + fmt(g)); }
  b.merch.bonus += money(h.g * 25);
  const L = save.lineup.map(i => POOL[i]).filter(Boolean), w = L.map(p => p.rating + (p.pos === 'MID' ? 15 : 0));
  for (const v of [3, 2, 1]) { let r = Math.random() * w.reduce((a, x) => a + x, 0), k = 0; while (k < L.length - 1 && (r -= w[k]) > 0) k++; const p = L[k]; b.votes[p.id] = (b.votes[p.id] || 0) + v; const pr = money(v * 150) * (p.rating < 80 ? 2 : 1); c += pr; if (v === 3) n.push('Brownlow 3 votes: ' + p.name + ' +' + fmt(pr)); w[k] = .0001; }
  if (b.wager) { const wg = b.wager; b.wager = null; if (won && hp - ap >= wg.m) { const pay = Math.round(wg.s * WAG[wg.m]); c += pay; n.push('WAGER WON +' + fmt(pay)); } else if (ms && ms.insure) { c += wg.s; n.push('Insurance refunded the wager'); } else n.push('Wager lost (-' + fmt(wg.s) + ')'); }
  return {c, n};
}
function bizAch(notes) { for (const [id, t, f, c] of BACH) if (!save.ach['b_' + id] && f(save)) { save.ach['b_' + id] = 1; save.coins += c; notes.push('ACHIEVEMENT: ' + t + ' +' + fmt(c)); } }
const bsec = (t, body) => `<div class="setbox"><h3>${t}</h3>${body}</div>`;
const bbtn = (a, t, off) => `<button class="kbtn" data-biz="${a}" style="margin:3px 6px 3px 0;${off ? 'opacity:.45' : ''}">${t}</button>`;
function bizHTML() {
  const b = save.biz, C = save.coins, st = b.stad, hp = b.hpc || 0, now = Date.now(), stC = stadCost(st), sc = b.scout;
  const stars = save.lineup.map(i => POOL[i]).filter(p => p && p.rating >= 80).length;
  const mer = Math.floor(Math.min(now - b.merch.last, 12 * HR) / HR * stars * 18 * (1 + st * .03)) + b.merch.bonus;
  const slots = loanSlots(), loaned = Object.keys(b.loans).map(Number), rates = loanRates(loaned);
  const lp = loanEarned(b, now, loaned);
  const bench = myBench().filter(p => !b.loans[p.id] && !p.legacy && !p.bont && !p.totw).sort((a, c) => c.price - a.price).slice(0, 6);
  const votes = Object.entries(b.votes).sort((a, c) => c[1] - a[1]).slice(0, 3).map(([i, v]) => POOL[i] ? POOL[i].name + ' (' + v + ')' : '').filter(Boolean).join(' · ') || 'none yet';
  const deals = POOL.filter(p => p && !p.legacy && !p.fantasy && !p.bont && !p.totw && p.rating >= 70 && p.bp).map(p => [p, 1 - p.price / p.bp]).sort((a, c) => c[1] - a[1]).slice(0, 5).map(([p, d]) => p.name + ' ' + fmt(p.price) + ' (-' + Math.round(d * 100) + '%)').join(' · ');
  const hc = hpcCost(hp);
  const named = b.rights ? CLUBS[save.club].short + ' STADIUM' : 'STADIUM';
  const fac = (id, title, blurb) => {
    const lv = facLv(id), c = facCost(lv);
    return bsec(title + ' · ' + lv + '/' + FAC_MAX, `<p>${blurb}</p>${lv < FAC_MAX ? bbtn('fac:' + id, 'UPGRADE ● ' + fmt(c), C < c) : '<b class="gold">MAX LEVEL</b>'}`);
  };
  const camp = b.camp;
  const campLeft = camp ? Math.max(0, camp.end - now) : 0;
  const campP = camp && POOL[camp.id];
  return `<div id="biz"><h1 class="big">BUSINESS</h1><p class="sub">Match bonuses still land at full time. Passive income is capped at x1.8. Late buildings and camps are where the coins go.</p>
  ${bsec(named + ' · LEVEL ' + st + '/10', `<p>+3% sponsor income per level. Gate is +${fmt(money(90))} a match per level. A loan slot every 2 levels. The income multiplier never goes past x1.8.</p>${st < 10 ? bbtn('stad', 'UPGRADE ● ' + fmt(stC), C < stC) : '<b class="gold">MAX LEVEL</b>'}${b.rights ? '<p class="gold">Naming rights are on the stand. Cosmetic only.</p>' : `<p>Naming rights put the club on the stand. No extra income.</p>${bbtn('rights', 'NAME THE GROUND ● ' + fmt(RIGHTS_COST), C < RIGHTS_COST)}`}`)}
  ${bsec('HIGH PERFORMANCE CENTRE · ' + hp + '/' + HPC_MAX, `<p>The late sink. Each level trims match wages by 2.5% and rested players come back a little fresher. It does not print coins.</p>${hp < HPC_MAX ? bbtn('hpc', 'BUILD ● ' + fmt(hc), C < hc) : '<b class="gold">CENTRE COMPLETE</b>'}`)}
  ${fac('train', 'TRAINING GROUND', 'Each level takes 8% off an instant upgrade, capped at 40%. It does not cheapen a training camp.')}
  ${fac('rec', 'RECOVERY CENTRE', 'Each level cuts match fatigue by 2 and adds 6 condition to players who sat on the bench.')}
  ${fac('acad', 'ACADEMY', 'Each level adds 8% to the chance a normal scout brings back a silver.')}
  ${fac('loans', 'LOAN OFFICE', 'Each level adds one loan slot on top of the stadium slots.')}
  ${bsec('TRAINING CAMP', camp ? (campLeft > 0 ? `<p>${campP ? campP.name : 'A player'} is away for ${Math.ceil(campLeft / 60000)} more minutes. +1 level when they return. Camps cost about 72% of the upgrade, then you wait.</p>` : `<p>${campP ? campP.name : 'The player'} is back.</p>${bbtn('campc', 'COLLECT')}`) : `<p>Send someone from the Squad tab. Six real hours, then +1 level. Not a free jump past the price curve.</p>`)}
  ${bsec('SPONSORS · income x' + bizMult().toFixed(2) + ' / 1.80', SPONS.map((s, i) => `<p><b>${s.n}</b> ${s.m ? '+' + Math.round(s.m * 100) + '% income' : '+' + fmt(money(s.flat)) + ' a win'} · needs ${s.w} wins ${b.sp.includes(i) ? '<span class="gold">✔ SIGNED</span>' : bbtn('sp:' + i, 'SIGN ● ' + fmt(s.c), C < s.c || save.won < s.w)}</p>`).join(''))}
  ${bsec('MERCH · ' + stars + ' star' + (stars === 1 ? '' : 's') + ' in lineup', `<p>Each 80+ OVR starter sells a little merch (up to 12 h stored). Goals add a bonus.</p>${bbtn('merch', 'COLLECT +' + fmt(mer), mer < 1)}`)}
  ${bsec('LOANS · ' + loaned.length + '/' + slots + ' slots', `<p>0.1% of the card price per hour, for 24 hours. The first loan pays full rate. Each extra loan pays less.</p>${loaned.map(i => POOL[i] ? `<p>${POOL[i].name} · +${fmt(rates[i] || 0)}/h ${bbtn('unloan:' + i, 'RECALL')}</p>` : '').join('')}${bbtn('loanc', 'COLLECT +' + fmt(lp), lp < 1)}<p>${loaned.length < slots ? bench.map(p => bbtn('loan:' + p.id, p.name + ' +' + fmt(loanRates([p.id])[p.id]) + '/h')).join('') || 'No spare bench players.' : 'All loan slots in use.'}</p>`)}
  ${bsec('SCOUTING ACADEMY', sc ? (now >= sc.end ? `<p>Your scout is back with a ${sc.silver ? 'silver' : 'rookie'}!</p>${bbtn('scoutc', 'COLLECT')}` : `<p>Scout out for ${Math.ceil((sc.end - now) / 60000)} more minutes${sc.silver ? ' · silver guaranteed' : ''}.</p>`) : `<p>Normal trip is 30 minutes, bronze or silver. Academy levels raise the silver chance. The silver trip is 20 minutes and always a silver.</p>${bbtn('scout', 'SEND SCOUT ● ' + fmt(3000), C < 3000)}${bbtn('silv', 'SILVER SCOUT ● ' + fmt(4500), C < 4500)}`)}
  ${bsec('WAGER', b.wager ? `<p>Active: ${fmt(b.wager.s)} staked on a win by ${b.wager.m}+ points (pays x${WAG[b.wager.m]}). Resolves at full time.</p>${bbtn('wcancel', 'CANCEL (REFUND)')}` : `<p>Stake coins before a match; win by the target margin to multiply them. Insurance is bought in the Shop.</p>${[10, 20, 30].map(m => bbtn('w:' + m, 'WIN BY ' + m + '+ · ' + fmt(WSTAKE[m]) + ' → x' + WAG[m], C < WSTAKE[m])).join('')}`)}
  ${bsec('BROWNLOW', `<p>3-2-1 votes after every match; each vote pays coins (double for cards under 80 OVR).</p><p>Leaders: ${votes}</p>`)}
  ${bsec('TRANSFER MARKET', `<p>Card prices swing every day (-15% to +20%). Buy dips, sell spikes. Today's best deals:</p><p>${deals}</p>`)}
  ${bsec('ACHIEVEMENTS', BACH.map(a => `<p>${save.ach['b_' + a[0]] ? '✔' : '○'} ${a[1]} <span class="gold">+${fmt(a[3])}</span></p>`).join(''))}</div>`;
}
function bizAct(s) {
  const b = save.biz, [k, a] = s.split(':'), now = Date.now(); let msg = '';
  const pay = n => { save.coins += n; msg = '+' + fmt(n) + ' coins'; };
  if (k === 'stad') { const c = stadCost(b.stad); if (save.coins < c || b.stad >= 10) return; save.coins -= c; b.stad++; msg = 'Stadium upgraded'; }
  else if (k === 'rights') { if (b.rights || save.coins < RIGHTS_COST) return; save.coins -= RIGHTS_COST; b.rights = 1; msg = 'Naming rights signed'; }
  else if (k === 'fac') { const id = a; if (!b.fac || b.fac[id] == null || b.fac[id] >= FAC_MAX) return; const c = facCost(b.fac[id]); if (save.coins < c) return; save.coins -= c; b.fac[id]++; msg = id + ' level ' + b.fac[id]; }
  else if (k === 'hpc') { const c = hpcCost(b.hpc || 0); if (save.coins < c || (b.hpc || 0) >= HPC_MAX) return; save.coins -= c; b.hpc = (b.hpc || 0) + 1; msg = 'High Performance Centre level ' + b.hpc; }
  else if (k === 'sp') { const S = SPONS[+a]; if (save.coins < S.c || save.won < S.w || b.sp.includes(+a)) return; save.coins -= S.c; b.sp.push(+a); msg = 'Signed ' + S.n; }
  else if (k === 'merch') { const stars = save.lineup.map(i => POOL[i]).filter(p => p && p.rating >= 80).length; pay(Math.floor(Math.min(now - b.merch.last, 12 * HR) / HR * stars * 18 * (1 + b.stad * .03)) + b.merch.bonus); b.merch = {last: now, bonus: 0}; }
  else if (k === 'loan') { if (Object.keys(b.loans).length >= loanSlots() || save.lineup.includes(+a) || !POOL[+a] || POOL[+a].legacy || POOL[+a].bont || POOL[+a].totw) return; b.loans[a] = now; msg = POOL[a].name + ' loaned out'; }
  else if (k === 'unloan' || k === 'loanc') { const ids = k === 'loanc' ? Object.keys(b.loans) : [a]; pay(loanEarned(b, now, ids)); ids.forEach(i => { if (k === 'unloan') delete b.loans[i]; else b.loans[i] = now; }); }
  else if (k === 'scout') { if (save.coins < 3000 || b.scout) return; save.coins -= 3000; b.scout = {end: now + 30 * 60000}; msg = 'Scout sent out'; }
  else if (k === 'silv') { if (save.coins < 4500 || b.scout) return; save.coins -= 4500; b.scout = {end: now + 20 * 60000, silver: 1}; msg = 'Silver scout sent'; }
  else if (k === 'scoutc') { if (!b.scout || now < b.scout.end) return; const silver = b.scout.silver || Math.random() < Math.min(.85, .25 + facLv('acad') * .08); const p = rollPlayer(silver ? 'silver' : 'bronze', {id: 'scout'}); if (save.owned.includes(p.id)) pay(dupPay(p)); else { save.owned.push(p.id); msg = 'Scouted ' + p.name + ' (' + p.rating + ')'; } b.scout = null; }
  else if (k === 'campc') { if (!b.camp || now < b.camp.end) return; const p = POOL[b.camp.id]; b.camp = null; if (p && save.owned.includes(p.id) && levelGap(p)) { save.up[p.id] = (save.up[p.id] || 0) + 1; applyUp(p); msg = p.name + ' +1 level from camp'; } else msg = 'Camp finished with nothing to add'; }
  else if (k === 'w') { const m = +a; if (save.coins < WSTAKE[m]) return; save.coins -= WSTAKE[m]; b.wager = {m, s: WSTAKE[m]}; msg = 'Wager placed'; }
  else if (k === 'wcancel') { save.coins += b.wager.s; b.wager = null; msg = 'Wager refunded'; }
  const n = []; bizAch(n); persist(); syncSquad(); renderShell([msg, ...n].filter(Boolean).join(' · '));
}
let SETSEC = 'main';
if (save) { save.ev = save.ev || {round: 0, done: false}; save.free = save.free || {}; save.up = save.up || {}; save.asc = save.asc || {}; save.mv = save.mv || {own: {}, on: {}}; save.coach = save.coach || {owned: [], cur: null}; save.spon = save.spon || {last: Date.now()}; save.promo = save.promo || {}; save.ach = save.ach || {}; save.dl = save.dl || {last: '', streak: 0}; save.shards = save.shards || 0; save.legDry = save.legDry || 0; save.legGift = save.legGift || 0; POOL.forEach(applyPromo); POOL.forEach(applyUp); bizInit(); }
const persist = () => { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) {} };
let SQUAD = [], OPP = [], oppClub = null;
let KIT_HOME = {a: '#13284f', b: '#f2b705', s: '#13284f', k: '#13284f'};
let KIT_AWAY = {a: '#c42630', b: '#ffffff', s: '#f4f4f4', k: '#c42630'};
const kitOf = c => ({a: c.a, b: c.b, s: c.s, k: c.k, short: c.short});
function syncSquad() {
  SQUAD = save ? save.lineup.map(id => POOL[id]).filter(Boolean) : [];
  if (!save) return;
  KIT_HOME = kitOf(CLUBS[save.club]);
  const t = save.cos && save.cos.trim;
  if (t === 'white') KIT_HOME = {a: '#f4f4f4', b: KIT_HOME.a, s: '#f4f4f4', k: KIT_HOME.a, short: KIT_HOME.short};
  else if (t === 'black') KIT_HOME = {a: '#161616', b: '#f4f4f4', s: '#161616', k: '#f4f4f4', short: KIT_HOME.short};
  else if (t === 'gold') KIT_HOME = Object.assign({}, KIT_HOME, {b: '#f7c738'});
  else if (t === 'heritage') KIT_HOME = {a: KIT_HOME.b, b: KIT_HOME.a, s: KIT_HOME.s, k: KIT_HOME.k, short: KIT_HOME.short};
  else if (t === 'night') KIT_HOME = Object.assign({}, KIT_HOME, {a: '#24143a', b: '#e23b8c'});
}
syncSquad();
const wantsPos = (w, q) => w === 'MID' || w === 'WING' ? (q.pos === 'MID' || q.pos === 'RUC') : q.pos === w;
/* "bad line-out": the club's eighteen weakest players, slotted by position.
   `have` = ids to keep if possible (used to top up older 6-player saves). */
const slotOrder = SLOTS.map((w, i) => i).sort((a, b) => (SLOTS[b] === 'RUC') - (SLOTS[a] === 'RUC'));   // fill the ruck slot first
function fillLineup(ci, have) {
  const mine = POOL.filter(p => p.club === ci && !p.legacy && !p.prem).sort((a, b) => a.rating - b.rating || a.id - b.id), pre = have.map(id => POOL[id]), used = new Set(), out = new Array(TEAM_SIZE);
  for (const i of slotOrder) {
    const w = SLOTS[i], free = q => !used.has(q.id);
    const p = pre.find(q => free(q) && wantsPos(w, q)) || mine.find(q => free(q) && wantsPos(w, q)) || pre.find(free) || mine.find(free);
    used.add(p.id); out[i] = p.id;
  }
  return out;
}
/* Budget starters: cheap, good players who stay in their own club's starting eighteen even though they are now too good to be one of its "weakest". */
const STARTER_NAMES = ['Patrick Retschko'];
const startingLineup = ci => fillLineup(ci, POOL.filter(p => !p.legacy && !p.fantasy && p.club === ci && STARTER_NAMES.includes(p.full)).map(p => p.id));
/* older saves were 6-a-side: top the lineup up to 18 from the bench first, then the club's weakest players */
if (save && save.lineup.length < TEAM_SIZE) {
  const bench = save.owned.filter(id => !save.lineup.includes(id)).map(id => POOL[id]).sort((a, b) => b.rating - a.rating).map(p => p.id);
  save.lineup = fillLineup(save.club, save.lineup.concat(bench));
  save.owned = Array.from(new Set(save.owned.concat(save.lineup)));
  persist(); syncSquad();
}
/* ---- ADAPTIVE AI ----
   1) Before the match: the opponent's real players are picked to sit near your team rating, then their stats are scaled up (or down)
      so the side really lands on that target, even when the club's roster can't reach it (strong squads / legends used to walk it).
   2) During event matches: the away side reads the scoreboard. Every few points you lead by lifts all of its stats, and it eases off a
      little when it is far behind, so a blowout turns into a fight and a fight stays fair. */
const AI_CAP = {kic: 115, mar: 115, spd: 104, end: 115};
function adaptiveCopy(q, delta) {
  const d = Object.assign({}, q);
  for (const k of ['kic', 'mar', 'spd', 'end']) d[k] = clamp(Math.round(q[k] + delta + rnd(-1.5, 1.5)), 40, AI_CAP[k]);
  d.rating = clamp(Math.round(q.rating + delta), 40, 115); d.tier = tierOf(d.rating);
  d.ab = {kic: d.kic, mar: d.mar, spd: d.spd, end: d.end};      // base stats; the in-match adaptation adds a level on top
  return d;
}
function adaptLevel() {
  if (!ms || !ms.ev) return 0;
  const h = ms.score.home, a = ms.score.away;
  return clamp(Math.round(((h.g * 6 + h.b) - (a.g * 6 + a.b)) / 5), -3, 9);
}
function adaptAI() {
  if (!ms || !ms.ev) return;
  const lv = adaptLevel(), old = ms.adapt || 0; if (lv === old) return;
  ms.adapt = lv;
  for (const p of ms.away) { const ab = p.d.ab; if (ab) for (const k in ab) p.d[k] = clamp(ab[k] + lv, 40, AI_CAP[k]); }
  if (lv >= 5 && !ms.adaptShown) { ms.adaptShown = true; showBanner('THE AI RAISES ITS GAME', '#ff5a64'); }
}
/* opponent: random other club, players picked to sit just above your team rating */
function makeOpponent(extra = 0, club) {
  const tr = teamRating() + coachRating(), target = clamp(tr + rnd(2, 8) + extra, 56, 112);
  const cs = CLUBS.map((c, i) => i).filter(i => i !== save.club), ci = club !== undefined ? club : cs[Math.floor(Math.random() * cs.length)];
  const mine = POOL.filter(p => p.club === ci && !p.legacy && !p.prem), used = new Set(), out = [];
  const outA = new Array(TEAM_SIZE);
  for (const i of slotOrder) {
    const w = SLOTS[i];
    let pool = mine.filter(q => !used.has(q.id) && wantsPos(w, q)); if (!pool.length) pool = mine.filter(q => !used.has(q.id));
    let best = null, bs = 1e9; for (const q of pool) { const s = Math.abs(q.rating - target) + rnd(0, 4); if (s < bs) { bs = s; best = q; } }
    used.add(best.id); outA[i] = best;
  }
  const gap = target - outA.reduce((a, q) => a + q.rating, 0) / outA.length, delta = Math.abs(gap) < 1 ? 0 : clamp(gap, -12, 45);
  out.push(...outA.map(q => adaptiveCopy(q, delta)));
  return {club: ci, players: out};
}
function awayKit(ci) {
  const c = CLUBS[ci], rgb = s => [1, 3, 5].map(i => parseInt(s.slice(i, i + 2), 16));
  const d = (x, y) => { const p = rgb(x), q = rgb(y); return Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]); };
  let k = kitOf(c); if (d(k.a, KIT_HOME.a) < 110) k = {a: c.b, b: c.a, s: c.b === '#ffffff' ? '#f4f4f4' : c.b, k: c.a, short: c.short};
  return k;
}
/* Formation, home attacking +x, same order as SLOTS: full-back + half-back lines, wings / centre / ruck, half-forward + full-forward lines. */
const HOME_SPOTS = [[-62,-14],[-66,0],[-62,14],[-42,-30],[-45,0],[-42,30],
                    [-4,-44],[-14,-16],[-14,16],[-2,0],[-26,0],[-4,44],
                    [42,-30],[45,0],[42,30],[62,-14],[66,0],[62,14]];
const AWAY_SPOTS = HOME_SPOTS.map(([x, z]) => [-x, z]);
const DEFAULT_KEYS = {up:'KeyW', down:'KeyS', left:'KeyA', right:'KeyD', sprint:'ShiftLeft', kick:'Space', punt:'KeyR', handpass:'KeyF', tackle:'KeyT', move:'KeyV', nearest:'KeyQ', cycle:'KeyE', pause:'Escape'};
const ACTIONS = [['up','Move up'],['down','Move down'],['left','Move left'],['right','Move right'],['sprint','Sprint (drains stamina)'],['kick','Kick: hold for power'],
  ['punt','Quick drop punt'],['handpass','Handpass'],['tackle','Tackle (lunge)'],['move','Signature move (Fend Off / Sidestep)'],['nearest','Switch to nearest to ball'],['cycle','Cycle players'],['pause','Pause']];
let bind = Object.assign({}, DEFAULT_KEYS);
try { Object.assign(bind, JSON.parse(localStorage.getItem('aflKeys') || '{}')); } catch (e) {}
const keyName = c => ({Space:'SPACE', ShiftLeft:'L-SHIFT', ShiftRight:'R-SHIFT', Escape:'ESC', Enter:'ENTER', Tab:'TAB', Backspace:'BKSP', ArrowUp:'↑', ArrowDown:'↓', ArrowLeft:'←', ArrowRight:'→'}[c]
  || c.replace(/^Key/, '').replace(/^Digit/, '').replace(/^Numpad/, 'NUM ').toUpperCase());
/* Graphics modes: 'high' | 'low' (Lite) | 'shit' (SHIT QUILTY - potato mode).
   Microsoft Surface laptops get flagged (Electron passes ?surface=1 after reading the real machine model; browsers
   fall back to the user-agent / a ?surface=1 URL flag for testing). A flagged Surface is dropped into SHIT QUILTY,
   gets a "laptop too bad" pop-up, runs at bad FPS until the Resolution setting is turned down to 50% or lower,
   and gets 1% icon pack odds. Picking a graphics mode by hand in Settings overrides the auto mode switch. */
const IS_SURFACE = /surface/i.test(navigator.userAgent || '') || /[?&]surface=1/.test(location.search);
const settings = { graphics: localStorage.getItem('aflGraphics') || 'high', surface: IS_SURFACE, res: +localStorage.getItem('aflRes') || 100 };
if (![25, 50, 75, 100].includes(settings.res)) settings.res = 100;
if (IS_SURFACE && !localStorage.getItem('aflGfxManual')) settings.graphics = 'shit';
const SURFACE_BAD_FPS = () => settings.surface && settings.res > 50;   // true = Surface is being punished with bad FPS
if (!['high', 'low', 'shit'].includes(settings.graphics)) settings.graphics = 'high';
const GFX_NAME = {high: 'HIGH', low: 'LITE', shit: 'SHIT QUILTY'};

/* =================== PITCH CONSTANTS =================== */
const A = 87.5, B = 75;                 // 175 m × 150 m oval. A player is ~2 m, so this is a full-size ground.
const inOval = (x, z, inset = 0) => (x / (A - inset)) ** 2 + (z / (B - inset)) ** 2 <= 1;
const GOAL_X = A - 3.5;                 // aim point just in front of the goal line
const CAM_H = 32, CAM_Z = 44, CAM_LOOK = 8;

/* =================== 3D BUILDERS =================== */
const M = (c, r = .8) => new THREE.MeshStandardMaterial({color: c, roughness: r, metalness: 0});
const addM = (p, g, m, x = 0, y = 0, z = 0, sh = true) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.castShadow = sh; p.add(o); return o; };
const cyl = (a, b, h, s = 16) => new THREE.CylinderGeometry(a, b, h, s);
const sph = (r, s = 20) => new THREE.SphereGeometry(r, s, 14);
const texOf = cv => { const t = new THREE.CanvasTexture(cv); t.encoding = THREE.sRGBEncoding; t.anisotropy = 8; return t; };
/* shared geometry / material caches: 36 players share the same meshes' buffers, which keeps the match smooth */
const GEO = {}, MATS = {}, JTEX = {};
const geo = (k, f) => GEO[k] || (GEO[k] = f());
const mat = (c, r = .8) => { const k = c + '|' + r; return MATS[k] || (MATS[k] = M(c, r)); };
function hash(s) { let h = 2166136261; for (const ch of s) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
const SKINS = [0xf1c4a0, 0xdfa97e, 0xc88f66, 0x9e7052, 0x7a553c, 0x5b3d2c];
const HAIRS = [0x15110d, 0x2e1d11, 0x5a3b1c, 0xb98f47, 0x7d7d7d, 0x3a2a1a];

/* Club-specific guernsey designs painted on a canvas (back number at u=.5, club badge on the chest) */
const PATTERN = {COL: 'vstripe', NTH: 'vstripe', HAW: 'vstripe', STK: 'vstripe', ESS: 'sash', RIC: 'sash', GEE: 'hoops', FRE: 'hoops',
  PTA: 'bars', ADE: 'yoke', SYD: 'yoke', WCE: 'yoke', MEL: 'yoke', BRL: 'yoke', GCS: 'yoke', GWS: 'yoke', CAR: 'plain', WBD: 'band'};
function guernsey(c1, c2, num, short) {
  const W = 512, H = 320, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  g.fillStyle = c1; g.fillRect(0, 0, W, H);
  const pat = PATTERN[short] || 'yoke';
  g.fillStyle = c2;
  if (pat === 'vstripe') { for (let x = 0; x < W; x += 64) g.fillRect(x + 32, 0, 32, H); }
  else if (pat === 'hoops') { for (let y = 40; y < H; y += 70) g.fillRect(0, y, W, 34); }
  else if (pat === 'bars') { for (let x = 0; x < W; x += 64) { g.fillStyle = c2; g.fillRect(x + 22, 0, 20, H); } }
  else if (pat === 'sash') { g.save(); g.translate(W * .25, 0); g.rotate(.62); for (const x of [0, W]) g.fillRect(x - 40, -200, 80, 700); g.restore(); g.save(); g.translate(W * .75, 0); g.rotate(-.62); g.fillRect(-40, -200, 80, 700); g.restore(); }
  else if (pat === 'band') { g.fillRect(0, 150, W, 40); }
  else if (pat === 'yoke') { g.beginPath(); g.moveTo(0, 0); g.lineTo(W, 0); g.lineTo(W, 62); for (let x = W; x >= 0; x -= 8) g.lineTo(x, 62 + 44 * Math.pow(Math.sin(Math.PI * x / W), 2) * .9 + 14); g.closePath(); g.fill(); }
  g.fillStyle = c2; g.fillRect(0, 300, W, 20);                          // hem
  const back = c2 === '#ffffff' || (pat === 'vstripe' || pat === 'hoops' || pat === 'bars' || pat === 'sash');
  g.save(); g.beginPath(); g.arc(W / 2, 215, 92, 0, 7); g.fillStyle = 'rgba(0,0,0,.28)'; if (back) g.fill(); g.restore();
  g.font = 'bold 150px Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = 8; g.strokeStyle = 'rgba(0,0,0,.55)'; g.strokeText(String(num), W / 2, 214);
  g.fillStyle = back ? '#ffffff' : c2; g.fillText(String(num), W / 2, 214);
  // chest badge (front = u 0 / 1)
  for (const bx of [0, W]) { g.beginPath(); g.arc(bx, 92, 30, 0, 7); g.fillStyle = 'rgba(255,255,255,.92)'; g.fill(); g.lineWidth = 6; g.strokeStyle = c1; g.stroke(); }
  // fabric: soft vertical shading + weave noise
  const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, 'rgba(255,255,255,.08)'); gr.addColorStop(1, 'rgba(0,0,0,.18)'); g.fillStyle = gr; g.fillRect(0, 0, W, H);
  g.globalAlpha = .06; for (let i = 0; i < 900; i++) { g.fillStyle = i % 2 ? '#000' : '#fff'; g.fillRect(Math.random() * W, Math.random() * H, 2, 1); } g.globalAlpha = 1;
  return c;
}
function ensureLook() {
  if (!save) return {num: {}, boot: {}};
  if (!save.look) save.look = {num: {}, boot: {}};
  if (!save.look.num) save.look.num = {};
  if (!save.look.boot) save.look.boot = {};
  return save.look;
}
function jumperOf(p, i) {
  const L = save && save.look;
  if (p && L && L.num && L.num[p.id] != null) return L.num[p.id];
  if (L && L.teamNum != null) return L.teamNum;
  return (i == null || i < 0 ? 7 : i + 1);
}
function bootOf(p) {
  const L = save && save.look;
  const hex = s => parseInt(String(s).replace('#', ''), 16);
  if (p && L && L.boot && L.boot[p.id]) return hex(L.boot[p.id]);
  if (L && L.teamBoot) return hex(L.teamBoot);
  return 0x141414;
}
function jerseyMat(kit, num) {
  const k = kit.a + kit.b + (kit.short || '') + num;
  if (!JTEX[k]) { const m = M(0xffffff, .82); m.map = texOf(guernsey(kit.a, kit.b, num, kit.short)); JTEX[k] = m; }
  return JTEX[k];
}

/* opt: {detail (menu hero), bulk} */
function makePlayer(kit, number, name, heightScale, opt = {}) {
  const h = hash(name), det = !!opt.detail, bulk = opt.bulk || 1, seg = det ? 1 : 0;
  const lk = opt.looks || null;
  const P = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({color: lk ? lk.skin : SKINS[h % SKINS.length], roughness: .62});
  const hairM = new THREE.MeshStandardMaterial({color: lk ? lk.hair : HAIRS[(h >>> 5) % HAIRS.length], roughness: .9});
  const eyeM = new THREE.MeshStandardMaterial({color: lk ? lk.eye : 0x4a301c, roughness: .28, metalness: .06});
  const boot = mat(opt.boot != null ? opt.boot : 0x050607, .5);
  const shorts = mat(new THREE.Color(kit.s).getHex(), .85), sock = mat(new THREE.Color(kit.k).getHex(), .85), cap = mat(new THREE.Color(kit.a).getHex(), .85), trim = mat(new THREE.Color(kit.b).getHex(), .8);
  const jum = jerseyMat(kit, number);
  const body = new THREE.Group(); P.add(body);
  const upper = new THREE.Group(); upper.position.y = 1; body.add(upper);
  const pel = addM(body, geo('pel' + seg, () => cyl(.19, .18, .22, det ? 24 : 12)), shorts, 0, .95, 0, false); pel.scale.z = .7;
  const torso = addM(upper, geo('tor' + seg, () => cyl(.235, .182, .64, det ? 32 : 14)), [jum, cap, cap], 0, .27, 0); torso.scale.z = .7;
  addM(upper, geo('neck', () => cyl(.054, .06, .14, 10)), skin, 0, .66, 0, false);
  const collar = addM(upper, geo('col', () => new THREE.TorusGeometry(.078, .012, 6, 14)), trim, 0, .6, .03, false); collar.rotation.x = Math.PI / 2; collar.scale.y = 1.1;
  const head = new THREE.Group(); head.position.y = .76; upper.add(head);
  addM(head, geo('hd' + seg, () => sph(.108, det ? 28 : 14)), skin).scale.set(.95, 1.17, 1.06);
  addM(head, geo('jaw', () => sph(.07, 10)), skin, 0, -.05, .035, false).scale.set(1, .8, 1);
  let hs = h % 7;
  if (lk && lk.bald) hs = 6; else if (lk && lk.buzz) hs = 5;
  const hr = hs === 5 ? .1 : .118;
  if (hs !== 6) {                                   // 6 = shaved
    const hh = addM(head, geo('hair' + hs, () => new THREE.SphereGeometry(hr, det ? 24 : 12, 10, 0, Math.PI * 2, 0, Math.PI * (hs === 5 ? .44 : .55))), hairM, 0, .014, -.016, false);
    hh.scale.set(1, 1.15, 1.07); hh.rotation.x = -.28; hh.userData.scalp = true;
    if (hs % 3 === 1) { const hb = addM(head, geo('hairb', () => sph(.1, 10)), hairM, 0, -.01, -.06, false); hb.scale.set(1, .9, .7); hb.userData.scalp = true; }
  }
  for (const s of [-1, 1]) {
    addM(head, sph(.02, 8), mat(0xf4f1ea, .35), s * .04, .016, .096, false);
    addM(head, sph(.012, 8), eyeM, s * .04, .016, .108, false);
    addM(head, sph(.006, 6), mat(0x0c0c0c, .25), s * .04, .016, .116, false);
    addM(head, new THREE.BoxGeometry(.034, .008, .012), hairM, s * .04, .044, .1, false);
    if (det) addM(head, sph(.022, 10), skin, s * .102, 0, 0, false).scale.x = .5;
  }
  if (det) addM(head, sph(.017, 10), skin, 0, -.012, .112, false);
  const beard = addM(head, sph(.08, 10), hairM, 0, -.058, .028, false);
  beard.scale.set(1.05, .66, .82); beard.visible = !!(lk && lk.beard);
  const arm = s => {
    const sh = new THREE.Group(); sh.position.set(s * .275, .5, 0); upper.add(sh);
    addM(sh, geo('shs', () => sph(.07, 12)), skin, 0, 0, 0, false);
    addM(sh, geo('ua', () => cyl(.06, .047, .3, 10)), skin, 0, -.15, 0);
    const el = new THREE.Group(); el.position.y = -.3; sh.add(el);
    addM(el, geo('els', () => sph(.04, 8)), skin, 0, 0, 0, false);
    addM(el, geo('fa', () => cyl(.048, .036, .27, 10)), skin, 0, -.135, 0, false);
    addM(el, geo('hand', () => sph(.052, 8)), skin, 0, -.31, 0, false).scale.set(.85, 1.2, 1);
    return {s, sh, el};
  };
  const leg = s => {
    const hip = new THREE.Group(); hip.position.set(s * .1, .93, 0); body.add(hip);
    addM(hip, geo('th', () => cyl(.1, .07, .44, 12)), skin, 0, -.21, 0);
    addM(hip, geo('sht', () => cyl(.112, .106, .22, 12)), shorts, 0, -.08, 0, false);
    const knee = new THREE.Group(); knee.position.y = -.44; hip.add(knee);
    addM(knee, geo('kn', () => sph(.062, 10)), skin, 0, 0, 0, false);
    addM(knee, geo('sh', () => cyl(.066, .045, .42, 10)), skin, 0, -.21, 0);
    addM(knee, geo('calf', () => sph(.058, 8)), skin, 0, -.14, -.02, false).scale.set(1, 1.5, 1);
    addM(knee, geo('sk', () => cyl(.068, .052, .34, 12)), sock, 0, -.25, 0, false);
    addM(knee, geo('skb', () => cyl(.07, .07, .035, 12)), trim, 0, -.1, 0, false);
    addM(knee, geo('bt', () => new THREE.BoxGeometry(.1, .07, .27)), boot, 0, -.455, .06);
    return {hip, knee};
  };
  const Aa = Object.assign(arm(1), leg(1)), Bb = Object.assign(arm(-1), leg(-1));
  const ring = new THREE.Mesh(new THREE.RingGeometry(.62, .78, 40), new THREE.MeshBasicMaterial({color: 0xffe100, transparent: true, opacity: .9, side: THREE.DoubleSide, depthWrite: false}));
  ring.rotation.x = -Math.PI / 2; ring.position.y = .04; ring.visible = false; P.add(ring);
  P.scale.set(heightScale * bulk, heightScale, heightScale * bulk); P.rotation.order = 'YXZ';
  const skins = [], hairs = [], eyes = [];
  P.traverse(o => {
    if (!o.isMesh) return;
    o.updateMatrix(); o.matrixAutoUpdate = false;
    if (o.material === skin) skins.push(o);
    else if (o.material === hairM && o !== beard) hairs.push(o);
    else if (o.material === eyeM) eyes.push(o);
  });
  P.userData = {rig: {body, upper, head, A: Aa, B: Bb}, ring, ph: Math.random() * 6, t: Math.random() * 10, act: null, lc: 0, lunge: 0, fall: 0, side: 1, skins, hairs, eyes, beard, looks: lk, skinMat: skin, hairMat: hairM, eyeMat: eyeM};
  return P;
}

/* ---------- face from the card photo ---------- */
const LOOKS_READY = new Map(), LOOKS_WAIT = new Map();
const hslOf = (r, g, b) => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min, s = l > .5 ? d / (2 - max - min) : d / (max + min);
  let h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [h / 6, s, l];
};
const rgbDist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
const medChan = cols => {
  if (!cols.length) return null;
  const n = cols.length >> 1, ch = i => cols.map(c => c[i]).sort((a, b) => a - b)[n];
  return [ch(0), ch(1), ch(2)];
};
const isBgPx = (r, g, b) => {
  const [h, s, l] = hslOf(r, g, b);
  if (h > .18 && h < .46 && s > .14 && l > .14 && g + 6 >= r) return true;
  if (h > .48 && h < .75 && s > .14) return true;
  if (s < .07 && l > .35 && l < .82) return true;
  return false;
};
const isSkinPx = (r, g, b) => {
  if (isBgPx(r, g, b)) return false;
  const [h, s, l] = hslOf(r, g, b);
  if (l < .15 || l > .93) return false;
  if (!(h < .12 || h > .94)) return false;
  if (s < .14 || s > .72) return false;
  if (r + 5 < g) return false;
  return true;
};
const hairOk = c => {
  const [h, s, l] = hslOf(c[0], c[1], c[2]);
  if (l > .62) return false;
  if (h > .18 && h < .46 && c[1] + 4 >= c[0] && l > .16) return false;
  if (h > .46 && h < .75 && s > .12) return false;
  return true;
};
function readFace(img) {
  const W = 80, H = 96, cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const g = cv.getContext('2d', {willReadFrequently: true});
  g.drawImage(img, 0, 0, W, H);
  const d = g.getImageData(0, 0, W, H).data;
  const at = (x, y) => { const i = (y * W + x) * 4; return [d[i], d[i + 1], d[i + 2]]; };
  const skin = [];
  for (let y = (H * .28) | 0; y < (H * .48) | 0; y++) for (let x = (W * .36) | 0; x < (W * .64) | 0; x++) {
    const nx = (x / W - .5) / .14, ny = (y / H - .38) / .11;
    if (nx * nx + ny * ny > 1) continue;
    const c = at(x, y); if (isSkinPx(c[0], c[1], c[2])) skin.push(c);
  }
  const sk = medChan(skin) || [184, 140, 114];
  const band = [];
  let topN = 0, topSkin = 0;
  for (let y = 1; y < (H * .22) | 0; y++) for (let x = (W * .28) | 0; x < (W * .72) | 0; x++) {
    const c = at(x, y); topN++;
    if (isBgPx(c[0], c[1], c[2])) continue;
    const [h, s, l] = hslOf(c[0], c[1], c[2]);
    if (isSkinPx(c[0], c[1], c[2])) { topSkin++; continue; }
    band.push([c[0], c[1], c[2], l]);
  }
  band.sort((a, b) => a[3] - b[3]);
  const slice = band.slice(0, Math.max(8, band.length * .28 | 0)).filter(c => hairOk(c));
  let hr = medChan(slice.map(c => [c[0], c[1], c[2]]));
  if (!hr || !hairOk(hr)) hr = [26, 16, 11];
  else {
    const [hh, , hl] = hslOf(hr[0], hr[1], hr[2]);
    if (hh > .15 && hh < .48 && hr[1] + 6 >= hr[0] && hl > .16) hr = [26, 16, 11];
  }
  const bald = topN > 0 && topSkin / topN > .62 && band.length < topN * .18;
  const buzz = !bald && topSkin / Math.max(1, topN) > .34 && hslOf(hr[0], hr[1], hr[2])[2] < .16;
  const sl = hslOf(sk[0], sk[1], sk[2])[2];
  const eyes = [];
  for (let y = (H * .34) | 0; y < (H * .50) | 0; y++) {
    for (let x = (W * .30) | 0; x < (W * .46) | 0; x++) eyes.push([x, y]);
    for (let x = (W * .54) | 0; x < (W * .70) | 0; x++) eyes.push([x, y]);
  }
  const eyeCands = [];
  for (const [x, y] of eyes) {
    const c = at(x, y);
    if (isBgPx(c[0], c[1], c[2])) continue;
    const [h, s, l] = hslOf(c[0], c[1], c[2]);
    const dist = rgbDist(c, sk);
    if (l > .78 && s < .22) continue;
    if (l < .04) continue;
    const blue = h > .52 && h < .72 && s > .18 && l > .22 && l < .62 && dist > 20;
    const green = h > .25 && h < .46 && s > .2 && l > .18 && l < .48 && dist > 30;
    const brown = dist > 32 && l < sl - .07 && (h < .14 || h > .92) && l < .42;
    if (!(blue || green || brown)) continue;
    const kind = blue ? 'blue' : green ? 'green' : 'brown';
    eyeCands.push({c, kind, score: (blue ? 4 : green ? 3 : 1) + dist / 120});
  }
  let eye = [86, 52, 32];
  if (eyeCands.length) {
    eyeCands.sort((a, b) => b.score - a.score);
    const top = eyeCands.slice(0, 10);
    const count = {blue: 0, green: 0, brown: 0};
    for (const t of top) count[t.kind]++;
    const kind = count.blue >= count.brown && count.blue >= count.green ? 'blue' : count.green > count.brown ? 'green' : 'brown';
    eye = medChan(top.filter(t => t.kind === kind).map(t => t.c)) || eye;
    if (kind === 'brown') eye = [Math.min(110, eye[0] * .45 + 30 | 0), Math.min(70, eye[1] * .32 + 14 | 0), Math.min(48, eye[2] * .28 + 8 | 0)];
    else eye = [Math.min(255, eye[0] * 1.15 | 0), Math.min(255, eye[1] * 1.1 | 0), Math.min(255, eye[2] * 1.2 | 0)];
  }
  let left = 0, right = 0;
  for (let y = (H * .62) | 0; y < (H * .78) | 0; y++) for (let x = (W * .36) | 0; x < (W * .64) | 0; x++) {
    const c = at(x, y);
    if (isBgPx(c[0], c[1], c[2])) continue;
    const [h, s, l] = hslOf(c[0], c[1], c[2]);
    if (l < .2 && l < sl * .55 && rgbDist(c, sk) > 48 && !isSkinPx(c[0], c[1], c[2]) && !isBgPx(c[0], c[1], c[2])) {
      if (x < W * .46) left++; else if (x > W * .54) right++;
    }
  }
  const hex = c => (c[0] << 16) | (c[1] << 8) | (c[2] | 0);
  const skinHex = hex(sk.map(v => Math.max(0, Math.min(255, v * .92 | 0))));
  const hairHex = hex(hr.map(v => Math.max(0, Math.min(255, v | 0))));
  const eyeHex = hex(eye.map(v => Math.max(0, Math.min(255, v | 0))));
  return {skin: skinHex, hair: hairHex, eye: eyeHex, bald, buzz, beard: left > 40 && right > 40};
}
function sampleLooks(url) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => { try { resolve(readFace(img)); } catch (e) { resolve(null); } };
    img.onerror = () => resolve(null);
    img.src = url;
  });
}
function ensureLooks(url, cb) {
  if (!url) return;
  if (LOOKS_READY.has(url)) { cb(LOOKS_READY.get(url)); return; }
  let w = LOOKS_WAIT.get(url);
  if (!w) { w = sampleLooks(url).then(L => { if (L) LOOKS_READY.set(url, L); return L; }); LOOKS_WAIT.set(url, w); }
  w.then(L => { if (L) cb(L); });
}
function applyLooks(P, L) {
  if (!P || !L) return;
  const u = P.userData; if (!u || !u.skinMat) return;
  u.looks = L;
  u.skinMat.color.setHex(L.skin);
  u.hairMat.color.setHex(L.hair);
  u.eyeMat.color.setHex(L.eye);
  if (u.beard) u.beard.visible = !!L.beard;
  for (const m of u.hairs || []) if (m.userData.scalp) {
    m.visible = !L.bald;
    if (L.buzz) { m.scale.y = Math.min(m.scale.y, .62); m.updateMatrix(); }
  }
  if (ms && ms.fp && ms.setshot && ms.setshot.p && ms.setshot.p.model === P) tintFp(L, ms.setshot.p.team === 'home' ? KIT_HOME : KIT_AWAY);
}

/* ---------- first-person set shot ---------- */
  const SS_DUR = {catch: .22, settle: .22, walk: .85, run: .46, strike: .28, watch: 2.2};
const _ssEye = new THREE.Vector3(), _ssLook = new THREE.Vector3(), _ssBeye = new THREE.Vector3(), _ssTmp = new THREE.Vector3();
const ssSmooth = u => { u = clamp(u, 0, 1); return u * u * (3 - 2 * u); };
function isSetShotSpot(p) {
  if (!p) return false;
  const atk = A_(p.team), dx = GOAL_X * atk - p.x;
  if (dx * atk < 6) return false;                 // past the goal line: not a shot
  // You get the first-person shot whenever the goals are in front of you.
  // The other side only stops for a real shot, so the game doesn't freeze on every backline mark.
  if (p.team !== 'home' && Math.hypot(dx, p.z) > 68) return false;
  return true;
}
function makeFpRig() {
  const g = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({color: 0xc48a74, roughness: .55});
  const sleeve = new THREE.MeshStandardMaterial({color: 0x14213d, roughness: .78});
  const bootM = new THREE.MeshStandardMaterial({color: 0x141414, roughness: .42});
  const lace = new THREE.MeshStandardMaterial({color: 0xf4f4f4, roughness: .55});
  const limb = side => {
    const root = new THREE.Group();
    root.position.set(side * .18, -.2, -.12);
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(.06, .05, .28, 12), sleeve);
    upper.rotation.x = 1.15; upper.rotation.z = side * -.25; upper.position.set(side * .02, -.08, -.08);
    root.add(upper);
    const fore = new THREE.Group();
    fore.position.set(side * .05, -.2, -.16);
    const fa = new THREE.Mesh(new THREE.CylinderGeometry(.045, .036, .26, 12), skin);
    fa.rotation.x = .95; fa.position.set(0, -.06, -.08);
    fore.add(fa);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(.05, 12, 10), skin);
    hand.scale.set(.85, 1.2, .7); hand.position.set(side * -.01, -.2, -.18);
    fore.add(hand);
    root.add(fore); root.userData.fore = fore;
    g.add(root); return root;
  };
  const L = limb(-1), R = limb(1);
  const ball = makeBallModel(); ball.scale.setScalar(1.25); ball.position.set(0, -.42, -.52); g.add(ball);
  const boot = new THREE.Group();
  const foot = new THREE.Mesh(new THREE.BoxGeometry(.09, .055, .16), bootM); foot.position.set(0, -.01, -.02); boot.add(foot);
  const toe = new THREE.Mesh(new THREE.SphereGeometry(.048, 12, 10), bootM); toe.scale.set(1, .72, 1.35); toe.position.set(0, -.01, .1); boot.add(toe);
  const ankle = new THREE.Mesh(new THREE.CylinderGeometry(.038, .044, .18, 10), skin); ankle.position.set(0, .08, -.1); boot.add(ankle);
  const tongue = new THREE.Mesh(new THREE.BoxGeometry(.05, .012, .08), lace); tongue.position.set(0, .028, .02); boot.add(tongue);
  const studs = new THREE.Mesh(new THREE.BoxGeometry(.07, .015, .2), new THREE.MeshStandardMaterial({color: 0x222222, roughness: .6}));
  studs.position.set(0, -.045, .02); boot.add(studs);
  boot.position.set(.08, -.95, -.15); boot.visible = false; g.add(boot);
  g.userData = {L, R, ball, boot, skin, sleeve}; g.visible = false;
  return g;
}
function tintFp(L, kit) {
  const fp = ms && ms.fp; if (!fp) return;
  const u = fp.userData;
  if (L && L.skin) u.skin.color.setHex(L.skin);
  if (kit && kit.a) u.sleeve.color.set(kit.a);
}
function beginSetShot(p, label) {
  if (!ms || !p || ms.setshot || ms.over) return;
  if (ms.ballup) { ms.ballup = null; const bu = $('ballup'); if (bu) bu.classList.add('hide'); }
  const atk = A_(p.team), distG = Math.hypot(GOAL_X * atk - p.x, p.z), auto = p.team !== 'home';
  ms.charging = false; ms.charge = 0; ms.wind = null;
  ms.setshot = {
    p, auto, t: 0, phase: 'catch', phaseT: 0, fired: false, charging: false, power: 0, label: label || 'SET SHOT',
    aim: auto ? clamp(rnd(-1, 1) * (.6 + (1 - p.d.kic / 100) * 3.4), -7, 7) : 0,
    originX: p.x, originZ: p.z, backX: p.x,
    walk: clamp(Math.min(5.5, distG * .06 + 2.4), 2.2, 5.5),
    camBlend: 0, cam0: ms.cam.position.clone(), look0: new THREE.Vector3(ms.focus.x, 0, ms.focus.z - 3)
  };
  p.vx = p.vz = 0; p.face = atk > 0 ? 0 : Math.PI;
  if (p.team === 'home') setActive(p);
  if (!ms.fp) { ms.fp = makeFpRig(); ms.cam.add(ms.fp); }
  tintFp((p.model.userData && p.model.userData.looks) || null, p.team === 'home' ? KIT_HOME : KIT_AWAY);
  const el = $('setshot'); if (el) el.classList.remove('hide');
  const title = !auto && (!label || label === 'SET SHOT') ? 'YOUR SET SHOT' : (label || 'SET SHOT');
  if ($('ssTitle')) $('ssTitle').textContent = title;
  if ($('ssHint')) $('ssHint').textContent = auto ? 'He goes back, lines it up…' : 'A / D or drag to aim  ·  Hold KICK for power  ·  Release to snap it';
  showBanner(label || 'SET SHOT', '#ffd23a');
}
function endSetShot() {
  const s = ms && ms.setshot; if (!s) return;
  if (s.p && s.p.model) s.p.model.visible = true;
  if (ms.fp) ms.fp.visible = false;
  if (ms.ball3) ms.ball3.visible = true;
  if (ms.cam.near !== 1) { ms.cam.near = 1; ms.cam.fov = 42; ms.cam.updateProjectionMatrix(); }
  const el = $('setshot'); if (el) el.classList.add('hide');
  ms.setshot = null;
}
function fireSetShot(s) {
  if (s.fired) return;
  s.fired = true;
  const p = s.p, atk = A_(p.team), b = ms.ball, gx = GOAL_X * atk;
  let tz = clamp(s.aim, -10, 10);
  const need = kickPower(p, Math.hypot(gx - p.x, tz - p.z));
  let power;
  if (s.auto) {
    const ek = diffAI().kickErr;
    power = clamp(need + rnd(-.05, .04) * (1.2 - p.d.kic / 130) * ek, .2, 1);
    tz = clamp(tz + rnd(-1, 1) * (.35 + (1 - p.d.kic / 100) * 2.8) * ek, -9, 9);
  } else {
    power = clamp(Math.max(s.power, .18), .18, 1);
    tz = clamp(tz + rnd(-1, 1) * (1 - p.d.kic / 100) * 1.1, -10, 10);
  }
  const ang = Math.atan2(tz - p.z, gx - p.x);
  const range = kickRange(p, power), dur = kickTime(range), sp = range / dur;
  stat(p.team, 'kicks');
  Object.assign(b, {ph: 'flight', kind: 'kick', dur, apex: 5 + range * .18, el: 0, desc: false, untouched: true, vx: Math.cos(ang) * sp, vz: Math.sin(ang) * sp, h: 1.05, vh: 0, curve: null});
  b.x = p.x + Math.cos(ang) * .85; b.z = p.z + Math.sin(ang) * .85;
  release(p); act(p, 'kick');
  s.phase = 'watch'; s.phaseT = 0;
}
function releaseSetShot() {
  const s = ms && ms.setshot;
  if (!s || s.auto || s.fired || s.phase !== 'line') return;
  if (s.power < .08) s.power = .28;
  s.charging = false; s.phase = 'run'; s.phaseT = 0;
}
function stepSetShot(dt) {
  const s = ms.setshot; if (!s) return;
  if (s.t > 18) { if (!s.fired) fireSetShot(s); endSetShot(); return; }
  const p = s.p, atk = A_(p.team);
  s.t += dt; s.phaseT += dt;
  if (s.phase === 'line' && !s.auto && !s.fired) {
    let dir = 0;
    if (keys.has(bind.left) || keys.has('ArrowLeft')) dir -= 1;
    if (keys.has(bind.right) || keys.has('ArrowRight')) dir += 1;
    s.aim = clamp(s.aim + dir * atk * 8.2 * dt, -10, 10);
    if (s.charging || keys.has(bind.kick)) { s.charging = true; s.power = Math.min(1, s.power + dt / .85); }
    if (s.t > 9.5) { s.power = Math.max(s.power, .5); s.phase = 'run'; s.phaseT = 0; }
  } else if (s.phase === 'line' && s.auto && s.phaseT > .55) { s.phase = 'run'; s.phaseT = 0; }
  if (s.phase === 'walk') {
    const k = ssSmooth(s.phaseT / SS_DUR.walk);
    let nx = s.originX - atk * s.walk * k;
    if (!inOval(nx, s.originZ, 1.4)) nx = p.x;
    p.x = nx; s.backX = nx;
    if (s.phaseT >= SS_DUR.walk) { s.phase = 'line'; s.phaseT = 0; }
  } else if (s.phase === 'run') {
    const k = ssSmooth(s.phaseT / SS_DUR.run);
    p.x = s.backX + atk * 1.45 * k;
    if (s.phaseT >= SS_DUR.run) { s.phase = 'strike'; s.phaseT = 0; }
  } else if (s.phase === 'strike') {
    if (s.phaseT > .11) fireSetShot(s);
  } else if (s.phase === 'watch') {
    if (s.phaseT >= SS_DUR.watch) { endSetShot(); return; }
  } else if (s.phase === 'catch' || s.phase === 'settle') {
    const dur = SS_DUR[s.phase];
    if (s.phaseT >= dur) { s.phase = s.phase === 'catch' ? 'settle' : 'walk'; s.phaseT = 0; }
  }
  p.face = atk > 0 ? 0 : Math.PI; p.vx = p.vz = 0;
  if (s.fired) {
    updateBall(dt);
    if (ms.pending) { ms.dead -= dt; if (ms.dead <= 0) { endSetShot(); performRestart(ms.pending); } }
  }
}
function poseFp(s) {
  const fp = ms.fp; if (!fp) return;
  const u = fp.userData, ph = s.phase, t = s.phaseT;
  const show = s.camBlend > .42 && ph !== 'watch';
  fp.visible = show;
  const bob = Math.sin(s.t * (ph === 'walk' || ph === 'run' ? 10.5 : 1.8)) * (ph === 'line' ? .006 : .018);
  fp.position.set(Math.sin(s.t * 1.3) * .01, bob, 0);
  const rise = ph === 'catch' ? ssSmooth(t / .55) : 1;
  const drop = ph === 'run' ? ssSmooth(t / SS_DUR.run) : (ph === 'strike' ? 1 : 0);
  const yArm = -.18 - (1 - rise) * .62;
  u.L.position.y = yArm; u.R.position.y = yArm;
  u.L.rotation.x = -.35 * (1 - rise) + drop * .35;
  u.R.rotation.x = u.L.rotation.x;
  u.ball.visible = show && ph !== 'strike';
  u.ball.position.set(0, -.38 - drop * .28 + (1 - rise) * .15, -.5 - rise * .05);
  u.ball.rotation.y = -s.t * .35;
  u.boot.visible = ph === 'run' || ph === 'strike';
  if (ph === 'run') {
    const k = ssSmooth(t / SS_DUR.run);
    u.boot.position.set(.12, -.62 + k * .15, -.22 - k * .12);
    u.boot.rotation.x = -.55 + k * .35;
  } else if (ph === 'strike') {
    const k = clamp(t / .22, 0, 1), swing = Math.sin(Math.min(1, k) * Math.PI);
    u.boot.position.set(.04, -.42 + swing * .62, -.32 - k * .28);
    u.boot.rotation.x = -.15 + swing * 1.35;
  }
  if (ms.ball3) ms.ball3.visible = !show || (ph === 'strike' && t > .1);
}
function poseSetShotCam() {
  const s = ms.setshot; if (!s) return;
  const p = s.p, atk = A_(p.team), ph = s.phase;
  let blend = 1;
  if (ph === 'catch') blend = ssSmooth(s.phaseT / SS_DUR.catch);
  else if (ph === 'watch') blend = s.phaseT < .62 ? 1 : 1 - ssSmooth((s.phaseT - .62) / .58);
  s.camBlend = blend;
  const bob = Math.sin(s.t * (ph === 'walk' || ph === 'run' ? 11 : 1.6)) * (ph === 'walk' || ph === 'run' ? .05 : .012);
  _ssEye.set(p.x - atk * .06, 1.64 + bob, p.z);
  _ssLook.set(GOAL_X * atk, 3.6, s.aim);
  if (ph === 'strike') {
    const k = clamp((s.phaseT - .08) / .16, 0, 1);
    _ssEye.y -= Math.sin(k * Math.PI) * .07;
    _ssLook.y += Math.sin(k * Math.PI) * 1.4;
  }
  if (ph === 'watch' && ms.ball.ph === 'flight') _ssLook.set(ms.ball.x, Math.max(1.1, ms.ball.h + .2), ms.ball.z);
  _ssBeye.set(ms.focus.x, CAM_H, ms.focus.z + CAM_Z);
  ms.cam.position.lerpVectors(s.cam0 || _ssBeye, _ssEye, blend);
  _ssTmp.copy(s.look0).lerp(_ssLook, blend);
  ms.cam.lookAt(_ssTmp);
  const fov = 42 + blend * 26, near = blend > .25 ? .06 : 1;
  if (Math.abs(ms.cam.fov - fov) > .4 || ms.cam.near !== near) { ms.cam.fov = fov; ms.cam.near = near; ms.cam.updateProjectionMatrix(); }
  if (ph === 'watch') {
    ms.focus.x += (clamp(ms.ball.x, -A + 8, A - 8) - ms.focus.x) * .15;
    ms.focus.z += (clamp(ms.ball.z, -B + 12, B - 12) - ms.focus.z) * .15;
  }
}
function drawSetShotHud() {
  const s = ms.setshot; if (!s || !$('ssPow')) return;
  const p = s.p, atk = A_(p.team);
  const need = kickPower(p, Math.hypot(GOAL_X * atk - p.x, s.aim - p.z));
  const shown = s.auto ? need : s.power;
  setSty('ssPow', 'transform', 'scaleX(' + Math.max(.001, shown) + ')');
  if ($('ssTick')) $('ssTick').style.left = (clamp(need, .02, .98) * 100) + '%';
  const side = s.aim * atk;
  const lr = side > 1.5 ? 'RIGHT' : side < -1.5 ? 'LEFT' : 'CENTRE';
  const lane = Math.abs(s.aim) < 3.2 ? 'BETWEEN THE POSTS' : Math.abs(s.aim) < 9.6 ? 'BEHIND LINE' : 'WIDE';
  setTxt('ssAim', (s.auto ? 'WATCHING' : lr) + '  ·  ' + lane);
}

const kf = (p, k) => {
                   // smooth keyframe lookup: k = [[t,v],...]
  if (p <= k[0][0]) return k[0][1];
  for (let i = 1; i < k.length; i++) if (p <= k[i][0]) {
    const x = (p - k[i - 1][0]) / (k[i][0] - k[i - 1][0]); return k[i - 1][1] + (k[i][1] - k[i - 1][1]) * (x * x * (3 - 2 * x));
  }
  return k[k.length - 1][1];
};
const ACT = {sidestep: .4, fall: 1.9, kick: .75, handpass: .5, mark: .85, tackle: .5, wrap: .9, tackled: 1.9, fend: .4, stumble: .8, getup: .6};

const POSE = {hA: 0, hB: 0, kA: 0, kB: 0, sA: 0, sB: 0, eA: 0, eB: 0, zA: 0, zB: 0, lean: 0, bob: 0, lunge: 0, fall: 0, twist: 0, nod: 0};
function animPlayer(P, dt, speed, carry) {
  const u = P.userData, r = u.rig; u.t += dt;
  const amp = Math.min(1, speed / 8.5), run = speed > .3;
  if (run) u.ph += dt * (2.4 + .66 * speed);
  const b = Math.sin(u.t * 1.6);
  const o = POSE;
  o.hA = -.04; o.hB = -.04; o.kA = .1; o.kB = .1; o.sA = .05; o.sB = .05; o.eA = -.55; o.eB = -.55; o.zA = .12 + .015 * b; o.zB = .12 + .015 * b; o.lean = 0; o.bob = 0; o.lunge = 0; o.fall = 0; o.twist = 0; o.nod = 0;
  if (run) {
    const w = u.ph, a = Math.sin(w), c = Math.cos(w);
    o.hA = .9 * amp * a; o.hB = -o.hA;
    o.kA = .22 + amp * 1.25 * Math.max(0, -c); o.kB = .22 + amp * 1.25 * Math.max(0, c);
    o.sA = -.8 * amp * a; o.sB = -o.sA; o.eA = o.eB = -.5 - .95 * amp; o.zA = o.zB = .07;
    o.twist = .2 * amp * a; o.bob = .045 * amp * Math.abs(Math.cos(w)); o.nod = -.03 * amp * Math.cos(2 * w);
  }
  const tl = .03 + .22 * amp; u.lc += (tl - u.lc) * Math.min(1, 7 * dt); o.lean = u.lc;
  if (carry) { o.sA = -.9 + (run ? o.sA * .15 : 0); o.zA = -.22; o.eA = -1.3; if (!run) o.sB = o.sB; }   // ball tucked in the right arm
  if (u.act) {
    const a = u.act; a.t += dt; const p = a.t / a.d;
    if (p >= 1) u.act = null; else {
      const ramp = Math.min(1, p / .12) * Math.min(1, (1 - p) / .18), w = ramp * ramp * (3 - 2 * ramp);
      const mix = (k, v) => { o[k] = o[k] * (1 - w) + v * w; };
      if (a.n === 'kick') {
        mix('hA', kf(p, [[0, 0], [.3, .9], [.5, -1.3], [.7, -1.1], [1, 0]]));
        mix('kA', kf(p, [[0, .1], [.3, 1.5], [.5, .2], [1, .1]]));
        mix('sA', -.6); mix('sB', .8); mix('zB', .6); mix('lean', kf(p, [[0, 0], [.5, -.12], [1, 0]]));
      } else if (a.n === 'handpass') {
        mix('sB', kf(p, [[0, -.9], [.35, .4], [.55, -1.7], [1, -.9]]));
        mix('eB', kf(p, [[0, -1.2], [.35, -.5], [.55, -.1], [1, -1.2]]));
        mix('sA', -.8); mix('eA', -1.4); mix('lean', .1);
      } else if (a.n === 'mark') {
        mix('sA', kf(p, [[0, 0], [.35, -3.0], [.7, -1.0], [1, 0]])); mix('sB', kf(p, [[0, 0], [.35, -3.0], [.7, -1.0], [1, 0]]));
        mix('eA', -.1); mix('eB', -.1); mix('zA', .05); mix('zB', .05);
        mix('kA', 1.2); mix('kB', 1.0); mix('hA', -.5); mix('hB', -.3);
        o.bob += .55 * Math.sin(Math.PI * p);
      } else if (a.n === 'tackle') {            // closing in: dive at the ball carrier with arms reaching to wrap
        o.lunge = kf(p, [[0, 0], [.5, 1.5], [1, 1.1]]);
        mix('lean', kf(p, [[0, .3], [.5, 1.1], [1, 1.0]]));
        mix('sA', -2.1); mix('sB', -2.1); mix('eA', -.25); mix('eB', -.25);
        mix('zA', kf(p, [[0, .5], [.6, .35], [1, -.45]])); mix('zB', kf(p, [[0, .5], [.6, .35], [1, -.45]]));
        mix('hA', -1.0); mix('kA', .5); mix('kB', 1.4); mix('hB', .6);
        o.bob -= .3 * kf(p, [[0, 0], [.5, 1], [1, 1]]);
      } else if (a.n === 'wrap') {              // locked on: arms wrapped round the carrier, driving through
        o.lunge = 1.0; mix('lean', 1.05); mix('sA', -1.35); mix('sB', -1.35); mix('zA', -.55); mix('zB', -.55); mix('eA', -1.7); mix('eB', -1.7);
        mix('kA', 1.35); mix('kB', .9); mix('hA', -.9); mix('hB', .3); o.bob -= .32; o.twist = .25 * Math.sin(a.t * 9) * .4;
      } else if (a.n === 'tackled' || a.n === 'fall') {           // knocked off balance, rolls to the ground, then gets up
        o.fall = kf(p, [[0, 0], [.16, 1], [.72, 1], [1, 0]]);
        const fl = Math.sin(a.t * 14) * (1 - Math.min(1, p / .3)) * .6;
        mix('sA', -1.5 + fl); mix('sB', -.9 - fl); mix('zA', .9); mix('zB', .9); mix('eA', -.4); mix('eB', -.6); mix('kA', .7); mix('kB', .4);
        mix('lean', .25);
      } else if (a.n === 'fend') {              // hand-off with the free arm
        mix('sB', kf(p, [[0, -.4], [.3, -1.55], [1, -.4]])); mix('eB', -.1); mix('zB', kf(p, [[0, .2], [.3, .75], [1, .2]]));
        o.twist = .4 * kf(p, [[0, 0], [.3, 1], [1, 0]]); mix('lean', .22);
      } else if (a.n === 'stumble') {           // missed the tackle and overran
        mix('lean', kf(p, [[0, .3], [.3, .95], [1, .05]])); mix('sA', -1.6 + Math.sin(a.t * 12) * .5); mix('sB', -1.6 - Math.sin(a.t * 12) * .5);
        mix('kA', .9); mix('kB', .5); o.bob -= .12 * Math.sin(Math.PI * p);
      } else if (a.n === 'sidestep') {
        mix('lean', .3); o.twist = .55 * Math.sin(Math.PI * p); mix('kA', .8); mix('kB', .6); mix('sA', -1.0); mix('sB', -.2); o.bob += .05 * Math.sin(Math.PI * p);
      } else if (a.n === 'getup') {
        mix('lean', kf(p, [[0, 1], [1, 0]])); mix('kA', kf(p, [[0, 1.3], [1, .1]])); mix('kB', kf(p, [[0, .9], [1, .1]])); mix('sA', -.6); mix('sB', -.6);
        o.bob -= .3 * kf(p, [[0, 1], [1, 0]]);
      }
    }
  }
  r.A.hip.rotation.x = o.hA; r.B.hip.rotation.x = o.hB;
  r.A.knee.rotation.x = o.kA; r.B.knee.rotation.x = o.kB;
  r.A.sh.rotation.x = o.sA; r.B.sh.rotation.x = o.sB;
  r.A.sh.rotation.z = r.A.s * o.zA; r.B.sh.rotation.z = r.B.s * o.zB;
  r.A.el.rotation.x = o.eA; r.B.el.rotation.x = o.eB;
  u.lunge = o.lunge; u.fall = o.fall;
  r.upper.rotation.x = o.lean; r.upper.rotation.y = o.twist; r.body.rotation.y = -o.twist * .5; r.head.rotation.x = -o.lean * .55 + o.nod;
  r.upper.scale.y = 1 + .006 * b; r.body.position.y = o.bob;
}

function makeBallModel() {
  const root = new THREE.Group();          // yaw
  const tilt = new THREE.Group(); root.add(tilt);
  const spin = new THREE.Group(); tilt.add(spin);
  const a = .1425, b = .094, th = M(0xefe6d2, .7);
  const s = addM(spin, new THREE.SphereGeometry(1, 48, 32), M(ballColour(), .55)); s.scale.set(a, b, b);
  for (let k = 0; k < 4; k++) {
    const ph = Math.PI / 2 + k * Math.PI / 2, pts = [];
    for (let i = 0; i <= 48; i++) { const t = Math.PI * i / 48; pts.push(new THREE.Vector3(a * Math.cos(t) * 1.003, b * Math.sin(t) * Math.sin(ph) * 1.003, b * Math.sin(t) * Math.cos(ph) * 1.003)); }
    addM(spin, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 64, .0016, 6), th);
  }
  for (let i = -4; i <= 4; i++) {
    const x = i * .0085, t = Math.acos(x / a), o = addM(spin, new THREE.BoxGeometry(.0022, .0016, .02), th, x, b * Math.sin(t) * 1.005, 0);
    o.rotation.z = Math.atan2(b * Math.cos(t), -a * Math.sin(t));
  }
  root.userData = {tilt, spin};
  return root;
}

function makeOval(low, ground, homeC, awayC) {
  const G = new THREE.Group();
  const freeze = o => { o.updateMatrix(); o.matrixAutoUpdate = false; return o; };
  const gnd = ground || {seats: 0x27364f, night: false, roof: 0, stand: 1, grass: '#3d8748', alt: '#459451'};
  const L = A * 2, W = B * 2, S = low ? 6 : 10, cv = document.createElement('canvas'); cv.width = L * S; cv.height = W * S;
  const g = cv.getContext('2d'), X = m => (m + L / 2) * S, Y = m => (m + W / 2) * S, ci = r => { g.beginPath(); g.arc(X(0), Y(0), r * S, 0, 7); g.stroke(); };
  const E = inset => { g.beginPath(); g.ellipse(L * S / 2, W * S / 2, L * S / 2 - inset, W * S / 2 - inset, 0, 0, Math.PI * 2); };
  g.save(); E(1); g.clip();
  const n = 22; for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? gnd.grass : gnd.alt; g.fillRect(i * L * S / n, 0, L * S / n + 1, W * S); }
  g.strokeStyle = '#fff'; g.lineWidth = .35 * S;
  g.strokeRect(X(-25), Y(-25), 50 * S, 50 * S); ci(5); ci(1.5);
  for (const e of [-1, 1]) {
    const gx = e * (L / 2 - .8);
    g.beginPath(); g.arc(X(gx), Y(0), 50 * S, e > 0 ? Math.PI / 2 : -Math.PI / 2, e > 0 ? 1.5 * Math.PI : Math.PI / 2); g.stroke();
    g.strokeRect(X(Math.min(gx, gx - e * 9)), Y(-3.2), 9 * S, 6.4 * S);
    g.beginPath(); g.moveTo(X(gx), Y(-9.6)); g.lineTo(X(gx), Y(9.6)); g.stroke();
  }
  g.restore(); g.lineWidth = .5 * S; E(.3 * S); g.stroke();
  const t = texOf(cv);
  const oval = new THREE.Mesh(new THREE.PlaneGeometry(L, W), new THREE.MeshStandardMaterial({map: t, transparent: true, roughness: .95}));
  oval.rotation.x = -Math.PI / 2; oval.receiveShadow = true; G.add(freeze(oval));
  const sur = new THREE.Mesh(new THREE.CircleGeometry(1, 96), M(gnd.night ? 0x1c3a28 : 0x2f5636, 1));
  sur.scale.set(L / 2 + 14, W / 2 + 12, 1); sur.rotation.x = -Math.PI / 2; sur.position.y = -.12; sur.receiveShadow = true; G.add(freeze(sur));
  const sc = gnd.stand || 1;
  const ring = (r0, r1, depth, col, y) => {
    const sh = new THREE.Shape(); sh.absellipse(0, 0, L / 2 + r1, W / 2 + r1, 0, Math.PI * 2, false);
    const ho = new THREE.Path(); ho.absellipse(0, 0, L / 2 + r0, W / 2 + r0, 0, Math.PI * 2, true); sh.holes.push(ho);
    const m = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, {depth, bevelEnabled: false, curveSegments: 64}), M(col, .7));
    m.rotation.x = -Math.PI / 2; m.position.y = y; G.add(freeze(m));
  };
  ring(2.6, 3, .9, 0xe9eef2, 0);
  ring(5, 14, 3.2 * sc, gnd.seats, 0); ring(14, 22, 7 * sc, gnd.seats, 0); ring(22, 30, 11 * sc, gnd.night ? 0x121820 : 0x2a3d62, 0);
  if (gnd.roof) ring(6, 26, 1.4, 0x141820, 14 + gnd.roof * 4);
  const flags = [], banners = [];
  const paintBanner = (text, c1, c2) => {
    const bc = document.createElement('canvas'); bc.width = 640; bc.height = 160;
    const bg = bc.getContext('2d');
    bg.fillStyle = c1; bg.fillRect(0, 0, 640, 160);
    bg.fillStyle = c2; for (let x = 0; x < 640; x += 80) bg.fillRect(x, 0, 28, 160);
    bg.fillStyle = c2; bg.fillRect(0, 132, 640, 28);
    bg.font = '800 78px Arial, sans-serif'; bg.textAlign = 'center'; bg.textBaseline = 'middle';
    bg.lineWidth = 10; bg.strokeStyle = 'rgba(0,0,0,.55)'; bg.strokeText(text, 320, 74);
    bg.fillStyle = '#fff'; bg.fillText(text, 320, 74);
    return texOf(bc);
  };
  const hc = homeC || {short: 'HOME', a: '#0b2a5b', b: '#ffffff'}, ac = awayC || {short: 'AWAY', a: '#7a1020', b: '#f4f4f4'};
  const lines = [['GO ' + hc.short, hc.a, hc.b], [hc.short + ' FOREVER', hc.a, hc.b], ['UP THE ' + ac.short, ac.a, ac.b], [ac.short + ' AWAY', ac.a, ac.b]];
  lines.forEach((ln, i) => {
    const ang = (i / lines.length) * Math.PI * 2 + .4, x = Math.cos(ang) * (L / 2 + 9), z = Math.sin(ang) * (W / 2 + 7);
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(28, 6.6), new THREE.MeshBasicMaterial({map: paintBanner(ln[0], ln[1], ln[2]), side: THREE.DoubleSide}));
    mesh.position.set(x, 8.2 + sc * 2, z); mesh.lookAt(0, mesh.position.y, 0); mesh.userData.ph = i;
    banners.push(mesh); G.add(mesh);
  });
  for (let i = 0; i < (low ? 4 : 10); i++) {
    const ang = (i / 10) * Math.PI * 2, club = i % 2 ? ac : hc;
    const cloth = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 3.4), new THREE.MeshBasicMaterial({color: new THREE.Color(club.a), side: THREE.DoubleSide}));
    const stripe = new THREE.Mesh(new THREE.PlaneGeometry(2.4, .55), new THREE.MeshBasicMaterial({color: new THREE.Color(club.b), side: THREE.DoubleSide}));
    stripe.position.y = -1.2; cloth.add(stripe);
    cloth.position.set(Math.cos(ang) * (L / 2 + 4.2), 11 + sc, Math.sin(ang) * (W / 2 + 3.2));
    cloth.lookAt(0, cloth.position.y, 0); cloth.userData.ph = i * .7; flags.push(cloth); G.add(cloth);
  }
  let crowd = null;
  if (!low) {
    const N = 360, geo = new THREE.BoxGeometry(.7, 1.25, .45), mat = new THREE.MeshBasicMaterial({color: 0xffffff});
    crowd = new THREE.InstancedMesh(geo, mat, N); crowd.castShadow = false;
    const dummy = new THREE.Object3D(), col = new THREE.Color(), ca = new THREE.Color(hc.a), cb = new THREE.Color(ac.a), cw = new THREE.Color(0xf2f2f2);
    for (let i = 0; i < N; i++) {
      const ang = (i / N) * Math.PI * 2 + (i % 5) * .02, ringN = i % 4;
      const rx = L / 2 + 8 + ringN * 2.1, rz = W / 2 + 6.5 + ringN * 1.8;
      dummy.position.set(Math.cos(ang) * rx, 2.4 + ringN * 1.35, Math.sin(ang) * rz);
      dummy.lookAt(0, dummy.position.y, 0); dummy.scale.y = .75 + (i % 3) * .18; dummy.updateMatrix();
      crowd.setMatrixAt(i, dummy.matrix);
      crowd.setColorAt(i, i % 8 === 0 ? cw : i % 3 === 0 ? cb : ca);
    }
    crowd.instanceMatrix.needsUpdate = true; if (crowd.instanceColor) crowd.instanceColor.needsUpdate = true;
    G.add(crowd);
  }
  if (gnd.night) {
    for (const [x, z] of [[78, 52], [-78, 52], [78, -52], [-78, -52]]) {
      const pole = new THREE.Mesh(cyl(.18, .22, 22, 6), M(0x2a2e36, .4)); pole.position.set(x, 11, z);
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(1.15, 10, 8), new THREE.MeshBasicMaterial({color: 0xfff3c4}));
      lamp.position.y = 11; pole.add(freeze(lamp)); G.add(freeze(pole));
    }
  }
  const pm = M(0xffffff, .5);
  for (const e of [-1, 1]) for (const z of [-9.6, -3.2, 3.2, 9.6]) {
    const h = Math.abs(z) < 5 ? 15 : 8, p = new THREE.Mesh(cyl(.14, .14, h, 10), pm);
    p.position.set(e * (L / 2 - .8), h / 2, z); p.castShadow = true; G.add(freeze(p));
  }
  G.userData.life = {flags, banners, crowd, t: 0};
  return G;
}

/* =================== RENDERER =================== */
const canvas = $('gl');
const R = new THREE.WebGLRenderer({canvas, antialias: settings.graphics === 'high', alpha: true, powerPreference: 'high-performance'});
const pixelRatioFor = () => (settings.graphics === 'high' ? Math.min(devicePixelRatio, 1.5) : 1) * settings.res / 100;
R.outputEncoding = THREE.sRGBEncoding; R.shadowMap.enabled = settings.graphics === 'high';
R.shadowMap.type = THREE.PCFShadowMap;   // cheaper than PCFSoft, still looks fine at this camera distance

/* ---- hero (menu) scene ---- */
const heroScene = new THREE.Scene();
const heroCam = new THREE.PerspectiveCamera(30, 1, .1, 60);
heroCam.position.set(0, 1.05, 4.6); heroCam.lookAt(0, .92, 0);
heroScene.add(new THREE.HemisphereLight(0xffffff, 0x445566, .85));
const key = new THREE.DirectionalLight(0xfff3e0, 1.2); key.position.set(2, 3, 4); heroScene.add(key);
const rim = new THREE.DirectionalLight(0x59c0ff, 1.1); rim.position.set(-3, 2, -3); heroScene.add(rim);
let heroP = null, heroId = -1, heroX = 0;
let clubR = null, clubScene = null, clubCam = null, clubAvatar = null;
function parseGlb(buf) {
  const dv = new DataView(buf), b = new Uint8Array(buf);
  const jlen = dv.getUint32(12, true);
  const json = JSON.parse(new TextDecoder().decode(b.subarray(20, 20 + jlen)));
  const bin = 28 + jlen;
  const acc = i => {
    const a = json.accessors[i], bv = json.bufferViews[a.bufferView];
    const ncomp = {SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4}[a.type];
    const Ctor = {5126: Float32Array, 5125: Uint32Array, 5123: Uint16Array, 5121: Uint8Array}[a.componentType];
    const start = bin + (bv.byteOffset || 0) + (a.byteOffset || 0);
    const stride = bv.byteStride || ncomp * Ctor.BYTES_PER_ELEMENT;
    if (stride === ncomp * Ctor.BYTES_PER_ELEMENT) return new Ctor(buf, start, a.count * ncomp);
    const out = new Ctor(a.count * ncomp);
    for (let k = 0; k < a.count; k++) out.set(new Ctor(buf, start + k * stride, ncomp), k * ncomp);
    return out;
  };
  const prim = json.meshes[0].primitives[0];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(acc(prim.attributes.POSITION), 3));
  if (prim.attributes.TEXCOORD_0 != null) geo.setAttribute('uv', new THREE.BufferAttribute(acc(prim.attributes.TEXCOORD_0), 2));
  if (prim.attributes.NORMAL != null) geo.setAttribute('normal', new THREE.BufferAttribute(acc(prim.attributes.NORMAL), 3));
  if (prim.indices != null) geo.setIndex(new THREE.BufferAttribute(acc(prim.indices), 1));
  let img = json.images[0];
  const mat = json.materials && json.materials[prim.material || 0];
  const slot = mat && mat.pbrMetallicRoughness && mat.pbrMetallicRoughness.baseColorTexture;
  if (slot && json.textures[slot.index]) img = json.images[json.textures[slot.index].source];
  const bv = json.bufferViews[img.bufferView];
  const bytes = b.subarray(bin + (bv.byteOffset || 0), bin + (bv.byteOffset || 0) + bv.byteLength);
  const tex = new THREE.Texture();
  tex.flipY = false; tex.encoding = THREE.sRGBEncoding;
  const pic = new Image();
  pic.onload = () => { tex.image = pic; tex.needsUpdate = true; if (clubR && clubScene && clubCam) clubR.render(clubScene, clubCam); };
  pic.src = URL.createObjectURL(new Blob([bytes], {type: img.mimeType || 'image/png'}));
  const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({map: tex, side: THREE.DoubleSide}));
  mesh.scale.setScalar(1.998); mesh.position.set(0, 1, 0);
  const g = new THREE.Group(); g.add(mesh);
  g.rotation.y = 0.45;
  return g;
}
function clubFallback() {
  if (!clubScene || clubAvatar) return;
  const cap = SQUAD.length ? SQUAD.reduce((a, p) => p.rating > a.rating ? p : a) : null;
  const guy = makePlayer(KIT_HOME, cap ? jumperOf(cap, save && save.lineup ? save.lineup.indexOf(cap.id) : 0) : 1, cap ? cap.name : 'Captain', 1, {detail: true, boot: cap ? bootOf(cap) : 0x141414});
  guy.rotation.y = 0.45;
  clubAvatar = guy; clubScene.add(guy); frameClubGuy();
}
function frameClubGuy() {
  if (!clubAvatar || !clubCam) return;
  const box = new THREE.Box3().setFromObject(clubAvatar);
  const size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
  clubAvatar.position.x -= c.x; clubAvatar.position.z -= c.z; clubAvatar.position.y -= box.min.y;
  const box2 = new THREE.Box3().setFromObject(clubAvatar);
  const h = Math.max(0.5, box2.max.y);
  const dist = (h * 0.5) / Math.tan((clubCam.fov * Math.PI / 180) / 2);
  clubCam.position.set(h * 0.06, h * 0.62, dist);
  clubCam.lookAt(0, h * 0.58, 0);
  clubCam.near = 0.05; clubCam.far = dist * 8; clubCam.updateProjectionMatrix();
}
function initClubStage() {
  if (clubR) return;
  const cv = $('clubcv'); if (!cv) return;
  cv.classList.remove('hide');
  clubR = new THREE.WebGLRenderer({canvas: cv, alpha: true, antialias: true});
  clubR.outputEncoding = THREE.sRGBEncoding; clubR.setClearColor(0x000000, 0);
  clubScene = new THREE.Scene();
  clubCam = new THREE.PerspectiveCamera(28, .5, .05, 40);
  clubCam.position.set(0, 1.1, 3.4); clubCam.lookAt(0, 1, 0);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(.7, 40), new THREE.MeshBasicMaterial({color: 0x000000, transparent: true, opacity: .28}));
  disc.rotation.x = -Math.PI / 2; disc.position.y = .02; clubScene.add(disc);
  fetch('assets/model.glb?v=26').then(r => { if (!r.ok) throw new Error('model ' + r.status); return r.arrayBuffer(); }).then(buf => {
    try {
      clubAvatar = parseGlb(buf); clubScene.add(clubAvatar); frameClubGuy();
      const hole = $('clubhole'); if (hole) hole.removeAttribute('data-err');
      window.__clubState = {ok: 1};
      if (clubR) clubR.render(clubScene, clubCam);
    } catch (e) {
      window.__clubState = {ok: 0, err: String(e && e.message || e)};
      clubFallback();
    }
  }).catch(e => { window.__clubState = {ok: 0, err: String(e && e.message || e)}; clubFallback(); });
}
function placeClub() {
  const cv = $('clubcv'), hole = $('clubhole');
  if (!cv) return;
  if (tab !== 'squad' || mode !== 'menu' || !hole) { cv.classList.add('hide'); return; }
  const r = hole.getBoundingClientRect();
  if (r.width < 8 || r.height < 8) return;
  cv.classList.remove('hide');
  cv.style.left = r.left + 'px'; cv.style.top = r.top + 'px'; cv.style.width = r.width + 'px'; cv.style.height = r.height + 'px';
  initClubStage();
  if (!clubR) return;
  const pr = Math.min(devicePixelRatio || 1, 1.5);
  clubR.setPixelRatio(pr); clubR.setSize(r.width, r.height, false);
  clubCam.aspect = r.width / r.height; clubCam.updateProjectionMatrix();
}
let ms = null;   // match state
function buildHero() {
  if (heroP) heroScene.remove(heroP);
  const f = SQUAD.length ? SQUAD.reduce((a, p) => p.rating > a.rating ? p : a) : null; heroId = f ? f.id : -1;
  heroP = makePlayer(KIT_HOME, f ? jumperOf(f, save && save.lineup ? save.lineup.indexOf(f.id) : -1) : 7, f ? f.name : 'Nick D.', 1, {detail: true, looks: f && LOOKS_READY.get(f.photo), boot: f ? bootOf(f) : 0x141414});
  if (f && f.photo) ensureLooks(f.photo, L => { if (heroP) applyLooks(heroP, L); });
  const hb = makeBallModel(); hb.position.set(0, 1.12, .5); hb.scale.setScalar(1.4); heroP.add(hb);
  heroP.position.x = heroX; heroScene.add(heroP);
}
buildHero();

/* ---- match scene (built on demand) ---- */

function resize() {
  const w = innerWidth, h = innerHeight;
  R.setPixelRatio(pixelRatioFor()); R.shadowMap.enabled = settings.graphics === 'high';
  R.setSize(w, h, false);
  heroCam.aspect = w / h; heroCam.updateProjectionMatrix();
  if (ms) { ms.cam.aspect = w / h; ms.cam.updateProjectionMatrix(); }
  const s = Math.min(w / 1080, h / 720);
  const st = $('stage'); st.style.transform = `scale(${s})`;
  st.style.left = (w - 1080 * s) / 2 + 'px'; st.style.top = (h - 720 * s) / 2 + 'px';
  heroX = (((w - 1080 * s) / 2 + 285 * s) / w * 2 - 1) * Math.tan(heroCam.fov * Math.PI / 360) * 4.6 * heroCam.aspect; if (heroP) heroP.position.x = heroX;   // keep the menu hero over the left side of the home screen
  placeClub();
}
addEventListener('resize', resize);

/* =================== MENU UI =================== */
let screen = 'splash', tab = 'home', mode = 'menu';
const TXT = {bronze: '#2a1708', silver: '#171b20', gold: '#2b1d03', icon: '#ffffff', legacy: '#ffe58a', prem: '#2a1248'};
function card(p, w) {
  const s = w / 320, col = TXT[p.tier];
  const t = (txt, size, x, y, bw, al, tr = 0, op = 1) =>
    `<div class="t" style="left:${(x - bw / 2) * s}px;top:${y * s}px;width:${bw * s}px;font-size:${size * s}px;text-align:${al};letter-spacing:${tr * s}px;color:${col};opacity:${op}">${txt}</div>`;
  const stats = [['KIC', p.kic], ['MAR', p.mar], ['SPD', p.spd], ['END', p.end]]
    .map((q, i) => t(q[1], q[1] > 99 ? 24 : 28, 55 + i * 70, 366, 64, 'center') + t(q[0], 12, 55 + i * 70, 389, 64, 'center', 1, .8)).join('');
  const face = `<img class="face${p.fantasy ? ' fan' : ''}${p.legacy ? ' leg' : ''}${p.prem ? ' prem' : ''}" alt="" src="${p.photo}" onerror="this.style.display='none'">`;
  return `<div class="card${p.fantasy ? ' fantasy' : ''}${p.legacy ? ' legacy' : ''}${p.prem ? ' prem' : ''}" style="width:${w}px;height:${w * 1.5}px;background-image:url(assets/cards/card_${p.tier}_base.png)">
   ${face}
   <svg viewBox="0 0 24 24" style="left:${130 * s}px;top:${140 * s}px;width:${120 * s}px;height:${120 * s}px;opacity:.32" fill="${col}"><circle cx="12" cy="7" r="4"/><path d="M4 21c0-5 3.5-8 8-8s8 3 8 8z"/></svg>
   ${p.bont ? t('JOURNEY', 13, 262, 78, 120, 'right') : ''}${p.prem ? t('PREM', 15, 262, 96, 100, 'right') : ''}${p.fantasy ? t('FAN', 15, 262, 96, 100, 'right') : ''}${p.legacy ? t('LEGACY', 15, 262, 96, 110, 'right', 1) : ''}${p.lvl ? t('★' + p.lvl, 20, 262, 52, 110, 'right') : ''}${t(p.rating, p.rating > 99 ? 52 : 64, 94, 69, 120, 'left')}${t(p.pos, 22, 66, 109, 60, 'left', 1)}${t(p.name.toUpperCase(), p.name.length > 14 ? 21 : 26, 160, 314, 230, 'center', 1)}${stats}</div>`;
}
const teamRating = () => sideRating(SQUAD);
/* Spine slots (key back, on-ball mids, ruck, key forward) count more.
   The weakest third of the side then pulls the number back down, so three stars cannot drag a 55 supporting cast to 99. */
const SLOT_W = [1.15, 1.7, 1.15, 0.95, 1.45, 0.95, 0.75, 1.55, 1.55, 1.7, 1.5, 0.75, 0.95, 1.45, 0.95, 1.05, 1.65, 1.05];
function sideRating(list) {
  if (!list || !list.length) return 0;
  let acc = 0, wsum = 0; const ratings = [];
  list.forEach((p, i) => {
    const r = p && p.rating != null ? p.rating : (POOL[p] ? POOL[p].rating : 0);
    const w = SLOT_W[i] || 1;
    acc += r * w; wsum += w; ratings.push(r);
  });
  const weighted = acc / wsum;
  ratings.sort((a, b) => a - b);
  const n = Math.max(4, Math.ceil(ratings.length / 3));
  const floor = ratings.slice(0, n).reduce((a, r) => a + r, 0) / n;
  const gap = Math.max(0, weighted - floor);
  return Math.round(clamp(weighted * 0.62 + floor * 0.38 - gap * 0.22, 40, 110));
}
function wageBill() {
  const t = clamp((teamRating() - 52) / 47, 0, 1);
  const raw = Math.round(200 + 11500 * Math.pow(t, 2.2));
  const h = (save && save.biz && save.biz.hpc) || 0;
  return Math.max(150, Math.round(raw * (1 - Math.min(h, 8) * 0.025)));
}
const FATIGUE = {easy: 8, normal: 14, hard: 26, insane: 34};
const REST_GAIN = 22;
function condOf(id) {
  if (!save || !save.cond) return 100;
  const v = save.cond[id];
  return v == null ? 100 : v;
}
function setCond(id, v) {
  if (!save.cond) save.cond = {};
  save.cond[id] = clamp(Math.round(v), 0, 100);
}
function condBand(id) { const c = condOf(id); return c >= 80 ? 'good' : c >= 50 ? 'ok' : 'bad'; }
function condMult(id) {
  const c = condOf(id);
  return c >= 80 ? 1 : c >= 60 ? 0.94 : c >= 40 ? 0.84 : 0.72;
}
function condScale(d) {
  const m = condMult(d.id);
  if (m === 1) return d;
  const o = Object.assign({}, d);
  for (const k of ['kic', 'mar', 'spd', 'end']) o[k] = Math.max(40, Math.round(d[k] * m));
  o.rating = Math.max(40, Math.round(d.rating * m));
  return o;
}
function recoverCost(p) {
  const miss = 100 - condOf(p.id);
  if (miss <= 0) return 0;
  return Math.max(40, Math.round(p.price * 0.012 * miss / 100));
}
function applyFatigue(diffId) {
  if (!save.cond) save.cond = {};
  const loss = Math.max(4, (FATIGUE[diffId] || 14) - facLv('rec') * 2), played = new Set(save.lineup), rest = restGain();
  for (const id of save.owned) setCond(id, condOf(id) + (played.has(id) ? -loss : rest));
}
function restGain() { return REST_GAIN + ((save.biz && save.biz.hpc) || 0) * 2 + facLv('rec') * 6; }
const avg = k => Math.round(SQUAD.reduce((a, p) => a + p[k], 0) / SQUAD.length);
const bgHTML = () => `<div class="bg"><div class="glow"></div><div class="oval"></div>${[0, 1, 2, 3, 4, 5].map(i => `<div class="st" style="left:${i * 210 - 120}px;opacity:${i % 2 ? .5 : 1}"></div>`).join('')}</div>`;

function showMenu() {
  mode = 'menu'; document.body.classList.remove('onhome'); $('menu').classList.remove('hide'); $('hud').classList.add('hide'); $('overlay').classList.add('hide');
  const dh = $('drill'); if (dh) dh.classList.add('hide'); const chh = $('chud'); if (chh) chh.classList.add('hide');
  const hint = $('hint'); if (hint) hint.style.visibility = '';
  R.setClearColor(0x000000, 0);
  screen === 'splash' ? renderSplash() : screen === 'pick' ? renderPick() : renderShell();
}
function renderSplash() {
  $('stage').innerHTML = `<div id="splash"><img class="art nopt" src="assets/splash.jpg?v=28" alt=""><div class="shade nopt"></div><div class="logo it nopt"><div class="yr">2026</div><div class="a">AFL</div><div class="m">MOBILE</div><div class="rule"></div><div class="u">ULTIMATE TEAM</div></div><div class="go it nopt">TAP TO START</div></div>`;
  const go = () => { removeEventListener('keydown', onKey); screen = save ? 'home' : 'pick'; save ? renderShell() : renderPick(); };
  const onKey = e => { if (e.code === 'Enter' || e.code === 'Space') go(); };
  $('splash').addEventListener('click', go); addEventListener('keydown', onKey);
}
/* =================== ABOUT US (500 pages of rant) ===================
   Pages are generated from a seeded RNG (so page N is always the same) and only rendered when scrolled near.
   Reaching the very bottom pays ABOUT_REWARD coins, once per career. */
const ABOUT_PAGES = 500, ABOUT_PAGE_H = 700, ABOUT_REWARD = 100000;
const ABOUT_CHAPTERS = ['Why I Am Like This', 'The Update That Ate My Weekend', 'Blue Screens, Blue Moods', 'The Start Menu: A Crime Scene', 'Drivers Licence Not Included',
  'Fans, Heat and Fury', 'Settings vs Control Panel: A War', 'Batteries Are Lies', 'The Tyranny of the Progress Bar', 'Notifications About Notifications',
  'Thin, Light, Slow', 'Forced Restarts: A Love Story (No)', 'Pre-Installed Regrets', 'File Explorer and Other Myths', 'Wi-Fi: Now You See It',
  'The Registry Dimension', 'Antivirus Versus Itself', 'Why I Use Something Else', 'Reconciliation (There Is None)', 'The Long Walk To The Bottom'];
const ABOUT_TOPICS = ['the Start menu', 'Windows Update', 'the blue screen of death', 'driver installers', 'the Control Panel that is secretly three Control Panels', 'forced restarts',
  'the taskbar that moves when you breathe on it', 'the Settings app that cannot do what the Control Panel did', 'Cortana', 'the assistant that pops up uninvited', 'the pre-installed games nobody asked for',
  'adverts inside the Start menu', 'the 40 GB of "system files"', 'the registry', 'file paths with a 260 character limit', 'the fan that sounds like a jet engine', 'the battery that dies at 63%',
  'the touchpad that thinks it is a slot machine', 'sleep mode that is actually a coma', 'USB devices that are "not recognised"', 'the antivirus that scans itself', 'a progress bar frozen at 99%',
  'the "Just a moment..." screen', 'cloud storage helpfully moving your Desktop', 'the login screen that forgets your PIN', 'Bluetooth', 'Wi-Fi that vanishes after sleep',
  'the Task Manager that uses 2 GB to tell you it is using 2 GB', 'being forced to make an account to use your own computer', 'notifications about notifications', 'the "Are you sure?" dialog',
  'drive letters', 'the spinning circle', 'a driver update that breaks the previous driver update', 'high-DPI scaling that blurs everything', 'File Explorer freezing on a single folder',
  'a laptop hot enough to cook an egg', 'the thin-and-light laptop that is thin, light and slow', 'the hibernate file nobody can explain', 'the "Getting Windows ready" screen', 'the search bar that cannot find files on your own desktop'];
const ABOUT_ADJ = ['deeply', 'spectacularly', 'offensively', 'unforgivably', 'aggressively', 'magnificently', 'tragically', 'stunningly', 'embarrassingly', 'relentlessly'];
const ABOUT_BAD = ['broken', 'unnecessary', 'cursed', 'confusing', 'slow', 'hostile to its own users', 'held together with sticky tape', 'designed by a committee at 4 a.m.', 'an act of sabotage', 'a cry for help'];
const ABOUT_SIM = ['trying to carry water in a colander', 'reading the terms and conditions out loud', 'teaching a cat to do its taxes', 'arguing with a parking meter', 'assembling flat-pack furniture with no instructions',
  'a haunted vending machine', 'being stuck in a lift that only plays one song', 'running for a bus that is also on fire', 'asking a toaster for relationship advice', 'herding cats through a revolving door'];
const ABOUT_WHEN = ['last Tuesday', 'last winter', 'during a deadline', 'on my birthday', 'at 2 a.m.', 'the night before a demo', 'on a long weekend', 'in front of the whole team', 'on a perfectly good Sunday'];
const ABOUT_VICTIM = ['my deadline', 'my lunch', 'my demo', 'my sleep', 'my mood', 'my build', 'my weekend', 'my will to live', 'my faith in humanity', 'my last good keyboard'];
const ABOUT_SENT = [
  t => `I have lost count of the hours I have wasted on ${t()}, and I regret every single minute of them.`,
  t => `Let me be clear about ${t()}: it is ${AB.adj()} ${AB.bad()}.`,
  t => `Using ${t()} is like ${AB.sim()}, except that would at least be quieter.`,
  t => `${AB.when()}, ${t()} ruined ${AB.victim()}, and nobody has apologised to this day.`,
  t => `People say "just restart it". I did. ${t()} came back, and it brought friends.`,
  t => `I once asked a colleague to explain ${t()}. He stared at the wall for eleven minutes and then quietly left the building.`,
  t => `If ${t()} were a person, I would cross the road to avoid it, and then it would update itself and follow me across.`,
  t => `The worst part of ${t()} is not that it fails; it is that it fails ${AB.adj()} and with total confidence.`,
  t => `Every time I think ${t()} cannot get worse, a patch arrives to prove me wrong.`,
  t => `I have a folder on my desk called "Evidence". The first fifty items are all about ${t()}.`,
  t => `My therapist asked what stresses me out. I said ${t()}. She asked me to stop saying that word in her office.`,
  t => `I wrote a strongly worded letter about ${t()}. The reply was a notification asking me to rate my experience.`,
  t => `Somebody, somewhere, looked at ${t()} and said "ship it". I would like to meet that person and take them for a very long walk.`,
  t => `There is a special kind of silence that falls over a room when ${t()} chooses the exact moment you need it least.`,
  t => `In the old days, ${t()} was merely annoying. Today it is ${AB.adj()} ${AB.bad()}, and it has a loyalty programme.`,
  t => `Listen: I am a reasonable man. But ${t()}? That is where reason goes to retire.`,
  t => `My grandmother had a washing machine from 1974 that never once crashed. It certainly never had ${t()}.`,
  t => `I measured the time lost to ${t()} over one year. It was long enough to learn the cello, badly.`,
  t => `A junior dev asked me why I am so angry. I handed him a laptop and said "open it, wait, and tell me about ${t()}".`,
  t => { const x = t(); return `${x.charAt(0).toUpperCase() + x.slice(1)} is not a feature. It is a hostage situation.`; },
  t => `I keep a jar of coins for every time ${t()} has interrupted me. I have bought a small boat.`,
  t => `The documentation for ${t()} is a single sentence, and the sentence is wrong.`,
  t => `I have seen grown engineers weep openly at ${t()}. I wept too. We did it together. It was beautiful and terrible.`,
  t => `They told me ${t()} would be fixed "in the next release". That was six releases ago and I have started a countdown tattoo.`
];
const ABOUT_CLOSE = ['And that, dear reader, is why I will never trust it again.', 'I rest my case, and also my head, which hurts.', 'Anyway. Where was I? Oh yes: still furious.', 'We will return to this, because I am nowhere near done.',
  'I need a lie-down, but the laptop will not let me because it is updating.', 'Moving on, but only because I need more coffee.', 'I would say more, but I have exactly 499 pages left.', 'Breathe in. Breathe out. Now open the next page.'];
const AB = {};
const mulberry = a => () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
function aboutPage(n) {
  if (n === 1) return `<h2>ABOUT US</h2><p><b>We are one developer.</b> One person, one keyboard, one very large mug of coffee. That person is Marcus "Pixel" Doyle, he made every part of this game, and he would like you to know that he did it without ever being asked to restart his computer.</p>
    <p>AFL Mobile started as a weekend experiment: 18 players a side, a muddy oval and a Sherrin that behaves roughly like the real thing. It grew into packs, a market, events and an economy that Marcus rebalanced personally after discovering that a pack could print money.</p>
    <p>There is also something Marcus feels you should know about him before you read on. <b>He hates Windows computers.</b> Not mildly. Not ironically. Deeply, daily and in writing. What follows is the unedited rant he insists on calling "a short statement".</p>
    <p>It is 500 pages long. Nobody has ever reached the bottom. If you do, he has left you something.</p>`;
  if (n === ABOUT_PAGES) return `<h2>THE END</h2><p>You actually did it. Five hundred pages of a grown man shouting at a laptop, and you scrolled through every one.</p>
    <p>Marcus wants you to know that he does not hate <i>you</i>. He hates the progress bar that was stuck at 99% while he wrote this paragraph.</p><p><b>As promised: ${fmt(ABOUT_REWARD)} coins.</b> Spend them wisely. Or on packs. Probably on packs.</p><p style="text-align:center;font-size:34px">🏆</p>`;
  const r = mulberry(n * 7919 + 13), pick = a => a[Math.floor(r() * a.length)];
  AB.adj = () => pick(ABOUT_ADJ); AB.bad = () => pick(ABOUT_BAD); AB.sim = () => pick(ABOUT_SIM); AB.when = () => pick(ABOUT_WHEN); AB.victim = () => pick(ABOUT_VICTIM);
  const topic = () => pick(ABOUT_TOPICS), chap = Math.floor((n - 1) / 25);
  let html = (n - 1) % 25 === 0 ? `<h2>CHAPTER ${chap + 1}: ${ABOUT_CHAPTERS[chap].toUpperCase()}</h2>` : '';
  for (let p = 0; p < 4; p++) {
    const used = new Set(), t = topic(); let txt = '';
    const count = 3 + Math.floor(r() * 2);
    for (let i = 0; i < count; i++) {
      let k; do { k = Math.floor(r() * ABOUT_SENT.length); } while (used.has(k) && used.size < ABOUT_SENT.length); used.add(k);
      txt += ABOUT_SENT[k](r() < .55 ? () => t : topic) + ' ';
    }
    if (p === 3) txt += ' ' + pick(ABOUT_CLOSE);
    txt = txt.trim().replace(/^[a-z]/, c => c.toUpperCase()).replace(/([.!?] )([a-z])/g, (m, a, b) => a + b.toUpperCase());   // sentence case
    html += `<p>${txt}</p>`;
  }
  return html;
}
function aboutShellHTML() {
  const done = save.aboutDone;
  return `<div id="about"><div class="row-h"><h1 class="big">ABOUT US</h1><span class="sub" style="margin:0">${done ? '✔ 100,000 coins claimed' : 'Scroll to the very last page for a reward'}</span><span class="r" id="abprog">PAGE 1 / ${ABOUT_PAGES}</span></div>
    <div id="abscroll"><div id="abinner" style="height:${ABOUT_PAGES * ABOUT_PAGE_H}px;position:relative"></div></div></div>`;
}
function initAbout() {
  const sc = $('abscroll'), inner = $('abinner'); if (!sc || !inner) return;
  const made = new Map();   // page number -> element
  const fill = () => {
    const first = Math.max(1, Math.floor(sc.scrollTop / ABOUT_PAGE_H) - 1), last = Math.min(ABOUT_PAGES, Math.ceil((sc.scrollTop + sc.clientHeight) / ABOUT_PAGE_H) + 2);
    for (let n = first; n <= last; n++) if (!made.has(n)) {
      const d = document.createElement('div'); d.className = 'abpage'; d.style.top = (n - 1) * ABOUT_PAGE_H + 'px';
      d.innerHTML = aboutPage(n) + `<div class="abnum">- page ${n} of ${ABOUT_PAGES} -</div>`; inner.appendChild(d); made.set(n, d);
    }
    for (const [n, el] of made) if (n < first - 6 || n > last + 6) { el.remove(); made.delete(n); }   // keep the DOM small
  };
  let tick = 0;
  sc.addEventListener('scroll', () => {
    if (tick) return; tick = requestAnimationFrame(() => {
      tick = 0; fill();
      const pg = Math.min(ABOUT_PAGES, Math.floor((sc.scrollTop + sc.clientHeight * .5) / ABOUT_PAGE_H) + 1); $('abprog').textContent = 'PAGE ' + pg + ' / ' + ABOUT_PAGES;
      if (!save.aboutDone && sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 40) {
        save.aboutDone = true; save.coins += ABOUT_REWARD; persist();
        if ($('coinTxt')) $('coinTxt').textContent = fmt(save.coins);
        toast('YOU REACHED THE BOTTOM! +' + fmt(ABOUT_REWARD) + ' COINS');
        const sb = document.querySelector('#about .row-h .sub'); if (sb) sb.textContent = '✔ 100,000 coins claimed';
      }
    });
  });
  fill();
}

const TABS = [['home', 'HOME', '⌂'], ['events', 'EVENTS', '🏆'], ['legacy', 'LEGACY', '🏅'], ['upgrade', 'UPGRADE', '💎'], ['biz', 'BUSINESS', '💼'], ['market', 'MARKET', '🛒'], ['packs', 'PACKS', '🎁'], ['settings', 'SETTINGS', '⚙']];
let capturing = null;
function updateHint() {
  $('hint').textContent = `${keyName(bind.up)}${keyName(bind.left)}${keyName(bind.down)}${keyName(bind.right)} move · ${keyName(bind.sprint)} sprint · ${keyName(bind.kick)} kick · mark or win a free for a set shot · ${keyName(bind.handpass)} handpass · ${keyName(bind.tackle)} tackle · ${keyName(bind.pause)} pause`;
}
addEventListener('keydown', e => {
  if (!capturing || mode !== 'menu') return;
  e.preventDefault(); e.stopPropagation();
  if (e.code !== 'Escape') {
    const old = bind[capturing];
    for (const k in bind) if (k !== capturing && bind[k] === e.code) bind[k] = old;     // swap if the key was taken
    bind[capturing] = e.code; localStorage.setItem('aflKeys', JSON.stringify(bind));
  }
  capturing = null; renderShell();
}, true);
const fmt = n => Number(n).toLocaleString('en-US');
const SELL_RATE = .2;   // quick-sell / duplicate refund. Must stay well below pack cost / pack value or packs print money
const sellValue = p => (!p || p.legacy || p.bont || p.totw) ? 0 : Math.max(10, Math.round(p.price * SELL_RATE));
const myBench = () => save.owned.filter(id => !save.lineup.includes(id)).map(id => POOL[id]).sort((a, b) => b.rating - a.rating);
let sel = null, pickSel = -1;
const MKT = {q: '', pos: 'ALL', tier: 'ALL', club: -1, sort: 'rating', page: 0, sec: 'players'};
function toast(msg, bad) {
  const t = $('toast'); if (!t) return; t.textContent = msg; t.className = 'show' + (bad ? ' bad' : '');
  clearTimeout(toast.h); toast.h = setTimeout(() => { t.className = ''; }, 2000);
}
function rosterChanged() { persist(); syncSquad(); const f = SQUAD.reduce((a, p) => p.rating > a.rating ? p : a); if (f.id !== heroId) buildHero(); checkPsycho(); }
function promoteTier(p) {
  if (!p || p.legacy || p.fantasy) return toast("This card can't be promoted", true);
  const rule = TIER_PROMO[p.tier];
  if (!rule) return toast(p.tier === 'gold' ? 'Already a GOLD card or better' : 'Not eligible for promotion', true);
  if (save.coins < rule.cost) return toast('Not enough coins', true);
  save.coins -= rule.cost; save.promo[p.id] = rule.to; applyPromo(p); applyUp(p);
  persist(); syncSquad(); renderShell('Promoted ' + p.name + ' to a ' + rule.to.toUpperCase() + ' card!');
  checkPsycho();
}
function checkPsycho() {
  if (!save || (save.ach && save.ach.psycho)) return;
  if (!save.lineup || save.lineup.length < TEAM_SIZE) return;
  const allGold = save.lineup.every(id => save.promo[id] === 'gold');
  if (!allGold) return;
  save.ach = save.ach || {}; save.ach.psycho = true; save.coins += 500000;
  persist(); showBanner('🏆 ACHIEVEMENT: PSYCHO — whole team promoted to GOLD! +$500,000', '#f7c738');
}
function autoBuildSquad() {
  const cand = save.owned.map(id => POOL[id]).filter(Boolean);
  const used = new Set(), out = new Array(SLOTS.length).fill(null);
  const order = SLOTS.map((w, i) => i).sort((a, b) => (SLOTS[b] === 'RUC') - (SLOTS[a] === 'RUC') || (SLOTS[a] === 'DEF' || SLOTS[a] === 'FWD' ? 0 : 1) - (SLOTS[b] === 'DEF' || SLOTS[b] === 'FWD' ? 0 : 1));
  for (const i of order) {
    const best = cand.filter(p => !used.has(p.id) && wantsPos(SLOTS[i], p)).sort((a, b) => b.rating - a.rating || b.price - a.price)[0];
    if (best) { used.add(best.id); out[i] = best.id; }
  }
  for (let i = 0; i < out.length; i++) if (out[i] === null) {
    const best = cand.filter(p => !used.has(p.id)).sort((a, b) => b.rating - a.rating)[0];
    if (best) { used.add(best.id); out[i] = best.id; }
  }
  if (out.some(v => v === null)) return toast('Not enough players to fill 18 spots', true);
  save.lineup = out; sel = null; rosterChanged();
  renderShell('Auto-build complete · best 18 you own · team rating ' + teamRating());
}

/* ---- club picker (first launch) ---- */
function renderPick() {
  document.body.classList.remove('onhome');
  const tiles = CLUBS.map((c, i) => `<div class="ct ${pickSel === i ? 'on' : ''}" data-i="${i}" style="background:linear-gradient(135deg,${c.a} 55%,${c.b})"><b>${c.short}</b><span>${c.name}</span></div>`).join('');
  $('stage').innerHTML = `${bgHTML()}<div id="pick"><h1 class="big">CHOOSE YOUR CLUB</h1>
    <p class="sub">You start with that club's eighteen weakest players and ${fmt(START_COINS)} coins. Win matches, then buy better players in the market.</p>
    <div class="ctg">${tiles}</div>
    <div class="pickbar">${pickSel >= 0 ? `<b class="it">${CLUBS[pickSel].name.toUpperCase()}</b><button class="go2 it" id="confirmClub">START CAREER ▶</button>` : '<small>Click a club to select it</small>'}</div></div>`;
  document.querySelectorAll('.ct').forEach(el => el.onclick = () => { pickSel = +el.dataset.i; renderPick(); });
  if ($('confirmClub')) $('confirmClub').onclick = () => newGame(pickSel);
}
function newGame(ci) {
  const lu = startingLineup(ci);
  save = {club: ci, coins: START_COINS, owned: lu.slice(), lineup: lu.slice(), played: 0, won: 0, drawn: 0, lost: 0, ev: {round: 0, done: false}, free: {}, up: {}, asc: {}, mv: {own: {}, on: {}}, coach: {owned: [], cur: null, ast: {}}, spon: {last: Date.now()}, promo: {}, ach: {}, dl: {last: '', streak: 0}, cond: {}, look: {num: {}, boot: {}}, shards: 0, legDry: 0, legGift: 0, bundle: 0, inv: {}, arm: {}, cos: {ball: 'sherrin', chant: 'none', trim: 'club', balls: ['sherrin'], chants: ['none'], trims: ['club'], grounds: ['mcg', 'marvel']}};
  POOL.forEach(applyPromo); POOL.forEach(applyUp); initX();
  persist(); syncSquad(); buildHero(); tab = 'home'; screen = 'home'; sel = null; renderShell();
}

/* ---- moves & coaches UI ---- */
const TIERCOL = {bronze: '#cd7f32', silver: '#cfd6de', gold: '#f7c738', icon: '#5ee0ff', legacy: '#ffd34d'};
const secSeg = () => `<div class="seg" id="secseg">${[['players', 'PLAYERS'], ['shop', 'SHOP'], ['moves', 'MOVES'], ['coaches', 'COACHES'], ['trade', 'ONLINE']].map(([k, n]) => `<button data-sec="${k}" class="${MKT.sec === k ? 'on' : ''}">${n}</button>`).join('')}</div>`;
const flatTxt = c => ['kic', 'mar', 'spd', 'end'].map(k => { const v = (c.flat[k] || 0) + (c.flat.all || 0); return v ? '+' + v + ' ' + k.toUpperCase() : ''; }).filter(Boolean).join(' · ');
function movesMarketHTML() {
  const none = !Object.values(save.mv.own || {}).some(n => n > 0);
  return `<div id="market"><div class="row-h"><h1 class="big">SIGNATURE MOVES</h1><span class="r">${none ? 'Bullet Handball and Fend Off are 2,500 until you own one' : 'Buy a move, then equip it in the Squad tab'}</span></div>${secSeg()}
    <div class="mvg">${MOVES.map(m => { const own = save.mv.own[m.id] || 0, price = movePrice(m), can = save.coins >= price, plus = save.mv.plus && save.mv.plus[m.id];
      const up = own && PLUS_OK[m.id] && !plus ? `<button class="kbtn" data-plus="${m.id}" style="margin-top:6px">UPGRADE ● ${fmt(40000)}</button>` : plus ? '<em class="gold">UPGRADED</em>' : '';
      return `<div class="mvc" style="border-color:${TIERCOL[m.tier]}"><div class="mvi">${m.icon}</div><b class="it">${m.name}</b><small style="color:${TIERCOL[m.tier]}">${m.kind === 'active' ? 'ACTIVE · KEY ' + keyName(bind.move) : 'PASSIVE'} · ${m.tier.toUpperCase()}${none && (m.id === 'fend' || m.id === 'bullet') ? ' · STARTER' : ''}</small>
      <span>${m.desc}${PLUS_OK[m.id] ? ' Upgrade: ' + PLUS_OK[m.id] : ''}</span><em>${own ? 'OWNED ×' + own + ' · ' + availMove(m.id) + ' free' : 'NOT OWNED'}</em><button class="buy ${can ? '' : 'no'}" data-bmove="${m.id}">● ${fmt(price)}</button>${up}</div>`; }).join('')}</div></div>`;
}
function coachMarketHTML() {
  const pike = !save.coach.owned.length;
  return `<div id="market"><div class="row-h"><h1 class="big">COACHES</h1><span class="r">${pike ? 'Start with Gary Pike. Assistants stack on top.' : 'Head coach plus assistants. Every owned assistant stays on.'}</span></div>${secSeg()}
    <div class="mvg c3">${COACHES.map(c => { const owned = save.coach.owned.includes(c.id), cur = save.coach.cur === c.id, can = save.coins >= c.price, ini = c.name.split(' ').map(w => w[0]).slice(0, 2).join('');
      return `<div class="mvc coach ${cur ? 'cur' : ''}" style="border-color:${TIERCOL[c.tier]}"><div class="mvi av" style="background:${TIERCOL[c.tier]}">${ini}</div><b class="it">${c.name}</b><small style="color:${TIERCOL[c.tier]}">${c.title.toUpperCase()}${c.id === 'mentor' ? ' · FIRST COACH' : ''}</small>
      <span class="gold">${flatTxt(c)}</span><span>${c.desc}</span>
      ${cur ? '<em>✔ CURRENT COACH</em>' : owned ? `<button class="go2 it" data-hire="${c.id}">APPOINT</button>` : `<button class="buy ${can ? '' : 'no'}" data-bcoach="${c.id}">● ${fmt(c.price)}</button>`}</div>`; }).join('')}
      ${AST.map(a => { const owned = save.coach.ast && save.coach.ast[a.id], can = save.coins >= a.price;
        return `<div class="mvc coach" style="border-color:#8fd0ff"><div class="mvi av">+</div><b class="it">${a.name}</b><small>ASSISTANT · STACKS</small><span class="gold">${flatTxt(a)}</span><span>${a.desc}</span>
        ${owned ? '<em>✔ ON THE BENCH</em>' : `<button class="buy ${can ? '' : 'no'}" data-ast="${a.id}">● ${fmt(a.price)}</button>`}</div>`; }).join('')}</div></div>`;
}
function coachBarHTML() {
  const c = coachNow();
  return `<div class="coachbar">${c ? `<span class="cav" style="background:${TIERCOL[c.tier]}">${c.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</span><b class="it">COACH ${c.name}</b><span>${c.title} · ${flatTxt(c)}</span>` : '<b class="it">NO COACH</b><span>Hire a coach to boost your whole lineup</span>'}<button class="kbtn" id="coachGo">${c ? 'CHANGE' : 'HIRE'}</button></div>`;
}
function movePanelHTML(p) {
  const on = movesOn(p.id), slots = moveSlots(p), free = MOVES.filter(m => availMove(m.id) > 0);
  return `<div class="mvbar"><b class="it">SIGNATURE MOVES · ${p.name.toUpperCase()}</b><span>${on.length}/${slots} slots${slots === 1 ? ' (a 2nd slot unlocks at upgrade level 3)' : ''}</span>
    ${on.map((m, i) => `<button class="mvchip on" data-mvrm="${i}" title="Remove">${MV[m].icon} ${MV[m].name} ✕</button>`).join('')}
    ${on.length < slots ? (free.map(m => `<button class="mvchip" data-mvadd="${m.id}" title="${m.desc}">＋ ${m.icon} ${m.name} (${availMove(m.id)})</button>`).join('') || '<span class="dim">No spare moves - buy some in Market › Signature Moves</span>') : ''}</div>`;
}
function movePrice(m) {
  const none = !save.mv || !Object.values(save.mv.own || {}).some(n => n > 0);
  if (none && (m.id === 'fend' || m.id === 'bullet')) return 2500;
  return m.price;
}
const PLUS_OK = {torp: 'range 15% → 25%', speccy: 'mark chance 15% → 25%', lock: 'tackle bonus 20% → 30% and a longer pin'};
function buyMove(id) {
  const m = MV[id]; const price = movePrice(m); if (save.coins < price) return toast('Not enough coins', true);
  save.coins -= price; save.mv.own[id] = (save.mv.own[id] || 0) + 1; persist(); renderShell('Bought ' + m.name + '! Equip it from the Squad tab');
}
function buyPlus(id) {
  if (!PLUS_OK[id] || !(save.mv.own[id] > 0)) return toast('Own that move first', true);
  if (!save.mv.plus) save.mv.plus = {};
  if (save.mv.plus[id]) return;
  if (save.coins < 40000) return toast('Not enough coins', true);
  save.coins -= 40000; save.mv.plus[id] = 1; persist(); renderShell(MV[id].name + ' upgraded');
}
function buyAst(id) {
  const a = AST.find(x => x.id === id); if (!a) return;
  if (!save.coach.ast) save.coach.ast = {};
  if (save.coach.ast[id]) return;
  if (save.coins < a.price) return toast('Not enough coins', true);
  save.coins -= a.price; save.coach.ast[id] = 1; persist(); renderShell(a.name + ' hired. The boost stacks.');
}
function buyCoach(id) {
  const c = CO[id]; if (save.coins < c.price) return toast('Not enough coins', true);
  save.coins -= c.price; save.coach.owned.push(id); save.coach.cur = id; persist(); renderShell('Appointed ' + c.name + ' as coach!');
}
function hireCoach(id) { save.coach.cur = id; persist(); renderShell('Appointed ' + CO[id].name + ' as coach'); }

const BOOSTS = [
  {id: 'water', name: 'Water Bottle', price: 300, now: 1, desc: '+25 condition on the player you have open in the squad. If nobody is open, the most tired starter drinks it.'},
  {id: 'warm', name: 'Pre-game Warm-up', price: 800, arm: 1, desc: '+1 to every stat for the next match.'},
  {id: 'energy', name: 'Energy Drink', price: 15000, arm: 1, desc: 'Sprint drains less for the next match.'},
  {id: 'plan', name: 'Game Plan', price: 60000, arm: 1, desc: '+3 to every stat for the next match. Stacks with the warm-up.'},
  {id: 'insure', name: 'Wager Insurance', price: 20000, arm: 1, desc: 'If the next match loses the wager, the stake comes back.'},
  {id: 'med', name: 'Medical Kit', price: 25000, now: 1, desc: 'Every player you own goes back to full condition.'}
];
const BALLS = [
  {id: 'sherrin', name: 'Sherrin Red', price: 0, col: 0xa3201b},
  {id: 'yellow', name: 'Yellow Footy', price: 800, col: 0xe6c15a},
  {id: 'white', name: 'White Match Ball', price: 1500, col: 0xf4f1ea},
  {id: 'goldball', name: 'Gold Sherrin', price: 45000, col: 0xe6b325},
  {id: 'night', name: 'Night Pink', price: 80000, col: 0xe23b8c},
  {id: 'heritage', name: 'Heritage Tan', price: 220000, col: 0xc47a3a}
];
BALL_COLS = BALLS;
const CHANTS = [
  {id: 'none', name: 'No chant', price: 0, line: ''},
  {id: 'oi', name: 'Oi Oi Oi', price: 500, line: 'OI OI OI!'},
  {id: 'carn', name: "Carn the boys", price: 2000, line: "CARN THE BOYS!"},
  {id: 'anthem', name: 'Club roar', price: 35000, line: 'UP THE CLUB!'},
  {id: 'dynasty', name: 'Dynasty chant', price: 180000, line: 'THIS IS OUR HOUSE!'}
];
const TRIMS = [
  {id: 'club', name: 'Club kit', price: 0},
  {id: 'white', name: 'White clash', price: 2000},
  {id: 'black', name: 'Black clash', price: 12000},
  {id: 'gold', name: 'Gold sash', price: 60000},
  {id: 'heritage', name: 'Heritage hoops', price: 250000},
  {id: 'night', name: 'Night special', price: 500000}
];
const GROUND_PRICE = {mcg: 0, marvel: 0, kardinia: 35000, adelaide: 40000, gabba: 80000, scg: 90000, optus: 180000, metricon: 250000};
const BUNDLE_COST = 4500;
function ballColour() {
  const list = BALL_COLS;
  if (!list) return 0xa3201b;
  const b = list.find(x => x.id === ((save && save.cos && save.cos.ball) || 'sherrin'));
  return b ? b.col : 0xa3201b;
}
function chantLine() { const c = CHANTS.find(x => x.id === ((save && save.cos && save.cos.chant) || 'none')); return c && c.line ? c.line : ''; }
function groundOpen(id) {
  if (!GROUND_PRICE[id]) return true;
  const g = save && save.cos && save.cos.grounds;
  if (g == null) return true;
  return g.indexOf(id) >= 0;
}
function eatPrep() {
  const a = (save && save.arm) || {}, inv = (save && save.inv) || {};
  const eat = id => { if (!a[id] || !(inv[id] > 0)) { if (a[id]) a[id] = 0; return false; } a[id] = 0; inv[id]--; return true; };
  const prep = {flat: 0, energy: eat('energy'), insure: eat('insure')};
  if (eat('warm')) prep.flat += 1;
  if (eat('plan')) prep.flat += 3;
  return prep;
}
function buyBoost(id) {
  const b = BOOSTS.find(x => x.id === id); if (!b) return;
  if (save.coins < b.price) return toast('Not enough coins', true);
  save.coins -= b.price; save.inv[id] = (save.inv[id] || 0) + 1; persist(); renderShell(b.name + ' in the bag');
}
function useBoost(id) {
  const n = (save.inv && save.inv[id]) || 0; if (n < 1) return toast('None in the bag', true);
  if (id === 'med') { save.inv.med--; for (const i of save.owned) setCond(i, 100); persist(); return renderShell('Every condition is full'); }
  if (id === 'water') {
    let p = sel && POOL[sel.id] && save.owned.includes(sel.id) ? POOL[sel.id] : null;
    if (!p) p = save.lineup.map(i => POOL[i]).filter(Boolean).sort((a, c) => condOf(a.id) - condOf(c.id))[0];
    if (!p) return;
    save.inv.water--; setCond(p.id, condOf(p.id) + 25); persist(); return renderShell(p.name + ' drank. Condition ' + condOf(p.id) + '%');
  }
  if (save.arm[id]) return toast('Already armed for the next match');
  save.arm[id] = 1; persist(); renderShell('Armed for the next match');
}
function totwOffers() {
  const day = Math.floor(Date.now() / DAY);
  if (!save.totw || save.totw.day !== day) {
    let h = (day * 1103515245 + 12345) >>> 0;
    const pool = [];
    for (let i = 0; i < POOL.length; i++) {
      const p = POOL[i];
      if (p && !p.legacy && !p.fantasy && !p.prem && !p.bont && !p.totw && p.rating >= 76 && p.rating <= 93) pool.push(p);
    }
    const offers = [], used = new Set();
    for (let n = 0; n < 4 && pool.length; n++) {
      h = (Math.imul(h, 1664525) + 1013904223) >>> 0;
      let p = pool[h % pool.length], g = 0;
      while (used.has(p.id) && g++ < 40) { h = (Math.imul(h, 1664525) + 1013904223) >>> 0; p = pool[h % pool.length]; }
      used.add(p.id);
      const id = 49000 + (day % 2000) * 4 + n;
      const rating = Math.min(99, (p.b ? p.b.rating : p.rating) + 2);
      const price = Math.round(clamp(priceFor(rating) * 0.62, 150000, 1000000));
      offers.push({id, base: p.id, price});
    }
    save.totw = {day, offers}; persist();
  }
  (save.totw.offers || []).forEach(stubTotw);
  return save.totw.offers || [];
}
function buyTotw(id) {
  const o = (save.totw && save.totw.offers || []).find(x => x.id === id);
  const p = o && stubTotw(o); if (!p) return;
  if (save.owned.includes(p.id)) return toast('Already owned', true);
  if (save.coins < o.price) return toast('Not enough coins', true);
  save.coins -= o.price; save.owned.push(p.id);
  save.totwOwn = save.totwOwn || [];
  if (!save.totwOwn.some(x => x.id === p.id)) save.totwOwn.push({id: p.id, base: o.base, price: o.price});
  persist(); renderShell('Signed Team of the Week ' + p.name);
}
function buyCos(kind, id) {
  const list = kind === 'ball' ? BALLS : kind === 'chant' ? CHANTS : TRIMS;
  const item = list.find(x => x.id === id); if (!item || !save.cos) return;
  const key = kind + 's';
  const have = save.cos[key] || (save.cos[key] = kind === 'ball' ? ['sherrin'] : kind === 'chant' ? ['none'] : ['club']);
  if (have.indexOf(id) >= 0) { save.cos[kind] = id; persist(); syncSquad(); return renderShell(item.name + ' on'); }
  if (save.coins < item.price) return toast('Not enough coins', true);
  save.coins -= item.price; have.push(id); save.cos[kind] = id; persist(); syncSquad(); renderShell('Unlocked ' + item.name);
}
function buyGround(id) {
  if (!GROUNDS.some(g => g.id === id)) return;
  if (!groundOpen(id)) {
    const price = GROUND_PRICE[id] || 0;
    if (save.coins < price) return toast('Not enough coins', true);
    save.coins -= price;
    if (!Array.isArray(save.cos.grounds)) save.cos.grounds = ['mcg', 'marvel'];
    save.cos.grounds.push(id);
  }
  save.ground = id; persist(); renderShell(groundById(id).name);
}
function buyBundle() {
  if (save.bundle) return toast('Already bought');
  if (save.coins < BUNDLE_COST) return toast('Not enough coins', true);
  const picks = [];
  for (const pos of ['RUC', 'MID', 'DEF', 'FWD']) {
    let best = null, bd = 99;
    for (let i = 0; i < POOL.length; i++) {
      const p = POOL[i];
      if (!p || p.legacy || p.fantasy || p.prem || p.bont || p.totw || p.pos !== pos || save.owned.includes(p.id)) continue;
      if (p.rating < 73 || p.rating > 77) continue;
      const d = Math.abs(p.rating - 75);
      if (d < bd) { bd = d; best = p; }
    }
    if (best) { save.owned.push(best.id); picks.push(best.name + ' ' + best.rating); }
  }
  save.coins -= BUNDLE_COST; save.bundle = 1;
  if (!save.coach.owned.includes('mentor')) { save.coach.owned.push('mentor'); if (!save.coach.cur) save.coach.cur = 'mentor'; }
  persist(); renderShell('Starter bundle: ' + (picks.join(', ') || 'no spare cards') + (save.coach.cur === 'mentor' ? ' · Gary Pike' : ''));
}
function buyLegacy(id) {
  const p = POOL[id];
  if (!p || !p.legacy || save.owned.includes(id)) return toast('Already owned', true);
  if (save.coins < LEGACY_BUY) return toast('Need 15,000,000', true);
  save.coins -= LEGACY_BUY; save.owned.push(id); persist(); renderShell('Signed ' + p.full + '. Legends cannot be sold.');
}
function sendCamp(id) {
  const p = POOL[id], b = save.biz; if (!p || !b) return;
  if (b.camp && Date.now() < b.camp.end) return toast('A camp is already running', true);
  if (b.camp) return toast('Collect the finished camp in Business first', true);
  const c = campCost(p); if (!c) return toast('Already at the level cap. Masterclass is the next sink.', true);
  if (save.coins < c) return toast('Not enough coins', true);
  save.coins -= c; b.camp = {id: p.id, end: Date.now() + 6 * HR}; persist(); renderShell(p.name + ' sent to camp for 6 hours');
}
function shopHTML() {
  const offers = totwOffers();
  const boosts = BOOSTS.map(b => {
    const n = (save.inv && save.inv[b.id]) || 0, armed = save.arm && save.arm[b.id];
    return `<div class="mvc"><b class="it">${b.name}</b><span>${b.desc}</span><em>${n} owned${armed ? ' · ARMED' : ''}</em>
      <button class="buy ${save.coins < b.price ? 'no' : ''}" data-boost="${b.id}">BUY ● ${fmt(b.price)}</button>
      ${n && !armed ? `<button class="kbtn" data-use="${b.id}" style="margin-top:6px">${b.now ? 'USE NOW' : 'ARM NEXT MATCH'}</button>` : ''}</div>`;
  }).join('');
  const totw = offers.map(o => {
    const p = POOL[o.id]; if (!p) return '';
    const owned = save.owned.includes(p.id);
    return `<div class="mvc"><b class="it">${p.name} ${p.rating}</b><small>TEAM OF THE WEEK · ${p.pos} · +2 OVR · refreshes tomorrow</small><span>A special of ${POOL[o.base] ? POOL[o.base].full : p.full}. Cannot be sold.</span>
      ${owned ? '<em>OWNED</em>' : `<button class="buy ${save.coins < o.price ? 'no' : ''}" data-totw="${o.id}">● ${fmt(o.price)}</button>`}</div>`;
  }).join('');
  const cosRow = (kind, list) => list.map(it => {
    const have = (save.cos[kind + 's'] || []).indexOf(it.id) >= 0, on = save.cos[kind] === it.id;
    return `<button class="kbtn" data-cos="${kind}:${it.id}" style="margin:3px${on ? ';border-color:#f7c738' : ''}">${it.name}${on ? ' ✔' : have || !it.price ? '' : ' ● ' + fmt(it.price)}</button>`;
  }).join('');
  const legs = POOL.filter(p => p && p.legacy && !save.owned.includes(p.id)).slice(0, 6);
  return `<div id="market"><div class="row-h"><h1 class="big">SHOP</h1><span class="r">Boosters get bought again. Cosmetics do not change the match economy.</span></div>${secSeg()}
    ${save.bundle ? '' : `<div class="setbox"><h3>STARTER BUNDLE · ONCE</h3><p>One card around 75 OVR in ruck, midfield, defence and forward, plus Gary Pike if you do not have a coach.</p><button class="buy ${save.coins < BUNDLE_COST ? 'no' : ''}" id="buyBundle">● ${fmt(BUNDLE_COST)}</button></div>`}
    <div class="setbox"><h3>MATCH BOOSTERS</h3><div class="mvg">${boosts}</div></div>
    <div class="setbox"><h3>TEAM OF THE WEEK</h3><p>Four cards, +2 OVR, 150k to 1M. New list every day. They cannot be sold.</p><div class="mvg">${totw}</div></div>
    <div class="setbox"><h3>BALL</h3>${cosRow('ball', BALLS)}</div>
    <div class="setbox"><h3>CROWD CHANT</h3><p>Plays on your goals. No stat change.</p>${cosRow('chant', CHANTS)}</div>
    <div class="setbox"><h3>GUERNSEY</h3>${cosRow('trim', TRIMS)}</div>
    <div class="setbox"><h3>LEGENDS · ${fmt(LEGACY_BUY)} EACH</h3><p>Buying a legend does not let you sell it. The 20% refund does not apply.</p>${legs.map(p => `<button class="kbtn" data-buylg="${p.id}" style="margin:3px">${p.name} ● 15M</button>`).join('') || '<p>You own every legend on this shelf. The Legacy tab still crafts with shards.</p>'}</div>
  </div>`;
}

/* ---- market ---- */
function marketList() {
  const q = MKT.q.trim().toLowerCase();
  const l = POOL.filter(p => p && !p.legacy && !p.bont && !p.totw && (MKT.pos === 'ALL' || p.pos === MKT.pos) && (MKT.tier === 'ALL' || p.tier === MKT.tier.toLowerCase()) && (MKT.club < 0 || p.club === MKT.club) && (!q || p.full.toLowerCase().includes(q)));
  l.sort(MKT.sort === 'priceAsc' ? (a, b) => a.price - b.price || b.rating - a.rating : MKT.sort === 'priceDesc' ? (a, b) => b.price - a.price || b.rating - a.rating : (a, b) => b.rating - a.rating || a.id - b.id);
  return l;
}
function renderMarketGrid() {
  const l = marketList(), per = 16, pages = Math.max(1, Math.ceil(l.length / per)); MKT.page = clamp(MKT.page, 0, pages - 1);
  $('mgrid').innerHTML = l.slice(MKT.page * per, MKT.page * per + per).map(p => {
    const owned = save.owned.includes(p.id), can = save.coins >= p.price;
    return `<div class="mc"><div class="${owned ? 'dim' : ''}">${card(p, 104)}</div><button class="buy ${owned ? 'own' : can ? '' : 'no'}" data-id="${p.id}">${owned ? 'OWNED' : '● ' + fmt(p.price)}</button></div>`;
  }).join('') || '<p class="sub">No players match those filters.</p>';
  $('mpager').innerHTML = `<button class="kbtn" id="pp">◀</button><span>PAGE ${MKT.page + 1} / ${pages} · ${l.length} PLAYERS</span><button class="kbtn" id="pn">▶</button>`;
  $('pp').onclick = () => { if (MKT.page > 0) { MKT.page--; renderMarketGrid(); } };
  $('pn').onclick = () => { if (MKT.page < pages - 1) { MKT.page++; renderMarketGrid(); } };
  document.querySelectorAll('.buy').forEach(b => b.onclick = () => buyPlayer(+b.dataset.id));
}
function buyPlayer(id) {
  const p = POOL[id];
  if (save.owned.includes(id)) return toast('Already in your squad', true);
  if (save.coins < p.price) return toast('Not enough coins', true);
  save.coins -= p.price; save.owned.push(id); persist();
  $('coinTxt').textContent = fmt(save.coins); renderMarketGrid(); toast('Signed ' + p.name + '! Pick them in the Squad tab');
}

/* ---- packs ---- */
const TIERS = ['bronze', 'silver', 'gold', 'icon'];
(() => { const st = document.createElement('style'); st.textContent = `
.card.legacy{filter:drop-shadow(0 0 7px rgba(255,211,77,.75));animation:legGlow 2.4s ease-in-out infinite}
.card .face.leg{box-shadow:0 0 0 2px #ffd34d,0 0 16px rgba(255,211,77,.8)}
@keyframes legGlow{0%,100%{filter:drop-shadow(0 0 5px rgba(255,211,77,.55))}50%{filter:drop-shadow(0 0 13px rgba(255,90,90,.95))}}`; document.head.appendChild(st); })();
const ICON_SURFACE = .1;
const PACKS = [
  {id: 'rising', name: 'RISING STARS', price: 2000, n: 2, w: {bronze: 80, silver: 20}, min: 'bronze', info: '2 players · budget pack'},
  {id: 'bronze', name: 'BRONZE PACK', price: 2000, n: 3, w: {bronze: 92, silver: 8}, min: 'bronze', info: '3 players · mostly bronze'},
  {id: 'silver', name: 'SILVER PACK', price: 14000, n: 3, w: {bronze: 38, silver: 50, gold: 12}, min: 'silver', info: '3 players · 1 silver or better'},
  {id: 'mid', name: 'MIDFIELD PACK', price: 40000, n: 3, w: {silver: 56, gold: 41, icon: 3}, min: 'silver', pos: 'MID', info: '3 midfielders · silver or better'},
  {id: 'def', name: 'DEFENDER PACK', price: 36000, n: 3, w: {silver: 56, gold: 41, icon: 3}, min: 'silver', pos: 'DEF', info: '3 defenders · silver or better'},
  {id: 'fwd', name: 'FORWARD PACK', price: 38000, n: 3, w: {silver: 56, gold: 41, icon: 3}, min: 'silver', pos: 'FWD', info: '3 forwards · silver or better'},
  {id: 'ruc', name: 'RUCK PACK', price: 28000, n: 2, w: {silver: 56, gold: 41, icon: 3}, min: 'silver', pos: 'RUC', info: '2 rucks · silver or better'},
  {id: 'club', name: 'CLUB PACK', price: 22000, n: 3, w: {bronze: 25, silver: 50, gold: 25}, min: 'silver', club: true, info: '3 players from your club'},
  {id: 'train', name: 'TRAINING PACK', price: 4000, n: 3, train: true, info: '3 developing players gain +1 level (only if the upgrade is under 8,000)'},
  {id: 'gold', name: 'GOLD PACK', price: 120000, n: 4, w: {silver: 52, gold: 44, icon: 4}, min: 'gold', info: '4 players · 1 gold or better'},
  {id: 'elite', name: 'ELITE TRAINING', price: 15000, n: 6, train: true, info: '6 developing players gain +1 level (skips expensive cards)'},
  {id: 'icon', name: 'ICON PACK', price: 280000, n: 4, w: {gold: 90, icon: 10}, min: 'gold', legacy: true, info: '4 players · 4.5% LEGACY each card · pity at 10'},
  {id: 'fantasy', name: 'FANTASY PACK', price: 900000, n: 2, fantasy: true, info: '2 fantasy cards · special photo, +10 OVR'},
  {id: 'dynasty', name: 'DYNASTY PACK', price: 2500000, n: 1, w: {icon: 100}, min: 'icon', legacy: true, legacyChance: .08, minRating: 92, info: 'Late sink · 1 card at 92+ · 8% LEGACY'},
  {id: 'mega', name: 'MEGA PACK', price: 200000, n: 5, w: {gold: 85, icon: 15}, min: 'gold', info: '5 players · gold+ with big icon odds'}
];
let opening = null, BULK = 1;
const BULK_OPTS = [1, 5, 10, 25];
function rollTier(w0) {
  const w = Object.assign({}, w0);
  if (w.icon && settings.surface) w.icon = w.icon * ICON_SURFACE;   // computer-dependent luck: Surface gets 10x fewer icons (10% -> 1%)
  const ks = Object.keys(w); let r = Math.random() * ks.reduce((a, k) => a + w[k], 0);
  for (const k of ks) { r -= w[k]; if (r < 0) return k; } return ks[0];
}
function rollLegacy() {
  const all = POOL.filter(p => p.legacy);
  const fresh = all.filter(p => !save.owned.includes(p.id));
  const list = fresh.length ? fresh : all;
  return list[Math.floor(Math.random() * list.length)];
}
function rollPlayer(tier, pk) {
  if (pk.fantasy) {
    const all = POOL.filter(p => p.fantasy);   // truly random: duplicates are possible (they refund only a small amount)
    return all[Math.floor(Math.random() * all.length)];
  }
  const ok = p => p && !p.fantasy && !p.legacy && !p.prem && !p.bont && !p.totw && (!pk.pos || p.pos === pk.pos) && (!pk.club || p.club === save.club);
  const order = []; for (let t = TIERS.indexOf(tier); t >= 0; t--) order.push(t); for (let t = TIERS.indexOf(tier) + 1; t < 4; t++) order.push(t);
  for (const t of order) {
    const all = POOL.filter(p => p.tier === TIERS[t] && ok(p)); if (!all.length) continue;
    const fresh = all.filter(p => !save.owned.includes(p.id)), list = fresh.length && Math.random() < .85 ? fresh : all;
    return list[Math.floor(Math.random() * list.length)];
  }
  { const any = POOL.filter(p => p && !p.legacy && !p.prem && !p.bont && !p.totw); return any[Math.floor(Math.random() * any.length)]; }
}
function rollPackCards(pk) {
  let cards;
  if (pk.train) {
    const el = save.owned.map(id => POOL[id]).filter(p => p.lvl < MAXLVL && upCost(p) > 0 && upCost(p) <= 8000).sort(() => Math.random() - .5).slice(0, pk.n);
    cards = el.map(p => { save.up[p.id] = p.lvl + 1; applyUp(p); return {p, up: true, rev: false}; });
    syncSquad();
  } else if (pk.fantasy) {
    cards = Array.from({length: pk.n}, () => rollPlayer('icon', pk)).map(p => {
      const dup = save.owned.includes(p.id);
      if (dup) save.coins += dupPay(p); else save.owned.push(p.id);
      return {p, dup, rev: false};
    });
  } else {
    const tiers = Array.from({length: pk.n}, () => rollTier(pk.w));
    if (Math.max(...tiers.map(t => TIERS.indexOf(t))) < TIERS.indexOf(pk.min)) tiers[tiers.length - 1] = pk.min;
    const dry = save.legDry || 0;
    const pity = pk.id === 'icon' && dry >= LEGACY_PITY;
    let hit = false;
    cards = tiers.map((t, i) => {
      const leg = (pity && i === tiers.length - 1) || (pk.legacy && Math.random() < (pk.legacyChance || LEGACY_CHANCE));
      if (leg) { hit = true; return rollLegacy(); }
      if (pk.minRating) {
        const pool = POOL.filter(p => p && !p.fantasy && !p.legacy && !p.prem && !p.bont && !p.totw && p.rating >= pk.minRating);
        const fresh = pool.filter(p => !save.owned.includes(p.id));
        const list = fresh.length && Math.random() < .7 ? fresh : pool;
        return list[Math.floor(Math.random() * list.length)] || rollPlayer(t, pk);
      }
      return rollPlayer(t, pk);
    }).sort((a, b) => a.rating - b.rating).map(p => {
      const dup = save.owned.includes(p.id);
      if (!dup) save.owned.push(p.id);
      else if (p.legacy) {
        save.shards = (save.shards || 0) + 1;
        const full = !POOL.some(q => q && q.legacy && !save.owned.includes(q.id));
        const pay = full ? 120000 : 0;
        if (pay) save.coins += pay;
        return {p, dup: true, shards: 1, pay, rev: false};
      } else save.coins += dupPay(p);
      return {p, dup, rev: false};
    });
    if (hit) save.legDry = 0;
    else if (pk.id === 'icon') save.legDry = dry + 1;
  }
  return cards;
}
function openPack(pk, free) {
  if (pk.train) {
    const el = save.owned.map(id => POOL[id]).filter(p => p.lvl < MAXLVL && upCost(p) > 0 && upCost(p) <= 8000);
    if (!el.length) return toast('Training packs only lift cheap upgrades (under 8,000). Pay the card itself.', true);
  }
  if (free) { if (!save.free[pk.id]) return; save.free[pk.id]--; }
  else { if (save.coins < pk.price) return toast('Not enough coins', true); save.coins -= pk.price; }
  const cards = rollPackCards(pk);
  persist(); opening = {pk, cards}; renderShell(); renderPackOv();
  { const lg = cards.find(c => c.p && c.p.legacy); if (lg) toast('★ LEGACY PULL! ' + lg.p.full.toUpperCase() + ' · 105 OVR ★'); }
}
function openPackBulk(pk, qty) {
  qty = Math.max(1, qty | 0);
  if (qty === 1) return openPack(pk);
  if (pk.train) {
    const el = save.owned.map(id => POOL[id]).filter(p => p.lvl < MAXLVL && upCost(p) > 0 && upCost(p) <= 8000);
    if (!el.length) return toast('Training packs only lift cheap upgrades (under 8,000). Pay the card itself.', true);
  }
  const cost = pk.price * qty;
  if (save.coins < cost) return toast('Not enough coins for ' + qty + ' packs', true);
  save.coins -= cost;
  let all = [];
  for (let i = 0; i < qty; i++) {
    if (pk.train) { const el = save.owned.map(id => POOL[id]).filter(p => p.lvl < MAXLVL && upCost(p) > 0 && upCost(p) <= 8000); if (!el.length) break; }
    all = all.concat(rollPackCards(pk));
  }
  all.forEach(c => c.rev = true);
  persist(); opening = {pk, cards: all, bulk: qty}; renderShell(); renderPackOv();
  const lgN = all.filter(c => c.p && c.p.legacy).length;
  if (lgN) toast('★ ' + lgN + ' LEGACY PULL' + (lgN > 1 ? 'S' : '') + '! ★');
  else toast('Opened ' + qty + ' ' + pk.name + 's');
}
function renderPackOv() {
  let o = $('packov'); if (!opening) { if (o) o.remove(); return; }
  if (!o) { o = document.createElement('div'); o.id = 'packov'; $('stage').appendChild(o); }
  const all = opening.cards.every(c => c.rev), back = c => c.rev ? '' : ' back';
  o.innerHTML = `<h2 class="it">${opening.pk.name}</h2><div class="pcs">${opening.cards.map((c, i) =>
    `<div class="pcw"><div class="pc${back(c)}${c.rev ? ' rev' : ''}" data-i="${i}">${c.rev ? card(c.p, 150) : (opening.pk.train ? '⬆' : '?')}</div>${c.rev && c.up ? `<div class="dup" style="color:#22e37b">LEVEL UP → ★${c.p.lvl}</div>` : ''}${c.rev && c.dup ? `<div class="dup">${c.shards ? 'DUPLICATE · +1 SHARD' + (c.pay ? ' · +' + fmt(c.pay) : '') : 'DUPLICATE · +' + fmt(dupPay(c.p))}</div>` : ''}</div>`).join('')}</div>
    <div>${all ? '<button class="go2 it" id="packDone">DONE</button>' : '<button class="kbtn" id="revAll">REVEAL ALL</button>'}</div>`;
  o.querySelectorAll('.pc.back').forEach(el => el.onclick = () => { opening.cards[+el.dataset.i].rev = true; renderPackOv(); });
  if ($('revAll')) $('revAll').onclick = () => { opening.cards.forEach(c => c.rev = true); renderPackOv(); };
  if ($('packDone')) $('packDone').onclick = () => { opening = null; renderPackOv(); renderShell(); };
}

/* ---- events (FC Mobile style): Finals Series, Premiership Cup, Squad Battles, Division Rivals, Objectives, Campaign ---- */
const EVENT = {name: 'FINALS SERIES', rounds: [
  {n: 'Qualifying Final', extra: 4, coins: 1000}, {n: 'Semi Final', extra: 9, coins: 2000}, {n: 'Grand Final', extra: 14, coins: 3500}]};
function eventRewardText() { return save.ev.done ? 'Replay rewards: coins only' : 'Win all 3 to earn a free GOLD PACK'; }
const CUPR = [{n: 'Round of 16', extra: 3, coins: 800}, {n: 'Quarter Final', extra: 7, coins: 1500}, {n: 'Semi Final', extra: 11, coins: 2500}, {n: 'Grand Final', extra: 16, coins: 4000}];
const SBL = [{n: 'AMATEUR', extra: 0, coins: 700, pts: 10}, {n: 'PROFESSIONAL', extra: 5, coins: 1100, pts: 20}, {n: 'WORLD CLASS', extra: 10, coins: 1700, pts: 35},
  {n: 'LEGENDARY', extra: 15, coins: 2500, pts: 55}, {n: 'ULTIMATE', extra: 20, coins: 3800, pts: 80}];
const SBM = [{pts: 50, coins: 1000}, {pts: 150, pack: 'bronze'}, {pts: 300, coins: 3000}, {pts: 500, pack: 'silver'}, {pts: 800, pack: 'gold'}, {pts: 1500, pack: 'icon'}];
const DIV_GAMES = 10, DIV_UP = 20, DIV_DOWN = 8;
const DAILY_POOL = [
  {id: 'win1', t: 'Win a match', stat: 'won', n: 1, coins: 600}, {id: 'play3', t: 'Play 3 matches', stat: 'played', n: 3, coins: 500},
  {id: 'goals6', t: 'Kick 6 goals', stat: 'goals', n: 6, coins: 700}, {id: 'marks8', t: 'Take 8 marks', stat: 'marks', n: 8, coins: 600},
  {id: 'tack6', t: 'Lay 6 tackles', stat: 'tackles', n: 6, coins: 600}, {id: 'hand15', t: 'Complete 15 handpasses', stat: 'hand', n: 15, coins: 500},
  {id: 'kick10', t: 'Kick the ball 10 times', stat: 'kicks', n: 10, coins: 500}, {id: 'sb1', t: 'Win a Squad Battle', stat: 'sbwin', n: 1, coins: 800},
  {id: 'div1', t: 'Win a Division Rivals match', stat: 'divwin', n: 1, coins: 800}];
const WEEKLY_POOL = [
  {id: 'win5', t: 'Win 5 matches', stat: 'won', n: 5, coins: 2500}, {id: 'play12', t: 'Play 12 matches', stat: 'played', n: 12, coins: 2000, pack: 'bronze'},
  {id: 'goals30', t: 'Kick 30 goals', stat: 'goals', n: 30, coins: 2500}, {id: 'marks40', t: 'Take 40 marks', stat: 'marks', n: 40, coins: 2000, pack: 'bronze'},
  {id: 'tack30', t: 'Lay 30 tackles', stat: 'tackles', n: 30, coins: 2000, pack: 'bronze'}, {id: 'sb3', t: 'Win 3 Squad Battles', stat: 'sbwin', n: 3, coins: 3000},
  {id: 'div3', t: 'Win 3 Division Rivals matches', stat: 'divwin', n: 3, coins: 3000}, {id: 'cup2', t: 'Win 2 Premiership Cup matches', stat: 'cupwin', n: 2, coins: 3000, pack: 'silver'}];
const DAILY_BONUS = {coins: 1000, pack: 'bronze'}, WEEKLY_BONUS = {coins: 3000, pack: 'gold'};
const CAMPAIGN = [
  {t: 'Play 10 matches', stat: 'played', n: 10, coins: 1000}, {t: 'Win 5 matches', stat: 'won', n: 5, pack: 'bronze'},
  {t: 'Kick 25 goals', stat: 'goals', n: 25, coins: 1500}, {t: 'Take 50 marks', stat: 'marks', n: 50, pack: 'silver'},
  {t: 'Lay 40 tackles', stat: 'tackles', n: 40, coins: 1500}, {t: 'Win 15 matches', stat: 'won', n: 15, pack: 'silver'},
  {t: 'Kick 100 goals', stat: 'goals', n: 100, pack: 'gold'}, {t: 'Complete 150 handpasses', stat: 'hand', n: 150, coins: 2000},
  {t: 'Play 50 matches', stat: 'played', n: 50, coins: 3000}, {t: 'Take 250 marks', stat: 'marks', n: 250, pack: 'gold'},
  {t: 'Win 40 matches', stat: 'won', n: 40, pack: 'elite'}, {t: 'Win 100 matches', stat: 'won', n: 100, pack: 'icon'}];
const EVX = {sec: 'finals'};
const EV_SECS = [['bont', 'THE BONT'], ['finals', 'FINALS'], ['cup', 'CUP'], ['sb', 'BATTLES'], ['div', 'RIVALS'], ['riv', 'RIVALRY'], ['road', 'ROAD TRIP'], ['night', 'LIGHTS'], ['obj', 'OBJECTIVES'], ['camp', 'CAMPAIGN']];
const GROUNDS = [
  {id: 'mcg', name: 'MCG', city: 'Melbourne', seats: 0x1d3f86, night: false, roof: 0, stand: 1.2, grass: '#3d8748', alt: '#459451'},
  {id: 'marvel', name: 'Marvel Stadium', city: 'Docklands', seats: 0x242424, night: true, roof: 1, stand: 1.05, grass: '#2f7a3e', alt: '#3c8c4c'},
  {id: 'adelaide', name: 'Adelaide Oval', city: 'Adelaide', seats: 0x8d1d32, night: false, roof: 0, stand: 1, grass: '#4a9a48', alt: '#58a856'},
  {id: 'optus', name: 'Optus Stadium', city: 'Perth', seats: 0x0d4a34, night: true, roof: 0, stand: 1.1, grass: '#348a42', alt: '#449e52'},
  {id: 'gabba', name: 'The Gabba', city: 'Brisbane', seats: 0x7a1830, night: true, roof: 0, stand: .9, grass: '#2e6e38', alt: '#3d8448'},
  {id: 'scg', name: 'S.C.G.', city: 'Sydney', seats: 0xe7e2d4, night: false, roof: 0, stand: .85, grass: '#459451', alt: '#53a45f'},
  {id: 'kardinia', name: 'GMHBA Stadium', city: 'Geelong', seats: 0x16386e, night: false, roof: 0, stand: .78, grass: '#3f8c46', alt: '#4d9c54'},
  {id: 'metricon', name: 'People First Stadium', city: 'Gold Coast', seats: 0xc49212, night: true, roof: .35, stand: .95, grass: '#3a8f44', alt: '#48a352'}
];
const groundById = id => GROUNDS.find(g => g.id === id) || GROUNDS[0];
const RIVAL = {ADE: 'PTA', PTA: 'ADE', CAR: 'COL', COL: 'CAR', ESS: 'RIC', RIC: 'ESS', FRE: 'WCE', WCE: 'FRE', GEE: 'HAW', HAW: 'GEE', BRL: 'GCS', GCS: 'BRL', GWS: 'SYD', SYD: 'GWS', MEL: 'STK', STK: 'MEL', NTH: 'WBD', WBD: 'NTH'};
const rivalClub = i => { const s = RIVAL[CLUBS[i].short]; return Math.max(0, CLUBS.findIndex(c => c.short === s)); };
const ROAD = [
  {n: 'Country Oval', extra: 1, coins: 900}, {n: 'Windy Coast', extra: 5, coins: 1400}, {n: 'Night in the West', extra: 9, coins: 1900},
  {n: 'Hostile Crowd', extra: 13, coins: 2600}, {n: 'The Last Stop', extra: 17, coins: 3600}
];

const dateKey = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const dayKey = () => dateKey(new Date());
const weekKey = () => { const d = new Date(); d.setDate(d.getDate() - (d.getDay() + 6) % 7); return dateKey(d); };   // Monday of this week
function seededPick(pool, seed, n) {      // same objectives all day / all week
  let h = 7; for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const a = pool.slice(), out = [];
  while (out.length < n) { h = (h * 1664525 + 1013904223) >>> 0; out.push(a.splice(Math.floor(h / 65536) % a.length, 1)[0].id); }
  return out;
}
function drawCup() { const l = CLUBS.map((c, i) => i).filter(i => i !== save.club); for (let i = l.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [l[i], l[j]] = [l[j], l[i]]; } return l.slice(0, CUPR.length); }
function initX() {                         // create / roll over every event's save data
  const x = save.x = save.x || {}, dk = dayKey(), wk = weekKey();
  x.stats = x.stats || {played: save.played || 0, won: save.won || 0};
  x.camp = x.camp || {};
  if (!x.daily || x.daily.day !== dk) x.daily = {day: dk, ids: seededPick(DAILY_POOL, dk, 3), prog: {}, claimed: {}};
  if (!x.weekly || x.weekly.wk !== wk) x.weekly = {wk, ids: seededPick(WEEKLY_POOL, wk, 3), prog: {}, claimed: {}};
  if (!x.cup) x.cup = {opps: drawCup(), round: 0, runs: 0};
  if (!x.sb || x.sb.wk !== wk) x.sb = {wk, pts: 0, streak: 0, claimed: {}};
  if (!x.div) x.div = {d: 10, g: 0, w: 0, dr: 0, l: 0, pts: 0, res: [], last: ''};
  if (!x.riv || x.riv.day !== dk) x.riv = {day: dk, done: 0};
  if (!x.road) x.road = {round: 0};
  if (!x.night || x.night.wk !== wk) x.night = {wk, done: 0};
  if (!x.bont) x.bont = {step: 0, ribbons: 0, ovr: 79, title: 'Prospect', chapters: 0, started: 0};
  if (x.bont.started) bontSyncCard();
}
if (save) initX();

const packName = id => PACKS.find(p => p.id === id).name;
const rewardText = r => [r.coins ? fmt(money(r.coins)) + ' coins' : '', r.pack ? packName(r.pack) : ''].filter(Boolean).join(' + ');
function giveReward(r) { if (r.coins) save.coins += money(r.coins); if (r.pack) save.free[r.pack] = (save.free[r.pack] || 0) + 1; return rewardText(r); }
function recordMatch(d) {                  // lifetime + daily + weekly progress
  const x = save.x;
  for (const k in d) { if (!d[k]) continue; x.stats[k] = (x.stats[k] || 0) + d[k]; x.daily.prog[k] = (x.daily.prog[k] || 0) + d[k]; x.weekly.prog[k] = (x.weekly.prog[k] || 0) + d[k]; }
}
function claimItems() {                    // every reward that is ready to claim
  const x = save.x, out = [];
  for (const k of ['daily', 'weekly']) {
    const o = x[k], pool = k === 'daily' ? DAILY_POOL : WEEKLY_POOL;
    o.ids.forEach(id => { const d = pool.find(q => q.id === id); if ((o.prog[d.stat] || 0) >= d.n && !o.claimed[id]) out.push({key: k + ':' + id, sec: 'obj'}); });
    if (o.ids.every(id => o.claimed[id]) && !o.claimed.bonus) out.push({key: k + ':bonus', sec: 'obj'});
  }
  CAMPAIGN.forEach((c, i) => { if ((x.stats[c.stat] || 0) >= c.n && !x.camp[i]) out.push({key: 'c:' + i, sec: 'camp'}); });
  SBM.forEach((m, i) => { if (x.sb.pts >= m.pts && !x.sb.claimed[i]) out.push({key: 's:' + i, sec: 'sb'}); });
  return out;
}
const claimCount = sec => claimItems().filter(i => !sec || i.sec === sec).length;
function claim(key) {
  const x = save.x, [k, id] = key.split(':'); let r = null;
  if (k === 'daily' || k === 'weekly') {
    const o = x[k], pool = k === 'daily' ? DAILY_POOL : WEEKLY_POOL;
    if (id === 'bonus') { if (o.claimed.bonus || !o.ids.every(i => o.claimed[i])) return; o.claimed.bonus = 1; r = k === 'daily' ? DAILY_BONUS : WEEKLY_BONUS; }
    else { const d = pool.find(q => q.id === id); if (!d || o.claimed[id] || (o.prog[d.stat] || 0) < d.n) return; o.claimed[id] = 1; r = d; }
  } else if (k === 'c') { const c = CAMPAIGN[+id]; if (!c || x.camp[id] || (x.stats[c.stat] || 0) < c.n) return; x.camp[id] = 1; r = c; }
  else if (k === 's') { const m = SBM[+id]; if (!m || x.sb.claimed[id] || x.sb.pts < m.pts) return; x.sb.claimed[id] = 1; r = m; }
  if (!r) return;
  const t = giveReward(r); persist(); renderShell('Claimed: ' + t);
}
function evSetup(ev) {                     // opponent strength (and fixed club) for each event match
  if (!ev) return {extra: 0};
  if (ev.t === 'finals') return {extra: EVENT.rounds[ev.i].extra};
  if (ev.t === 'cup') return {extra: CUPR[ev.i].extra, club: save.x.cup.opps[ev.i]};
  if (ev.t === 'sb') return {extra: SBL[ev.i].extra};
  if (ev.t === 'riv') return {extra: 6, club: rivalClub(save.club)};
  if (ev.t === 'road') return {extra: ROAD[ev.i].extra};
  if (ev.t === 'night') return {extra: 8, ground: 'marvel'};
  if (ev.t === 'bont') { const n = BONT_FLAT[ev.i]; return {extra: n.extra || 0, club: Math.max(0, CLUBS.findIndex(c => c.short === n.opp)), ground: n.ground || 'mcg'}; }
  return {extra: (10 - save.x.div.d) * 2};
}

/* ---- events UI ---- */
const pct = (v, n) => Math.min(100, Math.round(100 * v / n));
function claimBtn(key, label) { return `<button class="kbtn upg" data-claim="${key}">${label || 'CLAIM'}</button>`; }
function objRow(o, d, kind) {
  const v = Math.min(o.prog[d.stat] || 0, d.n), done = v >= d.n, cl = o.claimed[d.id];
  return `<div class="orow${cl ? ' cl' : ''}"><div class="ot"><b>${d.t}</b><span class="gold">${rewardText(d)}</span></div><div class="ebar"><i style="width:${pct(v, d.n)}%"></i></div>
    <div class="op"><span>${v} / ${d.n}</span>${cl ? '<em>CLAIMED</em>' : done ? claimBtn(kind + ':' + d.id) : '<span class="dim">IN PROGRESS</span>'}</div></div>`;
}
function objPanel(kind, title, note) {
  const o = save.x[kind], pool = kind === 'daily' ? DAILY_POOL : WEEKLY_POOL, bonus = kind === 'daily' ? DAILY_BONUS : WEEKLY_BONUS, all = o.ids.every(i => o.claimed[i]);
  return `<div class="opanel"><h3 class="it">${title}</h3><small>${note}</small>${o.ids.map(id => objRow(o, pool.find(q => q.id === id), kind)).join('')}
    <div class="orow bonus${o.claimed.bonus ? ' cl' : ''}"><div class="ot"><b>Complete all three</b><span class="gold">${rewardText(bonus)}</span></div>
    <div class="op">${o.claimed.bonus ? '<em>CLAIMED</em>' : all ? claimBtn(kind + ':bonus', 'CLAIM BONUS') : `<span class="dim">${o.ids.filter(i => o.claimed[i]).length} / 3 claimed</span>`}</div></div></div>`;
}
function msCard(t, v, n, r, claimed, key) {
  v = Math.min(v, n); const done = v >= n;
  return `<div class="ms${claimed ? ' cl' : done ? ' rdy' : ''}"><b>${t}</b><div class="ebar"><i style="width:${pct(v, n)}%"></i></div>
    <div class="op"><span>${v} / ${n}</span><span class="gold">${rewardText(r)}</span></div>${claimed ? '<em>CLAIMED</em>' : done ? claimBtn(key) : '<span class="dim">IN PROGRESS</span>'}</div>`;
}
/* =================== THE BONT — FC-style icon journey =================== */
const BONT_CHAPTERS = [
  {n: 1, name: 'The Northern Knights', year: '2014 Debut', theme: 'Pick 4 in the 2013 draft. A teenager who already wants the ball when it matters.',
    nodes: [
      {kind: 'skill', drill: 'agility', name: 'Draft Combine Agility', blurb: 'Weave the cones. Hit every gate on the run.', ribbons: 40, limit: 40},
      {kind: 'skill', drill: 'slalom', name: 'Boundary Line Slalom', blurb: 'Stay on the boundary and thread the gates inside 45 seconds.', ribbons: 40, limit: 45},
      {kind: 'match', name: 'Round 13, 2014 vs Collingwood', opp: 'COL', extra: 0, ground: 'mcg', coins: 900, ribbons: 90,
        context: 'A young Bontempelli against the Magpies. The first glimpse of the clutch gene.',
        objs: [{k: 'disp', n: 20, t: '20+ disposals'}, {k: 'marks', n: 5, t: '5 marks'}, {k: 'clutch', n: 1, t: 'Go-ahead goal in the last quarter'}]},
      {kind: 'reward', ovr: 82, title: 'Rising Star'}
    ]},
  {n: 2, name: 'The 2016 Fairy Tale', year: 'Finals Heroics', theme: 'From 7th to the flag. Sixty-two years of waiting ends in September.',
    nodes: [
      {kind: 'skill', drill: 'extract', name: 'Contested Extraction', blurb: 'Win the hard ball at the stoppage. 4 of 5.', ribbons: 45},
      {kind: 'skill', drill: 'shots', name: 'Clutch Set Shots', blurb: '45 metres, on the boundary. Slot 3 of 5.', ribbons: 45},
      {kind: 'match', name: 'Semi-Final 2016 vs Hawthorn', opp: 'HAW', extra: 6, ground: 'mcg', coins: 1200, ribbons: 100,
        context: 'The reigning premiers. A fierce final, and the season stays alive.',
        objs: [{k: 'disp', n: 27, t: '27 disposals'}, {k: 'clear', n: 8, t: '8 clearances'}, {k: 'goals', n: 2, t: '2 goals'}]},
      {kind: 'match', name: '2016 Grand Final vs Sydney', opp: 'SYD', extra: 8, ground: 'mcg', coins: 1600, ribbons: 120,
        context: 'Four quarters for the premiership cup.',
        objs: [{k: 'i50', n: 10, t: '10 inside-50 clearances'}, {k: 'win', n: 1, t: 'Win the Grand Final'}]},
      {kind: 'reward', ovr: 89, title: 'Premiership Hero'}
    ]},
  {n: 3, name: 'Entering the Elite', year: 'The GWS Masterclass', theme: 'The hardest midfielder on the park. Historic contested-ball numbers, on the road.',
    nodes: [
      {kind: 'skill', drill: 'clear', name: 'Inside Midfield Clearance', blurb: 'Handball chains out of the stoppage. 3 clean chains.', ribbons: 50},
      {kind: 'skill', drill: 'spoil', name: 'Two-Way Running', blurb: 'Track back and spoil in the defensive arc. 3 of 4.', ribbons: 50},
      {kind: 'match', name: 'Round 8, 2023 vs GWS', opp: 'GWS', extra: 8, ground: 'scg', coins: 1400, ribbons: 110,
        context: 'On the road. He puts the team on his back.',
        objs: [{k: 'disp', n: 32, t: '32 disposals'}, {k: 'contested', n: 26, t: '26 contested possessions'}, {k: 'clear', n: 14, t: '14 clearances'}, {k: 'goals', n: 1, t: 'Kick a goal'}]},
      {kind: 'reward', ovr: 93, title: 'All-Australian Vice-Captain'}
    ]},
  {n: 4, name: 'The Captaincy', year: 'Collingwood Blockbusters', theme: 'Captain. Friday night. The dummy, the lace-out, the last-quarter goal.',
    nodes: [
      {kind: 'skill', drill: 'dummy', name: 'The Signature Bont Dummy', blurb: 'Side-step when the lane opens. 5 of 6.', ribbons: 55},
      {kind: 'skill', drill: 'lace', name: 'Efficiency Kicking', blurb: 'Five lace-out passes over 40 metres. Hit 4.', ribbons: 55},
      {kind: 'match', name: 'Round 12, 2024 vs Collingwood', opp: 'COL', extra: 8, ground: 'marvel', coins: 1500, ribbons: 120,
        context: 'Friday night lights. A captain’s game.',
        objs: [{k: 'disp', n: 38, t: '38 disposals'}, {k: 'clear', n: 10, t: '10 clearances'}, {k: 'tackles', n: 9, t: '9 tackles'}, {k: 'clutch', n: 1, t: 'Fourth-quarter goal to seal it'}]},
      {kind: 'reward', ovr: 96, title: 'Club Captain'}
    ]},
  {n: 5, name: 'The Ultimate Legend', year: '99 OVR Finale', theme: 'Leigh Matthews Trophies. Charles Sutton Medals. The last card in the game.',
    nodes: [
      {kind: 'match', name: 'The Ultimate Milestone', opp: 'COL', extra: 14, ground: 'mcg', coins: 2500, ribbons: 160, allstar: 1, deficit: 1,
        context: 'A four-quarter gauntlet against an All-Australian side. You will be 15 points down at three-quarter time.',
        objs: [{k: 'deficit', n: 1, t: 'Come back from 15 points down at 3QT'}, {k: 'disp', n: 35, t: '35+ disposals'}, {k: 'goals', n: 3, t: '3 goals'}, {k: 'last', n: 1, t: 'Match-winning clearance in the last minute'}]},
      {kind: 'reward', ovr: 99, title: 'Ultimate Legend'}
    ]}
];
BONT_CHAPTERS.forEach((c, ci) => c.nodes.forEach(nd => { nd.ch = ci; }));
const BONT_FLAT = BONT_CHAPTERS.reduce((a, c) => a.concat(c.nodes), []);
const bontLabel = () => { const b = save.x.bont; return b.ovr + ' OVR ' + (b.title || 'Prospect'); };
const bontCap = () => [81, 88, 92, 95, 98, 99][Math.min(5, save.x.bont.chapters || 0)];
const bontCost = () => 40 + Math.max(0, save.x.bont.ovr - 79) * 8;
function bontEnsure() {
  const b = save.x.bont;
  if (!b.started) { b.started = 1; bontSyncCard(); persist(); }
  else bontSyncCard();
  let moved = false;
  while (BONT_FLAT[b.step] && BONT_FLAT[b.step].kind === 'reward') {
    const r = BONT_FLAT[b.step];
    b.ovr = Math.max(b.ovr, r.ovr); b.title = r.title; b.chapters = (b.chapters || 0) + 1; b.step++;
    moved = true;
  }
  if (moved) { bontSyncCard(); persist(); }
}
function bontSyncCard() {
  if (!save || !save.x || !save.x.bont) return null;
  const b = save.x.bont;
  let src = null;
  for (let i = 0; i < POOL.length && i < 8000; i++) { const q = POOL[i]; if (q && q.full === 'Marcus Bontempelli' && !q.bont && !q.fantasy) { src = q; break; } }
  src = src || POOL[0];
  const p = stubBont(b.ovr);
  const lift = (v, floor) => Math.max(floor, Math.min(99, Math.round(floor + (v - floor) * (0.55 + (b.ovr - 79) * 0.0225))));
  p.rating = Math.min(99, b.ovr);
  p.kic = lift(src.kic || 90, 70); p.mar = lift(src.mar || 86, 68); p.spd = lift(src.spd || 90, 72); p.end = lift(src.end || 90, 74);
  p.tier = tierOf(p.rating);
  p.b = {rating: p.rating, kic: p.kic, mar: p.mar, spd: p.spd, end: p.end};
  if (b.started && !save.owned.includes(p.id)) save.owned.push(p.id);
  return p;
}
function bontAdvance() {
  const b = save.x.bont;
  b.step++;
  while (BONT_FLAT[b.step] && BONT_FLAT[b.step].kind === 'reward') {
    const r = BONT_FLAT[b.step];
    b.ovr = Math.max(b.ovr, r.ovr); b.title = r.title; b.chapters = (b.chapters || 0) + 1; b.step++;
  }
}
function bontUpgrade() {
  const b = save.x.bont, cap = bontCap(), cost = bontCost();
  if (b.ovr >= 99) return toast('He is already the 99');
  if (b.ovr >= cap) return toast('Finish the chapter to raise the cap', true);
  if (b.ribbons < cost) return toast('Need ' + cost + ' Bulldog Ribbons', true);
  b.ribbons -= cost; b.ovr++; if (b.ovr >= 99) b.title = 'Ultimate Legend';
  bontSyncCard(); persist(); renderShell(b.ovr + ' OVR  ·  ' + b.title);
}
function bontObjs(node) {
  const list = (node.objs || []).slice();
  if (node.kind === 'match' && !list.some(o => o.k === 'win')) list.push({k: 'win', n: 1, t: 'Win the match'});
  return list;
}
function bontMet(o, won) {
  const ch = (ms && ms.ch) || {}, s = ms.score;
  if (o.k === 'disp') return (ch.disp || 0) >= o.n;
  if (o.k === 'marks') return (ch.marks || 0) >= o.n;
  if (o.k === 'contested') return (ch.contested || 0) >= o.n;
  if (o.k === 'clear') return (ch.clear || 0) >= o.n;
  if (o.k === 'tackles') return (ch.tackles || 0) >= o.n;
  if (o.k === 'goals') return s.home.g >= o.n;
  if (o.k === 'i50') return (ch.i50 || 0) >= o.n;
  if (o.k === 'clutch') return !!ch.clutch;
  if (o.k === 'last') return !!ch.lastClear && won;
  if (o.k === 'deficit') return !!ch.defApplied && won;
  if (o.k === 'win') return !!won;
  return false;
}
function bontProg(o) {
  const ch = (ms && ms.ch) || {}, s = ms.score, hp = s.home.g * 6 + s.home.b, ap = s.away.g * 6 + s.away.b;
  const pair = (v, n) => ({txt: Math.min(v, n) + '/' + n, ok: v >= n});
  if (o.k === 'disp') return pair(ch.disp || 0, o.n);
  if (o.k === 'marks') return pair(ch.marks || 0, o.n);
  if (o.k === 'contested') return pair(ch.contested || 0, o.n);
  if (o.k === 'clear') return pair(ch.clear || 0, o.n);
  if (o.k === 'tackles') return pair(ch.tackles || 0, o.n);
  if (o.k === 'goals') return pair(s.home.g, o.n);
  if (o.k === 'i50') return pair(ch.i50 || 0, o.n);
  if (o.k === 'clutch') return {txt: ch.clutch ? '1/1' : '0/1', ok: !!ch.clutch};
  if (o.k === 'last') return {txt: ch.lastClear ? '1/1' : '0/1', ok: !!ch.lastClear};
  if (o.k === 'deficit') return {txt: ch.defApplied ? 'DOWN 15' : 'Q3', ok: !!ch.defApplied};
  if (o.k === 'win') return {txt: (hp - ap > 0 ? '+' : '') + (hp - ap), ok: false};
  return {txt: '', ok: false};
}
function bontTouch(kind, p) {
  const ch = ms && ms.ch; if (!ch || !p || p.team !== 'home') return;
  if (kind === 'kick' || kind === 'hand') {
    ch.disp = (ch.disp || 0) + 1;
    let near = 0;
    for (const o of ms.away) if (Math.hypot(o.x - p.x, o.z - p.z) < 12) near++;
    if (near) ch.contested = (ch.contested || 0) + (near > 1 ? 2 : 1);
    if (near && (ch.contested % 2) === 0) ch.clear = (ch.clear || 0) + 1;
    if (kind === 'kick' && p.x > 12) ch.i50 = (ch.i50 || 0) + 1;
  }
  if (kind === 'mark') ch.marks = (ch.marks || 0) + 1;
  if (kind === 'tackle') { ch.tackles = (ch.tackles || 0) + 1; ch.clear = (ch.clear || 0) + 1; }
  if (kind === 'tap' || kind === 'free') ch.clear = (ch.clear || 0) + 1;
  if ((kind === 'tackle' || kind === 'tap' || kind === 'free') && p.x > GOAL_X - 50) ch.i50 = (ch.i50 || 0) + 1;
  if (ms.qtr === 4 && ms.time <= 60 && (kind === 'tackle' || kind === 'tap' || kind === 'free' || (kind === 'hand' && (ch.contested || 0) > 0))) ch.lastClear = 1;
}
function bontHTML() {
  bontEnsure();
  const b = save.x.bont, step = b.step, doneAll = step >= BONT_FLAT.length;
  if (EVX.bchap == null) EVX.bchap = doneAll ? 4 : (BONT_FLAT[Math.min(step, BONT_FLAT.length - 1)].ch);
  const ci = EVX.bchap, ch = BONT_CHAPTERS[ci], cap = bontCap(), cost = bontCost(), cardP = (POOL[BONT_ID] && POOL[BONT_ID].bont) ? POOL[BONT_ID] : null;
  const start = BONT_FLAT.findIndex(n => n.ch === ci);
  const locked = start > step;
  const nodes = ch.nodes.map(n => {
    const i = BONT_FLAT.indexOf(n);
    const state = i < step ? 'done' : i === step ? 'now' : 'lock';
    const ico = n.kind === 'reward' ? '★' : n.kind === 'skill' ? '◆' : '🏉';
    const sub = n.kind === 'reward' ? (n.ovr + ' OVR ' + n.title) : n.kind === 'skill' ? n.blurb : (n.context || '');
    const objs = n.kind === 'match' ? `<div class="jobjs">${bontObjs(n).map(o => `<span>${o.t}</span>`).join('')}</div>` : '';
    const btn = state === 'now' && n.kind !== 'reward' ? `<button class="go2 it" data-bont="${i}">PLAY</button>` : state === 'done' && n.kind !== 'reward' ? `<button class="kbtn" data-bont="${i}">REPLAY</button>` : state === 'done' ? '<em>CLAIMED</em>' : '<em class="dim">LOCKED</em>';
    return `<div class="jnode ${state} ${n.kind}"><div class="jdot">${ico}</div><div class="jinfo"><b class="it">${n.name}</b><small>${sub}</small>${objs}<span class="gold">${n.ribbons ? '+' + n.ribbons + ' ribbons' : ''}</span></div><div class="jact">${btn}</div></div>`;
  }).join('');
  return `<div id="journey">
    <div class="jhero">
      <img src="photos/bont-cover.jpg" alt="">
      <div class="jhero-copy"><small>ICON JOURNEY</small><h2 class="it">MARCUS BONTEMPELLI</h2><p>Five chapters. Real matches. From a 79 OVR Prospect to the 99 OVR End-Game Icon.</p>
        <div class="jrib">Bulldog Ribbons <b>${b.ribbons}</b></div></div>
      <div class="jside">${cardP ? card(cardP, 150) : ''}<div class="jovr it">${bontLabel()}</div></div>
    </div>
    <div class="jchaps">${BONT_CHAPTERS.map((c, i) => `<button type="button" data-bchap="${i}" class="${i === ci ? 'on' : ''}${BONT_FLAT.findIndex(n => n.ch === i) > step ? ' lock' : ''}">CH ${c.n}</button>`).join('')}</div>
    <div class="jhead"><b class="it">CHAPTER ${ch.n} · ${ch.name.toUpperCase()}</b><span>${ch.year}</span><p>${locked ? 'Finish the previous chapter to open this one.' : ch.theme}</p></div>
    <div class="jpath">${locked ? '' : nodes}</div>
    <div class="jgrind"><div><b class="it">UPGRADE THE CARD</b><span>Replay any cleared node for ribbons. Each point costs more. The chapter gates how high he can go.</span></div>
      <div class="jbuy">${b.ovr >= 99 ? '<em>99 OVR ULTIMATE LEGEND</em>' : b.ovr >= cap ? '<em>CAP ' + cap + ' · finish the chapter</em>' : `<button class="go2 it" id="bontUp">+1 OVR · ${cost} RIBBONS</button>`}</div>
    </div></div>`;
}
function startBont(i) {
  const n = BONT_FLAT[i]; if (!n || i > save.x.bont.step || n.kind === 'reward') return;
  try {
    if (n.kind === 'skill') startDrill(i); else startMatch({t: 'bont', i});
  } catch (e) { toast('Could not start that node', true); console.error(e); }
}
function startDrill(i) {
  const n = BONT_FLAT[i];
  const op = makeOpponent(0); OPP = op.players; oppClub = CLUBS[op.club]; KIT_AWAY = awayKit(op.club);
  const gid = n.drill === 'dummy' || n.drill === 'lace' ? 'marvel' : 'mcg';
  ms = buildMatch(gid); ms.prematch = false; ms.ev = {t: 'bont', i}; ms.drill = makeDrill(n, i); keys.clear();
  mode = 'match'; document.body.classList.remove('onhome'); clearInterval(homeTimer);
  $('menu').classList.add('hide'); $('hud').classList.remove('hide'); $('overlay').classList.add('hide');
  R.setClearColor(ms.scene.background.getHex(), 1);
  ms.cam.aspect = innerWidth / innerHeight; ms.cam.updateProjectionMatrix();
  const p = ms.home[0];
  p.x = ms.drill.sx; p.z = ms.drill.sz; p.vx = p.vz = 0; setActive(0);
  ms.carrier = p; ms.ball.ph = 'held'; ms.ball.x = p.x; ms.ball.z = p.z;
  ms.all.forEach(pl => { if (pl !== p) pl.model.visible = false; });
  (ms.drill.cones || []).forEach(c => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(.32, .5, 1.15, 8), new THREE.MeshBasicMaterial({color: 0xf47920}));
    mesh.position.set(c.x, .55, c.z); ms.scene.add(mesh); c.mesh = mesh;
  });
  const tag = $('diffTag'); if (tag) { tag.textContent = 'DRILL'; tag.className = ''; }
  $('popups').innerHTML = ''; drillHud(true); drawDrill();
}
function makeDrill(n, i) {
  const d = {kind: n.drill, idx: i, node: n, t: 0, got: 0, miss: 0, i: 0, phase: 'play', cones: [], sx: 0, sz: 0};
  if (n.drill === 'agility') {
    d.limit = 40; d.sx = -46; d.sz = 0;
    for (let k = 0; k < 8; k++) d.cones.push({x: -32 + k * 9, z: k % 2 ? 8 : -8, r: 2.3});
  } else if (n.drill === 'slalom') {
    d.limit = 45; d.sx = 42; d.sz = -36;
    for (let k = 0; k < 8; k++) d.cones.push({x: 54, z: -30 + k * 7.2, r: 2.2});
  } else if (n.drill === 'extract') { d.need = 4; d.total = 5; d.sweep = 0; d.dir = 1; d.sx = 0; d.sz = 0; }
  else if (n.drill === 'shots') { d.need = 3; d.total = 5; d.aim = 0; d.power = 0; d.phase = 'aim'; d.sx = GOAL_X - 46; d.sz = 28; }
  else if (n.drill === 'lace') { d.need = 4; d.total = 5; d.aim = 0; d.power = 0; d.phase = 'aim'; d.sx = 10; d.sz = 0; }
  else if (n.drill === 'clear') { d.need = 3; d.chain = 0; d.left = 8; d.si = 0; d.seq = []; d.sx = 0; d.sz = 0; nextChain(d); }
  else if (n.drill === 'spoil') { d.need = 3; d.total = 4; d.sweep = 0; d.sx = -10; d.sz = 20; }
  else if (n.drill === 'dummy') { d.need = 5; d.total = 6; d.left = 0; d.dir = 0; d.gap = .4; d.sx = 30; d.sz = 6; }
  return d;
}
function nextChain(d) {
  d.seq = [0, 1, 2, 3].map(() => Math.floor(Math.random() * 4));
  d.si = 0; d.left = 8;
}
function drillHud(on) {
  const e = $('drill'); if (e) e.classList.toggle('hide', !on);
  const h = $('hint'); if (h) h.style.visibility = on ? 'hidden' : '';
}
function drawDrill() {
  const d = ms && ms.drill; if (!d || !$('drill')) return;
  const n = d.node;
  $('drTitle').textContent = n.name.toUpperCase();
  const left = d.limit ? Math.max(0, d.limit - d.t) : 0;
  if (d.kind === 'agility' || d.kind === 'slalom') {
    $('drSub').textContent = n.blurb;
    $('drCount').textContent = d.i + '/' + d.cones.length + '  ·  ' + left.toFixed(1) + 's';
    $('drBar').classList.remove('hide'); $('drBtns').innerHTML = '';
    const pct = d.cones.length ? d.i / d.cones.length : 0;
    $('drFill').style.width = (pct * 100) + '%'; $('drMark').style.display = 'none';
    $('drHint').textContent = 'WASD to run · Shift to sprint · hit the cones in order';
  } else if (d.kind === 'extract' || d.kind === 'spoil') {
    $('drSub').textContent = n.blurb;
    $('drCount').textContent = d.got + '/' + d.need + '  ·  attempt ' + Math.min(d.total, d.got + d.miss + 1) + ' of ' + d.total;
    $('drBar').classList.remove('hide'); $('drBtns').innerHTML = '';
    const zone = d.kind === 'extract' ? [42, 18] : [70, 16];
    $('drFill').style.width = (d.sweep * 100) + '%';
    $('drMark').style.display = 'block'; $('drMark').style.left = zone[0] + '%'; $('drMark').style.width = zone[1] + '%';
    $('drHint').textContent = d.kind === 'extract' ? 'Press KICK when the bar is in the gold' : 'Press TACKLE as he enters the arc';
  } else if (d.kind === 'shots' || d.kind === 'lace') {
    $('drSub').textContent = n.blurb;
    $('drCount').textContent = d.got + '/' + d.need + '  ·  shot ' + Math.min(d.total, d.got + d.miss + 1) + ' of ' + d.total;
    $('drBar').classList.remove('hide'); $('drBtns').innerHTML = '';
    $('drFill').style.width = (d.power * 100) + '%';
    $('drMark').style.display = 'block'; $('drMark').style.left = '62%'; $('drMark').style.width = '28%';
    const aim = d.aim > .25 ? 'RIGHT' : d.aim < -.25 ? 'LEFT' : 'CENTRE';
    $('drHint').textContent = 'A / D aim (' + aim + ') · hold KICK for power · release in the gold';
  } else if (d.kind === 'clear') {
    $('drSub').textContent = n.blurb;
    $('drCount').textContent = d.chain + '/' + d.need + ' chains · ' + Math.ceil(d.left) + 's';
    $('drBar').classList.add('hide');
    const names = ['WING', 'RUCK', 'FORWARD', 'POCKET'];
    if ($('drBtns').dataset.sig !== d.chain + ':' + d.si) {
      $('drBtns').dataset.sig = d.chain + ':' + d.si;
      $('drBtns').innerHTML = names.map((nm, k) => `<button type="button" data-drib="${k}" class="${d.seq[d.si] === k ? 'on' : ''}">${nm}</button>`).join('');
      $('drBtns').querySelectorAll('button').forEach(btn => btn.onclick = () => drillPick(+btn.dataset.drib));
    }
    $('drHint').textContent = 'Handball to the lit teammate, in order';
  } else if (d.kind === 'dummy') {
    $('drSub').textContent = n.blurb;
    $('drCount').textContent = d.got + '/' + d.need + '  ·  ' + (d.got + d.miss) + '/' + d.total;
    $('drBar').classList.add('hide'); $('drBtns').innerHTML = '';
    $('drHint').textContent = d.left > 0 ? (d.dir < 0 ? 'STEP LEFT' : 'STEP RIGHT') : 'Wait for the lane…';
  }
}
function drillPick(k) {
  const d = ms && ms.drill; if (!d || d.kind !== 'clear' || d.done) return;
  if (k === d.seq[d.si]) {
    d.si++;
    if (d.si >= d.seq.length) { d.chain++; d.got = d.chain; if (d.chain >= d.need) return finishDrill(true); nextChain(d); }
  } else { d.miss++; if (d.miss >= 3) return finishDrill(false); nextChain(d); }
  if ($('drBtns')) $('drBtns').dataset.sig = '';
  drawDrill();
}
function drillTry(ok) {
  const d = ms.drill;
  if (ok) d.got++; else d.miss++;
  const used = d.got + d.miss;
  if (d.got >= d.need) return finishDrill(true);
  if (d.total && used >= d.total) return finishDrill(false);
  if (d.kind === 'extract' || d.kind === 'spoil') d.sweep = 0;
  if (d.kind === 'shots' || d.kind === 'lace') { d.power = 0; d.aim = 0; d.phase = 'aim'; d.charging = false; }
  if (d.kind === 'dummy') { d.left = 0; d.gap = .35; }
}
function stepDrill(dt) {
  const d = ms.drill; if (!d || d.done) return;
  d.t += dt;
  const p = ms.home[0];
  const [ix, iz] = inputDir();
  movePlayer(p, ix, iz, keys.has(bind.sprint), 1, dt);
  ms.carrier = p; ms.ball.ph = 'held';
  if (d.kind === 'agility' || d.kind === 'slalom') {
    const c = d.cones[d.i];
    if (c && Math.hypot(p.x - c.x, p.z - c.z) < c.r) { c.mesh.material.color.setHex(0x22e37b); d.i++; if (d.i >= d.cones.length) return finishDrill(true); }
    if (d.t > d.limit) return finishDrill(false);
  } else if (d.kind === 'extract' || d.kind === 'spoil') {
    d.sweep += dt * (d.kind === 'extract' ? .55 : .28) * d.dir;
    if (d.sweep > 1) { d.sweep = 1; d.dir = -1; }
    if (d.sweep < 0) { d.sweep = 0; d.dir = 1; }
    const hit = keys.has(d.kind === 'extract' ? bind.kick : bind.tackle);
    if (hit && !d.arm) {
      d.arm = true;
      const z0 = d.kind === 'extract' ? .42 : .70, z1 = d.kind === 'extract' ? .60 : .86;
      drillTry(d.sweep >= z0 && d.sweep <= z1);
    }
    if (!hit) d.arm = false;
  } else if (d.kind === 'shots' || d.kind === 'lace') {
    let dir = 0;
    if (keys.has(bind.left) || keys.has('ArrowLeft')) dir -= 1;
    if (keys.has(bind.right) || keys.has('ArrowRight')) dir += 1;
    d.aim = clamp(d.aim + dir * dt * 1.4, -1, 1);
    const hold = keys.has(bind.kick);
    if (hold) { d.charging = true; d.power = Math.min(1, d.power + dt / .9); }
    if (!hold && d.charging) {
      d.charging = false;
      const aimOk = Math.abs(d.aim) < (d.kind === 'lace' ? .28 : .48);
      const powOk = d.power >= .62 && d.power <= .9;
      drillTry(aimOk && powOk && d.power > .15);
    }
  } else if (d.kind === 'clear') {
    d.left -= dt;
    if (d.left <= 0) { d.miss++; if (d.miss >= 3) return finishDrill(false); nextChain(d); if ($('drBtns')) $('drBtns').dataset.sig = ''; }
  } else if (d.kind === 'dummy') {
    if (d.left <= 0) {
      d.gap -= dt;
      if (d.gap <= 0) { d.dir = Math.random() < .5 ? -1 : 1; d.left = .72; d.gap = 0; }
    } else {
      d.left -= dt;
      const want = d.dir < 0 ? (keys.has(bind.left) || keys.has('ArrowLeft')) : (keys.has(bind.right) || keys.has('ArrowRight'));
      const wrong = d.dir < 0 ? (keys.has(bind.right) || keys.has('ArrowRight')) : (keys.has(bind.left) || keys.has('ArrowLeft'));
      if ((want || wrong) && !d.arm) { d.arm = true; drillTry(want && !wrong); }
      if (d.left <= 0 && !d.arm) drillTry(false);
    }
    if (!keys.has(bind.left) && !keys.has(bind.right) && !keys.has('ArrowLeft') && !keys.has('ArrowRight')) d.arm = false;
  }
  if (!d.done) drawDrill();
}
function finishDrill(ok) {
  const d = ms.drill; if (!d || d.done) return;
  d.done = true; ms.over = true; drillHud(false);
  const first = d.idx === save.x.bont.step;
  let line;
  if (ok) {
    const rib = first ? d.node.ribbons : 15;
    save.x.bont.ribbons += rib;
    if (first) bontAdvance();
    bontSyncCard();
    line = 'COMPLETE · +' + rib + ' Bulldog Ribbons';
  } else line = 'FAILED · ' + d.node.name;
  persist();
  const o = $('overlay');
  o.innerHTML = `<h2 class="it" style="color:${ok ? '#ffd23a' : '#ff5a64'}">${ok ? 'COMPLETE' : 'NOT QUITE'}</h2><p class="sub">${line}</p><p class="sub">${bontLabel()} · ${save.x.bont.ribbons} ribbons</p><button class="go2 it" id="quit">CONTINUE</button>`;
  o.classList.remove('hide');
  $('quit').onclick = quitMatch;
}
function bontChapterSlide() {
  const b = save.x.bont, left = BONT_FLAT.length - b.step;
  return {sec: 'bont', t: 'THE BONT', ico: '🐶', note: left > 0 ? bontLabel() : '99 OVR Ultimate Legend', sub: left > 0 ? 'Chapter path · ' + b.ribbons + ' ribbons' : 'Journey complete'};
}

function eventsHTML() {
  const x = save.x, ev = save.ev, sec = EVX.sec, bdg = k => { const n = claimCount(k); return n ? `<i class="bdg">${n}</i>` : ''; };
  const seg = `<div class="seg ev" id="evseg">${EV_SECS.map(([k, n]) => `<button data-esec="${k}" class="${sec === k ? 'on' : ''}">${n}${bdg(k)}</button>`).join('')}</div>`;
  let title, right, inner;
  if (sec === 'bont') {
    title = 'THE BONT'; right = bontLabel() + ' · ' + save.x.bont.ribbons + ' ribbons';
    inner = bontHTML();
  } else if (sec === 'cup') {
    const cp = x.cup; title = 'PREMIERSHIP CUP'; right = cp.runs ? `Cups won: ${cp.runs} · next win: SILVER PACK` : 'Win the cup for a free GOLD PACK';
    inner = `<p class="sub">Win four knockout matches against the drawn clubs. Lose or draw and you are knocked out, and a fresh draw is made.</p>
      <div class="evg c4">${CUPR.map((r, i) => { const c = CLUBS[cp.opps[i]]; return `<div class="evr ${cp.round > i ? 'done' : cp.round === i ? 'cur' : ''}">
        <div class="cbadge" style="background:linear-gradient(135deg,${c.a} 55%,${c.b})">${c.short}</div><small>${r.n.toUpperCase()}</small><b class="it cn">${c.name}</b>
        <span>Opponent +${r.extra} above your rating</span><span class="gold">+${fmt(winMoney(r.coins))} coins${i === CUPR.length - 1 ? ' + ' + (cp.runs ? 'SILVER' : 'GOLD') + ' PACK' : ''}</span>
        ${cp.round > i ? '<em>WON</em>' : cp.round === i ? `<button class="go2 it" data-playev="cup:${i}">PLAY</button>` : '<em class="dim">LOCKED</em>'}</div>`; }).join('')}</div>`;
  } else if (sec === 'sb') {
    const sb = x.sb; title = 'SQUAD BATTLES'; right = `Battle points ${sb.pts} · Win streak ${sb.streak}`;
    inner = `<p class="sub">Choose a difficulty and play as many battles as you like. Wins earn coins, battle points and a streak bonus. Milestones reset every Monday.</p>
      <div class="evg c5">${SBL.map((L, i) => `<div class="evr cur"><small>LEVEL ${i + 1}</small><b class="it">${L.n}</b><span>Opponent +${L.extra} above your rating</span>
        <span class="gold">Win: +${fmt(winMoney(L.coins))} coins</span><span>+${L.pts} battle points</span><button class="go2 it" data-playev="sb:${i}">PLAY</button></div>`).join('')}</div>
      <div class="benchh it">WEEKLY MILESTONES</div><div class="msg c6">${SBM.map((m, i) => msCard(m.pts + ' points', sb.pts, m.pts, m, sb.claimed[i], 's:' + i)).join('')}</div>`;
  } else if (sec === 'div') {
    const dv = x.div, left = DIV_GAMES - dv.g; title = 'DIVISION ' + dv.d; right = 'Division Rivals · ' + (dv.d === 1 ? 'top division' : 'promotion to Division ' + (dv.d - 1));
    inner = `<p class="sub">Play ${DIV_GAMES} matches each season. Win = 3 points, draw = 1. ${DIV_UP}+ points earns promotion, ${DIV_DOWN} or fewer means relegation. Each division is tougher than the last.</p>
      <div class="dvbox"><div class="dvl"><small>CURRENT DIVISION</small><b class="it dvn">DIVISION ${dv.d}</b><span>Opponents +${(10 - dv.d) * 2} above your rating</span>
        <span class="gold">Win: +${fmt(winMoney(600 + (10 - dv.d) * 150))} coins</span><span>Season end: +${fmt(money(1500 + (10 - dv.d) * 400))} coins and a pack</span></div>
        <div class="dvm"><div class="pips">${Array.from({length: DIV_GAMES}, (_, i) => `<span class="pip ${dv.res[i] || ''}">${dv.res[i] || i + 1}</span>`).join('')}</div>
          <div class="dvs"><span>POINTS <b>${dv.pts}</b></span><span>PLAYED <b>${dv.g} / ${DIV_GAMES}</b></span><span>W ${dv.w} · D ${dv.dr} · L ${dv.l}</span></div>
          <div class="dvt">${dv.pts >= DIV_UP ? 'On track for promotion' : `${Math.max(0, DIV_UP - dv.pts)} more points needed for promotion`} · ${left} match${left === 1 ? '' : 'es'} left this season</div>
          ${dv.last ? `<p class="gold">${dv.last}</p>` : ''}</div>
        <div class="dvr"><button class="go2 it" data-playev="div:0">PLAY MATCH ${dv.g + 1}</button></div></div>`;
  } else if (sec === 'obj') {
    title = 'OBJECTIVES'; right = 'Complete objectives for coins and packs';
    inner = `<div class="ogrid">${objPanel('daily', 'DAILY OBJECTIVES', 'New objectives every day')}${objPanel('weekly', 'WEEKLY OBJECTIVES', 'New objectives every Monday')}</div>`;
  } else if (sec === 'camp') {
    title = 'SEASON CAMPAIGN'; right = `${CAMPAIGN.filter((c, i) => x.camp[i]).length} / ${CAMPAIGN.length} milestones claimed`;
    inner = `<p class="sub">Lifetime milestones: every match you play counts towards them, in any game mode.</p><div class="msg c4">${CAMPAIGN.map((c, i) => msCard(c.t, x.stats[c.stat] || 0, c.n, c, x.camp[i], 'c:' + i)).join('')}</div>`;
  } else if (sec === 'riv') {
    const rc = CLUBS[rivalClub(save.club)], done = x.riv.done;
    title = 'RIVALRY ROUND'; right = done ? 'Played today · back tomorrow' : 'One shot today vs ' + rc.short;
    inner = `<p class="sub">Once a day, play the club you actually dislike. A win pays more than a quick match. Win or lose, that is your shot until tomorrow.</p>
      <div class="evg"><div class="evr cur"><div class="cbadge" style="background:linear-gradient(135deg,${rc.a} 55%,${rc.b})">${rc.short}</div>
        <small>TODAY'S RIVAL</small><b class="it cn">${rc.name}</b><span>Opponent +6 above your rating</span><span class="gold">Win: +${fmt(winMoney(2200))} coins</span>
        ${done ? '<em>PLAYED</em>' : '<button class="go2 it" data-playev="riv:0">PLAY</button>'}</div></div>`;
  } else if (sec === 'road') {
    const rd = x.road; title = 'ROAD TRIP'; right = 'Leg ' + (Math.min(rd.round, ROAD.length - 1) + 1) + ' of ' + ROAD.length;
    inner = `<p class="sub">Five away games. Each stop is harder than the last. Lose or draw and the trip starts again. Finish all five for a free SILVER PACK.</p>
      <div class="evg c5">${ROAD.map((r, i) => `<div class="evr ${rd.round > i ? 'done' : rd.round === i ? 'cur' : ''}"><small>LEG ${i + 1}</small><b class="it">${r.n}</b>
        <span>Opponent +${r.extra}</span><span class="gold">+${fmt(winMoney(r.coins))} coins${i === ROAD.length - 1 ? ' + SILVER PACK' : ''}</span>
        ${rd.round > i ? '<em>WON</em>' : rd.round === i ? `<button class="go2 it" data-playev="road:${i}">PLAY</button>` : '<em class="dim">LOCKED</em>'}</div>`).join('')}</div>`;
  } else if (sec === 'night') {
    const done = x.night.done; title = 'FRIDAY LIGHTS'; right = done ? 'Played this week' : 'Once a week, under lights';
    inner = `<p class="sub">A one-off night game at Marvel Stadium. The opponent is a step above you. Win it for coins and a free BRONZE PACK. Resets every Monday.</p>
      <div class="evg"><div class="evr cur"><small>NIGHT MATCH</small><b class="it">MARVEL STADIUM</b><span>Opponent +8 above your rating</span>
        <span class="gold">Win: +${fmt(winMoney(2800))} coins + BRONZE PACK</span>
        ${done ? '<em>PLAYED</em>' : '<button class="go2 it" data-playev="night:0">PLAY</button>'}</div></div>`;
  } else {
    title = EVENT.name; right = eventRewardText();
    inner = `<p class="sub">Beat three finals opponents in a row, each tougher than the last. Lose or draw and the series resets to the start.</p>
      <div class="evg">${EVENT.rounds.map((r, i) => `<div class="evr ${ev.round > i ? 'done' : ev.round === i ? 'cur' : ''}"><small>ROUND ${i + 1}</small><b class="it">${r.n}</b><span>Opponent +${r.extra} above your rating</span><span class="gold">+${fmt(winMoney(r.coins))} coins${i === 2 && !ev.done ? ' + GOLD PACK' : ''}</span>
        ${ev.round > i ? '<em>WON</em>' : ev.round === i ? `<button class="go2 it" data-playev="finals:${i}">PLAY</button>` : '<em class="dim">LOCKED</em>'}</div>`).join('')}</div>`;
  }
  const adn = ['finals', 'cup', 'sb', 'div', 'riv', 'road', 'night'].includes(sec) ? '<p class="adnote">🧠 ADAPTIVE AI · Opponents scale to your team rating, and in event matches they lift their game the more you lead by (and ease off when far behind).</p>' : '';
  return `<div id="events"><div class="row-h"><h1 class="big">${title}</h1><span class="r">${right}</span></div>${seg}${adn}${inner}</div>`;
}

/* =================== MANAGER LEVEL (top bar XP) =================== */
const xpNeed = l => 600 + (l - 1) * 150;
function managerLevel() {
  const st = (save.x && save.x.stats) || {}, xp = (st.played || 0) * 60 + (st.won || 0) * 40 + (st.goals || 0) * 4;
  let lvl = 1, rem = xp; while (rem >= xpNeed(lvl)) { rem -= xpNeed(lvl); lvl++; }
  return {lvl, rem, need: xpNeed(lvl)};
}

/* =================== DAILY LOGIN REWARDS ===================
   7-day streak calendar. Claim once a day; miss a day and the week starts over. Day 7 is the jackpot.
   The popup opens by itself the first time you reach the home screen each session while a reward is waiting. */
const DAILY_LOGIN = [{coins: 1000}, {pack: 'bronze'}, {coins: 2000}, {pack: 'silver'}, {coins: 3000, pack: 'bronze'}, {pack: 'gold'}, {coins: 6000, pack: 'icon'}];
const yesterdayKey = () => { const d = new Date(); d.setDate(d.getDate() - 1); return dateKey(d); };
function loginState() {
  const d = save.dl || (save.dl = {last: '', streak: 0});
  if (d.last === dayKey()) return {ready: false, n: ((d.streak - 1) % 7) + 1, base: d.streak};
  const base = d.last === yesterdayKey() ? d.streak : 0;
  return {ready: true, n: base % 7, base};
}
let dailyOpen = false, dailyPrompted = false;
function claimDaily() {
  const s = loginState(); if (!s.ready) return;
  const t = giveReward(DAILY_LOGIN[s.n]);
  save.dl = {last: dayKey(), streak: s.base + 1}; persist(); dailyOpen = false; renderShell('Daily reward claimed: ' + t);
}
function renderDaily() {
  let o = $('dailyov'); if (!dailyOpen || !save) { if (o) o.remove(); return; }
  if (!o) { o = document.createElement('div'); o.id = 'dailyov'; $('stage').appendChild(o); }
  const s = loginState();
  const tiles = DAILY_LOGIN.map((r, i) => {
    const cl = i < s.n, cur = s.ready && i === s.n;
    return `<div class="dl${cl ? ' cl' : ''}${cur ? ' cur' : ''}${i === 6 ? ' big' : ''}"><small>DAY ${i + 1}</small><div class="dli">${r.pack ? (r.pack === 'icon' ? '💎' : '🎁') : '🪙'}</div><b>${rewardText(r)}</b>${cl ? '<em>✔ CLAIMED</em>' : cur ? '<em class="now">TODAY</em>' : '<em class="dim">&nbsp;</em>'}</div>`;
  }).join('');
  o.innerHTML = `<div class="dlbox"><h2 class="it">DAILY REWARDS</h2>
    <p>Log in every day to grow your streak. Miss a day and the week starts over. Day 7 is the big one.</p>
    <div class="dlstreak">🔥 STREAK <b>${s.ready ? s.base : save.dl.streak}</b> DAY${(s.ready ? s.base : save.dl.streak) === 1 ? '' : 'S'}</div>
    <div class="dlg">${tiles}</div>
    <div class="dlf">${s.ready ? `<button class="go2 it" id="dlClaim">CLAIM DAY ${s.n + 1}</button>` : `<span class="gold">Reward collected. Come back tomorrow for Day ${(s.n % 7) + 1}.</span>`}<button class="kbtn reset" id="dlClose">${s.ready ? 'LATER' : 'CLOSE'}</button></div></div>`;
  if ($('dlClaim')) $('dlClaim').onclick = claimDaily;
  $('dlClose').onclick = () => { dailyOpen = false; renderDaily(); renderShell(); };
}

/* =================== UPGRADE CENTER (bronze -> silver -> gold) =================== */
const UPG = {sec: 'silver'};
const promoBump = (p, to) => Math.max(0, PROMO_MIN[to] - p.b.rating);        // OVR (and every stat) rise by this much
const promoRating = (p, to) => Math.min(99, p.b.rating + promoBump(p, to) + p.lvl);
function promoList(from) { return save.owned.map(id => POOL[id]).filter(p => p && !p.legacy && !p.fantasy && !p.prem && p.tier === from).sort((a, b) => b.rating - a.rating || a.id - b.id); }
function promoteMany(from) {
  const rule = TIER_PROMO[from], list = promoList(from); if (!list.length) return toast('No ' + from + ' cards to upgrade', true);
  let n = 0; for (const p of list) { if (save.coins < rule.cost) break; save.coins -= rule.cost; save.promo[p.id] = rule.to; applyPromo(p); applyUp(p); n++; }
  if (!n) return toast('Not enough coins', true);
  persist(); syncSquad(); renderShell('Upgraded ' + n + ' card' + (n === 1 ? '' : 's') + ' to ' + rule.to.toUpperCase()); checkPsycho();
}
function upgradeHTML() {
  const from = UPG.sec, rule = TIER_PROMO[from], list = promoList(from), per = rule.cost;
  const seg = `<div class="seg" id="upseg">${[['silver', 'SILVER → GOLD'], ['bronze', 'BRONZE → SILVER']].map(([k, n]) => `<button data-up="${k}" class="${from === k ? 'on' : ''}">${n} (${promoList(k).length})</button>`).join('')}</div>`;
  const cells = list.map(p => {
    const can = save.coins >= per, bump = promoBump(p, rule.to);
    return `<div class="ugc"><div class="${can ? '' : 'dim'}">${card(p, 104)}</div><small>OVR ${p.rating} <i>→</i> <b>${promoRating(p, rule.to)}</b>${bump ? ' · +' + bump + ' stats' : ''}</small><button class="buy ${can ? '' : 'no'}" data-promo="${p.id}">● ${fmt(per)}</button></div>`;
  }).join('') || `<p class="sub">You don't own any ${from} cards right now. Open packs or sign ${from} players in the Market, then come back here.</p>`;
  return `<div id="upgrade"><div class="row-h"><h1 class="big">UPGRADE CENTER</h1><span class="r">Pay coins to permanently turn a ${from.toUpperCase()} card into a ${rule.to.toUpperCase()} card</span></div>
    ${seg}
    <div class="upinfo"><span>Cost per card <b class="gold">● ${fmt(per)}</b></span><span>New card art, OVR rises to at least <b>${PROMO_MIN[rule.to]}</b> and every stat rises with it</span>
      <button class="kbtn upg" id="promoAll" ${list.length ? '' : 'disabled'}>UPGRADE ALL AFFORDABLE (${Math.min(list.length, Math.floor(save.coins / per))} / ${list.length})</button></div>
    <div class="upgrid">${cells}</div></div>`;
}

/* =================== LEGACY PROFILE =================== */
const LEGV = {id: null};
const POSN = {DEF: 'Defender', MID: 'Midfielder', FWD: 'Forward', RUC: 'Ruckman', WING: 'Winger'};
function renderLegProfile() {
  let o = $('legprof'); if (LEGV.id === null || !save || tab !== 'legacy') { if (o) o.remove(); return; }
  if (!o) { o = document.createElement('div'); o.id = 'legprof'; $('stage').appendChild(o); }
  const legs = POOL.filter(q => q.legacy), p = POOL[LEGV.id], i = legs.indexOf(p), own = save.owned.includes(p.id), inLU = save.lineup.includes(p.id), club = CLUBS[p.club];
  const stats = [['KICKING', 'kic'], ['MARKING', 'mar'], ['SPEED', 'spd'], ['ENDURANCE', 'end']], best = stats.slice().sort((a, b) => p[b[1]] - p[a[1]])[0];
  const bars = stats.map(([n, k]) => `<div class="lpb"><span>${n}</span><div class="ebar"><i style="width:${Math.min(100, p[k] / LEGACY_CAP * 100)}%"></i></div><b>${p[k]}</b></div>`).join('');
  o.innerHTML = `<div class="lpbox">
    <div class="lpcard${own ? '' : ' locked'}">${card(p, 250)}${own ? '' : '<span class="lockicon">🔒</span>'}</div>
    <div class="lpinfo">
      <small class="lptag">LEGACY LEGEND · ${i + 1} / ${legs.length}</small>
      <h2 class="it">${p.full.toUpperCase()}</h2>
      <div class="lpmeta"><span class="chip gold">${p.rating} OVR</span><span class="chip">${POSN[p.pos] || p.pos}</span><span class="chip" style="border-color:${club.b}">${club.name}</span>${p.lvl ? `<span class="chip gold">★${p.lvl}</span>` : ''}${own ? `<span class="chip ok">✔ OWNED${inLU ? ' · IN LINEUP' : ''}</span>` : '<span class="chip bad">NOT OWNED</span>'}</div>
      <div class="lpbars">${bars}</div>
      <p class="lpscout">Scouting report: ${p.full} is a ${(POSN[p.pos] || p.pos).toLowerCase()} for ${club.name}. Standout skill is ${best[0].toLowerCase()} (${p[best[1]]}). Legacy cards can climb as high as ${LEGACY_CAP} in every stat through upgrades.</p>
      <div class="lpbtn"><button class="kbtn" id="lpPrev">◀ PREV</button><button class="kbtn" id="lpNext">NEXT ▶</button>
        ${own ? '<button class="go2 it" id="lpSquad">GO TO SQUAD</button>' : `<button class="go2 it" id="lpPacks">ICON PACKS</button><button class="kbtn" id="lpBuy">BUY · 15M</button>`}<button class="kbtn reset" id="lpClose">CLOSE</button></div>
    </div></div>`;
  const go = d => { LEGV.id = legs[(i + d + legs.length) % legs.length].id; renderLegProfile(); };
  $('lpPrev').onclick = () => go(-1); $('lpNext').onclick = () => go(1);
  $('lpClose').onclick = () => { LEGV.id = null; renderLegProfile(); };
  o.onclick = e => { if (e.target === o) { LEGV.id = null; renderLegProfile(); } };
  if ($('lpSquad')) $('lpSquad').onclick = () => { LEGV.id = null; tab = 'squad'; sel = {src: inLU ? 'L' : 'B', id: p.id}; renderShell(); };
  if ($('lpPacks')) $('lpPacks').onclick = () => { LEGV.id = null; tab = 'packs'; renderShell(); };
  if ($('lpBuy')) $('lpBuy').onclick = () => { const id = LEGV.id; LEGV.id = null; buyLegacy(id); };
}

/* =================== HOME SCREEN (FC Mobile style) =================== */
let homeSlide = 0, homeTimer = null;
function homeSlides() {
  const x = save.x, ev = save.ev, cp = x.cup, sb = x.sb, dv = x.div, n = claimCount('obj');
  return [
    bontChapterSlide(),
    {sec: 'finals', t: 'FINALS SERIES', ico: '🏆', note: 'Round ' + (ev.round + 1) + ' · ' + EVENT.rounds[ev.round].n, sub: ev.done ? 'Replay for coins' : 'Win all 3 for a free GOLD PACK'},
    {sec: 'cup', t: 'PREMIERSHIP CUP', ico: '🏅', note: CUPR[cp.round].n + ' · vs ' + CLUBS[cp.opps[cp.round]].name, sub: 'Four knockout matches'},
    {sec: 'sb', t: 'SQUAD BATTLES', ico: '⚔️', note: sb.pts + ' battle points · streak ' + sb.streak, sub: 'Weekly milestones and packs'},
    {sec: 'div', t: 'DIVISION RIVALS', ico: '🛡️', note: 'Division ' + dv.d + ' · ' + dv.g + ' / ' + DIV_GAMES + ' played', sub: 'Climb the divisions'},
    {sec: 'riv', t: 'RIVALRY ROUND', ico: '🔥', note: x.riv.done ? 'Played today' : 'vs ' + CLUBS[rivalClub(save.club)].short, sub: 'One shot a day'},
    {sec: 'road', t: 'ROAD TRIP', ico: '🚌', note: 'Leg ' + (x.road.round + 1) + ' of ' + ROAD.length, sub: 'Five away games'},
    {sec: 'night', t: 'FRIDAY LIGHTS', ico: '🌃', note: x.night.done ? 'Played this week' : 'Night game at Marvel', sub: 'Win a bronze pack'},
    {sec: 'obj', t: 'OBJECTIVES', ico: '🎯', note: n ? n + ' reward' + (n === 1 ? '' : 's') + ' ready to claim' : 'Daily and weekly objectives', sub: 'Coins and packs'}];
}
function earlyGoals() {
  if (!save || !save.biz) return '';
  const bits = [];
  const s = SPONS[0], signed = (save.biz.sp || []).includes(0);
  if (!signed && save.won < 12) bits.push(`<button type="button" id="goBank">SOUTHERN BANK ${Math.min(save.won, s.w)}/${s.w} · ${fmt(s.c)}</button>`);
  if (!save.bundle && save.played < 15) bits.push(`<button type="button" id="goBundle">STARTER BUNDLE · ${fmt(BUNDLE_COST)}</button>`);
  if (!coachNow() && save.played < 20) bits.push(`<button type="button" id="goPike">GARY PIKE · ${fmt(CO.mentor.price)}</button>`);
  return bits.length ? `<div class="egoals"><div class="egoal">${bits.join('')}</div></div>` : '';
}
function homeHTML(feat, tr, club) {
  const slides = homeSlides(), spon = sponsorPending(), dl = loginState();
  homeSlide = homeSlide % slides.length;
  return `<div id="home">
    <div class="hside">
      <button class="sq" id="hDaily"><span>🎁</span><small>DAILY</small>${dl.ready ? '<i class="bdg">!</i>' : ''}</button>
      <button class="sq${spon ? ' rdy' : ''}" id="claimSpon"><span>💰</span><small>SPONSOR</small>${spon ? '<i class="bdg">!</i>' : ''}</button>
      <button class="sq" id="goUpgrade"><span>💎</span><small>UPGRADE</small></button>
      <button class="sq" id="goLegacy"><span>⭐</span><small>LEGACY</small></button>
    </div>
    <div class="hcard">${card(feat, 118)}</div>
    <div class="plate it"><b>${feat.full.toUpperCase()}</b><span>${feat.rating} OVR · ${feat.pos}${feat.legacy ? ' · LEGACY' : ''}</span></div>
    <div class="hright">
      <div class="hban" id="hban">${slides.map((s, i) => `<div class="hs${i === homeSlide ? ' on' : ''}" data-hsec="${s.sec}"><div class="hs-t it">${s.t}</div><div class="hs-e">${s.ico}</div><div class="hs-n it">${s.note}</div><div class="hs-s">${s.sub}</div></div>`).join('')}
        <div class="hdots">${slides.map((_, i) => `<i data-d="${i}" class="${i === homeSlide ? 'on' : ''}"></i>`).join('')}</div></div>
      <div class="hrow">
        <button class="hclub" id="goSquad"><div class="hl"><b class="it">CLUB</b><div class="ovrb"><small>OVR</small><i class="it">${tr}</i></div></div><div class="hr" style="background:linear-gradient(135deg,${club.a} 55%,${club.b})"><span class="it">${club.short}</span></div></button>
        <button class="hplay" id="playBtn"><b class="it">PLAY</b><small>QUICK MATCH</small><span class="hball">🏉</span></button>
      </div>
      ${earlyGoals()}
    </div></div>`;
}
function startHomeTimer() {
  clearInterval(homeTimer); homeTimer = null;
  const ban = $('hban'); if (!ban || tab !== 'home') return;
  const show = i => { homeSlide = i; ban.querySelectorAll('.hs').forEach((el, k) => el.classList.toggle('on', k === i)); ban.querySelectorAll('.hdots i').forEach((el, k) => el.classList.toggle('on', k === i)); };
  const n = ban.querySelectorAll('.hs').length;
  homeTimer = setInterval(() => { if (!$('hban') || mode !== 'menu') return clearInterval(homeTimer); show((homeSlide + 1) % n); }, 4500);
  ban.querySelectorAll('.hdots i').forEach(el => el.onclick = e => { e.stopPropagation(); show(+el.dataset.d); startHomeTimer(); });
  ban.querySelectorAll('.hs').forEach(el => el.onclick = () => { tab = 'events'; EVX.sec = el.dataset.hsec; renderShell(); });
}

let clubSec = 'pitch', bootPick = '#141414';
const BOOTS = ['#141414', '#f4f4f4', '#7a1028', '#0e2f86', '#e2b123', '#0c7a3e', '#e23b8c', '#ef6a12'];
const SLOT_LBL = ['BP', 'FB', 'BP', 'HB', 'CHB', 'HB', 'W', 'C', 'C', 'R', 'RR', 'W', 'HF', 'CHF', 'HF', 'FP', 'FF', 'FP'];
const PITCH_POS = [[26, 86], [50, 90], [74, 86], [14, 72], [50, 74], [86, 72], [7, 50], [30, 56], [70, 56], [50, 40], [50, 68], [93, 50], [14, 30], [50, 28], [86, 30], [26, 14], [50, 10], [74, 14]];
function clubSide(sp) {
  if (clubSec === 'players') {
    const bench = myBench();
    const acts = sp ? `<div class="cf-acts"><b class="it">${sp.full.toUpperCase()}</b><small>#${jumperOf(sp, save.lineup.indexOf(sp.id))} · ${condOf(sp.id)}% condition</small>
      ${condOf(sp.id) < 100 ? `<button class="kbtn" id="recBtn">RECOVER ● ${fmt(recoverCost(sp))}</button>` : '<span class="gold">FRESH</span>'}
      ${sp.lvl >= MAXLVL ? (ascendCost(sp) ? `<button class="kbtn upg" id="ascBtn">MASTERCLASS ${ascOf(sp.id)}→${ascOf(sp.id) + 1} ● ${fmt(ascendCost(sp))}</button>` : '<span class="gold">MASTERCLASS DONE</span>') : `<button class="kbtn upg" id="upBtn">TRAIN ● ${fmt(upCost(sp))}</button>${upCost(sp) && upCost(sp) <= 800 ? '<small class="gold">Best spend. One level on a cheap card.</small>' : ''}${campCost(sp) ? `<button class="kbtn" id="campBtn">CAMP 6h ● ${fmt(campCost(sp))}</button>` : ''}`}
      ${(!sp.legacy && !sp.fantasy && !sp.prem && TIER_PROMO[sp.tier]) ? `<button class="kbtn promo" id="promoBtn">PROMOTE</button>` : ''}
      ${save.lineup.includes(sp.id) || sp.legacy || sp.bont || sp.totw ? '' : `<button class="kbtn" id="sellBtn">SELL +${fmt(sellValue(sp))}</button>`}
      <button class="kbtn" id="toLocker">LOCKER</button></div>` : '<p class="sub">Tap a spot on the oval, then a bench player to bring them in.</p>';
    return `<button class="cf-back" data-csec="pitch">← MY TEAM</button>${acts}
      <button class="kbtn" id="autoBuildBtn">⚡ AUTO BUILD</button>
      <div class="cf-scroll">${bench.map(p => `<button type="button" class="prow" data-bid="${p.id}">${card(p, 46)}<span><b>${p.name}</b><small>${p.rating} OVR · ${condOf(p.id)}%</small></span></button>`).join('') || '<p class="sub">No bench players. Sign some in the market.</p>'}</div>`;
  }
  if (clubSec === 'locker' || clubSec === 'badge') {
    const whole = clubSec === 'badge';
    const who = whole ? 'WHOLE TEAM' : (sp ? sp.full.toUpperCase() : 'PICK A PLAYER');
    const num = whole ? (ensureLook().teamNum || 1) : (sp ? jumperOf(sp, save.lineup.indexOf(sp.id)) : 1);
    return `<button class="cf-back" data-csec="pitch">← MY TEAM</button>
      <div class="cf-lock"><b class="it">${whole ? 'TEAM BADGE' : 'LOCKER ROOM'}</b><small>${who}</small>
      <label>JUMPER NUMBER</label><input id="lkNum" type="number" min="1" max="99" value="${num}">
      <label>BOOTS</label><div class="boots">${BOOTS.map(c => `<button type="button" class="bsw${bootPick === c ? ' on' : ''}" data-boot="${c}" style="background:${c}"></button>`).join('')}</div>
      ${whole ? '' : `<button class="go2 it" id="applyOne">THIS PLAYER</button>`}
      <button class="kbtn" id="applyAll">WHOLE TEAM</button>
      <p class="sub">Numbers and boots show on your side in the match. Whole team paints every player you own.</p></div>`;
  }
  return `<button class="cf-btn" data-csec="market">MARKET <span>⇄</span></button>
    <button class="cf-btn" data-csec="players">PLAYERS <span>👥</span></button>
    <button class="cf-btn" data-csec="locker">LOCKER ROOM <span>👕</span></button>
    <button class="cf-btn" data-csec="badge">TEAM BADGE <span>🛡</span></button>`;
}
function clubHTML(tr, club) {
  const sp = sel && POOL[sel.id] ? POOL[sel.id] : null;
  const cap = SQUAD.length ? SQUAD.reduce((a, p) => p.rating > a.rating ? p : a) : null;
  const chips = save.lineup.map((id, i) => {
    const p = POOL[id], [x, y] = PITCH_POS[i], on = sel && sel.src === 'L' && sel.id === id;
    return `<button type="button" class="pchip${on ? ' on' : ''}" data-slot="${i}" style="left:${x}%;top:${y}%">${card(p, 50)}<small>${SLOT_LBL[i]}</small></button>`;
  }).join('');
  return `<div id="clubfc">
    <div class="cf-model">
      <div id="clubhole"></div>
      <div class="cf-cap"><b class="it">${cap ? cap.name.toUpperCase() : club.short}</b><small>LINEUP</small></div>
    </div>
    <div class="cf-board">
      <div class="cf-head">
        <div class="cf-badge" style="background:${club.a};color:${club.b};border-color:${club.b}">${club.short}</div>
        <div class="cf-name"><b class="it">MY TEAM</b><small>18 A-SIDE</small></div>
        <div class="ovrsh"><small>OVR</small><b class="it">${tr}</b></div>
      </div>
      <div class="cf-oval"><i class="cf-ring"></i><i class="cf-box"></i>${chips}</div>
      <div class="cf-foot">Tap the ground to edit the eighteen · wages ${fmt(wageBill())} a match</div>
    </div>
    <div class="cf-side">${clubSide(sp)}</div>
  </div>`;
}
function renderShell(msg) {
  if (!save) { screen = 'pick'; return renderPick(); }
  initX(); if (!save.biz || !save.biz.merch) bizInit(); else bizTick();
  if (tab === 'controls' || tab === 'about') { SETSEC = tab; tab = 'settings'; }
  const view = tab === 'settings' ? SETSEC : tab;
  const club = CLUBS[save.club], feat = SQUAD.reduce((a, p) => p.rating > a.rating ? p : a);
  const tr = teamRating() + coachRating(), av = k => Math.round(SQUAD.reduce((a, p) => a + p[k], 0) / SQUAD.length) + coachFlat(k);
  let body = '';
  const ml = managerLevel();
  document.body.classList.toggle('onhome', tab === 'home');
  if (tab === 'home' && club) { document.documentElement.style.setProperty('--club', club.a); document.documentElement.style.setProperty('--club2', club.b); }
  if (tab === 'home') {
    body = homeHTML(feat, tr, club);
  } else if (tab === 'squad') {
    body = clubHTML(tr, club);
  } else if (tab === 'market' && MKT.sec === 'shop') {
    body = shopHTML();
  } else if (tab === 'market' && MKT.sec === 'moves') {
    body = movesMarketHTML();
  } else if (tab === 'market' && MKT.sec === 'coaches') {
    body = coachMarketHTML();
  } else if (tab === 'market' && MKT.sec === 'trade') {
    body = window.AFLMarket ? AFLMarket.html() : '<div id="market"><p>Online market is loading.</p></div>';
  } else if (tab === 'market') {
    const seg = (id, vals, cur) => `<div class="seg" id="${id}">${vals.map(v => `<button data-v="${v}" class="${cur === v ? 'on' : ''}">${v}</button>`).join('')}</div>`;
    body = `<div id="market"><div class="row-h"><h1 class="big">PLAYER MARKET</h1><span class="r">Sell bench players from the Squad tab</span></div>${secSeg()}
      <div class="mfilters"><input id="mq" type="text" placeholder="Search player…" value="${MKT.q.replace(/"/g, '')}">
        ${seg('mpos', ['ALL', 'MID', 'DEF', 'FWD', 'RUC'], MKT.pos)}${seg('mtier', ['ALL', 'BRONZE', 'SILVER', 'GOLD', 'ICON', 'PREM'], MKT.tier)}
        <select id="mclub"><option value="-1">All clubs</option>${CLUBS.map((c, i) => `<option value="${i}" ${MKT.club === i ? 'selected' : ''}>${c.name}</option>`).join('')}</select>
        <select id="msort"><option value="rating" ${MKT.sort === 'rating' ? 'selected' : ''}>Rating ↓</option><option value="priceAsc" ${MKT.sort === 'priceAsc' ? 'selected' : ''}>Price ↑</option><option value="priceDesc" ${MKT.sort === 'priceDesc' ? 'selected' : ''}>Price ↓</option></select></div>
      <div id="mgrid"></div><div id="mpager"></div></div>`;
  } else if (tab === 'packs') {
    body = `<div id="packs"><div class="row-h"><h1 class="big">PACKS</h1><span class="r">Duplicates are sold automatically for 20% of their price · Training packs level up your players</span></div>
      <div class="bulkbar"><span>BUY IN BULK</span><div class="seg" id="bulkseg">${BULK_OPTS.map(n => `<button data-bulk="${n}" class="${BULK === n ? 'on' : ''}">x${n}</button>`).join('')}</div><small>Opens ${BULK} pack${BULK > 1 ? 's' : ''} at once and reveals every card straight away</small></div>
      <div class="pkg">${PACKS.map(pk => `<div class="pk ${pk.id}"><div class="pkart">🎁</div><b class="it">${pk.name}</b><small>${pk.id === 'icon' ? '4.5% legacy per card · pity ' + (save.legDry || 0) + '/' + LEGACY_PITY + ' · ' + (save.shards || 0) + ' shards' : pk.info}</small>
        <button class="buy ${save.coins < pk.price * BULK ? 'no' : ''}" data-pk="${pk.id}">● ${fmt(pk.price * BULK)}${BULK > 1 ? ' (x' + BULK + ')' : ''}</button>
        ${save.free[pk.id] ? `<button class="buy free" data-free="${pk.id}">OPEN FREE (${save.free[pk.id]})</button>` : ''}</div>`).join('')}</div></div>`;
  } else if (tab === 'upgrade') {
    body = upgradeHTML();
  } else if (tab === 'legacy') {
    const legs = POOL.filter(p => p.legacy), owned = legs.filter(p => save.owned.includes(p.id));
    const shards = save.shards || 0;
    body = `<div id="legacy"><div class="row-h"><h1 class="big">LEGACY TEAM</h1><span class="r">${owned.length} / ${legs.length} collected · ${shards} shards · pity ${save.legDry || 0}/${LEGACY_PITY}</span></div>
      <p class="sub">A spine is enough. Icon packs are a 4.5% shot per card and never repeat a legend you don't own. Ten dry packs guarantees the next one. Duplicates pay a shard. ${SHARD_COST} shards crafts any legend you still need. 100 wins and a premiership cup hands you one.</p>
      <div class="pkg leggrid">${legs.map(p => `<div class="legcell" data-leg="${p.id}"><div class="${save.owned.includes(p.id) ? '' : 'legdim'}">${card(p, 160)}</div>${save.owned.includes(p.id) ? '' : `<button class="kbtn" data-craft="${p.id}" style="margin-top:6px${shards < SHARD_COST ? ';opacity:.45' : ''}">CRAFT · ${SHARD_COST}</button><button class="kbtn" data-buylg="${p.id}" style="margin-top:6px${save.coins < LEGACY_BUY ? ';opacity:.45' : ''}">BUY · 15M</button>`}</div>`).join('')}</div>
      <button class="tile" id="goIconPack" style="max-width:360px;margin:16px 0 20px;flex:none"><span class="ic">🎁</span><div><b>OPEN ICON PACKS</b><small>Best shot at a legend · Packs tab</small></div></button></div>`;
  } else if (tab === 'events') {
    body = eventsHTML();
  } else if (tab === 'biz') {
    body = bizHTML();
  } else if (tab === 'kickoff') {
    const cur = diffId(), gid = (save && GROUNDS.some(g => g.id === save.ground)) ? save.ground : 'mcg';
    body = `<div id="kickoff"><div class="row-h"><h1 class="big">KICK OFF</h1><span class="r">Pick a difficulty and a ground, then play.</span></div>
      <div class="dgrid">${DIFFS.map(d => `<button type="button" class="dcard ${d.id}${cur === d.id ? ' on' : ''}" data-diff="${d.id}"><b class="it">${d.name}</b><em>${d.pay}× WIN</em><span>${d.blurb}</span></button>`).join('')}</div>
      <div class="glabel it">STADIUM</div>
      <div class="grounds">${GROUNDS.map(g => { const open = groundOpen(g.id), price = GROUND_PRICE[g.id] || 0; return `<button type="button" class="gnd${gid === g.id ? ' on' : ''}${open ? '' : ' lock'}" data-gnd="${g.id}"><b>${g.name}</b><small>${open ? g.city + (g.night ? ' · NIGHT' : ' · DAY') : 'UNLOCK ● ' + fmt(price)}</small></button>`; }).join('')}</div>
      <div class="dactions"><button class="kbtn reset" id="diffBack">BACK</button><button class="kbtn" id="mpGo">ONLINE</button><button class="go2 it" id="diffGo">PLAY</button></div></div>`;
  } else if (view === 'controls') {
    body = `<div class="row-h"><h1 class="big">CONTROLS</h1><span class="r">Click a key, then press the new one</span><button class="kbtn reset" id="resetKeys">RESET</button></div>
      <p class="sub">Goal = 6 points · Behind = 1 point. Mark a high kick to take possession. Click a teammate to pass to them. Kick distance depends on the player's KIC. Time your tap in the ball-up.</p>
      <div class="keygrid">${ACTIONS.map(([k, n]) => `<div class="kr"><span>${n}</span><button class="kbtn ${capturing === k ? 'wait' : ''}" data-k="${k}">${capturing === k ? 'PRESS KEY…' : keyName(bind[k])}</button></div>`).join('')}</div>`;
  } else if (view === 'about') {
    body = aboutShellHTML();
  } else {
    body = `<h1 class="big">SETTINGS</h1><div class="setbox"><h3>GRAPHICS</h3>
      <div class="seg" id="gseg"><button data-g="high" class="${settings.graphics === 'high' ? 'on' : ''}">High</button><button data-g="low" class="${settings.graphics === 'low' ? 'on' : ''}">Lite</button><button data-g="shit" class="${settings.graphics === 'shit' ? 'on' : ''}">SHIT QUILTY</button></div>
      <p>High adds shadows and sharper pitch markings. Lite is for older machines. SHIT QUILTY is a potato mode: 30 FPS, no shadows, no fog, no anti-aliasing.${settings.surface ? ' <b style="color:#f7c738">Surface detected.</b>' : ''}</p></div>
      <div class="setbox"><h3>RESOLUTION</h3><div class="seg" id="rseg">${[100, 75, 50, 25].map(r => `<button data-r="${r}" class="${settings.res === r ? 'on' : ''}">${r}%</button>`).join('')}</div>
      <p>Lower resolution means a faster game.${settings.surface ? (SURFACE_BAD_FPS() ? ' <b style="color:#ff5a64">This laptop is too bad for this game: turn it down to 50% or less to get normal FPS.</b>' : ' <b style="color:#22e37b">Normal FPS unlocked.</b>') : ''}</p></div>
      <div class="setbox"><h3>CAREER</h3><p>Start again with a different club. This deletes your coins, players and record.</p><button class="kbtn reset" id="newCareer" style="margin-top:10px">NEW CAREER</button></div>`;
  }
  if (tab === 'settings') body = `<div class="seg" id="setseg">${[['main', 'SETTINGS'], ['controls', 'CONTROLS'], ['about', 'ABOUT US']].map(([k, n]) => `<button data-ss="${k}" class="${SETSEC === k ? 'on' : ''}">${n}</button>`).join('')}</div>` + body;
  $('stage').innerHTML = `${bgHTML()}
   <div id="top"><div class="prof"><div class="badge it" style="border-color:${club.b};background:${club.a};color:${club.b};font-size:15px">${club.short}</div>
       <div class="club"><b class="it">${club.name.toUpperCase()}<em>${save.won}W · ${save.drawn}D · ${save.lost}L</em></b><div class="xp"><span class="lv it">${ml.lvl}</span><div class="xpbar"><i style="width:${Math.round(100 * ml.rem / ml.need)}%"></i></div><small>${fmt(ml.rem)}/${fmt(ml.need)}XP</small></div></div></div><div class="sp"></div>
     <div class="pill it" style="border-color:#22e37b"><i style="color:#22e37b">★</i>OVR ${tr}</div>
     <div class="pill it" style="border-color:#f7c738"><i style="color:#f7c738">●</i><span id="coinTxt">${fmt(save.coins)}</span><button class="plus" id="topPlus" title="Get more coins">+</button></div>
     <div class="pill it" style="border-color:#40c7f5"><i style="color:#40c7f5">👥</i>${save.owned.length}</div>
     <button class="ibtn" id="topDaily" title="Daily rewards">🎁${loginState().ready ? '<i class="bdg">!</i>' : ''}</button><button class="ibtn" id="topSet" title="Settings">⚙</button></div>
   <div id="body">${body}</div><div id="toast"></div>
   <div id="bot">${TABS.map(([k, n, i]) => `<button data-t="${k}" class="${tab === k ? 'on' : ''}"><span class="ic">${i}</span>${n}${k === 'events' && claimCount() ? `<i class="bdg">${claimCount()}</i>` : ''}</button>`).join('')}</div>`;
  document.querySelectorAll('#bot button').forEach(b => b.onclick = () => { tab = b.dataset.t; sel = null; LEGV.id = null; renderShell(); });
  document.querySelectorAll('#setseg button').forEach(b => b.onclick = () => { SETSEC = b.dataset.ss; renderShell(); });
  document.querySelectorAll('[data-biz]').forEach(b => b.onclick = () => bizAct(b.dataset.biz));
  document.querySelectorAll('.kbtn[data-k]').forEach(b => b.onclick = () => { capturing = b.dataset.k; renderShell(); });
  if ($('resetKeys')) $('resetKeys').onclick = () => { bind = Object.assign({}, DEFAULT_KEYS); localStorage.removeItem('aflKeys'); capturing = null; renderShell(); };
  if ($('playBtn')) $('playBtn').onclick = () => { tab = 'kickoff'; renderShell(); };
  document.querySelectorAll('[data-diff]').forEach(b => b.onclick = () => { save.diff = b.dataset.diff; persist(); renderShell(); });
  document.querySelectorAll('[data-gnd]').forEach(b => b.onclick = () => buyGround(b.dataset.gnd));
  if ($('diffBack')) $('diffBack').onclick = () => { tab = 'home'; renderShell(); };
  if ($('diffGo')) $('diffGo').onclick = () => { if (save.ground && !groundOpen(save.ground)) return toast('Unlock that ground first', true); startMatch(); };
  if ($('mpGo')) $('mpGo').onclick = () => { if (window.AFLNet) AFLNet.open(); };
  if ($('goSquad')) $('goSquad').onclick = () => { tab = 'squad'; renderShell(); };
  if ($('goMarket')) $('goMarket').onclick = () => { tab = 'market'; renderShell(); };
  document.querySelectorAll('#gseg button').forEach(b => b.onclick = () => { settings.graphics = b.dataset.g; localStorage.setItem('aflGraphics', settings.graphics); localStorage.setItem('aflGfxManual', '1'); resize(); renderShell(settings.graphics === 'high' ? 'Anti-aliasing applies after a restart' : ''); });
  document.querySelectorAll('#rseg button').forEach(b => b.onclick = () => { settings.res = +b.dataset.r; localStorage.setItem('aflRes', settings.res); resize(); renderShell(settings.surface ? (SURFACE_BAD_FPS() ? 'Still too sharp for this laptop...' : 'Normal FPS unlocked') : ''); });
  if (view === 'about') initAbout();
  if ($('newCareer')) $('newCareer').onclick = () => {
    if (!confirm('Delete this career and choose a new club?')) return;
    try { localStorage.removeItem(SAVE_KEY); } catch (e) {} save = null; SQUAD = []; pickSel = -1; sel = null; screen = 'pick'; renderPick();
  };
  // squad interactions
  document.querySelectorAll('[data-csec]').forEach(b => b.onclick = () => {
    const s = b.dataset.csec;
    if (s === 'market') { tab = 'market'; MKT.sec = 'players'; return renderShell(); }
    clubSec = s; renderShell();
  });
  document.querySelectorAll('[data-slot]').forEach(b => b.onclick = () => {
    sel = {src: 'L', id: save.lineup[+b.dataset.slot]};
    if (clubSec === 'pitch' || clubSec === 'badge') clubSec = 'players';
    renderShell();
  });
  document.querySelectorAll('[data-bid]').forEach(b => b.onclick = () => {
    const id = +b.dataset.bid;
    if (!sel || sel.src !== 'L' || !save.lineup.includes(sel.id)) { sel = {src: 'B', id}; return renderShell(); }
    save.lineup[save.lineup.indexOf(sel.id)] = id;
    sel = {src: 'L', id}; rosterChanged(); renderShell('Lineup updated');
  });
  document.querySelectorAll('[data-boot]').forEach(b => b.onclick = () => { bootPick = b.dataset.boot; renderShell(); });
  if ($('toLocker')) $('toLocker').onclick = () => { clubSec = 'locker'; renderShell(); };
  const paintLook = all => {
    const L = ensureLook(), num = clamp(Math.round(+($('lkNum') && $('lkNum').value) || 1), 1, 99);
    if (all) {
      L.teamNum = num; L.teamBoot = bootPick;
      for (const id of save.owned) { L.num[id] = num; L.boot[id] = bootPick; }
    } else if (sel && POOL[sel.id]) {
      L.num[sel.id] = num; L.boot[sel.id] = bootPick;
    } else return toast('Tap a player on the oval first', true);
    persist(); buildHero(); renderShell(all ? 'Whole side updated' : 'Kit updated');
  };
  if ($('applyOne')) $('applyOne').onclick = () => paintLook(false);
  if ($('applyAll')) $('applyAll').onclick = () => paintLook(true);
  document.querySelectorAll('.cc').forEach(el => el.onclick = () => {
    const src = el.dataset.src, id = +el.dataset.id;
    if (!sel) { sel = {src, id}; return renderShell(); }
    if (sel.src === src && sel.id === id) { sel = null; return renderShell(); }
    if (sel.src === 'L' && src === 'L') { const x = save.lineup.indexOf(sel.id), y = save.lineup.indexOf(id); [save.lineup[x], save.lineup[y]] = [save.lineup[y], save.lineup[x]]; }
    else if (sel.src === 'B' && src === 'L') save.lineup[save.lineup.indexOf(id)] = sel.id;
    else if (sel.src === 'L' && src === 'B') save.lineup[save.lineup.indexOf(sel.id)] = id;
    else { sel = {src, id}; return renderShell(); }
    sel = null; rosterChanged(); renderShell('Lineup updated');
  });
  if ($('upBtn')) $('upBtn').onclick = () => {
    const p = POOL[sel.id]; const c = upCost(p);
    if (save.coins < c) return toast('Not enough coins', true);
    save.coins -= c; save.up[p.id] = p.lvl + 1; applyUp(p); persist(); syncSquad(); renderShell('Upgraded ' + p.name + ' to level ' + p.lvl + ' · ' + p.rating + ' OVR');
  };
  if ($('ascBtn')) $('ascBtn').onclick = () => {
    const p = POOL[sel.id], c = ascendCost(p);
    if (!c) return;
    if (save.coins < c) return toast('Not enough coins to ascend', true);
    if (!save.asc) save.asc = {};
    save.coins -= c; save.asc[p.id] = ascOf(p.id) + 1; applyUp(p); persist(); syncSquad();
    renderShell(p.name + ' masterclass ' + p.asc + '/5. +1 stat. The card rating does not jump.');
  };
  if ($('campBtn')) $('campBtn').onclick = () => sendCamp(sel.id);
  if ($('promoBtn')) $('promoBtn').onclick = () => promoteTier(POOL[sel.id]);
  if ($('autoBuildBtn')) $('autoBuildBtn').onclick = autoBuildSquad;
  if ($('deselBtn')) $('deselBtn').onclick = () => { sel = null; renderShell(); };
  if ($('recBtn')) $('recBtn').onclick = () => {
    const p = POOL[sel.id], c = recoverCost(p);
    if (!c) return toast(p.name + ' is already fresh');
    if (save.coins < c) return toast('Not enough coins to recover', true);
    save.coins -= c; setCond(p.id, 100); persist(); renderShell(p.name + ' is fresh');
  };
  if ($('sellBtn')) $('sellBtn').onclick = () => {
    if (save.biz.loans[sel.id]) return toast('Recall this player from loan first', true);
    const p = POOL[sel.id];
    if (!p || p.bont || p.legacy || p.totw || !sellValue(p)) return toast('This card cannot be sold', true);
    save.owned = save.owned.filter(x => x !== p.id); delete save.mv.on[p.id]; save.coins += sellValue(p); sel = null; persist(); renderShell('Sold ' + p.name + ' for ' + fmt(sellValue(p)));
  };
  // market interactions
  document.querySelectorAll('[data-sec]').forEach(b => b.onclick = () => { MKT.sec = b.dataset.sec; renderShell(); });
  if (tab === 'market' && MKT.sec === 'trade' && window.AFLMarket) AFLMarket.mount();
  document.querySelectorAll('[data-bmove]').forEach(b => b.onclick = () => buyMove(b.dataset.bmove));
  document.querySelectorAll('[data-plus]').forEach(b => b.onclick = () => buyPlus(b.dataset.plus));
  document.querySelectorAll('[data-bcoach]').forEach(b => b.onclick = () => buyCoach(b.dataset.bcoach));
  document.querySelectorAll('[data-ast]').forEach(b => b.onclick = () => buyAst(b.dataset.ast));
  document.querySelectorAll('[data-hire]').forEach(b => b.onclick = () => hireCoach(b.dataset.hire));
  document.querySelectorAll('[data-boost]').forEach(b => b.onclick = () => buyBoost(b.dataset.boost));
  document.querySelectorAll('[data-use]').forEach(b => b.onclick = () => useBoost(b.dataset.use));
  document.querySelectorAll('[data-totw]').forEach(b => b.onclick = () => buyTotw(+b.dataset.totw));
  document.querySelectorAll('[data-cos]').forEach(b => b.onclick = () => { const [k, id] = b.dataset.cos.split(':'); buyCos(k, id); });
  document.querySelectorAll('[data-buylg]').forEach(b => b.onclick = e => { e.stopPropagation(); buyLegacy(+b.dataset.buylg); });
  if ($('buyBundle')) $('buyBundle').onclick = buyBundle;
  if ($('goBank')) $('goBank').onclick = () => { tab = 'biz'; renderShell(); };
  if ($('goBundle')) $('goBundle').onclick = () => { tab = 'market'; MKT.sec = 'shop'; renderShell(); };
  if ($('goPike')) $('goPike').onclick = () => { tab = 'market'; MKT.sec = 'coaches'; renderShell(); };
  document.querySelectorAll('[data-mvadd]').forEach(b => b.onclick = () => { const l = save.mv.on[sel.id] = movesOn(sel.id).slice(); if (l.length < moveSlots(POOL[sel.id]) && availMove(b.dataset.mvadd) > 0) l.push(b.dataset.mvadd); persist(); renderShell(); });
  document.querySelectorAll('[data-mvrm]').forEach(b => b.onclick = () => { const l = movesOn(sel.id).slice(); l.splice(+b.dataset.mvrm, 1); save.mv.on[sel.id] = l; persist(); renderShell(); });
  if ($('coachGo')) $('coachGo').onclick = () => { tab = 'market'; MKT.sec = 'coaches'; sel = null; renderShell(); };
  if (tab === 'market' && MKT.sec === 'players') {
    renderMarketGrid();
    $('mq').oninput = e => { MKT.q = e.target.value; MKT.page = 0; renderMarketGrid(); };
    for (const [id, key] of [['mpos', 'pos'], ['mtier', 'tier']]) document.querySelectorAll('#' + id + ' button').forEach(b => b.onclick = () => {
      MKT[key] = b.dataset.v; MKT.page = 0; document.querySelectorAll('#' + id + ' button').forEach(x => x.classList.toggle('on', x === b)); renderMarketGrid();
    });
    $('mclub').onchange = e => { MKT.club = +e.target.value; MKT.page = 0; renderMarketGrid(); };
    $('msort').onchange = e => { MKT.sort = e.target.value; MKT.page = 0; renderMarketGrid(); };
  }
  document.querySelectorAll('[data-pk]').forEach(b => b.onclick = () => openPackBulk(PACKS.find(p => p.id === b.dataset.pk), BULK));
  document.querySelectorAll('[data-free]').forEach(b => b.onclick = () => openPack(PACKS.find(p => p.id === b.dataset.free), true));
  document.querySelectorAll('[data-bulk]').forEach(b => b.onclick = () => { BULK = +b.dataset.bulk; renderShell(); });
  if ($('goIconPack')) $('goIconPack').onclick = () => { tab = 'packs'; renderShell(); };
  document.querySelectorAll('[data-craft]').forEach(b => b.onclick = e => {
    e.stopPropagation();
    const p = POOL[+b.dataset.craft];
    if (!p || !p.legacy || save.owned.includes(p.id)) return;
    if ((save.shards || 0) < SHARD_COST) return toast('Need ' + SHARD_COST + ' shards. Duplicates drop them.', true);
    save.shards -= SHARD_COST; save.owned.push(p.id); persist(); renderShell(p.full + ' crafted');
  });
  if ($('claimSpon')) $('claimSpon').onclick = claimSponsor;
  if ($('goPacks')) $('goPacks').onclick = () => { tab = 'packs'; renderShell(); };
  if ($('goEvents')) $('goEvents').onclick = () => { tab = 'events'; renderShell(); };
  document.querySelectorAll('[data-esec]').forEach(b => b.onclick = () => { EVX.sec = b.dataset.esec; renderShell(); });
  document.querySelectorAll('[data-bchap]').forEach(b => b.onclick = () => { EVX.bchap = +b.dataset.bchap; renderShell(); });
  document.querySelectorAll('[data-bont]').forEach(b => b.onclick = () => startBont(+b.dataset.bont));
  if ($('bontUp')) $('bontUp').onclick = bontUpgrade;
  document.querySelectorAll('[data-claim]').forEach(b => b.onclick = () => claim(b.dataset.claim));
  document.querySelectorAll('[data-playev]').forEach(b => b.onclick = () => { const [t, i] = b.dataset.playev.split(':'); startMatch({t, i: +i}); });
  document.querySelectorAll('[data-leg]').forEach(el => el.onclick = () => { LEGV.id = +el.dataset.leg; renderLegProfile(); });
  document.querySelectorAll('[data-up]').forEach(b => b.onclick = () => { UPG.sec = b.dataset.up; renderShell(); });
  document.querySelectorAll('[data-promo]').forEach(b => b.onclick = () => promoteTier(POOL[+b.dataset.promo]));
  if ($('promoAll')) $('promoAll').onclick = () => promoteMany(UPG.sec);
  if ($('hDaily')) $('hDaily').onclick = () => { dailyOpen = true; renderDaily(); };
  if ($('topDaily')) $('topDaily').onclick = () => { dailyOpen = true; renderDaily(); };
  if ($('topSet')) $('topSet').onclick = () => { tab = 'settings'; sel = null; renderShell(); };
  if ($('topPlus')) $('topPlus').onclick = () => { tab = 'packs'; sel = null; renderShell(); };
  if ($('goUpgrade')) $('goUpgrade').onclick = () => { tab = 'upgrade'; renderShell(); };
  if ($('goLegacy')) $('goLegacy').onclick = () => { tab = 'legacy'; renderShell(); };
  if (tab === 'home' && !dailyPrompted) { dailyPrompted = true; if (loginState().ready) dailyOpen = true; }
  startHomeTimer(); renderDaily(); renderLegProfile(); placeClub();
  if (typeof msg === 'string') toast(msg);
}

/* =================== MATCH =================== */
const QUARTER_SECONDS = 90;
const keys = new Set();

function buildMatch(groundId) {
  const low = settings.graphics !== 'high', potato = settings.graphics === 'shit';
  const gnd = groundById(groundId);
  const scene = new THREE.Scene();
  const sky = gnd.night ? 0x07101c : 0x8ec5ea;
  scene.background = new THREE.Color(sky);
  if (!potato) scene.fog = new THREE.Fog(sky, gnd.night ? 340 : 300, gnd.night ? 820 : 680);
  scene.add(new THREE.HemisphereLight(gnd.night ? 0xb7c9ff : 0xfff6e4, gnd.night ? 0x243044 : 0x5a6f5c, gnd.night ? .85 : .95));
  const sun = new THREE.DirectionalLight(gnd.night ? 0xfff1cc : 0xfff3e0, gnd.night ? .9 : 1.15); sun.castShadow = !low;
  Object.assign(sun.shadow.camera, {left: -52, right: 52, top: 52, bottom: -52, near: 1, far: 280});
  sun.shadow.mapSize.set(1024, 1024); sun.shadow.bias = -.0004;
  scene.add(sun, sun.target);
  const oval = makeOval(low, gnd, CLUBS[save.club], oppClub); scene.add(oval);
  const cam = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 1, potato ? 260 : 600);

  const ball3 = makeBallModel(); ball3.scale.setScalar(1.25); scene.add(ball3);
  const mk = (d, i, team) => {
    const hs = d.pos === 'RUC' ? 1.07 : d.pos === 'DEF' ? 1.03 : d.pos === 'FWD' ? 1.02 : .98;
    const model = makePlayer(team === 'home' ? KIT_HOME : KIT_AWAY, team === 'home' ? jumperOf(d, i) : i + 1, d.name, hs, {looks: LOOKS_READY.get(d.photo), boot: team === 'home' ? bootOf(d) : 0x050607});
    if (d.photo) ensureLooks(d.photo, L => { if (model.parent) applyLooks(model, L); });
    scene.add(model);
    const spot = (team === 'home' ? HOME_SPOTS : AWAY_SPOTS)[i];
    const hx = spot[0] * (A / 82.5), hz = spot[1] * (B / 67.5);
    return {team, d, idx: i, model, hx, hz, x: hx, z: hz, vx: 0, vz: 0,
      face: team === 'home' ? 0 : Math.PI, stam: 1, exh: false, stun: 0, cd: 0, lock: 0, carryT: 0, decide: 1, box: {g: 0, m: 0, t: 0}};
  };
  const home = SQUAD.map((d, i) => mk(condScale(boosted(d)), i, 'home')), away = OPP.map((d, i) => mk(d, i, 'away'));
  const marker = (r0, r1, col) => {
    const o = new THREE.Mesh(new THREE.RingGeometry(r0, r1, 40), new THREE.MeshBasicMaterial({color: col, transparent: true, opacity: .95, side: THREE.DoubleSide, depthWrite: false}));
    o.rotation.x = -Math.PI / 2; o.position.y = .06; o.visible = false; o.renderOrder = 5; scene.add(o); return o;
  };
  const hover = marker(.85, 1.1, 0x57d6ff), aim = marker(1.2, 1.7, 0xff9f1c);
  return {
    hover, aim, mouse: null, ballup: null, tap: null,
    scene, cam, sun, ball3, home, away, all: home.concat(away), active: 0,
    ball: {ph: 'loose', x: 0, z: 0, h: 0, vx: 0, vz: 0, vh: 0, dur: 1, apex: 0, el: 0, kind: 'kick', desc: false, untouched: true},
    carrier: null, lastKicker: null, lastTouch: 'home', receiver: null, kickLock: 0, pickupCD: 0, marks: new Set(),
    wind: null, charging: false, charge: 0, score: {home: {g: 0, b: 0}, away: {g: 0, b: 0}},
    pending: null, dead: 0, qtr: 1, time: QUARTER_SECONDS, over: false, paused: false, prematch: true, focus: new THREE.Vector3(0, 0, 0), switchT: 0, spin: 0,
    life: oval.userData.life, groundId: gnd.id
  };
}

function showLineup() {
  const hc = CLUBS[save.club], ac = oppClub, g = groundById(ms.groundId);
  const avg = arr => sideRating(arr);
  const row = (p, slot) => `<div class="lu"><img src="${p.photo || ''}" alt="" onerror="this.style.display='none'"><b>${p.rating}</b><span>${p.name}</span><small>${slot}</small></div>`;
  const o = $('overlay');
  const awayShort = ms.ch && ms.ch.allstar ? 'AA' : ac.short, awayName = ms.ch && ms.ch.allstar ? 'All-Australian' : ac.name;
  const objs = ms.ch ? `<div class="preobj">${(ms.ch.context ? `<b>${ms.ch.context}</b>` : '')}${bontObjs(ms.ch.node).map(o => `<span>${o.t}</span>`).join('')}</div>` : '';
  o.innerHTML = `<div class="pre">
    <div class="prehead">
      <div class="preside" style="background:linear-gradient(135deg,${hc.a},${hc.b})"><b class="it">${hc.short}</b><small>${hc.name}</small><em>${teamRating() + coachRating()} OVR</em></div>
      <div class="prevs"><small>${g.name} · ${g.city}</small><b class="it">VS</b><small>${diffNow().name}</small></div>
      <div class="preside" style="background:linear-gradient(135deg,${ac.a},${ac.b})"><b class="it">${awayShort}</b><small>${awayName}</small><em>${avg(OPP)} OVR</em></div>
    </div>
    <div class="precols"><div>${SQUAD.map((p, i) => row(p, SLOTS[i])).join('')}</div><div>${OPP.map((p, i) => row(p, SLOTS[i])).join('')}</div></div>
    ${objs}
    <button class="go2 it" id="preGo">KICK OFF</button>
  </div>`;
  o.classList.remove('hide');
  $('preGo').onclick = () => { o.classList.add('hide'); o.innerHTML = ''; ms.prematch = false; centreBounce(true); updateScore(); showBanner('QUARTER 1', '#ffffff'); };
}
function startMatch(ev) {
  stopAnthem();
  ev = ev && ev.t ? ev : null;
  const prep = eatPrep();
  matchPrepFlat = prep.flat || 0;
  const su = evSetup(ev), op = makeOpponent(su.extra, su.club); OPP = op.players; oppClub = CLUBS[op.club]; KIT_AWAY = awayKit(op.club);
  document.querySelector('#score .home b').textContent = CLUBS[save.club].short; document.querySelector('#score .away b').textContent = (ev && ev.t === 'bont' && BONT_FLAT[ev.i].allstar) ? 'AA' : oppClub.short;
  const gid = su.ground || (save && groundOpen(save.ground) && save.ground) || 'mcg';
  ms = buildMatch(gid); ms.ev = ev; ms.st = {}; ms.fx = coachNow() ? Object.assign({}, coachNow().fx) : {}; ms.stamDrain = {easy: .8, normal: 1, hard: 1.55, insane: 1.9}[diffId()] || 1;
  if (prep.energy) ms.stamDrain *= 0.72;
  ms.insure = prep.insure ? 1 : 0;
  if (prep.flat || prep.energy || prep.insure) persist();
  updateHint(); keys.clear();
  if (ev && ev.t === 'bont') { const n = BONT_FLAT[ev.i]; ms.ch = {node: n, objs: bontObjs(n), context: n.context, allstar: !!n.allstar, deficit: !!n.deficit, defApplied: 0}; }
  mode = 'match'; document.body.classList.remove('onhome'); clearInterval(homeTimer); $('menu').classList.add('hide'); $('hud').classList.remove('hide');
  const cvc = $('clubcv'); if (cvc) cvc.classList.add('hide');
  R.setClearColor(ms.scene.background.getHex(), 1);
  ms.cam.aspect = innerWidth / innerHeight; ms.cam.updateProjectionMatrix();
  setActive(0); updateScore();
  const tag = $('diffTag'); if (tag) { tag.textContent = diffNow().name; tag.className = diffId(); }
  $('popups').innerHTML = '';
  showLineup();
}
function startOnlineMatch(info) {
  stopAnthem();
  const pack = list => (list || []).slice(0, 18).map(p => ({id: p.id, name: p.name, full: p.name, rating: p.rating, kic: p.kic, mar: p.mar, spd: p.spd, end: p.end, pos: p.pos || 'MID', photo: '', club: 0, moves: []}));
  const keepSquad = SQUAD, keepOpp = OPP, keepClub = save.club, keepKit = KIT_HOME;
  SQUAD = pack(info.home); OPP = pack(info.away);
  save.club = info.homeClub | 0;
  if (CLUBS[save.club]) KIT_HOME = kitOf(CLUBS[save.club]);
  oppClub = CLUBS[info.awayClub] || CLUBS[0] || {short: 'AWY', name: 'Away', a: '#222', b: '#fff'};
  KIT_AWAY = awayKit(info.awayClub | 0);
  ms = buildMatch(info.ground || 'mcg');
  SQUAD = keepSquad; OPP = keepOpp; save.club = keepClub; KIT_HOME = keepKit;
  ms.online = {side: info.side, id: info.id};
  ms.prematch = false; ms.ev = null; ms.st = {}; ms.fx = {};
  mode = 'match'; document.body.classList.remove('onhome'); clearInterval(homeTimer);
  $('menu').classList.add('hide'); $('hud').classList.remove('hide'); $('overlay').classList.add('hide');
  const cvc = $('clubcv'); if (cvc) cvc.classList.add('hide');
  R.setClearColor(ms.scene.background.getHex(), 1);
  ms.cam.aspect = innerWidth / innerHeight; ms.cam.updateProjectionMatrix();
  const hb = document.querySelector('#score .home b'), ab = document.querySelector('#score .away b');
  if (hb) hb.textContent = (CLUBS[info.homeClub] || {}).short || 'HOME';
  if (ab) ab.textContent = oppClub.short || 'AWAY';
  const tag = $('diffTag'); if (tag) { tag.textContent = 'ONLINE'; tag.className = ''; }
  keys.clear(); $('popups').innerHTML = ''; updateScore();
  const hint = $('hint'); if (hint) hint.textContent = 'WASD steers · let go and he chases the ball · Hold Space to kick where you are aiming · F handpass · T tackle · Tab switches · Esc leaves';
}
function quitMatch() {
  stopAnthem();
  if (ms) { ms.scene.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach(m => { if (m.map) m.map.dispose(); m.dispose(); }); }); }
  const back = ms && ms.ev ? 'events' : 'home'; if (ms && ms.ev) EVX.sec = ms.ev.t;
  matchPrepFlat = 0;
  ms = null; tab = back; screen = 'home'; showMenu();
}

const stat = (team, k) => {
  if (team === 'home' && ms && ms.st) ms.st[k] = (ms.st[k] || 0) + 1;
  if (team === 'home' && ms && ms.ch) {
    const map = {kicks: 'kick', hand: 'hand', marks: 'mark', tackles: 'tackle'};
    const p = (k === 'tackles' ? ms.home.find(h => h.stun <= 0) : null) || ms.carrier || ms.lastKicker || ms.home[ms.active];
    if (map[k] && p) bontTouch(map[k], p.team === 'home' ? p : ms.home[ms.active]);
  }
};
const A_ = t => t === 'home' ? 1 : -1;               // attack direction
const mates = p => p.team === 'home' ? ms.home : ms.away;
const opps = p => p.team === 'home' ? ms.away : ms.home;
function setActive(p) {
  const pl = typeof p === 'number' ? ms.home[p] : p; if (!pl || pl.team !== 'home') return;
  ms.active = pl.idx; ms.home.forEach(h => h.model.userData.ring.visible = h === pl);
  $('whoName').textContent = pl.d.name.toUpperCase() + '  ' + pl.d.rating;
}
const active = () => ms.home[ms.active];
function nearest(pt, group, excl) { let b = null, bd = 1e9; for (const p of group) { if (p === excl) continue; const d = dist(p, pt); if (d < bd) { bd = d; b = p; } } return b; }
function landing() { const b = ms.ball; if (b.ph !== 'flight') return b; const rem = Math.max(0, b.dur - b.el); return {x: b.x + b.vx * rem, z: b.z + b.vz * rem}; }

/* ---------- input ---------- */
function inputDir() {
  let dx = 0, dz = 0;
  if (keys.has(bind.up)) dz -= 1;          // screen up = -z
  if (keys.has(bind.down)) dz += 1;
  if (keys.has(bind.left)) dx -= 1;
  if (keys.has(bind.right)) dx += 1;
  const l = Math.hypot(dx, dz); return l ? [dx / l, dz / l] : [0, 0];
}
addEventListener('keydown', e => {
  if (!ms || mode !== 'match') return;
  if (e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
  if (e.code === bind.pause) { if (ms.prematch || e.repeat || ms.over) return; if (ms.online) { if (window.AFLNet) AFLNet.leave(true); return; } togglePause(); return; }
  if (ms.online) { if (!e.repeat) keys.add(e.code); return; }
  if (ms.prematch) { if (!e.repeat && (e.code === bind.kick || e.code === 'Enter') && $('preGo')) $('preGo').click(); return; }
  if (ms.drill) { if (!e.repeat && !ms.over) keys.add(e.code); return; }
  if (e.repeat || ms.paused || ms.over) return;
  if (ms.ballup) { if (e.code === bind.kick || e.code === 'Enter') resolveBallUp(); return; }
  keys.add(e.code);
  if (ms.setshot) {
    if (!ms.setshot.auto && !ms.setshot.fired && e.code === bind.kick && ms.setshot.phase === 'line') ms.setshot.charging = true;
    return;
  }
  if (e.code === bind.nearest) setActive(nearest(ms.ball, ms.home));
  else if (e.code === bind.cycle) setActive(ms.home[(ms.active + 1) % ms.home.length]);
  else if (e.code === bind.handpass) userHandpass();
  else if (e.code === bind.tackle) userTackle();
  else if (e.code === bind.move) userMove();
  else if (e.code === bind.punt) { if (!ms.pending && !ms.wind && ms.carrier === active()) userKick(.62); }
  else if (e.code === bind.kick && !ms.pending && !ms.wind && ms.carrier === active()) { ms.charging = true; ms.charge = 0; }
});
addEventListener('keyup', e => {
  keys.delete(e.code);
  if (!ms || mode !== 'match' || ms.drill || ms.online) return;
  if (ms.setshot) { if (e.code === bind.kick) releaseSetShot(); return; }
  if (e.code === bind.kick && ms.charging) { const p = Math.max(.2, ms.charge); ms.charging = false; ms.charge = 0; userKick(p); }
});
addEventListener('blur', () => keys.clear());

/* ---------- movement ---------- */
function movePlayer(p, dx, dz, sprint, scale, dt) {
  p.stun = Math.max(0, p.stun - dt); p.cd = Math.max(0, p.cd - dt); p.lock = Math.max(0, p.lock - dt);
  p.fendT = Math.max(0, (p.fendT || 0) - dt); p.evadeT = Math.max(0, (p.evadeT || 0) - dt); p.mvcd = Math.max(0, (p.mvcd || 0) - dt);
  if (p.stun > 0) { dx = dz = 0; sprint = false; }
  const len = Math.hypot(dx, dz), want = sprint && !p.exh && len > .1;
  if (want) { const drain = p.team === 'home' && ms && ms.stamDrain ? ms.stamDrain : 1; p.stam -= .30 * (1.3 - p.d.end / 100) * dt * (1 - cfx(p, 'stamina')) * drain * (p.team === 'home' ? (2 - condMult(p.d.id)) : 1); if (p.stam <= 0) { p.stam = 0; p.exh = true; } }
  else { p.stam = Math.min(1, p.stam + .12 * dt * (1 + cfx(p, 'recover'))); if (p.exh && p.stam > .25) p.exh = false; }
  const top = (6.5 + (p.d.spd - 70) * .12) * scale * (want ? 1.3 : 1);   // 72 pace ~6.7 m/s, 94 pace ~9.3 m/s
  const l = Math.max(1, len), tx = dx / l * top, tz = dz / l * top, e = Math.min(1, (4 + p.d.spd * .07) * dt);
  p.vx += (tx - p.vx) * e; p.vz += (tz - p.vz) * e;
  const nx = p.x + p.vx * dt, nz = p.z + p.vz * dt;
  if (inOval(nx, nz, 1)) { p.x = nx; p.z = nz; }
  else if (inOval(nx, p.z, 1)) { p.x = nx; p.vz = 0; }
  else if (inOval(p.x, nz, 1)) { p.z = nz; p.vx = 0; }
  else { p.vx = p.vz = 0; }
  if (Math.hypot(p.vx, p.vz) > .6) p.face += wrap(Math.atan2(p.vz, p.vx) - p.face) * Math.min(1, 12 * dt);
}
function goTo(p, x, z, sprint, scale, dt) {
  const dx = x - p.x, dz = z - p.z, d = Math.hypot(dx, dz);
  if (d < .6) { movePlayer(p, 0, 0, false, scale, dt); return; }
  movePlayer(p, dx / d * Math.min(1, d / 3), dz / d * Math.min(1, d / 3), sprint, scale, dt);
}

/* ---------- disposals ---------- */
function act(p, n, d) { p.model.userData.act = {n, t: 0, d: d || ACT[n]}; }
function release(p) { ms.carrier = null; ms.lastKicker = p; ms.kickLock = .8; ms.marks.clear(); }
/* Kick distance is real metres on the 175 m oval: ~34 m at KIC 49, ~53 m at 70, ~75 m at 94. Hang time matches that distance. */
const movePlus = id => !!(save && save.mv && save.mv.plus && save.mv.plus[id]);
const kickMax = p => (34 + (p.d.kic - 49) * .92) * (1 + (hasMove(p, 'torp') ? (movePlus('torp') ? .25 : .15) : 0) + cfx(p, 'kickRange'));
const kickRange = (p, power) => 14 + (kickMax(p) - 14) * power;
const kickPower = (p, d) => clamp((d - 14) / (kickMax(p) - 14), .2, 1);
const kickTime = range => .5 + range / 21;
function launchKick(p, aim, power, ai) {
  const skill = p.d.kic / 100, b = ms.ball, atk = A_(p.team);
  const dgx = GOAL_X * atk - p.x, atGoal = dgx * atk > 0 && Math.abs(dgx) < 78 && Math.abs(wrap(aim - Math.atan2(-p.z, dgx))) < (ai ? .32 : .32 + clamp((p.d.rating - 45) / 55, 0, 1) * .4);
  let cv = null, err = ((1 - skill) * .35 + (ai ? .12 : 0)) * (.4 + .6 * power), a0 = aim;
  if (ai && p.team === 'away') err *= diffAI().kickErr;
  if (atGoal) {
    err *= 1 - cfx(p, 'goalAcc');
    if (!ai) { const as = clamp((p.d.rating - 45) / 55, 0, 1); err *= 1 - as * .7; cv = {tx: GOAL_X * atk, tz: rnd(-3, 3), k: as * 2.2}; }
    if (hasMove(p, 'banana') && Math.abs(p.z) > 9) { err *= .4; a0 = aim + wrap(Math.atan2(-p.z, dgx) - aim) * .6; popup('BANANA!', p, '#ffd23a'); }
  }
  const ang = a0 + rnd(-1, 1) * err;
  const range = kickRange(p, power), dur = kickTime(range), sp = range / dur;
  Object.assign(b, {ph: 'flight', kind: 'kick', dur, apex: 4 + range * .2, el: 0, desc: false, untouched: true, vx: Math.cos(ang) * sp, vz: Math.sin(ang) * sp, h: 0, vh: 0, curve: cv});
  release(p); ms.receiver = null; ms.lastTouch = p.team;
  return {ang, range};
}
function launchHandpass(p, target, aim) {
  stat(p.team, 'hand');
  const skill = p.d.kic / 100, b = ms.ball;
  let ang = aim, range = 9, dur = .38;
  if (target) {
    const d = dist(target, b); dur = clamp(d / 16, .4, .95) * (hasMove(p, 'bullet') ? .65 : 1);
    const lx = target.x + target.vx * dur, lz = target.z + target.vz * dur;
    ang = Math.atan2(lz - b.z, lx - b.x); range = Math.hypot(lx - b.x, lz - b.z);
  }
  ang += rnd(-1, 1) * (1 - skill) * .08 * (hasMove(p, 'bullet') ? 0 : 1) * (1 - cfx(p, 'handAcc'));
  const sp = range / dur;
  Object.assign(b, {ph: 'flight', kind: 'handpass', dur, apex: 1.6, el: 0, desc: false, untouched: true, vx: Math.cos(ang) * sp, vz: Math.sin(ang) * sp, h: 0, vh: 0});
  release(p); ms.receiver = target; ms.lastTouch = p.team; act(p, 'handpass');
}
/* A kick starts with the ball dropping from the hands; the boot meets it ~0.35 s later. */
function beginKick(p, aim, power, ai) {
  if (ms.wind || ms.carrier !== p) return;
  stat(p.team, 'kicks');
  ms.wind = {p, aim, power, ai, t: 0, d: hasMove(p, 'snap') ? .13 : .36}; act(p, 'kick');
}
function aimAngle(p) { const [dx, dz] = inputDir(); return dx || dz ? Math.atan2(dz, dx) : p.face; }
function userKick(power) {
  if (!ms || ms.drill || ms.pending || ms.wind || ms.carrier !== active()) return;
  beginKick(active(), aimAngle(active()), power, false);
}
function userHandpass() {
  if (ms.pending || ms.wind || ms.carrier !== active()) return;
  const h = active(), aim = aimAngle(h); let t = null, best = 1e9;
  for (const p of ms.home) {
    if (p === h) continue; const d = dist(p, h); if (d < 2 || d > 20) continue;
    const diff = Math.abs(wrap(Math.atan2(p.z - h.z, p.x - h.x) - aim)); if (diff > .9) continue;
    const s = diff + d / 60; if (s < best) { best = s; t = p; }
  }
  launchHandpass(h, t, aim); if (t) setActive(t);
}
/* nearest home teammate to a screen point (used for click-to-pass and the hover ring) */
const _v = new THREE.Vector3();
function pickMate(cx, cy) {
  const me = active(); let best = null, bd = 90;
  for (const p of ms.home) {
    if (p === me) continue; _v.set(p.x, 1, p.z).project(ms.cam); if (_v.z > 1) continue;
    const d = Math.hypot((_v.x * .5 + .5) * innerWidth - cx, (-_v.y * .5 + .5) * innerHeight - cy); if (d < bd) { bd = d; best = p; }
  }
  return best;
}
/* Handpass anyone within 16 m; further away it becomes a kick, with power set from the kicker's range and aimed ahead of the runner */
function passTo(t) {
  const h = active();
  if (!t || t === h || t.team !== 'home' || ms.pending || ms.wind || ms.carrier !== h) return;
  const d = dist(t, h);
  if (d <= 16) { launchHandpass(h, t, Math.atan2(t.z - h.z, t.x - h.x)); setActive(t); return; }
  let lx = t.x, lz = t.z;
  for (let i = 0; i < 2; i++) {
    const range = kickRange(h, kickPower(h, Math.hypot(lx - h.x, lz - h.z))), T = kickTime(range) + .36;
    lx = t.x + t.vx * T * .8; lz = t.z + t.vz * T * .8;
  }
  beginKick(h, Math.atan2(lz - h.z, lx - h.x), kickPower(h, Math.hypot(lx - h.x, lz - h.z)), false);
}
canvas.addEventListener('mousedown', e => {
  if (e.button !== 0 || !ms || mode !== 'match' || ms.paused || ms.over) return;
  if (ms.ballup) return resolveBallUp();
  const t = pickMate(e.clientX, e.clientY); if (t) passTo(t);
});
canvas.addEventListener('mousemove', e => {
  if (!ms) return;
  ms.mouse = {x: e.clientX, y: e.clientY};
  const s = ms.setshot;
  if (s && !s.auto && !s.fired && (s.phase === 'line' || s.phase === 'settle' || s.phase === 'walk')) s.aim = clamp(s.aim + (e.movementX || 0) * .022 * A_(s.p.team), -10, 10);
});
canvas.addEventListener('mouseleave', () => { if (ms) ms.mouse = null; });
function userMove() {
  const a = active(); if (!a || a.stun > 0 || a.tackled || ms.pending || ms.ballup) return;
  const id = (a.d.moves || []).find(m => MV[m].kind === 'active');
  if (!id) return popup('No signature move', a, '#fff');
  if (a.mvcd > 0) return popup('Recharging…', a, '#fff');
  a.mvcd = MV[id].cd;
  if (id === 'fend') { a.fendT = .7; act(a, 'fend'); popup('FEND OFF!', a, '#ffd23a'); }
  else {
    a.evadeT = .6; const [dx, dz] = inputDir(), ang = dx || dz ? Math.atan2(dz, dx) : a.face + 1.4;
    a.vx += Math.cos(ang) * 7; a.vz += Math.sin(ang) * 7; act(a, 'sidestep'); popup('SIDESTEP!', a, '#ffd23a');
  }
}
function userTackle() {
  const a = active(); if (ms.pending || a.cd > 0 || a.stun > 0) return;
  const c = ms.carrier;
  if (c && c.team === 'away' && dist(a, c) <= 3.6) attemptTackle(a, c);
  else { a.cd = .9; act(a, 'tackle'); }                // swing and miss: still dives
}
function attemptTackle(def, holder) {
  if (def.cd > 0 || def.stun > 0 || ms.carrier !== holder || holder.team === def.team || ms.setshot) return;
  def.cd = 1.2; act(def, 'tackle');
  const chance = clamp(.45 + (def.d.spd - holder.d.spd) * .004 + cfx(def, 'tackle') + (hasMove(def, 'lock') ? (movePlus('lock') ? .3 : .2) : 0) - (holder.evadeT > 0 ? .35 : 0) + (def.team === 'away' ? (diffAI().tackle - 1) * .12 : 0), .08, .92);
  if (holder.fendT > 0) {                       // fended off: the tackler is knocked off balance
    def.stun = 1.1; def.vx = def.vz = 0; act(holder, 'fend'); popup('FENDED OFF!', holder, holder.team === 'home' ? '#ffd23a' : '#fff'); return;
  }
  if (Math.random() < chance) {
    stat(def.team, 'tackles'); if (def.box) def.box.t++;
    def.x = holder.x - Math.cos(def.face) * .7; def.z = holder.z - Math.sin(def.face) * .7; def.vx = def.vz = 0;
    const prior = (holder.carryT || 0) > 1.45;
    if (fromBehind(def, holder) && Math.random() < .55) { awardFreeKick(holder, def, 'IN THE BACK'); return; }
    if (Math.random() < .2) { awardFreeKick(holder, def, 'HIGH TACKLE'); return; }
    if (prior && Math.random() < .72) {
      holder.model.userData.side = Math.random() < .5 ? 1 : -1;
      act(def, 'wrap', 1.0); awardFreeKick(def, holder, 'HOLDING THE BALL', 'tackled'); return;
    }
    const b = ms.ball; ms.carrier = null; ms.lastKicker = null; ms.kickLock = 0; ms.marks.clear();
    Object.assign(b, {ph: 'loose', x: holder.x, z: holder.z, h: 0, vh: 3, vx: Math.cos(holder.face) * 3 + rnd(-1.5, 1.5), vz: Math.sin(holder.face) * 3 + rnd(-1.5, 1.5), untouched: false});
    holder.stun = 1.3 + (hasMove(def, 'lock') ? (movePlus('lock') ? .85 : .5) : 0); holder.lock = 1.2; def.stun = .9; holder.model.userData.side = Math.random() < .5 ? 1 : -1;
    def.x = holder.x - Math.cos(def.face) * .6; def.z = holder.z - Math.sin(def.face) * .6; def.vx = def.vz = 0;
    act(def, 'wrap', 1.0); act(holder, 'tackled', 1.9); popup('TACKLE!', def, '#fff');
    if (holder.team === 'home') { const n = nearest(b, ms.home, holder); if (n) setActive(n); }
  } else { def.stun = .5; popup('Missed', def, '#fff'); }
}
function fromBehind(def, holder) {
  const fx = Math.cos(holder.face), fz = Math.sin(holder.face);
  const bx = holder.x - def.x, bz = holder.z - def.z, d = Math.hypot(bx, bz) || 1;
  return (bx / d) * fx + (bz / d) * fz > .45;
}
function awardFreeKick(taker, offender, reason, fall) {
  if (!ms || !taker || ms.over || ms.setshot) return false;
  ms.wind = null; ms.charging = false; ms.charge = 0;
  ms.kickLock = 0; ms.lastKicker = null; ms.marks.clear(); ms.receiver = null; ms.tap = null;
  if (offender && offender !== taker) {
    offender.stun = Math.max(offender.stun || 0, 1.5);
    offender.vx = offender.vz = 0;
    act(offender, fall || 'stumble', fall === 'tackled' ? 1.9 : 1.0);
  }
  taker.stun = 0; taker.lock = 0; taker.vx = taker.vz = 0;
  const b = ms.ball; b.x = taker.x; b.z = taker.z; b.h = 0; b.vh = b.vx = b.vz = 0;
  gather(taker);
  if (taker.team === 'home') bontTouch('free', taker);
  popup(reason, taker, '#ff5a64');
  if (isSetShotSpot(taker)) beginSetShot(taker, reason);
  else showBanner(reason, '#ff5a64');
  return true;
}
function gather(p) {
  ms.tap = null; ms.carrier = p; ms.receiver = null; ms.marks.clear(); ms.ball.ph = 'held'; ms.ball.vx = ms.ball.vz = ms.ball.h = ms.ball.vh = 0;
  p.carryT = 0; p.decide = rnd(.9, 1.8); ms.lastTouch = p.team; if (p.team === 'home') setActive(p);
}

/* ---------- AI ---------- */
function roleOf(p) {
  if (p.idx <= 2) return 'FB';
  if (p.idx <= 5) return 'HB';
  if (p.idx === 6 || p.idx === 11) return 'WING';
  if (p.idx === 9) return 'RUC';
  if (p.idx >= 15) return 'FF';
  if (p.idx >= 12) return 'HF';
  return 'MID';
}
function bandOf(role, atk) {
  const b = {FB: [-72, -26], HB: [-58, -4], MID: [-40, 40], WING: [-50, 50], RUC: [-28, 36], HF: [4, 64], FF: [32, 74]}[role];
  return atk > 0 ? b : [-b[1], -b[0]];
}
function playSpot() {
  const b = ms.ball, c = ms.carrier;
  if (b.ph === 'flight') return landing();
  return c ? {x: c.x, z: c.z} : {x: b.x, z: b.z};
}
function station(p) {
  const atk = A_(p.team), role = roleOf(p), spot = playSpot();
  const we = ms.carrier && ms.carrier.team === p.team;
  const [lo, hi] = bandOf(role, atk);
  const wide = Math.sign(p.hz) || (p.idx % 2 ? 1 : -1);
  const lane = role === 'WING' ? wide * 44 : role === 'RUC' ? 0 : role === 'MID' ? wide * 8 : role === 'FB' || role === 'FF' ? wide * (Math.abs(p.hz) < 8 ? 2 : 15) : wide * 24;
  let x;
  if (we) {
    if (role === 'FF') x = spot.x + atk * (Math.abs(p.hz) < 8 ? 16 : 26);
    else if (role === 'HF' || role === 'WING') x = spot.x + atk * 12;
    else if (role === 'MID') x = spot.x + atk * (p.idx === 8 ? 14 : -9);
    else if (role === 'RUC') x = spot.x - atk * 6;
    else x = spot.x - atk * (role === 'FB' ? 30 : 16);
  } else if (role === 'FF') x = atk * 58;
  else if (role === 'HF') x = spot.x + atk * 16;
  else if (role === 'WING') x = spot.x - atk * 2;
  else if (role === 'MID' || role === 'RUC') x = spot.x - atk * 7;
  else x = spot.x - atk * (role === 'FB' ? 18 : 12);
  const slop = p.team === 'away' && diffAI().decide > 1.4 ? 6 : 0;
  return {x: clamp(x, Math.min(lo, hi), Math.max(lo, hi)), z: clamp(lane + ((p.idx % 3) - 1) * 4 + slop * ((p.idx % 2) ? 1 : -1), -52, 52)};
}
function isPresser(p, target) {
  const role = roleOf(p);
  if (role === 'FF' || role === 'FB' || role === 'WING') return false;
  const D = p.team === 'away' ? diffAI() : null;
  const n = D ? (D.hunt ? 3 : D.chase >= 4 ? 2 : 1) : 2;
  if (role === 'HF') return dist(p, target) < 14;
  const pool = mates(p).filter(m => { const r = roleOf(m); return r === 'MID' || r === 'RUC' || r === 'HB'; });
  const closer = pool.filter(m => m !== p && dist(m, target) < dist(p, target)).length;
  if (role === 'HB') return closer === 0 && dist(p, target) < 22;
  return closer < n && dist(p, target) < (D && D.hunt ? 36 : 26);
}
function wantsContest(p) {
  const b = ms.ball, c = ms.carrier;
  if (b.ph === 'held' && c) return c.team !== p.team && isPresser(p, c);
  if (b.ph !== 'flight' && b.ph !== 'loose') return false;
  const t = playSpot(), role = roleOf(p), atk = A_(p.team);
  const [lo, hi] = bandOf(role, atk);
  const inBand = t.x >= Math.min(lo, hi) - 10 && t.x <= Math.max(lo, hi) + 10;
  if (!inBand && role !== 'MID' && role !== 'RUC') return false;
  const pool = mates(p).filter(m => {
    const r = roleOf(m);
    if (role === 'MID' || role === 'RUC') return r === 'MID' || r === 'RUC';
    if (role === 'WING') return r === 'WING' && Math.sign(m.hz) === Math.sign(p.hz);
    return r === role;
  });
  const closer = pool.filter(m => m !== p && dist(m, t) < dist(p, t) - .4).length;
  return closer < (role === 'MID' || role === 'RUC' ? 2 : 1);
}
const rank = (p, pt) => { const d = dist(p, pt); return mates(p).filter(m => m !== p && dist(m, pt) < d).length; };
function bestPass(p) {
  let t = null, best = 1e9; const atk = A_(p.team);
  for (const m of mates(p)) {
    if (m === p) continue; const d = dist(m, p); if (d < 4 || d > 32) continue;
    const ahead = (m.x - p.x) * atk; const open = Math.min(...opps(p).map(o => dist(o, m)));
    const s = -ahead * .6 - open * .8 + d * .2; if (s < best) { best = s; t = m; }
  }
  return t;
}
function carrierAI(p, dt) {
  if (ms.wind && ms.wind.p === p) { movePlayer(p, 0, 0, false, 1, dt); return; }
  p.carryT += dt;
  const D = p.team === 'away' ? diffAI() : {decide: 1, hand: 1, shot: 1, sprint: 1, press: 5};
  const atk = A_(p.team), gx = GOAL_X * atk, dg = Math.hypot(gx - p.x, p.z);
  const press = opps(p).filter(o => dist(o, p) < D.press);
  if (p.carryT > .7 * D.decide && dg < Math.min(55, kickMax(p) - 4) * D.shot && Math.abs(p.z) < 36) { beginKick(p, Math.atan2(-p.z * .9, gx - p.x), Math.max(.4, kickPower(p, dg + 4)), true); return; }
  if (p.carryT > .55 * D.decide && !press.length) {
    const lead = bestPass(p);
    if (lead && (lead.x - p.x) * atk > 10 && dist(lead, p) > 14 && Math.random() < .7 * dt) {
      beginKick(p, Math.atan2(lead.z - p.z, lead.x - p.x), Math.max(.3, kickPower(p, dist(lead, p) + 3)), true); return;
    }
  }
  if (p.carryT > .35 * D.decide && !ms.wind && press.length && Math.random() < 2.2 * D.hand * dt) { const t = bestPass(p); if (t) { launchHandpass(p, t, p.face); return; } }
  if (p.carryT > p.decide * D.decide && dg > 58 / Math.max(.7, D.shot)) {
    const t = nearest({x: p.x + atk * 38, z: p.z * .5}, mates(p), p);
    const bomb = D.hand > 1.5 ? .2 : .55;
    if (t && dist(t, p) > 12 && Math.random() < bomb) { beginKick(p, Math.atan2(t.z - p.z, t.x - p.x), Math.max(.3, kickPower(p, dist(t, p) + 4)), true); return; }
    const hp = bestPass(p); if (hp) { launchHandpass(p, hp, p.face); return; }
    p.carryT = 0; p.decide = rnd(.9, 1.8);
  }
  let tx = gx, tz = p.z * .6;
  for (const o of press) { const d = dist(o, p); tx += (p.x - o.x) / d * 12; tz += (p.z - o.z) / d * 12; }
  goTo(p, tx, tz, p.team !== 'away' || D.sprint >= 1, .85, dt);
}
function aiControl(p, dt) {
  const b = ms.ball, c = ms.carrier;
  const D = p.team === 'away' ? diffAI() : null;
  if (ms.tap && ms.tap.p === p && b.ph === 'loose') { goTo(p, ms.tap.x, ms.tap.z, true, .85, dt); return; }
  if (c === p) return carrierAI(p, dt);
  if (b.ph === 'dead') { const z = station(p); goTo(p, z.x, z.z, false, .7, dt); return; }
  if (wantsContest(p)) {
    const t = b.ph === 'held' && c ? c : playSpot();
    const side = dist(p, t) > 7 ? (p.idx % 2 ? 4 : -4) : 0;
    goTo(p, t.x, t.z + side, !D || D.sprint >= 1, .9, dt);
    if (c && c.team !== p.team) {
      const reach = D ? 2.4 + D.tackle * .35 : 2.8;
      if (dist(p, c) < reach && p.cd <= 0 && Math.random() < 1.3 * (D ? D.tackle : 1) * dt) attemptTackle(p, c);
    }
    return;
  }
  const z = station(p);
  goTo(p, z.x, z.z, dist(p, z) > 16, .8, dt);
}

/* ---------- ball ---------- */
function updateBall(dt) {
  const b = ms.ball;
  if (b.ph === 'held') {
    const h = ms.carrier; if (h) { b.x = h.x + Math.cos(h.face) * .55; b.z = h.z + Math.sin(h.face) * .55; }
  } else if (b.ph === 'flight') {
    if (b.kind === 'handpass' && ms.receiver && dist(ms.receiver, b) < 24) {
      const rem = Math.max(.05, b.dur - b.el); b.vx = (ms.receiver.x - b.x) / rem; b.vz = (ms.receiver.z - b.z) / rem;
    }
    if (b.kind === 'kick' && b.curve && Math.hypot(b.curve.tx - b.x, b.curve.tz - b.z) > 4) { const c = b.curve, cur = Math.atan2(b.vz, b.vx), sp = Math.hypot(b.vx, b.vz), na = cur + clamp(wrap(Math.atan2(c.tz - b.z, c.tx - b.x) - cur), -c.k * dt, c.k * dt); b.vx = Math.cos(na) * sp; b.vz = Math.sin(na) * sp; }
    b.el += dt; b.x += b.vx * dt; b.z += b.vz * dt;
    const p = Math.min(1, b.el / b.dur); b.h = 4 * b.apex * p * (1 - p); b.desc = p > .5;
    if (checkBoundary()) return;
    if (p >= 1) {
      const impact = 4 * b.apex / b.dur; b.ph = 'loose'; b.h = 0;
      if (b.kind === 'handpass') { b.vh = 0; b.vx *= .3; b.vz *= .3; } else { b.vh = impact * .38; b.vx *= .45; b.vz *= .45; }
      if (b.kind === 'handpass' && ms.receiver && dist(ms.receiver, b) < 2.6) gather(ms.receiver);
      ms.receiver = null;
    } else tryMarks();
  } else if (b.ph === 'loose') {
    b.x += b.vx * dt; b.z += b.vz * dt;
    if (b.h > 0 || b.vh > 0) {
      b.h += b.vh * dt; b.vh -= 9.8 * dt;
      if (b.h <= 0) { b.h = 0; if (b.vh < -2) { b.vh = -b.vh * .45; b.vx *= .7; b.vz *= .7; } else b.vh = 0; }
    }
    if (b.h === 0) { const f = Math.exp(-2.6 * dt); b.vx *= f; b.vz *= f; if (Math.hypot(b.vx, b.vz) < .3) b.vx = b.vz = 0; }
    if (checkBoundary()) return;
    tryPickup();
  }
}
function tryPickup() {
  const b = ms.ball; if (ms.pickupCD > 0 || b.h > 1.3) return;
  let best = null, bd = 1.9;
  for (const p of ms.all) { if (p === ms.lastKicker && ms.kickLock > 0) continue; if (p.lock > 0 || p.stun > 0) continue; const d = dist(p, b); if (d < bd) { bd = d; best = p; } }
  if (best) gather(best);
}
function tryMarks() {
  const b = ms.ball; if (b.kind !== 'kick' || !b.desc || b.h > 4.6) return;
  const all = ms.all, n = all.length, start = (ms._mk = ((ms._mk | 0) + 1) % n);
  for (let i = 0; i < n; i++) {
    const p = all[(start + i) % n];
    if (p === ms.lastKicker && ms.kickLock > 0) continue;
    if (ms.marks.has(p) || p.stun > 0 || dist(p, b) > 5.5 + (hasMove(p, 'speccy') ? (movePlus('speccy') ? 2.1 : 1.3) : 0)) continue;
    ms.marks.add(p);
    const contested = ms.lastKicker && p.team !== ms.lastKicker.team ? .1 : 0;
    if (Math.random() < .3 + p.d.mar * .006 - contested + (hasMove(p, 'speccy') ? (movePlus('speccy') ? .25 : .15) : 0) - (p.team === 'away' ? (ms.fx.oppMark || 0) : 0)) { gather(p); stat(p.team, 'marks'); if (p.box) p.box.m++; act(p, 'mark'); popup('MARK!', p, p.team === 'home' ? '#ffd23a' : '#fff'); if (isSetShotSpot(p)) beginSetShot(p, 'SET SHOT'); return; }
    b.untouched = false;
    const opp = nearest(p, opps(p));
    if (opp && dist(opp, p) < 3.4 && Math.random() < .36) { awardFreeKick(p, opp, 'PUSH IN THE BACK'); return; }
    popup('Spilled', p, '#fff');
  }
}

/* ---------- scoring / restarts ---------- */
function updateScore() {
  const f = s => `${s.g}.${s.b} (${s.g * 6 + s.b})`;
  $('hs').textContent = f(ms.score.home); $('as').textContent = f(ms.score.away);
  adaptAI();
}
/* FC Mobile style: the scorer's card slides in on the left of the screen for a few seconds. */
function showGoalCard(k, side) {
  const p = k && k.d; if (!p) return;
  const old = $('goalcard'); if (old) old.remove();
  const gb = ms.goalsBy || (ms.goalsBy = {}), key = side + ':' + p.id; gb[key] = (gb[key] || 0) + 1;
  if (k.box) k.box.g++;
  const tt = Math.max(0, Math.ceil(ms.time)), clock = 'Q' + ms.qtr + ' ' + Math.floor(tt / 60) + ':' + String(tt % 60).padStart(2, '0');
  const el = document.createElement('div'); el.id = 'goalcard'; el.className = side;
  el.innerHTML = `<div class="gc-t">${side === 'home' ? 'GOAL!' : 'AWAY GOAL'}</div>${card(p, 170)}<div class="gc-n">${p.full.toUpperCase()}</div><div class="gc-s">${side === 'home' && chantLine() ? chantLine() + ' · ' : ''}⚽ ${gb[key]} goal${gb[key] > 1 ? 's' : ''} · ${clock}</div>`;
  $('hud').appendChild(el); setTimeout(() => { if (el.parentNode) el.remove(); }, 3600);
}
function showBanner(t, c) { const el = $('banner'); el.textContent = t; el.style.color = c; el.classList.remove('show'); void el.offsetWidth; el.classList.add('show'); }
function endPlay(text, color, restart, delay) {
  ms.tap = null;
  showBanner(text, color); ms.ball.ph = 'dead'; ms.carrier = null; ms.wind = null; ms.pending = restart; ms.dead = delay; ms.charging = false; ms.charge = 0;
}
function checkBoundary() {
  const b = ms.ball; if (inOval(b.x, b.z)) return false;
  if (Math.abs(b.x) > A * .84 && Math.abs(b.z) < 9.6) {
    const scorer = b.x > 0 ? 'home' : 'away', own = ms.lastKicker && ms.lastKicker.team === scorer;
    if (Math.abs(b.z) < 3.2 && b.untouched && own) {
      ms.score[scorer].g++; updateScore();
      if (scorer === 'home' && ms.ch && ms.qtr === 4) {
        const hp = ms.score.home.g * 6 + ms.score.home.b, ap = ms.score.away.g * 6 + ms.score.away.b, before = hp - 6;
        if (before <= ap && hp > ap) ms.ch.clutch = 1;
      }
      showGoalCard(ms.lastKicker, scorer); endPlay(scorer === 'home' ? 'GOAL!  +6' : 'AWAY GOAL  +6', scorer === 'home' ? '#ffd23a' : '#ff5a64', {t: 'centre'}, 2.2);
    } else {
      ms.score[scorer].b++; updateScore(); endPlay(scorer === 'home' ? 'BEHIND  +1' : 'AWAY BEHIND  +1', '#ffffff', {t: 'kickin', team: scorer === 'home' ? 'away' : 'home'}, 1.8);
    }
    return true;
  }
  const k = 1 / Math.sqrt((b.x / A) ** 2 + (b.z / B) ** 2), pt = {x: b.x * k * .97, z: b.z * k * .97};
  endPlay('OUT', '#ffffff', {t: 'throw', pt, team: ms.lastTouch === 'home' ? 'away' : 'home'}, 1.1);
  return true;
}
function performRestart(r) {
  ms.pending = null; ms.pickupCD = .3; ms.lastKicker = null; ms.kickLock = 0; ms.marks.clear();
  if (r.t === 'centre') centreBounce(true);
  else if (r.t === 'kickin') {
    const grp = r.team === 'home' ? ms.home : ms.away, gx = -A_(r.team) * (A - 9);
    const p = nearest({x: gx, z: 0}, grp); p.x = gx; p.z = 0; p.vx = p.vz = 0; p.face = r.team === 'home' ? 0 : Math.PI; ms.ball.x = p.x; ms.ball.z = p.z; gather(p);
  } else if (r.t === 'throw') {
    const grp = r.team === 'home' ? ms.home : ms.away, p = nearest(r.pt, grp);
    p.x = r.pt.x; p.z = r.pt.z; p.vx = p.vz = 0; p.face = Math.atan2(-r.pt.z, -r.pt.x); ms.ball.x = p.x; ms.ball.z = p.z; gather(p);
  }
}
function centreBounce(reset) {
  if (reset) for (const p of ms.all) { p.x = p.hx; p.z = p.hz; p.vx = p.vz = 0; p.face = p.team === 'home' ? 0 : Math.PI; p.stam = 1; p.exh = false; p.stun = 0; p.cd = 0; p.lock = 0; }
  Object.assign(ms.ball, {ph: 'loose', x: 0, z: 0, h: 0, vh: 7, vx: 0, vz: 0, untouched: false});
  ms.carrier = null; ms.pickupCD = 1.0; ms.lastKicker = null; ms.wind = null; ms.charging = false; ms.tap = null;
  setActive(nearest({x: 0, z: 0}, ms.home));
  startBallUp();
}

/* ---------- ball-up: time your tap on the sweeping marker; your ruck's MAR widens the zone ---------- */
const BU_SPEED = 3.6, BU_MAX = 4.5;
const buPos = t => .5 + .5 * Math.sin(t * BU_SPEED);
function startBallUp() {
  const ruck = g => g.find(p => p.d.pos === 'RUC') || nearest({x: 0, z: 0}, g), rh = ruck(ms.home), ra = ruck(ms.away);
  rh.x = -2.4; rh.z = 0; rh.face = 0; ra.x = 2.4; ra.z = 0; ra.face = Math.PI;
  setActive(rh);
  Object.assign(ms.ball, {ph: 'dead', x: 0, z: 0, h: 2.6, vh: 0, vx: 0, vz: 0});
  ms.ballup = {t: 0, rh, ra, zw: clamp(.14 + (rh.d.mar - 49) * .0017, .13, .26) * (hasMove(rh, 'ruck') ? 1.5 : 1) * (ms.fx.ruck || 1), zc: rnd(.3, .7)};
  const u = ms.ballup;
  $('buZone').style.left = (u.zc - u.zw / 2) * 100 + '%'; $('buZone').style.width = u.zw * 100 + '%';
  $('buKey').textContent = keyName(bind.kick); $('buName').textContent = rh.d.name.toUpperCase();
  $('buMark').style.left = '50%'; $('ballup').classList.remove('hide');
}
function stepBallUp(dt) {
  const u = ms.ballup; u.t += dt; $('buMark').style.left = buPos(u.t) * 100 + '%';
  if (u.t > BU_MAX) resolveBallUp();
}
function resolveBallUp() {
  const u = ms.ballup; if (!u) return;
  const err = Math.abs(buPos(u.t) - u.zc), half = u.zw / 2, s = err <= half ? 1 - .25 * err / half : Math.max(0, .75 - (err - half) * 2);
  const me = s * .65 + u.rh.d.mar / 100 * .35, ai = rnd(.35, .8) * .65 + u.ra.d.mar / 100 * .35, diff = me - ai;
  const win = diff > .07 ? 'home' : diff < -.07 ? 'away' : null;
  ms.ballup = null; $('ballup').classList.add('hide');
  const b = ms.ball; Object.assign(b, {ph: 'loose', x: 0, z: 0, h: 2.6, vh: 6, vx: rnd(-1.2, 1.2), vz: rnd(-1.2, 1.2), untouched: false}); ms.pickupCD = .5;
  act(u.rh, 'mark'); act(u.ra, 'mark');
  if (win) {                                   // tap the ball to the winning side's nearest mate and drop them in position
    const rk = win === 'home' ? u.rh : u.ra, grp = (win === 'home' ? ms.home : ms.away).filter(p => p !== rk);
    const t = nearest({x: 0, z: 0}, grp), d = Math.max(1, Math.hypot(t.x, t.z)), ux = t.x / d, uz = t.z / d, L = Math.min(d, 9);
    b.vx = ux * L / 1.57; b.vz = uz * L / 1.57;                  // 1.57 s of air time, so it first lands about L metres out
    t.x = ux * (L + 2); t.z = uz * (L + 2); t.vx = t.vz = 0; t.face = Math.atan2(-uz, -ux);
    ms.tap = {p: t, x: ux * L, z: uz * L}; (win === 'home' ? u.ra : u.rh).lock = 1.6;   // the beaten ruck can't scoop it up
  }
  popup(win === 'home' ? (s > .9 ? 'PERFECT TAP!' : 'TAP WON!') : win === 'away' ? 'TAP LOST' : 'CONTESTED', win === 'away' ? u.ra : u.rh, win === 'home' ? '#ffd23a' : '#fff');
  if (win === 'home') bontTouch('tap', u.rh);
}

/* ---------- popups ---------- */
const ANTHEMS = {RIC: 'assets/songs/richmond.mp3', FRE: 'assets/songs/fremantle.mp3', WBD: 'assets/songs/bulldogs.mp3', ADE: 'assets/songs/adelaide.mp3', WCE: 'assets/songs/eagles.mp3'};
let anthem = null;
function stopAnthem() {
  if (!anthem) return;
  try { anthem.pause(); } catch (e) {}
  anthem = null;
}
function winSong() {
  const club = CLUBS[save.club];
  const src = club && ANTHEMS[club.short];
  return src ? {src, name: club.name} : null;
}
function playWinSong(song) {
  stopAnthem();
  if (!song) return;
  const a = new Audio(song.src);
  a.volume = 0.85;
  anthem = a;
  const go = a.play();
  if (go && go.catch) go.catch(() => {});
  return a;
}
function popup(text, p, color) {
  const v = new THREE.Vector3(p.x, 2.3, p.z).project(ms.cam);
  if (v.z > 1) return;
  const el = document.createElement('div'); el.className = 'pop'; el.textContent = text; el.style.color = color;
  el.style.left = (v.x * .5 + .5) * innerWidth + 'px'; el.style.top = (-v.y * .5 + .5) * innerHeight + 'px';
  $('popups').appendChild(el); setTimeout(() => el.remove(), 950);
}

/* ---------- pause / result ---------- */
function togglePause() {
  ms.paused = !ms.paused; const o = $('overlay');
  if (ms.paused) {
    o.innerHTML = `<h2 class="it">PAUSED</h2><button id="resume">RESUME</button><button class="alt" id="quit">QUIT MATCH</button>`;
    o.classList.remove('hide'); $('resume').onclick = togglePause; $('quit').onclick = quitMatch;
  } else o.classList.add('hide');
}
function pickBOG() {
  let best = null, bs = -1, bb = {g: 0, m: 0, t: 0};
  for (const p of ms.home) {
    const b = p.box || {g: 0, m: 0, t: 0};
    const s = b.g * 6 + b.m * 3 + b.t * 3;
    if (!best || s > bs || (s === bs && p.d.rating < best.d.rating)) { best = p; bs = s; bb = b; }
  }
  return {p: best, b: bb};
}
function bogPay(p, b) {
  const raw = b.g * 420 + b.m * 140 + b.t * 140 + (b.g + b.m + b.t ? 0 : 60);
  const swing = clamp((128 - p.d.rating) / 38, .4, 2.5);   // a 55-rated card pays a lot more than a 94
  return money(Math.round(raw * swing));
}
function finishMatch() {
  ms.over = true; keys.clear();
  const h = ms.score.home, a = ms.score.away, hp = h.g * 6 + h.b, ap = a.g * 6 + a.b;
  const res = hp > ap ? ['VICTORY', '#ffd23a'] : hp < ap ? ['DEFEAT', '#ff5a64'] : ['DRAW', '#ffffff'];
  const won = hp > ap, draw = hp === ap, ev = ms.ev, x = save.x, st = ms.st || {}, notes = [];
  let reward = (won ? 1500 : draw ? 700 : 400) + h.g * 50, bontRetry = false;
  const d = {played: 1, won: won ? 1 : 0, goals: h.g, marks: st.marks, tackles: st.tackles, hand: st.hand, kicks: st.kicks};
  const before = claimCount();
  if (ev && ev.t === 'finals') {
    if (won) {
      reward = EVENT.rounds[ev.i].coins + h.g * 50; save.ev.round = ev.i + 1; d.finwin = 1;
      if (ev.i === 2) { if (!save.ev.done) { save.free.gold = (save.free.gold || 0) + 1; notes.push('SERIES COMPLETE! Free GOLD PACK added in Packs'); } else notes.push('SERIES COMPLETE!'); save.ev.done = true; save.ev.round = 0; }
      else notes.push('Round ' + (ev.i + 1) + ' cleared - next: ' + EVENT.rounds[ev.i + 1].n);
    } else { reward = 400 + h.g * 50; save.ev.round = 0; notes.push('ELIMINATED - the series resets'); }
  } else if (ev && ev.t === 'cup') {
    const cp = x.cup, R = CUPR[ev.i];
    if (won) {
      reward = R.coins + h.g * 50; d.cupwin = 1; cp.round = ev.i + 1;
      if (cp.round >= CUPR.length) { cp.runs++; notes.push('PREMIERSHIP CUP WON! ' + giveReward({pack: cp.runs === 1 ? 'gold' : 'silver'}) + ' added in Packs'); cp.round = 0; cp.opps = drawCup(); }
      else notes.push(R.n + ' won - next: ' + CUPR[cp.round].n + ' vs ' + CLUBS[cp.opps[cp.round]].name);
    } else { reward = 400 + h.g * 50; cp.round = 0; cp.opps = drawCup(); notes.push('KNOCKED OUT - a new cup draw has been made'); }
  } else if (ev && ev.t === 'sb') {
    const L = SBL[ev.i], sb = x.sb;
    if (won) {
      sb.streak++; const bonus = Math.min(sb.streak - 1, 5);
      reward = L.coins + h.g * 50 + bonus * 150; sb.pts += L.pts + bonus * 5; d.sbwin = 1;
      notes.push(L.n + ' win: +' + (L.pts + bonus * 5) + ' battle points' + (bonus ? ' (streak bonus x' + sb.streak + ')' : ''));
    } else { sb.streak = 0; reward = 400 + h.g * 50; notes.push('Win streak reset - ' + sb.pts + ' battle points this week'); }
  } else if (ev && ev.t === 'div') {
    const dv = x.div, dn = dv.d;
    dv.g++;
    if (won) { dv.w++; dv.pts += 3; dv.res.push('W'); d.divwin = 1; reward = 600 + (10 - dn) * 150 + h.g * 50; }
    else if (draw) { dv.dr++; dv.pts += 1; dv.res.push('D'); reward = 500 + (10 - dn) * 100 + h.g * 50; }
    else { dv.l++; dv.res.push('L'); reward = 400 + h.g * 50; }
    notes.push('Division ' + dn + ': ' + dv.pts + ' points after ' + dv.g + ' of ' + DIV_GAMES);
    if (dv.g >= DIV_GAMES) {
      const pts = dv.pts, up = pts >= DIV_UP && dn > 1, down = pts <= DIV_DOWN && dn < 10;
      const rw = {coins: down ? 800 : 1500 + (10 - dn) * 400}; if (!down) rw.pack = up ? (dn <= 5 ? 'gold' : 'silver') : 'bronze';
      const t = giveReward(rw); if (up) dv.d = dn - 1; else if (down) dv.d = dn + 1;
      dv.last = 'Last season: ' + pts + ' points - ' + (up ? 'PROMOTED to Division ' + dv.d : down ? 'RELEGATED to Division ' + dv.d : 'stayed in Division ' + dn);
      notes.push('SEASON COMPLETE: ' + dv.last.replace('Last season: ', '') + ' · ' + t);
      dv.g = dv.w = dv.dr = dv.l = dv.pts = 0; dv.res = [];
    }
  } else if (ev && ev.t === 'riv') {
    x.riv.done = 1;
    if (won) { reward = 2200 + h.g * 50; notes.push('RIVALRY WON'); }
    else { reward = 400 + h.g * 50; notes.push('Rivalry used for today'); }
  } else if (ev && ev.t === 'road') {
    const R = ROAD[ev.i];
    if (won) {
      reward = R.coins + h.g * 50; x.road.round = ev.i + 1;
      if (x.road.round >= ROAD.length) { notes.push('ROAD TRIP COMPLETE! ' + giveReward({pack: 'silver'}) + ' added in Packs'); x.road.round = 0; }
      else notes.push(R.n + ' won — next: ' + ROAD[x.road.round].n);
    } else { reward = 400 + h.g * 50; x.road.round = 0; notes.push('TRIP OVER — back to the first leg'); }
  } else if (ev && ev.t === 'night') {
    x.night.done = 1;
    if (won) { reward = 2800 + h.g * 50; notes.push('FRIDAY LIGHTS WON · ' + giveReward({pack: 'bronze'}) + ' added in Packs'); }
    else { reward = 400 + h.g * 50; notes.push('Lights out for this week'); }
  } else if (ev && ev.t === 'bont') {
    const node = BONT_FLAT[ev.i], results = bontObjs(node).map(o => ({t: o.t, ok: bontMet(o, won)}));
    const cleared = results.every(r => r.ok);
    results.forEach(r => notes.push((r.ok ? '✓ ' : '✗ ') + r.t));
    if (cleared && ev.i === save.x.bont.step) {
      reward = node.coins || 1000; save.x.bont.ribbons += node.ribbons || 0; bontAdvance();
      notes.unshift('NODE COMPLETE · +' + (node.ribbons || 0) + ' Bulldog Ribbons');
    } else if (cleared) {
      reward = 500; save.x.bont.ribbons += 20; notes.unshift('REPLAY · +20 Bulldog Ribbons');
    } else { reward = 350; bontRetry = true; notes.unshift('OBJECTIVES MISSED — replay the node'); }
    bontSyncCard();
  }
  recordMatch(d);
  const ready = claimCount() - before; if (ready > 0) notes.push(ready + ' reward' + (ready === 1 ? '' : 's') + ' ready to claim in Events');
  reward = won ? winMoney(reward) : money(reward);
  if (won && diffNow().pay !== 1) { notes.unshift(diffNow().name + ' payout  ' + diffNow().pay + '×'); reward = Math.round(reward * diffNow().pay); }
  { const bz = bizMatch(won, hp, ap, st, h); reward += bz.c; notes.push(...bz.n); }
  const bog = pickBOG(), bogCoins = bog.p ? bogPay(bog.p, bog.b) : 0;
  if (bog.p) save.bog = {id: bog.p.d.id, g: bog.b.g, m: bog.b.m, t: bog.b.t, pay: bogCoins, rating: bog.p.d.rating};
  const wage = wageBill(), loss = Math.max(4, (FATIGUE[diffId()] || 14) - facLv('rec') * 2);
  applyFatigue(diffId());
  notes.unshift('WAGES −' + fmt(wage) + ' · ' + teamRating() + ' OVR side');
  notes.push('CONDITION −' + loss + ' on the eighteen. Bench players rested +' + restGain() + '.');
  const net = reward + bogCoins - wage;
  save.coins = Math.max(0, save.coins + net); save.played++; if (won) save.won++; else if (hp < ap) save.lost++; else save.drawn++;
  if (!save.legGift && save.won >= 100 && save.x && save.x.cup && (save.x.cup.runs || 0) >= 1) {
    save.legGift = 1;
    const fresh = POOL.filter(p => p.legacy && !save.owned.includes(p.id));
    const p = fresh[Math.floor(Math.random() * fresh.length)];
    if (p) { save.owned.push(p.id); notes.push('CLUB LEGEND: ' + p.full + ' · 100 wins and a premiership'); }
    else { save.shards = (save.shards || 0) + 25; notes.push('CLUB LEGEND: the set is complete · +25 shards'); }
  }
  bizAch(notes); persist();
  const song = won ? winSong() : null;
  const hs = CLUBS[save.club].short, as = oppClub.short, o = $('overlay'), again = !ev || ev.t === 'sb' || ev.t === 'div' || (ev.t === 'road' && x.road.round > 0 && x.road.round < ROAD.length) || bontRetry;
  const bp = bog.p && bog.p.d;
  o.innerHTML = `<h2 class="it" style="color:${res[1]}">${res[0]}</h2>
    <div class="ftgrid">
      <div class="ftscore">
        <div class="big2">${hs} ${h.g}.${h.b} (${hp})  –  ${as} ${a.g}.${a.b} (${ap})</div>
        <p>FULL TIME · ${diffNow().name}</p>
        <div class="big2" style="color:#f7c738">${net >= 0 ? '+' : '−'}${fmt(Math.abs(net))} COINS</div>
        <p>Purse ${fmt(reward + bogCoins)} · wages −${fmt(wage)}</p>
        ${notes.map(n => `<p style="color:#22e37b;font-weight:800">${n}</p>`).join('')}
        ${song ? `<div class="nowsong"><b class="it">${song.name.toUpperCase()}</b><button type="button" id="songBtn">PLAY SONG</button></div>` : (won ? '<div class="nosong">No audio because the creator doesn\'t like your theme song</div>' : '')}
      </div>
      ${bp ? `<div class="bog">
        <div class="bogtag it">BEST ON GROUND</div>
        ${card(bp, 124)}
        <div class="bogn">${bp.full.toUpperCase()}</div>
        <div class="bogstats"><span>${bog.b.g} GOAL${bog.b.g === 1 ? '' : 'S'}</span><span>${bog.b.m} MARK${bog.b.m === 1 ? '' : 'S'}</span><span>${bog.b.t} TACKLE${bog.b.t === 1 ? '' : 'S'}</span></div>
        <div class="bogwhy">${bp.rating} OVR · a lower card pays more for the same game</div>
        <div class="bogpay it">+${fmt(bogCoins)}</div>
      </div>` : ''}
    </div>
    <div class="ftbtns">${again ? '<button id="again">PLAY AGAIN</button>' : ''}<button class="alt" id="quit">${ev ? 'BACK TO EVENT' : 'MAIN MENU'}</button></div>`;
  o.classList.remove('hide'); if ($('again')) $('again').onclick = () => startMatch(ev && ev.t === 'road' ? {t: 'road', i: save.x.road.round} : ev); $('quit').onclick = quitMatch;
  if (song && $('songBtn')) {
    const startSong = () => { playWinSong(song); $('songBtn').textContent = 'PLAYING'; };
    $('songBtn').onclick = startSong;
    startSong();
  }
}

/* ---------- per-frame ---------- */
function stepMatch(dt) {
  const m = ms;
  if (m.prematch) return;
  if (m.ballup) { stepBallUp(dt); return; }
  if (m.setshot) { stepSetShot(dt); return; }
  m.kickLock = Math.max(0, m.kickLock - dt); m.pickupCD = Math.max(0, m.pickupCD - dt);
  if (m.charging) m.charge = Math.min(1, m.charge + dt);

  // clock
  if (!m.over) {
    m.time -= dt;
    if (m.time <= 0) {
      if (m.qtr >= 4) { finishMatch(); return; }
      m.qtr++; m.time = QUARTER_SECONDS;
      if (m.qtr === 4 && m.ch && m.ch.deficit && !m.ch.defApplied) {
        m.ch.defApplied = 1;
        const hp = m.score.home.g * 6 + m.score.home.b, ap = m.score.away.g * 6 + m.score.away.b;
        let need = hp + 15 - ap;
        while (need > 0) { if (need >= 6) { m.score.away.g++; need -= 6; } else { m.score.away.b++; need--; } }
        updateScore(); showBanner('15 POINTS DOWN', '#ff5a64');
      } else showBanner('QUARTER ' + m.qtr, '#ffffff');
      m.pending = null; centreBounce(true);
    }
  }

  // auto-switch to the home player nearest the ball when we don't have it
  m.switchT -= dt;
  if (m.switchT <= 0 && !(m.carrier && m.carrier.team === 'home') && m.ball.ph !== 'dead') {
    m.switchT = .3; const t = landing(), n = nearest(t, m.home);
    if (n !== active() && dist(active(), t) > dist(n, t) + 4) setActive(n);
  }

  if (m.wind) {
    const w = m.wind; w.t += dt;
    if (m.carrier !== w.p || m.pending) m.wind = null;
    else if (w.t >= (w.d || .36)) {
      m.wind = null; const r = launchKick(w.p, w.aim, w.power, w.ai);
      if (w.p.team === 'home') { const land = {x: m.ball.x + Math.cos(r.ang) * r.range, z: m.ball.z + Math.sin(r.ang) * r.range}; const n = nearest(land, m.home, w.p); if (n) setActive(n); }
    }
  }
  const [ix, iz] = inputDir(), spr = keys.has(bind.sprint);
  for (const p of m.all) {
    if (p === active()) movePlayer(p, ix, iz, spr, m.wind && m.wind.p === p ? .3 : 1, dt); else aiControl(p, dt);
  }

  if (m.pending) { m.dead -= dt; if (m.dead <= 0) performRestart(m.pending); }
  else updateBall(dt);
}

const setTxt = (id, v) => { const e = $(id); if (e._t !== v) { e._t = v; e.textContent = v; } };
const setSty = (id, k, v) => { const e = $(id), c = e._s || (e._s = {}); if (c[k] !== v) { c[k] = v; e.style[k] = v; } };
const clk = new THREE.Clock(); let heroT = 0;
let potatoAcc = 0, pausedAcc = 0;
function frame() {
  requestAnimationFrame(frame);
  let dt = clk.getDelta();
  // Surface laptops: ~12 FPS until Resolution is turned down to 50% or less, then back to normal.
  // Everyone else in SHIT QUILTY: plain 30 FPS cap.
  const capDt = SURFACE_BAD_FPS() ? 1 / 12 : (settings.graphics === 'shit' && !settings.surface) ? 1 / 30 : 0;
  if (capDt) { potatoAcc += dt; if (potatoAcc < capDt - .002) return; dt = potatoAcc; potatoAcc = 0; } else potatoAcc = 0;
  dt = Math.min(dt, .05);
  if (mode === 'menu') {
    heroT += dt;
    if (tab === 'squad' && clubR) {
      if (clubAvatar) clubAvatar.rotation.y = 0.45 + Math.sin(heroT * .4) * .18;
      clubR.render(clubScene, clubCam);
    } else if (heroP && tab !== 'home') {
      heroP.rotation.y = .5 + Math.sin(heroT * .7) * .4;
      animPlayer(heroP, dt, 0, true);
      R.render(heroScene, heroCam);
    }
  } else if (ms) {
    if (ms.online) { if (!ms.over && window.AFLNet) AFLNet.tick(dt); }
    else if (!ms.paused && !ms.over) { if (ms.drill) stepDrill(dt); else stepMatch(dt); }
    if (!ms) return;
    if (ms.paused || ms.over) { pausedAcc += dt; if (pausedAcc < (ms.over ? .07 : .25)) return; pausedAcc = 0; }
    drawMatch(dt);
    R.render(ms.scene, ms.cam);
  }
}
function drawMatch(dt) {
  const m = ms, b = m.ball;
  for (const p of m.all) {
    const mod = p.model, u = mod.userData;
    const ss = m.setshot && m.setshot.p === p ? m.setshot : null;
    const stepping = ss && (ss.phase === 'walk' || ss.phase === 'run');
    if (!m.paused) animPlayer(mod, dt, stepping ? 5 : Math.hypot(p.vx, p.vz), m.carrier === p && !(m.wind && m.wind.p === p && m.wind.t > .1) && !ss);
    if (m.drill && p !== m.home[0]) { mod.visible = false; continue; }
    if (ss) mod.visible = ss.camBlend < .55; else if (!mod.visible) mod.visible = true;
    const sd = u.side || 1, fl = u.fall;
    mod.position.set(p.x + Math.cos(p.face) * u.lunge - Math.sin(p.face) * sd * fl * .55, .1 * fl, p.z + Math.sin(p.face) * u.lunge + Math.cos(p.face) * sd * fl * .55);
    mod.rotation.y = Math.PI / 2 - p.face; mod.rotation.x = -fl * .35; mod.rotation.z = sd * fl * 1.45;
  }
  const chud = $('chud');
  if (chud) {
    if (m.ch && !m.prematch && !m.drill) {
      chud.classList.remove('hide');
      const html = bontObjs(m.ch.node).map(o => { const g = bontProg(o); return `<div class="${g.ok ? 'ok' : ''}"><b>${g.txt}</b><small>${o.t}</small></div>`; }).join('');
      if (chud._h !== html) { chud._h = html; chud.innerHTML = html; }
    } else if (!chud.classList.contains('hide')) { chud.classList.add('hide'); chud._h = ''; }
  }
  // ball
  const root = m.ball3, st = root.userData;
  if (b.ph === 'held' && m.carrier) {
    const c = m.carrier, f = c.face, w = m.wind && m.wind.p === c ? clamp(m.wind.t / .34, 0, 1) : 0;
    root.position.set(c.x + Math.cos(f) * (.5 + .28 * w), 1.05 - .62 * w * w, c.z + Math.sin(f) * (.5 + .28 * w)); root.rotation.y = -f; st.tilt.rotation.z = 0; root.scale.setScalar(1.05);
  } else {
    root.scale.setScalar(1.25); root.position.set(b.x, b.h + .17, b.z);
    if (b.ph === 'flight') {
      root.rotation.y = -Math.atan2(b.vz, b.vx); st.tilt.rotation.z = b.desc ? -.5 : .5;
      if (b.kind === 'kick') st.spin.rotation.z += 10 * dt; else st.spin.rotation.x += 18 * dt;
    } else { st.tilt.rotation.z = 0; if (b.ph === 'loose' && Math.hypot(b.vx, b.vz) > 1) st.spin.rotation.z += Math.hypot(b.vx, b.vz) * 2 * dt; }
  }
  if (b.ph !== 'flight') { st.spin.rotation.x *= .9; }
  if (m.life) {
    m.life.t += dt; const tt = m.life.t;
    if (m.life.crowd) m.life.crowd.position.y = Math.sin(tt * 2.4) * .15;
    for (const f of m.life.flags) f.rotation.z = Math.sin(tt * 3.1 + f.userData.ph) * .22;
    for (const bn of m.life.banners) bn.position.y = 8.2 + Math.sin(tt * 1.5 + bn.userData.ph) * .22;
  }
  // camera
  if (m.setshot) {
    poseSetShotCam(); poseFp(m.setshot); drawSetShotHud();
    m.hover.visible = false; m.aim.visible = false; m.cam.updateMatrixWorld();
  } else {
    if (m.fp) m.fp.visible = false;
    const t = m.carrier ? m.carrier : b;
  const tx = clamp(t.x, -A + 8, A - 8), tz = clamp(t.z, -B + 12, B - 12), k = Math.min(1, 3.2 * dt);
  m.focus.x += (tx - m.focus.x) * k; m.focus.z += (tz - m.focus.z) * k;
  m.cam.position.set(m.focus.x, CAM_H, m.focus.z + CAM_Z); m.cam.lookAt(m.focus.x, 0, m.focus.z - CAM_LOOK);
  m.sun.position.set(m.focus.x + 25, 55, m.focus.z + 20); m.sun.target.position.set(m.focus.x, 0, m.focus.z);
  m.cam.updateMatrixWorld();
  const me = (m.online && m.online.ctrl) || active(), canPass = !m.online && m.carrier === me && !m.wind && !m.pending && !m.ballup && !m.paused;
  const hv = canPass && m.mouse ? pickMate(m.mouse.x, m.mouse.y) : null;
  m.hover.visible = !!hv; if (hv) m.hover.position.set(hv.x, .06, hv.z);
  const cur = hv ? 'pointer' : ''; if (canvas._cur !== cur) { canvas._cur = cur; canvas.style.cursor = cur; }
  m.aim.visible = m.charging && m.carrier === me;
  const kr = kickRange(me, Math.max(.2, m.charging ? m.charge : 1));
  if (m.aim.visible) { const ang = aimAngle(me); m.aim.position.set(me.x + Math.cos(ang) * kr, .07, me.z + Math.sin(ang) * kr); }
  const mid = (me.d.moves || []).find(x => MV[x].kind === 'active'), mvTxt = mid ? '  ·  ' + keyName(bind.move) + ' ' + MV[mid].name + (me.mvcd > 0 ? ' ' + Math.ceil(me.mvcd) + 's' : ' READY') : '';
  setTxt('rng', (m.charging ? 'KICK ' : 'MAX KICK ') + Math.round(kr) + ' m' + mvTxt);
  // HUD
  const a = me; setSty('stam', 'transform', `scaleX(${Math.max(.001, +a.stam.toFixed(3))})`); setSty('stam', 'background', a.exh ? '#ff4d57' : '#22e37b');
  setSty('kick', 'transform', `scaleX(${m.charging ? +m.charge.toFixed(3) : 0})`);
  if (!m.online) { const tt = Math.max(0, Math.ceil(m.time)); setTxt('time', Math.floor(tt / 60) + ':' + String(tt % 60).padStart(2, '0')); setTxt('qtr', 'Q' + m.qtr); }
  }
}

/* =================== BOOT =================== */
/* The CSP blocks inline onerror handlers, so cards whose photo is missing showed a broken-image icon. Hide failed card photos here instead. */
addEventListener('error', e => { const t = e.target; if (t && t.tagName === 'IMG') t.style.display = 'none'; }, true);
resize(); showMenu(); frame();
function showSurfacePopup() {
  const o = document.createElement('div');
  o.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(3,8,20,.82);font-family:inherit';
  o.innerHTML = `<div style="max-width:560px;margin:20px;padding:28px 30px;border:2px solid #ff5a64;border-radius:14px;background:#0b1630;color:#fff;text-align:center;box-shadow:0 0 40px rgba(255,90,100,.35)">
    <div style="font-size:42px">💻⚠️</div>
    <h2 style="margin:8px 0 10px;color:#ff5a64;font-style:italic;letter-spacing:1px">LAPTOP TOO BAD TO RUN THIS GAME</h2>
    <p style="margin:0 0 8px;line-height:1.5">Surface detected. You can still play, but it will run at <b>bad FPS</b>.</p>
    <p style="margin:0 0 20px;line-height:1.5;color:#b9c7e6">Turn the <b>resolution</b> down in Settings (50% or lower) and it goes back to normal.</p>
    <button id="sfPlay" style="margin:4px;padding:11px 22px;border:0;border-radius:8px;background:#26324f;color:#fff;font-weight:700;cursor:pointer">PLAY ANYWAY</button>
    <button id="sfSet" style="margin:4px;padding:11px 22px;border:0;border-radius:8px;background:#f7c738;color:#111;font-weight:800;cursor:pointer">OPEN SETTINGS</button></div>`;
  document.body.appendChild(o);
  o.querySelector('#sfPlay').onclick = () => o.remove();
  o.querySelector('#sfSet').onclick = () => { o.remove(); if (save) { tab = 'settings'; renderShell(); } };
}
if (IS_SURFACE) setTimeout(showSurfacePopup, 400);
function tradeCoach() {
  let id = localStorage.getItem('aflCoachId');
  if (!id || !/^[a-zA-Z0-9]{6,24}$/.test(id)) {
    id = 'c' + Math.random().toString(36).slice(2, 12).replace(/[^a-z0-9]/g, 'a');
    localStorage.setItem('aflCoachId', id);
  }
  return id;
}
function tradeBench() {
  return myBench().map(p => ({id: p.id, name: p.name, rating: p.rating, pos: p.pos, lvl: (save.up && save.up[p.id]) || 0, asc: (save.asc && save.asc[p.id]) || 0}));
}
function tradeRemove(id) {
  if (!save || !save.owned.includes(id) || save.lineup.includes(id)) return false;
  save.owned = save.owned.filter(x => x !== id);
  persist(); return true;
}
function tradeAdd(card, price) {
  const p = card && POOL[card.id];
  const cost = price | 0;
  if (!p || !save || save.owned.includes(p.id) || cost < 0 || save.coins < cost) return false;
  save.coins -= cost;
  save.owned.push(p.id);
  if ((card.lvl | 0) > 0) save.up[p.id] = Math.max(save.up[p.id] || 0, card.lvl | 0);
  if ((card.asc | 0) > 0) save.asc[p.id] = Math.max(save.asc[p.id] || 0, card.asc | 0);
  applyUp(p); persist(); return true;
}
function tradePay(n) {
  if (!save || !n) return;
  save.coins += n | 0; persist();
  const el = document.getElementById('coinTxt'); if (el) el.textContent = fmt(save.coins);
}
window.__hk = { get: () => save, persist, rerender: () => { if (save && screen === 'home') renderShell(); }, rerenderTrade: msg => { if (!save) return; tab = 'market'; MKT.sec = 'trade'; renderShell(msg); }, pool: () => POOL, slots: SLOTS, rosterChanged, wantsPos, sideRating, packs: PACKS, openPack, marketList, opening: () => opening, match: () => ms, inputDir, keys, bind: () => bind, quit: quitMatch, startOnline: startOnlineMatch, tradeBench, tradeRemove, tradeAdd, tradePay, tradeCanPay: n => !!(save && save.coins >= n), tradeOwns: id => !!(save && save.owned.includes(id)), tradeCoach, tradeClaim: 1, debug: { makeOpponent, match: () => ms, updateScore, startMatch, teamRating, forceSetShot, simulateMark, simulateFoul, song: winSong, looks: () => ms && ms.all.map(p => ({n: p.d.full, L: p.model.userData.looks})) } };
function forceSetShot() {
  if (!ms) return 'no-match';
  const p = active();
  p.x = 42; p.z = 4; p.vx = p.vz = 0; p.face = 0;
  ms.pending = null; ms.wind = null; ms.ballup = null; ms.paused = false; ms.over = false;
  const o = $('overlay'); if (o) o.classList.add('hide');
  const bu = $('ballup'); if (bu) bu.classList.add('hide');
  gather(p); beginSetShot(p, 'SET SHOT'); return 'ok';
}
function simulateMark(x, z) {
  if (!ms) return 'no-match';
  const p = active();
  p.x = x; p.z = z; p.vx = p.vz = 0; p.face = 0;
  ms.pending = null; ms.wind = null; ms.ballup = null; ms.paused = false; ms.over = false;
  const bu = $('ballup'); if (bu) bu.classList.add('hide');
  gather(p); act(p, 'mark');
  const ok = isSetShotSpot(p);
  if (ok) beginSetShot(p, 'SET SHOT');
  return {ok, shot: !!ms.setshot, title: $('ssTitle') && $('ssTitle').textContent, x: p.x, z: p.z};
}
function simulateFoul(reason) {
  if (!ms) return 'no-match';
  if (ms.setshot) endSetShot();
  const p = active();
  p.x = 28; p.z = 14; p.vx = p.vz = 0; p.face = 0;
  ms.pending = null; ms.wind = null; ms.ballup = null; ms.paused = false; ms.over = false;
  awardFreeKick(p, null, reason || 'HIGH TACKLE');
  return {shot: !!ms.setshot, title: $('ssTitle') && $('ssTitle').textContent, phase: ms.setshot && ms.setshot.phase};
}
function bindSetShotButtons() {
  const hold = (id, code) => {
    const el = $(id); if (!el) return;
    const down = e => { e.preventDefault(); el.setPointerCapture(e.pointerId); keys.add(code); if (ms && ms.setshot && code === bind.kick && ms.setshot.phase === 'line') ms.setshot.charging = true; };
    const up = e => { e.preventDefault(); keys.delete(code); if (code === bind.kick) releaseSetShot(); };
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
  };
  hold('ssLeft', bind.left); hold('ssRight', bind.right); hold('ssKick', bind.kick);
}
bindSetShotButtons();
})();
