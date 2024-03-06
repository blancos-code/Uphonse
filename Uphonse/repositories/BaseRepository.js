class BaseRepository {
    constructor(Model) {
        this.Model = Model;
    }

    async create(data) {
        try {
            const document = await this.Model.create(data);
            return document;
        } catch (error) {
            throw error;
        }
    }

    async findAll(query = {}) {
        try {
            const documents = await this.Model.find(query);
            return documents;
        } catch (error) {
            throw error;
        }
    }

    async findOne(query) {
        try {
            const document = await this.Model.findOne(query);
            return document;
        } catch (error) {
            throw error;
        }
    }

    async updateOne(request) {
        try {
            const document = await this.Model.findOneAndUpdate(request.query);
            return document;
        } catch (error) {
            throw error;
        }
    }

    async deleteOne(query) {
        try {
            const document = await this.Model.findOneAndDelete(query);
            return document;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BaseRepository;