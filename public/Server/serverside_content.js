//for signup //
//for facebook and google auth  //
//for blog page
//for signin //
//for mail  //

const signing = { acc_F: "Account already registered", pass_inc: "Incorrect Password", acc_nf: "No account found", otp_inc: "Incor0rect OTP", ok: "all ok" }
// const blog_content = { head: "Welcome to Fitness Freak Community Page", }
const Mail = {
    welcome: () => ({
        subject: `<p><strong>Welcome to Fitness Freak</strong></p>`,
        content: `
            <h2><strong>Welcome to a Healthier You!</strong></h2>
            <p>We are thrilled to have you on board. Our platform is designed to provide you with an exceptional experience.</p>
            <p>Discover a world of possibilities as you explore our diverse range of features. From user-friendly interfaces to personalized services, we are here to make your journey seamless and enjoyable.</p>
            <p>Whether you're here to shop, learn, or connect, our team is dedicated to delivering the best possible experience for you.</p>
            <p>If you have any questions or need assistance, don't hesitate to reach out to our support team.</p>
            <p>Thank you for joining us. Let's embark on this exciting adventure together!</p>
            <p>Best regards,</p>
            <p>Team:<strong>Fitness Freak</strong></p>`
    }), new_OTP: (user_name, OTP) => ({
        subject: "Your OTP for Fitness Freak",
        content: `
        <h2>Dear ${user_name},</h2>
        <p>Here is your One-Time Password (OTP) to access your account on <strong>Fitness Freak</strong>:</p>
        <h2 style="text-align: center; font-size: 24px; font-weight: bold;">${OTP}</h2>
        <p>If you did not request this OTP or need any assistance, please contact our support team immediately on <strong>fitnessfreak1412@gmail.com</strong>.</p>
        <p>Thank you for using <strong>Fitness Freak</strong>.</p>
        <p>Best regards,</p>
        <p><strong>Team (Fitness Freak)</strong></p>;`
    }), forget_OTP: (OTP) => ({
        content: `
        <h2>Dear User,</h2>
        <p>We have received a request to reset your password on <strong>Fitness Freak</strong>. If you didn't initiate this request, you can safely ignore this email.</p>
        <p>Here is your One-Time Password (OTP) to proceed with the password reset:</p>
        <h2 style="text-align: center; font-size: 24px; font-weight: bold;>${OTP}</h2>
        <p>If the OTP is correct, you will be redirected to a page where you can reset your password securely.</p>
        <p>If you have any questions or need assistance, please feel free to contact our support team.</p>
        <p>Thank you for using <strong>Fitness Freak</strong>.
        <br/>
        Best regards,
        <br/>
        <strong>Team (Fitness Freak)</strong></p>`
    })
}

module.exports = { signing: signing, Mail: Mail }