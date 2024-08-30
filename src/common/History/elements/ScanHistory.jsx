import { SCAN_DATA } from '../../../data.js'
import { QRCodeSVG } from 'qrcode.react';

import hStyles from '../historyStyles.module.css';

const ScanHistory = () => {

    const dataScan = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div className={hStyles.scanBar}>
            {dataScan.map((d) => {
                console.log(d.id);
                return (
                    <div key={d.id}>
                        <p>{d.value}</p>
                        <QRCodeSVG value={d.value}/>
                    </div>
                )
            })}
        </div>
    );
};
export default ScanHistory;