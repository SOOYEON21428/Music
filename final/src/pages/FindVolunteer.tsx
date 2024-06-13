import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import '../styles/Volunteer.css';

interface Activity {
    id: number;
    title: string;
    description: string;
    image: string;
}

const FindVolunteer: React.FC = () => {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivityId, setSelectedActivityId] = useState<number | null>(null);

    useEffect(() => {
        setActivities([
            {
                id: 1,
                title: '어르신 돌봄 봉사',
                description: '혼자 계신 어르신들과 시간 보내기',
                image: '/images/senior.png'
            },
            {
                id: 2,
                title: '아이 돌봄 봉사',
                description: '저소득가정 아이들을 위한 무료 학습 보조',
                image: '/images/children.png'
            },
            {
                id: 3,
                title: '장애인 박물관 관람 도우미',
                description: '관람의 어려움을 느끼지 않도록 보조',
                image: '/images/disable.png'
            }
        ]);
    }, []);

    const handleApplyClick = (activityId: number) => {
        setSelectedActivityId(activityId);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="main-screen">
            <div className="header">
                <Image src="/images/image-23.png" alt="search" width={50} height={50} />
                <div className="center-image-container">
                    <Image src="/images/first.png" alt="투게더!" width={200} height={55} />
                </div>
                <Image src="/images/alert.png" alt="alert" width={65} height={65} />
            </div>
            <div className="divider-top"></div>
            <div className="banner-container">
                <Slider {...settings}>
                    <div className="banner-slide">
                        <Image src="/images/volunteer1.png" alt="배너 이미지 1" layout="responsive" width={309} height={369} />
                    </div>
                    <div className="banner-slide">
                        <Image src="/images/volunteer2.png" alt="배너 이미지 2" layout="responsive" width={309} height={369} />
                    </div>
                    <div className="banner-slide">
                        <Image src="/images/volunteer3.png" alt="배너 이미지 3" layout="responsive" width={309} height={369} />
                    </div>
                </Slider>
            </div>

            <main className="activities-container">
                {activities.map(activity => (
                    <div className="activity" key={activity.id}>
                        <Image src={activity.image} alt={activity.title} width={100} height={100} />
                        <h3>{activity.title}</h3>
                        <p>{activity.description}</p>
                        <button onClick={() => handleApplyClick(activity.id)}>신청하기</button>
                    </div>
                ))}
            </main>

            <div className="divider-bottom"></div>
            <div className="bottom">
                <Image src="/images/menu.png" alt="menu" className="icon" />
                <Image src="/images/home.png" alt="home" className="icon" />
                <Image src="/images/my.png" alt="my" className="icon" />
            </div>
        </div>
    );
}

export default FindVolunteer;
