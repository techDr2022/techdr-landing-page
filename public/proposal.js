// TechDr Proposal - standalone JS (tabs, accordion, WhatsApp form)
(function () {
  const WHATSAPP_NUMBER = "919876543210";
  const WHATSAPP_PREFILL = "Hi, I'm interested in TechDr's healthcare growth proposal for my practice.";

  // Tabs
  const tablist = document.querySelector("[data-tabs]");
  if (tablist) {
    const tabs = Array.from(tablist.querySelectorAll("[role='tab']"));
    const panels = Array.from(document.querySelectorAll("[role='tabpanel']"));
    function activate(id) {
      tabs.forEach((t) => t.setAttribute("aria-selected", t.dataset.tab === id ? "true" : "false"));
      panels.forEach((p) => (p.dataset.active = p.dataset.panel === id ? "true" : "false"));
    }
    tablist.addEventListener("click", (e) => {
      const btn = e.target.closest("[role='tab']");
      if (!btn) return;
      activate(btn.dataset.tab);
    });
    // default
    activate(tabs[0]?.dataset.tab || "marketing");
  }

  // Accordion removed (FAQ is now a 10-column grid)

  // Form -> WhatsApp
  const form = document.querySelector("#enquiry-form");
  const success = document.querySelector("#form-success");
  const submitBtn = document.querySelector("#form-submit");

  function setError(id, msg) {
    const el = document.querySelector(`[data-error-for='${id}']`);
    if (!el) return;
    el.textContent = msg || "";
  }

  function buildMessage({ name, phone, clinic, service }) {
    const text = [
      WHATSAPP_PREFILL,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Clinic/Practice: ${clinic}`,
      `Service interested in: ${service}`,
    ].join("\n");
    return encodeURIComponent(text);
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = (document.querySelector("#name")?.value || "").trim();
      const phone = (document.querySelector("#phone")?.value || "").trim();
      const clinic = (document.querySelector("#clinic")?.value || "").trim();
      const service = (document.querySelector("#service")?.value || "").trim();

      let ok = true;
      setError("name", "");
      setError("phone", "");
      setError("clinic", "");
      setError("service", "");

      if (!name) { setError("name", "Name is required"); ok = false; }
      if (!phone) { setError("phone", "Phone is required"); ok = false; }
      if (!clinic) { setError("clinic", "Clinic name is required"); ok = false; }
      if (!service) { setError("service", "Please select a service"); ok = false; }
      if (!ok) return;

      if (submitBtn) submitBtn.disabled = true;
      const msg = buildMessage({ name, phone, clinic, service });
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
      window.open(url, "_blank", "noopener,noreferrer");

      if (success) {
        success.hidden = false;
      }
      form.hidden = true;
    });
  }
})();

