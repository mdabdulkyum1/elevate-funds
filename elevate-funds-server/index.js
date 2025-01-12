require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const {
  MongoClient,
  ServerApiVersion,
  ObjectId
} = require('mongodb');
const port = process.env.PORT || 5000

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.kzmhu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// const uri = 'mongodb://localhost:27017/';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const elevateFundsCollections = client.db("elevateDB").collection("campaigns");
    const donatedCollections = client.db("elevateDB").collection("donations");

    app.get('/allRunningCampaigns', async (req, res) => {
      const currentDate = new Date();
      const dateOnly = currentDate.toISOString().split('T')[0];
      const query = {deadline: {$gte: dateOnly}}
      const cursor = await elevateFundsCollections.find(query).limit(6).toArray();
      res.send(cursor); 
    })
    app.get('/allCampaigns', async (req, res) => {
      const cursor = await elevateFundsCollections.find().toArray();
      res.send(cursor); 
    })
    app.get('/allSortCampaigns', async (req, res) => {
      const cursor = await elevateFundsCollections.find().sort({ minimumDonation: 1 , _id: 1}).toArray();
      res.send(cursor); 
    })
    app.get('/myCampaigns', async (req, res) => {
      const userEmail = req.query.userEmail;
      const query = {
        userEmail
      }
      const result = await elevateFundsCollections.find(query).toArray();
      res.send(result);
    })
    app.get('/campaign/:id', async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id)
      };
      const result = await elevateFundsCollections.findOne(query);
      res.send(result);
    })
    app.get('/updateCampaign/:id', async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id)
      };
      const result = await elevateFundsCollections.findOne(query);
      res.send(result);
    })
    app.put('/updateCampaign/:id', async (req, res) => {
      const id = req.params.id;
      const updateData = req.body;
      const {
        image,
        title,
        type,
        description,
        minimumDonation,
        deadline,
      } = updateData;
      const filter = {
        _id: new ObjectId(id)
      };
      const options = {
        upsert: true
      };
      const updateCampaign = {
        $set: {
          image:image,
          title:title,
          type:type,
          description:description,
          minimumDonation:minimumDonation,
          deadline:deadline
        }
      }
      const result = await elevateFundsCollections.updateOne(filter, updateCampaign, options);
      res.send(result);
    })
    app.post('/campaigns', async (req, res) => {
      const campaignData = req.body;
      const result = await elevateFundsCollections.insertOne(campaignData);
      res.send(result);
    })

    app.delete('/campaigns/:id', async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id)
      };
      const result = await elevateFundsCollections.deleteOne(query);
      res.send(result);
    })


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    app.post('/donations', async (req, res) => {
      const campaignDonationData = req.body;
      const result = await donatedCollections.insertOne(campaignDonationData);
      res.send(result);
    })
    app.get('/myDonations', async (req, res) => {
      const userEmail = req.query.userEmail;
      const query = {
        userEmail
      }
      const result = await donatedCollections.find(query).toArray();
      res.send(result);
    })




    // await client.db("admin").command({
    //   ping: 1
    // });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send("Server is Running")
})
app.listen(port, () => {
  console.log(`Server is running PORT: ${port}`);
})