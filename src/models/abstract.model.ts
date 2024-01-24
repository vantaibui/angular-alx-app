export abstract class AbstractModel {
    protected id: number | string;
    protected createdAt: number | string;
    protected modifiedAt: number | string;

    constructor(id: number, createdAt: number | string, modifiedAt: number | string) {
        this.id = id;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }

    public getId(): number | string {
        return this.id;
    }

    public setId(id: number | string) {
        this.id = id;
    }

    public getCreatedAt(): number | string {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: number | string) {
        this.createdAt = createdAt;
    }

    public getModifiedAt(): number | string {
        return this.modifiedAt;
    }

    public setModifiedAt(modifiedAt: number | string) {
        this.modifiedAt = modifiedAt;
    }
}
