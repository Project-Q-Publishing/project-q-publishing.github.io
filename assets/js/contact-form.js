// Contact Form Enhancement
// Provides AJAX submission and better user feedback

(function() {
  'use strict';

  const form = document.querySelector('.contact-form');
  const statusMessage = document.getElementById('form-status');
  const submitButton = form ? form.querySelector('button[type="submit"]') : null;

  if (!form) return;

  // Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Disable submit button to prevent double submission
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
    }

    // Clear previous status messages
    statusMessage.textContent = '';
    statusMessage.className = 'form-status';

    // Get form data
    const formData = new FormData(form);

    // Submit via AJAX
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function(response) {
      if (response.ok) {
        // Success
        statusMessage.textContent = 'Thank you! Your message has been sent successfully.';
        statusMessage.className = 'form-status success';
        form.reset();

        // Redirect to thank you page after a short delay
        setTimeout(function() {
          window.location.href = form.querySelector('input[name="_next"]').value;
        }, 1500);
      } else {
        // Formspree validation error
        return response.json().then(function(data) {
          if (data.errors) {
            const errors = data.errors.map(function(error) {
              return error.message;
            }).join(', ');
            throw new Error(errors);
          } else {
            throw new Error('There was a problem submitting your form. Please try again.');
          }
        });
      }
    })
    .catch(function(error) {
      // Error
      statusMessage.textContent = error.message || 'There was a problem submitting your form. Please try again.';
      statusMessage.className = 'form-status error';
    })
    .finally(function() {
      // Re-enable submit button
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
      }
    });
  });

  // Form validation feedback
  const requiredFields = form.querySelectorAll('[required]');
  requiredFields.forEach(function(field) {
    field.addEventListener('blur', function() {
      if (!field.validity.valid) {
        field.classList.add('invalid');
      } else {
        field.classList.remove('invalid');
      }
    });

    field.addEventListener('input', function() {
      if (field.validity.valid) {
        field.classList.remove('invalid');
      }
    });
  });
})();
