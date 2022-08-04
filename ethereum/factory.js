import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x53a1a7AB689C466e916E555Dd44D1322E493DFd8'
);

export default instance;
