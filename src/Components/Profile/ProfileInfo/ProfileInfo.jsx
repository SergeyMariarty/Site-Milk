import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (<div className={s.ProfileInfo}>
        <div>
            <img src='https://i.pinimg.com/originals/8d/9d/63/8d9d632aba76c983b830a967f692369f.gif' alt='logo' />
        </div>
        <div className={s.descriptionBlock}>
            Ava + description
        </div>
    </div>
    );
}
export default ProfileInfo;