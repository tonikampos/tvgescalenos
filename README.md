# 🧠 OS ESCALENOS - Trivia Galega TV v2.4.0

Unha aplicación web progresiva (PWA) de trivia e cultura general en galego desenvolvida polo equipo **OS ESCALENOS**. Especialmente deseñada para programa de televisión galego con **556 preguntas** de alta calidade. Pon a proba os teus coñecementos cun xogo divertido e educativo!

## 🌟 Características v2.4.0

### ✅ Funcionalidades principais
- **Xogo de trivia** con **556 preguntas** específicas para programa de televisión galego
- **Sistema de usuarios**: Crear e xestionar múltiples usuarios
- **Configuración personalizada**: Escoller número de preguntas (10-100) por partida
- **Avance automático**: Pasa automaticamente á seguinte pregunta tras responder
- **Sistema de puntuación** gardado por usuario
- **Estatísticas detalladas** do rendemento por usuario
- **Historial de partidas** gardado localmente por usuario
- **Especial énfase na cultura galega**: historia, literatura, xeografía, gastronomía, deportes, música, TVG, personalidades, etc.

### 📺 Categorías específicas para televisión
- **Historia de Galicia** - Datas importantes, personaxes históricos
- **Personaxes ilustres galegos** - Escritores, científicos, artistas
- **Cultura popular e tradicións** - Festas, costumes, mitoloxía
- **Deporte galego** - Figuras, equipos, modalidades tradicionais
- **Xeografía avanzada** - Ríos, montañas, costas, parques naturais
- **Arquitectura e patrimonio** - Monumentos, castelos, mosteiros
- **Gastronomía** - Pratos típicos, viños, produtos locais
- **Cinema e TV galega** - Directores, actores, películas
- **Lingua galega** - Historia, institucións, literatura
- **Economía e industria** - Empresas, sectores económicos
- **Natureza e medio ambiente** - Flora, fauna, espacios protexidos
- **Mitoloxía e lendas** - Criaturas míticas, tradicións orais
- **Camiño de Santiago** - Historia, rutas, simbolos
- **Ciencia e tecnoloxía** - Centros de investigación, innovación
- **Arte e museos** - Coleccións, exposicións, artistas
- **Literatura contemporánea** - Autores modernos, premios
- **Música contemporánea** - Grupos, cantantes, festivais

### ✅ Características PWA
- **Instalable** como aplicación nativa
- **Funcionalidade offline** completa
- **Responsive** - adapta a calquera dispositivo
- **Service Worker** para mellor rendemento
- **Notificacións** de actualizacións

### ✅ Experiencia de usuario
- **Interface moderna** e intuitiva
- **Pantalla de login** con xestión de usuarios
- **Configuración flexible** de partidas
- **Animacións fluídas** e feedback visual
- **Efectos de son** e vibración opcionals
- **Atallos de teclado** para navegación rápida
- **Xestos táctiles** para móbiles

## 📱 Instalación

### Como PWA (Recomendado)
1. Abre a aplicación no navegador
2. Busca o botón "Instalar App" 📱
3. Confirma a instalación
4. A aplicación aparecerá na pantalla de inicio

### Como páxina web
Simplemente abre `index.html` nun navegador moderno.

## 🎮 Como xogar

### 👤 Configuración inicial
1. Introduce o teu nome de usuario
2. Escolle entre usuarios existentes ou crea un novo

### ⚙️ Configuración de partida
- **Número de preguntas**: De 5 a 25 preguntas
- **Dificultade**: Fácil, Medio, Difícil ou Mixto

### Niveis de dificultade

| Nivel | Tempo por pregunta | Puntos base |
|-------|-------------------|-------------|
| 😊 Fácil | 30 segundos | 10 puntos |
| 🤔 Medio | 20 segundos | 15 puntos |
| 😰 Difícil | 15 segundos | 20 puntos |
| 🎲 Mixto | 20 segundos | Variable |

### Sistema de puntuación
- **Puntos base** segundo a dificultade
- **Bonificación por tempo**: +2 puntos por segundo restante
- **Sen penalizacións** por respostas incorrectas

### Controis
- **Rato/Táctil**: Fai clic nas respostas
- **Teclado**: Usa as teclas 1-4 para respostas
- **Espazo**: Pausa/Continúa o xogo
- **Escape**: Pausa o xogo ou volve atrás

## 🗂️ Estrutura do proxecto

