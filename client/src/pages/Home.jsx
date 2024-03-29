import React, { useState, useEffect } from 'react';
import FundCard from '../components';
import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div>
    <DisplayCampaigns 
      title="All Jam3Yet"
      isLoading={isLoading}
      campaigns={campaigns}
    />
    <FundCard/>
    </div>
  )
}

export default Home;