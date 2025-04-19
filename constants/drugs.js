import { Drug } from "../models/Drug.js";
const PANADOL = new Drug(
  0,
  "PANADOL COLD & FLU DAY 24",
  "CAFFEINE+PARACETAMOL+PHENYLEPHRINE",
  "36.5 > 76 EGP",
  "COLD & FLUE",
  "RESPIRATORY CARE MEDICATIONS",
  "ALEXANDRIA",
  "https://i5.walmartimages.com/seo/PANADOL-C-F-ND-CAP-325-MG-APAP-5MG-PE2X12_b624f84d-62c4-40c3-90cd-327eb7adc2a8.53a7ef746ca4b33a01f0cee7d6a65cfd.jpeg"
);
const STOPADOL = new Drug(
  1,
  "STOPADOL COLD MAX 20",
  "PARACETAMOL+CHLORPHENIRAMINE",
  "46 > 46 EGP",
  "RESPIRATORY CARE MEDICATIONS",
  "Analgesic",
  "BAYER",
  "https://i0.wp.com/taypharmacies.com/wp-content/uploads/2024/12/2024-12-28T100031.739.png?resize=510%2C510&ssl=1"
);
const TELFAST = new Drug(
  2,
  "TELFAST 120MG 20 F.C.TAB",
  "FEXOFENADINE",
  "76 > 99 EGP",
  "ANTIHISTAMINES",
  "Non-Sedating",
  "SANOFI-AVENTIS",
  "https://www.telfast.com/dam/jcr:702f508f-9136-41e0-ab8f-50ef36149743/Telfast_180.png"
);
const ALLERFEN = new Drug(
  3,
  "ALLERFEN 120 MG 20 F.C. TAB",
  "FEXOFENADINE",
  "26 > 64 EGP",
  "ANTIHISTAMINES",
  "Non-Sedating",
  "EGYPTIAN INTERNATIONAL PHARMACEUTICAL INDUSTRIES CO.",
  "https://delmar-test.linkedgates.com/images/items/139535.JPEG"
);

const ABIMOL = new Drug(
  4,
  "ABIMOL 300MG 5 RECTAL",
  "PARACETAMOL",
  "15 > 15 EGP",
  "ANTIHISTAMINES",
  "Non-Sedating",
  "EGYPTIAN INTERNATIONAL PHARMACEUTICAL INDUSTRIES CO.",
  "http://egyptiandrugstore.com/image/cache/data/manar13/ABIMOL%20INF-400x400.png"
);

const ATCORELIVO = new Drug(
  5,
  "ATCORELIVO 10 ORAL",
  "PARACETAMOL+PHENIRAMINE+PHENYLEPHRINE+VITAMIN C",
  "35 > 35 EGP",
  "ANTIHISTAMINES",
  "Non-Sedating",
  "EGYPTIAN INTERNATIONAL PHARMACEUTICAL INDUSTRIES CO.",
  "https://api.c0umyt3cda-pharmaove1-p1-public.model-t.cc.commerce.ondemand.com/medias/000000000000029031.jpg?context=bWFzdGVyfGltYWdlc3w1MjA1Njd8aW1hZ2UvanBlZ3xhRFptTDJneFlpOHhNRGc1TnpjNE5ETTBNRFV4TUM4d01EQXdNREF3TURBd01EQXdNamt3TXpFdWFuQm58Y2M2MTY1ZmUxNjFlYjhiNDFkY2VjZTJhMTc3MGQwYmYyOGVhZGI4ZjliZGUwZTA4MDhmMjYxMmQ3ODRlNGRlYg"
);

const HISTAFREE = new Drug(
  6,
  "HISTAFREE 120MG 10 TAB",
  "FEXOFENADINE",
  "22 > 33 EGP",
  "ANTIHISTAMINES",
  "Non-Sedating",
  "EGYPTIAN INTERNATIONAL PHARMACEUTICAL INDUSTRIES CO.",
  "https://dw2.org/img/8404.jpg"
);

export const DRUGS = [PANADOL, TELFAST, STOPADOL, ALLERFEN, ABIMOL, ATCORELIVO, HISTAFREE];
