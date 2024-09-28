const generateBtn = document.getElementById('generateBtn');
const otpDisplay = document.getElementById('otpDisplay');
const copyBtn = document.getElementById('copyBtn');
const message = document.getElementById('message');

generateBtn.addEventListener('click', generateOTP);
copyBtn.addEventListener('click', copyToClipboard);


function generateOTP() {
    const otp = Math.floor(100000 + Math.random() * 900000);
    otpDisplay.textContent = otp;
    message.textContent = ''; 
}


function copyToClipboard() {
    const otp = otpDisplay.textContent;
    if (otp) {
        navigator.clipboard.writeText(otp)
            .then(() => {
                message.textContent = 'OTP copied to clipboard!';
            })
            .catch(err => {
                message.textContent = 'Failed to copy OTP!';
            });
    } else {
        message.textContent = 'No OTP generated!';
    }
}
