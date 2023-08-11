const ndm = require('nodemailer')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { signing, Mail } = require('./serverside_content')
const User = require('./Schema/User')
const crypto = require('crypto')
var OTP
async function connectDB() {
    const uri = "mongodb+srv://WebChat:oMu5jJAqjkMMbFIj@webchat.7nseytu.mongodb.net/?retryWrites=true&w=majority";
    try {
        await mongoose.connect(uri)
        console.log("Connected")
    } catch {
        console.log(err)
    }
}
async function closeDB() {
    await mongoose.connection.close()
        .then(() => {
            console.log("Database connection closed");
        })
        .catch((err) => {
            console.error("Error while closing the database connection:", err);
        });
}
function create_OTP() {
    const x = parseInt(Math.random() * 10000)
    console.log(x)
    return x
}
async function check_OTP(data) {
    console.log(data.OTP, OTP)
    if (Number(data.OTP) === OTP) {
        OTP = null
        return signing.ok
    }
    else {
        return signing.otp_inc
    }
}

function mail(user_id, template) {
    const transport = ndm.createTransport({
        service: "Gmail",
        auth: {
            user: "fitnessfreak1412@gmail.com",
            pass: "nzdotbqieaqwhmfv"
        },
    });


    const mail = {
        from: {
            name: 'Fitness Freak',
            address: "fitnessfreak1412@gmail.com"
        },
        to: user_id,
        subject: template.subject,
        html: template.content,
        headers: {
            'Content-Type': 'text/html'
        }
    };

    transport.sendMail(mail, (err, data) => {
        if (err) {
            console.log("Request Failed\nError:404");
            console.log(`\nError:${err}`);
        } else {
            console.log("Email sent successfully");
        }
    });
}
async function check_user(data) {
    const response = await User.find({ Email: data.Email })
    if (response.length === 0) {
        OTP = create_OTP()
        mail(data.Email, Mail.new_OTP(data.Name, OTP))
        return [signing.ok]
    }
    else if (response.length > 0) {
        return signing.acc_F
    }
}

async function verify(data) {
    const response = await User.findOne({ Email: data.Email })
    console.log(response)
    if (response) {
        OTP = create_OTP()
        mail(data.Email, Mail.new_OTP(data.Name, OTP))
        return signing.ok
    }
    else if (!response) {
        return signing.acc_nf
    }
}

async function change_password(data) {
    try {
        const user = await User.findOne({ Email: data.Email });
        if (!user) {
            return signing.acc_nf;
        } else {
            const hash = await bcrypt.hash(data.Password, 10);
            await User.updateOne({ Email: data.Email }, { Password: hash });
            return signing.ok;
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
async function create_account(data) {
    try {
        const new_user = new User(data)
        const hash = await bcrypt.hash(new_user.Password, 10)
        new_user.Password = hash
        console.log(new_user)
        await new_user.save()
        return signing.ok
    }
    catch (err) {
        console.log(err)
        return signing.acc_F
    }
    new_user = null
}

async function verification(data) {
    const response = await User.findOne({ Email: data.Email })
    if (response) {
        try {
            console.log("Comparing")
            const status = await bcrypt.compare(data.Password, response.Password)
            console.log(status)
            if (status === true) {
                return signing.ok
            }
            else {
                return signing.pass_inc
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    else {
        return signing.acc_nf
    }

}
module.exports = {
    mail: mail,
    Add_user: create_account,
    SignIn: verification,
    SignUp: check_user,
    verify: verify,
    connectDB: connectDB,
    OTP: create_OTP,
    check_OTP: check_OTP,
    change_password: change_password
};