// EconomicCalendarWidget.jsx
import { useEffect, useRef, memo } from "react";

function EconomicCalendarWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tradays.com/c/js/widgets/calendar/widget.js?v=15";
    script.type = "text/javascript";
    script.async = true;
    script.dataset.type = "calendar-widget";
    script.innerHTML = `{"width":"100%","height":"700","mode":"1","fw":"react","lang":"en"}`;

    container.current?.appendChild(script);
  }, []);

  return (
    <div ref={container}>
      <div id="economicCalendarWidget"></div>
    </div>
  );
}

export default memo(EconomicCalendarWidget);
