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
        resolve(data);
      }, 1000);
    }),
  getOne: () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let ues_ = [];
        for (let i = 0; i < 10; i++) {
          ues_.push({
            code_Formation: `formation ${i + 1}`,
            code_Ue: `code ue ${i + 1}`,
            designation: `Désignation`,
            semestre: "semestre 1",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            nbh_Cm: 10,
            nbh_Td: 22,
            nbh_Tp: 22,
            nbh_Etd: 45,
          });
        }
        resolve({
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
