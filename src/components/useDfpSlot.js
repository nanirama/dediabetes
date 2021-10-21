import { useEffect } from 'react';

export const useDfpSlot = ({ path, size, id }) => {
  useEffect(() => {
    const googletag = window.googletag || {};
    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(function () {
      googletag.defineSlot(path, size, id).addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    });
    googletag.cmd.push(function () {
      googletag.display(id);
    });
  }, [path, size, id]);
};
