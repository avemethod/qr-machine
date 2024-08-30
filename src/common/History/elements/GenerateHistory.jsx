import { GENERATE_DATA } from '../../../data.js'
import { QRCodeSVG } from 'qrcode.react';

import hStyles from '../historyStyles.module.css';

const GenerateHistory = () => {

    const dataGen = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    return (
        <div className={hStyles.genBar}>
            {dataGen.map((d) => {
                console.log(d.id);
                return (
                    <div className={hStyles.ItemMesh} key={d.id}>
                        <p>{d.value}</p>
                        <QRCodeSVG value={d.value}/>
                    </div>
                )
            })}
        </div>
    );
};
export default GenerateHistory;