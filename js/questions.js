// Base de datos de preguntas de cultura general en galego
const QUESTIONS_DATABASE = [
  // Preguntas xerais anteriores
  {
    id: 1,
    question: "Cal é a capital de Galicia?",
    answers: ["A Coruña", "Santiago de Compostela", "Vigo", "Ourense"],
    correct: 1,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "En que ano chegou o home á lúa por primeira vez?",
    answers: ["1967", "1968", "1969", "1970"],
    correct: 2,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 3,
    question: "Quen escribiu 'Dom Quixote de La Mancha'?",
    answers: ["Miguel de Cervantes", "Lope de Vega", "Francisco de Quevedo", "Calderón de la Barca"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "Cal é o elemento químico con símbolo 'Au'?",
    answers: ["Prata", "Ouro", "Aluminio", "Argon"],
    correct: 1,
    category: "ciencia",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "Cantos días ten un ano bisesto?",
    answers: ["364", "365", "366", "367"],
    correct: 2,
    category: "xeral",
    difficulty: "easy"
  },
  {
    id: 6,
    question: "Cal é o río más longo de Europa?",
    answers: ["Danubio", "Rin", "Volga", "Dniéper"],
    correct: 2,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "En que cidade se atopa a Torre Eiffel?",
    answers: ["Londres", "Roma", "París", "Berlín"],
    correct: 2,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "Quen pintou 'A Guernica'?",
    answers: ["Pablo Picasso", "Salvador Dalí", "Joan Miró", "Francisco de Goya"],
    correct: 0,
    category: "arte",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "Cal é o planeta máis grande do sistema solar?",
    answers: ["Saturno", "Neptuno", "Júpiter", "Urano"],
    correct: 2,
    category: "ciencia",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "En que ano comezou a Segunda Guerra Mundial?",
    answers: ["1938", "1939", "1940", "1941"],
    correct: 1,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "Cal é a montaña máis alta do mundo?",
    answers: ["K2", "Kangchenjunga", "Everest", "Lhotse"],
    correct: 2,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "Quen compuxo 'A Novena Sinfonía'?",
    answers: ["Mozart", "Beethoven", "Bach", "Chopin"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Cal é a velocidade da luz no baleiro?",
    answers: ["299.792.458 m/s", "300.000.000 m/s", "299.000.000 m/s", "301.000.000 m/s"],
    correct: 0,
    category: "ciencia",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "En que continente se atopa o deserto do Sahara?",
    answers: ["Asia", "América", "África", "Oceanía"],
    correct: 2,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Quen foi o primeiro presidente dos Estados Unidos?",
    answers: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
    correct: 1,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 16,
    question: "Cal é o océano máis grande?",
    answers: ["Atlántico", "Índico", "Ártico", "Pacífico"],
    correct: 3,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "En que cidade naceu Shakespeare?",
    answers: ["Londres", "Stratford-upon-Avon", "Oxford", "Cambridge"],
    correct: 1,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 18,
    question: "Cal é a capital de Australia?",
    answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 19,
    question: "Cantos corazóns ten un pulpo?",
    answers: ["1", "2", "3", "4"],
    correct: 2,
    category: "ciencia",
    difficulty: "hard"
  },
  {
    id: 20,
    question: "En que ano caeu o muro de Berlín?",
    answers: ["1987", "1988", "1989", "1990"],
    correct: 2,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 21,
    question: "Cal é o metal máis abondoso na crosta terrestre?",
    answers: ["Ferro", "Aluminio", "Cobre", "Zinc"],
    correct: 1,
    category: "ciencia",
    difficulty: "hard"
  },
  {
    id: 22,
    question: "Quen escribiu 'Cen anos de soidade'?",
    answers: ["Mario Vargas Llosa", "Gabriel García Márquez", "Jorge Luis Borges", "Octavio Paz"],
    correct: 1,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 23,
    question: "Cal é a lingua máis falada do mundo?",
    answers: ["Inglés", "Español", "Chinés mandarín", "Hindi"],
    correct: 2,
    category: "xeral",
    difficulty: "medium"
  },
  {
    id: 24,
    question: "En que país se inventou o papel?",
    answers: ["India", "China", "Exipto", "Grecia"],
    correct: 1,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 25,
    question: "Cal é o hueso máis longo do corpo humano?",
    answers: ["Húmero", "Tíbia", "Fémur", "Radio"],
    correct: 2,
    category: "ciencia",
    difficulty: "medium"
  },
  {
    id: 26,
    question: "En que cidade se celebraron os primeiros Xogos Olímpicos modernos?",
    answers: ["París", "Londres", "Atenas", "Roma"],
    correct: 2,
    category: "deportes",
    difficulty: "medium"
  },
  {
    id: 27,
    question: "Cal é a fórmula química da auga?",
    answers: ["H2O", "CO2", "H2SO4", "NaCl"],
    correct: 0,
    category: "ciencia",
    difficulty: "easy"
  },
  {
    id: 28,
    question: "Quen pintou 'A última cea'?",
    answers: ["Miguel Ángel", "Rafael", "Leonardo da Vinci", "Donatello"],
    correct: 2,
    category: "arte",
    difficulty: "medium"
  },
  {
    id: 29,
    question: "Cal é o país máis pequeno do mundo?",
    answers: ["Mónaco", "Vaticano", "San Marino", "Liechtenstein"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 30,
    question: "En que ano se descubriu América?",
    answers: ["1490", "1491", "1492", "1493"],
    correct: 2,
    category: "historia",
    difficulty: "easy"
  },

  // 🏛️ PREGUNTAS ESPECÍFICAS DE GALICIA - HISTORIA
  {
    id: 31,
    question: "Quen foi o rei que outorgou o foro de Santiago de Compostela?",
    answers: ["Alfonso VII", "Fernando II", "Alfonso IX", "García II"],
    correct: 2,
    category: "historia_galicia",
    difficulty: "hard"
  },
  {
    id: 32,
    question: "En que ano tivo lugar a revolta irmandiña?",
    answers: ["1467-1469", "1475-1477", "1480-1482", "1460-1462"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "hard"
  },
  {
    id: 33,
    question: "Quen foi Rosalía de Castro?",
    answers: ["Poetisa galega do séc. XIX", "Raíña medieval", "Pintora renacentista", "Escultora barroca"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "easy"
  },
  {
    id: 34,
    question: "Cal é o nome do himno oficial de Galicia?",
    answers: ["Os Pinos", "Galicia Ceibe", "Terra Nosa", "Patria Galega"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 35,
    question: "En que provincia galega se atopa Ribadeo?",
    answers: ["A Coruña", "Lugo", "Ourense", "Pontevedra"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 36,
    question: "Como se chama o día da festa nacional de Galicia?",
    answers: ["Día de Galicia", "Día das Letras Galegas", "Día da Patria Galega", "Día de Santiago"],
    correct: 1,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 37,
    question: "Quen escribiu 'Cantares Gallegos'?",
    answers: ["Curros Enríquez", "Eduardo Pondal", "Rosalía de Castro", "Castelao"],
    correct: 2,
    category: "literatura_galicia",
    difficulty: "medium"
  },
  {
    id: 38,
    question: "Cal é o símbolo heráldico de Galicia?",
    answers: ["O cáliz de Santiago", "A cuncha de vieira", "A cruz de Santiago", "O galo"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "medium"
  },
  {
    id: 39,
    question: "En que século se construíu a catedral de Santiago?",
    answers: ["Século X", "Século XI", "Século XII", "Século XIII"],
    correct: 2,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 40,
    question: "Cal é o río máis longo de Galicia?",
    answers: ["Miño", "Sil", "Ulla", "Tambre"],
    correct: 0,
    category: "xeografia_galicia",
    difficulty: "easy"
  },

  // 🏔️ XEOGRAFÍA DE GALICIA
  {
    id: 41,
    question: "Cal é o pico máis alto de Galicia?",
    answers: ["Trevinca", "Pena Ubiña", "O Eixe", "Pena Trevinca"],
    correct: 0,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 42,
    question: "Cantas provincias ten Galicia?",
    answers: ["3", "4", "5", "6"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "easy"
  },
  {
    id: 43,
    question: "Cal é a costa galega máis occidental?",
    answers: ["Costa da Morte", "Rías Baixas", "Rías Altas", "Costa Ártabra"],
    correct: 0,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 44,
    question: "En que concello se atopa o Cabo Fisterra?",
    answers: ["Muxía", "Fisterra", "Cee", "Corcubión"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "easy"
  },
  {
    id: 45,
    question: "Cal é a illa galega máis grande?",
    answers: ["Illa de Arousa", "Illa de Ons", "Illa de Sálvora", "Illa de Cortegada"],
    correct: 0,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 46,
    question: "Por que porto saen os ferrys cara a Inglaterra?",
    answers: ["Vigo", "A Coruña", "Ferrol", "Santander"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 47,
    question: "En que provincia se atopa a Serra do Courel?",
    answers: ["Ourense", "Lugo", "A Coruña", "Pontevedra"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "hard"
  },
  {
    id: 48,
    question: "Cal é o parque natural máis antigo de Galicia?",
    answers: ["Fragas do Eume", "Dunas de Corrubedo", "Monte Aloia", "Baixa Limia-Serra do Xurés"],
    correct: 2,
    category: "xeografia_galicia",
    difficulty: "hard"
  },
  {
    id: 49,
    question: "Que ría pertence ás Rías Baixas?",
    answers: ["Ría de Ferrol", "Ría de Pontevedra", "Ría de Betanzos", "Ría de Ares"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 50,
    question: "Cal é a cidade máis poboada de Galicia?",
    answers: ["Santiago", "A Coruña", "Vigo", "Ourense"],
    correct: 2,
    category: "xeografia_galicia",
    difficulty: "easy"
  },

  // 🎭 CULTURA E TRADICIÓNS GALEGAS
  {
    id: 51,
    question: "Como se chama a festa tradicional galega de fin de ano?",
    answers: ["Noiteboa", "Noitevella", "Noiteviña", "Fin de Ano"],
    correct: 2,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 52,
    question: "Cal é o baile tradicional galego máis coñecido?",
    answers: ["Muiñeira", "Jota", "Sardana", "Aurresku"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 53,
    question: "Como se chama o instrumento de vento típico galego?",
    answers: ["Tambor", "Gaita", "Zanfona", "Pandeireta"],
    correct: 1,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 54,
    question: "Que significa 'queimada' na cultura galega?",
    answers: ["Un pratos típico", "Unha bebida tradicional", "Unha festa", "Un baile"],
    correct: 1,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 55,
    question: "Cal é a festa máis importante de Santiago?",
    answers: ["San Juan", "Santiago Apóstolo", "Ascensión", "Corpus Christi"],
    correct: 1,
    category: "cultura_galicia",
    difficulty: "easy"
  },
  {
    id: 56,
    question: "Como se chama a tradición de cantar polas casas en Nadal?",
    answers: ["Aguilando", "Reis", "Pandeirada", "Rondalla"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "medium"
  },
  {
    id: 57,
    question: "Que son os 'hórreos'?",
    answers: ["Construcións para gardar o gran", "Casas tradicionais", "Torres defensivas", "Pontes de pedra"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "medium"
  },
  {
    id: 58,
    question: "En que data se celebra o Día das Letras Galegas?",
    answers: ["17 de maio", "25 de xullo", "12 de outubro", "6 de xaneiro"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "medium"
  },
  {
    id: 59,
    question: "Cal é o prato típico galego máis internacional?",
    answers: ["Empanada", "Pulpo á feira", "Caldo galego", "Lacón con grelos"],
    correct: 1,
    category: "gastronomiagalicia",
    difficulty: "easy"
  },
  {
    id: 60,
    question: "Como se chama a procesión das candeas en Santiago?",
    answers: ["Candeloria", "Candeas", "Via Crucis", "Domingo de Ramos"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "hard"
  },

  // 📚 LITERATURA GALEGA
  {
    id: 61,
    question: "Quen é o autor de 'Sempre en Galiza'?",
    answers: ["Castelao", "Otero Pedrayo", "Vicente Risco", "Aquilino Iglesia"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "medium"
  },
  {
    id: 62,
    question: "Cal é a obra máis importante de Álvaro Cunqueiro?",
    answers: ["Merlín e familia", "As crónicas do sochantre", "Escola de menciñeiros", "O incerto señor don Hamlet"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "hard"
  },
  {
    id: 63,
    question: "Quen escribiu 'Memorias dun neno labrego'?",
    answers: ["Xosé Neira Vilas", "Manuel Rivas", "Suso de Toro", "Alfredo Conde"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "medium"
  },
  {
    id: 64,
    question: "Cal foi o primeiro libro impreso en galego?",
    answers: ["Catecismo", "Compendio de Agricultura", "Diccionario gallego", "Historia de Galicia"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "hard"
  },
  {
    id: 65,
    question: "Quen foi Manuel Murguía?",
    answers: ["Escritor e historiador", "Político", "Músico", "Pintor"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "medium"
  },
  {
    id: 66,
    question: "Cal é o nome real de Castelao?",
    answers: ["Alfonso Daniel Rodríguez", "Alfonso Daniel Castelao", "Daniel Alfonso Rodríguez", "Alfonso Rodríguez Castelao"],
    correct: 3,
    category: "literatura_galicia",
    difficulty: "hard"
  },
  {
    id: 67,
    question: "Quen escribiu 'O bosque animado'?",
    answers: ["Wenceslao Fernández Flórez", "Álvaro Cunqueiro", "Rafael Dieste", "Eduardo Blanco Amor"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "medium"
  },
  {
    id: 68,
    question: "En que ano se creou a Real Academia Galega?",
    answers: ["1905", "1906", "1907", "1908"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "hard"
  },
  {
    id: 69,
    question: "Quen foi Pondal?",
    answers: ["Eduardo Pondal, poeta", "Manuel Pondal, músico", "Xosé Pondal, pintor", "Antonio Pondal, escritor"],
    correct: 0,
    category: "literatura_galicia",
    difficulty: "medium"
  },
  {
    id: 70,
    question: "Cal é a revista literaria galega máis antiga?",
    answers: ["Nós", "A Nosa Terra", "Grial", "Nordés"],
    correct: 1,
    category: "literatura_galicia",
    difficulty: "hard"
  },

  // 🏛️ HISTORIA DE GALICIA
  {
    id: 71,
    question: "Quen foi Breogán na mitoloxía galega?",
    answers: ["Un rei celta", "Un guerreiro", "Un druída", "Un navegante"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 72,
    question: "Como se chamaban os antigos poboadores de Galicia?",
    answers: ["Celtas", "Galaicos", "Suevos", "Astures"],
    correct: 1,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 73,
    question: "En que século se descubriu a tumba do Apóstolo Santiago?",
    answers: ["Século VIII", "Século IX", "Século X", "Século VII"],
    correct: 1,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 74,
    question: "Quen foi Diego Xelmírez?",
    answers: ["Primeiro arcebispo de Santiago", "Rei de Galicia", "Conquistador", "Trovador"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 75,
    question: "En que ano se constituyó a Xunta de Galicia actual?",
    answers: ["1978", "1981", "1982", "1983"],
    correct: 1,
    category: "historia_galicia",
    difficulty: "hard"
  },
  {
    id: 76,
    question: "Quen foi o primeiro presidente da Xunta de Galicia?",
    answers: ["Xerardo Fernández Albor", "Manuel Fraga", "Fernando González Laxe", "Emilio Pérez Touriño"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "hard"
  },
  {
    id: 77,
    question: "Cal foi a primeira universidade de Galicia?",
    answers: ["Universidade de Vigo", "Universidade da Coruña", "Universidade de Santiago", "Universidade de Ourense"],
    correct: 2,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 78,
    question: "En que ano se fundou a Universidade de Santiago?",
    answers: ["1495", "1501", "1504", "1510"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "hard"
  },
  {
    id: 79,
    question: "Quen foi María Pita?",
    answers: ["Heroína coruñesa", "Poetisa medieval", "Raíña de Galicia", "Santa galega"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 80,
    question: "En que guerra destacou María Pita?",
    answers: ["Guerra contra os ingleses", "Guerra de Sucesión", "Guerra da Independencia", "Guerra Civil"],
    correct: 0,
    category: "historia_galicia",
    difficulty: "medium"
  },

  // 🎨 ARTE GALEGA
  {
    id: 81,
    question: "Quen é o escultor galego máis internacional?",
    answers: ["Francisco Leiro", "Acisclo Manzano", "Oliveiro", "Xaime Quesada"],
    correct: 0,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 82,
    question: "Cal é o estilo arquitectónico da catedral de Santiago?",
    answers: ["Románico", "Gótico", "Barroco", "Renacentista"],
    correct: 0,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 83,
    question: "Quen deseñou o Pórtico da Gloria?",
    answers: ["Mestre Mateo", "Mestre Pedro", "Mestre Santiago", "Mestre Juan"],
    correct: 0,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 84,
    question: "En que cidade está o Museo de Belas Artes máis importante de Galicia?",
    answers: ["Santiago", "A Coruña", "Vigo", "Ourense"],
    correct: 1,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 85,
    question: "Cal é o castro galego máis visitado?",
    answers: ["Castro de Viladonga", "Castro de Santa Trega", "Castro de Baroña", "Castro de Coaña"],
    correct: 1,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 86,
    question: "Quen foi Urbano Lugrís?",
    answers: ["Pintor galego", "Escultor", "Arquitecto", "Escritor"],
    correct: 0,
    category: "arte_galicia",
    difficulty: "hard"
  },
  {
    id: 87,
    question: "En que concello está a praia das Catedrais?",
    answers: ["Ribadeo", "Foz", "Viveiro", "Burela"],
    correct: 0,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 88,
    question: "Cal é o pazo galego máis famoso?",
    answers: ["Pazo de Oca", "Pazo de Mariñán", "Pazo de Lourizán", "Pazo de Meirás"],
    correct: 0,
    category: "arte_galicia",
    difficulty: "medium"
  },
  {
    id: 89,
    question: "Quen construíu a Torre de Hércules?",
    answers: ["Os celtas", "Os romanos", "Os suevos", "Os visigodos"],
    correct: 1,
    category: "historia_galicia",
    difficulty: "medium"
  },
  {
    id: 90,
    question: "Cal é a feira de artesanía máis importante de Galicia?",
    answers: ["Feira Franca de Pontevedra", "Feira de Allariz", "Feira de Betanzos", "Feira de Mondoñedo"],
    correct: 1,
    category: "cultura_galicia",
    difficulty: "hard"
  },

  // 🍽️ GASTRONOMÍA GALEGA
  {
    id: 91,
    question: "Cal é o marisco máis típico das rías galegas?",
    answers: ["Percebe", "Centola", "Nécora", "Vieira"],
    correct: 0,
    category: "gastronomia_galicia",
    difficulty: "medium"
  },
  {
    id: 92,
    question: "Que ingrediente principal leva o caldo galego?",
    answers: ["Patacas", "Grelos", "Fabas", "Repollo"],
    correct: 1,
    category: "gastronomia_galicia",
    difficulty: "easy"
  },
  {
    id: 93,
    question: "Cal é a denominación de orixe máis prestixiosa do viño galego?",
    answers: ["Rías Baixas", "Ribeiro", "Valdeorras", "Monterrei"],
    correct: 0,
    category: "gastronomia_galicia",
    difficulty: "medium"
  },
  {
    id: 94,
    question: "Que carne se usa tradicionalmente no lacón con grelos?",
    answers: ["Cerdo", "Vaca", "Cordeiro", "Cabrito"],
    correct: 0,
    category: "gastronomia_galicia",
    difficulty: "easy"
  },
  {
    id: 95,
    question: "Cal é o postre galego máis típico?",
    answers: ["Filloas", "Tarta de Santiago", "Roscón", "Mel e nuces"],
    correct: 1,
    category: "gastronomia_galicia",
    difficulty: "easy"
  },
  {
    id: 96,
    question: "Que símbolo leva a auténtica tarta de Santiago?",
    answers: ["Cruz de Santiago", "Vieira", "Cáliz", "Estrela"],
    correct: 0,
    category: "gastronomia_galicia",
    difficulty: "medium"
  },
  {
    id: 97,
    question: "En que época do ano se celebra a festa do marisco en O Grove?",
    answers: ["Primavera", "Verán", "Outono", "Inverno"],
    correct: 2,
    category: "gastronomia_galicia",
    difficulty: "medium"
  },
  {
    id: 98,
    question: "Cal é o peixe máis consumido en Galicia?",
    answers: ["Merluza", "Sardina", "Rodaballo", "Linguado"],
    correct: 1,
    category: "gastronomia_galicia",
    difficulty: "medium"
  },
  {
    id: 99,
    question: "Que licor se usa para facer a queimada?",
    answers: ["Aguardente", "Orujo", "Brandy", "Ron"],
    correct: 1,
    category: "gastronomia_galicia",
    difficulty: "medium"
  },
  {
    id: 100,
    question: "Cal é a empanada galega máis típica?",
    answers: ["De bacallau", "De atún", "De chorizo", "De zamburiñas"],
    correct: 0,
    category: "gastronomia_galicia",
    difficulty: "easy"
  },

  // 🌊 PATRIMONIO NATURAL DE GALICIA
  {
    id: 101,
    question: "Cal é o parque nacional de Galicia?",
    answers: ["Illas Atlánticas", "Fragas do Eume", "Courel", "Ancares"],
    correct: 0,
    category: "natureza_galicia",
    difficulty: "medium"
  },
  {
    id: 102,
    question: "Cantas illas forman o arquipélago de Cíes?",
    answers: ["2", "3", "4", "5"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 103,
    question: "Cal é a árbore símbolo de Galicia?",
    answers: ["Carbalho", "Eucalipto", "Piñeiro", "Castiñeiro"],
    correct: 0,
    category: "natureza_galicia",
    difficulty: "easy"
  },
  {
    id: 104,
    question: "En que comarca está a Ribeira Sacra?",
    answers: ["Ourense e Lugo", "Lugo e A Coruña", "Ourense e Pontevedra", "A Coruña e Pontevedra"],
    correct: 0,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 105,
    question: "Cal é o río que forma os canóns da Ribeira Sacra?",
    answers: ["Miño", "Sil", "Ulla", "Sor"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 106,
    question: "Onde está a Praia da Lanzada?",
    answers: ["Sanxenxo", "O Grove", "Cambados", "Vilanova de Arousa"],
    correct: 1,
    category: "xeografia_galicia",
    difficulty: "medium"
  },
  {
    id: 107,
    question: "Cal é a cascada máis alta de Galicia?",
    answers: ["Fervenza do Toxa", "Fervenza de Sotoxo", "Fervenza de Ézaro", "Fervenza de Casaio"],
    correct: 0,
    category: "natureza_galicia",
    difficulty: "hard"
  },
  {
    id: 108,
    question: "En que serra se atopa o Invernadoiro?",
    answers: ["Serra do Xurés", "Serra da Estrela", "Serra de Queixa", "Serra do Courel"],
    correct: 2,
    category: "xeografia_galicia",
    difficulty: "hard"
  },
  {
    id: 109,
    question: "Cal é a lagoa máis grande de Galicia?",
    answers: ["Lagoa de Sobrado", "Lagoa de Cospeito", "Lagoa de Antela", "Lagoa de Louro"],
    correct: 2,
    category: "xeografia_galicia",
    difficulty: "hard"
  },
  {
    id: 110,
    question: "Que tipo de bosque predomina nas Fragas do Eume?",
    answers: ["Bosque atlántico", "Bosque mediterráneo", "Bosque de coníferas", "Bosque mixto"],
    correct: 0,
    category: "natureza_galicia",
    difficulty: "medium"
  },

  // 🎵 MÚSICA E FOLCLORE GALEGO
  {
    id: 111,
    question: "Quen compuxo a música do himno galego?",
    answers: ["Pascual Veiga", "Eduardo Pondal", "Reveriano Soutullo", "Rogelio Groba"],
    correct: 0,
    category: "musica_galicia",
    difficulty: "medium"
  },
  {
    id: 112,
    question: "Cal é o grupo de música celta galega máis coñecido?",
    answers: ["Milladoiro", "Luar na Lubre", "Fuxan os Ventos", "Berrogüetto"],
    correct: 0,
    category: "musica_galicia",
    difficulty: "medium"
  },
  {
    id: 113,
    question: "Como se chama o canto tradicional de traballo no mar?",
    answers: ["Alborada", "Cantiga", "Foliada", "Marinheira"],
    correct: 3,
    category: "cultura_galicia",
    difficulty: "hard"
  },
  {
    id: 114,
    question: "Quen foi Andrés do Barro?",
    answers: ["Gaiteiro famoso", "Cantante", "Compositor", "Danzante"],
    correct: 0,
    category: "musica_galicia",
    difficulty: "hard"
  },
  {
    id: 115,
    question: "Cal é o festival de música celta máis importante de Galicia?",
    answers: ["Festival de Ortigueira", "Festival de Ribadumia", "Festival de Vigo", "Festival de Santiago"],
    correct: 0,
    category: "musica_galicia",
    difficulty: "medium"
  },
  {
    id: 116,
    question: "Como se chama a danza típica das pandeireteiras?",
    answers: ["Muiñeira das pandeireteiras", "Baile das fitas", "Danza prima", "Foliada"],
    correct: 0,
    category: "cultura_galicia",
    difficulty: "medium"
  },
  {
    id: 117,
    question: "Que instrumento acompaña tradicionalmente á gaita?",
    answers: ["Bombo", "Tambor", "Pandeiro", "Tambourin"],
    correct: 1,
    category: "musica_galicia",
    difficulty: "easy"
  },
  {
    id: 118,
    question: "Cal é a canción popular galega máis coñecida?",
    answers: ["Muiñeira de Lugo", "Alalá", "Foliada de Mondoñedo", "Jota de Betanzos"],
    correct: 1,
    category: "musica_galicia",
    difficulty: "medium"
  },
  {
    id: 119,
    question: "En que festa se cantan tradicionalmente as alboradas?",
    answers: ["Corpus Christi", "Santiago", "San Xoán", "Todas as anteriores"],
    correct: 3,
    category: "cultura_galicia",
    difficulty: "medium"
  },
  {
    id: 120,
    question: "Quen foi Perfecto Feijoo?",
    answers: ["Gaiteiro", "Compositor", "Cantante", "Director de orquestra"],
    correct: 0,
    category: "musica_galicia",
    difficulty: "hard"
  },

  // 🏛️ CAMIÑO DE SANTIAGO
  {
    id: 121,
    question: "Cantos quilómetros ten o Camiño Francés desde Roncesvalles?",
    answers: ["750 km", "780 km", "800 km", "850 km"],
    correct: 2,
    category: "camino_santiago",
    difficulty: "medium"
  },
  {
    id: 122,
    question: "Cal é o último pobo antes de chegar a Santiago no Camiño Francés?",
    answers: ["Monte do Gozo", "Lavacolla", "O Pedrouzo", "Amenal"],
    correct: 2,
    category: "camino_santiago",
    difficulty: "medium"
  },
  {
    id: 123,
    question: "En que ano foi declarado o Camiño Patrimonio da Humanidade?",
    answers: ["1985", "1987", "1990", "1993"],
    correct: 1,
    category: "camino_santiago",
    difficulty: "hard"
  },
  {
    id: 124,
    question: "Cal é o símbolo do Camiño de Santiago?",
    answers: ["A cruz", "A vieira", "O bordón", "A calabaza"],
    correct: 1,
    category: "camino_santiago",
    difficulty: "easy"
  },
  {
    id: 125,
    question: "Cantos quilómetros mínimos hai que percorrer para obter a Compostela?",
    answers: ["50 km", "100 km", "150 km", "200 km"],
    correct: 1,
    category: "camino_santiago",
    difficulty: "medium"
  },
  {
    id: 126,
    question: "Cal é o Camiño de Santiago máis antigo?",
    answers: ["Camiño Francés", "Camiño Primitivo", "Camiño Portugués", "Camiño do Norte"],
    correct: 1,
    category: "camino_santiago",
    difficulty: "medium"
  },
  {
    id: 127,
    question: "Onde comeza oficialmente o Camiño Inglés?",
    answers: ["A Coruña", "Ferrol", "Betanzos", "Nas dúas primeiras"],
    correct: 3,
    category: "camino_santiago",
    difficulty: "medium"
  },
  {
    id: 128,
    question: "Cal é a primeira cidade galega do Camiño Francés?",
    answers: ["O Cebreiro", "Pedrafita", "Triacastela", "Sarria"],
    correct: 0,
    category: "camino_santiago",
    difficulty: "medium"
  },
  {
    id: 129,
    question: "Que edificio acollía tradicionalmente os peregrinos?",
    answers: ["Hospitais", "Mosteiros", "Albergues", "Todas as anteriores"],
    correct: 3,
    category: "camino_santiago",
    difficulty: "easy"
  },
  {
    id: 130,    question: "Cal é o día de maior afluencia de peregrinos a Santiago?",
    answers: ["25 de xullo", "24 de xullo", "26 de xullo", "Todo o mes de xullo"],
    correct: 0,
    category: "camino_santiago",
    difficulty: "easy"
  },

  // NOVAS PREGUNTAS DE CULTURA GALEGA (131-230)
  {
    id: 131,
    question: "Cal é o nome do castro máis famoso de Galicia?",
    answers: ["Castro de Viladonga", "Castro de Baroña", "Castro de Santa Trega", "Castro de Coaña"],
    correct: 2,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 132,
    question: "En que provincia está a Praia das Catedrais?",
    answers: ["A Coruña", "Lugo", "Ourense", "Pontevedra"],
    correct: 1,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 133,
    question: "Como se chama o fenómeno luminoso que se observa nas Rías Baixas?",
    answers: ["Bioluminiscencia", "Fluorescencia", "Fosforescencia", "Luminiscencia"],
    correct: 0,
    category: "natureza",
    difficulty: "hard"
  },
  {
    id: 134,
    question: "Cal é o prato típico galego feito con grelos e lacón?",
    answers: ["Caldo galego", "Lacón con grelos", "Empanada de grelos", "Grelos rehogados"],
    correct: 1,
    category: "gastronomia",
    difficulty: "easy"
  },
  {
    id: 135,
    question: "Quen foi Castelao?",
    answers: ["Un político", "Un escritor e debuxante", "Un músico", "Un arquitecto"],
    correct: 1,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 136,
    question: "Cal é o nome da capital da provincia de Ourense?",
    answers: ["Ourense", "Viana do Bolo", "O Barco de Valdeorras", "Xinzo de Limia"],
    correct: 0,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 137,
    question: "Como se chama o parque nacional de Galicia?",
    answers: ["Parque Nacional das Illas Atlánticas", "Parque Nacional de Doñana", "Parque Nacional de Ordesa", "Parque Nacional de Covadonga"],
    correct: 0,
    category: "natureza",
    difficulty: "medium"
  },
  {
    id: 138,
    question: "Cal é o río máis importante que pasa por Ourense?",
    answers: ["Miño", "Sil", "Limia", "Arnoia"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 139,
    question: "En que século se construíu a Catedral de Santiago?",
    answers: ["Século XI", "Século XII", "Século XIII", "Século XIV"],
    correct: 1,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 140,
    question: "Como se chama a festa máis importante de Santiago de Compostela?",
    answers: ["Festas do Apóstolo", "Festas de San Xoán", "Festas de San Froilán", "Festas de María Pita"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 141,
    question: "Cal é o marisco máis característico das Rías Galegas?",
    answers: ["Percebes", "Mexillóns", "Ostras", "Vieiras"],
    correct: 3,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 142,
    question: "Quen escribiu 'Cantares gallegos'?",
    answers: ["Rosalía de Castro", "Curros Enríquez", "Eduardo Pondal", "Ramón Cabanillas"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 143,
    question: "Cal é a montaña máis alta de Galicia?",
    answers: ["Pena Trevinca", "Cabeza de Manzaneda", "Pico Xacobeo", "Alto do Couto"],
    correct: 0,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 144,
    question: "Como se chama o vento típico da costa galega?",
    answers: ["Nordés", "Sueste", "Levante", "Tramontana"],
    correct: 0,
    category: "natureza",
    difficulty: "medium"
  },
  {
    id: 145,
    question: "Cal é o nome do aeroporto de Santiago?",
    answers: ["Aeroporto de Lavacolla", "Aeroporto de Santiago", "Aeroporto Rosalía de Castro", "Aeroporto do Pico Sacro"],
    correct: 2,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 146,
    question: "En que ano Galicia obtivo a súa autonomía?",
    answers: ["1979", "1980", "1981", "1982"],
    correct: 2,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 147,
    question: "Cal é o nome da universidade máis antiga de Galicia?",
    answers: ["Universidade de Santiago", "Universidade da Coruña", "Universidade de Vigo", "Universidade de Ourense"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 148,
    question: "Como se chama a danza tradicional galega máis conocida?",
    answers: ["Muiñeira", "Foliada", "Jota galega", "Alborada"],
    correct: 0,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 149,
    question: "Cal é o nome do cabo máis occidental de Galicia?",
    answers: ["Cabo Fisterra", "Cabo Touriñán", "Cabo Ortegal", "Cabo Vilán"],
    correct: 1,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 150,
    question: "Que instrumento musical é típico de Galicia?",
    answers: ["Gaita", "Tambor", "Guitarra", "Flauta"],
    correct: 0,
    category: "música",
    difficulty: "easy"
  },
  {
    id: 151,
    question: "Cal é o nome da torre emblemática de Hércules?",
    answers: ["Torre de Hércules", "Faro de Hércules", "Torre de Breogán", "Faro Romano"],
    correct: 0,
    category: "historia",
    difficulty: "easy"
  },
  {
    id: 152,
    question: "En que provincia está a cidade de Ferrol?",
    answers: ["A Coruña", "Lugo", "Pontevedra", "Ourense"],
    correct: 0,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 153,
    question: "Como se chama o postre típico galego feito con ovos e azucre?",
    answers: ["Filloas", "Tarta de Santiago", "Roscón de Reyes", "Tocino de ceo"],
    correct: 3,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 154,
    question: "Cal é o nome do parque natural das Fragas do Eume?",
    answers: ["Parque Natural das Fragas do Eume", "Parque Natural de Corrubedo", "Parque Natural do Invernadeiro", "Parque Natural de Baixa Limia"],
    correct: 0,
    category: "natureza",
    difficulty: "medium"
  },
  {
    id: 155,
    question: "Quen foi Breogán na mitoloxía galega?",
    answers: ["Un rei celta", "Un guerreiro", "Un deus", "Un navegante"],
    correct: 0,
    category: "mitoloxia",
    difficulty: "medium"
  },
  {
    id: 156,
    question: "Cal é o nome da festa da queimada?",
    answers: ["Samhain", "Festa de Entroido", "Noite de San Xoán", "Festa da Queimada"],
    correct: 2,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 157,
    question: "Como se chama a sopa típica galega con pan?",
    answers: ["Sopa de ajo", "Sopa de pan", "Sopa de castañas", "Sopas de leite"],
    correct: 3,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 158,
    question: "Cal é o nome do escritor galego autor de 'Os outros feirantes'?",
    answers: ["Álvaro Cunqueiro", "Camilo José Cela", "Emilia Pardo Bazán", "Valle-Inclán"],
    correct: 0,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 159,
    question: "En que cidade está o Museo do Pobo Galego?",
    answers: ["Santiago de Compostela", "A Coruña", "Vigo", "Ourense"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 160,
    question: "Cal é o nome da ría máis grande de Galicia?",
    answers: ["Ría de Arousa", "Ría de Vigo", "Ría de Pontevedra", "Ría de Muros"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 161,
    question: "Como se chama o castelo de Vigo?",
    answers: ["Castro", "Castelo de San Sebastián", "Castelo do Castro", "Castelo de Soutomaior"],
    correct: 2,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 162,
    question: "Cal é o nome da festividade galega do 25 de xullo?",
    answers: ["Día de Galicia", "Día do Apóstolo", "Día de Santiago", "Festas do Apóstolo"],
    correct: 1,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 163,
    question: "Que tipo de pedra é característica de Galicia?",
    answers: ["Granito", "Mármore", "Pizarra", "Arenisca"],
    correct: 0,
    category: "xeoloxia",
    difficulty: "medium"
  },
  {
    id: 164,
    question: "Cal é o nome do pazo máis famoso de Galicia?",
    answers: ["Pazo de Oca", "Pazo de Mariñán", "Pazo de Sobroso", "Pazo de Fefiñanes"],
    correct: 0,
    category: "arquitectura",
    difficulty: "medium"
  },
  {
    id: 165,
    question: "Como se chama o queixo típico galego de Arzúa?",
    answers: ["Queixo de Arzúa-Ulloa", "Queixo de Tetilla", "Queixo de San Simón", "Queixo de Cebreiro"],
    correct: 0,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 166,
    question: "Cal é o nome da romería máis importante de Galicia?",
    answers: ["Romería de Caión", "Romería da Barca", "Romería de San Andrés de Teixido", "Romería de Santa Marta"],
    correct: 2,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 167,
    question: "En que ano morreu Rosalía de Castro?",
    answers: ["1885", "1888", "1890", "1892"],
    correct: 0,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 168,
    question: "Cal é o nome da universidade de Vigo?",
    answers: ["Universidade de Vigo", "Universidade do Sur", "Universidade de Rías Baixas", "Universidade Atlántica"],
    correct: 0,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 169,
    question: "Como se chama a festa do marisco de O Grove?",
    answers: ["Festa do Marisco", "Festa da Vieira", "Festa do Percebe", "Festa das Ostras"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 170,
    question: "Cal é o nome do monte onde está o santuario da Virxe da Barca?",
    answers: ["Monte Pindo", "Monte da Barca", "Monte Tecla", "Monte do Facho"],
    correct: 1,
    category: "relixión",
    difficulty: "medium"
  },
  {
    id: 171,
    question: "Que provincia ten máis costa?",
    answers: ["A Coruña", "Lugo", "Pontevedra", "Ourense"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 172,
    question: "Cal é o nome da bebida típica galega con augardente?",
    answers: ["Queimada", "Carajillo", "Licor café", "Orujo"],
    correct: 0,
    category: "gastronomia",
    difficulty: "easy"
  },
  {
    id: 173,
    question: "Como se chama o escritor galego Premio Nobel?",
    answers: ["Camilo José Cela", "Valle-Inclán", "Emilia Pardo Bazán", "Álvaro Cunqueiro"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 174,
    question: "Cal é o nome da praia máis longa de Galicia?",
    answers: ["Praia de Montalvo", "Praia de Carnota", "Praia de Rodas", "Praia de Samil"],
    correct: 1,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 175,
    question: "En que comarca está o Parque Natural do Invernadeiro?",
    answers: ["Terra de Trives", "Valdeorras", "Terra de Caldelas", "A Limia"],
    correct: 0,
    category: "natureza",
    difficulty: "hard"
  },
  {
    id: 176,
    question: "Cal é o nome do castro de Santa Trega?",
    answers: ["Castro de Monte Santa Trega", "Castro de Trega", "Castro de Santa Tecla", "Castro de Tecla"],
    correct: 0,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 177,
    question: "Como se chama a empanada típica de Mondoñedo?",
    answers: ["Empanada de bonito", "Empanada de xoubas", "Empanada de bacallau", "Empanada de zamburiñas"],
    correct: 1,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 178,
    question: "Cal é o nome da festa de Entroido máis famosa?",
    answers: ["Entroido de Verín", "Entroido de Xinzo", "Entroido de Laza", "Entroido de Cobres"],
    correct: 1,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 179,
    question: "En que cidade nació Valle-Inclán?",
    answers: ["Vilanova de Arousa", "Cambados", "Sanxenxo", "O Grove"],
    correct: 0,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 180,
    question: "Cal é o nome da casa onde viviu Emilia Pardo Bazán?",
    answers: ["Pazo de Meirás", "Torre de Meirás", "Casa de Meirás", "Castelo de Meirás"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 181,
    question: "Como se chama o vino típico da Ribeira Sacra?",
    answers: ["Mencía", "Albariño", "Godello", "Treixadura"],
    correct: 0,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 182,
    question: "Cal é o nome da illa máis grande de Galicia?",
    answers: ["Illa de Arousa", "Illa de Ons", "Illa de Sálvora", "Illa de Cíes"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 183,
    question: "En que ano se inaugurou a Torre de Hércules?",
    answers: ["Século I", "Século II", "Século III", "Século IV"],
    correct: 1,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 184,
    question: "Cal é o nome do santo patrón de Galicia?",
    answers: ["Santiago Apóstolo", "San Xoán", "San Froilán", "San Rosendo"],
    correct: 0,
    category: "relixión",
    difficulty: "easy"
  },
  {
    id: 185,
    question: "Como se chama a sopa tradicional galega de castañas?",
    answers: ["Sopa de castañas", "Puré de castañas", "Castañas con leite", "Magosto"],
    correct: 0,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 186,
    question: "Cal é o nome da praia das Illas Cíes máis famosa?",
    answers: ["Praia de Figueiras", "Praia de Rodas", "Praia do Lago", "Praia de Monteagudo"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 187,
    question: "En que comarca está Ribadeo?",
    answers: ["A Mariña Occidental", "A Mariña Oriental", "Terra Chá", "Os Ancares"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 188,
    question: "Cal é o nome do grupo musical galego máis internacional?",
    answers: ["Luar na Lubre", "Milladoiro", "Fuxan os Ventos", "Os Resentidos"],
    correct: 1,
    category: "música",
    difficulty: "medium"
  },
  {
    id: 189,
    question: "Como se chama a festa da castaña en Galicia?",
    answers: ["Magosto", "Festa da Castaña", "Samaín", "Magostos"],
    correct: 0,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 190,
    question: "Cal é o nome da catedral de Ourense?",
    answers: ["Catedral de San Martiño", "Catedral de Santiago", "Catedral de Santa María", "Catedral de San Pedro"],
    correct: 0,
    category: "relixión",
    difficulty: "medium"
  },
  {
    id: 191,
    question: "En que cidade está a Universidade de Santiago?",
    answers: ["Santiago de Compostela", "Lugo", "A Coruña", "Pontevedra"],
    correct: 0,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 192,
    question: "Cal é o nome do poeta galego autor do himno galego?",
    answers: ["Eduardo Pondal", "Rosalía de Castro", "Curros Enríquez", "Ramón Cabanillas"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 193,
    question: "Como se chama a ruta de sendeirismo máis famosa de Galicia?",
    answers: ["Camiño de Santiago", "Camiño dos Faros", "Camiño do Norte", "Camiño Primitivo"],
    correct: 0,
    category: "turismo",
    difficulty: "easy"
  },
  {
    id: 194,
    question: "Cal é o nome da praia máis fotografada de Galicia?",
    answers: ["Praia das Catedrais", "Praia de Rodas", "Praia de Carnota", "Praia de Samil"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 195,
    question: "En que provincia está o Mosteiro de Oseira?",
    answers: ["Ourense", "Lugo", "A Coruña", "Pontevedra"],
    correct: 0,
    category: "relixión",
    difficulty: "medium"
  },
  {
    id: 196,
    question: "Cal é o nome da festa dos maios?",
    answers: ["Festa dos Maios", "Primeiro de Maio", "Maios de Lugo", "Festa da Primavera"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 197,
    question: "Como se chama o castelo de Soutomaior?",
    answers: ["Castelo de Soutomaior", "Pazo de Soutomaior", "Fortaleza de Soutomaior", "Torre de Soutomaior"],
    correct: 0,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 198,
    question: "Cal é o nome da raza de cabalo autóctona de Galicia?",
    answers: ["Cabalo galego", "Garrano", "Pura raza galega", "Cabalo da Groba"],
    correct: 1,
    category: "natureza",
    difficulty: "hard"
  },
  {
    id: 199,
    question: "En que ano se construíu a Ponte Romana de Ourense?",
    answers: ["Século I", "Século II", "Século III", "Século IV"],
    correct: 0,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 200,
    question: "Cal é o nome da festa da lamprea?",
    answers: ["Festa da Lamprea de Arbo", "Festa da Lamprea do Miño", "Festa da Lamprea", "Semana da Lamprea"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 201,
    question: "Como se chama a danza tradicional das espadas?",
    answers: ["Danza das espadas", "Danza de Ibias", "Danza dos arcos", "Danza guerreira"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 202,
    question: "Cal é o nome do pazo de Fefiñanes?",
    answers: ["Pazo de Fefiñanes", "Casa de Fefiñanes", "Castelo de Fefiñanes", "Torre de Fefiñanes"],
    correct: 0,
    category: "arquitectura",
    difficulty: "medium"
  },
  {
    id: 203,
    question: "En que cidade está o Kiosco Alfonso?",
    answers: ["A Coruña", "Vigo", "Santiago", "Pontevedra"],
    correct: 0,
    category: "arquitectura",
    difficulty: "medium"
  },
  {
    id: 204,
    question: "Cal é o nome da praia nudista máis famosa de Galicia?",
    answers: ["Praia de Figueiras", "Praia de Area Maior", "Praia de Barra", "Praia de Carnota"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 205,
    question: "Como se chama a festa do polbo de Carballiño?",
    answers: ["Festa do Polbo", "Feira do Polbo", "Festa do Polbo á Feira", "Día do Polbo"],
    correct: 2,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 206,
    question: "Cal é o nome da cascada máis alta de Galicia?",
    answers: ["Fervenza do Toxa", "Fervenza do Xallas", "Fervenza de Oneta", "Fervenza de Augacaída"],
    correct: 0,
    category: "natureza",
    difficulty: "hard"
  },
  {
    id: 207,
    question: "En que comarca está Verín?",
    answers: ["Verín", "Monterrei", "Viana", "Terra de Caldelas"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 208,
    question: "Cal é o nome do escritor galego de 'Memorias dun neno labrego'?",
    answers: ["Xosé Neira Vilas", "Álvaro Cunqueiro", "Rafael Dieste", "Otero Pedrayo"],
    correct: 0,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 209,
    question: "Como se chama a raza de vaca autóctona galega?",
    answers: ["Rubia Galega", "Cachena", "Caldelá", "Todas as anteriores"],
    correct: 3,
    category: "natureza",
    difficulty: "medium"
  },
  {
    id: 210,
    question: "Cal é o nome da festa de San Froilán?",
    answers: ["San Froilán de Lugo", "Festas de San Froilán", "Festa Patronal de Lugo", "Todas as anteriores"],
    correct: 3,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 211,
    question: "En que ano foi declarado o Camiño de Santiago Patrimonio da Humanidade?",
    answers: ["1993", "1994", "1995", "1996"],
    correct: 0,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 212,
    question: "Cal é o nome da fonte termal máis famosa de Ourense?",
    answers: ["As Burgas", "Termas de Outariz", "Termas da Chavasqueira", "Termas de Laias"],
    correct: 0,
    category: "natureza",
    difficulty: "medium"
  },
  {
    id: 213,
    question: "Como se chama a empanada típica de Betanzos?",
    answers: ["Empanada de Betanzos", "Empanada de bacallau", "Empanada de raxo", "Empanada de carne"],
    correct: 0,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 214,
    question: "Cal é o nome da romería do Naseiro?",
    answers: ["Romería do Naseiro", "Romería da Virxe do Naseiro", "Festa do Naseiro", "Virxe do Naseiro"],
    correct: 1,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 215,
    question: "En que cidade está o Pazo de Mariñán?",
    answers: ["Bergondo", "A Coruña", "Santiago", "Betanzos"],
    correct: 0,
    category: "arquitectura",
    difficulty: "hard"
  },
  {
    id: 216,
    question: "Cal é o nome da praia de Viveiro máis famosa?",
    answers: ["Praia de Covas", "Praia de Area", "Praia de Seiramar", "Praia do Fuciño do Porco"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 217,
    question: "Como se chama o carbón mineral galego?",
    answers: ["Antracita", "Hulla", "Lignito", "Carbón de pedra"],
    correct: 0,
    category: "xeoloxia",
    difficulty: "hard"
  },
  {
    id: 218,
    question: "Cal é o nome da festa da filloa?",
    answers: ["Festa da Filloa", "Entroido", "Festa de Reis", "Festa de San Xoán"],
    correct: 1,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 219,
    question: "En que provincia está a Ribeira Sacra?",
    answers: ["Ourense e Lugo", "Só Ourense", "Só Lugo", "Ourense, Lugo e Pontevedra"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 220,
    question: "Cal é o nome do mellor albariño de Galicia segundo os expertos?",
    answers: ["Non hai un mellor", "Pazo de Señoráns", "Martín Códax", "Morgadío"],
    correct: 0,
    category: "gastronomia",
    difficulty: "hard"
  },
  {
    id: 221,
    question: "Como se chama a lenda da Santa Compaña?",
    answers: ["Procesión dos mortos", "Santa Compaña", "Estadea", "Todas as anteriores"],
    correct: 3,
    category: "mitoloxia",
    difficulty: "medium"
  },
  {
    id: 222,
    question: "Cal é o nome da festa vikinga de Catoira?",
    answers: ["Romería Vikinga", "Festa Vikinga", "Desembarco Vikingo", "Invasión Vikinga"],
    correct: 2,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 223,
    question: "En que cidade nació Emilia Pardo Bazán?",
    answers: ["A Coruña", "Santiago", "Ferrol", "Pontevedra"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 224,
    question: "Cal é o nome da festa da anguila de Valga?",
    answers: ["Festa da Anguila", "Feira da Anguila", "Festa da Anguía de Valga", "Día da Anguia"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 225,
    question: "Como se chama o vino típico do Ribeiro?",
    answers: ["Treixadura", "Albariño", "Godello", "Loureira"],
    correct: 0,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 226,
    question: "Cal é o nome da cidade das Termas?",
    answers: ["Ourense", "Laias", "Lobios", "Bande"],
    correct: 0,
    category: "turismo",
    difficulty: "easy"
  },
  {
    id: 227,
    question: "En que comarca está Fisterra?",
    answers: ["Fisterra", "Costa da Morte", "Muros", "Noia"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 228,
    question: "Cal é o nome da praia máis salvaxe de Galicia?",
    answers: ["Praia de Trece", "Praia de Carnota", "Praia de Rostro", "Praia de Soesto"],
    correct: 2,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 229,
    question: "Como se chama a tradición de cantar na rúa en Nadal?",
    answers: ["Aguilandos", "Reisadas", "Caroling", "Vilancicos"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },  {
    id: 230,
    question: "Cal é o nome do museo máis visitado de Galicia?",
    answers: ["Museo do Pobo Galego", "Museo de Pontevedra", "Museo de Belas Artes da Coruña", "Centro Galego de Arte Contemporánea"],
    correct: 1,
    category: "cultura",
    difficulty: "medium"
  },
  // Preguntas 231-330: Cultura galega nivel medio-alto
  {
    id: 231,
    question: "Cal é a altitude máxima da serra do Xurés?",
    answers: ["1506 metros", "1438 metros", "1621 metros", "1367 metros"],
    correct: 1,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 232,
    question: "En que comarca se atopa o mosteiro de Caaveiro?",
    answers: ["As Mariñas", "Eume", "Terra Chá", "A Ulloa"],
    correct: 1,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 233,
    question: "Cal é o nome científico do carballo galego?",
    answers: ["Quercus robur", "Quercus pyrenaica", "Quercus ilex", "Quercus faginea"],
    correct: 0,
    category: "ciencia",
    difficulty: "hard"
  },
  {
    id: 234,
    question: "Quen foi o primeiro presidente da Xunta de Galicia?",
    answers: ["Xerardo Fernández Albor", "Gonzalo Fernández de la Mora", "Antonio Rosón Pérez", "Manuel Fraga Iribarne"],
    correct: 0,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 235,
    question: "En que ano se fundou a Real Academia Galega?",
    answers: ["1905", "1906", "1904", "1907"],
    correct: 0,
    category: "cultura",
    difficulty: "hard"
  },
  {
    id: 236,
    question: "Cal é o río que nace no lago de Sanabria?",
    answers: ["Tera", "Bibei", "Camba", "Arnoia"],
    correct: 0,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 237,
    question: "Quen compuxo a ópera 'Margarita la Tornera'?",
    answers: ["Ruperto Chapí", "Manuel Quiroga", "Reveriano Soutullo", "Juan Montes"],
    correct: 2,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 238,
    question: "Cal é a lonxitude total da costa galega?",
    answers: ["1195 km", "1498 km", "1720 km", "1634 km"],
    correct: 1,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 239,
    question: "En que concello se atopa a praia de Augas Santas?",
    answers: ["Pobra do Caramiñal", "Boiro", "Rianxo", "Ribeira"],
    correct: 3,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 240,
    question: "Quen escribiu 'A esmorga'?",
    answers: ["Álvaro Cunqueiro", "Eduardo Blanco Amor", "Rafael Dieste", "Anxel Fole"],
    correct: 1,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 241,
    question: "Cal é o nome galego do estorniño?",
    answers: ["Merlo", "Tordo", "Estorniño", "Melro"],
    correct: 2,
    category: "ciencia",
    difficulty: "medium"
  },
  {
    id: 242,
    question: "En que vila se celebra o festival de Ortigueira?",
    answers: ["Ortigueira", "Cedeira", "Cariño", "Viveiro"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 243,
    question: "Cal é a montaña máis alta da provincia de Ourense?",
    answers: ["Pena Trevinca", "Cabeza de Manzaneda", "Pena Negra", "Alto do Acebo"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 244,
    question: "Que instrumento tradicional galego ten cordas metálicas?",
    answers: ["Pandeireta", "Zanfona", "Tambor", "Bombo"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 245,
    question: "En que ano se inaugurou o AVE a Galicia?",
    answers: ["2009", "2011", "2010", "2012"],
    correct: 1,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 246,
    question: "Cal é o nome do cabo máis occidental de Galicia?",
    answers: ["Cabo Fisterra", "Cabo Touriñán", "Cabo Vilán", "Cabo Home"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 247,
    question: "Quen foi o fundador do Partido Galeguista?",
    answers: ["Alexandre Bóveda", "Antón Villar Ponte", "Vicente Risco", "Ramón Otero Pedrayo"],
    correct: 0,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 248,
    question: "Cal é o nome da danza tradicional galega máis coñecida?",
    answers: ["Muiñeira", "Alalá", "Foliada", "Pandeirada"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 249,
    question: "En que comarca se sitúa a cidade de Monforte de Lemos?",
    answers: ["A Ulloa", "Terra de Lemos", "Chantada", "Sarria"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 250,
    question: "Cal é o equipo de fútbol máis antigo de Galicia?",
    answers: ["RC Celta de Vigo", "RC Deportivo", "CD Lugo", "Pontevedra CF"],
    correct: 3,
    category: "deportes",
    difficulty: "hard"
  },
  {
    id: 251,
    question: "Que tipo de rocha predomina na Costa da Morte?",
    answers: ["Granito", "Pizarra", "Cuarcita", "Xisto"],
    correct: 0,
    category: "ciencia",
    difficulty: "medium"
  },
  {
    id: 252,
    question: "En que século se construíu a catedral de Mondoñedo?",
    answers: ["XII", "XIII", "XIV", "XV"],
    correct: 1,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 253,
    question: "Cal é o nome do parque natural máis grande de Galicia?",
    answers: ["Baixa Limia - Serra do Xurés", "O Invernadeiro", "Monte Aloia", "Corrubedo"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 254,
    question: "Quen foi o primeiro alcalde democrático de Santiago?",
    answers: ["Xerardo Estévez", "Francisco Vázquez", "Ánxel Currás", "Constantino Candeira"],
    correct: 0,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 255,
    question: "Cal é o nome galego da laverca?",
    answers: ["Cotovía", "Laverca", "Toutinegra", "Escribenta"],
    correct: 0,
    category: "ciencia",
    difficulty: "medium"
  },
  {
    id: 256,
    question: "En que ano morreu Rosalía de Castro?",
    answers: ["1884", "1885", "1886", "1887"],
    correct: 1,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 257,
    question: "Cal é a ría máis longa de Galicia?",
    answers: ["Ría de Arousa", "Ría de Vigo", "Ría de Pontevedra", "Ría de Muros e Noia"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 258,
    question: "Que escultor galego creou os 'Dous Amigos'?",
    answers: ["Francisco Asorey", "Acisclo Manzano", "Julio González", "Isaac Díaz Pardo"],
    correct: 0,
    category: "arte",
    difficulty: "hard"
  },
  {
    id: 259,
    question: "En que concello está o mosteiro de Oseira?",
    answers: ["Cea", "San Cristovo de Cea", "Castro Caldelas", "Nogueira de Ramuín"],
    correct: 1,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 260,
    question: "Cal é o nome do himno oficial de Galicia?",
    answers: ["Os Pinos", "Galicia no máis", "A Rianxeira", "Alborada gallega"],
    correct: 0,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 261,
    question: "Quen foi o primeiro ciclista galego en gañar unha etapa no Tour de Francia?",
    answers: ["Óscar Freire", "Ezequiel Mosquera", "Herminio Díaz Zabala", "Samuel Sánchez"],
    correct: 2,
    category: "deportes",
    difficulty: "hard"
  },
  {
    id: 262,
    question: "Cal é a temperatura media anual en Santiago de Compostela?",
    answers: ["12°C", "13°C", "14°C", "15°C"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 263,
    question: "En que ano se creou a Universidade de Vigo?",
    answers: ["1989", "1990", "1991", "1992"],
    correct: 0,
    category: "educacion",
    difficulty: "medium"
  },
  {
    id: 264,
    question: "Cal é o nome do tradicional caldo galego con grelos?",
    answers: ["Caldo galego", "Lacón con grelos", "Cocido galego", "Pote galego"],
    correct: 1,
    category: "gastronomia",
    difficulty: "easy"
  },
  {
    id: 265,
    question: "Que compositor galego escribiu 'Alborada de Vigo'?",
    answers: ["Pascual Veiga", "Reveriano Soutullo", "Juan Montes", "Rogelio Groba"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 266,
    question: "En que concello se atopa a praia das Catedrais?",
    answers: ["Ribadeo", "Foz", "Burela", "Viveiro"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 267,
    question: "Cal é o nome do primeiro xornal en galego?",
    answers: ["A Nosa Terra", "El Eco de Galicia", "A Gaita Gallega", "Gaceta de Galicia"],
    correct: 2,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 268,
    question: "Que tipo de árbore é a que predomina nos bosques atlánticos galegos?",
    answers: ["Carballo", "Castiñeiro", "Bidueiro", "Freixo"],
    correct: 0,
    category: "ciencia",
    difficulty: "medium"
  },
  {
    id: 269,
    question: "En que ano naceu Álvaro Cunqueiro?",
    answers: ["1910", "1911", "1912", "1913"],
    correct: 1,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 270,
    question: "Cal é o nome da principal escola de gaitas de Galicia?",
    answers: ["Escola Provincial de Gaitas de Ourense", "Real Banda de Gaitas de Orense", "Banda de Gaitas de Ortigueira", "Escola de Gaitas de Pontevedra"],
    correct: 0,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 271,
    question: "En que provincia se atopa a vila de Allariz?",
    answers: ["Lugo", "Ourense", "Pontevedra", "A Coruña"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 272,
    question: "Cal é o nome do clube de baloncesto máis exitoso de Galicia?",
    answers: ["Obradoiro CAB", "Básquet Coruña", "CB Lugo", "Ourense Baloncesto"],
    correct: 0,
    category: "deportes",
    difficulty: "medium"
  },
  {
    id: 273,
    question: "Que santo é o patrón dos mariñeiros galegos?",
    answers: ["San Pedro", "San Andrés", "San Telmo", "San Nicolás"],
    correct: 2,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 274,
    question: "En que concello está a ponte sobre o río Ulla máis antiga?",
    answers: ["Vedra", "Ponte Ulla", "Padrón", "Teo"],
    correct: 1,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 275,
    question: "Cal é o nome do primeiro filme falado en galego?",
    answers: ["A Rianxeira", "Sempre Xonxa", "Marcelino Pan y Vino", "El Hombre de los Muñecos"],
    correct: 1,
    category: "cultura",
    difficulty: "hard"
  },
  {
    id: 276,
    question: "Quen foi o primeiro rector da Universidade de Santiago?",
    answers: ["Ángel González Álvarez", "José Filgueira Valverde", "Ramón Piñeiro", "Vicente Risco"],
    correct: 0,
    category: "educacion",
    difficulty: "hard"
  },
  {
    id: 277,
    question: "Cal é a produción anual de mexillóns nas rías galegas?",
    answers: ["200.000 toneladas", "250.000 toneladas", "300.000 toneladas", "350.000 toneladas"],
    correct: 1,
    category: "economia",
    difficulty: "hard"
  },
  {
    id: 278,
    question: "En que ano se abriu o primeiro tramo da autopista AP-9?",
    answers: ["1974", "1975", "1976", "1977"],
    correct: 2,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 279,
    question: "Cal é o nome da festividade que se celebra o 25 de xullo?",
    answers: ["Día de Galicia", "Santiago Apóstolo", "Día das Letras Galegas", "Día da Patria Galega"],
    correct: 1,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 280,
    question: "Que poeta galego foi homenaxeado no Día das Letras Galegas de 2020?",
    answers: ["Ricardo Carballo Calero", "Xohana Torres", "Luz Pozo Garza", "Antón Avilés de Taramancos"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 281,
    question: "En que concello se atopa o castro de Viladonga?",
    answers: ["Castro de Rei", "Guitiriz", "Vilalba", "Muras"],
    correct: 0,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 282,
    question: "Cal é o nome da danza tradicional de espadas galega?",
    answers: ["Danza das espadas", "Danza prima", "Ball de bastons", "Aurresku"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 283,
    question: "Que atleta galego gañou medalla olímpica en Atlanta 1996?",
    answers: ["David Cal", "Carlos Pérez", "Beatriz Manchón", "Francisco Fernández Ochoa"],
    correct: 2,
    category: "deportes",
    difficulty: "hard"
  },
  {
    id: 284,
    question: "En que río se sitúa a central hidroeléctrica de Belesar?",
    answers: ["Miño", "Sil", "Ulla", "Tambre"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 285,
    question: "Cal é o nome do tradicional licor galego feito con herbas?",
    answers: ["Orujo de herbas", "Augardente", "Queimada", "Licor café"],
    correct: 0,
    category: "gastronomia",
    difficulty: "easy"
  },
  {
    id: 286,
    question: "Quen foi o primeiro galego en gañar un Grammy Latino?",
    answers: ["Luz Casal", "Siniestro Total", "Mägo de Oz", "Jesse & Joy"],
    correct: 0,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 287,
    question: "En que concello está o pazo de Oca?",
    answers: ["A Estrada", "Silleda", "Lalín", "Vila de Cruces"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 288,
    question: "Cal é a superficie total de Galicia?",
    answers: ["29.574 km²", "29.434 km²", "29.754 km²", "29.634 km²"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 289,
    question: "Que escritor galego escribiu 'Memorias dun neno labrego'?",
    answers: ["Xosé Neira Vilas", "Otero Pedrayo", "Castelao", "Cunqueiro"],
    correct: 0,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 290,
    question: "En que ano se creou a Televisión de Galicia?",
    answers: ["1985", "1984", "1986", "1987"],
    correct: 0,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 291,
    question: "Cal é o nome da raza de cabalo autóctona de Galicia?",
    answers: ["Cabalo galego", "Garrano", "Pottoka", "Losino"],
    correct: 1,
    category: "ciencia",
    difficulty: "medium"
  },
  {
    id: 292,
    question: "En que concello se celebra a Festa do Marisco?",
    answers: ["O Grove", "Cambados", "Sanxenxo", "Vilanova de Arousa"],
    correct: 0,
    category: "gastronomia",
    difficulty: "easy"
  },
  {
    id: 293,
    question: "Quen foi o primeiro presidente do Parlamento de Galicia?",
    answers: ["Antonio Carro Martínez", "Victorino Núñez", "Pilar Rojo", "José Luis Barreiro"],
    correct: 0,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 294,
    question: "Cal é o nome do faro máis alto de Galicia?",
    answers: ["Faro de Fisterra", "Faro de Estaca de Bares", "Faro da Coruña", "Faro de Cabo Vilán"],
    correct: 2,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 295,
    question: "En que século se fundou o mosteiro de Sobrado dos Monxes?",
    answers: ["X", "XI", "XII", "XIII"],
    correct: 0,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 296,
    question: "Cal é o nome do grupo musical galego máis internacional?",
    answers: ["Luar na Lubre", "Milladoiro", "Carlos Núñez", "Susana Seivane"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 297,
    question: "En que concello está a fortaleza de Monterreal?",
    answers: ["Baiona", "A Guarda", "Tui", "Nigrán"],
    correct: 0,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 298,
    question: "Cal é o nome da raza bovina autóctona galega?",
    answers: ["Rubia Gallega", "Cachena", "Caldelá", "Todas as anteriores"],
    correct: 3,
    category: "ciencia",
    difficulty: "medium"
  },
  {
    id: 299,
    question: "Que xogador galego de tenis acadou maior éxito internacional?",
    answers: ["David Ferrer", "Tommy Robredo", "Nicolás Almagro", "Feliciano López"],
    correct: 0,
    category: "deportes",
    difficulty: "medium"
  },
  {
    id: 300,
    question: "En que ano se declarou o Camiño de Santiago Patrimonio da Humanidade?",
    answers: ["1985", "1993", "1987", "1991"],
    correct: 0,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 301,
    question: "Cal é o nome da pedra típica galega usada na construción?",
    answers: ["Granito", "Pizarra", "Cuarcita", "Todas as anteriores"],
    correct: 3,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 302,
    question: "Quen foi o primeiro galego campión do mundo de piragüismo?",
    answers: ["David Cal", "Carlos Pérez", "Beatriz Manchón", "Miguel García"],
    correct: 1,
    category: "deportes",
    difficulty: "hard"
  },
  {
    id: 303,
    question: "En que concello se atopa a praia de Rodas?",
    answers: ["Vigo", "Cangas", "Moaña", "Bueu"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 304,
    question: "Cal é o nome do instrumental tradicional galego similar ao acordeón?",
    answers: ["Concertina", "Zanfona", "Pandeireta", "Tambor"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 305,
    question: "En que ano se celebraron os primeiros Xogos Galegos?",
    answers: ["1982", "1983", "1984", "1985"],
    correct: 1,
    category: "deportes",
    difficulty: "hard"
  },
  {
    id: 306,
    question: "Cal é o nome da universidade privada máis antiga de Galicia?",
    answers: ["Universidad CEU San Pablo", "Universidad Católica San Antonio", "Universidad Antonio de Nebrija", "Universidad San Jorge"],
    correct: 0,
    category: "educacion",
    difficulty: "hard"
  },
  {
    id: 307,
    question: "En que concello se atopa o pazo de Meirás?",
    answers: ["Sada", "Oleiros", "Bergondo", "Arteixo"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 308,
    question: "Cal é o nome da festividade tradicional galega do 1 de novembro?",
    answers: ["Samaín", "Magosto", "San Martiño", "Todas as Santas"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 309,
    question: "Quen foi o primeiro galego en gañar o premio Planeta?",
    answers: ["Torrente Ballester", "Álvaro Pombo", "Manuel Rivas", "Suso de Toro"],
    correct: 0,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 310,
    question: "En que comarca se sitúa a vila de Celanova?",
    answers: ["Terra de Celanova", "A Limia", "Viana", "Allariz-Maceda"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 311,
    question: "Cal é o nome do primeiro disco de Luar na Lubre?",
    answers: ["Plenilunio", "Cántigas do Maio", "Hai un paraíso", "Camiños da fin da terra"],
    correct: 0,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 312,
    question: "En que concello se atopa a praia de Carnota?",
    answers: ["Carnota", "Muros", "Mazaricos", "Dumbría"],
    correct: 0,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 313,
    question: "Cal é a lonxitude da praia de Carnota?",
    answers: ["6 km", "7 km", "8 km", "9 km"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 314,
    question: "Que tenor galego acadou fama internacional?",
    answers: ["Plácido Domingo", "José Carreras", "Francisco Araiza", "Ningún dos anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 315,
    question: "En que ano se proclamou a autonomía de Galicia?",
    answers: ["1981", "1982", "1980", "1983"],
    correct: 0,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 316,
    question: "Cal é o nome da deputación con maior superficie en Galicia?",
    answers: ["Lugo", "A Coruña", "Ourense", "Pontevedra"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 317,
    question: "En que concello están as fragas do Eume?",
    answers: ["Cabanas", "As Pontes", "Monfero", "Todos os anteriores"],
    correct: 3,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 318,
    question: "Cal é o nome do prato típico galego feito con polbo?",
    answers: ["Polbo á feira", "Polbo a la gallega", "Pulpo á galega", "Todas as anteriores"],
    correct: 3,
    category: "gastronomia",
    difficulty: "easy"
  },
  {
    id: 319,
    question: "Quen foi o primeiro director da Real Filharmonía de Galicia?",
    answers: ["Helmuth Rilling", "Maximiano Valdés", "Victor Pablo Pérez", "Fernando Puchol"],
    correct: 2,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 320,
    question: "En que concello se atopa o dolmen de Dombate?",
    answers: ["Cabana de Bergantiños", "Carballo", "Malpica", "Ponteceso"],
    correct: 0,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 321,
    question: "Cal é o nome da empresa pública de televisión galega?",
    answers: ["TVG", "CRTVG", "Televisión de Galicia", "Compañía de Radio-Televisión de Galicia"],
    correct: 3,
    category: "comunicacion",
    difficulty: "medium"
  },
  {
    id: 322,
    question: "En que concello se celebra a festa dos Maios?",
    answers: ["Ames", "Teo", "Val do Dubra", "Todos os anteriores"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 323,
    question: "Cal é o nome do equipo de rugby máis destacado de Galicia?",
    answers: ["CRAT", "Belenos RFC", "RC Vigo", "Todas as anteriores"],
    correct: 3,
    category: "deportes",
    difficulty: "medium"
  },
  {
    id: 324,
    question: "En que ano se creou o Parque Nacional das Illas Atlánticas?",
    answers: ["2001", "2002", "2003", "2004"],
    correct: 1,
    category: "medioambiente",
    difficulty: "medium"
  },
  {
    id: 325,
    question: "Cal é o nome da cooperativa láctea máis importante de Galicia?",
    answers: ["Lactalis", "Danone", "Leche Pascual", "Leche Celta"],
    correct: 3,
    category: "economia",
    difficulty: "medium"
  },
  {
    id: 326,
    question: "En que concello se atopa o cabo Peñas?",
    answers: ["Non está en Galicia", "Malpica", "Laxe", "Camariñas"],
    correct: 0,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 327,
    question: "Cal é o nome do hospital máis antigo de Santiago?",
    answers: ["Hospital Real", "Hospital dos Reis Católicos", "Hospital Clínico", "Hospital Psiquiátrico"],
    correct: 1,
    category: "historia",
    difficulty: "hard"
  },
  {
    id: 328,
    question: "En que concello se celebra a Romaría Vikinga de Catoira?",
    answers: ["Catoira", "Villagarcía", "Pontecesures", "A Illa de Arousa"],
    correct: 0,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 329,
    question: "Cal é o nome da principal ruta de sendeirismo de longa distancia en Galicia?",
    answers: ["GR-1", "Camiño de Santiago", "Camiño Natural del Miño", "Todas as anteriores"],
    correct: 3,
    category: "deportes",
    difficulty: "medium"
  },  {
    id: 330,
    question: "En que ano se abriu ao público o Museo Guggenheim de Bilbao?",
    answers: ["Non está en Galicia", "1996", "1997", "1998"],
    correct: 0,
    category: "arte",
    difficulty: "hard"
  },

  // === PREGUNTAS DE MÚSICA GALEGA (IDs 331-430) ===
  {
    id: 331,
    question: "Cal é o nome do cantautor galego coñecido como 'O Fillo da Lúa'?",
    answers: ["Xosé Manuel Pintor", "Suso Vaamonde", "Andrés do Barro", "Emilio Rúa"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 332,
    question: "Que instrumento tradicional galego ten forma de gaita pero é máis pequeno?",
    answers: ["Pandeireta", "Tamboril", "Requinta", "Bombo"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 333,
    question: "Quen foi o fundador do grupo Milladoiro?",
    answers: ["Rodrigo Romaní", "Antón Seoane", "Xosé Manuel Budiño", "Nando Casal"],
    correct: 0,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 334,
    question: "Como se chama a parte da gaita que produce o son?",
    answers: ["Punteiro", "Roncón", "Fol", "Palleta"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 335,
    question: "Que cantante galega interpretou 'A Rianxeira'?",
    answers: ["Luz Casal", "María del Mar Bonet", "Carmen París", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 336,
    question: "Cal é o nome do festival de música celta que se celebra en Ortigueira?",
    answers: ["Festival Internacional do Mundo Celta", "Celtic Music Festival", "Ortigueira Celtic", "FIC Ortigueira"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 337,
    question: "Quen compuxo a música do himno galego 'Os Pinos'?",
    answers: ["Eduardo Pondal", "Pascual Veiga", "Manuel Curros Enríquez", "Rosalía de Castro"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 338,
    question: "Que grupo galego popularizou a canción 'Galicia Terra Única'?",
    answers: ["Luar na Lubre", "Milladoiro", "Celtas Cortos", "Na Lúa"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 339,
    question: "Como se chama o baile tradicional galego máis coñecido?",
    answers: ["Muiñeira", "Alalá", "Pandeirada", "Foliada"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 340,
    question: "Quen é o cantante principal do grupo Luar na Lubre?",
    answers: ["Rosa Cedrón", "Bieito Romero", "Antón Reixa", "Carlos Nuñez"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 341,
    question: "Que instrumento toca principalmente Carlos Núñez?",
    answers: ["Gaita", "Violín", "Acordeón", "Guitarra"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 342,
    question: "Cal é o nome do festival de música tradicional que se celebra en Vigo?",
    answers: ["Festival de Ortigueira", "Intercéltico de Lorient", "Festival do Mundo", "Son Ríos"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 343,
    question: "Que cantante galega foi coñecida como 'A Reina da Copla Galega'?",
    answers: ["Concha Piquer", "Manuela Vila", "Uxía", "Martiño"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 344,
    question: "Como se chama o son característico que fan as pandeiretas galegas?",
    answers: ["Repique", "Tamboril", "Requinte", "Pandeirada"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 345,
    question: "Quen escribiu a letra do himno galego 'Os Pinos'?",
    answers: ["Eduardo Pondal", "Pascual Veiga", "Manuel Curros Enríquez", "Rosalía de Castro"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 346,
    question: "Que grupo galego ten como vocalista a Rosa Cedrón?",
    answers: ["Milladoiro", "Luar na Lubre", "Berrogüetto", "Mägo de Oz"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 347,
    question: "Cal é o nome do festival intercéltico que se celebra en Francia e ten moita participación galega?",
    answers: ["Festival de Lorient", "Festival de Bretaña", "Celtic Connections", "Festival de Cornwall"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 348,
    question: "Que cantante galego foi membro do grupo Siniestro Total?",
    answers: ["Julián Hernández", "Antón Reixa", "Alberto Torrado", "Todos os anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 349,
    question: "Como se chama a danza tradicional galega que simula o traballo do muíño?",
    answers: ["Muiñeira", "Alalá", "Foliada", "Pandeirada"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 350,
    question: "Quen é o gaiteiro galego máis internacional?",
    answers: ["Antón Corral", "Carlos Núñez", "Xosé Manuel Budiño", "Susana Seivane"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 351,
    question: "Que grupo rock galego cantaba en galego nos anos 80?",
    answers: ["Siniestro Total", "Golpes Baixos", "Radio Futura", "Os Resentidos"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 352,
    question: "Cal é o nome da gaita tradicional galega?",
    answers: ["Gaita galega", "Gaita de fol", "Gaita asturiana", "Gaita escocesa"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 353,
    question: "Quen foi Perfecto Feijoo no mundo da música galega?",
    answers: ["Gaiteiro", "Compositor", "Cantor", "Luthier"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 354,
    question: "Que instrumento acompaña tradicionalmente á gaita na música galega?",
    answers: ["Violín", "Tamboril", "Guitarra", "Acordeón"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 355,
    question: "Cal é o nome do festival de folk que se celebra en Santiago?",
    answers: ["Sinsal", "Folk Santiago", "Compostela Folk", "Son de Galicia"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 356,
    question: "Quen é Susana Seivane?",
    answers: ["Cantante", "Gaiteira", "Compositora", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 357,
    question: "Que banda galega de rock tocou no festival de Woodstock?",
    answers: ["Siniestro Total", "Os Resentidos", "Non foi ningunha", "Golpes Baixos"],
    correct: 2,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 358,
    question: "Como se chama o canto tradicional galego sen acompañamento instrumental?",
    answers: ["Alalá", "Muiñeira", "Pandeirada", "Foliada"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 359,
    question: "Quen fundou o grupo Milladoiro?",
    answers: ["Rodrigo Romaní", "Antón Seoane", "Nando Casal", "Xosé Manuel Budiño"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 360,
    question: "Que cantante galega participou en Eurovisión?",
    answers: ["Luz Casal", "Rosa Cedrón", "Uxía", "Ninguna das anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 361,
    question: "Cal é o nome da melodía tradicional máis coñecida de Galicia?",
    answers: ["A Rianxeira", "Muiñeira de Lugo", "Alborada", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 362,
    question: "Quen foi Xoán Montes?",
    answers: ["Gaiteiro", "Cantor", "Compositor", "Investigador musical"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 363,
    question: "Que grupo galego fusiona música tradicional con rock?",
    answers: ["Mägo de Oz", "Luar na Lubre", "Berrogüetto", "Todos os anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 364,
    question: "Como se chama o instrumento de percusión tradicional galego feito de madeira?",
    answers: ["Bombo", "Tamboril", "Pandeireta", "Todos os anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 365,
    question: "Quen compose 'Negra Sombra'?",
    answers: ["Rosalía de Castro", "Juan Montes", "Eduardo Pondal", "Xoan Montes"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 366,
    question: "Que festival de música céltica se celebra cada verán en Pontevedra?",
    answers: ["Festival Intercéltico", "Son Rías Baixas", "Celtic Night", "Festival do Atlántico"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 367,
    question: "Cal é o nome do disco máis famoso de Milladoiro?",
    answers: ["Galician Dreams", "A Galicia de Maeloc", "Verde Verdeando", "O Berro Seco"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 368,
    question: "Quen foi Emilio Cao?",
    answers: ["Músico", "Etnomusicólogo", "Recopilador de música tradicional", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 369,
    question: "Que instrumento tradicional galego ten cordas?",
    answers: ["Zanfona", "Gaita", "Tamboril", "Pandeireta"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 370,
    question: "Cal é o nome do himno oficioso de Galicia?",
    answers: ["A Rianxeira", "Os Pinos", "Negra Sombra", "Muiñeira de Lugo"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 371,
    question: "Quen foi o primeiro gaiteiro galego en grabar un disco?",
    answers: ["Perfecto Feijoo", "Antonio Fernández", "Ricardo Portela", "Xosé Lois Foxo"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 372,
    question: "Que grupo galego creou a canción 'Memoria da Noite'?",
    answers: ["Luar na Lubre", "Berrogüetto", "Milladoiro", "Na Lúa"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 373,
    question: "Como se chama a técnica de canto tradicional galego sen palabras?",
    answers: ["Alalá", "Voceo", "Canto llano", "Melisma"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 374,
    question: "Quen foi Xaquín Lorenzo Fernández 'Xocas'?",
    answers: ["Músico", "Etnógrafo", "Recopilador de cantigas", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 375,
    question: "Que cantante galego é coñecido polo seu traballo con músicas do mundo?",
    answers: ["Carlos Núñez", "Uxía", "Kepa Junkera", "Hevia"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 376,
    question: "Cal é o nome da danza galega que se baila en roda?",
    answers: ["Muiñeira", "Alalá", "Ruada", "Foliada"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 377,
    question: "Quen escribiu a música de 'A Rianxeira'?",
    answers: ["É anónima", "Pascual Veiga", "Eduardo Pondal", "Perfecto Feijoo"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 378,
    question: "Que grupo galego de rock canta en galego dende os anos 90?",
    answers: ["Platero y Tú", "Extremoduro", "Sôber", "Ningún dos anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 379,
    question: "Como se chama o festival de música tradicional que se celebra en Ribadavia?",
    answers: ["Ribadavia Folk", "Festival do Ribeiro", "Son do Ribeiro", "Festival da Istoria"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 380,
    question: "Quen foi Dorothé?",
    answers: ["Cantante francesa", "Gaiteira galega", "Investigadora musical", "Compositora"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 381,
    question: "Que instrumento acompaña a muiñeira tradicionalmente?",
    answers: ["Só gaita", "Gaita e tamboril", "Pandeireta", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 382,
    question: "Cal é o nome do festival de música galega que se celebra en Buenos Aires?",
    answers: ["Festival Galego", "Festa da Galeguidade", "Festival Celta de Buenos Aires", "Non existe"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 383,
    question: "Quen foi Xosé Lois Foxo?",
    answers: ["Gaiteiro", "Tamborileiro", "Investigador", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 384,
    question: "Que canción tradicional galega fala dun mariñeiro?",
    answers: ["O Mariñeiro", "A Rianxeira", "Negra Sombra", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 385,
    question: "Como se chama a técnica de tocar a gaita con adornos?",
    answers: ["Ornamentación", "Picado", "Cran", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 386,
    question: "Quen é Anxo Pintos?",
    answers: ["Gaiteiro", "Compositor", "Investigador", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 387,
    question: "Que festival de música celta se celebra en Ferrol?",
    answers: ["Celtic Ferrol", "Festival do Atlántico", "Son de Mar", "Non hai festival celta en Ferrol"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 388,
    question: "Cal é o nome da gaita pequena galega?",
    answers: ["Requinta", "Gaitilla", "Gaita pequena", "Todas as anteriores"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 389,
    question: "Quen compose a música de 'Adeus ríos, adeus fontes'?",
    answers: ["Rosalía de Castro", "Juan Montes", "É melodía tradicional", "Eduardo Pondal"],
    correct: 2,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 390,
    question: "Que grupo galego ten como vocalista a Mercedes Peón?",
    answers: ["Luar na Lubre", "Berrogüetto", "O seu propio grupo", "Milladoiro"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 391,
    question: "Como se chama o baile tradicional galego de cortexo?",
    answers: ["Muiñeira", "Pasacorredoiras", "Foliada", "Pandeirada"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 392,
    question: "Quen foi Filgueira Valverde no ámbito musical?",
    answers: ["Músico", "Investigador", "Promotor cultural", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 393,
    question: "Que instrumento tradicional galego é de vento e madeira?",
    answers: ["Gaita", "Frauta traveseira", "Clarinete", "Todas as anteriores"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 394,
    question: "Cal é o nome do festival de gaitas que se celebra en Ourense?",
    answers: ["Festival de Gaitas", "Gaiteiros de Ourense", "Son Ourense", "Non hai festival específico"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 395,
    question: "Quen foi Avelino Cachafeiro?",
    answers: ["Gaiteiro", "Compositor", "Constructor de gaitas", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 396,
    question: "Que canción galega foi popularizada por Joan Baez?",
    answers: ["Negra Sombra", "A Rianxeira", "Adeus ríos", "Muiñeira de Lugo"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 397,
    question: "Como se chama a festa tradicional galega onde se toca música?",
    answers: ["Romaría", "Festa", "Verbena", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 398,
    question: "Quen é Cristina Pato?",
    answers: ["Gaiteira", "Pianista", "Compositora", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 399,
    question: "Que grupo de música tradicional galega actúa dende hai máis de 40 anos?",
    answers: ["Milladoiro", "Luar na Lubre", "Berrogüetto", "Na Lúa"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 400,
    question: "Cal é o nome da melodía que tradicionalmente abre as festas galegas?",
    answers: ["Alborada", "Diana", "Pasacalle", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 401,
    question: "Quen foi Manuel Quiroga?",
    answers: ["Violinista", "Gaiteiro", "Compositor", "Concertista internacional"],
    correct: 0,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 402,
    question: "Que cantante galega colaborou con Sting?",
    answers: ["Luz Casal", "Uxía", "Rosa Cedrón", "Cristina Pato"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 403,
    question: "Como se chama o son que fai a gaita ao comezar a tocar?",
    answers: ["Afinación", "Roncón", "Bordón", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 404,
    question: "Quen fundou o grupo Os Resentidos?",
    answers: ["Antón Reixa", "Alberto Torrado", "Javier Soto", "Todos xuntos"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 405,
    question: "Que instrumento tradicional galego ten forma de caixa?",
    answers: ["Bombo", "Tamboril", "Pandeireta", "Todos os anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 406,
    question: "Cal é o nome do festival de música que se celebra en Monforte de Lemos?",
    answers: ["Monforte Folk", "Festival de Monforte", "Son Ribeira Sacra", "Non hai festival específico"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 407,
    question: "Quen foi Cándido Pazos?",
    answers: ["Músico", "Investigador", "Constructor de instrumentos", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 408,
    question: "Que canción tradicional galega ten máis versións gravadas?",
    answers: ["A Rianxeira", "Negra Sombra", "Muiñeira de Lugo", "Adeus ríos"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 409,
    question: "Como se chama a danza galega que imita o voo das aves?",
    answers: ["Muiñeira", "Danza dos paxaros", "Non existe", "Foliada"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 410,
    question: "Quen é Hevia?",
    answers: ["Gaiteiro asturiano", "Gaiteiro galego", "Cantante galego", "Músico catalán"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 411,
    question: "Que grupo galego fusiona gaita con música electrónica?",
    answers: ["Milladoiro", "Mercedes Peón", "Berrogüetto", "Luar na Lubre"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 412,
    question: "Cal é o nome da escola de gaitas máis famosa de Galicia?",
    answers: ["Escola de Gaitas de Ortigueira", "Conservatorio de Santiago", "Escola de Música Tradicional", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 413,
    question: "Quen foi Maximino Zumalave?",
    answers: ["Gaiteiro", "Constructor de gaitas", "Investigador", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 414,
    question: "Que canción galega se canta tradicionalmente na Noiteboa?",
    answers: ["A Rianxeira", "Villancicos galegos", "Negra Sombra", "Todas as anteriores"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 415,
    question: "Como se chama o concurso de gaitas máis importante de Galicia?",
    answers: ["Concurso Nacional de Gaitas", "Trofeo Xacobeo", "Concurso de Ortigueira", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 416,
    question: "Quen é Eliseo Parra?",
    answers: ["Músico galego", "Músico castellano", "Investigador", "Gaiteiro"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 417,
    question: "Que instrumento acompaña tradicionalmente os romances galegos?",
    answers: ["Guitarra", "Gaita", "Voz sola", "Todas as anteriores"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 418,
    question: "Cal é o nome do himno non oficial de Vigo?",
    answers: ["Vigo, Vigo", "Unha noite na ría", "Non ten himno específico", "A Rianxeira"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 419,
    question: "Quen foi Vicente Risco no ámbito musical?",
    answers: ["Músico", "Investigador", "Promotor cultural", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 420,
    question: "Que grupo galego actuou no Carnegie Hall?",
    answers: ["Milladoiro", "Luar na Lubre", "Carlos Núñez", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 421,
    question: "Como se chama a técnica de canto galego con voz grave?",
    answers: ["Alalá grave", "Baixo galego", "Non ten nome específico", "Roncón vocal"],
    correct: 2,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 422,
    question: "Quen foi Ramón Puga?",
    answers: ["Gaiteiro", "Tamborileiro", "Constructor", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 423,
    question: "Que canción tradicional galega se canta nas vodas?",
    answers: ["Cantigas de boda", "A Rianxeira", "Alalás de boda", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 424,
    question: "Cal é o nome da melodía que se toca cando chega o santo nas procesións?",
    answers: ["Himno procesional", "Marcha real", "Depende do santo", "Todas as anteriores"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 425,
    question: "Quen é Xurxo Souto?",
    answers: ["Gaiteiro", "Investigador", "Escritor", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 426,
    question: "Que instrumento tradicional galego se toca cos dedos?",
    answers: ["Pandeireta", "Bombo", "Gaita", "Zanfona"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 427,
    question: "Cal é o nome do festival de música que se celebra en Carballo?",
    answers: ["Festival de Carballo", "Son Bergantiños", "Carballo Folk", "Non hai festival específico"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 428,
    question: "Quen foi Dorothée Dandrieux?",
    answers: ["Gaiteira francesa", "Investigadora", "Promotora cultural", "Todas as anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 429,
    question: "Que canción galega se considera o himno non oficial de Santiago?",
    answers: ["Himno do Apóstolo", "A Rianxeira", "Os Pinos", "Non ten himno específico"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },  {
    id: 430,
    question: "Como se chama a festa da música tradicional que se celebra en toda Galicia o Día das Letras Galegas?",
    answers: ["Festa da Música", "Día das Letras", "Festa da Galeguidade", "Todas as anteriores"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },

  // === PREGUNTAS DE XEOGRAFÍA GALEGA (IDs 431-440) ===
  {
    id: 431,
    question: "Cal é a capital de Galicia?",
    answers: ["A Coruña", "Lugo", "Ourense", "Santiago de Compostela"],
    correct: 3,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 432,
    question: "Cal é o río máis longo que pasa por Galicia?",
    answers: ["Miño", "Sil", "Tambre", "Ulla"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 433,
    question: "Que provincia galega non ten costa?",
    answers: ["Ourense", "Lugo", "Pontevedra", "A Coruña"],
    correct: 0,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 434,
    question: "En que provincia está a Serra do Courel?",
    answers: ["Lugo", "Ourense", "A Coruña", "Pontevedra"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 435,
    question: "Cal destas rías pertence ás Rías Baixas?",
    answers: ["Ría de Vigo", "Ría do Ferrol", "Ría de Ortigueira", "Ría de Ribadeo"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 436,
    question: "Por cal destas cidades pasa o río Miño?",
    answers: ["Lugo", "Vigo", "A Coruña", "Pontevedra"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 437,
    question: "Cal é a capital da provincia de Lugo?",
    answers: ["Lugo", "Monforte de Lemos", "Vilalba", "Sarria"],
    correct: 0,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 438,
    question: "Cal é o monte máis alto de Galicia?",
    answers: ["Pena Trevinca", "Monte Pindo", "O Xistral", "A Capelada"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 439,
    question: "Cal destas illas pertence ao Parque Nacional das Illas Atlánticas?",
    answers: ["Illas Cíes", "Illas Medas", "Illas Columbretes", "Illas Ons"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },  {
    id: 440,
    question: "En que provincia se atopa a cidade de Verín?",
    answers: ["Ourense", "Lugo", "A Coruña", "Pontevedra"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },

  // === PREGUNTAS ADICIONAIS DE MÚSICA GALEGA (IDs 441-448) ===
  {
    id: 441,
    question: "Quen foi a coñecida cantante galega de música tradicional coñecida por 'Negra Sombra'?",
    answers: ["Mercedes Peón", "Uxía", "Luz Casal", "Rosa Cedrón"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 442,
    question: "Cal destas bandas é un referente do folk galego?",
    answers: ["Milladoiro", "Los Suaves", "Triángulo de Amor Bizarro", "Dakidarría"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 443,
    question: "En que cidade naceu Carlos Núñez, recoñecido gaiteiro galego?",
    answers: ["Vigo", "Santiago", "Ourense", "Lugo"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 444,
    question: "Cal destes instrumentos é típico da música tradicional galega?",
    answers: ["Gaita", "Sitar", "Balalaica", "Didgeridoo"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 445,
    question: "Como se chama o festival de música que se celebra na Illa de San Simón?",
    answers: ["Sinsal", "Resurrection Fest", "O Marisquiño", "Reperkusión"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 446,
    question: "Onde se celebra o Festival Internacional do Mundo Celta?",
    answers: ["Ortigueira", "Lugo", "Vigo", "Ourense"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 447,
    question: "Cal destes estilos forma parte do repertorio tradicional galego?",
    answers: ["Muiñeira", "Samba", "Jota Aragonesa", "Flamenco"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },  {
    id: 448,
    question: "Cal destas cancións está baseada nun poema de Rosalía de Castro?",
    answers: ["Negra Sombra", "A Rianxeira", "O Tren", "Fisterra Blues"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },

  // === PREGUNTAS DE TVG E CULTURA POPULAR (IDs 449-456) ===
  {
    id: 449,
    question: "Cal foi unha das series máis emblemáticas da TVG, emitida durante máis dunha década?",
    answers: ["Pratos Combinados", "Matalobos", "Serramoura", "Mareas Vivas"],
    correct: 0,
    category: "tvg",
    difficulty: "medium"
  },
  {
    id: 450,
    question: "Quen interpretaba o papel de Miro Pereira en 'Pratos Combinados'?",
    answers: ["Antonio Durán 'Morris'", "Luis Zahera", "Xosé Barato", "Carlos Blanco"],
    correct: 0,
    category: "tvg",
    difficulty: "medium"
  },
  {
    id: 451,
    question: "En que serie galega aparecía o personaxe 'O Muro'?",
    answers: ["Matalobos", "Mareas Vivas", "Serramoura", "Os Atlánticos"],
    correct: 0,
    category: "tvg",
    difficulty: "medium"
  },
  {
    id: 452,
    question: "Que actriz galega participou na serie 'Fariña' e en múltiples filmes galegos?",
    answers: ["Isabel Naveira", "Nerea Barros", "Uxía Blanco", "María Mera"],
    correct: 1,
    category: "tvg",
    difficulty: "medium"
  },
  {
    id: 453,
    question: "Como se chama o programa de entrevistas presentado por Xosé Ramón Gayoso?",
    answers: ["Luar", "A Revista", "Land Rober", "Galicia Por Diante"],
    correct: 0,
    category: "tvg",
    difficulty: "easy"
  },
  {
    id: 454,
    question: "Cal destes actores é galego e coñecido por traballar en cinema e TV?",
    answers: ["Luis Zahera", "Javier Bardem", "Eduardo Noriega", "Hugo Silva"],
    correct: 0,
    category: "tvg",
    difficulty: "medium"
  },
  {
    id: 455,
    question: "Cal destas persoas é unha personalidade actual da TVG?",
    answers: ["Roberto Vilar", "Bertín Osborne", "Ana Rosa Quintana", "Susanna Griso"],
    correct: 0,
    category: "tvg",
    difficulty: "medium"
  },
  {
    id: 456,
    question: "Quen é o presentador histórico de 'Luar' na TVG?",
    answers: ["Xosé Ramón Gayoso", "Paco Lodeiro", "Arturo Valls", "Carlos Sobera"],
    correct: 0,
    category: "tvg",
    difficulty: "easy"
  }
];

// Funcións para manexar as preguntas
class QuestionsManager {
  constructor() {
    this.questions = [...QUESTIONS_DATABASE];
    this.currentQuestions = [];
    this.currentIndex = 0;
  }

  // Obtén todas as preguntas
  getAllQuestions() {
    return [...this.questions];
  }

  // Filtra preguntas por dificultade
  getQuestionsByDifficulty(difficulty) {
    return this.questions.filter(q => q.difficulty === difficulty);
  }

  // Filtra preguntas por categoría
  getQuestionsByCategory(category) {
    return this.questions.filter(q => q.category === category);
  }

  // Baralla as preguntas
  shuffleQuestions(questions) {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Baralla as respostas dunha pregunta
  shuffleAnswers(question) {
    const shuffledQuestion = { ...question };
    const answers = [...question.answers];
    const correctAnswer = answers[question.correct];
    
    // Baralla as respostas
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    
    // Atopa o novo índice da resposta correcta
    shuffledQuestion.answers = answers;
    shuffledQuestion.correct = answers.indexOf(correctAnswer);
    
    return shuffledQuestion;
  }

  // Prepara un conxunto de preguntas para un xogo
  prepareGameQuestions(difficulty = 'medium', count = 10) {
    let questions;
    
    if (difficulty === 'mixed') {
      // Mestura de dificultades
      questions = [...this.questions];
    } else {
      questions = this.getQuestionsByDifficulty(difficulty);
    }
    
    // Se non hai suficientes preguntas da dificultade, úsanse todas
    if (questions.length < count) {
      questions = [...this.questions];
    }
    
    // Baralla as preguntas e toma só as necesarias
    const shuffledQuestions = this.shuffleQuestions(questions);
    this.currentQuestions = shuffledQuestions.slice(0, count);
    
    // Baralla as respostas de cada pregunta
    this.currentQuestions = this.currentQuestions.map(q => this.shuffleAnswers(q));
    
    this.currentIndex = 0;
    return this.currentQuestions;
  }

  // Obtén a pregunta actual
  getCurrentQuestion() {
    if (this.currentIndex < this.currentQuestions.length) {
      return this.currentQuestions[this.currentIndex];
    }
    return null;
  }
  // Pasa á seguinte pregunta
  nextQuestion() {
    this.currentIndex++;
    return this.getCurrentQuestion();
  }

  // Verifica se hai máis preguntas
  hasMoreQuestions() {
    return this.currentIndex < this.currentQuestions.length;
  }

  // Obtén o progreso actual
  getProgress() {
    return {
      current: this.currentIndex + 1,
      total: this.currentQuestions.length,
      percentage: Math.round(((this.currentIndex + 1) / this.currentQuestions.length) * 100)
    };
  }

  // Engade unha nova pregunta (para futuras funcionalidades)
  addQuestion(question) {
    const newId = Math.max(...this.questions.map(q => q.id)) + 1;
    const newQuestion = {
      id: newId,
      ...question,
      category: question.category || 'xeral',
      difficulty: question.difficulty || 'medium'
    };
    
    this.questions.push(newQuestion);
    return newQuestion;
  }

  // Obtén estatísticas das preguntas
  getStats() {
    const categories = {};
    const difficulties = {};
    
    this.questions.forEach(q => {
      categories[q.category] = (categories[q.category] || 0) + 1;
      difficulties[q.difficulty] = (difficulties[q.difficulty] || 0) + 1;
    });
    
    return {
      total: this.questions.length,
      categories,
      difficulties
    };
  }

  // Busca preguntas por texto
  searchQuestions(searchTerm) {
    const term = searchTerm.toLowerCase();
    return this.questions.filter(q => 
      q.question.toLowerCase().includes(term) ||
      q.answers.some(answer => answer.toLowerCase().includes(term))
    );
  }

  // Obtén preguntas aleatorias por categoría
  getRandomQuestionsByCategory(category, count = 5) {
    const categoryQuestions = this.getQuestionsByCategory(category);
    const shuffled = this.shuffleQuestions(categoryQuestions);
    return shuffled.slice(0, count);
  }

  // Reestablece o xestor
  reset() {
    this.currentQuestions = [];
    this.currentIndex = 0;
  }
}

// Exporta o xestor de preguntas
window.QuestionsManager = QuestionsManager;
