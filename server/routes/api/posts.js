const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

//Get posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

//Add posts
router.post("/", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertMany({
    title: req.body.title,
    url: req.body.url,
    hostnameURL: req.body.hostnameURL,
    hostname: req.body.hostname,
    date: req.body.date,
    createdAt: new Date()
  });
  res.status(201).send();
});

//Delete posts
router.delete("/:id", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({
    _id: new mongodb.ObjectID(req.params.id)
  });
  res.status(200).send();
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    `mongodb://test:test123!@cluster0-shard-00-00-wlfkt.mongodb.net:27017,cluster0-shard-00-01-wlfkt.mongodb.net:27017,cluster0-shard-00-02-wlfkt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`,
    {
      useNewUrlParser: true
    }
  );

  return client.db("simply_newsletter").collection("posts");
}

module.exports = router;
