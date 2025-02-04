const contactform=document.querySelector(".form");
const submitbuton=document.querySelector(".submit-btn");
const Name=document.querySelector("#name");
const Email=document.querySelector("#email");
const Message=document.querySelector("#message");

const publicKey="8LSEz0hGTrWmGt4dA";
const serviceID="service_fxc0h9b";
const templateID="template_pyx7rrt";

emailjs.init(publicKey);
contactform.addEventListener("submit",e =>{
e.preventDefault();
submitbuton.innerText="Just a Moment...";

const inputFields={
name :Name.value,
email:Email.value,
message:Message.value
}
emailjs.send(serviceID,templateID,inputFields)
.then(() =>{
    submitbuton.innerText="Message sent Successfully!";
    Name.value="";
    Email.value="";
    Message.value="";
},(error) =>{
    console.log(error);
    submitbuton.innerText="something went wrong";
});
});