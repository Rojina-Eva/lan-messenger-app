const express = require("express");
const cors = require('cors');
const path = require("path");

const app = express();
const server = require("http").createServer(app);
const authRoutes = require("./routes/auth.js");

const PORT = process.env.PORT || 5000;

require('dotenv').config();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/', (req, res) => {
    const { message, user: sender, type, members } = req.body;

    if(type === 'message.new') {
        members
            .filter((member) => member.user_id !== sender.id)
            .forEach(({ user }) => {
                if(!user.online) {
                    // twilioClient.messages.create({
                    //     body: `You have a new message from ${message.user.fullName} - ${message.text}`,
                    //     messagingServiceSid: messagingServiceSid,
                    //     to: user.phoneNumber
                    // })
                    //     .then(() => console.log('Message sent!'))
                    //     .catch((err) => console.log(err));
                }
            })

            return res.status(200).send('Message sent!');
    }

    return res.status(200).send('Not a new message request');
});

app.use('/auth', authRoutes);


const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname+"/public")));

io.on("connection", function(socket){
	socket.on("sender-join",function(data){
		socket.join(data.uid);
	});
	socket.on("receiver-join",function(data){
		socket.join(data.uid);
		socket.in(data.sender_uid).emit("init", data.uid);
	});
	socket.on("file-meta",function(data){
		socket.in(data.uid).emit("fs-meta", data.metadata);
	});
	socket.on("fs-start",function(data){
		socket.in(data.uid).emit("fs-share", {});
	});
	socket.on("file-raw",function(data){
		socket.in(data.uid).emit("fs-share", data.buffer);
	})
});

// server.listen(5000);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));