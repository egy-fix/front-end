import React, { FC } from 'react';
import Container from '@mui/material/Container';
import { Button, Stack, Typography } from '@mui/material';
import ManStanding from '../Assets/man-standing.png';


export const IntroInfo: FC = (): JSX.Element => {
    return (
        <Container maxWidth="lg">
            <Stack mt={10} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack>
                    <Typography fontSize={'44px'} fontWeight={'bold'} color={'#0355cc'}>Repair and</Typography>
                    <Typography fontSize={'44px'} fontWeight={'bold'} color={'#0355cc'}>Maintenance</Typography>
                    <Typography fontSize={'44px'} fontWeight={'bold'} color={'#0355cc'}>Services</Typography>

                    <Typography mt={3} mb={5}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui harum voluptatem adipisci.
                        Quos molestiae saepe dicta nobis pariatur,
                        tempora iusto, ad possimus soluta hic praesentium
                        mollitia consequatur beatae, aspernatur culpa.
                    </Typography>

                    <Button sx={{ backgroundColor: '#0355cc', width: 'fit-content' }} variant="contained">Contact us</Button>
                </Stack>

                <img src={ManStanding} />
            </Stack>
        </Container>
    )
}
