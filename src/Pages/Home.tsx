import React, { FC } from 'react';

// Components
import { IntroSec } from '../Layouts/IntroSec';
import { AboutUsSec } from '../Components/AboutUsSec';
import { ProvideSex } from '../Components/ProvideSex';
import { Services } from '../Components/Services';
import { GetInTouchSec } from '../Components/GetInTouchSec';

export const Home: FC = (): JSX.Element => {
    return (
        <>
            <IntroSec />
            <AboutUsSec />
            <ProvideSex />
            <Services />
            <GetInTouchSec />
        </>
    )
}
