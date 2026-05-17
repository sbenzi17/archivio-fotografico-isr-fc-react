export const recentPhotos = [
  { id: '0001', bg: 'bg-1', label: 'Forlì, 1944',    caption: "Partigiani della 8ª Brigata Garibaldi · 1944" },
  { id: '0002', bg: 'bg-2', label: 'Cesena, 1946',   caption: "Manifestazione del 25 aprile · Cesena 1946" },
  { id: '0003', bg: 'bg-3', label: 'Predappio',      caption: "Predappio, ricostruzione · 1945" },
  { id: '0004', bg: 'bg-4', label: 'Forlimpopoli',   caption: "Comizio Franco Dell'Amore · 1948" },
  { id: '0005', bg: 'bg-5', label: 'Savignano',      caption: "Festa dell'Unità · Savignano 1952" },
  { id: '0006', bg: 'bg-6', label: 'Forlì, 1945',    caption: "Liberazione · Piazza Saffi, Forlì" },
  { id: '0007', bg: 'bg-7', label: 'Cesenatico',     caption: "Sciopero dei braccianti · 1949" },
  { id: '0008', bg: 'bg-8', label: 'Bertinoro',      caption: "Ritratto di gruppo · Bertinoro 1947" },
];

export const dellAmorePhotos = [
  { id: '0042', bg: 'bg-1', label: 'Forlì, 1948',     caption: "Comizio in Piazza Saffi · 1948" },
  { id: '0043', bg: 'bg-2', label: 'Cesena, 1949',    caption: "Festa dell'Unità · Cesena 1949" },
  { id: '0044', bg: 'bg-3', label: 'Forlimpopoli',    caption: "Discorso pubblico · Forlimpopoli 1950" },
  { id: '0045', bg: 'bg-4', label: 'Forlì',           caption: "Ritratto · 1952" },
  { id: '0046', bg: 'bg-5', label: 'Savignano',       caption: "Manifestazione · Savignano 1953" },
  { id: '0047', bg: 'bg-6', label: 'Cesenatico',      caption: "Sciopero dei braccianti · 1953" },
  { id: '0048', bg: 'bg-7', label: 'Predappio',       caption: "Cerimonia commemorativa · 1955" },
  { id: '0049', bg: 'bg-8', label: 'Forlì',           caption: "Riunione di sezione · 1956" },
  { id: '0050', bg: 'bg-1', label: 'Bertinoro',       caption: "Festa popolare · Bertinoro 1957" },
  { id: '0051', bg: 'bg-2', label: 'Forlì',           caption: "Congresso provinciale · 1958" },
  { id: '0052', bg: 'bg-3', label: 'Cesena',          caption: "Inaugurazione monumento · 1960" },
  { id: '0053', bg: 'bg-4', label: 'Forlì',           caption: "Ritratto in studio · 1962" },
];

export const photoDetails = {
  '0042': {
    id: '0042',
    bg: 'bg-1',
    label: "Forlì, Piazza Saffi · 1948",
    titolo: "Comizio in Piazza Saffi",
    subtitle: "Forlì, 1° maggio 1948 — Franco Dell'Amore",
    autore: "Dell'Amore, Franco",
    data: '1948.05.01',
    luogo: 'Piazza Saffi, Forlì',
    citta: 'Forlì',
    evento: 'Festa dei lavoratori',
    fondo: "Archivio Dell'Amore",
    serie: 'Manifestazioni politiche',
    segnatura: 'ISR-FC/AD/MP/0042',
    tipologia: 'Fotografia',
    supporto: 'Carta baritata',
    dimensioni: '18 × 24 cm',
    orientamento: 'Orizzontale',
    colore: 'Bianco e nero',
    persone: ["Franco Dell'Amore", 'Pietro Nenni', 'Giuseppe Romano'],
    formazione: ['PSI', 'PCI'],
    parole: ['Primo maggio', 'Comizio', 'Dopoguerra'],
    note: "Manifestazione organizzata dalla Camera del Lavoro di Forlì in occasione del Primo Maggio 1948.",
  },
};

