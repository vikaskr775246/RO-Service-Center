import './banner.css';
import BannerForm from './bannerForm';

const Banner = (props) => {
    return (
        <div className='banner'>
            <div className='banner-wapper'>
                <div className='hide-div'></div>
                <div className='banner-text'>
                    <h3 className='title">' >{props.bantext.title}</h3>
                    <h1 className='tb-m-15 Sub-title'>{props.bantext.heading}</h1>
                    <p className='heroSection-p'>{props.bantext.description}</p>
                    <BannerForm formData={props.bantext.form} />
                </div>
            </div>
        </div>
    );
}
export default Banner;