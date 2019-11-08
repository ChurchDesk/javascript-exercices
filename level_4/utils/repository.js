'use strict';

// Data collections

const charactersDB = [
  { id: 1, name: 'Frodo Baggins', raceId: 1 },
  { id: 2, name: 'Sam Gamgee', raceId: 1 },
  { id: 3, name: 'Legolas Greenleaf', raceId: 2 },
  { id: 4, name: 'Arwen Undómiel', raceId: 2 },
  { id: 5, name: 'Elrond Half-elven', raceId: 2 },
  { id: 6, name: 'Aragorn son of Arathorn', raceId: 3 },
  { id: 7, name: 'Gandalf the Grey', raceId: 4 },
  { id: 8, name: 'Saruman the White', raceId: 4 },
]; 

const racesDB = [
  { id: 1, name: 'Hobbits' },
  { id: 2, name: 'Elves' },
  { id: 3, name: 'Humans' },
  { id: 4, name: 'Wizards' }
];

const weaponsDB = [
  { id: 1, name: 'Short sword' },
  { id: 2, name: 'Long sword' },
  { id: 3, name: 'Bow' },
  { id: 4, name: 'Dagger' },
  { id: 5, name: 'Staff' },
  { id: 6, name: 'Iron skillet' }
];

const characterWeaponsDB = [
  { characterId: 1, weaponId: 1 },
  { characterId: 2, weaponId: 6 },
  { characterId: 3, weaponId: 3 },
  { characterId: 3, weaponId: 4 },
  { characterId: 5, weaponId: 3 },
  { characterId: 6, weaponId: 2 },
  { characterId: 6, weaponId: 4 },
  { characterId: 7, weaponId: 5 },
  { characterId: 8, weaponId: 5 }
];

// Repository (data access) functions

const Repository = {};

Repository.getCharacters = (callback) => {
  return new Promise(resolve => {
    setTimeout(
      () => {
        if (typeof callback === 'function') return callback(null, charactersDB);
        return resolve(charactersDB);
      },
      100
    );
  }).catch(error => {
    if (typeof callback === 'function') return callback(error);
    throw error;
  });
};

Repository.getRaces = (callback) => {
  return new Promise(resolve => {
    setTimeout(
      () => {
        if (typeof callback === 'function') return callback(null, racesDB);
        return resolve(racesDB);
      },
      100
    );
  }).catch(error => {
    if (typeof callback === 'function') return callback(error);
    throw error;
  });
};

Repository.getWeapons = (callback) => {
  return new Promise(resolve => {
    setTimeout(
      () => {
        if (typeof callback === 'function') return callback(null, weaponsDB);
        return resolve(weaponsDB);
      },
      100
    );
  }).catch(error => {
    if (typeof callback === 'function') return callback(error);
    throw error;
  });
};

Repository.getCharacterById = (characterId, callback) => {
  return new Promise(resolve => {
    setTimeout(
      () => {
        let character;
        charactersDB.forEach(characterDB => {
          if (characterDB.id === characterId) {
            character = characterDB;
          }
        });
        if (typeof callback === 'function') return callback(null, character);
        return resolve(character);
      },
      100
    );
  }).catch(error => {
    if (typeof callback === 'function') return callback(error);
    throw error;
  });
};

Repository.getRaceById = (raceId, callback) => {
  return new Promise(resolve => {
    setTimeout(
      () => {
        let race;
        racesDB.forEach(raceDB => {
          if (raceDB.id === raceId) {
            race = raceDB;
          }
        });
        if (typeof callback === 'function') return callback(null, race);
        return resolve(race);
      },
      100
    );
  }).catch(error => {
    if (typeof callback === 'function') return callback(error);
    throw error;
  });
};

Repository.getWeaponById = (weaponId, callback) => {
  return new Promise(resolve => {
    setTimeout(
      () => {
        let weapon;
        weaponsDB.forEach(weaponDB => {
          if (weaponDB.id === weaponId) {
            weapon = weaponDB;
          }
        });
        if (typeof callback === 'function') return callback(null, weapon);
        return resolve(weapon);
      },
      100
    );
  }).catch(error => {
    if (typeof callback === 'function') return callback(error);
    throw error;
  });
};

Repository.getCharacterWeapons = (characterId, callback) => {
  return new Promise(resolve => {
    setTimeout(
      () => {
        const characterWeaponIds = [];
        characterWeaponsDB.forEach(characterWeaponDB => {
          if (characterWeaponDB.characterId === characterId) {
            characterWeaponIds.push(characterWeaponDB.weaponId);
          }
        });
        const characterWeapons = [];
        characterWeaponIds.forEach(characterWeaponId => {
          weaponsDB.forEach(weaponDB => {
            if (weaponDB.id === characterWeaponId) {
              characterWeapons.push(weaponDB);
            }
          });
        })
        if (typeof callback === 'function') return callback(null, characterWeapons);
        return resolve(characterWeapons);
      },
      100
    );
  }).catch(error => {
    if (typeof callback === 'function') return callback(error);
    throw error;
  });
};

module.exports = Repository;