export function getPhotoDetail(id) {
  return photoDetails[id] || { ...photoDetails['0042'], id, segnatura: `ISR-FC/AD/MP/${id}` };
}

export const indexAutori = [
  { name: 'Anonimo', count: 213 },
  { name: 'Bianchi, Giovanni', count: 8 },
  { name: 'Capacci, Mario', count: 15 },
  { name: 'Casadei, Pietro', count: 22 },
  { name: "Dell'Amore, Franco", count: 47 },
  { name: 'Fabbri, Luigi', count: 3 },
  { name: 'Gardini, Aldo', count: 19 },
  { name: 'Lombardi, Sergio', count: 11 },
  { name: 'Mambelli, Carlo', count: 31 },
  { name: 'Maraldi, Ennio', count: 7 },
  { name: 'Montanari, Gino', count: 14 },
  { name: 'Nori, Bruno', count: 2 },
  { name: 'Olivieri, Renzo', count: 26 },
  { name: 'Pasolini, Cesare', count: 9 },
  { name: 'Piancastelli, Bruno', count: 38 },
  { name: 'Ravaioli, Giuseppe', count: 5 },
  { name: 'Sangiorgi, Domenico', count: 17 },
  { name: 'Severi, Antonio', count: 12 },
  { name: 'Strocchi, Vittorio', count: 4 },
  { name: 'Tassinari, Marino', count: 21 },
  { name: 'Valbonesi, Dino', count: 6 },
  { name: 'Zoli, Adone', count: 10 },
  { name: 'Zucchini, Mario', count: 3 },
];

export const indexLuoghi = [
  { name: 'Forlì', count: 312 },
  { name: 'Cesena', count: 187 },
  { name: 'Forlimpopoli', count: 54 },
  { name: 'Bertinoro', count: 38 },
  { name: 'Savignano sul Rubicone', count: 41 },
  { name: 'Cesenatico', count: 29 },
  { name: 'Predappio', count: 26 },
  { name: 'Meldola', count: 18 },
  { name: 'Gambettola', count: 12 },
  { name: 'Modigliana', count: 9 },
];

export const indexData = [
  { name: '1944', count: 67 },
  { name: '1945', count: 134 },
  { name: '1946', count: 89 },
  { name: '1947', count: 72 },
  { name: '1948', count: 95 },
  { name: '1949', count: 81 },
  { name: '1950', count: 64 },
  { name: '1951-1955', count: 142 },
  { name: '1956-1960', count: 78 },
  { name: '1961-1970', count: 35 },
];

export const indexPersone = [
  { name: "Franco Dell'Amore", count: 47 },
  { name: 'Pietro Nenni', count: 8 },
  { name: 'Palmiro Togliatti', count: 5 },
  { name: 'Sandro Pertini', count: 4 },
  { name: 'Giuseppe Romano', count: 12 },
  { name: 'Aurelio Saffi', count: 3 },
  { name: 'Giovanni Amendola', count: 2 },
];

export const indexFormazione = [
  { name: 'PCI', count: 184 },
  { name: 'PSI', count: 142 },
  { name: 'DC', count: 67 },
  { name: 'PRI', count: 38 },
  { name: 'PSDI', count: 18 },
  { name: 'PLI', count: 9 },
];

export const indexParole = [
  { name: 'Primo maggio', count: 42 },
  { name: 'Comizio', count: 68 },
  { name: 'Manifestazione', count: 91 },
  { name: 'Dopoguerra', count: 156 },
  { name: 'Liberazione', count: 134 },
  { name: 'Resistenza', count: 178 },
  { name: 'Ricostruzione', count: 54 },
  { name: 'Festa popolare', count: 31 },
];

export const indexByCampo = {
  autore: { titolo: 'Autore', items: indexAutori },
  luogo: { titolo: 'Città / Luogo', items: indexLuoghi },
  data: { titolo: 'Data', items: indexData },
  persone: { titolo: 'Persone', items: indexPersone },
  formazione: { titolo: 'Formazione politica', items: indexFormazione },
  parole: { titolo: 'Parole chiave', items: indexParole },
};
