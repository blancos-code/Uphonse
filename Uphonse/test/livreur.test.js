const request = require('supertest');
const app = require('../app');

describe('GET /api/livreur/all', () => {
    it('Récupère la liste des livreurs"', (done) => {
        request(app)
            .get('/api/livreur/all')
            .expect(200, done);
    });
});

describe('POST /api/livreur/', () => {
    it('Créé un livreur"', (done) => {
        const livreurData = {
            vehicule: 'vélo supersonique',
            adresse: '4 avenue de la pharmacie rouge',
            localisable: false,
            location: {
                date_time: new Date(),
                coordinates: '666, 69'
            }
        };

        request(app)
            .post('/api/livreur/')
            .send(livreurData)
            .expect(201, done)
    });
});


let livreur = null;
describe('GET /api/livreur/all?filtres', () => {
    it('Récupère la liste des livreurs avec filtres"', (done) => {
        request(app)
            .get('/api/livreur/all')
            .query({localisable: false})
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                livreur = res.body[0];
                done();
            });
    });
});

describe('GET /api/livreur/:id', () => {
    it('Récupère un livreur"', (done) => {
        request(app)
            .get('/api/livreur/' + livreur._id)
            .expect(200, done);
    });
});

describe('PUT /api/livreur/', () => {
    it('Update un livreur"', (done) => {
        request(app)
            .put('/api/livreur/')
            .query({
                _id: livreur._id,
                vehicule: 'trottinette à fusion nucléaire',
                adresse: '3 rue du biberon',
                localisable: false
            })
            .expect(200, done);
    });
});

describe('DELETE /api/livreur/:id', () => {
    it('Supprime un livreur"', (done) => {
        request(app)
            .delete('/api/livreur/' + livreur._id)
            .expect(200, done);
    });
});

