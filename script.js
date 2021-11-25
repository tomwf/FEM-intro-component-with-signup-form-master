const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

const showErrorMsg = (element, msg) => {
  const errorMsg = msg;
  const span = document.createElement('span');

  span.innerHTML = `<em>${errorMsg}</em>`;
  element.parentElement.appendChild(span);
}

submitBtn.onclick = (evt) => {
  const showEmptyErrorMsg = (element) => {
    const errorMsg = `${element.getAttribute('placeholder')} cannot be empty`;

    showErrorMsg(element, errorMsg);
  }

  const showEmptyErrorIcon = (element) => {
    const img = document.createElement('img');

    img.src = 'images/icon-error.svg';
    img.alt = 'empty error icon';
    element.parentElement.appendChild(img);
  }

  evt.preventDefault();

  if (fname.value === "" && fname.className !== 'is-empty') {
    fname.className = 'is-empty';
    showEmptyErrorMsg(fname);
    showEmptyErrorIcon(fname);
  }
  
  if (lname.value === "" && lname.className !== 'is-empty') {
    lname.className = 'is-empty';
    showEmptyErrorMsg(lname);
    showEmptyErrorIcon(lname);
  }

  if (email.value === "" && email.className !== 'is-empty') {
    email.className = 'is-empty';
    showEmptyErrorMsg(email);
    showEmptyErrorIcon(email);
  }

  if (password.value === "" && password.className !== 'is-empty') {
    password.className = 'is-empty';
    showEmptyErrorMsg(password);
    showEmptyErrorIcon(password);
  }

  if (submitBtn.value === "" && submitBtn.className !== 'is-empty') {
    submitBtn.className = 'is-empty';
    showEmptyErrorMsg(submitBtn);
    showEmptyErrorIcon(submitBtn);
  }
}

document.addEventListener('keyup', (evt) => {

  const removeOutline = element => element.classList.remove('is-empty');
  const deleteElement = (parentElement, targetElement) => {
      parentElement.removeChild(parentElement.getElementsByTagName(targetElement)[0])
    }
  const removeEmptyError = element => {
    deleteElement(element.parentNode, 'span');
    deleteElement(element.parentNode, 'img');
  }
  const hasErrorMsg = element => element.parentNode.querySelector('span');
  const element = evt.target;

  if (element.localName === 'input') {
    switch (element.id) {
      case 'fname':
        if (element.className === 'is-empty') {
          removeEmptyError(element);
          removeOutline(element);
        }
        break;
      case 'lname':
        if (element.className === 'is-empty') {
          removeEmptyError(element);
          removeOutline(element);
        }
        break;
      case 'email':
        if (element.className === 'is-empty') {
          removeEmptyError(element);
          removeOutline(element);
        } else {
          const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          const emptyEmailMsg = 'Looks like this is not an email';

          const removeEmailError = element => {
            deleteElement(element.parentNode, 'span');
            element.classList.remove('email-not-valid');
          }

          if (element.value === '') {
            if (element.parentNode.querySelector('span')) {
              removeEmailError(element);
            }
            return
          }

          if (element.value.match(emailPattern)) {
            if (!hasErrorMsg) {
              return
            }
            removeEmailError(element);
          } else {
            if (hasErrorMsg) {
              if (element.value.length === '') {
                removeEmailError(element);
              }
              return
            }
            showErrorMsg(element, emptyEmailMsg);
            element.className = 'email-not-valid';
          }
        }
        break;
      case 'password':
        if (element.className === 'is-empty') {
          removeEmptyError(element);
          removeOutline(element);
        }
        break;
    }
  }

});
