var pageCv = getPage("mon-cv");

$(document).ready(function () {

    var contenuProfil = pageCv[0].content.rendered;
    // Je change le contenu de mon profil par le contenu de mon api
    $('.block-profil .block-contenu')[0].innerHTML += contenuProfil;

    var experiences = pageCv[0].acf.experiences;
    for(var key in experiences) {
        
        var experienceDiv = document.createElement("div");
        experienceDiv.className = "block-contenu experience";
        experienceDiv.setAttribute("id", "experience-" + (parseInt(key) + 1));

        var titreExp = experiences[key].titre;
        var dateExp = experiences[key].entreprise + ' | ' + experiences[key].date_debut + ' - ' + experiences[key].date_fin;
        var contenuExp = experiences[key].contenu;

        var contenuExperience = '<h3>\
            ' + titreExp + '\
        </h3>\
        <p class="lieu">\
            ' + dateExp + '\
        </p>\
        '+ contenuExp +'\
        '
        experienceDiv.innerHTML = contenuExperience;

        var blocExperience = $('.block-experiences');
        blocExperience.append(experienceDiv);

    }

    var diplomes = pageCv[0].acf.diplomes;
    for (var key in diplomes) {
        
        var diplomeDiv = document.createElement("div");
        diplomeDiv.className = "col-md-6 diplome";
        diplomeDiv.setAttribute("id", "diplome-" + (parseInt(key) + 1));

        var titreDip = diplomes[key].titre;
        var dateDip = diplomes[key].entreprise + ' | ' + diplomes[key].date_debut + ' - ' + diplomes[key].date_fin;

        var contenuDiplome = '<h3>\
            ' + titreDip + '\
        </h3>\
        <p class="lieu">\
            ' + dateDip + '\
        </p>\
        '
        diplomeDiv.innerHTML = contenuDiplome;

        var blocDiplome = $('.block-diplome .block-contenu .row');

        blocDiplome.append(diplomeDiv);

    }

    var competences = pageCv[0].acf.competences;
    for (var key in competences) {

        var competenceDiv = document.createElement("div");
        competenceDiv.className = "competence";
        competenceDiv.setAttribute("id", "competence-" + (parseInt(key) + 1));

        var imagesComp = competences[key].images.sizes.miniature;
        var notationComp = competences[key].notation;

        var contenuCompetence = '<div class="img-competence">\
            <img src="' + imagesComp + '" alt="Logo HTML">\
        </div>\
        <div class="notation notation-' + notationComp + '">\
            <div class="point-notation"></div>\
            <div class="point-notation"></div>\
            <div class="point-notation"></div>\
            <div class="point-notation"></div>\
        </div>\
        ';

        competenceDiv.innerHTML = contenuCompetence;

        var blocCompetence = $('.block-competences .competences');
        blocCompetence.append(competenceDiv);

    }
});