```
escalenos/
├── 📄 index.html          # Arquivo principal HTML
├── 📄 manifest.json       # Manifest da PWA
├── 📄 sw.js              # Service Worker
├── 📄 README.md          # Esta documentación
├── 📁 css/
│   └── 📄 styles.css     # Estilos principais
├── 📁 js/
│   ├── 📄 app.js         # Aplicación principal
│   ├── 📄 game.js        # Lóxica do xogo
│   ├── 📄 questions.js   # Base de datos de preguntas
│   └── 📄 storage.js     # Xestión de almacenamento
├── 📁 icons/             # Iconos da PWA (pendente)
└── 📁 .github/
    └── 📄 copilot-instructions.md
```

## 🔧 Configuración e personalización

### Engadir novas preguntas
Edita o arquivo `js/questions.js` e engade obxectos ao array `QUESTIONS_DATABASE`:

```javascript
{
  id: 31,
  question: "A túa pregunta aquí?",
  answers: ["Opción A", "Opción B", "Opción C", "Opción D"],
  correct: 0, // Índice da resposta correcta (0-3)
  category: "historia", // Categoría
  difficulty: "medium" // easy, medium, hard
}
```

### Modificar configuración do xogo
No arquivo `js/game.js`, podes cambiar os parámetros en `gameSettings`:

```javascript
this.gameSettings = {
  easy: { questions: 10, timePerQuestion: 30, points: 10 },
  medium: { questions: 15, timePerQuestion: 20, points: 15 },
  hard: { questions: 20, timePerQuestion: 15, points: 20 }
};
```

### Personalizar estilos
Edita as variables CSS en `css/styles.css`:

```css
:root {
  --primary-color: #4a90e2;
  --secondary-color: #f39c12;
  --success-color: #27ae60;
  /* ... máis variables ... */
}
```

## 🔧 Tecnoloxías utilizadas

- **HTML5** - Estrutura semántica
- **CSS3** - Estilos modernos con variables e animacións
- **JavaScript ES6+** - Lóxica da aplicación
- **Service Worker** - Funcionalidade offline
- **Web App Manifest** - Instalación como PWA
- **LocalStorage** - Almacenamento de datos
- **CSS Grid/Flexbox** - Layout responsive

## 📊 Almacenamento de datos

A aplicación usa `localStorage` para gardar:

- ✅ **Estatísticas do xogador** (puntuacións, precisión, etc.)
- ✅ **Configuración** (son, vibración, tema)
- ✅ **Historial de partidas** (últimas 50 partidas)
- ✅ **Preferencias** do usuario

Todos os datos gárdanse localmente no dispositivo.

## 🌐 Compatibilidade

### Navegadores soportados
- ✅ Chrome/Chromium 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+

### Funcionalidades por navegador
| Funcionalidade | Chrome | Firefox | Safari | Edge |
|---------------|---------|---------|---------|------|
| PWA Install | ✅ | ✅ | ✅ | ✅ |
| Service Worker | ✅ | ✅ | ✅ | ✅ |
| Vibración | ✅ | ✅ | ❌ | ✅ |
| Web Share | ✅ | ❌ | ✅ | ✅ |

## 🛠️ Desenvolvemento

### Requisitos
- Navegador moderno
- Servidor web local (recomendado para probas completas da PWA)

### Probas locais
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

Logo abre `http://localhost:8000` no navegador.

## 📈 Futuras melloras

### Funcionalidades pendentes
- [ ] **Modo multixogador** en tempo real
- [ ] **Categorías específicas** (historia, ciencia, deportes...)
- [ ] **Logros e insignias** por rendemento
- [ ] **Modo de supervivencia** (continúa ata fallar)
- [ ] **Editor de preguntas** para crear propias
- [ ] **Sincronización na nube** de estatísticas
- [ ] **Modo escuro** automático
- [ ] **Internacionalización** (máis linguas)

### Melloras técnicas
- [ ] **Optimización de rendemento**
- [ ] **Accesibilidade** (WCAG 2.1)
- [ ] **Testing automatizado**
- [ ] **CI/CD** pipeline
- [ ] **Analytics** de uso

## 📋 Historial de versións

### v2.3.2 (Xaneiro 2025) 📺
**8 preguntas novas de TVG e cultura popular:**
- ✅ **456+ preguntas totais**: 8 preguntas novas sobre Televisión de Galicia e cultura popular
- ✅ **Series emblemáticas**: Pratos Combinados, Matalobos, Fariña
- ✅ **Presentadores**: Xosé Ramón Gayoso, Roberto Vilar
- ✅ **Actores galegos**: Luis Zahera, Nerea Barros, Antonio Durán 'Morris'
- ✅ **Programas icónicos**: Luar e outras producións da TVG

