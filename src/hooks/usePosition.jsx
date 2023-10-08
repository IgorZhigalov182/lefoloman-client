import { useState, useEffect } from 'react';

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            accuracy: position.coords.accuracy,
          });
        },
        (error) => {
          console.error(error);
        },
      );
    }
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError('Геолокация не поддерживается браузером');
      return;
    }

    const watcher = geo.watchPosition(onChange, onError);

    return () => geo.clearWatch(watcher);
  }, []);
  return { position, error };
};

export default usePosition;
