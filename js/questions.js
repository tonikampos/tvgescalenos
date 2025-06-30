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
  },  {
    id: 456,
    question: "Quen é o presentador histórico de 'Luar' na TVG?",
    answers: ["Xosé Ramón Gayoso", "Paco Lodeiro", "Arturo Valls", "Carlos Sobera"],
    correct: 0,
    category: "tvg",
    difficulty: "easy"
  },

  // === PREGUNTAS PARA PROGRAMA DE TELEVISIÓN (IDs 457-556) ===
  // Historia de Galicia
  {
    id: 457,
    question: "En que ano se creou a Xunta de Galicia como institución democrática?",
    answers: ["1978", "1981", "1982", "1985"],
    correct: 1,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 458,
    question: "Quen foi o primeiro presidente da Xunta de Galicia democrática?",
    answers: ["Xerardo Fernández Albor", "Manuel Fraga", "Fernando González Laxe", "Emilio Pérez Touriño"],
    correct: 0,
    category: "historia",
    difficulty: "medium"
  },
  {
    id: 459,
    question: "Onde se atopa a Torre de Hércules?",
    answers: ["Vigo", "A Coruña", "Ferrol", "Pontevedra"],
    correct: 1,
    category: "patrimonio",
    difficulty: "easy"
  },
  {
    id: 460,
    question: "Cal é o nome da antiga ruta comercial que conectaba Galicia con América?",
    answers: ["Ruta da Prata", "Ruta dos Galeóns", "Camiño Portugués", "Carreira de Indias"],
    correct: 3,
    category: "historia",
    difficulty: "hard"
  },

  // Personaxes ilustres galegos
  {
    id: 461,
    question: "Rosalía de Castro escribiu principalmente en que idioma?",
    answers: ["Só en galego", "Só en castelán", "En galego e castelán", "En portugués"],
    correct: 2,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 462,
    question: "Emilia Pardo Bazán foi pioneira en que movimento literario?",
    answers: ["Romantismo", "Naturalismo", "Modernismo", "Realismo"],
    correct: 1,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 463,
    question: "O científico Julio Rey Pastor destacou en que disciplina?",
    answers: ["Medicina", "Física", "Matemáticas", "Química"],
    correct: 2,
    category: "ciencia",
    difficulty: "medium"
  },
  {
    id: 464,
    question: "Santiago Ramón y Cajal, premio Nobel, naceu en que provincia galega?",
    answers: ["A Coruña", "Lugo", "Ourense", "Pontevedra"],
    correct: 2,
    category: "ciencia",
    difficulty: "hard"
  },

  // Cultura popular e tradicións
  {
    id: 465,
    question: "Cal é o instrumento musical típico galego máis coñecido?",
    answers: ["Acordeón", "Gaita", "Zanfona", "Tambor"],
    correct: 1,
    category: "cultura",
    difficulty: "easy"
  },
  {
    id: 466,
    question: "Como se chama a festa tradicional galega onde se queima unha figura?",
    answers: ["San Xoán", "O Entroido", "A Queimada", "San Martiño"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 467,
    question: "Que ingrediente principal leva a queimada?",
    answers: ["Viño", "Augardente", "Licor café", "Ron"],
    correct: 1,
    category: "gastronomia",
    difficulty: "easy"
  },
  {
    id: 468,
    question: "Cal é o doce típico galego máis famoso?",
    answers: ["Filloas", "Tarta de Santiago", "Roscón de reis", "Mel e noz"],
    correct: 1,
    category: "gastronomia",
    difficulty: "easy"
  },

  // Deporte galego
  {
    id: 469,
    question: "Quen foi o ciclista galego que gañou o Tour de Francia?",
    answers: ["Óscar Pereiro", "Carlos Sastre", "Ezequiel Mosquera", "David Arroyo"],
    correct: 0,
    category: "deporte",
    difficulty: "medium"
  },
  {
    id: 470,
    question: "En que cidade está o estadio de Riazor?",
    answers: ["Vigo", "Santiago", "A Coruña", "Ferrol"],
    correct: 2,
    category: "deporte",
    difficulty: "easy"
  },
  {
    id: 471,
    question: "Cal é o deporte tradicional galego máis praticado?",
    answers: ["Pelota", "Bolos", "Levantamento de pedra", "Corta de troncos"],
    correct: 0,
    category: "deporte",
    difficulty: "medium"
  },
  {
    id: 472,
    question: "Iago Aspas xoga actualmente en que equipo?",
    answers: ["Real Madrid", "FC Barcelona", "Celta de Vigo", "Deportivo"],
    correct: 2,
    category: "deporte",
    difficulty: "easy"
  },

  // Xeografía avanzada
  {
    id: 473,
    question: "Cal é o pico máis alto de Galicia?",
    answers: ["Trevinca", "Cabeza de Manzaneda", "Pena Ubiña", "O Cebreiro"],
    correct: 0,
    category: "xeografia",
    difficulty: "medium"
  },
  {
    id: 474,
    question: "Cantas provincias ten Galicia?",
    answers: ["3", "4", "5", "6"],
    correct: 1,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 475,
    question: "Cal é a praia máis longa de Galicia?",
    answers: ["Praia de Samil", "Praia da Lanzada", "Praia de Carnota", "Praia de Rodas"],
    correct: 2,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 476,
    question: "Que río pasa por Ourense?",
    answers: ["Ulla", "Miño", "Tambre", "Eo"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },

  // Arquitectura e patrimonio
  {
    id: 477,
    question: "En que século se construíu a Catedral de Santiago?",
    answers: ["X", "XI", "XII", "XIII"],
    correct: 2,
    category: "patrimonio",
    difficulty: "hard"
  },
  {
    id: 478,
    question: "Que estilo arquitectónico predomina na Catedral de Santiago?",
    answers: ["Gótico", "Románico", "Barroco", "Neoclásico"],
    correct: 1,
    category: "patrimonio",
    difficulty: "medium"
  },
  {
    id: 479,
    question: "Cal é o castelo máis visitado de Galicia?",
    answers: ["Castelo de Soutomaior", "Castelo de Monterrei", "Castelo de Moeche", "Castelo de Vimianzo"],
    correct: 0,
    category: "patrimonio",
    difficulty: "medium"
  },
  {
    id: 480,
    question: "Onde se atopa o Mosteiro de Oseira?",
    answers: ["Lugo", "Ourense", "Pontevedra", "A Coruña"],
    correct: 1,
    category: "patrimonio",
    difficulty: "hard"
  },

  // Festa e celebracións
  {
    id: 481,
    question: "Cando se celebra o Día das Letras Galegas?",
    answers: ["17 de maio", "25 de xullo", "12 de outubro", "6 de xaneiro"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 482,
    question: "Que festa se celebra en Ribadeo en setembro?",
    answers: ["Festa do Marisco", "Festa da Androlla", "Festa do Bonito", "Festa do Viño"],
    correct: 2,
    category: "cultura",
    difficulty: "hard"
  },
  {
    id: 483,
    question: "Onde se celebra a famosa Festa da Virxe da Barca?",
    answers: ["Muxía", "Fisterra", "Noia", "Muros"],
    correct: 0,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 484,
    question: "Cal é a festa máis importante de Santiago de Compostela?",
    answers: ["San Xoán", "Festas do Apóstolo", "Entroido", "San Martiño"],
    correct: 1,
    category: "cultura",
    difficulty: "easy"
  },

  // Gastronomía avanzada
  {
    id: 485,
    question: "Cal é o prato típico da comarca do Ribeiro?",
    answers: ["Cocido", "Empanada", "Lacón con grelos", "Churrasco"],
    correct: 2,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 486,
    question: "Que denominación de orixe ten o viño de Rías Baixas?",
    answers: ["Albariño", "Godello", "Mencía", "Treixadura"],
    correct: 0,
    category: "gastronomia",
    difficulty: "medium"
  },
  {
    id: 487,
    question: "Cal é o marisco máis típico das Rías Baixas?",
    answers: ["Nécora", "Centola", "Percebes", "Mexillóns"],
    correct: 3,
    category: "gastronomia",
    difficulty: "easy"
  },
  {
    id: 488,
    question: "Como se chama o pan típico galego?",
    answers: ["Pan de millo", "Bica", "Pan de centeo", "Rosca"],
    correct: 2,
    category: "gastronomia",
    difficulty: "medium"
  },

  // Cinema e TV galega
  {
    id: 489,
    question: "Cal foi a primeira película galega que obtivo recoñecemento internacional?",
    answers: ["O bosque animado", "A lingua das bolboretas", "Mar adentro", "Sempre Xonxa"],
    correct: 1,
    category: "cinema",
    difficulty: "hard"
  },
  {
    id: 490,
    question: "Quen dirixiu a película 'Mar adentro'?",
    answers: ["Alejandro Amenábar", "José Luis Cuerda", "Manuel Rivas", "Carlos Blanco"],
    correct: 0,
    category: "cinema",
    difficulty: "medium"
  },
  {
    id: 491,
    question: "Xosé Luis Cuerda dirixiu que famosa película galega?",
    answers: ["Mareas vivas", "A lingua das bolboretas", "O lápis do carpinteiro", "Airbag"],
    correct: 1,
    category: "cinema",
    difficulty: "medium"
  },
  {
    id: 492,
    question: "Cal destes actores protagonizou 'A lingua das bolboretas'?",
    answers: ["Luis Tosar", "Fernando Fernán Gómez", "Karra Elejalde", "Carlos Blanco"],
    correct: 1,
    category: "cinema",
    difficulty: "hard"
  },

  // Lingua galega
  {
    id: 493,
    question: "O galego pertence a que familia lingüística?",
    answers: ["Latina", "Céltica", "Xermánica", "Románica"],
    correct: 3,
    category: "lingua",
    difficulty: "medium"
  },
  {
    id: 494,
    question: "Cal é a institución que regula a lingua galega?",
    answers: ["Real Academia Galega", "Instituto da Lingua Galega", "Xunta de Galicia", "Consello da Cultura Galega"],
    correct: 0,
    category: "lingua",
    difficulty: "medium"
  },
  {
    id: 495,
    question: "Os 'Miragres de Santiago' son que tipo de obra?",
    answers: ["Poesía lírica", "Teatro medieval", "Primeiro texto en galego", "Crónica histórica"],
    correct: 2,
    category: "lingua",
    difficulty: "hard"
  },
  {
    id: 496,
    question: "Cantas persoas falan galego en Galicia aproximadamente?",
    answers: ["1 millón", "1,5 millóns", "2 millóns", "2,5 millóns"],
    correct: 2,
    category: "lingua",
    difficulty: "medium"
  },

  // Economía e industria
  {
    id: 497,
    question: "Cal é o sector económico máis importante en Galicia?",
    answers: ["Turismo", "Pesca", "Industria naval", "Agricultura"],
    correct: 2,
    category: "economia",
    difficulty: "medium"
  },
  {
    id: 498,
    question: "Onde está a sede de Inditex?",
    answers: ["Vigo", "A Coruña", "Santiago", "Arteixo"],
    correct: 3,
    category: "economia",
    difficulty: "medium"
  },
  {
    id: 499,
    question: "Cal é o porto máis importante de Galicia?",
    answers: ["Porto de Vigo", "Porto da Coruña", "Porto de Ferrol", "Porto de Marín"],
    correct: 0,
    category: "economia",
    difficulty: "easy"
  },
  {
    id: 500,
    question: "Amancio Ortega é fundador de que empresa?",
    answers: ["Pescanova", "Inditex", "Banco Pastor", "Abanca"],
    correct: 1,
    category: "economia",
    difficulty: "easy"
  },

  // Natureza e medio ambiente
  {
    id: 501,
    question: "Cal é o Parque Nacional de Galicia?",
    answers: ["Parque da Peneda-Gerês", "Parque das Illas Atlánticas", "Parque da Fragas do Eume", "Parque do Invernadeiro"],
    correct: 1,
    category: "natureza",
    difficulty: "medium"
  },
  {
    id: 502,
    question: "Que árbore é símbolo de Galicia?",
    answers: ["Castiñeiro", "Carballo", "Eucalipto", "Piñeiro"],
    correct: 1,
    category: "natureza",
    difficulty: "medium"
  },
  {
    id: 503,
    question: "Cal é a ave emblemática de Galicia?",
    answers: ["Gaivota", "Corvo mariño", "Frailecillo", "Aguia real"],
    correct: 1,
    category: "natureza",
    difficulty: "hard"
  },
  {
    id: 504,
    question: "Cantos quilómetros de costa ten Galicia aproximadamente?",
    answers: ["800 km", "1.200 km", "1.500 km", "2.000 km"],
    correct: 1,
    category: "xeografia",
    difficulty: "medium"
  },

  // Mitoloxía e lendas
  {
    id: 505,
    question: "Como se chaman as figuras femininas da mitoloxía galega que viven nas fontes?",
    answers: ["Meigas", "Mouras", "Lavandeiras", "Ninfas"],
    correct: 1,
    category: "mitoloxia",
    difficulty: "medium"
  },
  {
    id: 506,
    question: "Segundo a lenda, que animal acompaña á Santa Compaña?",
    answers: ["Lobo", "Can", "Gato", "Corvo"],
    correct: 1,
    category: "mitoloxia",
    difficulty: "medium"
  },
  {
    id: 507,
    question: "Cal é o nome do home-lobo na mitoloxía galega?",
    answers: ["Trasgo", "Lobisón", "Urco", "Diaño"],
    correct: 1,
    category: "mitoloxia",
    difficulty: "hard"
  },
  {
    id: 508,
    question: "Que criatura mitolóxica galega se caracteriza por facer travesuras domésticas?",
    answers: ["Trasgo", "Diaño", "Urco", "Mouros"],
    correct: 0,
    category: "mitoloxia",
    difficulty: "medium"
  },

  // Preguntas de cultura xeral con toque galego
  {
    id: 509,
    question: "Que océano baña as costas galegas?",
    answers: ["Atlántico", "Mediterráneo", "Cantábrico", "Índico"],
    correct: 0,
    category: "xeografia",
    difficulty: "easy"
  },
  {
    id: 510,
    question: "Cal é a universidade máis antiga de Galicia?",
    answers: ["Universidade da Coruña", "Universidade de Santiago", "Universidade de Vigo", "Universidade de Lugo"],
    correct: 1,
    category: "educacion",
    difficulty: "medium"
  },
  {
    id: 511,
    question: "En que ano se fundou a Universidade de Santiago?",
    answers: ["1495", "1504", "1532", "1558"],
    correct: 2,
    category: "educacion",
    difficulty: "hard"
  },
  {
    id: 512,
    question: "Cal é o himno oficial de Galicia?",
    answers: ["Os Pinos", "Alborada", "Negra Sombra", "A Rianxeira"],
    correct: 0,
    category: "cultura",
    difficulty: "easy"
  },

  // Actualidade e modernidade
  {
    id: 513,
    question: "Cal é o actual presidente da Xunta de Galicia?",
    answers: ["Alberto Núñez Feijóo", "Alfonso Rueda", "Emilio Pérez Touriño", "Manuel Fraga"],
    correct: 1,
    category: "politica",
    difficulty: "easy"
  },
  {
    id: 514,
    question: "Cantos concellos ten Galicia?",
    answers: ["313", "314", "315", "316"],
    correct: 0,
    category: "politica",
    difficulty: "hard"
  },
  {
    id: 515,
    question: "Cal é a empresa galega máis internacional?",
    answers: ["Pescanova", "Inditex", "Estrella Galicia", "Abanca"],
    correct: 1,
    category: "economia",
    difficulty: "easy"
  },
  {
    id: 516,
    question: "Onde se celebra o Festival Internacional de Cine de Galicia?",
    answers: ["Santiago", "Vigo", "A Coruña", "Ourense"],
    correct: 2,
    category: "cinema",
    difficulty: "medium"
  },

  // Preguntas de curiosidades
  {
    id: 517,
    question: "Cal é o apelido máis común en Galicia?",
    answers: ["López", "García", "González", "Fernández"],
    correct: 3,
    category: "curiosidades",
    difficulty: "medium"
  },
  {
    id: 518,
    question: "Cantas illas ten Galicia aproximadamente?",
    answers: ["Máis de 300", "Máis de 600", "Máis de 900", "Máis de 1200"],
    correct: 2,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 519,
    question: "Cal é a temperatura máxima rexistrada en Galicia?",
    answers: ["42°C", "45°C", "47°C", "49°C"],
    correct: 0,
    category: "clima",
    difficulty: "hard"
  },
  {
    id: 520,
    question: "Que porcentaxe da superficie galega é forestal?",
    answers: ["45%", "55%", "65%", "75%"],
    correct: 2,
    category: "natureza",
    difficulty: "hard"
  },

  // Ciencia e tecnoloxía
  {
    id: 521,
    question: "Onde está o Centro Tecnológico do Mar de Galicia?",
    answers: ["Vigo", "A Coruña", "Ferrol", "Villagarcía"],
    correct: 0,
    category: "ciencia",
    difficulty: "medium"
  },
  {
    id: 522,
    question: "Cal é o centro de investigación mariña máis importante de Galicia?",
    answers: ["CETMAR", "IIM-CSIC", "ANFACO", "INTECMAR"],
    correct: 1,
    category: "ciencia",
    difficulty: "hard"
  },
  {
    id: 523,
    question: "Que telescopio famoso se atopa cerca de Santiago?",
    answers: ["Observatorio de Calar Alto", "Observatorio de Cotobade", "Observatorio do Roque", "Observatorio de Yebes"],
    correct: 1,
    category: "ciencia",
    difficulty: "hard"
  },
  {
    id: 524,
    question: "Cal é a primeira central eólica marina de España?",
    answers: ["WindFloat Atlantic", "Cabo de Trafalgar", "Delta del Ebro", "Windfarm Catalunya"],
    correct: 0,
    category: "tecnoloxia",
    difficulty: "hard"
  },

  // Arte e museos
  {
    id: 525,
    question: "Onde está o Museo de Belas Artes máis importante de Galicia?",
    answers: ["Santiago", "Vigo", "A Coruña", "Ourense"],
    correct: 2,
    category: "arte",
    difficulty: "medium"
  },
  {
    id: 526,
    question: "Quen deseñou o Museo Gaiás de Santiago?",
    answers: ["Peter Eisenman", "Norman Foster", "Frank Gehry", "Zaha Hadid"],
    correct: 0,
    category: "arte",
    difficulty: "hard"
  },
  {
    id: 527,
    question: "Cal é o museo dedicado ao mar máis visitado de Galicia?",
    answers: ["Aquarium Finisterrae", "Museo do Mar de Vigo", "Casa dos Peixes", "MEGA Mundo Estrella Galicia"],
    correct: 0,
    category: "museos",
    difficulty: "medium"
  },
  {
    id: 528,
    question: "Onde se atopa o Museo das Peregrinacións?",
    answers: ["Santiago", "Astorga", "O Cebreiro", "Sarria"],
    correct: 0,
    category: "museos",
    difficulty: "easy"
  },

  // Camiño de Santiago
  {
    id: 529,
    question: "Cantos quilómetros ten o Camiño Francés dende os Pireneos?",
    answers: ["780 km", "800 km", "820 km", "850 km"],
    correct: 1,
    category: "camiño",
    difficulty: "medium"
  },
  {
    id: 530,
    question: "Cal é o símbolo do Camiño de Santiago?",
    answers: ["Cruz", "Vieira", "Bordón", "Cabaza"],
    correct: 1,
    category: "camiño",
    difficulty: "easy"
  },
  {
    id: 531,
    question: "Onde comeza oficialmente o Camiño Francés?",
    answers: ["Le Puy", "Saint-Jean-Pied-de-Port", "Roncesvalles", "Pamplona"],
    correct: 1,
    category: "camiño",
    difficulty: "medium"
  },
  {
    id: 532,
    question: "Cal é o albergue de peregrinos máis antigo que se conserva?",
    answers: ["Albergue de Roncesvalles", "Hospital de San Marcos", "Albergue de O Cebreiro", "Hospital dos Reis Católicos"],
    correct: 3,
    category: "camiño",
    difficulty: "hard"
  },

  // Deportes tradicionais
  {
    id: 533,
    question: "Cal é o peso estándar dunha pedra no levantamento tradicional galego?",
    answers: ["50 kg", "75 kg", "100 kg", "125 kg"],
    correct: 2,
    category: "deporte",
    difficulty: "hard"
  },
  {
    id: 534,
    question: "Como se chama o xogo tradicional galego similar ao bowling?",
    answers: ["Birlos", "Bolos", "Chave", "Rana"],
    correct: 1,
    category: "deporte",
    difficulty: "medium"
  },
  {
    id: 535,
    question: "Cal é a modalidade de remo tradicional galega?",
    answers: ["Trainera", "Gamela", "Dorna", "Batelo"],
    correct: 2,
    category: "deporte",
    difficulty: "medium"
  },
  {
    id: 536,
    question: "Onde se celebra o campeonato mundial de corta de troncos?",
    answers: ["Taramundi", "Mondoñedo", "Tui", "Ribadeo"],
    correct: 0,
    category: "deporte",
    difficulty: "hard"
  },

  // Literatura contemporánea
  {
    id: 537,
    question: "Manuel Rivas escribiu que novela famosa levada ao cinema?",
    answers: ["O lápis do carpinteiro", "A lingua das bolboretas", "Todo é silencio", "A man dos paíños"],
    correct: 1,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 538,
    question: "Suso de Toro é autor de que novela galega famosa?",
    answers: ["Land Rover", "Tic Tac", "Polaroid", "Ambulancia"],
    correct: 0,
    category: "literatura",
    difficulty: "hard"
  },
  {
    id: 539,
    question: "Fina Casalderrey destaca como escritora de que xénero?",
    answers: ["Poesía", "Novela histórica", "Literatura infantil", "Teatro"],
    correct: 2,
    category: "literatura",
    difficulty: "medium"
  },
  {
    id: 540,
    question: "Cal destes autores gañou o Premio Nacional de Literatura en galego?",
    answers: ["Xosé Luís Méndez Ferrín", "Alfredo Conde", "Marilar Aleixandre", "Todos os anteriores"],
    correct: 3,
    category: "literatura",
    difficulty: "hard"
  },

  // Música contemporánea
  {
    id: 541,
    question: "Cal destes grupos galegos tivo máis éxito internacional?",
    answers: ["Siniestro Total", "Heredeiros da Crus", "Mago de Oz", "Los Suaves"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 542,
    question: "Carlos Núñez é famoso por tocar que instrumento?",
    answers: ["Gaita", "Violín", "Guitarra", "Acordeón"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 543,
    question: "Que cantante galega representou a España en Eurovisión?",
    answers: ["Luz Casal", "Christina Rosenvinge", "Marta Sánchez", "Ninguna das anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 544,
    question: "O grupo Luar na Lubre fusiona música tradicional con que estilo?",
    answers: ["Rock", "Pop", "Música celta", "Jazz"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },

  // Preguntas finais variadas
  {
    id: 545,
    question: "Cal é o lema oficial de Galicia?",
    answers: ["Galicia, Calidade", "Galicia, Terra Única", "Galicia, No teu corazón", "Non ten lema oficial"],
    correct: 3,
    category: "cultura",
    difficulty: "hard"
  },
  {
    id: 546,
    question: "Cantos faros ten a costa galega aproximadamente?",
    answers: ["25", "35", "45", "55"],
    correct: 2,
    category: "xeografia",
    difficulty: "hard"
  },
  {
    id: 547,
    question: "Cal é a raza de cabalo autóctona de Galicia?",
    answers: ["Garrano", "Losino", "Pura Raza Gallega", "Non existe"],
    correct: 0,
    category: "natureza",
    difficulty: "hard"
  },
  {
    id: 548,
    question: "Onde se atopa a reserva da biosfera máis extensa de Galicia?",
    answers: ["Ancares", "Terras do Miño", "Mariñas Coruñesas", "Área de Allariz"],
    correct: 0,
    category: "natureza",
    difficulty: "hard"
  },
  {
    id: 549,
    question: "Cal é o produto do mar máis exportado dende Galicia?",
    answers: ["Mexillóns", "Berberechos", "Conservas", "Polbo"],
    correct: 2,
    category: "economia",
    difficulty: "medium"
  },
  {
    id: 550,
    question: "Que porcentaxe da produción pesqueira española procede de Galicia?",
    answers: ["40%", "50%", "60%", "70%"],
    correct: 2,
    category: "economia",
    difficulty: "medium"
  },
  {
    id: 551,
    question: "Cal é a denominación de orixe máis nova dos viños galegos?",
    answers: ["Monterrei", "Rías Baixas", "Ribeira Sacra", "Valdeorras"],
    correct: 0,
    category: "gastronomia",
    difficulty: "hard"
  },
  {
    id: 552,
    question: "Cantos quilómetros de sendeiros ten o Camiño de Santiago en Galicia?",
    answers: ["100 km", "150 km", "200 km", "250 km"],
    correct: 2,
    category: "camiño",
    difficulty: "medium"
  },
  {
    id: 553,
    question: "Cal é a temperatura media anual en Galicia?",
    answers: ["12°C", "14°C", "16°C", "18°C"],
    correct: 1,
    category: "clima",
    difficulty: "medium"
  },
  {
    id: 554,
    question: "Que cantidade de choiva media anual recibe Galicia?",
    answers: ["800 mm", "1.200 mm", "1.600 mm", "2.000 mm"],
    correct: 1,
    category: "clima",
    difficulty: "hard"
  },
  {
    id: 555,
    question: "Cal é a maior feria medieval de Galicia?",
    answers: ["Feira Franca de Pontevedra", "Festa da Istoria de Ribadavia", "Mercado Medieval de Mondoñedo", "Feira Medieval de Betanzos"],
    correct: 1,
    category: "cultura",
    difficulty: "medium"
  },
  {
    id: 556,
    question: "Cantos Patrimonio da Humanidade da UNESCO ten Galicia?",
    answers: ["2", "3", "4", "5"],
    correct: 1,
    category: "patrimonio",
    difficulty: "medium"
  },

  // === PREGUNTAS DE MÚSICA E CANTANTES (IDs 557-656) ===
  // Música clásica e histórica
  {
    id: 557,
    question: "Quen compuxo 'La Novena Sinfonía' con o 'Himno da Alegría'?",
    answers: ["Mozart", "Beethoven", "Bach", "Schubert"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 558,
    question: "Que instrumento tocaba principalmente Mozart?",
    answers: ["Violín", "Piano", "Flauta", "Cello"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 559,
    question: "Cal é o nome real de Johann Sebastian Bach?",
    answers: ["Johann Sebastian Bach", "Johann Christian Bach", "Johann Baptist Bach", "Johann Michael Bach"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 560,
    question: "En que país naceu Frédéric Chopin?",
    answers: ["Francia", "Polonia", "Austria", "Alemaña"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 561,
    question: "Quen é coñecido como 'O Rei do Vals'?",
    answers: ["Johann Strauss II", "Franz Schubert", "Johannes Brahms", "Robert Schumann"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },

  // Rock e Pop internacional
  {
    id: 562,
    question: "Que banda británica cantou 'Bohemian Rhapsody'?",
    answers: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 563,
    question: "Cal é o nome real de Freddie Mercury?",
    answers: ["Frederick Mercury", "Farrokh Bulsara", "Freddie Bulsara", "Frederick Bulsara"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 564,
    question: "Que cantante é coñecido como 'O Rei do Rock and Roll'?",
    answers: ["Chuck Berry", "Elvis Presley", "Little Richard", "Jerry Lee Lewis"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 565,
    question: "En que ano se separaron The Beatles?",
    answers: ["1969", "1970", "1971", "1972"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 566,
    question: "Quen foi o vocalista principal de Led Zeppelin?",
    answers: ["Jimmy Page", "John Paul Jones", "Robert Plant", "John Bonham"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 567,
    question: "Que álbum de Pink Floyd contén a canción 'Money'?",
    answers: ["The Wall", "Wish You Were Here", "The Dark Side of the Moon", "Animals"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 568,
    question: "Cal é o nome real de David Bowie?",
    answers: ["David Jones", "David Bowie", "David Robert Jones", "David Michael Jones"],
    correct: 2,
    category: "musica",
    difficulty: "hard"
  },

  // Música española histórica
  {
    id: 569,
    question: "Quen compuxo a zarzuela 'La Verbena de la Paloma'?",
    answers: ["Federico Chueca", "Ruperto Chapí", "Francisco Asenjo Barbieri", "Tomás Bretón"],
    correct: 0,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 570,
    question: "Cal foi o cantante principal do grupo Dúo Dinámico?",
    answers: ["Manolo de la Calva", "Ramón Arcusa", "Ambos cantaban", "Só Manolo"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 571,
    question: "Quen cantou '¡Que Viva España!' nos anos 70?",
    answers: ["Manolo Escobar", "Peret", "Los del Río", "Georgie Dann"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 572,
    question: "Raphael é orixinario de que cidade española?",
    answers: ["Madrid", "Sevilla", "Linares", "Córdoba"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },

  // Música actual internacional
  {
    id: 573,
    question: "Quen cantou 'Rolling in the Deep'?",
    answers: ["Adele", "Amy Winehouse", "Alicia Keys", "Beyoncé"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 574,
    question: "Cal é o nome real de Lady Gaga?",
    answers: ["Stefani Germanotta", "Stefani Joanne Angelina Germanotta", "Stephanie Gaga", "Lady Stefani"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 575,
    question: "Que cantante popularizou a canción 'Shape of You'?",
    answers: ["Sam Smith", "Ed Sheeran", "John Mayer", "Bruno Mars"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 576,
    question: "En que ano morreu Michael Jackson?",
    answers: ["2008", "2009", "2010", "2011"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 577,
    question: "Quen é coñecida como 'A Raíña do Pop'?",
    answers: ["Madonna", "Whitney Houston", "Mariah Carey", "Celine Dion"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 578,
    question: "Que banda británica cantou 'Wonderwall'?",
    answers: ["Blur", "Oasis", "Radiohead", "Coldplay"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },

  // Música española actual
  {
    id: 579,
    question: "Cal é o nome real de Rosalía?",
    answers: ["Rosa Vila", "Rosalía Vila Tobella", "Rosa Tobella", "Rosalía Vila"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 580,
    question: "Quen cantou 'Corazón Partío'?",
    answers: ["Alejandro Sanz", "Jesse & Joy", "David Bisbal", "Pablo Alborán"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 581,
    question: "De que cidade é orixinario Pablo Alborán?",
    answers: ["Sevilla", "Madrid", "Málaga", "Granada"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 582,
    question: "Quen foi o vocalista do grupo Héroes del Silencio?",
    answers: ["Enrique Bunbury", "Fito Cabrales", "Andrés Calamaro", "Joaquín Sabina"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 583,
    question: "Que grupo español cantou 'Devuélveme a mi chica'?",
    answers: ["Radio Futura", "Nacha Pop", "Hombres G", "Mecano"],
    correct: 2,
    category: "musica",
    difficulty: "easy"
  },

  // Jazz e Blues
  {
    id: 584,
    question: "Quen é coñecido como 'O Rei do Jazz'?",
    answers: ["Miles Davis", "Louis Armstrong", "Duke Ellington", "Charlie Parker"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 585,
    question: "Que instrumento tocaba principalmente Miles Davis?",
    answers: ["Saxofón", "Trompeta", "Trombone", "Clarinete"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 586,
    question: "Cal é considerada a 'Raíña do Blues'?",
    answers: ["Billie Holiday", "Ella Fitzgerald", "Aretha Franklin", "B.B. King"],
    correct: 0,
    category: "musica",
    difficulty: "hard"
  },

  // Música latina
  {
    id: 587,
    question: "Quen cantou 'La Vida es una Fiesta'?",
    answers: ["Manu Chao", "Jesse & Joy", "Manu Tenorio", "Non existe esa canción"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 588,
    question: "Shakira é orixinaria de que país?",
    answers: ["España", "México", "Colombia", "Venezuela"],
    correct: 2,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 589,
    question: "Quen cantou 'Livin' la Vida Loca'?",
    answers: ["Enrique Iglesias", "Ricky Martin", "Luis Miguel", "Marc Anthony"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 590,
    question: "Que cantante mexicana foi coñecida como 'La Reina de la Música Ranchera'?",
    answers: ["Lola Beltrán", "Chavela Vargas", "Rocío Dúrcal", "Lucha Villa"],
    correct: 0,
    category: "musica",
    difficulty: "hard"
  },

  // Música galega específica
  {
    id: 591,
    question: "Quen foi o fundador do grupo Os Resentidos?",
    answers: ["Antón Reixa", "Alberto Torrado", "Javier Soto", "Todos xuntos"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 592,
    question: "Cal é o nome completo do gaiteiro Carlos Núñez?",
    answers: ["Carlos Núñez Muñoz", "Carlos Núñez Fernández", "Carlos Núñez González", "Carlos Núñez"],
    correct: 0,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 593,
    question: "Que grupo galego fusiona música tradicional con electrónica?",
    answers: ["Luar na Lubre", "Mercedes Peón", "Berrogüetto", "Milladoiro"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 594,
    question: "En que ano se fundou o grupo Siniestro Total?",
    answers: ["1980", "1981", "1982", "1983"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },

  // Instrumentos musicais
  {
    id: 595,
    question: "Cantas cordas ten unha guitarra española estándar?",
    answers: ["4", "5", "6", "7"],
    correct: 2,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 596,
    question: "Que instrumento ten 88 teclas?",
    answers: ["Órgano", "Piano", "Acordeón", "Sintetizador"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 597,
    question: "Cal é o instrumento de corda máis grave nunha orquestra?",
    answers: ["Cello", "Viola", "Contrabaixo", "Violín"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },

  // Festivais de música
  {
    id: 598,
    question: "En que cidade se celebra o festival Coachella?",
    answers: ["Los Angeles", "San Francisco", "Indio", "Las Vegas"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 599,
    question: "Onde se celebra o Festival Internacional de Benicàssim?",
    answers: ["Valencia", "Alicante", "Castellón", "Murcia"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 600,
    question: "Cal é o festival de música máis famoso do Reino Unido?",
    answers: ["Glastonbury", "Reading", "Download", "Isle of Wight"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },

  // Curiosidades musicais
  {
    id: 601,
    question: "Cantas notas musicais hai no sistema occidental?",
    answers: ["5", "7", "8", "12"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 602,
    question: "Que significa 'forte' en música?",
    answers: ["Forte", "Suave", "Rápido", "Lento"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 603,
    question: "Cal é a nota máis grave nun piano estándar?",
    answers: ["Do", "La", "Sol", "Mi"],
    correct: 0,
    category: "musica",
    difficulty: "hard"
  },

  // Música de cine
  {
    id: 604,
    question: "Quen compuxo a banda sonora de 'Star Wars'?",
    answers: ["Hans Zimmer", "John Williams", "Danny Elfman", "James Horner"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 605,
    question: "Que compositor creou a música de 'El Padrino'?",
    answers: ["Ennio Morricone", "Nino Rota", "Bernard Herrmann", "Jerry Goldsmith"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },

  // Música dos anos 80-90
  {
    id: 606,
    question: "Quen cantou 'Sweet Child O' Mine'?",
    answers: ["Bon Jovi", "Guns N' Roses", "Aerosmith", "Def Leppard"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 607,
    question: "Que grupo británico cantou 'Don't Stop Me Now'?",
    answers: ["The Rolling Stones", "Queen", "The Who", "Depeche Mode"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 608,
    question: "Cal foi o primeiro vídeo musical emitido en MTV?",
    answers: ["Video Killed the Radio Star", "Money for Nothing", "Thriller", "Like a Virgin"],
    correct: 0,
    category: "musica",
    difficulty: "hard"
  },

  // Música country e folk
  {
    id: 609,
    question: "Quen é coñecida como 'A Raíña do Country'?",
    answers: ["Dolly Parton", "Shania Twain", "Faith Hill", "Carrie Underwood"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 610,
    question: "Bob Dylan gañou o Premio Nobel de que disciplina?",
    answers: ["Música", "Literatura", "Paz", "Non gañou ningún Nobel"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },

  // Música electrónica
  {
    id: 611,
    question: "Quen é considerado un pioneiro da música electrónica?",
    answers: ["Jean-Michel Jarre", "Kraftwerk", "Giorgio Moroder", "Todos os anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 612,
    question: "Que xénero musical popularizou David Guetta?",
    answers: ["Techno", "House", "EDM", "Trance"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },

  // Ópera
  {
    id: 613,
    question: "Quen compuxo 'La Traviata'?",
    answers: ["Puccini", "Verdi", "Wagner", "Rossini"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 614,
    question: "Cal é a ópera máis famosa de Bizet?",
    answers: ["Carmen", "La Bohème", "Tosca", "Aida"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },

  // Reggae e música jamaicana
  {
    id: 615,
    question: "Quen é considerado o 'Rei do Reggae'?",
    answers: ["Jimmy Cliff", "Bob Marley", "Peter Tosh", "Burning Spear"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 616,
    question: "En que ano morreu Bob Marley?",
    answers: ["1980", "1981", "1982", "1983"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },

  // Hip Hop e Rap
  {
    id: 617,
    question: "Quen é considerado un dos pioneiros do hip hop?",
    answers: ["Grandmaster Flash", "Run-DMC", "LL Cool J", "Todos os anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 618,
    question: "Cal é o nome real de Eminem?",
    answers: ["Marshall Mathers", "Marshall Bruce Mathers III", "Eminem Mathers", "Bruce Marshall"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },

  // Música brasileira
  {
    id: 619,
    question: "Quen popularizou a Bossa Nova?",
    answers: ["Caetano Veloso", "Gilberto Gil", "Antonio Carlos Jobim", "Jorge Ben Jor"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 620,
    question: "Cal é a canción brasileira máis coñecida internacionalmente?",
    answers: ["Mas que Nada", "The Girl from Ipanema", "Aquarela do Brasil", "Samba de Uma Nota Só"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },

  // Música de videoxogos
  {
    id: 621,
    question: "Quen compuxo a música do videoxogo 'Super Mario Bros'?",
    answers: ["Shigeru Miyamoto", "Koji Kondo", "Nobuo Uematsu", "Yuzo Koshiro"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },

  // Bandas sonoras famosas
  {
    id: 622,
    question: "Quen cantou 'My Heart Will Go On' de Titanic?",
    answers: ["Whitney Houston", "Mariah Carey", "Celine Dion", "Barbra Streisand"],
    correct: 2,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 623,
    question: "Que película ten a canción 'Eye of the Tiger'?",
    answers: ["Rocky III", "Rocky IV", "Karate Kid", "Top Gun"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },

  // Música clásica española
  {
    id: 624,
    question: "Quen compuxo 'Concierto de Aranjuez'?",
    answers: ["Manuel de Falla", "Joaquín Rodrigo", "Isaac Albéniz", "Enrique Granados"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 625,
    question: "Cal é a obra máis famosa de Manuel de Falla?",
    answers: ["El Amor Brujo", "Noches en los Jardines de España", "El Sombrero de Tres Picos", "Todas son famosas"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },

  // Música soul e R&B
  {
    id: 626,
    question: "Quen é coñecida como 'A Raíña do Soul'?",
    answers: ["Diana Ross", "Aretha Franklin", "Tina Turner", "Gladys Knight"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 627,
    question: "Que cantante popularizou 'What's Going On'?",
    answers: ["Stevie Wonder", "Marvin Gaye", "Al Green", "Sam Cooke"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },

  // Música disco
  {
    id: 628,
    question: "Quen cantou 'I Will Survive'?",
    answers: ["Diana Ross", "Gloria Gaynor", "Donna Summer", "Chic"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 629,
    question: "Que grupo creou 'Stayin' Alive'?",
    answers: ["ABBA", "Bee Gees", "Earth Wind & Fire", "KC and the Sunshine Band"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },

  // Música punk
  {
    id: 630,
    question: "Quen foi o vocalista dos Sex Pistols?",
    answers: ["Johnny Rotten", "Sid Vicious", "Steve Jones", "Paul Cook"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 631,
    question: "Que banda estadounidense é considerada pioneira do punk?",
    answers: ["The Ramones", "The Dead Kennedys", "Black Flag", "Bad Religion"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },

  // Música grunge
  {
    id: 632,
    question: "Quen foi o vocalista de Nirvana?",
    answers: ["Eddie Vedder", "Kurt Cobain", "Chris Cornell", "Layne Staley"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 633,
    question: "De que cidade xurdiu o movemento grunge?",
    answers: ["Los Angeles", "Nova York", "Seattle", "San Francisco"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },

  // Música indie e alternativa
  {
    id: 634,
    question: "Quen é o vocalista de Radiohead?",
    answers: ["Thom Yorke", "Jonny Greenwood", "Ed O'Brien", "Colin Greenwood"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 635,
    question: "Que banda británica cantou 'Mr. Brightside'?",
    answers: ["Arctic Monkeys", "The Killers", "Franz Ferdinand", "Kaiser Chiefs"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },

  // Música de piano
  {
    id: 636,
    question: "Quen compuxo 'Für Elise'?",
    answers: ["Mozart", "Beethoven", "Chopin", "Liszt"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 637,
    question: "Cal é considerado o pianista máis virtuoso da historia?",
    answers: ["Franz Liszt", "Frédéric Chopin", "Sergei Rachmaninoff", "Todos son considerados virtuosos"],
    correct: 3,
    category: "musica",
    difficulty: "hard"
  },

  // Música moderna española
  {
    id: 638,
    question: "Quen cantou 'Con Altura' xunto con Rosalía?",
    answers: ["C. Tangana", "J Balvin", "Bad Bunny", "Ozuna"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 639,
    question: "Cal é o nome real de C. Tangana?",
    answers: ["Carlos Tangana", "Antón Álvarez", "Carlos Álvarez", "Antonio Tangana"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },

  // Música francesa
  {
    id: 640,
    question: "Quen cantou 'La Vie en Rose'?",
    answers: ["Brigitte Bardot", "Édith Piaf", "Françoise Hardy", "Sylvie Vartan"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 641,
    question: "Quen é coñecido como 'O último dos trobadores franceses'?",
    answers: ["Jacques Brel", "Charles Aznavour", "Georges Brassens", "Léo Ferré"],
    correct: 2,
    category: "musica",
    difficulty: "hard"
  },

  // Música de baile
  {
    id: 642,
    question: "Quen popularizou a 'Macarena'?",
    answers: ["Los del Río", "Georgie Dann", "Peret", "King Africa"],
    correct: 0,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 643,
    question: "En que país se orixinou a salsa?",
    answers: ["Cuba", "Puerto Rico", "Estados Unidos", "Colombia"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },

  // Premios musicais
  {
    id: 644,
    question: "Cal é o premio musical máis prestixioso nos Estados Unidos?",
    answers: ["American Music Awards", "Grammy Awards", "Billboard Music Awards", "MTV Awards"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 645,
    question: "Quen ten máis premios Grammy na historia?",
    answers: ["Michael Jackson", "Madonna", "Beyoncé", "Paul McCartney"],
    correct: 2,
    category: "musica",
    difficulty: "medium"
  },

  // Música regional española
  {
    id: 646,
    question: "Cal é o baile tradicional andaluz máis coñecido?",
    answers: ["Sevillanas", "Flamenco", "Fandango", "Todos os anteriores"],
    correct: 3,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 647,
    question: "Quen é considerado o 'Camarón de la Isla' do flamenco?",
    answers: ["José Monje Cruz", "Antonio Cruz García", "José Mercé", "Enrique Morente"],
    correct: 0,
    category: "musica",
    difficulty: "hard"
  },

  // Últimas preguntas variadas
  {
    id: 648,
    question: "Que instrumento tocaba Jimi Hendrix principalmente?",
    answers: ["Baixo", "Batería", "Guitarra eléctrica", "Teclado"],
    correct: 2,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 649,
    question: "Cal foi o primeiro álbum dos Rolling Stones?",
    answers: ["Aftermath", "The Rolling Stones", "Out of Our Heads", "Beggars Banquet"],
    correct: 1,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 650,
    question: "Quen escribiu a letra de 'Imagine'?",
    answers: ["Paul McCartney", "John Lennon", "George Harrison", "Ringo Starr"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 651,
    question: "Que banda tocou no primeiro concierto de Woodstock?",
    answers: ["The Who", "Jimi Hendrix", "Richie Havens", "Country Joe McDonald"],
    correct: 2,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 652,
    question: "Cal é o álbum máis vendido de todos os tempos?",
    answers: ["Thriller", "Back in Black", "The Dark Side of the Moon", "Abbey Road"],
    correct: 0,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 653,
    question: "Quen foi a primeira muller en ganar un Grammy ao Álbum do Ano?",
    answers: ["Carole King", "Stevie Nicks", "Judy Garland", "Barbra Streisand"],
    correct: 0,
    category: "musica",
    difficulty: "hard"
  },
  {
    id: 654,
    question: "Cantos membros tiña o grupo ABBA?",
    answers: ["3", "4", "5", "6"],
    correct: 1,
    category: "musica",
    difficulty: "easy"
  },
  {
    id: 655,
    question: "En que década emerxeu o rock and roll?",
    answers: ["1940s", "1950s", "1960s", "1970s"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },
  {
    id: 656,
    question: "Quen é coñecido como 'O Boss' na música?",
    answers: ["Bob Dylan", "Bruce Springsteen", "Neil Young", "Tom Petty"],
    correct: 1,
    category: "musica",
    difficulty: "medium"
  },

  // === PREGUNTAS DE MATEMÁTICAS E FÍSICA (IDs 657-756) ===
  // Matemáticas básicas
  {
    id: 657,
    question: "Canto é 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correct: 1,
    category: "matematicas",
    difficulty: "easy"
  },
  {
    id: 658,
    question: "Cal é o resultado de 7 × 8?",
    answers: ["54", "56", "58", "62"],
    correct: 1,
    category: "matematicas",
    difficulty: "easy"
  },
  {
    id: 659,
    question: "Canto é 100 ÷ 4?",
    answers: ["20", "25", "30", "35"],
    correct: 1,
    category: "matematicas",
    difficulty: "easy"
  },
  {
    id: 660,
    question: "Cal é o valor de π (pi) aproximadamente?",
    answers: ["3.14", "2.71", "4.16", "1.41"],
    correct: 0,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 661,
    question: "Canto é 15²?",
    answers: ["225", "215", "235", "245"],
    correct: 0,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 662,
    question: "Cal é a raíz cadrada de 64?",
    answers: ["6", "7", "8", "9"],
    correct: 2,
    category: "matematicas",
    difficulty: "easy"
  },
  {
    id: 663,
    question: "En que sistema numérico usamos 10 díxitos?",
    answers: ["Binario", "Octal", "Decimal", "Hexadecimal"],
    correct: 2,
    category: "matematicas",
    difficulty: "easy"
  },
  {
    id: 664,
    question: "Cal é o resultado de 2³?",
    answers: ["6", "8", "9", "12"],
    correct: 1,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 665,
    question: "Cantos graos ten un círculo completo?",
    answers: ["180", "270", "360", "450"],
    correct: 2,
    category: "matematicas",
    difficulty: "easy"
  },
  {
    id: 666,
    question: "Cal é o valor de 0! (factorial de 0)?",
    answers: ["0", "1", "Non está definido", "Infinito"],
    correct: 1,
    category: "matematicas",
    difficulty: "hard"
  },

  // Xeometría
  {
    id: 667,
    question: "Cantos lados ten un triángulo?",
    answers: ["2", "3", "4", "5"],
    correct: 1,
    category: "matematicas",
    difficulty: "easy"
  },
  {
    id: 668,
    question: "Cal é a área dun cadrado de lado 5?",
    answers: ["20", "25", "30", "35"],
    correct: 1,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 669,
    question: "Cantos ángulos ten un hexágono?",
    answers: ["5", "6", "7", "8"],
    correct: 1,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 670,
    question: "Cal é a fórmula da área dun círculo?",
    answers: ["πr", "πr²", "2πr", "πd"],
    correct: 1,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 671,
    question: "Que tipo de triángulo ten todos os lados iguais?",
    answers: ["Isósceles", "Escaleno", "Equilátero", "Rectángulo"],
    correct: 2,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 672,
    question: "Cal é o teorema que relaciona os lados dun triángulo rectángulo?",
    answers: ["Teorema de Tales", "Teorema de Pitágoras", "Teorema de Fermat", "Teorema de Euclides"],
    correct: 1,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 673,
    question: "Cantos graos suman os ángulos interiores dun triángulo?",
    answers: ["90", "180", "270", "360"],
    correct: 1,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 674,
    question: "Cal é o perímetro dun rectángulo de 4×6?",
    answers: ["20", "24", "28", "32"],
    correct: 0,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 675,
    question: "Que nome recibe un polígono de 8 lados?",
    answers: ["Heptágono", "Octógono", "Nonágono", "Decágono"],
    correct: 1,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 676,
    question: "Cal é o volume dun cubo de lado 3?",
    answers: ["9", "18", "27", "36"],
    correct: 2,
    category: "matematicas",
    difficulty: "medium"
  },

  // Álxebra
  {
    id: 677,
    question: "Se x + 5 = 12, cal é o valor de x?",
    answers: ["5", "6", "7", "8"],
    correct: 2,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 678,
    question: "Cal é o resultado de (a + b)²?",
    answers: ["a² + b²", "a² + 2ab + b²", "a² - b²", "2ab"],
    correct: 1,
    category: "matematicas",
    difficulty: "hard"
  },
  {
    id: 679,
    question: "Se 2x = 16, cal é o valor de x?",
    answers: ["6", "7", "8", "9"],
    correct: 2,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 680,
    question: "Cal é a pendente dunha liña horizontal?",
    answers: ["-1", "0", "1", "Infinito"],
    correct: 1,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 681,
    question: "Se y = 3x + 2, cal é y cando x = 4?",
    answers: ["12", "14", "16", "18"],
    correct: 1,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 682,
    question: "Cal é a forma xeral dunha ecuación cadrada?",
    answers: ["ax + b = 0", "ax² + bx + c = 0", "x² = a", "x + y = c"],
    correct: 1,
    category: "matematicas",
    difficulty: "hard"
  },
  {
    id: 683,
    question: "Se 3x - 7 = 14, cal é x?",
    answers: ["5", "6", "7", "8"],
    correct: 2,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 684,
    question: "Cal é o discriminante de ax² + bx + c = 0?",
    answers: ["b² - 4ac", "b² + 4ac", "4ac - b²", "b - 4ac"],
    correct: 0,
    category: "matematicas",
    difficulty: "hard"
  },
  {
    id: 685,
    question: "Se log₁₀(100) = x, cal é x?",
    answers: ["1", "2", "10", "100"],
    correct: 1,
    category: "matematicas",
    difficulty: "hard"
  },
  {
    id: 686,
    question: "Cal é o valor de e (número de Euler) aproximadamente?",
    answers: ["2.71", "3.14", "1.41", "1.61"],
    correct: 0,
    category: "matematicas",
    difficulty: "hard"
  },

  // Física básica
  {
    id: 687,
    question: "Cal é a unidade de forza no Sistema Internacional?",
    answers: ["Joule", "Newton", "Pascal", "Watt"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 688,
    question: "Cal é a velocidade da luz no baleiro?",
    answers: ["300.000 km/s", "150.000 km/s", "450.000 km/s", "600.000 km/s"],
    correct: 0,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 689,
    question: "Quen formulou as leis do movemento?",
    answers: ["Einstein", "Newton", "Galileo", "Kepler"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 690,
    question: "Cal é a aceleración debido á gravidade na Terra?",
    answers: ["8.8 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 691,
    question: "Que lei establece que 'a toda acción corresponde unha reacción igual e oposta'?",
    answers: ["Primera lei de Newton", "Segunda lei de Newton", "Terceira lei de Newton", "Lei de gravidade"],
    correct: 2,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 692,
    question: "Cal é a unidade de enerxía?",
    answers: ["Newton", "Joule", "Watt", "Pascal"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 693,
    question: "A que temperatura ferve a auga ao nivel do mar?",
    answers: ["90°C", "95°C", "100°C", "105°C"],
    correct: 2,
    category: "fisica",
    difficulty: "easy"
  },
  {
    id: 694,
    question: "Cal é a fórmula da enerxía cinética?",
    answers: ["E = mc²", "E = ½mv²", "E = mgh", "E = Pt"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 695,
    question: "Que tipo de onda é a luz?",
    answers: ["Mecánica", "Electromagnética", "Sonora", "Gravitacional"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 696,
    question: "Cal é a unidade de resistencia eléctrica?",
    answers: ["Ampere", "Volt", "Ohm", "Watt"],
    correct: 2,
    category: "fisica",
    difficulty: "medium"
  },

  // Mecánica
  {
    id: 697,
    question: "Se un obxecto cae libremente, como cambia a súa velocidade?",
    answers: ["Permanece constante", "Aumenta uniformemente", "Diminúe uniformemente", "Aumenta exponencialmente"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 698,
    question: "Cal é a fórmula da velocidade?",
    answers: ["v = d/t", "v = at", "v = d×t", "v = a/t"],
    correct: 0,
    category: "fisica",
    difficulty: "easy"
  },
  {
    id: 699,
    question: "Que principio explica por que flotan os barcos?",
    answers: ["Principio de Pascal", "Principio de Arquímedes", "Principio de Bernoulli", "Principio de Torricelli"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 700,
    question: "Cal é a primeira lei de Newton?",
    answers: ["F = ma", "Lei da inercia", "Acción e reacción", "Lei da gravidade"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 701,
    question: "Se duplicamos a masa dun obxecto, como afecta á súa inercia?",
    answers: ["Redúcese á metade", "Permanece igual", "Duplícase", "Cuadruplícase"],
    correct: 2,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 702,
    question: "Cal é a unidade de momento (momentum)?",
    answers: ["kg⋅m/s", "N⋅s", "Ambas son correctas", "kg⋅m/s²"],
    correct: 2,
    category: "fisica",
    difficulty: "hard"
  },
  {
    id: 703,
    question: "Que conserva na colisión elástica?",
    answers: ["Só a enerxía", "Só o momento", "Enerxía e momento", "Nin enerxía nin momento"],
    correct: 2,
    category: "fisica",
    difficulty: "hard"
  },
  {
    id: 704,
    question: "Cal é a fórmula do traballo mecánico?",
    answers: ["W = F⋅d", "W = F/d", "W = md", "W = Fv"],
    correct: 0,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 705,
    question: "Que mide o dinamómetro?",
    answers: ["Masa", "Peso", "Volume", "Densidade"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 706,
    question: "Cal é a relación entre peso e masa?",
    answers: ["P = m/g", "P = mg", "P = m + g", "P = m - g"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },

  // Termodinámica
  {
    id: 707,
    question: "Cal é o cero absoluto?",
    answers: ["-273°C", "-100°C", "0°C", "100°C"],
    correct: 0,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 708,
    question: "Que establece a primeira lei da termodinámica?",
    answers: ["Conservación da enerxía", "Entropía sempre aumenta", "Calor flúe do quente ao frío", "Movemento molecular"],
    correct: 0,
    category: "fisica",
    difficulty: "hard"
  },
  {
    id: 709,
    question: "Cal é a unidade de temperatura no SI?",
    answers: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
    correct: 2,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 710,
    question: "Como se transmite o calor no baleiro?",
    answers: ["Condución", "Convección", "Radiación", "Non se transmite"],
    correct: 2,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 711,
    question: "Que sucede coa temperatura durante un cambio de estado?",
    answers: ["Aumenta", "Diminúe", "Permanece constante", "Depende da presión"],
    correct: 2,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 712,
    question: "Cal é o calor específico da auga?",
    answers: ["1 cal/g°C", "2 cal/g°C", "0.5 cal/g°C", "4 cal/g°C"],
    correct: 0,
    category: "fisica",
    difficulty: "hard"
  },
  {
    id: 713,
    question: "Que gas constitúe a maior parte da atmosfera?",
    answers: ["Osíxeno", "Nitróxeno", "Argon", "Dióxido de carbono"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 714,
    question: "Cal é a presión atmosférica estándar?",
    answers: ["760 mmHg", "780 mmHg", "740 mmHg", "800 mmHg"],
    correct: 0,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 715,
    question: "Que sucede co volume dun gas cando aumenta a temperatura (a presión constante)?",
    answers: ["Diminúe", "Aumenta", "Permanece igual", "Depende do gas"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 716,
    question: "Cal é a ecuación dos gases ideais?",
    answers: ["PV = nRT", "PV = RT", "P + V = nRT", "PV = nT"],
    correct: 0,
    category: "fisica",
    difficulty: "hard"
  },

  // Electricidade
  {
    id: 717,
    question: "Cal é a lei de Ohm?",
    answers: ["V = IR", "V = I/R", "V = I + R", "V = I - R"],
    correct: 0,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 718,
    question: "Cal é a unidade de corrente eléctrica?",
    answers: ["Volt", "Ohm", "Ampere", "Watt"],
    correct: 2,
    category: "fisica",
    difficulty: "easy"
  },
  {
    id: 719,
    question: "Que partícula transporta a corrente eléctrica nos metais?",
    answers: ["Protóns", "Neutróns", "Electróns", "Ións"],
    correct: 2,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 720,
    question: "Cal é a unidade de potencia eléctrica?",
    answers: ["Joule", "Volt", "Ampere", "Watt"],
    correct: 3,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 721,
    question: "Que sucede coa resistencia total en circuíto en serie?",
    answers: ["Diminúe", "Aumenta", "Permanece igual", "Depende da voltaxe"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 722,
    question: "Cal é a fórmula da potencia eléctrica?",
    answers: ["P = VI", "P = V/I", "P = V + I", "P = V - I"],
    correct: 0,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 723,
    question: "Que material é un bo condutor eléctrico?",
    answers: ["Plástico", "Madeira", "Cobre", "Vidro"],
    correct: 2,
    category: "fisica",
    difficulty: "easy"
  },
  {
    id: 724,
    question: "Cal é a carga dun electrón?",
    answers: ["1.6 × 10⁻¹⁹ C", "-1.6 × 10⁻¹⁹ C", "1.6 × 10¹⁹ C", "0 C"],
    correct: 1,
    category: "fisica",
    difficulty: "hard"
  },
  {
    id: 725,
    question: "Que tipo de corrente usan as nosas casas?",
    answers: ["Corrente continua", "Corrente alterna", "Corrente mixta", "Corrente estática"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 726,
    question: "Cal é a frecuencia da corrente alterna en Europa?",
    answers: ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
    correct: 0,
    category: "fisica",
    difficulty: "medium"
  },

  // Óptica e ondas
  {
    id: 727,
    question: "Cal é a velocidade do son no aire?",
    answers: ["330 m/s", "340 m/s", "350 m/s", "360 m/s"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 728,
    question: "Que sucede coa luz cando pasa dun medio a outro?",
    answers: ["Refléctese", "Refráctase", "Absorvese", "Todas as anteriores"],
    correct: 3,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 729,
    question: "Cal é a ecuación da onda?",
    answers: ["v = fλ", "v = f/λ", "v = f + λ", "v = f - λ"],
    correct: 0,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 730,
    question: "Que cor ten a maior frecuencia no espectro visible?",
    answers: ["Vermello", "Azul", "Verde", "Violeta"],
    correct: 3,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 731,
    question: "Cal é a lei da reflexión?",
    answers: ["Ángulo de incidencia = ángulo de reflexión", "Ángulo de incidencia > ángulo de reflexión", "Ángulo de incidencia < ángulo de reflexión", "Non hai relación"],
    correct: 0,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 732,
    question: "Que lente corrixe a miopía?",
    answers: ["Convexa", "Cóncava", "Cilíndrica", "Prismática"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 733,
    question: "Cal é o fenómeno que explica por que o ceo é azul?",
    answers: ["Reflexión", "Refracción", "Dispersión de Rayleigh", "Interferencia"],
    correct: 2,
    category: "fisica",
    difficulty: "hard"
  },
  {
    id: 734,
    question: "Que tipo de espello usa un telescopio reflector?",
    answers: ["Convexo", "Cóncavo", "Plano", "Cilíndrico"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 735,
    question: "Cal é a frecuencia dunha onda de 2 metros de lonxitude a 340 m/s?",
    answers: ["170 Hz", "680 Hz", "85 Hz", "340 Hz"],
    correct: 0,
    category: "fisica",
    difficulty: "hard"
  },
  {
    id: 736,
    question: "Que fenómeno produce o arco da vella?",
    answers: ["Reflexión", "Refracción", "Dispersión", "Todas as anteriores"],
    correct: 3,
    category: "fisica",
    difficulty: "medium"
  },

  // Física moderna
  {
    id: 737,
    question: "Quen propuxo a teoría da relatividade?",
    answers: ["Newton", "Einstein", "Bohr", "Planck"],
    correct: 1,
    category: "fisica",
    difficulty: "easy"
  },
  {
    id: 738,
    question: "Cal é a ecuación máis famosa de Einstein?",
    answers: ["E = mc²", "F = ma", "E = hf", "p = mv"],
    correct: 0,
    category: "fisica",
    difficulty: "easy"
  },
  {
    id: 739,
    question: "Que partícula ten carga positiva no núcleo?",
    answers: ["Electrón", "Neutrón", "Protón", "Positrón"],
    correct: 2,
    category: "fisica",
    difficulty: "easy"
  },
  {
    id: 740,
    question: "Cal é o principio de incertidume de Heisenberg?",
    answers: ["Non se pode medir exactamente posición e momento simultaneamente", "A enerxía consérvase", "A luz é onda e partícula", "O tempo é relativo"],
    correct: 0,
    category: "fisica",
    difficulty: "hard"
  },
  {
    id: 741,
    question: "Que forza mantén unido o núcleo atómico?",
    answers: ["Electromagnética", "Gravitacional", "Nuclear forte", "Nuclear débil"],
    correct: 2,
    category: "fisica",
    difficulty: "hard"
  },
  {
    id: 742,
    question: "Cal é a constante de Planck aproximadamente?",
    answers: ["6.63 × 10⁻³⁴ J⋅s", "6.63 × 10³⁴ J⋅s", "3.14 × 10⁻³⁴ J⋅s", "1.38 × 10⁻²³ J⋅s"],
    correct: 0,
    category: "fisica",
    difficulty: "hard"
  },
  {
    id: 743,
    question: "Que partícula é o fotón?",
    answers: ["Partícula de luz", "Partícula de son", "Partícula de masa", "Partícula de carga"],
    correct: 0,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 744,
    question: "Cal é a idade aproximada do universo?",
    answers: ["4.5 mil millóns de anos", "13.8 mil millóns de anos", "20 mil millóns de anos", "100 mil millóns de anos"],
    correct: 1,
    category: "fisica",
    difficulty: "medium"
  },
  {
    id: 745,
    question: "Que teoría explica a gravidade como curvatura do espazo-tempo?",
    answers: ["Mecánica newtoniana", "Relatividade especial", "Relatividade xeral", "Mecánica cuántica"],
    correct: 2,
    category: "fisica",
    difficulty: "hard"
  },
  {
    id: 746,
    question: "Cal é a temperatura da radiación cósmica de fondo?",
    answers: ["2.7 K", "273 K", "0 K", "100 K"],
    correct: 0,
    category: "fisica",
    difficulty: "hard"
  },

  // Matemáticas avanzadas
  {
    id: 747,
    question: "Cal é a derivada de x²?",
    answers: ["x", "2x", "x²", "2x²"],
    correct: 1,
    category: "matematicas",
    difficulty: "hard"
  },
  {
    id: 748,
    question: "Cal é a integral de 2x?",
    answers: ["x²", "x² + C", "2", "2x + C"],
    correct: 1,
    category: "matematicas",
    difficulty: "hard"
  },
  {
    id: 749,
    question: "Que é un número primo?",
    answers: ["Divisible só por 1 e por si mesmo", "Número par", "Número impar", "Número negativo"],
    correct: 0,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 750,
    question: "Cal é o primeiro número primo?",
    answers: ["1", "2", "3", "5"],
    correct: 1,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 751,
    question: "Que representa i en números complexos?",
    answers: ["√(-1)", "√1", "∞", "0"],
    correct: 0,
    category: "matematicas",
    difficulty: "hard"
  },
  {
    id: 752,
    question: "Cal é o valor de sen(90°)?",
    answers: ["0", "1", "-1", "1/2"],
    correct: 1,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 753,
    question: "Cal é o valor de cos(0°)?",
    answers: ["0", "1", "-1", "1/2"],
    correct: 1,
    category: "matematicas",
    difficulty: "medium"
  },
  {
    id: 754,
    question: "Que é unha matriz identidade?",
    answers: ["Todos os elementos son 1", "Diagonal principal 1, resto 0", "Todos os elementos son 0", "Matriz cadrada"],
    correct: 1,
    category: "matematicas",
    difficulty: "hard"
  },
  {
    id: 755,
    question: "Cal é a suma da serie 1 + 1/2 + 1/4 + 1/8 + ...?",
    answers: ["1", "2", "∞", "1/2"],
    correct: 1,
    category: "matematicas",
    difficulty: "hard"
  },
  {
    id: 756,
    question: "Que é o número aúreo (phi)?",
    answers: ["1.414", "1.618", "2.718", "3.141"],
    correct: 1,
    category: "matematicas",
    difficulty: "hard"
  },

  // === PREGUNTAS DE XEOGRAFÍA GALEGA (IDs 757-856) ===
  // Provincias e capitais
  {
    id: 757,
    question: "Cal é a capital da provincia de Pontevedra?",
    answers: ["Vigo", "Pontevedra", "Ourense", "Redondela"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 758,
    question: "Cantas provincias ten Galicia?",
    answers: ["3", "4", "5", "6"],
    correct: 1,
    category: "xeografia_galega", 
    difficulty: "easy"
  },
  {
    id: 759,
    question: "Cal é a provincia máis poboada de Galicia?",
    answers: ["A Coruña", "Pontevedra", "Lugo", "Ourense"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 760,
    question: "En que provincia está o concello de Ribadeo?",
    answers: ["A Coruña", "Lugo", "Pontevedra", "Ourense"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 761,
    question: "Cal é a provincia menos extensa de Galicia?",
    answers: ["Ourense", "Lugo", "Pontevedra", "A Coruña"],
    correct: 2,
    category: "xeografia_galega",
    difficulty: "medium"
  },

  // Concellos importantes
  {
    id: 762,
    question: "Cal é o concello máis poboado de Galicia?",
    answers: ["A Coruña", "Vigo", "Santiago", "Ourense"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 763,
    question: "En que concello está o Cabo Fisterra?",
    answers: ["Fisterra", "Muxía", "Corcubión", "Cee"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 764,
    question: "Cal é o concello onde está a Catedral de Santiago?",
    answers: ["Santiago de Compostela", "Padrón", "Arzúa", "Melide"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 765,
    question: "En que provincia está Verín?",
    answers: ["Lugo", "Ourense", "Pontevedra", "A Coruña"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 766,
    question: "Cal é o concello onde está o Castro de Viladonga?",
    answers: ["Castro de Rei", "Lugo", "Mondoñedo", "Viveiro"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 767,
    question: "En que concello está a Praia das Catedrais?",
    answers: ["Viveiro", "Ribadeo", "Foz", "Burela"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 768,
    question: "Cal é o concello máis oriental de Galicia?",
    answers: ["A Pobra de Trives", "Verín", "Calvos de Randín", "Cualedro"],
    correct: 2,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 769,
    question: "En que concello está o Parque Nacional das Illas Atlánticas?",
    answers: ["Vigo", "Cangas", "Bueu", "Varios"],
    correct: 3,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 770,
    question: "Cal é o concello onde está As Burgas?",
    answers: ["Ourense", "Verín", "Xinzo de Limia", "Celanova"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 771,
    question: "En que concello está o Mosteiro de Oseira?",
    answers: ["Cea", "San Cristovo de Cea", "Piñor", "Maside"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "hard"
  },

  // Comarcas
  {
    id: 772,
    question: "Cal é a comarca onde está Santiago de Compostela?",
    answers: ["Santiago", "Sar", "Terra de Santiago", "Compostela"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 773,
    question: "A que comarca pertence Viveiro?",
    answers: ["A Mariña Occidental", "A Mariña Oriental", "Terra Chá", "Ortegal"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 774,
    question: "Cal é a comarca do Barbanza?",
    answers: ["Barbanza", "Noia", "Muros", "Costa da Morte"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 775,
    question: "A que comarca pertence Monforte de Lemos?",
    answers: ["Terra de Lemos", "Chantada", "Sarria", "Quiroga"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 776,
    question: "Cal é a comarca máis setentrional de Galicia?",
    answers: ["Ortegal", "A Mariña Oriental", "Terra Chá", "Eume"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 777,
    question: "A que comarca pertence Celanova?",
    answers: ["Terra de Celanova", "Limia", "Allariz - Maceda", "Viana"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 778,
    question: "Cal é a comarca de Pontedeume?",
    answers: ["Eume", "Ferrol", "Ortegal", "Betanzos"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 779,
    question: "A que comarca pertence Tui?",
    answers: ["Baixo Miño", "O Condado", "Vigo", "O Rosal"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 780,
    question: "Cal é a comarca de Xinzo de Limia?",
    answers: ["Limia", "Terra de Celanova", "Viana", "Verín"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 781,
    question: "A que comarca pertence Padrón?",
    answers: ["Sar", "Santiago", "Caldas", "Tabeirós"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },

  // Parroquias históricas
  {
    id: 782,
    question: "Como se chama a parroquia onde está o centro de Vigo?",
    answers: ["Santa María de Vigo", "San Pedro de Vigo", "Santiago de Vigo", "San Miguel de Vigo"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 783,
    question: "Cal é a parroquia onde está o centro histórico da Coruña?",
    answers: ["Santa María", "San Nicolás", "Santiago", "San Jorge"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 784,
    question: "Como se chama a parroquia céntrica de Pontevedra?",
    answers: ["Santa María a Maior", "San Bartolomeu", "São Sebastião", "San Pedro"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 785,
    question: "Cal é a parroquia onde está a Catedral de Ourense?",
    answers: ["Santa María Nai", "San Martiño", "Santa Eufemia", "San Pedro"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 786,
    question: "Como se chama a parroquia onde está a Catedral de Santiago?",
    answers: ["San Fiz de Solovio", "Santa María Salomé", "Santiago", "San Martín Pinario"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "hard"
  },

  // Xeografía física e límites
  {
    id: 787,
    question: "Cal é o concello máis occidental de Galicia?",
    answers: ["Fisterra", "Muxía", "Camariñas", "Laxe"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 788,
    question: "Que concello está máis ao norte en Galicia?",
    answers: ["Ortigueira", "Cariño", "Cedeira", "Mañón"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 789,
    question: "Cal é o concello máis meridional de Galicia?",
    answers: ["Tui", "O Rosal", "A Guarda", "Oia"],
    correct: 3,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 790,
    question: "En que concello está o Monte Pindo?",
    answers: ["Carnota", "Mazaricos", "Dumbría", "Muros"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 791,
    question: "Cal é o concello onde está o Parque Natural do Invernadeiro?",
    answers: ["Vilariño de Conso", "Entrimo", "Lobios", "Muíños"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "hard"
  },

  // Concellos costeiros
  {
    id: 792,
    question: "Cal destes concellos NON ten costa?",
    answers: ["Noia", "Arzúa", "Muros", "Porto do Son"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 793,
    question: "En que concello están as Illas Cíes?",
    answers: ["Vigo", "Cangas", "Baiona", "Nigrán"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 794,
    question: "Cal é o concello onde está a Illa de Arousa?",
    answers: ["A Illa de Arousa", "Vilanova de Arousa", "Vilagarcía", "Cambados"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 795,
    question: "En que concello está a praia de Silgar?",
    answers: ["Sanxenxo", "O Grove", "Poio", "Marín"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 796,
    question: "Cal é o concello onde está Cabo Vilán?",
    answers: ["Camariñas", "Muxía", "Fisterra", "Vimianzo"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },

  // Concellos de interior
  {
    id: 797,
    question: "En que concello está o Mosteiro de Sobrado dos Monxes?",
    answers: ["Sobrado", "Curtis", "Vilasantar", "Guitiriz"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 798,
    question: "Cal é o concello onde está Allariz?",
    answers: ["Allariz", "Xunqueira de Espadanedo", "Taboadela", "Rairiz de Veiga"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 799,
    question: "En que concello está Portomarín?",
    answers: ["Portomarín", "Paradela", "Guntín", "Lugo"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 800,
    question: "Cal é o concello onde está Mondoñedo?",
    answers: ["Mondoñedo", "Abadín", "Pastoriza", "Begonte"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },

  // Ríos e xeografía hidrográfica por concellos
  {
    id: 801,
    question: "En que concello desemboca o río Miño?",
    answers: ["A Guarda", "Tui", "O Rosal", "Goián"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 802,
    question: "Por que concello pasa o río Ulla antes de desembocar?",
    answers: ["Catoira", "Rianxo", "Dodro", "Padrón"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 803,
    question: "En que concello está a nacente do río Tambre?",
    answers: ["Sobrado", "Aranga", "Irixoa", "Curtis"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 804,
    question: "Que concello atravesa o río Lérez?",
    answers: ["Pontevedra", "Marín", "Poio", "Barro"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 805,
    question: "En que concello está a confluencia do Miño co Sil?",
    answers: ["Os Peares", "Carballedo", "Chantada", "Sober"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "hard"
  },

  // Patrimonio por concellos
  {
    id: 806,
    question: "En que concello está a Torre de Hércules?",
    answers: ["A Coruña", "Oleiros", "Sada", "Arteixo"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 807,
    question: "Cal é o concello onde está o Mosteiro de Samos?",
    answers: ["Samos", "Sarria", "Triacastela", "O Incio"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 808,
    question: "En que concello está a Muralla Romana de Lugo?",
    answers: ["Lugo", "Outeiro de Rei", "Guntín", "Friol"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 809,
    question: "Cal é o concello onde está o Castro de Santa Tegra?",
    answers: ["A Guarda", "O Rosal", "Tui", "Oia"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 810,
    question: "En que concello está o Pazo de Oca?",
    answers: ["A Estrada", "Silleda", "Vila de Cruces", "Dozón"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },

  // Feiras e festivais por concellos
  {
    id: 811,
    question: "En que concello se celebra a Festa do Marisco?",
    answers: ["O Grove", "Sanxenxo", "Cambados", "A Illa de Arousa"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 812,
    question: "Cal é o concello da Festa da Empanada?",
    answers: ["Bandeira", "Xinzo de Limia", "Verín", "Allariz"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 813,
    question: "En que concello se celebra a Festa do Albariño?",
    answers: ["Cambados", "O Grove", "Meaño", "Meis"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 814,
    question: "Cal é o concello do Festival de Ortigueira?",
    answers: ["Ortigueira", "Cedeira", "Cariño", "Mañón"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 815,
    question: "En que concello se celebra a Festa da Istoria?",
    answers: ["Ribadavia", "Allariz", "Betanzos", "Noia"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },

  // Denominacións de orixe por concellos
  {
    id: 816,
    question: "En que concello se produce principalmente o Ribeiro?",
    answers: ["Ribadavia", "Carballeda de Avia", "Leiro", "Beade"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 817,
    question: "Cal é o principal concello productor de Albariño?",
    answers: ["Cambados", "O Grove", "Sanxenxo", "Meaño"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 818,
    question: "En que concello se elabora principalmente a Tetilla?",
    answers: ["Arzúa", "Curtis", "Melide", "Santiso"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 819,
    question: "Cal é un concello da D.O. Monterrei?",
    answers: ["Verín", "Laza", "Xinzo de Limia", "Allariz"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 820,
    question: "En que concello está o centro da D.O. Valdeorras?",
    answers: ["O Barco de Valdeorras", "Rubiá", "Petín", "A Rúa"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },

  // Camiño de Santiago por concellos
  {
    id: 821,
    question: "Cal é o primeiro concello galego do Camiño Francés?",
    answers: ["O Cebreiro", "Pedrafita do Cebreiro", "Triacastela", "Samos"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 822,
    question: "En que concello está Astorga no Camiño?",
    answers: ["Non está en Galicia", "Lugo", "Ourense", "León"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 823,
    question: "Cal é o concello onde está Melide no Camiño?",
    answers: ["Melide", "Arzúa", "Santiso", "Sobrado"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 824,
    question: "En que concello está Sarria, inicio dos últimos 100 km?",
    answers: ["Sarria", "Paradela", "Portomarín", "Lugo"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 825,
    question: "Cal é o último concello antes de Santiago no Camiño Francés?",
    answers: ["Arzúa", "O Pino", "Santiago", "Melide"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "medium"
  },

  // Concellos curiosos e datos específicos
  {
    id: 826,
    question: "Cal é o concello galego con menor poboación?",
    answers: ["Baleira", "Chandrexa de Queixa", "Vilar de Barrio", "Carballeda de Valdeorras"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 827,
    question: "Cal é o concello máis extenso de Galicia?",
    answers: ["Lugo", "Ourense", "A Coruña", "Vigo"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 828,
    question: "En que concello está a vila máis alta de Galicia?",
    answers: ["Trevinca", "A Veiga", "Chandrexa de Queixa", "Puebla de Trives"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 829,
    question: "Cal é o concello onde está a maior fábrica de Inditex?",
    answers: ["Arteixo", "A Coruña", "Narón", "Ferrol"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 830,
    question: "En que concello está a central nuclear de Trillo? (pregunta trampa)",
    answers: ["Non está en Galicia", "Ourense", "Lugo", "A Coruña"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },

  // Límites administrativos
  {
    id: 831,
    question: "Que concello fai fronteira con Portugal?",
    answers: ["Tui", "Lobios", "Entrimo", "Todos os anteriores"],
    correct: 3,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 832,
    question: "Cal é o concello que fai fronteira con Asturias?",
    answers: ["Ribadeo", "A Pontenova", "Negueira de Muñiz", "Todos os anteriores"],
    correct: 3,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 833,
    question: "Que concello de Ourense fai fronteira con León?",
    answers: ["A Veiga", "Chandrexa de Queixa", "Sandiás", "Viana do Bolo"],
    correct: 3,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 834,
    question: "Cal é o concello que fai fronteira con Zamora?",
    answers: ["Hermisende", "Lubián", "Non hai", "Porto"],
    correct: 2,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 835,
    question: "Que concello está máis preto de Castela e León?",
    answers: ["As Neves", "Cualedro", "Viana do Bolo", "A Veiga"],
    correct: 2,
    category: "xeografia_galega",
    difficulty: "hard"
  },

  // Últimas preguntas variadas
  {
    id: 836,
    question: "En que concello está o aeroporto de Lavacolla?",
    answers: ["Santiago", "Arzúa", "O Pino", "Boqueixón"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 837,
    question: "Cal é o concello onde está o aeroporto de Peinador?",
    answers: ["Vigo", "Mos", "Redondela", "Porriño"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 838,
    question: "En que concello está Cedeira?",
    answers: ["Cedeira", "Ortigueira", "Cariño", "Mañón"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 839,
    question: "Cal é o concello onde está Noia?",
    answers: ["Noia", "Porto do Son", "Lousame", "Muros"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 840,
    question: "En que concello está Betanzos?",
    answers: ["Betanzos", "Paderne", "Oza-Cesuras", "Curtis"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 841,
    question: "Cal é o concello de Carballo?",
    answers: ["Carballo", "Ponteceso", "Laracha", "Arteixo"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 842,
    question: "En que concello está Cangas?",
    answers: ["Cangas", "Moaña", "Bueu", "Marín"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 843,
    question: "Cal é o concello onde está Redondela?",
    answers: ["Redondela", "Mos", "Porriño", "Vigo"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 844,
    question: "En que concello está Lalín?",
    answers: ["Lalín", "Silleda", "A Estrada", "Vila de Cruces"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 845,
    question: "Cal é o concello onde está Xinzo de Limia?",
    answers: ["Xinzo de Limia", "Sandiás", "Trasmiras", "Rairiz de Veiga"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 846,
    question: "En que concello está Ribeira?",
    answers: ["Ribeira", "Porto do Son", "A Pobra do Caramiñal", "Boiro"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 847,
    question: "Cal é o concello onde está Marín?",
    answers: ["Marín", "Pontevedra", "Poio", "Bueu"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 848,
    question: "En que concello está Vilagarcía de Arousa?",
    answers: ["Vilagarcía de Arousa", "Vilanova de Arousa", "Catoira", "Caldas de Reis"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 849,
    question: "Cal é o concello onde está Narón?",
    answers: ["Narón", "Ferrol", "Valdoviño", "Moeche"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 850,
    question: "En que concello está Ponteareas?",
    answers: ["Ponteareas", "Salvaterra de Miño", "As Neves", "Mondariz"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 851,
    question: "Cal é o concello onde está Barbanza?",
    answers: ["Non existe ese concello", "Ribeira", "A Pobra do Caramiñal", "Boiro"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 852,
    question: "En que concello está Caldas de Reis?",
    answers: ["Caldas de Reis", "Ponteareas", "Cuntis", "Catoira"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "easy"
  },
  {
    id: 853,
    question: "Cal é o concello máis pequeno en extensión?",
    answers: ["Oza-Cesuras", "As Neves", "Carral", "O Porriño"],
    correct: 1,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 854,
    question: "En que concello está a Universidade de Vigo campus de Ourense?",
    answers: ["Ourense", "Barbadás", "Pereiro de Aguiar", "San Cibrao das Viñas"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },
  {
    id: 855,
    question: "Cal é o concello onde está a Tecnópole de Galicia?",
    answers: ["San Cibrao das Viñas", "Ourense", "Barbadás", "Pereiro de Aguiar"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "hard"
  },
  {
    id: 856,
    question: "En que concello está o Porto Exterior de Ferrol?",
    answers: ["Ferrol", "Narón", "Ares", "Mugardos"],
    correct: 0,
    category: "xeografia_galega",
    difficulty: "medium"
  },

  // === PREGUNTAS DE TELEVISIÓN GALEGA EXTENDED (IDs 857-956) ===
  // Actores e actrices galegos
  {
    id: 857,
    question: "Quen é o actor galego protagonista de 'Mar de fondo'?",
    answers: ["Xosé Manuel Olveira", "Miguel de Lira", "Roberto Vidal Bolaño", "Marcos Pereiro"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 858,
    question: "Cal é a actriz protagonista de 'Pratos combinados'?",
    answers: ["María Vázquez", "Ledicia Sola", "Mercedes Sampietro", "María Pujalte"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 859,
    question: "Quen interpreta a Maruxa en 'A familia Peleteiro'?",
    answers: ["Carmen Pardo", "Concha Velasco", "María Vidal", "Esperanza Roy"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 860,
    question: "Cal é o actor que deu vida a 'Fíkir'?",
    answers: ["Pepe Rubianes", "Paco Tous", "Roberto Vidal Bolaño", "Xosé Manuel Olveira"],
    correct: 2,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 861,
    question: "Quen é a actriz protagonista de 'Contrapartida'?",
    answers: ["Mercedes Sampietro", "Carmela Arias", "María Vázquez", "Ana Fernández"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "hard"
  },

  // Series e programas clásicos
  {
    id: 862,
    question: "Cal era o nome da serie sobre unha familia de Santiago?",
    answers: ["A familia Peleteiro", "Os Peleteiro", "Casa de familia", "Familias de Santiago"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 863,
    question: "Como se chamaba a serie de médicos da TVG?",
    answers: ["Hospital central", "Mar de fondo", "Médicos de Vigo", "Urxencias"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 864,
    question: "Cal era o nome da serie cómica de Pepe Rubianes?",
    answers: ["Mareas vivas", "Fíkir", "Pratos combinados", "Rías Baixas"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 865,
    question: "Como se chamaba a serie de televisión sobre xornalistas?",
    answers: ["Redacción", "Contrapartida", "Informativos", "Prensa galega"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 866,
    question: "Cal era o nome da serie sobre un instituto?",
    answers: ["Aula 7", "Compañeiros", "Instituto galego", "Estudantes"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // Presentadores históricos
  {
    id: 867,
    question: "Quen presentaba 'A revista'?",
    answers: ["Loli Barrio", "Ana García", "Mercedes Milá", "Carmen Soto Viqueira"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 868,
    question: "Cal era o presentador de 'Luar'?",
    answers: ["Xosé Ramón Gayoso", "Miguel Anxo Murado", "Marcos Pereiro", "Carlos Blanco"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 869,
    question: "Quen presentaba os informativos na TVG nos anos 90?",
    answers: ["Monica Casal", "Ana Pastor", "Mónica López", "Carmen Soto Viqueira"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 870,
    question: "Cal era o presentador de 'Terra a terra'?",
    answers: ["Xurxo Souto", "Miguel Anxo Murado", "Carlos Blanco", "Xosé Ramón Gayoso"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 871,
    question: "Quen presentaba 'Código cero'?",
    answers: ["Marcos Pereiro", "Miguel de Lira", "Carlos Blanco", "Xosé Ramón Gayoso"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // Programas musicais
  {
    id: 872,
    question: "Como se chamaba o programa musical dos domingos?",
    answers: ["Luar", "Concerto", "Música galega", "Domingo musical"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 873,
    question: "Cal era o nome do programa de folk galego?",
    answers: ["Follas novas", "Folk galego", "Tradicións", "Música popular"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 874,
    question: "Como se chamaba o concurso de cantantes novos?",
    answers: ["Voces novas", "Novos talentos", "Cantautores", "Festival de Benidorm"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 875,
    question: "Cal era o programa de música clásica da TVG?",
    answers: ["Clásicos", "Concerto", "Música culta", "Sinfónica"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 876,
    question: "Como se chamaba o programa de música rock?",
    answers: ["Rock galego", "Decibélios", "Heavy metal", "Música moderna"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "hard"
  },

  // Cantantes e grupos en TV
  {
    id: 877,
    question: "Que grupo galego actuou moitas veces en 'Luar'?",
    answers: ["Os Resentidos", "Siniestro Total", "Heredeiros da Crus", "Todos os anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 878,
    question: "Cal é o cantautor galego máis invitado aos programas da TVG?",
    answers: ["Amancio Prada", "Luis Eduardo Aute", "Fuxan os Ventos", "Emilio Cao"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 879,
    question: "Que cantante interpretou o tema de 'Mareas vivas'?",
    answers: ["Luz Casal", "María Xosé Silvar", "Christina Rosenvinge", "Uxía"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "hard"
  },
  {
    id: 880,
    question: "Cal é a cantante que máis veces actuou en 'Luar'?",
    answers: ["Uxía", "Mercedes Peón", "Cristina Pato", "María Xosé Silvar"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 881,
    question: "Que grupo de rock galego saíu en programas da TVG?",
    answers: ["Siniestro Total", "Los Suaves", "Heredeiros da Crus", "Todos os anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "easy"
  },

  // Programas infantís
  {
    id: 882,
    question: "Como se chamaba o programa infantil matinal?",
    answers: ["Xabarín", "Pequenos", "Nenos TV", "Infancia"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 883,
    question: "Cal era a mascota de 'Xabarín'?",
    answers: ["Xabarín", "Rato Xan", "Pepe", "Xoán"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 884,
    question: "Quen era o presentador principal de 'Xabarín'?",
    answers: ["Marcos Pereiro", "Xosé Ramón Gayoso", "Miguel de Lira", "Carlos Blanco"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 885,
    question: "Como se chamaba o programa de debuxos animados galegos?",
    answers: ["Megatrix", "Xabarín Club", "Debuxos galegos", "Animación TVG"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 886,
    question: "Cal era o nome do concurso infantil da TVG?",
    answers: ["Pequenos xénios", "Nenos sabios", "Quiz infantil", "Xoguetes"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // Programas deportivos
  {
    id: 887,
    question: "Como se chama o programa deportivo da TVG?",
    answers: ["Galicia Deporte", "Deportes TVG", "Galicia Sport", "Todos deportes"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 888,
    question: "Quen presentaba 'Galicia Deporte'?",
    answers: ["Xurxo Souto", "Marcos Pereiro", "Miguel de Lira", "Carlos Blanco"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 889,
    question: "Cal era o programa de fútbol galego?",
    answers: ["Fútbol galego", "Liga galega", "Equipos de Galicia", "Balón galego"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 890,
    question: "Como se chamaba o programa de deportes de fin de semana?",
    answers: ["Deporte fin de semana", "Deportes do domingo", "Weekend sport", "Domingo deportivo"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // Documentais e culturais
  {
    id: 891,
    question: "Cal era o nome do programa de documentais da natureza?",
    answers: ["Galicia natural", "Natureza viva", "Ecoloxía", "Paisaxes"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 892,
    question: "Como se chamaba o programa de historia galega?",
    answers: ["Historia de Galicia", "Pasado galego", "Memoria", "Raíces"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 893,
    question: "Cal era o programa de arte e cultura?",
    answers: ["Arte galega", "Cultura viva", "Creación", "Galicia cultural"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 894,
    question: "Como se chamaba o programa de literatura?",
    answers: ["Letras galegas", "Literatura viva", "Libros", "Escritores"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 895,
    question: "Cal era o nome do programa de arquitectura?",
    answers: ["Pedra a pedra", "Arquitectura galega", "Construcións", "Edificios"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "hard"
  },

  // Programas de actualidade
  {
    id: 896,
    question: "Como se chamaba o programa de debate político?",
    answers: ["Galicia debate", "Política galega", "Debate TVG", "Mesa redonda"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 897,
    question: "Cal era o nome do programa económico?",
    answers: ["Economía galega", "Empresa", "Negocio", "Mercado galego"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 898,
    question: "Como se chamaba o programa de consumo?",
    answers: ["Consumo responsable", "Comprador", "Mercado", "Usuario"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "hard"
  },
  {
    id: 899,
    question: "Cal era o programa de turismo galego?",
    answers: ["Galicia única", "Turismo", "Rutas", "Destino Galicia"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // Concursos e entretemento
  {
    id: 900,
    question: "Como se chamaba o concurso de preguntas da TVG?",
    answers: ["Saber e ganar", "Quiz galego", "Preguntas", "Concurso TVG"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 901,
    question: "Cal era o nome do concurso musical?",
    answers: ["Festival de Benidorm", "Concurso de música", "Cantamos", "Voces"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "hard"
  },
  {
    id: 902,
    question: "Como se chamaba o programa de humor?",
    answers: ["Risas", "Humor galego", "Comedia", "Cachondeo"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 903,
    question: "Cal era o programa de variedades da noite?",
    answers: ["Noite galega", "Variedades", "Show nocturno", "Espectáculo"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // Personaxes históricos da TVG
  {
    id: 904,
    question: "Quen foi o primeiro director da TVG?",
    answers: ["Manuel Regueiro", "Xosé Ramón Gayoso", "Miguel Anxo Murado", "Carlos Blanco"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "hard"
  },
  {
    id: 905,
    question: "Cal foi a primeira presentadora da TVG?",
    answers: ["Carmen Soto Viqueira", "Ana García", "Mónica Casal", "Mercedes Milá"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "hard"
  },
  {
    id: 906,
    question: "Quen foi o primeiro actor protagonista dunha serie da TVG?",
    answers: ["Xosé Manuel Olveira", "Roberto Vidal Bolaño", "Miguel de Lira", "Pepe Rubianes"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "hard"
  },
  {
    id: 907,
    question: "Cal foi o primeiro cantante en actuar na TVG?",
    answers: ["Amancio Prada", "Emilio Cao", "Fuxan os Ventos", "Non se sabe"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "hard"
  },

  // Programas especiais
  {
    id: 908,
    question: "Como se chamaba o programa especial de Nadal?",
    answers: ["Nadal galego", "Especial Nadal", "Noiteboa", "Festa de Nadal"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 909,
    question: "Cal era o nome do programa de fin de ano?",
    answers: ["Fin de ano", "Noitevella", "Despedida", "Último día"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 910,
    question: "Como se chamaba o programa especial do Día das Letras Galegas?",
    answers: ["Letras galegas", "Día das letras", "Homenaxe", "Escritores galegos"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 911,
    question: "Cal era o programa especial do Día de Galicia?",
    answers: ["Día de Galicia", "25 de xullo", "Festa nacional", "Galicia celebra"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // Series internacionais dobradas
  {
    id: 912,
    question: "Cal foi a primeira serie estranxeira dobrada ao galego na TVG?",
    answers: ["Dallas", "Dinastía", "Falcon Crest", "Non se dobrou ningunha"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "hard"
  },
  {
    id: 913,
    question: "Que serie de debuxos animados se dobrou ao galego?",
    answers: ["Os Simpsons", "Dragon Ball", "Ninguna", "Todas"],
    correct: 2,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 914,
    question: "Cal era a política de dobraxe da TVG?",
    answers: ["Todo en galego", "Todo subtitulado", "Orixinal", "Mixto"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // Programas de radio en TV
  {
    id: 915,
    question: "Que programa de radio se retransmitía en TV?",
    answers: ["Radio Galega matinal", "Ningún", "Todos", "Informativos"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 916,
    question: "Cal era a relación entre Radio Galega e TVG?",
    answers: ["Independentes", "Mesma empresa", "Colaboración", "Competencia"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // Audiencias e datos
  {
    id: 917,
    question: "Cal foi o programa con máis audiencia da TVG?",
    answers: ["Luar", "Informativos", "Fútbol", "Non se sabe"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "hard"
  },
  {
    id: 918,
    question: "En que ano tivo a TVG máis audiencia?",
    answers: ["1995", "2000", "2005", "Non se sabe"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "hard"
  },
  {
    id: 919,
    question: "Cal era a audiencia media da TVG nos anos 90?",
    answers: ["5%", "10%", "15%", "Non se sabe"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "hard"
  },

  // Tecnoloxía e produción
  {
    id: 920,
    question: "En que ano comezou a emitir en cor a TVG?",
    answers: ["1985", "1987", "1990", "Desde o principio"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 921,
    question: "Onde estaban os primeiros estudos da TVG?",
    answers: ["Santiago", "A Coruña", "Vigo", "Ourense"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 922,
    question: "Cantas horas emitía a TVG ao día nos inicios?",
    answers: ["8 horas", "12 horas", "16 horas", "24 horas"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 923,
    question: "En que formato se gravaban os programas inicialmente?",
    answers: ["Betacam", "VHS", "U-matic", "Film"],
    correct: 2,
    category: "tv_galega_extended",
    difficulty: "hard"
  },

  // Colaboracións e intercambios
  {
    id: 924,
    question: "Con que televisión autonómica colaboraba máis a TVG?",
    answers: ["ETB", "TV3", "Canal Sur", "Todas por igual"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 925,
    question: "Participaba a TVG en producións con outras televisións?",
    answers: ["Si, moitas", "Algunhas veces", "Raramente", "Nunca"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 926,
    question: "Que programas compartía coas outras autonómicas?",
    answers: ["Documentais", "Series", "Informativos", "Ningún"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // Premios e recoñecementos
  {
    id: 927,
    question: "Recibiu algún premio importante a TVG?",
    answers: ["Si, varios", "Algún", "Poucos", "Ningún"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 928,
    question: "Que programa da TVG foi máis premiado?",
    answers: ["Luar", "Informativos", "Documentais", "Non se sabe"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "hard"
  },
  {
    id: 929,
    question: "En que festivais participaban os programas da TVG?",
    answers: ["Festivais de TV", "Festivais de cine", "Ambos", "Ningún"],
    correct: 2,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // Curiosidades e anécdotas
  {
    id: 930,
    question: "Cal foi o primeiro erro técnico grave da TVG?",
    answers: ["Corte de luz", "Fallo de son", "Imaxe en negro", "Non se sabe"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "hard"
  },
  {
    id: 931,
    question: "Que personaxe famoso visitou os estudos da TVG?",
    answers: ["O Rei", "Políticos", "Artistas", "Todos os anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 932,
    question: "Cal foi a entrevista máis polémica da TVG?",
    answers: ["A políticos", "A artistas", "A empresarios", "Non se sabe"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "hard"
  },
  {
    id: 933,
    question: "Que programa causou máis controversia?",
    answers: ["Debates políticos", "Programas culturais", "Series", "Non se sabe"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "hard"
  },

  // Evolución e cambios
  {
    id: 934,
    question: "Como cambiou a programación da TVG cos anos?",
    answers: ["Máis comercial", "Máis cultural", "Máis informativa", "Todas as anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 935,
    question: "Que tipo de programas desapareceron da TVG?",
    answers: ["Culturais", "Musicais", "Infantís", "Todos algúns"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 936,
    question: "Que novos formatos incorporou a TVG?",
    answers: ["Reality shows", "Magazines", "Talk shows", "Todos os anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // Programas actuais vs históricos
  {
    id: 937,
    question: "Que programa actual ten máis historia na TVG?",
    answers: ["Informativos", "Deportes", "Tempo", "Todos os anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 938,
    question: "Cal foi o programa que máis tempo estivo en antena?",
    answers: ["Luar", "Informativos", "Terra a terra", "Non se sabe"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "hard"
  },
  {
    id: 939,
    question: "Que programa se cancelou antes de tempo?",
    answers: ["Series", "Concursos", "Documentais", "Non se sabe"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "hard"
  },

  // Influencia cultural
  {
    id: 940,
    question: "Cal foi a influencia da TVG na cultura galega?",
    answers: ["Moi grande", "Moderada", "Pequena", "Ningunha"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 941,
    question: "Axudou a TVG a difundir a lingua galega?",
    answers: ["Si, moito", "Algo", "Pouco", "Nada"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 942,
    question: "Contribuíu a TVG ao desenvolvemento audiovisual galego?",
    answers: ["Si, moito", "Bastante", "Algo", "Pouco"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 943,
    question: "Axudou a TVG a crear talentos galegos?",
    answers: ["Si, moitos", "Algúns", "Poucos", "Ningún"],
    correct: 0,
    category: "tv_galega_extended",
    difficulty: "easy"
  },

  // Futuro e perspectivas
  {
    id: 944,
    question: "Cal é o futuro da televisión galega?",
    answers: ["Dixital", "Streaming", "Híbrido", "Incerto"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 945,
    question: "Que retos ten a televisión galega actual?",
    answers: ["Competencia", "Audiencias", "Orzamentos", "Todos os anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 946,
    question: "Como se adapta a TVG ás novas tecnoloxías?",
    answers: ["Moi ben", "Ben", "Regular", "Mal"],
    correct: 1,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // Última tanda - completar 100
  {
    id: 947,
    question: "Cal é a característica principal da televisión galega?",
    answers: ["Lingua galega", "Cultura galega", "Identidade", "Todas as anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 948,
    question: "Que diferencia a TVG doutras televisións autonómicas?",
    answers: ["A lingua", "A cultura", "A identidade", "Todas as anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 949,
    question: "Cal é o maior logro da televisión galega?",
    answers: ["Normalización lingüística", "Difusión cultural", "Creación audiovisual", "Todas as anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 950,
    question: "Que representa a TVG para Galicia?",
    answers: ["Identidade", "Cultura", "Lingua", "Todas as anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 951,
    question: "Cal é a herdanza da televisión galega?",
    answers: ["Profesionais formados", "Archivo audiovisual", "Cultura preservada", "Todas as anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 952,
    question: "Que impacto tivo a TVG na sociedade galega?",
    answers: ["Social", "Cultural", "Lingüístico", "Todos os anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 953,
    question: "Como valoras a contribución da TVG á cultura galega?",
    answers: ["Fundamental", "Importante", "Significativa", "Todas as anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "easy"
  },
  {
    id: 954,
    question: "Que papel xoga a TVG na Galicia actual?",
    answers: ["Informativo", "Cultural", "Identitario", "Todos os anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 955,
    question: "Cal é o valor da televisión galega para as futuras xeracións?",
    answers: ["Histórico", "Cultural", "Lingüístico", "Todos os anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },
  {
    id: 956,
    question: "Que legado deixa a televisión galega?",
    answers: ["Archivo audiovisual", "Profesionais formados", "Cultura preservada", "Todas as anteriores"],
    correct: 3,
    category: "tv_galega_extended",
    difficulty: "medium"
  },

  // === PREGUNTAS DE ESCRITORES GALEGOS E ESPAÑOIS (IDs 957-1056) ===
  // Escritores galegos clásicos
  {
    id: 957,
    question: "Quen escribiu 'Cantares galegos'?",
    answers: ["Rosalía de Castro", "Eduardo Pondal", "Manuel Curros Enríquez", "Alfredo Brañas"],
    correct: 0,
    category: "escritores",
    difficulty: "easy"
  },
  {
    id: 958,
    question: "Cal é o autor de 'Follas novas'?",
    answers: ["Eduardo Pondal", "Rosalía de Castro", "Manuel Curros Enríquez", "Ramón Cabanillas"],
    correct: 1,
    category: "escritores",
    difficulty: "easy"
  },
  {
    id: 959,
    question: "Quen escribiu 'En las orillas del Sar'?",
    answers: ["Rosalía de Castro", "Emilia Pardo Bazán", "Eduardo Pondal", "Concepción Arenal"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 960,
    question: "Cal é o autor de 'Os eidos'?",
    answers: ["Eduardo Pondal", "Manuel Curros Enríquez", "Ramón Cabanillas", "Castelao"],
    correct: 2,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 961,
    question: "Quen escribiu 'Aires da miña terra'?",
    answers: ["Manuel Curros Enríquez", "Eduardo Pondal", "Rosalía de Castro", "Valentín Lamas Carvajal"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Castelao e xeración Nós
  {
    id: 962,
    question: "Cal é o nome real de Castelao?",
    answers: ["Alfonso Daniel Rodríguez Castelao", "Alfonso Daniel Castelao", "Daniel Castelao", "Alfonso Castelao"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 963,
    question: "Quen escribiu 'Sempre en Galiza'?",
    answers: ["Castelao", "Vicente Risco", "Ramón Otero Pedrayo", "Alfonso Daniel Castelao"],
    correct: 0,
    category: "escritores",
    difficulty: "easy"
  },
  {
    id: 964,
    question: "Cal é o autor de 'Teoría do nacionalismo galego'?",
    answers: ["Vicente Risco", "Castelao", "Ramón Otero Pedrayo", "Anxel Fole"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 965,
    question: "Quen escribiu 'Devalar'?",
    answers: ["Ramón Otero Pedrayo", "Vicente Risco", "Castelao", "Anxel Fole"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 966,
    question: "Cal é o autor de 'Terra de melancolia'?",
    answers: ["Anxel Fole", "Vicente Risco", "Ramón Otero Pedrayo", "Castelao"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Emilia Pardo Bazán
  {
    id: 967,
    question: "Onde naceu Emilia Pardo Bazán?",
    answers: ["A Coruña", "Santiago", "Vigo", "Ourense"],
    correct: 0,
    category: "escritores",
    difficulty: "easy"
  },
  {
    id: 968,
    question: "Cal é a obra máis famosa de Emilia Pardo Bazán?",
    answers: ["Los Pazos de Ulloa", "La Madre Naturaleza", "Insolación", "Morriña"],
    correct: 0,
    category: "escritores",
    difficulty: "easy"
  },
  {
    id: 969,
    question: "A que corrente literaria pertence Emilia Pardo Bazán?",
    answers: ["Naturalismo", "Realismo", "Romanticismo", "Modernismo"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 970,
    question: "Quen escribiu 'La Madre Naturaleza'?",
    answers: ["Emilia Pardo Bazán", "Rosalía de Castro", "Concepción Arenal", "Carmen de Burgos"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Escritores contemporáneos galegos
  {
    id: 971,
    question: "Quen escribiu 'Memorias dun neno labrego'?",
    answers: ["Xosé Neira Vilas", "Álvaro Cunqueiro", "Manuel Rivas", "Suso de Toro"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 972,
    question: "Cal é o autor de 'As crónicas do sochantre'?",
    answers: ["Álvaro Cunqueiro", "Xosé Neira Vilas", "Manuel Rivas", "Carlos Casares"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 973,
    question: "Quen escribiu 'O lapis do carpinteiro'?",
    answers: ["Manuel Rivas", "Suso de Toro", "Álvaro Cunqueiro", "Carlos Casares"],
    correct: 0,
    category: "escritores",
    difficulty: "easy"
  },
  {
    id: 974,
    question: "Cal é o autor de 'A lingua das bolboretas'?",
    answers: ["Manuel Rivas", "Suso de Toro", "Xosé Neira Vilas", "Carlos Casares"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 975,
    question: "Quen escribiu 'Os outros feirantes'?",
    answers: ["Carlos Casares", "Manuel Rivas", "Suso de Toro", "Álvaro Cunqueiro"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Escritores españois clásicos
  {
    id: 976,
    question: "Quen escribiu 'Don Quixote de la Mancha'?",
    answers: ["Miguel de Cervantes", "Lope de Vega", "Francisco de Quevedo", "Calderón de la Barca"],
    correct: 0,
    category: "escritores",
    difficulty: "easy"
  },
  {
    id: 977,
    question: "Cal é o autor de 'La Celestina'?",
    answers: ["Fernando de Rojas", "Jorge Manrique", "Juan del Encina", "Garcilaso de la Vega"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 978,
    question: "Quen escribiu 'El Lazarillo de Tormes'?",
    answers: ["Anónimo", "Miguel de Cervantes", "Francisco de Quevedo", "Mateo Alemán"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 979,
    question: "Cal é o autor de 'Fuenteovejuna'?",
    answers: ["Lope de Vega", "Calderón de la Barca", "Tirso de Molina", "Juan Ruiz de Alarcón"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 980,
    question: "Quen escribiu 'El Burlador de Sevilla'?",
    answers: ["Tirso de Molina", "Lope de Vega", "Calderón de la Barca", "Juan Ruiz de Alarcón"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Xeración del 98
  {
    id: 981,
    question: "Quen escribiu 'Niebla'?",
    answers: ["Miguel de Unamuno", "Azorín", "Pío Baroja", "Antonio Machado"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 982,
    question: "Cal é o autor de 'El árbol de la ciencia'?",
    answers: ["Pío Baroja", "Miguel de Unamuno", "Azorín", "Valle-Inclán"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 983,
    question: "Quen escribiu 'Campos de Castilla'?",
    answers: ["Antonio Machado", "Juan Ramón Jiménez", "Miguel de Unamuno", "Azorín"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 984,
    question: "Cal é o autor de 'Sonatas'?",
    answers: ["Valle-Inclán", "Pío Baroja", "Miguel de Unamuno", "Azorín"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 985,
    question: "Quen escribiu 'La voluntad'?",
    answers: ["Azorín", "Pío Baroja", "Miguel de Unamuno", "Antonio Machado"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },

  // Xeración del 27
  {
    id: 986,
    question: "Quen escribiu 'Romancero gitano'?",
    answers: ["Federico García Lorca", "Rafael Alberti", "Vicente Aleixandre", "Luis Cernuda"],
    correct: 0,
    category: "escritores",
    difficulty: "easy"
  },
  {
    id: 987,
    question: "Cal é o autor de 'Marinero en tierra'?",
    answers: ["Rafael Alberti", "Federico García Lorca", "Vicente Aleixandre", "Dámaso Alonso"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 988,
    question: "Quen escribiu 'La destrucción o el amor'?",
    answers: ["Vicente Aleixandre", "Luis Cernuda", "Jorge Guillén", "Gerardo Diego"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 989,
    question: "Cal é o autor de 'Donde habite el olvido'?",
    answers: ["Luis Cernuda", "Vicente Aleixandre", "Rafael Alberti", "Pedro Salinas"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 990,
    question: "Quen escribiu 'Cántico'?",
    answers: ["Jorge Guillén", "Pedro Salinas", "Gerardo Diego", "Dámaso Alonso"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },

  // Escritores contemporáneos españois
  {
    id: 991,
    question: "Quen escribiu 'Tiempo de silencio'?",
    answers: ["Luis Martín-Santos", "Juan Benet", "Juan Goytisolo", "Francisco Umbral"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 992,
    question: "Cal é o autor de 'La colmena'?",
    answers: ["Camilo José Cela", "Miguel Delibes", "Carmen Laforet", "Ana María Matute"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 993,
    question: "Quen escribiu 'Cinco horas con Mario'?",
    answers: ["Miguel Delibes", "Camilo José Cela", "Carmen Laforet", "Juan Marsé"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 994,
    question: "Cal é o autor de 'Nada'?",
    answers: ["Carmen Laforet", "Ana María Matute", "Carmen Martín Gaite", "Rosa Chacel"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 995,
    question: "Quen escribiu 'Primera memoria'?",
    answers: ["Ana María Matute", "Carmen Laforet", "Carmen Martín Gaite", "Mercè Rodoreda"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Novela histórica e best-sellers
  {
    id: 996,
    question: "Quen escribiu 'El capitán Alatriste'?",
    answers: ["Arturo Pérez-Reverte", "Antonio Gala", "Fernando Savater", "Javier Marías"],
    correct: 0,
    category: "escritores",
    difficulty: "easy"
  },
  {
    id: 997,
    question: "Cal é o autor de 'La sombra del viento'?",
    answers: ["Carlos Ruiz Zafón", "Arturo Pérez-Reverte", "Javier Sierra", "Matilde Asensi"],
    correct: 0,
    category: "escritores",
    difficulty: "easy"
  },
  {
    id: 998,
    question: "Quen escribiu 'Corazón tan blanco'?",
    answers: ["Javier Marías", "Enrique Vila-Matas", "Antonio Muñoz Molina", "Juan José Millás"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 999,
    question: "Cal é o autor de 'Soldados de Salamina'?",
    answers: ["Javier Cercas", "Isaac Rosa", "Antonio Orejudo", "Belén Gopegui"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1000,
    question: "Quen escribiu 'El tiempo entre costuras'?",
    answers: ["María Dueñas", "Julia Navarro", "Almudena Grandes", "Lucía Etxebarria"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Poesía contemporánea galega
  {
    id: 1001,
    question: "Quen escribiu 'Hai unha gota de sangue en cada palabra'?",
    answers: ["Uxío Novoneyra", "Celso Emilio Ferreiro", "Luís Pimentel", "Xohana Torres"],
    correct: 1,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1002,
    question: "Cal é o autor de 'Os eidos'?",
    answers: ["Uxío Novoneyra", "Celso Emilio Ferreiro", "Manuel María", "Xohana Torres"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1003,
    question: "Quen escribiu 'Tempo de ría'?",
    answers: ["Manuel María", "Uxío Novoneyra", "Celso Emilio Ferreiro", "Luís Pimentel"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1004,
    question: "Cal é a autora de 'Tempo de muller'?",
    answers: ["Xohana Torres", "Luz Pozo Garza", "Pilar Pallarés", "María Xosé Queizán"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1005,
    question: "Quen escribiu 'Concerto de outono'?",
    answers: ["Luz Pozo Garza", "Xohana Torres", "Pilar Pallarés", "María Victoria Moreno"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },

  // Teatro galego
  {
    id: 1006,
    question: "Quen escribiu 'A Santa Compaña'?",
    answers: ["Roberto Vidal Bolaño", "Lauro Olmo", "Manuel Lourenzo", "Euloxio R. Ruibal"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1007,
    question: "Cal é o autor de 'Veladas indecentes'?",
    answers: ["Manuel Lourenzo", "Roberto Vidal Bolaño", "Euloxio R. Ruibal", "Lauro Olmo"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1008,
    question: "Quen escribiu 'O filandón'?",
    answers: ["Alejandro Casona", "Lauro Olmo", "Manuel Lourenzo", "Roberto Vidal Bolaño"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Teatro español contemporáneo
  {
    id: 1009,
    question: "Quen escribiu 'Historia de una escalera'?",
    answers: ["Antonio Buero Vallejo", "Fernando Arrabal", "Francisco Nieva", "José Luis Alonso de Santos"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1010,
    question: "Cal é o autor de 'Pic-nic'?",
    answers: ["Fernando Arrabal", "Antonio Buero Vallejo", "Francisco Nieva", "Alfonso Sastre"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1011,
    question: "Quen escribiu 'Marat/Sade'? (Pregunta trampa - non é español)",
    answers: ["Non é español", "Fernando Arrabal", "Antonio Buero Vallejo", "Francisco Nieva"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Literatura infantil e xuvenil galega
  {
    id: 1012,
    question: "Quen escribiu 'Memorias dun neno labrego'?",
    answers: ["Xosé Neira Vilas", "María Victoria Moreno", "Agustín Fernández Paz", "Fina Casalderrey"],
    correct: 0,
    category: "escritores",
    difficulty: "easy"
  },
  {
    id: 1013,
    question: "Cal é o autor de 'Cartas de inverno'?",
    answers: ["Agustín Fernández Paz", "Xosé Neira Vilas", "María Victoria Moreno", "Fina Casalderrey"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1014,
    question: "Quen escribiu 'A galiña azul'?",
    answers: ["Fina Casalderrey", "María Victoria Moreno", "Agustín Fernández Paz", "Xosé Antonio Neira Cruz"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Ensaio galego
  {
    id: 1015,
    question: "Quen escribiu 'Galicia hoy'?",
    answers: ["Xosé Manuel Beiras", "Ramón Piñeiro", "Francisco Fernández del Riego", "Domingo García-Sabell"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1016,
    question: "Cal é o autor de 'Filosofía da saudade'?",
    answers: ["Ramón Piñeiro", "Vicente Risco", "Domingo García-Sabell", "Francisco Fernández del Riego"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1017,
    question: "Quen escribiu 'Galicia como tarea'?",
    answers: ["Francisco Fernández del Riego", "Ramón Piñeiro", "Domingo García-Sabell", "Xosé Manuel Beiras"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },

  // Premios e recoñecementos
  {
    id: 1018,
    question: "Quen gañou o Premio Cervantes en 1989?",
    answers: ["Camilo José Cela", "Miguel Delibes", "Francisco Umbral", "Ana María Matute"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1019,
    question: "Cal foi o primeiro galego en ganar o Premio Cervantes?",
    answers: ["Camilo José Cela", "Gonzalo Torrente Ballester", "Álvaro Cunqueiro", "Emilia Pardo Bazán"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1020,
    question: "Quen gañou o Premio Nobel de Literatura en 1956?",
    answers: ["Juan Ramón Jiménez", "Vicente Aleixandre", "Camilo José Cela", "José Echegaray"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Revistas e publicacións galegas
  {
    id: 1021,
    question: "Cal foi a revista máis importante da xeración Nós?",
    answers: ["Nós", "Grial", "A Nosa Terra", "Céltiga"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1022,
    question: "Quen fundou a revista 'Grial'?",
    answers: ["Ramón Piñeiro", "Vicente Risco", "Francisco Fernández del Riego", "Domingo García-Sabell"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1023,
    question: "Cal é a revista cultural galega máis longeva?",
    answers: ["Grial", "Nós", "A Nosa Terra", "Céltiga"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Movementos literarios galegos
  {
    id: 1024,
    question: "Cal foi o primeiro movemento literario galego moderno?",
    answers: ["Rexurdimento", "Xeración Nós", "Vangarda", "Posguerra"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1025,
    question: "Que xeración de escritores representou a renovación dos anos 60?",
    answers: ["Xeración dos 60", "Xeración Nós", "Xeración da Republica", "Novísimos"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Tradución e difusión
  {
    id: 1026,
    question: "Quen traduciu 'O Quixote' ao galego?",
    answers: ["Eduardo Blanco-Amor", "Álvaro Cunqueiro", "Xosé Neira Vilas", "Manuel Rivas"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1027,
    question: "Cal foi o primeiro libro traducido ao galego?",
    answers: ["A Biblia", "O Quixote", "Hamlet", "A Ilíada"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },

  // Escritoras galegas contemporáneas
  {
    id: 1028,
    question: "Quen escribiu 'Amor de tango'?",
    answers: ["María Xosé Queizán", "Xohana Torres", "Luz Pozo Garza", "Pilar Pallarés"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1029,
    question: "Cal é a autora de 'A muller no romance galego'?",
    answers: ["María Xosé Queizán", "Kathleen March", "Carmen Blanco", "Dolores Vilavedra"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1030,
    question: "Quen escribiu 'Os anos prohibidos'?",
    answers: ["Xesús Gonzo", "Manuel Rivas", "Suso de Toro", "Carlos Casares"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Literatura de viaxes e memorialística
  {
    id: 1031,
    question: "Quen escribiu 'Viaxe ao país dos ananos'?",
    answers: ["Álvaro Cunqueiro", "Eduardo Blanco-Amor", "Ramón Otero Pedrayo", "Carlos Casares"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1032,
    question: "Cal é o autor de 'A esmorga'?",
    answers: ["Eduardo Blanco-Amor", "Álvaro Cunqueiro", "Carlos Casares", "Ramón Otero Pedrayo"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Crítica literaria galega
  {
    id: 1033,
    question: "Quen escribiu 'Historia da literatura galega contemporánea'?",
    answers: ["Xesús Alonso Montero", "Ramón Piñeiro", "Francisco Fernández del Riego", "Domingo García-Sabell"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1034,
    question: "Cal é o autor de 'Prosa galega'?",
    answers: ["Ramón Piñeiro", "Xesús Alonso Montero", "Francisco Fernández del Riego", "Domingo García-Sabell"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },

  // Escritores galegos no exilio
  {
    id: 1035,
    question: "Onde viviu Castelao durante o exilio?",
    answers: ["Arxentina", "México", "Francia", "Uruguay"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1036,
    question: "Quen escribiu obras no exilio americano?",
    answers: ["Eduardo Blanco-Amor", "Luís Seoane", "Lorenzo Varela", "Todos os anteriores"],
    correct: 3,
    category: "escritores",
    difficulty: "medium"
  },

  // Novela histórica galega
  {
    id: 1037,
    question: "Quen escribiu 'Bretaña, Esmeraldina'?",
    answers: ["Xosé Luís Méndez Ferrín", "Manuel Rivas", "Suso de Toro", "Alfredo Conde"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1038,
    question: "Cal é o autor de 'Arraianos'?",
    answers: ["Alfredo Conde", "Xosé Luís Méndez Ferrín", "Manuel Rivas", "Suso de Toro"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Literatura fantástica galega
  {
    id: 1039,
    question: "Quen escribiu 'Escola de menciñeiros'?",
    answers: ["Álvaro Cunqueiro", "Anxel Fole", "Vicente Risco", "Eduardo Blanco-Amor"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1040,
    question: "Cal é o autor de contos fantásticos como 'Á lus do candil'?",
    answers: ["Anxel Fole", "Álvaro Cunqueiro", "Vicente Risco", "Eduardo Blanco-Amor"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },

  // Últimas preguntas variadas
  {
    id: 1041,
    question: "Quen escribiu 'Ensaio xeral sobre a cultura galega'?",
    answers: ["Domingo García-Sabell", "Ramón Piñeiro", "Vicente Risco", "Francisco Fernández del Riego"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1042,
    question: "Cal é o autor de 'Plenilunio'?",
    answers: ["Antonio Muñoz Molina", "Javier Marías", "Enrique Vila-Matas", "Juan José Millás"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1043,
    question: "Quen escribiu 'Cabo Trafalgar'?",
    answers: ["Arturo Pérez-Reverte", "Javier Sierra", "Matilde Asensi", "Julia Navarro"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1044,
    question: "Cal é a autora de 'Como agua para chocolate'? (Pregunta trampa)",
    answers: ["Non é española", "Laura Esquivel", "Isabel Allende", "Marcela Serrano"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1045,
    question: "Quen escribiu 'El nombre de la rosa'? (Pregunta trampa)",
    answers: ["Non é español", "Umberto Eco", "Arturo Pérez-Reverte", "Carlos Ruiz Zafón"],
    correct: 0,
    category: "escritores",
    difficulty: "easy"
  },
  {
    id: 1046,
    question: "Cal é o autor de 'Beatus ille'?",
    answers: ["Antonio Muñoz Molina", "Javier Marías", "Enrique Vila-Matas", "Juan José Millás"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1047,
    question: "Quen escribiu 'El jinete polaco'?",
    answers: ["Antonio Muñoz Molina", "Javier Marías", "Enrique Vila-Matas", "Juan José Millás"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1048,
    question: "Cal é o autor de 'Bartleby y compañía'?",
    answers: ["Enrique Vila-Matas", "Javier Marías", "Antonio Muñoz Molina", "Juan José Millás"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1049,
    question: "Quen escribiu 'Mañana en la batalla piensa en mí'?",
    answers: ["Javier Marías", "Enrique Vila-Matas", "Antonio Muñoz Molina", "Juan José Millás"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1050,
    question: "Cal é o autor de 'Papel mojado'?",
    answers: ["Juan José Millás", "Javier Marías", "Enrique Vila-Matas", "Antonio Muñoz Molina"],
    correct: 0,
    category: "escritores",
    difficulty: "hard"
  },
  {
    id: 1051,
    question: "Quen escribiu 'Inés y la alegría'?",
    answers: ["Almudena Grandes", "Julia Navarro", "María Dueñas", "Lucía Etxebarria"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1052,
    question: "Cal é a autora de 'Dime quién soy'?",
    answers: ["Julia Navarro", "Almudena Grandes", "María Dueñas", "Lucía Etxebarria"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1053,
    question: "Quen escribiu 'Las hijas del capitán'?",
    answers: ["María Dueñas", "Julia Navarro", "Almudena Grandes", "Lucía Etxebarria"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1054,
    question: "Cal é o autor de 'Patria'?",
    answers: ["Fernando Aramburu", "Javier Cercas", "Isaac Rosa", "Antonio Orejudo"],
    correct: 0,
    category: "escritores",
    difficulty: "easy"
  },
  {
    id: 1055,
    question: "Quen escribiu 'Aquitania'?",
    answers: ["Eva García Sáenz de Urturi", "Dolores Redondo", "Rosa Ribas", "Lorenzo Silva"],
    correct: 0,
    category: "escritores",
    difficulty: "medium"
  },
  {
    id: 1056,
    question: "Cal é o maior legado dos escritores galegos e españois?",
    answers: ["A lingua e cultura preservadas", "A literatura universal", "A identidade nacional", "Todas as anteriores"],
    correct: 3,
    category: "escritores",
    difficulty: "easy"
  },

  // === PREGUNTAS DE POLÍTICA E SOCIEDADE (IDs 1057-1156) ===
  // Historia política de Galicia
  {
    id: 1057,
    question: "Cando se aprobou o Estatuto de Autonomía de Galicia?",
    answers: ["1979", "1980", "1981", "1982"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1058,
    question: "Quen foi o primeiro presidente da Xunta de Galicia?",
    answers: ["Gerardo Fernández Albor", "Manuel Fraga", "Emilio Pérez Touriño", "Fernando González Laxe"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1059,
    question: "En que ano se celebraron as primeiras eleccións autonómicas galegas?",
    answers: ["1979", "1981", "1983", "1985"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1060,
    question: "Cantos presidentes da Xunta tivo Galicia ata 2020?",
    answers: ["4", "5", "6", "7"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "hard"
  },
  {
    id: 1061,
    question: "Quen foi o presidente da Xunta con máis tempo no cargo?",
    answers: ["Manuel Fraga", "Emilio Pérez Touriño", "Alberto Núñez Feijóo", "Gerardo Fernández Albor"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Partidos políticos galegos
  {
    id: 1062,
    question: "Cal é o partido político galego máis antigo?",
    answers: ["BNG", "PSdeG", "PPdeG", "Partido Galeguista"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "hard"
  },
  {
    id: 1063,
    question: "Que significan as siglas BNG?",
    answers: ["Bloque Nacional Galego", "Bloque Nacionalista Galego", "Bloque Nacional de Galicia", "Bloque Novo Galego"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1064,
    question: "Quen fundou o Partido Galeguista?",
    answers: ["Castelao", "Vicente Risco", "Ramón Otero Pedrayo", "Varios nacionalistas"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1065,
    question: "Cal foi o primeiro partido en conseguir maioría absoluta na Xunta?",
    answers: ["AP/PP", "PSdeG", "BNG", "CDS"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1066,
    question: "Cando se creou o BNG?",
    answers: ["1975", "1982", "1987", "1992"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "hard"
  },

  // Institucións galegas
  {
    id: 1067,
    question: "Onde ten a súa sede o Parlamento de Galicia?",
    answers: ["Santiago de Compostela", "A Coruña", "Vigo", "Ourense"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1068,
    question: "Cantos deputados ten o Parlamento de Galicia?",
    answers: ["71", "75", "80", "85"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1069,
    question: "Cal é a sede da Xunta de Galicia?",
    answers: ["Pazo de Raxoi", "Pazo de San Caetano", "Pazo de Miraflores", "Pazo da Moncloa"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1070,
    question: "Que institución galega vela pola defensa dos dereitos dos cidadáns?",
    answers: ["Valedor do Pobo", "Consello de Contas", "Consello Consultivo", "Consello da Cultura Galega"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1071,
    question: "Cal é a función do Consello de Contas de Galicia?",
    answers: ["Control orzamentario", "Asesoramento xurídico", "Promoción cultural", "Defensa de dereitos"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Competencias autonómicas
  {
    id: 1072,
    question: "Cal destas competencias NON ten a Xunta de Galicia?",
    answers: ["Educación", "Sanidade", "Defensa", "Cultura"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1073,
    question: "Quen xestiona a sanidade pública en Galicia?",
    answers: ["SERGAS", "SAS", "SESPA", "SALUD"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1074,
    question: "Cal é o nome do sistema educativo galego?",
    answers: ["Sistema Educativo de Galicia", "Educación Galega", "Consellería de Educación", "Non ten nome específico"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1075,
    question: "Que institución se encarga da promoción da lingua galega?",
    answers: ["Real Academia Galega", "Consello da Cultura Galega", "Secretaría Xeral de Política Lingüística", "Instituto da Lingua Galega"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Historia política española
  {
    id: 1076,
    question: "Cando se aprobou a Constitución española actual?",
    answers: ["1976", "1978", "1979", "1981"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1077,
    question: "Quen foi o primeiro presidente do Goberno democrático tras Franco?",
    answers: ["Adolfo Suárez", "Leopoldo Calvo-Sotelo", "Felipe González", "José María Aznar"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1078,
    question: "En que ano se produciu o intento de golpe de estado do 23-F?",
    answers: ["1979", "1981", "1982", "1983"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1079,
    question: "Cando ingresou España na CEE (actual UE)?",
    answers: ["1982", "1984", "1986", "1988"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1080,
    question: "Quen foi o presidente do Goberno español máis tempo no cargo?",
    answers: ["Felipe González", "José María Aznar", "Mariano Rajoy", "Pedro Sánchez"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Sistema político español
  {
    id: 1081,
    question: "Cal é o nome oficial do Estado español?",
    answers: ["España", "Reino de España", "Estado Español", "Monarquía Española"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1082,
    question: "Cantas comunidades autónomas ten España?",
    answers: ["15", "17", "19", "21"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1083,
    question: "Cal é o parlamento bicameral español?",
    answers: ["Cortes Xerais", "Congreso e Senado", "Parlamento Español", "Asemblea Nacional"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1084,
    question: "Cantos deputados ten o Congreso español?",
    answers: ["300", "350", "400", "450"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1085,
    question: "Cal é a duración do mandato parlamentario en España?",
    answers: ["3 anos", "4 anos", "5 anos", "6 anos"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "easy"
  },

  // Partidos políticos españois
  {
    id: 1086,
    question: "Cal é o partido político español máis antigo en activo?",
    answers: ["PSOE", "PP", "PCE", "PNV"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1087,
    question: "Cando se fundou o PSOE?",
    answers: ["1875", "1879", "1881", "1888"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "hard"
  },
  {
    id: 1088,
    question: "Que partido sucedeu a Alianza Popular?",
    answers: ["PP", "Ciudadanos", "UCD", "CDS"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1089,
    question: "Cando se creou Podemos?",
    answers: ["2012", "2014", "2015", "2016"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1090,
    question: "Quen fundou Ciudadanos?",
    answers: ["Albert Rivera", "Inés Arrimadas", "Carlos Carrizosa", "Un grupo de intelectuais"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Reis e monarquía
  {
    id: 1091,
    question: "Quen é o actual rei de España?",
    answers: ["Juan Carlos I", "Felipe VI", "Alfonso XIII", "Felipe V"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1092,
    question: "Cando abdicou Juan Carlos I?",
    answers: ["2012", "2013", "2014", "2015"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1093,
    question: "Cal é o nome completo de Felipe VI?",
    answers: ["Felipe Juan Pablo Alfonso", "Felipe de Borbón y Grecia", "Felipe Juan Carlos Alfonso", "Felipe de Todos los Santos"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "hard"
  },
  {
    id: 1094,
    question: "Cando foi coroado Felipe VI?",
    answers: ["2013", "2014", "2015", "2016"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Sociedade galega
  {
    id: 1095,
    question: "Cal é a poboación aproximada de Galicia?",
    answers: ["2,5 millóns", "2,7 millóns", "3 millóns", "3,2 millóns"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1096,
    question: "Cal é o principal problema demográfico de Galicia?",
    answers: ["Envellecemento", "Emigración", "Baixa natalidade", "Todos os anteriores"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1097,
    question: "Cal é a provincia galega con maior densidade de poboación?",
    answers: ["A Coruña", "Pontevedra", "Lugo", "Ourense"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1098,
    question: "Que porcentaxe da poboación galega vive en zonas rurais?",
    answers: ["30%", "40%", "50%", "60%"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1099,
    question: "Cal é a idade media da poboación galega?",
    answers: ["42 anos", "46 anos", "48 anos", "52 anos"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "hard"
  },

  // Lingua galega na sociedade
  {
    id: 1100,
    question: "Que porcentaxe da poboación galega fala galego habitualmente?",
    answers: ["40%", "50%", "60%", "70%"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1101,
    question: "En que ámbitos se usa máis o galego?",
    answers: ["Rural e familiar", "Urbano e profesional", "Educativo e cultural", "Todos por igual"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1102,
    question: "Cal é o estatus oficial do galego en Galicia?",
    answers: ["Lingua oficial", "Lingua cooficial", "Lingua propia", "Todas as anteriores"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1103,
    question: "Cando se aprobou a Lei de Normalización Lingüística?",
    answers: ["1981", "1983", "1985", "1987"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "hard"
  },

  // Economía galega
  {
    id: 1104,
    question: "Cal é o sector económico máis importante en Galicia?",
    answers: ["Primario", "Secundario", "Terciario", "Todos por igual"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1105,
    question: "Que empresa galega é líder mundial en téxtil?",
    answers: ["Inditex", "Textil Santanderina", "Adolfo Domínguez", "Purificación García"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1106,
    question: "Cal é o principal porto galego?",
    answers: ["Vigo", "A Coruña", "Ferrol", "Marín"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1107,
    question: "Que porcentaxe do PIB español representa Galicia?",
    answers: ["4%", "5%", "6%", "7%"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "hard"
  },

  // Problemas sociais
  {
    id: 1108,
    question: "Cal é a taxa de desemprego aproximada en Galicia?",
    answers: ["10%", "12%", "15%", "18%"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1109,
    question: "Cal é o principal reto demográfico de Galicia?",
    answers: ["Emigración xuvenil", "Baixa natalidade", "Envellecemento", "Todos os anteriores"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1110,
    question: "Que problema afecta máis ás zonas rurais galegas?",
    answers: ["Despoblamento", "Falta de servizos", "Envellecemento", "Todos os anteriores"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "easy"
  },

  // Cultura política
  {
    id: 1111,
    question: "Cal é o día oficial de Galicia?",
    answers: ["17 de maio", "25 de xullo", "15 de setembro", "6 de decembro"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1112,
    question: "Que se celebra o Día das Letras Galegas?",
    answers: ["A literatura galega", "Un escritor galego", "A lingua galega", "A cultura galega"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1113,
    question: "Cando se celebra o Día das Letras Galegas?",
    answers: ["17 de maio", "25 de xullo", "15 de setembro", "6 de decembro"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Relacións España-Galicia
  {
    id: 1114,
    question: "Cantos deputados galegos hai no Congreso español?",
    answers: ["20", "23", "25", "27"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1115,
    question: "Cantos senadores representa Galicia no Senado?",
    answers: ["12", "16", "18", "20"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "hard"
  },
  {
    id: 1116,
    question: "Cal é o sistema de financiación autonómica de Galicia?",
    answers: ["Réxime común", "Réxime foral", "Réxime especial", "Réxime mixto"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Sociedade española
  {
    id: 1117,
    question: "Cal é a poboación aproximada de España?",
    answers: ["45 millóns", "47 millóns", "49 millóns", "51 millóns"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1118,
    question: "Cal é a comunidade autónoma máis poboada?",
    answers: ["Madrid", "Cataluña", "Andalucía", "Valencia"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1119,
    question: "Cal é a taxa de desemprego aproximada en España?",
    answers: ["10%", "13%", "15%", "18%"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1120,
    question: "Que lingua autonómica ten máis falantes?",
    answers: ["Catalán", "Galego", "Éuscaro", "Valenciano"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Historia recente
  {
    id: 1121,
    question: "Cando se celebrou o referéndum da OTAN?",
    answers: ["1984", "1986", "1988", "1990"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "hard"
  },
  {
    id: 1122,
    question: "En que ano se adoptou o euro en España?",
    answers: ["1999", "2001", "2002", "2003"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1123,
    question: "Cando se celebraron as Olimpíadas de Barcelona?",
    answers: ["1990", "1992", "1994", "1996"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1124,
    question: "En que ano foi a Expo de Sevilla?",
    answers: ["1990", "1992", "1994", "1996"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Institucións españolas
  {
    id: 1125,
    question: "Cal é a sede do Goberno español?",
    answers: ["Palacio Real", "Palacio da Moncloa", "Palacio do Congreso", "Palacio do Senado"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1126,
    question: "Onde ten a súa sede o Tribunal Constitucional?",
    answers: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1127,
    question: "Cal é a función do Consello de Estado?",
    answers: ["Órgano consultivo", "Tribunal superior", "Órgano lexislativo", "Órgano executivo"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "hard"
  },

  // Dereitos e liberdades
  {
    id: 1128,
    question: "Cando se aboliu a pena de morte en España?",
    answers: ["1975", "1978", "1983", "1995"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "hard"
  },
  {
    id: 1129,
    question: "En que ano se aprobou o matrimonio homosexual?",
    answers: ["2003", "2005", "2007", "2009"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1130,
    question: "Cando se aprobou a Lei de Igualdade de Xénero?",
    answers: ["2005", "2007", "2009", "2011"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Relacións internacionais
  {
    id: 1131,
    question: "Cando ingresou España na OTAN?",
    answers: ["1980", "1982", "1984", "1986"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1132,
    question: "España é membro fundador da UE?",
    answers: ["Si", "Non", "Membro fundador da CEE", "Membro desde 1986"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1133,
    question: "Cal é a política exterior española respecto a Gibraltar?",
    answers: ["Soberanía española", "Autonomía británica", "Status quo", "Independencia"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Crises e retos actuais
  {
    id: 1134,
    question: "Cal foi o ano da maior crise económica recente en España?",
    answers: ["2006", "2008", "2010", "2012"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1135,
    question: "Que medidas tomou España durante a crise do COVID-19?",
    answers: ["Estado de alarma", "Confinamento", "ERTEs", "Todas as anteriores"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1136,
    question: "Cal é o principal reto demográfico de España?",
    answers: ["Envellecemento", "Baixa natalidade", "Inmigración", "Todos os anteriores"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "easy"
  },

  // Medios de comunicación
  {
    id: 1137,
    question: "Cal é a televisión pública española?",
    answers: ["TVE", "RTVE", "La 1", "Todas as anteriores"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1138,
    question: "Cal é o diario español de maior tirada?",
    answers: ["El País", "El Mundo", "ABC", "La Vanguardia"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1139,
    question: "Cal é o principal diario galego?",
    answers: ["La Voz de Galicia", "Faro de Vigo", "El Correo Gallego", "Diario de Pontevedra"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "easy"
  },

  // Educación e cultura
  {
    id: 1140,
    question: "Ata que idade é obrigatoria a educación en España?",
    answers: ["14 anos", "15 anos", "16 anos", "18 anos"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1141,
    question: "Cal é a universidade galega máis antiga?",
    answers: ["USC", "UVigo", "UDC", "Universidade de Santiago"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1142,
    question: "Cantas universidades públicas ten Galicia?",
    answers: ["2", "3", "4", "5"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Sanidade e benestar
  {
    id: 1143,
    question: "Cal é o sistema sanitario español?",
    answers: ["Público universal", "Privado", "Mixto", "Por seguros"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1144,
    question: "Cando se creou o sistema sanitario público universal?",
    answers: ["1978", "1982", "1986", "1990"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1145,
    question: "Cal é a esperanza de vida en España?",
    answers: ["80 anos", "82 anos", "84 anos", "86 anos"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Sistema xudicial
  {
    id: 1146,
    question: "Cal é o órgano supremo do poder xudicial español?",
    answers: ["Tribunal Supremo", "Tribunal Constitucional", "Audiencia Nacional", "CGPJ"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1147,
    question: "Onde está situada a Audiencia Nacional?",
    answers: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "medium"
  },

  // Curiosidades políticas
  {
    id: 1148,
    question: "Cal foi o presidente do Goberno máis novo?",
    answers: ["Adolfo Suárez", "Felipe González", "José María Aznar", "Pedro Sánchez"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "hard"
  },
  {
    id: 1149,
    question: "Cantas mocións de censura prosperaron en España?",
    answers: ["0", "1", "2", "3"],
    correct: 1,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1150,
    question: "Quen foi a primeira muller ministra en España?",
    answers: ["Federica Montseny", "Carmen Conde", "Soledad Becerril", "Cristina Alberdi"],
    correct: 0,
    category: "politica_sociedade",
    difficulty: "hard"
  },

  // Últimas preguntas de síntese
  {
    id: 1151,
    question: "Cal é o maior reto político de Galicia?",
    answers: ["Demografía", "Economía", "Lingua", "Todos os anteriores"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1152,
    question: "Que caracteriza o sistema autonómico español?",
    answers: ["Descentralización", "Diversidade", "Complexidade", "Todas as anteriores"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1153,
    question: "Cal é o futuro político de Galicia?",
    answers: ["Maior autonomía", "Statu quo", "Depende dos cidadáns", "Incerto"],
    correct: 2,
    category: "politica_sociedade",
    difficulty: "medium"
  },
  {
    id: 1154,
    question: "Que representa a democracia para España?",
    answers: ["Liberdade", "Dereitos", "Participación", "Todas as anteriores"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1155,
    question: "Cal é a importancia da participación cidadá?",
    answers: ["Fundamental", "Importante", "Necesaria", "Todas as anteriores"],
    correct: 3,
    category: "politica_sociedade",
    difficulty: "easy"
  },
  {
    id: 1156,
    question: "Que legado deixa a democracia española?",
    answers: ["Liberdades", "Dereitos", "Institucións", "Todas as anteriores"],
    correct: 3,
    category: "politica_sociedade",
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
