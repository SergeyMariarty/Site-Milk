import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


const Message = (props) => {
    return  <div className={s.dialog}>{props.message}</div>
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Sanya" id="1" />
                <DialogItem name="Rostik" id="2" />
                <DialogItem name="Valik" id="3" />
                <DialogItem name="Uho" id="4" />
                <DialogItem name="Toha" id="5" />
                <DialogItem name="Leha" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How is your it-kamasutra?" />
                <Message message="YO" />
                <Message message="YO" />
                <Message message="YO" />

            </div>
        </div>
    )
}
export default Dialogs;