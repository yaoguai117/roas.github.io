import './styles.scss';

import RightBack from '../../assets/project/bg.png';
import WaveLine from '../../assets/project/Mask Group.png';
import Logo from '../../assets/project/logo_white.png';
import Cross from '../../assets/project/cross.png';
import Success from '../../assets/project/Success.svg';
import Error from '../../assets/project/Error.svg';
import SentIcon from '../../assets/project/sent.svg';

import Linkedin from "../../assets/png/linkedin.png";
import Pinterest from "../../assets/png/pinterest.png";
import Instagram from "../../assets/png/instagram.png";
import Vimeo from "../../assets/png/vimeo.png";

import {useHistory} from "react-router-dom";
import {Button} from "reactstrap";
import {useState} from "react";


const Project = () => {
    const history = useHistory();

    const [sent, setSent] = useState(false)

    const handleOnBlur = (inner) => {
        let hasError;
        if (inner.target.type === 'text') {
            hasError = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(inner.target.value) || inner.target.value.length < 3;
        } else {
            hasError = !inner.target.value.includes('@') || inner.target.value.length < 3;
        }

        if (hasError) {
            inner.target.parentElement.className = 'form-input input-error';
        } else {
            inner.target.parentElement.className = 'form-input input-success';
        }

    }

    return (
        <div className={'need-a-project'}>
            <span style={{left: '4vw'}} className={'main-page-icons'}>
                <img className={'main-page-linkedin'} src={Linkedin} alt={'linkedin'}/>
                <img className={'main-page-pinterest'} src={Pinterest} alt={'pinterest'}/>
                <img className={'main-page-instagram'} src={Instagram} alt={'instagram'}/>
                <img className={'main-page-vimeo'} src={Vimeo} alt={'vimeo'}/>
            </span>

            <img className={'need-a-project-right-back'} src={RightBack} alt={'background'}/>
            <img className={'need-a-project-wave-line'} src={WaveLine} alt={'wave'}/>


                    <div className={'need-a-project-content'}>
                        <img className={'logo'} src={Logo} alt={'logo'}/>
                        <img onClick={() => history.push('/')} className={'cross'} src={Cross} alt={'cross'}/>
                        {
                            !sent
                                ? ( <span>
                                        <span className={'need-a-project-content-title'}>Need a project?</span>
                                        <span className={'need-a-project-content-subtitle'}>Brief us</span>

                                        <form className={'project-form'}>
                                            <div className={'form-input'}>
                                                <span className={'label'}>Your name</span>
                                                <input onBlur={handleOnBlur} type={'text'} placeholder={'John Doe'}/>
                                                <img className={'error-icon'} src={Error} alt={'error'}/>
                                                <img className={'success-icon'} src={Success} alt={'success'}/>
                                            </div>
                                            <div className={'form-input'}>
                                                <span className={'label'}>Your email</span>
                                                <input onBlur={handleOnBlur} type={'email'} placeholder={'john_doe@gmail.com'}/>
                                                <img className={'error-icon'} src={Error} alt={'error'}/>
                                                <img className={'success-icon'} src={Success} alt={'success'}/>
                                            </div>
                                            <div className={'form-input'}>
                                                <span className={'label'}>Budget</span>
                                                <input onBlur={handleOnBlur} type={'text'} placeholder={'Not Sure'}/>
                                                <img className={'error-icon'} src={Error} alt={'error'}/>
                                                <img className={'success-icon'} src={Success} alt={'success'}/>
                                            </div>
                                            <div className={'form-input'}>
                                                <span className={'label'}>Type of video</span>
                                                <input onBlur={handleOnBlur} type={'text'} placeholder={'Product'}/>
                                                <img className={'error-icon'} src={Error} alt={'error'}/>
                                                <img className={'success-icon'} src={Success} alt={'success'}/>
                                            </div>
                                            <div className={'form-large-input form-input'}>
                                                <span className={'label'}>Message</span>
                                                <input type={'text'}/>
                                            </div>
                                        </form>

                                        <Button onClick={() => setSent(true)} className={'main-button confirm-button'}>
                                            Confirm
                                        </Button>
                                    </span>)
                                : (
                                    <div className={'need-a-project-sent'}>
                                        <img className={'need-a-project-sent-icon'} src={SentIcon} alt={'sent-icon'}/>
                                        <div style={{position: 'relative'}}>
                                            <span className={'need-a-project-sent-text2'}>Success Text</span>
                                            <span className={'need-a-project-sent-text1'}>Success</span>
                                            <span className={'need-a-project-sent-text3'}>Sapiente vel aut aspernatur voluptatem corrupti esse odio est. Numquam sit minus. Non nostrum quisquam aliquam labore deleniti</span>
                                        </div>
                                    </div>
                                  )
                        }
                    </div>
        </div>
    )
}

export default Project;