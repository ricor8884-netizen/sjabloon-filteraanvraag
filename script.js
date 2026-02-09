const form = document.querySelector("#filterRequestForm");
const sendButton = document.querySelector("#sendEmailButton");

const fieldLabels = {
  bedrijf: "Bedrijf",
  afdeling: "Afdeling",
  postadres: "Postadres",
  postcode: "Postcode",
  plaats: "Plaats",
  meting_datum: "Vermoedelijke datum uitvoering meting",
  projectnummer: "Projectnummer",
  filter_type: "Welke filters",
  formaat: "Formaat",
  hoeveelheid: "Hoeveelheid",
  voor_gewogen: "Voor gewogen",
  paraaf_aanvrager: "Paraaf aanvrager",
  laborant_naam: "Laborant naam",
  laborant_datum: "Laborant datum",
  laborant_paraaf: "Laborant paraaf",
  opdracht_identificatie: "Identificatie opdracht",
};

const formatEntries = (formData) =>
  Array.from(formData.entries())
    .map(([key, value]) => `${fieldLabels[key] ?? key}: ${value}`)
    .join("\n");

const handleSend = () => {
  if (!form.reportValidity()) {
    return;
  }

  const formData = new FormData(form);
  const body = formatEntries(formData);
  const subject = "Filteraanvraag luchtlaboratorium";

  const mailtoLink = `mailto:rico.rappard@buroblauw.nl?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
};

sendButton.addEventListener("click", handleSend);
