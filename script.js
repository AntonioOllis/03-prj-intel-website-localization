const page = document.documentElement;
const bootstrapLtr = document.querySelector("#bootstrap-ltr");
const bootstrapRtl = document.querySelector("#bootstrap-rtl");

// These language codes are written from right to left.
const rtlLanguages = ["ar", "fa", "he", "ps", "ur", "yi"];

function updatePageDirection() {
  const language = page.lang.trim().toLowerCase().split("-")[0];
  const isRtl = rtlLanguages.includes(language);

  page.dir = isRtl ? "rtl" : "ltr";
  bootstrapLtr.disabled = isRtl;
  bootstrapRtl.disabled = !isRtl;
}

// Set the correct direction when the page first loads.
updatePageDirection();

// Watch the html lang attribute so direction changes with the language.
const languageObserver = new MutationObserver(updatePageDirection);
languageObserver.observe(page, {
  attributes: true,
  attributeFilter: ["lang"]
});