### v2.3.1 (Xaneiro 2025) 🎶
**8 preguntas adicionais de música galega:**
- ✅ **456+ preguntas totais**: 8 preguntas adicionais de música tradicional e contemporánea galega
- ✅ **Artistas galegos**: Rosa Cedrón, Carlos Núñez, Milladoiro
- ✅ **Festivais específicos**: Sinsal (Illa de San Simón), Festival de Ortigueira
- ✅ **Repertorio tradicional**: Muiñeira, instrumentos tradicionais
- ✅ **Literatura musical**: Cancións baseadas en poemas de Rosalía de Castro

### v2.3.0 (Xaneiro 2025) 🗺️
**10 preguntas novas de xeografía galega:**
- ✅ **448+ preguntas totais**: 10 preguntas novas de xeografía galega
- ✅ **Xeografía específica**: Provincias, ríos, montes, rías, illas
- ✅ **Lugares emblemáticos**: Parque Nacional das Illas Atlánticas, Serra do Courel
- ✅ **Coñecemento territorial**: Capitais, cidades importantes, accidentes xeográficos

### v2.2.0 (Xaneiro 2025) 🎵
**100 preguntas novas de música galega:**
- ✅ **430+ preguntas totais**: 100 preguntas novas sobre música tradicional e contemporánea galega
- ✅ **Música tradicional**: Gaita, muiñeira, alalá, instrumentos tradicionais
- ✅ **Artistas galegos**: Cantautores, grupos folk, música celta, rock galego
- ✅ **Festivais e eventos**: Festival de Ortigueira, eventos musicais galegos
- ✅ **Patrimonio musical**: Himno galego, cancións tradicionais, compositores históricos

### v2.1.0 (Xaneiro 2025) 🎯
**100 preguntas novas de cultura galega:**
- ✅ **440+ preguntas totais**: 100 preguntas novas de nivel medio-alto
- ✅ **Temas especializados**: Xeografía, música, deportes e sociedade galega
- ✅ **Coñecemento profundo**: Preguntas sobre comarcas, personaxes históricos, tradicions
- ✅ **Cultura contemporánea**: Deportistas, músicos e eventos actuais de Galicia
- ✅ **Patrimonio galego**: Mosteiros, castelos, festas e gastronomía tradicional

**Melloras na experiencia de xogo:**
- ✅ **Avance manual**: O usuario controla cando pasar á seguinte pregunta
- ✅ **Sen límite de tempo**: Xogo relaxado sen presión temporal
- ✅ **Feedback visual mellorado**: Indicadores claros de resposta correcta/incorrecta

### v2.0.0 (Xuño 2025) 🚀
**Novas funcionalidades principais:**
- ✅ **Sistema multiusuario**: Crear e xestionar múltiples usuarios
- ✅ **Configuración de partidas**: Escoller número de preguntas (5-25)
- ✅ **Modo mixto de dificultade**: Combina preguntas de todas as dificultades
- ✅ **Estatísticas por usuario**: Historial e estatísticas individuais
- ✅ **100+ preguntas novas**: Total de 230+ preguntas de cultura galega
- ✅ **Interface mellorada**: Login de usuario e configuración de xogo
- ✅ **Almacenamento por usuario**: Cada usuario ten o seu propio progreso

**Melloras técnicas:**
- ✅ Refactorización completa do sistema de almacenamento
- ✅ Integración mellorada entre QuestionsManager e GameEngine
- ✅ Optimización do sistema de preguntas
- ✅ Cache busting para forzar actualizacións

### v1.0.0 (Maio 2025)
**Versión inicial:**
- ✅ 130 preguntas de cultura galega
- ✅ Tres niveis de dificultade
- ✅ Sistema básico de puntuación
- ✅ PWA completamente funcional
- ✅ Funcionalidade offline

## 🤝 Contribución

### Como contribuír
1. Fai un fork do proxecto
2. Crea unha rama para a túa funcionalidade (`git checkout -b feature/novaFuncionalidade`)
3. Commit os cambios (`git commit -am 'Engade nova funcionalidade'`)
4. Push á rama (`git push origin feature/novaFuncionalidade`)
5. Abre un Pull Request

### Guías de contribución
- Usa comentarios en galego
- Segue a convención de nomenclatura existente
- Proba todas as funcionalidades antes de enviar
- Actualiza a documentación se é necesario

## 📄 Licenza

Este proxecto está baixo licenza MIT. Consulta o arquivo `LICENSE` para máis detalles.

## 👨‍💻 Autor

Desenvolvido con ❤️ en Galicia

---

## 🔗 Enlaces útiles

- [Documentación PWA](https://web.dev/progressive-web-apps/)
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)

## 📞 Soporte

Se tes problemas ou suxerencias:
1. Comproba a [documentación](#-como-xogar)
2. Revisa os [problemas coñecidos](#-compatibilidade)
3. Abre un issue no repositorio

---

**¡Que aproveite o xogo! 🧠🎉**
