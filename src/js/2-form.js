const formData = {
    email: "",
    message: ""
};
const form = document.querySelector('.feedback-form')
form.addEventListener('input', (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value.trim();

    formData[fieldName] = fieldValue;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));

});

const savedForm = localStorage.getItem("feedback-form-state");
const parsedForm = JSON.parse(savedForm);
if (parsedForm) {
    formData.email = parsedForm.email;
    formData.message = parsedForm.message;


    form.elements.email.value = parsedForm.email;
    form.elements.message.value = parsedForm.message;


};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formData.email === "" || formData.message === "") {
        return alert("Fill please all fields");
    }

    console.log(formData);

    localStorage.removeItem("feedback-form-state");

    formData.email = "";
    formData.message = "";

    form.reset();

}); 