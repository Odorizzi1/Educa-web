import { useState, useEffect } from "react";

const useIsMobile = (breakpoint: number = 320) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    console.log("chamando")
    // Verifica no carregamento inicial
    handleResize();

    // Adiciona o evento de redimensionamento
    window.addEventListener("resize", handleResize);

    // Remove o evento ao desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
