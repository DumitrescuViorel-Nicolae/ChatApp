const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
let corsOptions = {
    origin : '*',
 }
app.use(cors(corsOptions));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const request = await axios.put('https://api.chatengine.io/users/',
            {
                username: username, secret: username, first_name: username
            },
            {
                headers: { 'private-key': '271d631a-8b0c-4b4b-8ba6-d128bd130602' }
            })

        return res.status(request.status).json(request.data)

    } catch (error) {
        
        return res.status(error.response.status).json(e.response.data)
    }
});

app.listen(3001);