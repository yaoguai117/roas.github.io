import './styles.scss';
import './mainpage.scss';
import './page-2.scss';
import './page-3.scss';
import './page-33.scss';
import './page-4.scss';
import WhiteLogo from '../../assets/svg/logo_white.svg';
import UnderLogo from '../../assets/svg/anim_stroke.svg';
import NeedProject from '../../assets/icons/Union.svg';
import Triangle from '../../assets/icons/Polygon 1.svg';
import VideoPlayer from '../../assets/backgrounds/video_player.png';
import MainTitle from '../../assets/png/Title.png';
import CursorCircle from '../../assets/png/cursor_content_dealer.png';
import MainArrowDown from '../../assets/png/scroll.png';
import Instagram from '../../assets/png/instagram.png';
import Linkedin from '../../assets/png/linkedin.png';
import Vimeo from '../../assets/png/vimeo.png';
import Pinterest from '../../assets/png/pinterest.png';
import MainButton from '../../assets/png/main_button.png';
import ProjectButton from '../../assets/png/button_Need_a_project.png';
import Perehod from '../../assets/png/perehod.png';
import Perehod2 from '../../assets/png/perehod (2).png';

import Mockup from '../../assets/png/mockup 1.png';
import Text01 from '../../assets/page-2/01.png';
import Design from '../../assets/page-2/where design meets performance.png';
import Page2Button from '../../assets/page-2/button.png';
import Page2Icon1 from '../../assets/page-2/Group 13.png';
import Page2Icon2 from '../../assets/page-2/Group 13-1.png';
import Page2Icon3 from '../../assets/page-2/Group 13-2.png';
import LogoArray from '../../assets/page-2/logos_transition.png';

import Text02 from '../../assets/page-3/02.png';
//import GreenLine from '../../assets/page-3/anim_stroke.png';
import Mockup31 from '../../assets/page-3/mockup.png';
import Circles from '../../assets/page-3/Union.png';
import Cross from '../../assets/page-3/Union-1.png';
import VisaIcon from '../../assets/page-3/VISA logo.png';
import VisaEx1 from '../../assets/page-3/Rectangle 41.png';
import VisaEx2 from '../../assets/page-3/Rectangle 42.png';

import MockupYeger from '../../assets/page33/iphone_mockup 1.png';
import Frame33 from '../../assets/page33/Frame.png';
import YegerEx1 from '../../assets/page33/Rectangle 41.png';
import KasperLogo from '../../assets/page33/Kaspersky_logo 1.png';
import KasperMockup from '../../assets/page33/mockup.png';
import KasperEx1 from '../../assets/page33/Rectangle 34.png';
import KasperEx2 from '../../assets/page33/Rectangle 35.png';

import Vector from '../../assets/page33/Vector.png';
import Mockup4 from '../../assets/page33/mockup2.png';
import KFC1 from '../../assets/page33/Rectangle 410.png';
import KFC2 from '../../assets/page33/Mask Group (2).png';
import KFC3 from '../../assets/page33/Rectangle 430.png';

import Mockup6 from '../../assets/page33/mockup 6.svg';
import TitleGoogle from '../../assets/page33/Union (1).png';
import Google1 from '../../assets/page33/Rectangle 51.png';
import Google2 from '../../assets/page33/Mask Group (2).png';
import Google3 from '../../assets/page33/Rectangle 430.png';

import Page4Icon1 from '../../assets/page-4/Analis.png';
import Page4Icon2 from '../../assets/page-4/Production.png';
import Page4Icon3 from '../../assets/page-4/Strategy.png';
import Page4Icon4 from '../../assets/page-4/Testing.png';
import Icon03 from '../../assets/page-4/03.png';

import ArrowButton from '../../assets/svg/Arrow 1.svg';
import {Button} from 'reactstrap';

import GreenLine from '../GreenLine'
import {useHistory} from "react-router-dom";


