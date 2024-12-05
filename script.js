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

        let detruire = document.querySelector('.detruire');
        let blur = document.getElementById('blur');
        let btnR = document.getElementById('btnR')


        btnR.addEventListener("click", () => afficherR(data,blur))


        detruire.addEventListener("click",() => destroy(blur));

        for (let i = 0; i < data.magazine.article.length; i++) {
          let btnACTu = document.getElementById(`${i}`);

          btnACTu.addEventListener("click", function() {
                  afficher(i);  

              window.history.pushState({}, '', `?id=${i}`);
          });
        }

        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("id") && urlParams.get("id") === "articlePrincipal") {
          afficherR(data, blur);  // Affiche l'article principal si l'ID est 'articlePrincipal'
      } else if (urlParams.has("id")) {
          const articleId = parseInt(urlParams.get("id"), 10);
          if (!isNaN(articleId) && articleId >= 0 && articleId < data.magazine.article.length) {
              afficher(articleId); 
          } else {
              console.warn("ID d'article invalide ou inexistant.");
          }
      }

      function afficher(index) {
          let body = document.querySelector('body')
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

          body.classList.add('noneScroll')

          blur.classList.add('blur');
          blur.classList.remove('remove');
          
          document.querySelectorAll('.article').forEach(article => {
            article.classList.add('hidden'); // Ajouter une classe pour masquer les autres
        });
      }
    });
}
  
getData();
 
//ON écrit les fonctions ici
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
              <a class="button primary" id="${index}">Lire l'article</a>
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

  function destroy(blur){
    let body = document.querySelector('body')
    body.classList.remove('noneScroll') 

    articleComplet.classList.add('destroi');
    articleComplet.classList.remove('articleComplet');

    blur.classList.add('remove');
    blur.classList.remove('blur');

    window.history.pushState({}, '', `?id=`);
  }

  function afficherR(data,blur){
        let body = document.querySelector('body')
        let articleComplet = document.getElementById('articleComplet');
        let imgArticle = document.getElementById('imgArticle');
        let titreArticle = document.getElementById('titreArticle');
        let titre2Article = document.getElementById('titre2Article');
        let texteArticle = document.getElementById('texteArticle');
         
        
        let article = data.magazine.articlePrincipal;
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

        body.classList.add('noneScroll')

        blur.classList.add('blur');
        blur.classList.remove('remove');


        window.history.pushState({}, '', `?id=articlePrincipal`);
  }


