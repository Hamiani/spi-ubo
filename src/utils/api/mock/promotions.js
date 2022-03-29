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
            code_Formation: "M2DOSI",
            annee_Universitaire: "2013-2014",
          },
          sigle_Promotion: "DOSI2022",
          nb_Max_Etudiant: 50,
          date_Reponse_Lp: "04-05-13",
          date_Reponse_Lalp: "19-05-13",
          date_Rentree: "07-09-13",
          lieu_Rentree: "LC117B",
          uniteEnseignementSet: [
            {
              id: {
                code_Formation: "M2DOSI",
                code_Ue: "CO",
              },
              enseignant: {
                no_Enseignant: 5,
                nom: "LAGATTU",
                prenom: "Isabelle",
                sexe: "F",
                type: {
                  abreviation: "MCF",
                  signification: "Maître de Conférences",
                },
                pays: "MA",
                ville: "ModifTest",
                adresse: "6 rue de l'eglise",
                email_Perso: "isabelle.lagattu@gmail.com",
                email_Ubo: "isabelle.lagattu@univ-brest.fr",
                mobile: "+33600008410",
                telephone: "+33643006401",
                code_Postal: "90 000",
                nbh_Cm: null,
                nbh_Td: null,
                nbh_Tp: null,
                nbh_Etd: null,
              },
              designation: "Conception Objet",
              semestre: "9  ",
              description: null,
              nbh_Cm: 20,
              nbh_Td: 20,
              nbh_Tp: 20,
              nbh_Etd: 63.5,
            },
            {
              id: {
                code_Formation: "M2DOSI",
                code_Ue: "ISI",
              },
              enseignant: {
                no_Enseignant: 1,
                nom: "SALIOU",
                prenom: "Philippe",
                sexe: "H",
                type: {
                  abreviation: "MCF",
                  signification: "Maître de Conférences",
                },
                pays: "FR",
                ville: "LE DRENNEC",
                adresse: "6 rue de l'eglise",
                email_Perso: "philippe.saliou@gmail.com",
                email_Ubo: "philippe.saliou@univ-brest.fr",
                mobile: "+33600000100",
                telephone: "+33298016974",
                code_Postal: "29860",
                nbh_Cm: null,
                nbh_Td: null,
                nbh_Tp: null,
                nbh_Etd: null,
              },
              designation: "Ingénierie des Systèmes d'Information",
              semestre: "9  ",
              description: null,
              nbh_Cm: 20,
              nbh_Td: 20,
              nbh_Tp: 20,
              nbh_Etd: 63.5,
            }
          ],
          processus_Stage: '  EVAL',
          commentaire: "Commentaire Test",
          enseignant: {
            no_Enseignant: 1,
            nom: "SALIOU",
            prenom: "Philippe",
            sexe: "H",
            type: {
              abreviation: "MCF",
              signification: "Maître de Conférences",
            },
            pays: "FR",
            ville: "LE DRENNEC",
            adresse: "6 rue de l'eglise",
            email_Perso: "philippe.saliou@gmail.com",
            email_Ubo: "philippe.saliou@univ-brest.fr",
            mobile: "+33600000100",
            telephone: "+33298016974",
            code_Postal: "29860",
            nbh_Cm: null,
            nbh_Td: null,
            nbh_Tp: null,
            nbh_Etd: null,
          },
          etudiantSet: {
            no_Etudiant: 1,
            prenom: "Iure",
          },
          etudiantSet: {
            no_Etudiant: 1,
            prenom: "Iure",
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
      }, 10);
    }),
  create: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: "OK",
        });
      }, 3000);
    }),
};