const HomePage = () => {
    const history = useHistory();

    return <div className={'homepage'}>
        <div className={'navigation row'}>
            <div className="navigation-left col-4">
                <img className={'navigation-left-logo'} src={WhiteLogo} alt={'logo'}/>
                <img className={'navigation-left-under-logo'} src={UnderLogo} alt={'profit'}/>
            </div>
            <div className="col-8 navigation-right">
                <div className={'navigation-right-links'}>
                    <button className={'navigation-right-links-text'}><span>From Us</span></button>
                    <button className={'navigation-right-links-text'}><span>Work</span></button>
                    <button className={'navigation-right-links-text'}><span>Services</span></button>
                    <button className={'navigation-right-links-text'}><span>Flow</span></button>
                    <button className={'navigation-right-links-text'}><span>Blog</span></button>
                    <span onClick={() => history.push('need-a-project')} className={'navigation-right-links-project'}>
                        <img src={NeedProject} alt={'project'}/>
                        Need a project?
                    </span>
                    <span className={'navigation-right-links-language'}>
                        ENG
                        <img src={Triangle} alt={'language'}/>
                    </span>
                </div>
            </div>

        </div>

        <div className={'main-page'}>
            <img className={'main-page-video-player'} src={VideoPlayer} alt={'video-player'}/>
            <img className={'main-page-main-title'} src={MainTitle} alt={'main-title'}/>
            <img className={'main-page-cursor-circle'} src={CursorCircle} alt={'cursor-circle'}/>
            <img className={'main-page-arrow-down'} src={MainArrowDown} alt={'arrow'}/>

            <span className={'main-page-icons'}>
                <img className={'main-page-linkedin'} src={Linkedin} alt={'linkedin'}/>
                <img className={'main-page-pinterest'} src={Pinterest} alt={'pinterest'}/>
                <img className={'main-page-instagram'} src={Instagram} alt={'instagram'}/>
                <img className={'main-page-vimeo'} src={Vimeo} alt={'vimeo'}/>
            </span>
            <Button onClick={() => history.push('need-a-project')}  className={'main-page-button'}> Hire Us <img src={ArrowButton} alt={'arrow'}/></Button>

            <span className={'main-page-text'}>Impactful performance driven solutions and Top-flight creative. When you need increase ROAS - we here!</span>

            <span className={'main-page-footer'}>
                <span>Leave your email and we'll tell you more about how we work</span>
                <input type={'email'} placeholder={'Email'}/>
                {/*<img src={ProjectButton} alt={'button'}/>*/}
                <Button className={'main-button main-page-footer-button'}>Send</Button>
            </span>

        </div>
        <div className={'main-page-cut'}>
            <img className={'main-cut'} src={Perehod} alt={'cut'}/>
            <img className={'main-cut-2'} src={Perehod2} alt={'cut'}/>
        </div>


        <div className={'page-2'}>
            <img className={'page-2-mockup'} src={Mockup} alt={'mockup'}/>
            <img className={'page-2-01'} src={Text01} alt={'01'}/>

            <span className={'page-2-title-text'}>Maximize ROAS with mobile-optimized video adS</span>

            <img className={'page-2-red-line'} src={Design} alt={'red-line'}/>

            <span className={'page-2-text'}>Our background in TV, journalism, marketing and video production has given us a platform to resolve hardest issues</span>

            <img className={'page-2-button'} src={Page2Button} alt={'button'}/>

            <span className={'page-2-icon1'}>
                <img src={Page2Icon1} alt={'icon'}/>
                <span className={'page-2-icon-text'}>years of extensive content production experience</span>
            </span>
            <span className={'page-2-icon2'} >
                <img src={Page2Icon2} alt={'icon'}/>
                <span className={'page-2-icon-text'}>won local and international awards</span>
            </span>
            <span className={'page-2-icon3'} >
                <img src={Page2Icon3} alt={'icon'}/>
                <span className={'page-2-icon-text'}>this is why we came here</span>
            </span>

            <img className={'page-2-logos'} src={LogoArray} alt={'partners'}/>
        </div>

        <div className={'main-page-cut'}>
            <img className={'main-cut-page-2'} src={Perehod} alt={'cut'}/>
        </div>

        <div className={'page-3'}>
            <img className={'page-3-text02'} src={Text02} alt={'02'}/>

            <span className={'page-3-title'}>Featured Work</span>
            <span className={'page-3-title page-3-title-2'}>Mobile-optimized video ads we’ve created</span>
            <span className={'page-3-text'}>Where data meets performance roas.pro has developed creatives worth over $ 10 million of ad spend</span>
        </div>

        <GreenLine/>

        <div className={'page-3-2'}>
            <img className={'page-3-2-mockup-31'} src={Mockup31} alt={'mockup'}/>

            <img className={'page-3-2-visa'} src={VisaIcon} alt={'visa'}/>
            <img className={'page-3-2-cross'} src={Cross} alt={'cross'}/>
            <img className={'page-3-2-circles'} src={Circles} alt={'circles'}/>
            <img className={'page-3-2-ex1-visa'} src={VisaEx1} alt={'link'}/>
            <img className={'page-3-2-ex2-visa'} src={VisaEx2} alt={'link'}/>

            <span className={'page-3-2-title'}>Visa & Olimpic Games (TOP 1)</span>
            <span className={'page-3-2-text1'}>Sapiente vel aut aspernatur voluptatem corrupti esse odio est. Numquam sit minus. Non nostrum quisquam aliquam labore deleniti. Eum velit architecto doloremque voluptatum. Quod iusto sunt ad. Reprehenderit ex possimus ut aliquam enim</span>
            <span className={'page-3-2-text2'}>Available materials</span>
        </div>

        <GreenLine/>

        <div className={'page-3-3'}>
            <img className={'page-3-3-mockup'} src={MockupYeger} alt={'mockup'}/>
            <img className={'page-3-3-frame'} src={Frame33} alt={'frame'}/>
            <img className={'page-3-3-ex1-yeger'} src={YegerEx1} alt={'link'}/>

            <span className={'page-3-2-title page-3-3-title'}>Jagermeister</span>
            <span className={'page-3-2-text1 page-3-3-text1'}>Sapiente vel aut aspernatur voluptatem corrupti esse odio est. Numquam sit minus. Non nostrum quisquam aliquam labore deleniti. Eum velit architecto doloremque voluptatum. Quod iusto sunt ad. Reprehenderit ex possimus ut aliquam enim</span>
            <span className={'page-3-2-text2 page-3-3-text2'}>Available materials</span>
        </div>

        <GreenLine/>

        <div className={'page-3-4'}>
            <img className={'page-3-4-mockup'} src={KasperMockup} alt={'mockup'}/>
            <img className={'page-3-4-logo'} src={KasperLogo} alt={'logo'}/>
            <img className={'page-3-4-ex1-kasper'} src={KasperEx1} alt={'link'}/>
            <img className={'page-3-4-ex2-kasper'} src={KasperEx2} alt={'link'}/>

            <span className={'page-3-4-title '}>Kaspersky</span>
            <span className={'page-3-4-text1'}>Sapiente vel aut aspernatur voluptatem corrupti esse odio est. Numquam sit minus. Non nostrum quisquam aliquam labore deleniti. Eum velit architecto doloremque voluptatum. Quod iusto sunt ad. Reprehenderit ex possimus ut aliquam enim</span>
            <span className={'page-3-4-text2'}>Available materials</span>
        </div>

        <GreenLine/>

        <div className={'page-3-5'}>
            <img className={'page-3-5-mockup'} src={Mockup4} alt={'mockup'}/>
            <img className={'page-3-5-logo'} src={Vector} alt={'logo'}/>
            <img className={'page-3-5-ex1'} src={KFC1} alt={'link'}/>
            <img className={'page-3-5-ex2'} src={KFC2} alt={'link'}/>
            <img className={'page-3-5-ex3'} src={KFC3} alt={'link'}/>

            <span className={'page-3-2-title page-3-5-title'}>KFC</span>
            <span className={'page-3-2-text1 page-3-5-text1'}>Sapiente vel aut aspernatur voluptatem corrupti esse odio est. Numquam sit minus. Non nostrum quisquam aliquam labore deleniti. Eum velit architecto doloremque voluptatum. Quod iusto sunt ad. Reprehenderit ex possimus ut aliquam enim</span>
        </div>

        <GreenLine/>

        <div className={'page-3-6'}>

            <img className={'page-3-6-mockup'} src={Mockup6} alt={'mockup'}/>
            <img className={'page-3-6-logo'} src={TitleGoogle} alt={'logo'}/>
            <img className={'page-3-6-ex1'} src={Google1} alt={'link'}/>
            <img className={'page-3-6-ex2'} src={Google2} alt={'link'}/>
            <img className={'page-3-6-ex3'} src={Google3} alt={'link'}/>


            <span className={'page-3-2-title page-3-6-title'}>Google</span>
            <span className={'page-3-2-text1 page-3-6-text1'}>Sapiente vel aut aspernatur voluptatem corrupti esse odio est. Numquam sit minus. Non nostrum quisquam aliquam labore deleniti. Eum velit architecto doloremque voluptatum. Quod iusto sunt ad. Reprehenderit ex possimus ut aliquam enim</span>
        </div>

        <GreenLine/>

        {/*<div className={'page-4'}>
            <img className={'page-4-03'} src={Icon03} alt={'03'}/>
            <span className={'page-4-title'}>Our services</span>
            <span className={'page-4-subtitle'}>Our expertise in analytics, strategy, hypothesis generation, producing and testing allows us to drive explosive growth for our clients.</span>

            <div className={'page-4-imgs'}>
                <div className={'page-4-imgs-1'}>
                    <span className={'page-4-imgs-label'}>Some text</span>
                    <span className={'page-4-imgs-title'}>Analytics</span>
                    <span className={'page-4-imgs-subtitle'}>About this section in a nutshell. This text is for visibility.</span>
                    <img src={Page4Icon1} alt={'icon'}/>
                </div>

                <div className={'page-4-imgs-2'}>
                    <span className={'page-4-imgs-label'}>Some text</span>
                    <span className={'page-4-imgs-title'}>Production</span>
                    <span className={'page-4-imgs-subtitle'}>About this section in a nutshell. This text is for visibility.</span>
                    <img src={Page4Icon2} alt={'icon'}/>
                </div>

                <div className={'page-4-imgs-3'}>
                    <span className={'page-4-imgs-label'}>Some text</span>
                    <span className={'page-4-imgs-title'}>Strategy</span>
                    <span className={'page-4-imgs-subtitle'}>About this section in a nutshell. This text is for visibility.</span>
                    <img src={Page4Icon3} alt={'icon'}/>
                </div>

                <div className={'page-4-imgs-4'}>
                    <span className={'page-4-imgs-label'}>Some text</span>
                    <span className={'page-4-imgs-title'}>Testing</span>
                    <span className={'page-4-imgs-subtitle'}>About this section in a nutshell. This text is for visibility.</span>
                    <img src={Page4Icon4} alt={'icon'}/>
                </div>
            </div>
        </div>*/}
    </div>
}

export default HomePage;