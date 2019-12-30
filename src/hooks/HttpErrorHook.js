import { useState, useEffect } from "react";

export default httpError => {
  const [error, setError] = useState(null);

  const reqInterceptor = httpError.interceptors.request.use(req => {
    setError(null);
  });

  const resInterceptor = httpError.interceptors.request.use(
    res => res,
    err => {
      setError(err);
    }
  );

  useEffect(() => {
    return () => {
      httpError.interceptors.request.eject(reqInterceptor);
      httpError.interceptors.response.eject(resInterceptor);
    };
  }, [
    httpError.interceptors.request,
    httpError.interceptors.response,
    reqInterceptor,
    resInterceptor
  ]);

  const errorConfirmedHandler = () => {
    setError(null);
  };

  return [error, errorConfirmedHandler];
};
