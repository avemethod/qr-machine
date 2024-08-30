import GenerateHistory from './elements/GenerateHistory.jsx'
import ScanHistory from './elements/ScanHistory.jsx'
import hStyles from './historyStyles.module.css';

const History = () => {
    return (
        <div className={hStyles.main}>
            <GenerateHistory/>
            <ScanHistory/>
        </div>
    );
};
export default History;