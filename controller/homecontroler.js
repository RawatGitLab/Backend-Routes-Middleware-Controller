function HomeResponse(req , res) {
    res.send("Express Js welcome you to the website");
}

function AboutResponse(req , res) {
    res.send("About page: Varun create this page");
}

function ContactResponse(req , res) {
    res.send("Contact Page : email : varunrawatmailbox2507@gmail.com phone: 8273753398");
}

module.exports = {HomeResponse, AboutResponse, ContactResponse}