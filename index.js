// Download modules

const fs = require('fs');
const express = require('express');

var app = require('express')();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var io = require('socket.io')(http);

var sanitizer = require('sanitizer');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Google Firestore

const {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
} = process.env;

const serviceAccount = {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
};

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Application routes

app.get('', function (req, res) {
  const index = __dirname + '/public/static/index.html';

  res.sendFile(index);
});

app.post('/custom', async function (req, res) {
  const vid_link = req.body.yt_video_link;
  const loc_name = req.body.custom_loc_name;
  const username = req.body.username;
  const current_loc = req.body.current_loc;

  const clean_vid_link = sanitizer.escape(vid_link);
  const clean_loc_name = sanitizer.escape(current_loc);
  const clean_username = sanitizer.escape(username);
  const clean_custom = sanitizer.escape(loc_name);

  const campRef = db.collection('prs_camp').doc('chatlog');
  const houseRef = db.collection('prs_house').doc('chatlog');
  const farmRef = db.collection('prs_farm').doc('chatlog');
  const cityRef = db.collection('prs_city').doc('chatlog');
  const housesRef = db.collection('prs_houses').doc('chatlog');
  const prisonRef = db.collection('prs_prison').doc('chatlog');

  const camp = await campRef.get();
  const house = await houseRef.get();
  const farm = await farmRef.get();
  const city = await cityRef.get();
  const houses = await housesRef.get();
  const prison = await prisonRef.get();

  const video_embed = clean_vid_link.split("be/");
  const clean_video_embed = video_embed[1];

  if (clean_loc_name === "camp") {
    campRef.set({
      log : "<h3>" + clean_custom + " by " + clean_username + "</h3><hr/><iframe width='560' height='315' src='https://www.youtube.com/embed/" + clean_video_embed + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br/>" + camp.data().log
    });
  }

  else if (clean_loc_name === "house") {
    houseRef.set({
      log : "<h3>" + clean_custom + " by " + clean_username + "</h3><hr/><iframe width='560' height='315' src='https://www.youtube.com/embed/" + clean_video_embed + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br/>" + house.data().log
    });
  }

  else if (clean_loc_name === "farm") {
    farmRef.set({
      log : "<h3>" + clean_custom + " by " + clean_username + "</h3><hr/><iframe width='560' height='315' src='https://www.youtube.com/embed/" + clean_video_embed + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br/>" + farm.data().log
    });
  }

  else if (clean_loc_name === "city") {
    cityRef.set({
      log : "<h3>" + clean_custom + " by " + clean_username + "</h3><hr/><iframe width='560' height='315' src='https://www.youtube.com/embed/" + clean_video_embed + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br/>" + city.data().log
    });
  }

  else if (clean_loc_name === "houses") {
    housesRef.set({
      log : "<h3>" + clean_custom + " by " + clean_username + "</h3><hr/><iframe width='560' height='315' src='https://www.youtube.com/embed/" + clean_video_embed + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br/>" + houses.data().log
    });
  }

  else if (clean_loc_name === "prison") {
    prisonRef.set({
      log : "<h3>" + clean_custom + " by " + clean_username + "</h3><hr/><iframe width='560' height='315' src='https://www.youtube.com/embed/" + clean_video_embed + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br/>" + prison.data().log
    });
  }
});

app.get('/camp', async function (req, res) {
  const campRef = db.collection('prs_camp').doc('chatlog');
  const camp = await campRef.get();

  res.send(camp.data().log);
});

app.get('/house', async function (req, res) {
  const houseRef = db.collection('prs_house').doc('chatlog');
  const house = await houseRef.get();

  res.send(house.data().log);
});

app.get('/farm', async function (req, res) {
  const farmRef = db.collection('prs_farm').doc('chatlog');
  const farm = await farmRef.get();

  res.send(farm.data().log);
});

app.get('/city', async function (req, res) {
  const cityRef = db.collection('prs_city').doc('chatlog');
  const city = await cityRef.get();

  res.send(city.data().log);
});

app.get('/houses', async function (req, res) {
  const housesRef = db.collection('prs_houses').doc('chatlog');
  const houses = await housesRef.get();

  res.send(houses.data().log);
});

app.get('/prison', async function (req, res) {
  const prisonRef = db.collection('prs_prison').doc('chatlog');
  const prison = await prisonRef.get();

  res.send(prison.data().log);
});

http.listen(port, function(){
  console.log('listening on *:' + port);

  const campRef = db.collection('prs_camp').doc('chatlog');
  const houseRef = db.collection('prs_house').doc('chatlog');
  const farmRef = db.collection('prs_farm').doc('chatlog');
  const cityRef = db.collection('prs_city').doc('chatlog');
  const housesRef = db.collection('prs_houses').doc('chatlog');
  const prisonRef = db.collection('prs_prison').doc('chatlog');

  async function fixLogs () {
    const camp = await campRef.get();
    const house = await houseRef.get();
    const farm = await farmRef.get();
    const city = await cityRef.get();
    const houses = await housesRef.get();
    const prison = await prisonRef.get();

    const mutual_fix_data = {
      log : ""
    }

    if (!camp.exists) {
      await campRef.set(mutual_fix_data);

      console.log("READY");
    }

    else {
      console.log("READY");
    }

    if (!house.exists) {
      await houseRef.set(mutual_fix_data);

      console.log("READY")
    }

    else {
      console.log("READY");
    }

    if (!farm.exists) {
      await farmRef.set(mutual_fix_data);

      console.log("READY");
    }

    else {
      console.log("READY");
    }

    if (!city.exists) {
      await cityRef.set(mutual_fix_data);

      console.log("READY");
    }

    else {
      console.log("READY");
    }

    if (!houses.exists) {
      await housesRef.set(mutual_fix_data);

      console.log("READY");
    }

    else {
      console.log("READY");
    }

    if (!prison.exists) {
      await prisonRef.set(mutual_fix_data);
      
      console.log("READY");
    }

    else {
      console.log("READY");
    }
  }

  fixLogs();
});