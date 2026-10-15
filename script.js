const musicas = [
  { titulo: "Blinding Lights", artista: "The Weeknd", genero: "pop", cor: "linear-gradient(145deg,#6b1749,#f34d83)" },
  { titulo: "Levitating", artista: "Dua Lipa", genero: "pop", cor: "linear-gradient(145deg,#a72c9c,#ff9a63)" },
  { titulo: "As It Was", artista: "Harry Styles", genero: "pop", cor: "linear-gradient(145deg,#b44a57,#edb66e)" },
  { titulo: "Espresso", artista: "Sabrina Carpenter", genero: "pop", cor: "linear-gradient(145deg,#70412c,#e4a17a)" },
  { titulo: "Bad Romance", artista: "Lady Gaga", genero: "pop", cor: "linear-gradient(145deg,#651a36,#dc496c)" },
  { titulo: "Do I Wanna Know?", artista: "Arctic Monkeys", genero: "rock", cor: "linear-gradient(145deg,#171717,#6a6a6a)" },
  { titulo: "Smells Like Teen Spirit", artista: "Nirvana", genero: "rock", cor: "linear-gradient(145deg,#204b52,#77a9a4)" },
  { titulo: "Bohemian Rhapsody", artista: "Queen", genero: "rock", cor: "linear-gradient(145deg,#452b69,#d6a4ff)" },
  { titulo: "Seven Nation Army", artista: "The White Stripes", genero: "rock", cor: "linear-gradient(145deg,#151515,#b92e35)" },
  { titulo: "Californication", artista: "Red Hot Chili Peppers", genero: "rock", cor: "linear-gradient(145deg,#8c3727,#e8a05a)" },
  { titulo: "The Box", artista: "Roddy Ricch", genero: "rap", cor: "linear-gradient(145deg,#173d56,#6488d9)" },
  { titulo: "Lose Yourself", artista: "Eminem", genero: "rap", cor: "linear-gradient(145deg,#262626,#797979)" },
  { titulo: "God's Plan", artista: "Drake", genero: "rap", cor: "linear-gradient(145deg,#66552c,#d7b766)" },
  { titulo: "SICKO MODE", artista: "Travis Scott", genero: "rap", cor: "linear-gradient(145deg,#43215e,#e065a0)" },
  { titulo: "HUMBLE.", artista: "Kendrick Lamar", genero: "rap", cor: "linear-gradient(145deg,#344c35,#a6bc6b)" },
  { titulo: "Bum Bum Tam Tam", artista: "MC Fioti", genero: "funk", cor: "linear-gradient(145deg,#154e9a,#54c9f1)" },
  { titulo: "Tá OK", artista: "DENNIS e Kevin O Chris", genero: "funk", cor: "linear-gradient(145deg,#802eaf,#ef77bd)" },
  { titulo: "Envolvimento", artista: "MC Loma e as Gêmeas Lacração", genero: "funk", cor: "linear-gradient(145deg,#b4497a,#f8a5c7)" },
  { titulo: "Parado no Bailão", artista: "MC L da Vinte e MC Gury", genero: "funk", cor: "linear-gradient(145deg,#7a311e,#ef9951)" },
  { titulo: "Vai Malandra", artista: "Anitta", genero: "funk", cor: "linear-gradient(145deg,#bb4b27,#f2b85b)" },
  { titulo: "Erro Gostoso", artista: "Simone Mendes", genero: "sertanejo", cor: "linear-gradient(145deg,#754b29,#dfb777)" },
  { titulo: "Infiel", artista: "Marília Mendonça", genero: "sertanejo", cor: "linear-gradient(145deg,#613b55,#d59ab9)" },
  { titulo: "Nosso Quadro", artista: "Ana Castela", genero: "sertanejo", cor: "linear-gradient(145deg,#486b45,#b6d38a)" },
  { titulo: "Atrasadinha", artista: "Felipe Araújo e Ferrugem", genero: "sertanejo", cor: "linear-gradient(145deg,#825e3e,#e2b78c)" },
  { titulo: "Titanium", artista: "David Guetta ft. Sia", genero: "eletronica", cor: "linear-gradient(145deg,#154b9a,#54d6f1)" },
  { titulo: "Animals", artista: "Martin Garrix", genero: "eletronica", cor: "linear-gradient(145deg,#35146c,#b26aff)" },
  { titulo: "Wake Me Up", artista: "Avicii", genero: "eletronica", cor: "linear-gradient(145deg,#a65b28,#f2cb72)" },
  { titulo: "Sweater Weather", artista: "The Neighbourhood", genero: "indie", cor: "linear-gradient(145deg,#243e4b,#8aafb8)" },
  { titulo: "505", artista: "Arctic Monkeys", genero: "indie", cor: "linear-gradient(145deg,#353050,#a69bdb)" },
  { titulo: "The Less I Know The Better", artista: "Tame Impala", genero: "indie", cor: "linear-gradient(145deg,#6d236c,#e78fc8)" }
];

const $ = id => document.getElementById(id);
const nomesGeneros = {
  pop: "POP", rock: "ROCK", rap: "RAP / HIP-HOP",
  funk: "FUNK BRASILEIRO", sertanejo: "SERTANEJO",
  eletronica: "ELETRÔNICA", indie: "INDIE"
};

const generoSelect = $("genre");
const shuffleBtn = $("shuffleBtn");
const againBtn = $("againBtn");
const tituloEl = $("musicTitle");
const artistaEl = $("musicArtist");
const generoEl = $("musicGenre");
const albumArt = $("albumArt");
const listenBtn = $("listenBtn");
const resultNumber = $("resultNumber");
const totalSongs = $("totalSongs");
const totalGenres = $("totalGenres");
const totalDraws = $("totalDraws");

let ultimaMusica = null, sorteios = 0;

function sortearMusica() {
  const genero = generoSelect.value;
  const disponiveis = musicas.filter(m => genero === "todos" || m.genero === genero);

  if (!disponiveis.length) {
    tituloEl.textContent = "Nenhuma música encontrada";
    artistaEl.textContent = "Escolha outro gênero.";
    return;
  }

  const opcoes = disponiveis.filter(m => m !== ultimaMusica);
  const musica = (opcoes.length ? opcoes : disponiveis)[
    Math.floor(Math.random() * (opcoes.length ? opcoes : disponiveis).length)
  ];

  ultimaMusica = musica;
  sorteios++;

  tituloEl.textContent = musica.titulo;
  artistaEl.textContent = musica.artista;
  generoEl.textContent = nomesGeneros[musica.genero];
  albumArt.style.background = musica.cor;
  listenBtn.href = "https://open.spotify.com/search/" +
    encodeURIComponent(musica.titulo + " " + musica.artista);
  resultNumber.textContent = "#" + String(sorteios).padStart(2, "0");
  totalDraws.textContent = sorteios;

  const card = $("musicCard");
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "appear .35s ease";
}

shuffleBtn.addEventListener("click", sortearMusica);
againBtn.addEventListener("click", sortearMusica);

totalSongs.textContent = musicas.length;
totalGenres.textContent = Object.keys(nomesGeneros).length;

sortearMusica();
