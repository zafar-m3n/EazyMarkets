import React, { useEffect } from "react";

const CalculatorWidget = () => {
  useEffect(() => {
    const scriptId = "fxverify-script";
    const containerId = "profit-calculator-87956";

    const runWidget = () => {
      if (window.RemoteCalc) {
        window.RemoteCalc({
          Url: "https://fxverify.com",

          TopPaneStyle:
            "YmFja2dyb3VuZDogI2ZmZmZmZjsKY29sb3I6ICMxZjI5Mzc7CmJvcmRlcjogMXB4IHNvbGlkICNkOWU3Y2Y7CmJvcmRlci1ib3R0b206IG5vbmU7CmJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7CmJveC1zaGFkb3c6IDAgMTJweCAzOHB4IHJnYmEoMzEsNDEsNTUsMC4wOCk7",

          BottomPaneStyle:
            "YmFja2dyb3VuZDogI2ZmZmZmZjsKY29sb3I6ICMxZjI5Mzc7CmJvcmRlcjogMXB4IHNvbGlkICNkOWU3Y2Y7CmJvcmRlci10b3A6IG5vbmU7CmJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7CmJveC1zaGFkb3c6IDAgMTZweCA0NHB4IHJnYmEoMzEsNDEsNTUsMC4wOCk7",

          ButtonStyle:
            "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjN2VkOTU3LCAjNGY4ZjJmKTsKY29sb3I6ICMwMDAwMDA7CmJvcmRlci1yYWRpdXM6IDEycHg7CmZvbnQtd2VpZ2h0OiA1MDA7CnBhZGRpbmc6IDEwcHggMjRweDsKYm9yZGVyOiBub25lOwp0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOwpib3gtc2hhZG93OiAwIDAgMCByZ2JhKDAsMCwwLDApOw==",

          TitleStyle:
            "dGV4dC1hbGlnbjogbGVmdDsKZm9udC1zaXplOiAyOHB4Owpmb250LXdlaWdodDogNjAwOwpjb2xvcjogIzFmMjkzNzsKbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07",

          TextboxStyle:
            "YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsKY29sb3I6ICMxZjI5Mzc7CmJvcmRlcjogMXB4IHNvbGlkICNkOWU3Y2Y7CmJvcmRlci1yYWRpdXM6IDEwcHg7CnBhZGRpbmc6IDhweCAxMnB4Owpmb250LXNpemU6IDE0cHg7Cm91dGxpbmU6IG5vbmU7CnRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7CmJvcmRlcjogMXB4IHNvbGlkICNkOWU3Y2Y7CmJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMDMpOw==",

          ContainerWidth: "665",
          HighlightColor: "#ffff00",

          IsDisplayTitle: false,
          IsShowChartLinks: true,
          IsShowEmbedButton: false,
          CompactType: "large",

          Calculator: "profit-calculator",
          ContainerId: containerId,
        });
      }
    };

    // Load script if not already loaded
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://fxverify.com/Content/remote/remote-widgets.js";
      script.async = true;
      script.onload = runWidget;
      document.body.appendChild(script);
    } else {
      runWidget();
    }
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div id="profit-calculator-87956" className="w-full max-w-3xl" />
    </div>
  );
};

export default CalculatorWidget;
