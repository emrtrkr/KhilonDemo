const fs = require("fs");
const path = require("path");

const cfg = {
  src: process.env.KAI_WIDGET_SRC || "",
  tenantId: process.env.KAI_TENANT_ID || "",
  managementUrl: process.env.KAI_MANAGEMENT_URL || "",
  appUrl: process.env.KAI_APP_URL || "",
};

const out = path.join(__dirname, "..", "widget-config.js");
fs.writeFileSync(out, "window.KAI_WIDGET = " + JSON.stringify(cfg, null, 2) + ";\n");
console.log("wrote", out, cfg.src && cfg.tenantId ? "with widget" : "without widget secrets");
