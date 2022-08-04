import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x62815c3426a4592ce7980fDf614606B0DE807310'
);

export default instance;
