const formData = { email: "", message: "" };

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');

const locStorage = localStorage.getItem(STORAGE_KEY);

if (locStorage) {
  const parsedFormData = JSON.parse(locStorage);
formData.email = parsedFormData.email || "";
  formData.message = parsedFormData.message || "";
  
  form.email.value = formData.email;
  form.message.value = formData.message;
  
}

form.addEventListener("input", textInput);

function textInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

  
}

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
if (formData.email.trim() === "" || formData.message.trim() === "") {
    alert("Fill please all fields");
    return;
  }
  console.log(formData);
  formData.email = "";
  formData.message = "";
event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);}