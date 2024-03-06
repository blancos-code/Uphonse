const request = require('supertest');
const app = require('../app');

describe('GET /api/fournisseur/all', () => {
    it('Récupère la liste des fournisseurs"', (done) => {
        request(app)
            .get('/api/fournisseur/all')
            .expect(200, done);
    });
});

describe('POST /api/fournisseur/', () => {
    it('Créé un fournisseur"', (done) => {
        const fournisseurData = {
            nom:  'coucou',
            prenom:  'coucou',
            telephone:  'coucou',
            email:  'coucou',
            adresse:  'coucou',
        };

        request(app)
            .post('/api/fournisseur/')
            .send(fournisseurData)
            .expect(201, done)
    });
});


let fournisseur = null;
describe('GET /api/fournisseur/all?filtres', () => {
    it('Récupère la liste des fournisseurs avec filtres"', (done) => {
        request(app)
            .get('/api/fournisseur/all')
            .query(
                {
                    nom:  'coucou',
                    prenom:  'coucou',
                    telephone:  'coucou',
                    email:  'coucou',
                    adresse:  'coucou',
                }
            )
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                fournisseur = res.body[0];
                done();
            });
    });
});

describe('GET /api/fournisseur/:id', () => {
    it('Récupère un fournisseur"', (done) => {
        request(app)
            .get('/api/fournisseur/' + fournisseur._id)
            .expect(200, done);
    });
});

describe('PUT /api/fournisseur/', () => {
    it('Update un fournisseur"', (done) => {
        request(app)
            .put('/api/fournisseur/')
            .query({
                _id: fournisseur._id ,
                email: 'jeanne.au.secours@example.com'
            })
            .expect(200, done);
    });
});

describe('DELETE /api/fournisseur/:id', () => {
    it('Supprime un fournisseur"', (done) => {
        request(app)
            .delete('/api/fournisseur/' + fournisseur._id)
            .expect(200, done);
    });
});

