import React from 'react';
import Beds from '../../images/bed.png';
import People from '../../images/people.png';
import Wallet from '../../images/wallet.png';
import Van from '../../images/ambulance.png';

const totalCounts = () => {
	return (
		<div className="row containerRow">
			<div className="cardContiner">
				<img
					className="setSpacing"
					src={Beds}
					width="40px"
					height={'40px'}
					alt=""
				></img>
				<div className="setColumn">
					<div className="fontColor">3,256</div>
					<span className="fontColor">Total Patients</span>
				</div>
			</div>
			<div className="cardContiner">
				<img
					className="setSpacing"
					src={People}
					width="40px"
					height={'40px'}
					alt=""
				></img>
				<div className="setColumn">
					<div className="fontColor">256</div>
					<span className="fontColor">Available Staff</span>
				</div>
			</div>
			<div className="cardContiner">
				<img
					className="setSpacing"
					src={Wallet}
					width="40px"
					height={'40px'}
					alt=""
				></img>
				<div className="setColumn">
					<div className="fontColor">$2,589</div>
					<span className="fontColor">Avg Costs</span>
				</div>
			</div>
			<div className="cardContiner">
				<img
					className="setSpacing"
					src={Van}
					width="40px"
					height={'40px'}
					alt=""
				></img>
				<div className="setColumn">
					<div className="fontColor">38</div>
					<span className="fontColor">Available Cars</span>
				</div>
			</div>
		</div>
	);
};

export default totalCounts;
