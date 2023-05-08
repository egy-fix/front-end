import React, { FC } from 'react';

import './style.css';
import './responsive.css';
import './bootstrap.css';
import './font-awesome.min.css';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';


export const GetInTouchSec: FC = (): JSX.Element => {
    return (
        <section className="info_section ">
            <div className="container">
                <h4>
                    Get In Touch
                </h4>
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="info_items">
                            <div className="row">
                                <div className="col-md-4">
                                    <a href="">
                                        <div className="item ">
                                            <div className="img-box ">
                                                <LocationOnIcon sx={{ color: '#fff' }} />
                                            </div>
                                            <p>
                                                Lorem Ipsum is simply dummy text
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4">
                                    <a href="">
                                        <div className="item ">
                                            <div className="img-box ">
                                                <PhoneAndroidIcon sx={{ color: '#fff' }} />
                                            </div>
                                            <p>
                                                +02 1234567890
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4">
                                    <a href="">
                                        <div className="item ">
                                            <div className="img-box">
                                                <EmailIcon sx={{ color: '#fff' }} />
                                            </div>
                                            <p>
                                                demo@gmail.com
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
