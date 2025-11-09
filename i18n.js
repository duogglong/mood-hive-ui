import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Các bản dịch
const resources = {
    en: {
        translation: {
            signInWithYourAccount: "Sign in with your account",
            signIn: "Sign in",
            yourEmail: "Your email",
            password: "Password",
            rememberMe: "Remember me",
            forgotPassword: "Forgot password?",
            dontHaveAccount: "Don’t have an account yet?",
            signUp: "Sign up",
        },
    },
    vi: {
        translation: {
            signInWithYourAccount: "Đăng nhập với tài khoản của bạn",
            signIn: "Đăng nhập",
            yourEmail: "Email của bạn",
            password: "Mật khẩu",
            rememberMe: "Ghi nhớ đăng nhập",
            forgotPassword: "Quên mật khẩu?",
            dontHaveAccount: "Chưa có tài khoản?",
            signUp: "Đăng ký",
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'vi', // ngôn ngữ mặc định
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
