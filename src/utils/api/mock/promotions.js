export default {
  get: () =>
    new Promise((resolve, reject) => {
      const data = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          id: {
            annee_Universitaire: "2013-2014",
            code_Formation: `M2DOSI${i}`,
          },
          commentaire: null,
          date_Rentree: "2013-09-07",
          date_Reponse_Lalp: "1999-05-05",
          date_Reponse_Lp: "2014-05-04",
          lieu_Rentree: "LC117B",
          nb_Max_Etudiant: 25,
          processus_Stage: "EVAL",
          sigle_Promotion: "BOSS",
          enseignant: {
            no_Enseignant: 0,
            adresse: "Iure ut ut aliquam e",
            code_Postal: "13",
            email_Perso: "ryvycyj@mailinator.com",
            email_Ubo: "kykynu@mailinator.com",
            mobile: "+33615469821",
            nom: "Macha",
            pays: "Maroc",
            prenom: "Sara",
            sexe: "H",
            telephone: "+33615469821",
            type: null,
            ville: "Fes",
          },
        });
      }
      setTimeout(() => {
        resolve([
          {
            id: {
              annee_Universitaire: "2013-2014",
              code_Formation: `M2DOSI7`,
            },
            commentaire: null,
            date_Rentree: "2013-09-07",
            date_Reponse_Lalp: "1999-05-05",
            date_Reponse_Lp: "2014-05-04",
            lieu_Rentree: "LC117B",
            nb_Max_Etudiant: 25,
            processus_Stage: "EVAL",
            sigle_Promotion: "BOSS",
            enseignant: {
              no_Enseignant: 0,
              adresse: "Iure ut ut aliquam e",
              code_Postal: "13",
              email_Perso: "ryvycyj@mailinator.com",
              email_Ubo: "kykynu@mailinator.com",
              mobile: "+33615469821",
              nom: "Macha",
              pays: "Maroc",
              prenom: "Sara",
              sexe: "H",
              telephone: "+33615469821",
              type: null,
              ville: "Fes",
            },
          },
          {
            id: {
              annee_Universitaire: "2014-2015",
              code_Formation: `M2DOSI1`,
            },
            commentaire: null,
            date_Rentree: "2013-09-07",
            date_Reponse_Lalp: "1999-05-05",
            date_Reponse_Lp: "2014-05-04",
            lieu_Rentree: "LC117B",
            nb_Max_Etudiant: 25,
            processus_Stage: "EVAL",
            sigle_Promotion: "BOSS",
            enseignant: {
              no_Enseignant: 0,
              adresse: "Iure ut ut aliquam e",
              code_Postal: "13",
              email_Perso: "ryvycyj@mailinator.com",
              email_Ubo: "kykynu@mailinator.com",
              mobile: "+33615469821",
              nom: "Macha",
              pays: "Maroc",
              prenom: "Sara",
              sexe: "H",
              telephone: "+33615469821",
              type: null,
              ville: "Fes",
            },
          },
          {
            id: {
              annee_Universitaire: "2015-2016",
              code_Formation: `M2DOSI6`,
            },
            commentaire: null,
            date_Rentree: "2013-09-07",
            date_Reponse_Lalp: "1999-05-05",
            date_Reponse_Lp: "2014-05-04",
            lieu_Rentree: "LC117B",
            nb_Max_Etudiant: 25,
            processus_Stage: "EVAL",
            sigle_Promotion: "BOSS",
            enseignant: {
              no_Enseignant: 0,
              adresse: "Iure ut ut aliquam e",
              code_Postal: "13",
              email_Perso: "ryvycyj@mailinator.com",
              email_Ubo: "kykynu@mailinator.com",
              mobile: "+33615469821",
              nom: "Macha",
              pays: "Maroc",
              prenom: "Sara",
              sexe: "H",
              telephone: "+33615469821",
              type: null,
              ville: "Fes",
            },
          },
          {
            id: {
              annee_Universitaire: "2016-2017",
              code_Formation: `M2DOSI75`,
            },
            commentaire: null,
            date_Rentree: "2013-09-07",
            date_Reponse_Lalp: "1999-05-05",
            date_Reponse_Lp: "2014-05-04",
            lieu_Rentree: "LC117B",
            nb_Max_Etudiant: 25,
            processus_Stage: "SOUT",
            sigle_Promotion: "BOSS",
            enseignant: {
              no_Enseignant: 0,
              adresse: "Iure ut ut aliquam e",
              code_Postal: "13",
              email_Perso: "ryvycyj@mailinator.com",
              email_Ubo: "kykynu@mailinator.com",
              mobile: "+33615469821",
              nom: "Macha",
              pays: "Maroc",
              prenom: "Sara",
              sexe: "H",
              telephone: "+33615469821",
              type: null,
              ville: "Fes",
            },
          },
        ]);
      }, 1000);
    }),

  getOne: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id: {
            annee_Universitaire: "2013-2014",
            code_Formation: `M2DOSI`,
          },
          commentaire: null,
          date_Rentree: "2013-09-07",
          date_Reponse_Lalp: "1999-05-05",
          date_Reponse_Lp: "2014-05-04",
          lieu_Rentree: "LC117B",
          nb_Max_Etudiant: 25,
          processus_Stage: "RECH",
          sigle_Promotion: "BOSS",
          enseignant: {
            no_Enseignant: 0,
            adresse: "Iure ut ut aliquam e",
            code_Postal: "13",
            email_Perso: "ryvycyj@mailinator.com",
            email_Ubo: "kykynu@mailinator.com",
            mobile: "+33615469821",
            nom: "Macha",
            pays: "Maroc",
            prenom: "Sara",
            sexe: "H",
            telephone: "+33615469821",
            type: null,
            ville: "Fes",
          },
        });
      }, 1000);
    }),
  changeProcess: () =>
    new Promise((reslove, reject) => {
      const data = {
        code: "OK",
        data: {},
      };
      setTimeout(() => reslove(data), 1000);
    }),
  getSalles: () =>
    new Promise((resolve, reject) => {
      let data = [];

      for (let i = 0; i < 20; i++) {
        data.push({
          code: "salle" + i,
          signification: "Salle" + i,
          abreviation: "salle" + i,
        });
      }
      setTimeout(() => {
        resolve(data);
      }, 1000);
    }),
  create: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          code: "OK",
          ...data,
        };
        resolve(data);
      }, 3000);
    }),
};
