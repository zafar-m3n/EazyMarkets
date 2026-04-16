import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ symbolsGroups = [], theme = "light", width = "100%", height = 275 }) {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    // Clear previous widget (important when props change)
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      colorTheme: theme,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
    //   backgroundColor: "#0F0F0F",
      support_host: "https://www.tradingview.com",
      width,
      height,
      symbolsGroups,
    });

    container.current.appendChild(script);
  }, [symbolsGroups, theme, width, height]);

  return (
    <div className="tradingview-widget-container w-full" ref={container}>
      <div className="tradingview-widget-container__widget" />
      <div className="tradingview-widget-copyright text-xs text-text/50 mt-2 text-center">
        <a href="https://www.tradingview.com/markets/" target="_blank" rel="noopener nofollow">
          Market summary
        </a>{" "}
        by TradingView
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
