import { Model, Schema, model, models } from 'mongoose';
import IInfo from '../interfaces/IInfo';
import AbstractODM from './AbstractODM';

class ProductsODM extends AbstractODM<IInfo> {
  protected schema: Schema;
  protected model: Model<IInfo>;

  constructor() {
    const schema = new Schema<IInfo>({
      url: { type: String, required: true },
      category: { type: String, required: true },
      data: [
        {
          photo: { type: String, required: true },
          description: { type: String, required: true },
          price: { type: String },
          category: { type: String, required: true },
        },
      ],
    });
    super(schema, 'Info');

    this.schema = schema;

    this.model = models.Info || model('Info', this.schema);
  }
  public async create(info: IInfo): Promise<IInfo> {
    return this.model.create({ ...info });
  }

  public async find(url: string, category: string): Promise<IInfo | null> {
    return this.model.findOne({ url, category });
  }

  public async deleteMany(): Promise<{}> {
    return this.model.deleteMany({});
  }
}
export default ProductsODM;
