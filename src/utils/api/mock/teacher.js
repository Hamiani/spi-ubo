export default {
  get: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let data = [];
        for (let i = 0; i < 100; i++) {
          data.push({
            no_Enseignant: `${i}`,
            nom: "saliou",
            prenom: "philippe",
            sexe: "H",
            type: "PRAG",
            pays: "FR",
            ville: "Brest",
            adresse: "Adresse Brest",
            email_Perso: "philippe.saliou@gmail.com",
            email_Ubo: "philippe.saliou@univ_brest.com",
            mobile: "+33 7 43 34 25 76",
            telephone: "+33 6 32 00 85 19",
            code_Postal: "29 200",
            nbh_Etd: 40,
            nbh_Tp: 40,
            nbh_Td: 40,
            nbh_Cm: 40,
          });
        }
        resolve([
          {
            no_Enseignant: `1`,
            nom: "saliou",
            prenom: "philippe",
            sexe: "H",
            type: {
              abreviation: "PRAST",
              code: "PRAST",
              signification: "Professionnel Associé",
            },
            pays: "FR",
            ville: "Brest",
            adresse: "Adresse Brest",
            email_Perso: "philippe.saliou@gmail.com",
            email_Ubo: "philippe.saliou@univ_brest.com",
            mobile: "+33 7 43 34 25 76",
            telephone: "+33 6 32 00 85 19",
            code_Postal: "29 200",
            nbh_Etd: 40,
            nbh_Tp: 40,
            nbh_Td: 40,
            nbh_Cm: 40,
          },
          {
            no_Enseignant: `2`,
            nom: "Lallali",
            prenom: "mounir",
            sexe: "H",
            type: {
              abreviation: "PRAST",
              code: "PRAST",
              signification: "Professionnel Associé",
            },
            pays: "FR",
            ville: "Brest",
            adresse: "Adresse Brest",
            email_Perso: "mounir.Lallali@gmail.com",
            email_Ubo: "mounir.Lallali@univ_brest.com",
            mobile: "+33 7 43 34 25 76",
            telephone: "+33 6 32 00 85 19",
            code_Postal: "29 200",
            nbh_Etd: 192,
            nbh_Tp: 40,
            nbh_Td: 40,
            nbh_Cm: 40,
          },
          {
            no_Enseignant: `3`,
            nom: "Lemarechal",
            prenom: "yannick",
            sexe: "H",
            type: {
              abreviation: "PRAST",
              code: "PRAST",
              signification: "Professionnel Associé",
            },
            pays: "FR",
            ville: "Brest",
            adresse: "Adresse Brest",
            email_Perso: "yannick.Lemarechal@gmail.com",
            email_Ubo: "yannick.Lemarechal@univ_brest.com",
            mobile: "+33 7 43 34 25 76",
            telephone: "+33 6 32 00 85 19",
            code_Postal: "29 200",
            nbh_Etd: 193,
            nbh_Tp: 40,
            nbh_Td: 40,
            nbh_Cm: 40,
          },
          {
            no_Enseignant: `4`,
            nom: "Lemarechal",
            prenom: "yannick",
            sexe: "H",
            type: {
              abreviation: "PRAST",
              code: "PRAST",
              signification: "Professionnel Associé",
            },
            pays: "FR",
            ville: "Brest",
            adresse: "Adresse Brest",
            email_Perso: "yannick.Lemarechal@gmail.com",
            email_Ubo: "yannick.Lemarechal@univ_brest.com",
            mobile: "+33 7 43 34 25 76",
            telephone: "+33 6 32 00 85 19",
            code_Postal: "29 200",
            nbh_Etd: 66,
            nbh_Tp: 40,
            nbh_Td: 40,
            nbh_Cm: 40,
          },
        ]);
      }, 1000);
    }),
  getOne: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          adresse: "45 rue du port",
          code_Postal: "29200",
          email_Perso: "mounir.lallali@gmail.com",
          email_Ubo: "mounir.lallali@univ-brest.fr",
          mobile: "+33600008928",
          nbh_cm: 20,
          nbh_etd: 118,
          nbh_td: 20,
          nbh_tp: 68,
          no_Enseignant: 3,
          nom: "LALLALI",
          pays: "FR",
          prenom: "Mounir",
          sexe: "H",
          telephone: "+33623008928",
          type: {
            abreviation: "PRAST",
            code: "PRAST",
            signification: "Professionnel Associé",
          },
          uniteEnseignementSet: [
            {
              description: null,
              designation: "Environnement de Développement",
              enseignant: {
                adresse: "45 rue du port",
                code_Postal: "29200",
                email_Perso: "mounir.lallali@gmail.com",
                email_Ubo: "mounir.lallali@univ-brest.fr",
                mobile: "+33600008928",
                nbh_Cm: 20,
                nbh_Etd: 118,
                nbh_Td: 20,
                nbh_Tp: 68,
                no_Enseignant: 3,
                nom: "LALLALI",
                pays: "FR",
                prenom: "Mounir",
                sexe: "H",
                telephone: "+33623008928",
                type: {
                  abreviation: "PRAST",
                  signification: "Professionnel Associé",
                },
                ville: " BREST",
              },
              id: {
                code_Formation: "M2DOSI",
                code_Ue: "EDE",
              },
              nbh_Cm: 0,
              nbh_Etd: 48,
              nbh_Td: 0,
              nbh_Tp: 48,
              semestre: "9  ",
            },
            {
              description: null,
              designation: "Langages du WEB",
              enseignant: {
                adresse: "45 rue du port",
                code_Postal: "29200",
                email_Perso: "mounir.lallali@gmail.com",
                email_Ubo: "mounir.lallali@univ-brest.fr",
                mobile: "+33600008928",
                nbh_Cm: 20,
                nbh_Etd: 118,
                nbh_Td: 20,
                nbh_Tp: 68,
                no_Enseignant: 3,
                nom: "LALLALI",
                pays: "FR",
                prenom: "Mounir",
                sexe: "H",
                telephone: "+33623008928",
                type: {
                  abreviation: "PRAST",
                  signification: "Professionnel Associé",
                },
                ville: " BREST",
              },
              id: {
                code_Formation: "M2DOSI",
                code_Ue: "WEB",
              },
              nbh_Cm: 20,
              nbh_Etd: 70,
              nbh_Td: 20,
              nbh_Tp: 20,
              semestre: "9  ",
            },
          ],
          ville: " BREST",
        });
      }, 1000);
    }),

  create: (data) =>
    new Promise((resolve, reject) => {
      console.log(data);
      setTimeout(() => {
        data = {
          ...data,
          code: "OK",
        };
        resolve(data);
      }, 3000);
    }),

  remove: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: "OK",
        });
      }, 1000);
    }),

  getTypes: () =>
    new Promise((resolve, reject) => {
      let data = [];

      for (let i = 0; i < 5; i++) {
        data.push({
          code: "code" + i,
          abreviation: "abrev1" + i,
          signification: "sign1" + i,
        });
      }

      setTimeout(() => {
        resolve(data);
      }, 2000);
    }),

  getPays: () =>
    new Promise((resolve, reject) => {
      let data = [];

      for (let i = 0; i < 5; i++) {
        data.push({
          code: "pays" + i,
          abreviation: "pays" + i,
          signification: "pays" + i,
        });
      }

      setTimeout(() => {
        resolve(data);
      }, 2000);
    }),

  getSexes: () =>
    new Promise((resolve, reject) => {
      let data = [];
      data.push({
        code: "h",
        abreviation: "H",
        signification: "Homme",
      });
      data.push({
        code: "f",
        abreviation: "F",
        signification: "Femme",
      });

      setTimeout(() => {
        resolve(data);
      }, 2000);
    }),
  update: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: "OK",
        });
      }, 1000);
    }),
};
