function getData() {
    fetch('data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Traitez les données comme vous le souhaitez
        console.log('Données récupérées du fichier JSON :', data);
        /// ON ECRIT LE CODE ICI ! 
        titreDeLaPage(data);
        theme(data);
        articleRecent(data);
        article(data);
        auteurs(data);

        let detruire = document.querySelector('.detruire')

        detruire.addEventListener("click",destroy);

        for (let i = 0; i < data.magazine.article.length; i++) {
          let btnACTu = document.getElementById(`${i}`);

          btnACTu.addEventListener("click", function() {
              afficher(i);  
          });
        }
        function afficher(index) {
        let articleComplet = document.getElementById('articleComplet');
        let imgArticle = document.getElementById('imgArticle');
        let titreArticle = document.getElementById('titreArticle');
        let titre2Article = document.getElementById('titre2Article');
        let texteArticle = document.getElementById('texteArticle');
        
        let article = data.magazine.article[index];
        let titleACTU = article.titre;
        let dateACTU = article.date;
        let themeACTU = article.theme;
        let imageACTU = article.image;
        let longue_description = article.longue_description;

        imgArticle.src = imageACTU;
        titreArticle.textContent = titleACTU;
        titre2Article.textContent = `${themeACTU} - ${dateACTU}`;
        texteArticle.textContent = longue_description;

        articleComplet.classList.add('articleComplet');
        articleComplet.classList.remove('destroi');
        }
        /// FIN DU CODE
    })
      .catch((error) => console.error('Erreur lors de la lecture des données :', error));
  }
  
  getData();
 
  ///ON écrit les fonctions ici
// fonction pour aficher lapage en entier
    function titreDeLaPage(data){
      let titre = document.getElementById('titre')
      let titre2 = document.getElementById('titre2')
      let PHRASEdacroche = document.getElementById('PHRASEdacroche')
      let titreFoter = document.getElementById('titreFotter')

      let title = data.magazine.title
      let phraseAccroche = data.magazine.phraseAccroche

      titre.textContent = `${title}`  
      titre2.textContent = `${title}`
      PHRASEdacroche.textContent = `${phraseAccroche}`
      titreFoter.textContent = `@ ${title} 2024`
      
    }
    function theme(data){
      let toutLesTheme = document.getElementById('theme')
      data.magazine.themes.forEach(theme => {
        let nom = theme.nom;
        let description = theme.description;

        let themes = `<div class="theme">
          <h2>${nom}</h2>
          <P>${description}</P>
          </div>`

        toutLesTheme.insertAdjacentHTML('beforeend',themes); 
      });
    }
    function articleRecent(data){
        let titleR = document.getElementById('titleRecent')
        let dateR = document.getElementById('themeDateRecent')
        let texteR = document.getElementById('texteRecent')
        let imageR = document.getElementById('imgageRecent')
        let titleRecent = data.magazine.articlePrincipal.titre;
        let dateRecent = data.magazine.articlePrincipal.date;
        let themeRecent = data.magazine.articlePrincipal.theme;
        let descriptionRecent = data.magazine.articlePrincipal.description;
        let imageRecent = data.magazine.articlePrincipal.image;

        titleR.textContent = `${titleRecent}`
        dateR.textContent = `${themeRecent} - ${dateRecent}`
        texteR.textContent = `${descriptionRecent}`
        imageR.src = `${imageRecent}`
    }
    function article(data){
      data.magazine.article.forEach((article, index) => {
        let titleACTU = article.titre;
        let dateACTU = article.date;
        let themeACTU = article.theme;
        let imageACTU = article.image;
        let petite_description = article.petite_description;

        
        let actualites = `<div class="articles">
          <img src="${imageACTU}" alt="">
          <div class="article autre">
              <h1>${titleACTU}</h1>
              <h2>${themeACTU} - ${dateACTU}</h2>
              <p>${petite_description}</p>
              <a class="button primary" id="${index}" href="#${index}">Lire l'article</a>
          </div>
        </div>`;
      
        autreArticle.insertAdjacentHTML('beforeend', actualites); 
    });
    }
    function auteurs(data){
      let auteurs = document.getElementById('equipes');
      data.magazine.auteurs.forEach((auteur) => {
        let name = auteur.prenom;
        let presentation = auteur.presentation;
        let image = auteur.image;

        let presAuteurs =  `<div class="equipe">
        <img src="${image}" alt="">
        <h2>${name}</h2>
        <p>${presentation}</p>
        </div>`
        
        auteurs.insertAdjacentHTML('beforeend', presAuteurs); 
      });
    }
