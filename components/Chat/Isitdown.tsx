import { useEffect, useState } from 'react';

type apiDataType = {
  endpoints: {
    [key: string]: {
      status: string;
      works: boolean;
    };
  };
  updated_at: number;
};

function Isitdown() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    console.log('Fetching data');
    async function fetchData() {
      try {
        let response = await fetch(
          'https://chimeragpt.adventblocks.cc/api/v1/status',
        );
        let res = await response.json();

        if (res && !res.endpoints['/api/v1/chat/completions'].works) {
          setStatus('ChimeraGPT API is down');
        } else {
          // Api is up
          console.log('Chimiera API is up');

          setStatus('GPT-4 and GPT-3.5 are available');
          // const extractString = (inputString: string): string | null => {
          //   const regex = /gpt-([0-9.]+)/;

          //   const matches = inputString.match(regex);
          //   if (matches && matches.length >= 2) {
          //     return matches[1];
          //   }

          //   return null;
          // };

          // let aliveModelVersion = await extractString(
          //   res.endpoints['/api/v1/chat/completions'].status,
          // );

          // if (aliveModelVersion === '4') {
          //   setStatus(`GPT-4 and GPT-3.5 are available`);
          // } else {
          //   setStatus(`GPT-3.5 is available`);
          // }
        }
      } catch (err) {
        console.error('Error: ', err);
      }
    }

    fetchData();

    // Fetch data every 5 minutes
    const intervalId = setInterval(() => {
      fetchData();
    }, 300000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array

  return (
    <div className="px-3 pt-2 pb-3 text-center text-[12px] text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
      {status}
    </div>
  );
}

export default Isitdown;
