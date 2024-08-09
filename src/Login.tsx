import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !password || (!isLogin && !email)) {
            setPopupMessage('모든 필드를 채워주세요.');
            setShowPopup(true);
            return;
        }

        if (isLogin) {
            const storedPassword = localStorage.getItem(`password_${username}`);
            if (storedPassword === password) {
                setPopupMessage('로그인 성공!');
                localStorage.setItem('loggedInUser', username);
                setTimeout(() => {
                    navigate('/'); // 로그인 성공 후 홈 페이지로 이동
                }, 1000);
            } else {
                setPopupMessage('로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.');
                setShowPopup(true);
            }
        } else {
            if (username && password && email) {
                localStorage.setItem(`password_${username}`, password);
                localStorage.setItem(`email_${username}`, email);
                setPopupMessage('회원가입 성공!');
                setIsLogin(true);
                setShowPopup(true);
            } else {
                setPopupMessage('회원가입 실패: 모든 필드를 채워주세요.');
                setShowPopup(true);
            }
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="auth-page">
            <h2>{isLogin ? '로그인' : '회원가입'}</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="auth-input"
                    required
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth-input"
                    required
                />
                {!isLogin && (
                    <input
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="auth-input"
                        required
                    />
                )}
                <button type="submit" className="auth-button">
                    {isLogin ? '로그인' : '회원가입'}
                </button>
            </form>

            <button
                className="toggle-auth-mode"
                onClick={() => setIsLogin(!isLogin)}
            >
                {isLogin ? '회원가입 하기' : '로그인 하기'}
            </button>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>{popupMessage}</p>
                        <button onClick={closePopup} className="close-popup-button">확인</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