// fuction pour aficher et afaccer lew article

  function destroy(){
    articleComplet.classList.add('destroi');
    articleComplet.classList.remove('articleComplet');
  }
  
    function aficher1(data){
    let articleComplet = document.getElementById('articleComplet')
    let titleACTU = data.magazine.article[1].titre;
    let dateACTU = data.magazine.article[1].date;
    let themeACTU = data.magazine.article[1].theme;
    let imageACTU = data.magazine.article[1].image;
    let longue_description = data.magazine.article[1].longue_description;

    let imgArticle = document.getElementById('imgArticle')
    let titreArticle = document.getElementById('titreArticle')
    let titre2Article = document.getElementById('titre2Article')
    let texteArticle = document.getElementById('texteArticle')


    imgArticle.src = `${imageACTU}`
    titreArticle.textContent = `${titleACTU}`
    titre2Article.textContent = `${themeACTU} - ${dateACTU}`
    texteArticle.textContent = `${longue_description}`


    articleComplet.classList.add('articleComplet')
    articleComplet.classList.remove('destroi');
  }
  function aficher2(data){
    let articleComplet = document.getElementById('articleComplet')
    let titleACTU = data.magazine.article[2].titre;
    let dateACTU = data.magazine.article[2].date;
    let themeACTU = data.magazine.article[2].theme;
    let imageACTU = data.magazine.article[2].image;
    let longue_description = data.magazine.article[2].longue_description;

    let imgArticle = document.getElementById('imgArticle')
    let titreArticle = document.getElementById('titreArticle')
    let titre2Article = document.getElementById('titre2Article')
    let texteArticle = document.getElementById('texteArticle')


    imgArticle.src = `${imageACTU}`
    titreArticle.textContent = `${titleACTU}`
    titre2Article.textContent = `${themeACTU} - ${dateACTU}`
    texteArticle.textContent = `${longue_description}`


    articleComplet.classList.add('articleComplet')
    articleComplet.classList.remove('destroi');
  }
  function aficher3(data){
    let articleComplet = document.getElementById('articleComplet')
    let titleACTU = data.magazine.article[3].titre;
    let dateACTU = data.magazine.article[3].date;
    let themeACTU = data.magazine.article[3].theme;
    let imageACTU = data.magazine.article[3].image;
    let longue_description = data.magazine.article[3].longue_description;

    let imgArticle = document.getElementById('imgArticle')
    let titreArticle = document.getElementById('titreArticle')
    let titre2Article = document.getElementById('titre2Article')
    let texteArticle = document.getElementById('texteArticle')


    imgArticle.src = `${imageACTU}`
    titreArticle.textContent = `${titleACTU}`
    titre2Article.textContent = `${themeACTU} - ${dateACTU}`
    texteArticle.textContent = `${longue_description}`


    articleComplet.classList.add('articleComplet')
    articleComplet.classList.remove('destroi');
  }
  function aficher4(data){
    let articleComplet = document.getElementById('articleComplet')
    let titleACTU = data.magazine.article[4].titre;
    let dateACTU = data.magazine.article[4].date;
    let themeACTU = data.magazine.article[4].theme;
    let imageACTU = data.magazine.article[4].image;
    let longue_description = data.magazine.article[4].longue_description;

    let imgArticle = document.getElementById('imgArticle')
    let titreArticle = document.getElementById('titreArticle')
    let titre2Article = document.getElementById('titre2Article')
    let texteArticle = document.getElementById('texteArticle')


    imgArticle.src = `${imageACTU}`
    titreArticle.textContent = `${titleACTU}`
    titre2Article.textContent = `${themeACTU} - ${dateACTU}`
    texteArticle.textContent = `${longue_description}`


    articleComplet.classList.add('articleComplet')
    articleComplet.classList.remove('destroi');
  }



