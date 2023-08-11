const express = require('express')
const cors = require('cors')
const path = require('path')
const { connectDB, Add_user, change_password, verify, SignUp, check_OTP, SignIn } = require("./serverside_function")
var user_data, OTP_, password
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
connectDB()
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/Signup', cors(), async (req, res) => {
    console.log(req.body);
    user_data = req.body;
    const response = await SignUp(user_data);
    res.send(response);
});
app.post('/Signup/OTP', cors(), async (req, res) => {
    OTP_ = req.body
    const response = await check_OTP(OTP_)
    if (response === "all ok") {
        const final_response = await Add_user(user_data)
        user_data = null
        res.send(final_response)
    }
    else {
        res.send(response)
    }
})
app.post('/SignIn', cors(), async (req, res) => {
    user_data = req.body
    console.log("get_Request ")
    res.send(await SignIn(user_data))
    user_data = null
})

app.post('/SignIn/forget', cors(), async (req, res) => {
    user_data = req.body
    console.log("post for forget ")
    console.log("get_request_forget")
    console.log(user_data)
    res.send(await verify(user_data))
})
app.post('/SignIn/verify_OTP', cors(), async (req, res) => {
    OTP_ = req.body

    console.log("get request")
    const response = await check_OTP(OTP_)
    res.send(response)
})
app.post('/SignIn/new_password', cors(), async (req, res) => {
    password = req.body.Password
    console.log("get request")
    const user_email = user_data.Email
    const new_password = { Email: user_email, Password: password }
    console.log(new_password,)
    const response = await change_password(new_password)
    res.send(response)
})
app.listen(80, () => {
    console.log(`http://${`127.0.0.1`}`)
})