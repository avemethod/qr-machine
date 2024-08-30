import { useMemo, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { QRCodeSVG } from 'qrcode.react';
import { v4 as uuidv4 } from 'uuid';

import { GENERATE_DATA} from '../../data.js';
import gStyles from './generateStyles.module.css';
import { styled } from '@mui/material'; 
import TextFieldDefault from '@mui/material/TextField';
import ButtonDefault from '@mui/material/Button';

const TextField = styled(TextFieldDefault)({
    width: 400,
    marginBottom: 24,
    '.MuiInputBase-root': {
        color: 'rgba(50, 230, 183, 1)',
        '& fieldset': {
            borderColor: 'rgba(50, 230, 183, 0.25)',
            transition: 'all 0.2s ease'
        },
        '&:hover fieldset': {
            borderColor: 'rgba(50, 230, 183, 1)',
            transition: 'all 0.2s ease'
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(50, 230, 183, 1)',
            transition: 'all 0s ease'
        }
    },
    '& .MuiFormLabel-root': {
        color: 'rgba(50, 230, 183, 1)',
        '&.Mui-focused': {
            color: 'rgba(50, 230, 183, 1)'
        }
    }
});

const ButtonPush = styled(ButtonDefault)({
    width: 400,
    height: 50,
    color: 'rgba(50, 230, 183, 1)',
    backgroundColor: 'rgba(50, 230, 183, 0.05)',
    fontSize: 18,
    letterSpacing: 2,
    '&:hover': {
    backgroundColor: 'rgba(50, 230, 183, 0.15)',
  },
});

const ButtonBack = styled(ButtonDefault)({
    width: 400,
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

const QrGenerator = () => {

    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [showQr, setShowQr] = useState(false);

    // const showQrRef = useRef(false);

    const onClickHandler = (event) => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, {value:value, id: uuidv4()}]),
        );
        // showQrRef.current = false;

        setResult(value);
        setShowQr(true);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value)
        setResult('')

        // if (showQrRef.current === false){
        //     showQrRef.current = true;
        //     setTimeout(() => setShowQr(false),500)
        // }
    };

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            setResult(value);
            setShowQr(true);
            setValue('');
        }
      };

    return (
        <div className={gStyles.main}>
            {result && (
                <div className={gStyles.qrOutput} data-open={`${Boolean(result)}`}>
                    <QRCodeSVG 
                    size={200}
                    bgColor={"rgba(18, 19, 21, 1)"}
                    fgColor={"rgba(50, 230, 183, 1)"}
                    value={result}/>
                </div>
            )}
            <TextField 
            onKeyPress={handleKeyPress}
            label="QR-code"
            placeholder='Text'
            variant="outlined"
            type='text'
            value={value}
            onChange={onChangeHandler}
            />
            <ButtonPush id='qrButton' type='button' onClick={onClickHandler}>Generate</ButtonPush>
            <ButtonBack id='qrButton' type='button'>
                <Link className={gStyles.linkBox} to={'/'}>Back</Link>
            </ButtonBack>
        </div>
    );
};
export default QrGenerator;