function ProgressBar({progress, progressMessage}) {

    return(
        <>
            <div className="progress-bar-message">
                <h1>{progressMessage}</h1>
            
            <div className="progress-bar-graphic-container">
                <div 
                    className="progress-bar-graphic-fill" 
                    style={{ width: `${progress}%` }}
                ></div>
                <p>{progress}%</p>

            </div>
        </div>
    </>
    );

}
export default ProgressBar;