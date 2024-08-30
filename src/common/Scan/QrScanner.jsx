import { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { Scanner } from '@yudiel/react-qr-scanner';

import { SCAN_DATA } from '../../data.js';
import { v4 as uuidv4 } from 'uuid';
import sStyles from './scanStyles.module.css';
import { styled } from '@mui/material'; 
import ButtonDefault from '@mui/material/Button';

const QrScanner = () => {

    const CustomP = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        fontSize: 18,
        padding: theme.spacing(1),
      }));

    const ButtonBack = styled(ButtonDefault)({
        width: 364,
        height: 50,
        marginTop: 12,
        color: 'rgba(198, 75, 99, 1)',
        backgroundColor: 'rgba(198, 75, 99, 0.05)',
        fontSize: 18,
        letterSpacing: 2,
        '&:hover': {
        backgroundColor: 'rgba(198, 75, 99, 0.15)',
      },
    });

    const [request, setReqest] = useState(null);

    // const refreshRequest = useRef();
    // refreshRequest.current = count;

    const scanHandler = (result) => {
        setReqest(result[0].rawValue);
      
        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, {value:result[0].rawValue, id:uuidv4()}]));
    };
    
    const optionsScan = {
        finder: false,
    };

    const stylesScan = {
        container: {
            width: 350,
            height: 350,
        }
    };

    return (
        <div className={sStyles.main}>
            <div className={sStyles.border}>
                <Scanner 
                classNames={sStyles.scanBorder}
                onScan={scanHandler}
                components={optionsScan}
                styles={stylesScan}
                />
            </div>
            {request && (
                <div className={sStyles.scanOutput}>
                    <CustomP>{request}</CustomP>
                </div>
            )}
            <ButtonBack id='qrButton' type='button'>
                <Link className={sStyles.linkBox} to={'/'}>Back</Link>
            </ButtonBack>
        </div>
    );
};
export default QrScanner;