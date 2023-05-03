export interface ITag {
    name: string;
    color: string;
}

export interface IFeature {
    key: string;
    name: string;
    description: string;
    isEnabled: boolean;
    tags: ITag[]
}

export class Feature implements IFeature {
    key: string;
    name: string;
    description: string;
    isEnabled: boolean;
    tags: ITag[];

    constructor(feature: IFeature) {
        this.key = feature.key;
        this.name = feature.name;
        this.description = feature.description;
        this.isEnabled = feature.isEnabled;
        this.tags = feature.tags;
    }    
}

export interface IListItem<TModel> {
    isSelected: boolean;
    model: TModel;
}

export class FeatureListItem implements IListItem<IFeature> {
    isSelected: boolean;
    model: IFeature;

    constructor(model: IFeature) {
        this.model = model;
        this.isSelected = false;
    }
}