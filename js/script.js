window.onload = () => {

    const timingInput = document.getElementById('timing');
    const timingError = document.getElementById('timing-error');
    
    timingInput.addEventListener('input', () => {
      const timingValue = timingInput.value.trim();
      
      const validTiming = /^([01]\d|2[0-3]):([0-5]\d)$/.test(timingValue);
      

      if (validTiming) {
        timingError.style.display = 'none';
        timingInput.classList.add('is-valid');
        timingInput.classList.remove('is-invalid');
      } else {
        timingError.style.display = 'block';
        timingInput.classList.add('is-invalid');
        timingInput.classList.remove('is-valid');
      }
    });
    
    

}



