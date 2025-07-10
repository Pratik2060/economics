// Placeholder for forgot password email template
// You can customize this function to return your actual email HTML/text
export default function forgotPasswordTemplate({ username, otp }) {
    return `Hello ${username}, your OTP is: ${otp}`;
}
