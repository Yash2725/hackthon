document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const sendOtpBtn = document.getElementById('sendOtpBtn');
    const submitBtn = document.getElementById('submitBtn');
    const otpGroup = document.getElementById('otpGroup');

    // Initially hide OTP field
    otpGroup.style.display = 'none';
    submitBtn.style.display = 'none';

    // OTP sending
    sendOtpBtn.addEventListener('click', function() {
        const mobile = document.getElementById('mobile').value;
        
        if (mobile.length < 10) {
            Swal.fire({
                title: 'Invalid Number',
                html: 'Please enter a valid 10-digit mobile number',
                icon: 'error',
                confirmButtonColor: 'var(--royal-purple)'
            });
            return;
        }

        // Show OTP field
        otpGroup.style.display = 'block';
        submitBtn.style.display = 'block';
        sendOtpBtn.style.display = 'none';

        Swal.fire({
            title: 'OTP Sent!',
            html: `Verification code sent to <b>${mobile}</b><br><br>Demo OTP: <span style="color:var(--royal-purple)">123456</span>`,
            icon: 'success',
            timer: 3000
        });
    });

    // Form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const otp = document.getElementById('otp').value;
        
        if (otp === '123456') {
            // Store user data in localStorage
            const userData = {
                name: document.getElementById('name').value,
                mobile: document.getElementById('mobile').value
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            Swal.fire({
                title: 'Wrong OTP',
                text: 'Please enter the correct 6-digit code',
                icon: 'error',
                confirmButtonColor: 'var(--royal-purple)'
            });
        }
    });
});