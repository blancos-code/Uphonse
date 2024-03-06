const request = require('supertest');
const app = require('../app');

describe('GET /api/client/all', () => {
    it('Récupère la liste des clients"', (done) => {
        request(app)
            .get('/api/client/all')
            .expect(200, done);
    });

    it('Filtres random"', (done) => {
        request(app)
            .get('/api/client/all?param1=value1&param2=value2')
            .expect(200, done);
    });
});

describe('POST /api/client/', () => {
    it('Créé un client"', (done) => {
        const clientData = {
            nom:  'coucou',
            prenom:  'coucou',
            telephone:  'coucou',
            email:  'coucou',
            adresse:  'coucou',
        };

        request(app)
            .post('/api/client/')
            .send(clientData)
            .expect(201, done)
    });
});


let client = null;
describe('GET /api/client/all?filtres', () => {
    it('Récupère la liste des clients avec filtres"', (done) => {
        request(app)
            .get('/api/client/all')
            .query({
                nom:  'coucou',
                prenom:  'coucou',
                telephone:  'coucou',
                email:  'coucou',
                adresse:  'coucou',
            })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                client = res.body[0];
                done();
            });
    });
});

describe('GET /api/client/:id', () => {
    it('Récupère un client"', (done) => {
        request(app)
            .get('/api/client/' + client._id)
            .expect(200, done);
    });
});

describe('PUT /api/client/', () => {
    it('Update un client"', (done) => {
        request(app)
            .put('/api/client/')
            .query({
                _id: client._id ,
                email: 'jeanne.au.secours@example.com'
            })
            .expect(200, done);
    });
});

describe('DELETE /api/client/:id', () => {
    it('Supprime un client"', (done) => {
        request(app)
            .delete('/api/client/' + client._id)
            .expect(200, done);
    });
});

