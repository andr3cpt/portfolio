const messageSent = document.querySelector('.message-sent')
const messageError = document.querySelector('.message-error')
const inputFields = document.querySelectorAll('input')
const messageField = document.querySelector('textarea')

window.onload = function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = (Math.random() * 100000) | 0;
        // these IDs from the previous steps
        emailjs.sendForm("contact_service", "contact_form", this).then(
          function () {
            showMessageStatus(messageSent)
            setInterval(() => {
                hideMessageStatus(messageSent)
            }, 5000)
            inputFields.forEach(inputField => {
                inputField.value = ''
            });
            messageField.value = ''
          },
          function () {
            showMessageStatus(messageError)
            setInterval(() => {
                hideMessageStatus(messageError)
            }, 5000);
          }
        );
      });
  };

  function showMessageStatus(status) {
    status.classList.remove('hide')
    status.classList.add('show')
  }

  function hideMessageStatus(status) {
    status.classList.remove('show')
    status.classList.add('hide')
  }
