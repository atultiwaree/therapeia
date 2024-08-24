// NetworkStatusOverlay.js
import React, { useContext } from 'react';
import { NetworkContext } from './NetworkContext';
import OfflineScreen from './OfflineScreen';

const NetworkStatusOverlay = ({ onRetry }) => {
  const { isConnected } = useContext(NetworkContext);

  if (!isConnected) {
    return <OfflineScreen onRetry={onRetry} />;
  }

  return null;
};

export default NetworkStatusOverlay;
