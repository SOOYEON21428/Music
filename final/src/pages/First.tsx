import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import '../styles/First.css';

const First: React.FC = () => {
    const router = useRouter();

    const handleFindVolunteerClick = () => {
        router.push('/FindVolunteer');
    };

    const handleJoinEmergencyClick = () => {
        router.push('/join-emergency');
    };

    return (
        <div className="main-screen">
            <header className="header">
                <Image src="/images/image-23.png" alt="search" width={40} height={40} />
                <div className="center-image-container">
                    <Image src="/images/first.png" alt="First Image" width={120} height={45} />
                </div>
                <Image src="/images/alert.png" alt="alert" className="alert-icon" width={50} height={50} />
            </header>
            <div className="content">
                <div className="intro">
                    <h1>사회 공헌 활동</h1>
                    <p>쉽고 빠르게 봉사 활동에 참여하세요.</p>
                </div>
                <div className="activity-card" id="FindVolunteer" onClick={handleFindVolunteerClick}>
                    <h2>가까운 봉사 활동 찾기</h2>
                    <p>주변에서 진행 중인 봉사 활동을 찾아보세요.</p>
                </div>
                <div className="activity-card" id="join-emergency" onClick={handleJoinEmergencyClick}>
                    <h2>긴급 구호 활동 참여</h2>
                    <p>도움이 필요한 곳에 즉시 지원하세요.</p>
                </div>
            </div>
        </div>
    );
};

export default First;
