const profiles = [
  {
    profile_id: 1,
    name: 'Imen',
    lastname: 'Ben rjab',
    email: 'Imen.Benrjab@email.com',
    password: 'dorwssap1'
    
  },
  {
    profile_id: 2,
    name: 'Aymen',
    lastname: 'Ben haj salah',
    email: 'Aymen.Benhajsalah@email.com',
    password: 'dorwssap12'

  },
  {
    profile_id: 3,
    name: 'Mondher',
    lastname: 'El mufti',
    email: 'Mondher.Elmufti@email.com',
    password: 'dorwssap3'

  },
  {
    profile_id: 4,
    name: 'Lotfi',
    lastname: 'Ben attia',
    email: 'Lotfi.Benattia@email.com',
    password: 'dorwssap'

  }
];
exports.seed = function (knex) {
  return knex('profiles').del()
    .then(() => {
      return knex('profiles').insert(profiles)
    })
};