import { models, model, isValidObjectId, } from 'mongoose';
class AbstractODM {
    constructor(schema, modelName) {
        this.schema = schema;
        this.modelName = modelName;
        this.model = models[this.modelName] || model(this.modelName, this.schema);
    }
    validateMongoId(id) {
        if (!isValidObjectId(id))
            throw { type: 'typeError', message: 'Invalid mongo id' };
    }
    async create(obj) {
        return this.model.create({ ...obj });
    }
    async get() {
        return this.model.find();
    }
    async find(id) {
        this.validateMongoId(id);
        return this.model.findOne({ _id: id });
    }
    async findOneAndUpdate(id, obj) {
        this.validateMongoId(id);
        return this.model.findOneAndUpdate({ _id: id }, { ...obj }, { new: true });
    }
    async findByIdAndRemove(id) {
        this.validateMongoId(id);
        return this.model.findByIdAndDelete(id);
    }
}
export default AbstractODM;
//# sourceMappingURL=AbstractODM.js.map