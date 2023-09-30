
 function validateForm() {
        
        if (document.getElementById('firstName').value === '') {
            alert('First Name is required.');
            return false;
        }
        
        showPopup();
        
        return false;
    }
    
    function showPopup() {
        var form = document.getElementById('surveyForm');
        var popup = document.getElementById('popup');
        
        
        document.getElementById('popupFirstName').textContent = form.firstName.value;
        document.getElementById('popupLastName').textContent = form.lastName.value;
        document.getElementById('popupDob').textContent = form.dob.value;
        document.getElementById('popupCountry').textContent = form.country.value;
        
        
        var genderCheckboxes = form.querySelectorAll('input[name="gender"]:checked');
        var genders = [];
        genderCheckboxes.forEach(function(checkbox) {
            genders.push(checkbox.value);
        });
        document.getElementById('popupGender').textContent = genders.join(', ');
        
        document.getElementById('popupProfession').textContent = form.profession.value;
        document.getElementById('popupEmail').textContent = form.email.value;
        document.getElementById('popupMobile').textContent = form.mobile.value;
        
        popup.style.display = 'block';
    }
    
    function closePopup() {
        var form = document.getElementById('surveyForm');
        var popup = document.getElementById('popup');
        
        form.reset();
        
        popup.style.display = 'none';
    }
    
    function resetForm() {
        var form = document.getElementById('surveyForm');
        form.reset();
    }