let formData = { email: '', message: '' };
const form = document.querySelector('form.feedback-form');

const getFormData = localStorage.getItem('feedback-form-state');
if (getFormData != null) {
  form.elements.email.value = JSON.parse(getFormData).email;
  form.elements.message.value = JSON.parse(getFormData).message;
}
form.addEventListener('input', e => {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
form.addEventListener('submit', e => {
  e.preventDefault();
  if (
    !form.elements.email.value.trim() ||
    !form.elements.message.value.trim()
  ) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    form.reset();
    localStorage.removeItem('feedback-form-state');
  }
});
