console.log('Hello, World!');
const purposeRadios = document.querySelectorAll('input[name="purpose"]');
const hourlyRateDiv = document.querySelector('.hourly-rate');

purposeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.value === 'hiring') {
            hourlyRateDiv.style.display = 'block';
        } else {
            hourlyRateDiv.style.display = 'none';
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log('Form submitted successfully:', data);
            alert('Form submitted successfully!')
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
});
