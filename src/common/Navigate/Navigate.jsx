import { Link } from "react-router-dom";
import nStyles from './navigateStyles.module.css';
import { styled } from '@mui/material'; 
import ButtonDefault from '@mui/material/Button';

const Button = styled(ButtonDefault)({
    width: 400,
    height: 50,
    marginBottom: 22,
    color: 'rgba(50, 230, 183, 1)',
    backgroundColor: 'rgba(50, 230, 183, 0.05)',
    fontSize: 18,
    letterSpacing: 2,
    transition: 'all 0.2s ease',
    '&:hover': {
    backgroundColor: 'rgba(50, 230, 183, 0.15)',
    width: 440,
    // scale: '110%',
    transition: 'all 0.2s ease'
  },
});

const Navigate = () => {
    return (
        <div className={nStyles.main}>
            <nav className={nStyles.navigateBar}>
                <Button>
                    <Link className={nStyles.linkBox} to={'/generate-qr'}>Generate QR-code</Link>
                </Button>
                <Button>
                    <Link className={nStyles.linkBox} to={'/scan-qr'}>Scan QR-code</Link>
                </Button>
                <Button disabled>
                    <Link className={nStyles.linkBox} to={'/history-qr'}>History</Link>
                </Button>
            </nav>
        </div>
    );
};
export default Navigate;