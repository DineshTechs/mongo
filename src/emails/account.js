const sgMail = require('@sendgrid/mail')
const sgAPIkey = "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"

sgMail.setApiKey(sgAPIkey)

const sendVerificationEMail = (email, name) => {
    try {
        sgMail.send({
            to: email,
            from: "admin@dineshtech.com",
            text: 'test',
            subject: 'Welcome ' + name,
            html: ''
        })
    } catch (e) {
        throw new Error(e)
    }
}

module.exports = {
    sendVerificationEMail
}
